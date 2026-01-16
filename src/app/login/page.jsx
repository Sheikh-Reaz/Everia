"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = login(email, password);
    
    if (!result.success) {
      setError(result.error);
      setLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setEmail("demo@everia.com");
    setPassword("demo123");
    setError("");
  };
  return (
    <main className="flex min-h-screen w-full flex-col lg:flex-row bg-[#f8f7f7] dark:bg-[#171311] font-display text-[#2d221b] selection:bg-[#2d221b]/10">
      {/* Left Side: Editorial Hardware Image - visible only on lg+ */}
      <section className="relative hidden w-1/2 lg:flex items-center justify-center bg-zinc-900 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-90 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1i96nG9ve5cOXecrIdzjqaECv2FwITV60ekRaQhLMUCQNo5hVilMwb_8UyDuJIb3am4ov3tsMfpQimAdY97QMKsgENm36bhAFpsrQsuhF5ne5DKgu_aGokzwiVyCPkv74IKP_at2_ijnXPMzZbdgvAkjsjmbHq528f75JBni8r8lVbam3zygRIsWqhDfauqXunOuZi14n_0ndtnw6CBhcJ59suZin48aO6-e7moF61kK7Zx9J_kC8kK2qNvCmxbPeZiV1D4VqUU4')",
          }}
          aria-label="Editorial photograph of VR headset with dramatic cinematic lighting"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d221b]/60 to-transparent" />

        <div className="relative z-10 p-20 flex flex-col justify-between h-full w-full">
          <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity w-fit">
            <div className="size-6">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-widest uppercase">Everia</span>
          </Link>

          <div className="max-w-md">
            <p className="text-white/60 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              The Flagship Series
            </p>
            <h3 className="text-white text-5xl font-light leading-tight">
              Sculpted for the senses. Engineered for reality.
            </h3>
          </div>
        </div>
      </section>

      {/* Right Side: Form */}
      <section className="flex flex-1 flex-col items-center justify-center px-8 py-12 lg:px-24 bg-[#f8f7f7] dark:bg-[#171311]">
        {/* Mobile-only brand header */}
        <Link href="/" className="lg:hidden mb-12 flex items-center gap-3 hover:opacity-80 transition-opacity w-fit">
          <div className="size-6 text-[#2d221b] dark:text-white">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-widest uppercase dark:text-white">
            Everia
          </h2>
        </Link>

        <div className="w-full max-w-[420px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#2d221b] dark:text-white text-4xl lg:text-5xl font-black leading-none tracking-tighter uppercase">
              Welcome<br />Back
            </h1>
            <p className="text-[#2d221b]/60 dark:text-white/60 text-sm font-medium tracking-wide">
              Enter your credentials to access the metaverse.
            </p>
            
            {/* Demo Credentials Info with Auto-fill Button */}
            <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl border-2 border-orange-200 dark:border-orange-800 shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <p className="text-[#2d221b] dark:text-white text-xs font-bold mb-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    Quick Demo Access
                  </p>
                  <p className="text-[#2d221b]/70 dark:text-white/70 text-xs">
                    Click the button below to auto-fill demo credentials
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-bold tracking-wider uppercase py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fill Demo Credentials
              </button>
              <div className="mt-3 pt-3 border-t border-orange-200 dark:border-orange-800">
                <p className="text-[#2d221b]/60 dark:text-white/60 text-[10px] font-medium">
                  <span className="font-bold">Email:</span> demo@everia.com<br />
                  <span className="font-bold">Password:</span> demo123
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="text-[#2d221b]/40 dark:text-white/40 text-[10px] font-bold tracking-widest uppercase">
                Email Address
              </p>
              <input
                className="brutalist-input w-full bg-transparent text-[#2d221b] dark:text-white text-base py-3 font-normal placeholder:text-[#2d221b]/40 dark:placeholder:text-white/40"
                placeholder="name@domain.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <p className="text-[#2d221b]/40 dark:text-white/40 text-[10px] font-bold tracking-widest uppercase">
                  Password
                </p>
                <a
                  href="#"
                  className="text-[#2d221b]/60 dark:text-white/60 text-[10px] font-bold tracking-widest uppercase hover:text-[#2d221b] dark:hover:text-white underline decoration-1 underline-offset-4"
                >
                  Forgot?
                </a>
              </div>
              <input
                className="brutalist-input w-full bg-transparent text-[#2d221b] dark:text-white text-base py-3 font-normal placeholder:text-[#2d221b]/40 dark:placeholder:text-white/40"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full items-center justify-center bg-[#2d221b] text-white h-14 rounded-lg overflow-hidden transition-all hover:bg-[#2d221b]/95 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-xs font-bold tracking-[0.25em] uppercase">
                  {loading ? "Signing In..." : "Sign In"}
                </span>
                {!loading && (
                  <ArrowRight className="absolute right-6 size-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                )}
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-[#2d221b]/40 dark:text-white/40 text-[11px] font-medium tracking-wide">
              New to Everia?
              <a
                href="#"
                className="text-[#2d221b] dark:text-white font-bold ml-1 hover:underline decoration-1 underline-offset-4 uppercase tracking-tighter"
              >
                Create an Account
              </a>
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-20 flex gap-6 text-[10px] text-[#2d221b]/30 dark:text-white/30 uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-[#2d221b] dark:hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#2d221b] dark:hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#2d221b] dark:hover:text-white transition-colors">
            Support
          </a>
        </div>
      </section>
    </main>
  );
}
