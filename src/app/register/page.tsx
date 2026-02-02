"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Calendar, User, Briefcase } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<'host' | 'planner' | 'vendor' | null>(null);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Mock Registration Logic
        setTimeout(() => {
            if (selectedRole === 'host') {
                router.push("/prebookingmice/basicinfo"); // Redirect to Host View
            } else if (selectedRole === 'planner') {
                router.push("/dashboard");
            } else {
                router.push("/vendor"); // Redirect to Vendor Portal
            }
            setLoading(false);
        }, 1500);
    };

    const resetSelection = () => {
        setSelectedRole(null);
        setStep(1);
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
                            {selectedRole === 'host' ? "Create Your Masterpiece." :
                                selectedRole === 'planner' ? "Curate Exceptional Events." :
                                    selectedRole === 'vendor' ? "Showcase Your Craft." :
                                        "Begin Your Journey."}
                        </h1>
                        <p className="text-lg opacity-70 font-light">
                            {selectedRole === 'host' ? "Plan weddings, MICE, and celebrations with precision tools." :
                                selectedRole === 'planner' ? "Access the ultimate command center for professional event designers." :
                                    selectedRole === 'vendor' ? "Connect with elite planners and manage high-value bookings." :
                                        "Join the ecosystem where luxury meets logistics. Select your role to get started."}
                        </p>
                    </div>

                    <div className="flex gap-2">
                        {/* Dynamic Progress Indicator */}
                        <div className={`h-1 rounded-full transition-all duration-500 ${!selectedRole ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}></div>
                        <div className={`h-1 rounded-full transition-all duration-500 ${selectedRole ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}></div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form (50% width on Desktop) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white dark:bg-[#121212] transition-colors relative">

                {/* Back Button (Only visible when role is selected) */}
                {selectedRole && (
                    <button
                        onClick={resetSelection}
                        className="absolute top-8 left-8 lg:top-12 lg:left-12 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-charcoal-ink dark:text-white"
                    >
                        <ArrowLeft className="size-5" />
                    </button>
                )}

                <div className="w-full max-w-md space-y-8">

                    {/* Mobile Header */}
                    <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
                        <div className="size-8 rounded-full bg-emerald-teal text-white flex items-center justify-center font-serif font-bold italic">T</div>
                        <span className="text-lg font-bold font-serif italic tracking-tight text-charcoal-ink dark:text-white">TBO</span>
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-display font-bold text-charcoal-ink dark:text-white mb-2">
                            {selectedRole ? `Register as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}` : "Create Account"}
                        </h2>
                        <p className="text-charcoal-ink/60 dark:text-white/40 text-sm">
                            {selectedRole ? "Fill in your details to access the simplified portal." : "Choose your role to customize your experience."}
                        </p>
                    </div>

                    {!selectedRole ? (
                        /* Step 1: Role Selection */
                        <div className="space-y-4">
                            <button
                                onClick={() => setSelectedRole('host')}
                                className="w-full group relative flex items-center gap-4 p-6 text-left border border-charcoal-ink/10 dark:border-white/10 rounded-2xl hover:border-slate-800 dark:hover:border-slate-500 hover:shadow-lg hover:shadow-slate-900/5 transition-all bg-white dark:bg-white/5"
                            >
                                <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:scale-110 transition-transform">
                                    <User className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal-ink dark:text-white text-lg">Event Host</h3>
                                    <p className="text-xs text-charcoal-ink/50 dark:text-white/40 mt-1">For individuals organizing weddings, parties, or corporate MICE.</p>
                                </div>
                                <ArrowRight className="absolute right-6 text-charcoal-ink/20 group-hover:text-slate-600 transition-colors" />
                            </button>

                            <button
                                onClick={() => setSelectedRole('planner')}
                                className="w-full group relative flex items-center gap-4 p-6 text-left border border-charcoal-ink/10 dark:border-white/10 rounded-2xl hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all bg-white dark:bg-white/5"
                            >
                                <div className="size-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                                    <Briefcase className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal-ink dark:text-white text-lg">Professional Planner</h3>
                                    <p className="text-xs text-charcoal-ink/50 dark:text-white/40 mt-1">For agencies and freelancers managing multiple client events.</p>
                                </div>
                                <ArrowRight className="absolute right-6 text-charcoal-ink/20 group-hover:text-amber-500 transition-colors" />
                            </button>

                            <button
                                onClick={() => setSelectedRole('vendor')}
                                className="w-full group relative flex items-center gap-4 p-6 text-left border border-charcoal-ink/10 dark:border-white/10 rounded-2xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all bg-white dark:bg-white/5"
                            >
                                <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                    <Building2 className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal-ink dark:text-white text-lg">Service Provider</h3>
                                    <p className="text-xs text-charcoal-ink/50 dark:text-white/40 mt-1">For hotels, venues, transport, and other event suppliers.</p>
                                </div>
                                <ArrowRight className="absolute right-6 text-charcoal-ink/20 group-hover:text-purple-500 transition-colors" />
                            </button>
                        </div>
                    ) : (
                        /* Step 2: Role Specific Form */
                        <form onSubmit={handleRegister} className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Jane"
                                        className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Password</label>
                                <input
                                    type="password"
                                    placeholder="Create a strong password"
                                    className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                    required
                                />
                            </div>

                            {selectedRole === 'host' && (
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Event Type</label>
                                    <select className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white appearance-none">
                                        <option>Wedding</option>
                                        <option>Corporate / MICE</option>
                                        <option>Social Party</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            )}

                            {selectedRole === 'planner' && (
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Agency Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Agency / Freelance Brand"
                                        className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                    />
                                </div>
                            )}

                            {selectedRole === 'vendor' && (
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/60 dark:text-white/60">Service Category</label>
                                    <select className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white appearance-none">
                                        <option>Venue</option>
                                        <option>Catering / F&B</option>
                                        <option>Logistics / Transport</option>
                                        <option>Decor & Styling</option>
                                        <option>Photography</option>
                                        <option>Entertainment</option>
                                    </select>
                                </div>
                            )}

                            <button
                                disabled={loading}
                                className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg transition-all hover:-translate-y-1 active:scale-95 text-white
                                ${selectedRole === 'host' ? 'bg-slate-900 shadow-slate-900/20 hover:bg-slate-800' : ''}
                                ${selectedRole === 'planner' ? 'bg-amber-500 text-background-dark shadow-amber-500/20 hover:bg-amber-400' : ''}
                                ${selectedRole === 'vendor' ? 'bg-purple-600 shadow-purple-600/20 hover:bg-purple-500' : ''}
                                `}
                            >
                                {loading ? "Creating Account..." : "Complete Registration"}
                            </button>
                        </form>
                    )}

                    <div className="pt-8 text-center border-t border-charcoal-ink/5 dark:border-white/5">
                        <p className="text-[10px] text-charcoal-ink/40 dark:text-white/30 uppercase tracking-widest">
                            Already have an account? <Link href="/login" className="text-charcoal-ink dark:text-white font-bold hover:underline">Login Here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
