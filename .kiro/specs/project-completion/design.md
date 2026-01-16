# Design Document

## Overview

This design implements the remaining features to complete the Everia e-commerce application. The solution focuses on enhancing user experience through additional landing page sections, implementing secure authentication with cookie storage, adding elegant toast notifications, protecting sensitive routes, and providing comprehensive documentation.

## Architecture

### Component Structure

```
src/
├── app/
│   ├── page.jsx (Landing Page - enhanced with 2 new sections)
│   ├── dashboard/
│   │   └── page.jsx (Protected with auth check)
│   └── login/
│       └── page.jsx (Enhanced with toast notifications)
├── components/
│   ├── Testimonials.jsx (NEW)
│   ├── Newsletter.jsx (NEW)
│   ├── Navbar.jsx (Enhanced)
│   └── ... (existing components)
├── contexts/
│   └── AuthContext.jsx (Enhanced with cookies)
├── lib/
│   └── cookies.js (NEW - Cookie utilities)
└── hooks/
    └── useProtectedRoute.js (NEW - Route protection hook)
```

### Data Flow

1. **Authentication Flow:**
   - User logs in → Credentials validated → Cookie set → Redirect to home
   - Page loads → Read cookie → Restore auth state
   - User logs out → Cookie cleared → Redirect to login

2. **Route Protection Flow:**
   - User navigates to dashboard → Check auth cookie → Allow/Deny access
   - If denied → Redirect to login with return URL

3. **Toast Notification Flow:**
   - Action triggered → Toast function called → Toast displayed → Auto-dismiss after 3s

## Components and Interfaces

### 1. Testimonials Component

**Purpose:** Display customer reviews and ratings to build trust

**Props:** None (uses static data)

**Structure:**
```typescript
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}
```

**Features:**
- Responsive grid layout (1-3 columns)
- Star ratings display
- Customer photos
- Smooth animations on scroll

### 2. Newsletter Component

**Purpose:** Collect email subscriptions from visitors

**Props:** None

**Structure:**
```typescript
interface NewsletterForm {
  email: string;
}
```

**Features:**
- Email input with validation
- Subscribe button
- Success/error toast on submission
- Responsive design
- Privacy notice

### 3. Enhanced AuthContext

**Purpose:** Manage authentication state with cookie storage

**Interface:**
```typescript
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{success: boolean, error?: string}>;
  logout: () => void;
  loading: boolean;
}

interface User {
  email: string;
  name: string;
}
```

**Cookie Structure:**
```typescript
interface AuthCookie {
  user: User;
  expiresAt: number;
}
```

### 4. Cookie Utilities

**Purpose:** Handle cookie operations safely

**Functions:**
```typescript
function setCookie(name: string, value: string, days: number): void
function getCookie(name: string): string | null
function deleteCookie(name: string): void
function parseCookieValue<T>(value: string): T | null
```

### 5. useProtectedRoute Hook

**Purpose:** Protect routes from unauthenticated access

**Interface:**
```typescript
function useProtectedRoute(redirectTo: string = '/login'): {
  isAuthenticated: boolean;
  isLoading: boolean;
}
```

**Usage:**
```javascript
const { isAuthenticated, isLoading } = useProtectedRoute();

if (isLoading) return <LoadingSpinner />;
if (!isAuthenticated) return null; // Hook handles redirect
```

### 6. Toast Notification System

**Library:** react-hot-toast (lightweight, 3.5KB)

**Configuration:**
```typescript
interface ToastConfig {
  position: 'top-right' | 'bottom-right';
  duration: 3000;
  style: {
    background: string;
    color: string;
  };
}
```

**Usage:**
```javascript
toast.success('Product added successfully!');
toast.error('Failed to add product');
toast.info('You have been logged out');
```

## Data Models

### Cookie Data Model

```typescript
// Stored as JSON string in cookie
interface AuthCookieData {
  user: {
    email: string;
    name: string;
  };
  expiresAt: number; // Unix timestamp
}
```

### Testimonial Data Model

```typescript
interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "Verified Buyer", "Tech Enthusiast"
  image: string; // URL to avatar
  rating: number; // 1-5
  comment: string;
  date: string; // e.g., "2 weeks ago"
}
```

### Newsletter Subscription Model

