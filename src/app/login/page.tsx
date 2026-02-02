"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'guest' | 'planner' | 'vendor' | 'host'>('guest');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Mock Authentication Logic
        setTimeout(() => {
            if (activeTab === 'guest') {
                router.push("/microsite/1/guest"); // Redirect to demo guest microsite
            } else if (activeTab === 'planner') {
                router.push("/dashboard");
            } else if (activeTab === 'host') {
                router.push("/microsite/1/host"); // Redirect to demo host microsite
            } else {
                router.push("/vendor"); // Redirect to new Vendor Portal
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full flex bg-background-light dark:bg-background-dark">
            {/* Left Side - Visuals (50% width on Desktop) */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-cover bg-center animate-ken-burns opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjuMWlpZ6S_NuQvvaauflXZGy1oqUIjMj34TxKDjdJJyRr1rshfGX2Kpxw7MGXn2_R8BmUgRLBOmOGFX0MFgQtnLMXxxcICIoCMgfM1Lj9eIBQzQyynNQ-Rl_6Y-CwqW-k1EsT5b6FIICajXP__BGXjLdoL7YP0lB7ujQfQwLnR2fLGjOeOsTkC0wZ2azbst_Wvml-b9IiWOVeIECvGUG9FwyvdhYb6TjKDFbSEaxxxvzuemWwGVfXzVA3wl6UThsQubqJVo-yCx4')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

                <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-emerald-teal text-white flex items-center justify-center font-serif font-bold italic text-xl">T</div>
                        <span className="text-xl font-bold font-serif italic tracking-tight">TBO Atelier</span>
                    </div>

                    <div className="max-w-md">
                        <h1 className="text-5xl font-display font-medium leading-tight mb-6">
                            {activeTab === 'guest' && "Your Personal Journey Awaits."}
                            {activeTab === 'planner' && "Orchestrate Elegance."}
                            {activeTab === 'host' && "Your Event. Your Control."}
                            {activeTab === 'vendor' && "Partner with Excellence."}
                        </h1>
                        <p className="text-lg opacity-70 font-light">
                            {activeTab === 'guest' && "Access your itinerary, travel details, and digital concierge."}
                            {activeTab === 'planner' && "The all-in-one command center for world-class event production."}
                            {activeTab === 'host' && "Track guests, manage budget, and approve key decisions."}
                            {activeTab === 'vendor' && "Connect with top luxury planners and manage your bookings."}
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <div className={`h-1 rounded-full transition-all duration-500 ${activeTab === 'guest' ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}></div>
                        <div className={`h-1 rounded-full transition-all duration-500 ${activeTab === 'planner' ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}></div>
                        <div className={`h-1 rounded-full transition-all duration-500 ${activeTab === 'host' ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}></div>
                        <div className={`h-1 rounded-full transition-all duration-500 ${activeTab === 'vendor' ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}></div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form (50% width on Desktop, 100% on Mobile) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white dark:bg-[#121212] transition-colors">
                <div className="w-full max-w-md space-y-8">

                    {/* Mobile Header (Only visible on small screens) */}
                    <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
                        <div className="size-8 rounded-full bg-emerald-teal text-white flex items-center justify-center font-serif font-bold italic">T</div>
                        <span className="text-lg font-bold font-serif italic tracking-tight text-charcoal-ink dark:text-white">TBO</span>
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-display font-bold text-charcoal-ink dark:text-white mb-2">Welcome Back</h2>
                        <p className="text-charcoal-ink/60 dark:text-white/40 text-sm">Please login to access your portal.</p>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex p-1 bg-charcoal-ink/5 dark:bg-white/5 rounded-xl gap-1">
                        <button
                            onClick={() => setActiveTab('guest')}
                            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'guest' ? 'bg-white dark:bg-white/10 text-emerald-teal shadow-sm' : 'text-charcoal-ink/40 dark:text-white/40 hover:text-charcoal-ink dark:hover:text-white'}`}
                        >
                            Guest
                        </button>
                        <button
                            onClick={() => setActiveTab('planner')}
                            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'planner' ? 'bg-white dark:bg-white/10 text-amber-600 shadow-sm' : 'text-charcoal-ink/40 dark:text-white/40 hover:text-charcoal-ink dark:hover:text-white'}`}
                        >
                            Planner
                        </button>
                        <button
                            onClick={() => setActiveTab('host')}
                            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'host' ? 'bg-white dark:bg-white/10 text-slate-800 shadow-sm' : 'text-charcoal-ink/40 dark:text-white/40 hover:text-charcoal-ink dark:hover:text-white'}`}
                        >
                            Host
                        </button>
                        <button
                            onClick={() => setActiveTab('vendor')}
                            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'vendor' ? 'bg-white dark:bg-white/10 text-purple-600 shadow-sm' : 'text-charcoal-ink/40 dark:text-white/40 hover:text-charcoal-ink dark:hover:text-white'}`}
                        >
                            Vendor
                        </button>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {activeTab === 'guest' ? (
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Event Access Code</label>
                                <input
                                    type="text"
                                    placeholder="ENTER CODE"
                                    className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-5 py-4 text-center font-mono text-lg tracking-[0.5em] uppercase placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                    required
                                />
                                <p className="text-[10px] text-center text-charcoal-ink/40 dark:text-white/30 pt-2">Check your physical invite or email for your 4-digit code.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-charcoal-ink dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Password</label>
                                        <Link href="#" className="text-xs text-charcoal-ink/40 hover:text-charcoal-ink dark:text-white/40 dark:hover:text-white transition-colors">Forgot?</Link>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-charcoal-ink dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <button
                            disabled={loading}
                            className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg transition-all hover:-translate-y-1 active:scale-95 text-white
                            ${activeTab === 'guest' ? 'bg-emerald-teal shadow-emerald-teal/20 hover:bg-emerald-600' : ''}
                            ${activeTab === 'planner' ? 'bg-amber-500 text-background-dark shadow-amber-500/20 hover:bg-amber-400' : ''}
                            ${activeTab === 'host' ? 'bg-slate-900 shadow-slate-900/20 hover:bg-slate-800' : ''}
                            ${activeTab === 'vendor' ? 'bg-purple-600 shadow-purple-600/20 hover:bg-purple-500' : ''}
                        `}
                        >
                            {loading ? "Authenticating..." : "Login"}
                        </button>
                    </form>

                    <div className="pt-8 text-center border-t border-charcoal-ink/5 dark:border-white/5">
                        <p className="text-[10px] text-charcoal-ink/40 dark:text-white/30 uppercase tracking-widest">
                            Don&apos;t have an account? <Link href="/register" className="text-charcoal-ink dark:text-white font-bold hover:underline">Register Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
