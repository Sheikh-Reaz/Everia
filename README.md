# Everia - Modern E-Commerce Platform

A sleek, modern e-commerce platform built with Next.js 16, React 19, and Tailwind CSS 4, featuring smooth animations, responsive design, and a comprehensive product management system.

## Project Description

Everia is a full-featured e-commerce web application specializing in premium tech gadgets and electronics. The platform offers a seamless shopping experience with dynamic product filtering, an admin dashboard for inventory management, user authentication, and engaging UI animations powered by GSAP.

## Setup & Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. Clone the repository
```bash
git clone <repository-url>
cd everia
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser

Navigate to http://localhost:3000 to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Route Summary

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section, featured products, best sellers, testimonials, and newsletter |
| `/products` | Product catalog with filtering by category and price range |
| `/products/[id]` | Individual product detail page (dynamic route) |
| `/dashboard` | Admin dashboard for product management (add, view, delete products) |
| `/contact` | Contact page with form, business hours, and FAQ section |
| `/about` | About page with company information |
| `/login` | User authentication page |
| `/gaming` | Gaming products category page |
| `/vr` | VR headsets category page |

## Implemented Features

### Home Page
- Hero Section: Eye-catching landing section with call-to-action
- Featured Products: Showcase of highlighted products
- Best Sellers: Display of top-selling items
- Discount Section: Special offers and promotions
- Testimonials: Customer reviews and feedback
- Newsletter Signup: Email subscription form
- Why Choose Us: Value propositions and benefits

### Product Management
- Product Catalog: Browse all available products
- Advanced Filtering: Filter by category (Smartphones, Headphones, Smartwatches, Earbuds, Power Banks, Gaming, VR)
- Price Range Filter: Filter products by price brackets ($0-$100, $100-$300, $300-$500, $500+)
- Product Details: Individual product pages with full specifications
- Stock Status: Real-time inventory tracking (In Stock, Low Stock, Out of Stock)
- Rating System: Star ratings for products
- Discount Badges: Visual indicators for sale items

### Admin Dashboard
- Product CRUD Operations: Add, view, and delete products
- Inventory Management: Track stock levels and status
- Statistics Dashboard: Overview of products, revenue, customers, and orders
- Form Validation: Required fields and data validation
- Real-time Updates: Instant reflection of changes across the platform
- Responsive Tables: Mobile-friendly product listing

### Authentication System
- User Login: Demo authentication system
- Session Management: Persistent login state using localStorage
- Protected Routes: Conditional rendering based on auth status
- Demo Credentials: Email: demo@everia.com, Password: demo123

### UI/UX Features
- Smooth Scrolling: GSAP-powered smooth scroll animations
- Responsive Design: Mobile-first approach, works on all screen sizes
- Modern UI Components: Custom-built components using shadcn/ui patterns
- Interactive Elements: Hover effects, transitions, and animations
- Path Detection: Dynamic navigation based on current route
- Conditional Layout: Different layouts for login vs. main pages

### Design System
- Tailwind CSS 4: Utility-first styling with custom configuration
- Custom Fonts: Geist Sans, Geist Mono, Manrope, Oswald, Space Grotesk, Noto Sans
- Color Scheme: Orange accent colors with neutral grays
- Consistent Spacing: Standardized padding and margins
- Typography Scale: Hierarchical text sizing

### Technical Features
- Context API: Global state management for products and authentication
- Local Storage: Persistent data storage for products and user sessions
- Dynamic Routing: Next.js App Router with dynamic segments
- Client Components: Interactive React components with "use client" directive
- Lucide Icons: Modern icon library integration
- Form Handling: Controlled components with validation

## Technologies Used

- Framework: Next.js 16.1.1 (App Router)
- React: 19.2.3
- Styling: Tailwind CSS 4
- Animations: GSAP 3.14.2
- Icons: Lucide React
- Fonts: Google Fonts (Geist, Manrope, Oswald, Space Grotesk, Noto Sans)
- Linting: ESLint with Next.js config

## Key Features Explained

### Product Context Provider
Manages global product state with localStorage persistence. Supports adding, updating, and deleting products with automatic discount calculation.

### Authentication Context
Provides user authentication with demo credentials. Manages login/logout functionality and persists user sessions across page reloads.

### Smooth Scroll Component
Implements GSAP ScrollSmoother for buttery-smooth scrolling animations throughout the site.

### Path Detector
Monitors route changes and can trigger route-specific behaviors or analytics.

### Responsive Navigation
Conditional navbar rendering that hides on the login page and adapts to different screen sizes.

### Dynamic Product Filtering
Real-time filtering system that updates the product grid based on category and price range selections without page reloads.

### Admin Dashboard Statistics
Displays key metrics including total products, revenue, customer count, and order statistics with percentage changes.

---

Built with Next.js and React