```typescript
interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Cookie Authentication Persistence
*For any* authenticated user session, if the user closes and reopens the browser within the cookie expiration period, the authentication state should be restored from the cookie.
**Validates: Requirements 3.1, 3.3**

### Property 2: Route Protection Enforcement
*For any* unauthenticated user attempting to access a protected route, the system should redirect to the login page and preserve the intended destination URL.
**Validates: Requirements 2.1, 2.3**

### Property 3: Toast Notification Display
*For any* user action that triggers a toast notification, the toast should appear within 100ms, display for the configured duration, and then auto-dismiss.
**Validates: Requirements 4.1, 4.2, 4.6**

### Property 4: Cookie Expiration Handling
*For any* authentication cookie that has expired, the system should treat the user as unauthenticated and clear the invalid cookie.
**Validates: Requirements 3.4, 3.6**

### Property 5: Landing Page Section Count
*For any* rendering of the landing page, the page should contain exactly 7 content sections (excluding Navbar and Footer).
**Validates: Requirements 1.1**

### Property 6: Newsletter Email Validation
*For any* email input in the newsletter form, the system should validate the email format before allowing submission.
**Validates: Requirements 1.3**

### Property 7: Authentication State Consistency
*For any* authentication state change (login/logout), all components consuming the auth context should reflect the updated state within one render cycle.
**Validates: Requirements 2.4, 3.1**

## Error Handling

### Cookie Operations
- **Cookie disabled:** Fallback to localStorage with warning toast
- **Cookie parse error:** Clear invalid cookie, treat as unauthenticated
- **Cookie expired:** Clear cookie, redirect to login if on protected route

### Route Protection
- **Auth check during loading:** Show loading spinner, prevent flash of protected content
- **Redirect loop prevention:** Track redirect attempts, show error after 3 attempts
- **Missing auth context:** Throw descriptive error in development

### Toast Notifications
- **Duplicate toasts:** Prevent same message from showing multiple times
- **Toast queue overflow:** Limit to 3 visible toasts at once
- **Toast library load failure:** Fallback to console.log with error message

### Newsletter Subscription
- **Invalid email:** Show error toast with validation message
- **Network error:** Show error toast, allow retry
- **Already subscribed:** Show info toast

## Testing Strategy

### Unit Tests
- Cookie utility functions (set, get, delete, parse)
- Email validation logic
- Toast notification triggering
- Auth context state management

### Integration Tests
- Login flow with cookie storage
- Logout flow with cookie clearing
- Protected route access (authenticated vs unauthenticated)
- Newsletter form submission
- Toast notifications on various actions

### Property-Based Tests
Each property test should run minimum 100 iterations and reference its design property.

**Test 1: Cookie Round-Trip**
- Generate random user data
- Set cookie with user data
- Read cookie back
- Verify data matches original
- **Feature: project-completion, Property 1: Cookie Authentication Persistence**

**Test 2: Route Protection Redirect**
- Generate random protected routes
- Attempt access without authentication
- Verify redirect to login occurs
- Verify return URL is preserved
- **Feature: project-completion, Property 2: Route Protection Enforcement**

**Test 3: Toast Auto-Dismiss**
- Trigger random toast types
- Measure display duration
- Verify auto-dismiss occurs within tolerance (±100ms)
- **Feature: project-completion, Property 3: Toast Notification Display**

**Test 4: Cookie Expiration**
- Set cookie with past expiration
- Attempt to read cookie
- Verify treated as unauthenticated
- Verify cookie is cleared
- **Feature: project-completion, Property 4: Cookie Expiration Handling**

**Test 5: Landing Page Section Count**
- Render landing page
- Count rendered sections (excluding Navbar/Footer)
- Verify count equals 7
- **Feature: project-completion, Property 5: Landing Page Section Count**

**Test 6: Email Validation**
- Generate random valid and invalid emails
- Submit to newsletter form
- Verify valid emails accepted, invalid rejected
- **Feature: project-completion, Property 6: Newsletter Email Validation**

### Manual Testing Checklist
- [ ] Login with demo credentials, verify cookie set
- [ ] Close browser, reopen, verify still logged in
- [ ] Access dashboard without login, verify redirect
- [ ] Add product, verify success toast
- [ ] Delete product, verify success toast
- [ ] Subscribe to newsletter, verify toast
- [ ] Test all 7 landing page sections display correctly
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Verify navbar products link works
- [ ] Test logout, verify cookie cleared

## Implementation Notes

### Cookie Security Considerations
- Use `SameSite=Lax` to prevent CSRF attacks
- Set `Secure` flag in production (HTTPS only)
- Use `HttpOnly=false` (need JavaScript access for client-side auth)
- Implement cookie encryption for sensitive data (future enhancement)

### Toast Notification Best Practices
- Use semantic colors (green=success, red=error, blue=info)
- Keep messages concise (max 50 characters)
- Provide actionable feedback when possible
- Avoid toast spam (debounce rapid actions)

### Landing Page Section Order
1. Hero
2. Featured Products
3. Best Sellers
4. Discount/Flash Sale
5. Testimonials (NEW)
6. Newsletter (NEW)
7. Why Choose Us

### README Structure
```markdown
# Everia - Premium Gadget E-Commerce

## Description
[Project overview]

## Features
[Bullet list of features]

## Tech Stack
[Technologies used]

## Setup Instructions
[Step-by-step setup]

## Routes
[Table of all routes]

## Demo Credentials
[Login credentials]

## Project Structure
[Directory structure]

## License
[License info]
```
