"use client";

import Link from "next/link";
import React from "react";
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);
  const yStats = useTransform(scrollY, [0, 500], [0, -50]);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Slideshow Data
  const slides = [
    {
      image: "/img-1.jpg",
      title: "Destination Weddings, Perfectly Orchestrated",
      subtitle: "From venue sourcing to guest journeys, designed with precision."
    },
    {
      image: "/img-2.jpg",
      title: "Emotional & Experiential",
      subtitle: "Celebrations That Begin with a Journey"
    },
    {
      image: "/img-3.jpg",
      title: "High-end corporate conference or leadership summit",
      subtitle: "Plan, coordinate, and execute complex events with confidence."
    },
    {
      image: "/img-4.jpg",
      title: "Operational Excellence, Simplified",
      subtitle: "Transform offline chaos into guided execution."
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds per slide
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const navigationHover = {
    scale: 1.05,
    color: "#ecb613", // primary color
    transition: { duration: 0.2 }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1b180d] dark:text-[#fcfbf7] transition-colors duration-300 min-h-screen overflow-hidden selection:bg-primary/30" suppressHydrationWarning>

      {/* Subtle Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,182,19,0.05),transparent_70%)]"
        />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-[#e7e1cf]/30 px-6 lg:px-20 py-4 flex items-center justify-between backdrop-blur-md bg-white/60 dark:bg-black/60">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <svg className="size-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight font-serif italic">TBO</h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {["Inventory", "Microsites", "Coordination", "Pricing"].map((item) => (
            <Link key={item} href="#" className="relative group">
              <motion.span
                className="text-sm font-medium transition-colors"
                whileHover={{ color: "#ecb613" }}
              >
                {item}
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all text-[#1b180d] dark:text-[#fcfbf7] hover:bg-black/5 dark:hover:bg-white/5 mr-2"
            >
              Register
            </motion.button>
          </Link>
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236,182,19,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="glow-button bg-primary text-background-dark px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(236,182,19,0.3)] hover:-translate-y-px"
            >
              Login
            </motion.button>
          </Link>
          <div className="w-10 h-10 rounded-full bg-cover bg-center border border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6vpQ9yE9t5oImYYLAJ93PaIEHwPWBegbNfQuWKm3tYw_P3_9KjmCroxSepvss3ar2RGlPDR5Q3QzufejYDCI1qgDG7JUebcxO2Hdsbqelsr-ODikFxCFzh5JxqgXrUVHiP3jG5wwnJwIdbMFG-elTw1F5_XpaYiGRk-D-raXDpFQzYGrs0LXMloNuRXwRX7IEtxsDCZqfRIpxMOvs1HfvIh1Va4wbIni0kPksVnRrBTk9nIw0fo2_Ly1Hp5xtLFsCvL6pfe2xXnGc')" }}></div>
        </div>
      </header>

      <main className="pt-24 lg:pt-32 relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              className="flex flex-col gap-8 order-2 lg:order-1"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-antique-gold text-xs font-bold uppercase tracking-widest border border-primary/20 w-fit">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                The Atelier Standard
              </motion.div>

              <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-background-dark dark:text-white">
                <motion.span variants={fadeInUp} className="block">Transform</motion.span>
                <div className="relative inline-block">
                  <motion.span
                    variants={fadeInUp}
                    className="italic text-antique-gold relative z-10"
                  >
                    Offline Chaos
                  </motion.span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1, ease: "circOut" }}
                    className="absolute bottom-2 left-0 h-[8px] bg-primary/20 -z-0"
                  />
                </div>
                <motion.span variants={fadeInUp} className="block">into a Guided Journey.</motion.span>
              </h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[#1b180d]/70 dark:text-[#fcfbf7]/70 max-w-lg font-light leading-relaxed"
              >
                The all-in-one digital atelier for destination wedding specialists and MICE planners. Orchestrate elegance from anywhere in the world.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236,182,19,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="glow-button bg-primary text-background-dark px-8 py-4 rounded-xl text-base font-bold transition-all shadow-[0_0_15px_rgba(236,182,19,0.3)] hover:-translate-y-px flex items-center justify-center gap-2 group"
                >
                  Explore the Platform
                  <span className="material-symbols-outlined transition-all duration-300 w-0 overflow-hidden opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:ml-1">arrow_forward</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl text-base font-bold border border-[#e7e1cf] dark:border-white/10 flex items-center justify-center gap-2 transition-colors group"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                    className="material-symbols-outlined"
                  >
                    play_circle
                  </motion.span>
                  Watch Film
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Visual - Luxury Slideshow */}
            <motion.div
              className="relative order-1 lg:order-2 group"
              style={{ y: yParallax }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-200 relative border border-white/10 ring-1 ring-white/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {/* Ken Burns Effect Image */}
                    <motion.div
                      initial={{ scale: 1, filter: "blur(10px)" }}
                      animate={{ scale: 1.15, filter: "blur(0px)" }}
                      transition={{ duration: 8, ease: "easeInOut" }}
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Contextual Text Overlay */}
                    <div className="absolute bottom-16 left-10 right-10 text-white z-20">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                      >
                        <h3 className="font-serif text-3xl lg:text-4xl mb-4 text-[#fcfbf7] leading-tight">
                          {slides[currentSlide].title}
                        </h3>
                        <p className="text-base lg:text-lg font-light text-[#fcfbf7]/80 max-w-sm leading-relaxed">
                          {slides[currentSlide].subtitle}
                        </p>
                      </motion.div>
                    </div>

                    {/* Film Grain Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E')" }}></div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </div>
        </section>

        {/* Social Proof Header */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="border-y border-[#e7e1cf] dark:border-white/5 bg-white/30 dark:bg-transparent py-10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col items-center gap-8">
            <h4 className="text-antique-gold text-xs font-bold uppercase tracking-[0.2em]">Trusted by Global Industry Leaders</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Logos */}
              {[
                'AB6AXuBWr7uaDZ8qF3bw2f11x37pEZv-xn0t_QfBDzBLIEVfzDe3XQVg0FKJ93tWvO3A2-SwQMEezHDTv0KH8d6AiWtrxnS_jj-6BwEkdl5OdpL4DTVUr-IWFUNgHz0GVPy5naHdYpgAq73du_p2FusPcIVnZuSb4lRr9aRkzxKLLnJ5v2kUg5PSOb4HhGEIGKWdN18hk3MNta92td73WhO87yWi9oQK8YSqyI7Dab8jM1e0MmTNcCjwD3LVZo1764sbw-LIBqSg-X5qmJXn',
                'AB6AXuBo2vc3J8cPDrU8-u_h5TS_6PWJP6M0BTglbcb-hxSyKhUO61Fv55keAtInLzWq4qUPSLpEc04iXvKnhG6nqTX7whUuKMEAwwL6YB-Jfr1bGzCxA59_dmTbTCJMJGuvYfYVIj1rBQK2jaiqgbuuKe8a9e2Ja5HecL7Re93TP5kFSI_ODQdRePp-KC6GzDEgrEvLhxSXPLm9R_gXKS-KxTfLRSARcmTBe6Uz8GQinIS8nf9Mhcz-byWm0ayhiTrhJnp42MxQ1KmV8HoB',
                'AB6AXuAwA8eHDVzDjTs8WV_DZA-3s38jrMRImtzmNsWlgRBswzOo2r7lwDV_4r3kzUcUNUNro9lyeLGBGBs3rSacbyMhqNiDNf-TwjjoP6TuNioGHDFCIKZEU-5Zj6GggJg3dndsXA5hfcJW7E2-jqdIx4r-Jz2pi3R0mtgGzszrev28HOL6fieGDy8U1AtMXeL3wiklb3kimLegvdtHpceP8AdU-c_53dcS9x1eOEd39_lJI90fOQXtAv0DUgoS_Lf1ikjyfV2tmk4Z9hzD',
                'AB6AXuDDIwUTwfV6l_6z2DjAwrEfsvhZ_KXwGScQJcbDfc1jlhSUdbNxyGiH6JTcooW0v04dmsr-atjP16BDD8fFzn_2rU7bvwz1caUBPTFAjW4oxpKOF3fayNocd5sNjE38LeA-2bmU-pQnqoY2EeIKt6j-ZYNU1wSIbfwNhbOnUaiDvQdL4KCW9pLsrpkq2NZ07MkrORzMe6T9G8bvh3cdptAQjfZfFz1tGt3Z7n97-MV61qbSFjA2wCH8xZEaSX7fGZ_gvyf1FYPgc2z3',
                'AB6AXuBajA09Mm8kHhDW2FQCW8XJjIAQBmsJb7msx01Kx1ua5mQXu3vx0d--sqnx3zuCIZlgBnWx3LjPBzQxMl6ogRW4Zmc8yhE443XpRgKGiPchbwqv_jjv9b_8-IueGgz6kjJczRldTBXsX6UFYaa5r7VEWM7qpS_Fxk289a0Vqp7VvlYQiktU--9E_RF9iy8q788lzi2t71coYi5ARXv2tIS0mAS7iobRVtN0SHkxdUY9pcJUkrf4pfLO1QHZD_j7eAXcs-STOjxLEdCn'
              ].map((id, i) => (
                <div key={i} className="h-8 w-24 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/${id}')` }}></div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Value Propositions */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex flex-col items-center gap-4"
          >
            <h2 className="font-serif text-4xl lg:text-5xl">The Atelier Experience</h2>
            <p className="text-[#1b180d]/60 dark:text-[#fcfbf7]/60 max-w-2xl">Designed for the most discerning event professionals, our platform bridges the gap between creative vision and operational excellence.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards */}
            {[
              { icon: "public", title: "Curated Inventory", desc: "Digital sourcing of elite venues and vendors with passport stamp precision. Access our global network of verified luxury partners.", stamp: "verified" },
              { icon: "web_asset", title: "Branded Microsites", desc: "Custom guest-facing portals that mirror your brand's unique luxury aesthetic. Every touchpoint perfectly tailored to your client.", stamp: "ink_marker" },
              { icon: "calendar_month", title: "Intelligent Coordination", desc: "Automated logistics and real-time vendor management for seamless execution. Move beyond spreadsheets to intelligent workflows.", stamp: "flight_takeoff" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden group bg-white dark:bg-white/5 border border-[#e7e1cf] dark:border-white/10 p-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-6">{card.icon}</span>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#1b180d]/70 dark:text-[#fcfbf7]/70">{card.desc}</p>
                <div className="passport-stamp material-symbols-outlined text-8xl text-primary opacity-[0.08] pointer-events-none absolute -right-[10px] -bottom-[10px] -rotate-[15deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">{card.stamp}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visual Showcase Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="aspect-square rounded-xl bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJfTYRoOGOGDlEdpM7JLyr2XU-5wMf9A7LQG191RlOwthXrGnDzUKVdJRx_q8XLZVa1sgU-M-N7dKhcXnFD18IJEE6vt5kR5kE71ZFz7tFr6Hg4watpD3dthFifXpWVhsi7qoZe7xNfko_qhHIyqi-p7_CbYSPlaKTEEAHz_x6NUpsCa9B1xesk1fgwZTlqVzOvz-kewY9Dvqtxmct46rzFm1bEENgqSUqlB8YpeAlY9AYRyZJI8jtmR4HB43luyvwNqS_C-2YYzut')" }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="aspect-[4/5] rounded-xl bg-cover bg-center overflow-hidden col-span-2 row-span-2" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn611PzXqWWbKSQCEozbRCjVXhePldoPLvze8I66JtT857O-Xf3ucg_wQml31b-zUKVGjJDParBgLA7aL1_EUpJmQIeCbIaQzum_uufYXiMm0GWeFYZTip_oo4PNOpZUPAAxU1SVf-s239_0PxSupretlSDBGK867YMTPJWM65T49gEllviVUGW2grpMj_skDjGa0Mdabzd4t3fbv0TEIpyk9blALMXbykgn0qpgvRUz4gF3ob4no7ucY1I1ad8H7b-gNlOHgJG6Xc')" }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="aspect-square rounded-xl bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4fZeG7N0dQd6Bhtu7Qg5hmMIE1wbmCu17C9o_aFyzk5mKIJTN6e9-Au8SL0zeqbwD1zplCCEsJjyvUt-m2D1Hmus1OoaQKLda3cFb_672AxT2hn1Egdzls-NnlQ2IJrgPz3ZqtKSRVfxykXWCG3V_v00x0ohsy6Zd5566Zp_64ct0KGiIxGNw7sBE6ZUx6BExD3VYSks8_bEEevfl3AnUjUNddrmLaa0Oflc9ydd5IX7ahTjRsohYSspp1Ixj8LLNR7ZvGWaCKAvy')" }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="aspect-square rounded-xl bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKWywkzB2J0j39cC5h_d-m6TjsDkPvrmbfi2nwWOgUx5yTqJPOlJHHoqnoSRoFIqrCR8V3ItenkHnYwCMPbyM3V5nVRW1wcFUpjAoWL063atDCteowmtC2A0HyUNXHigWpxGsbC5fJxUghC_pf_jZyEI3gSot1Uor0Hc-Nnl8Dd6r22uYSLZjyj_2xWwxAidwDbBLp4enXiFoQNglAb6hbc3Er7EjSefgQDRQ1Z6nWD0jzMztvDhFI1OgzG2R_ImddeS-qC4JFdA77')" }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="aspect-square rounded-xl bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaw3pKvh83CJ10xsbA47LZh1lz8M5lOVvcChzYgrdlwzPA7gPzTCoCBuDEhCKLAbFvNxwU38HLpklPSwGmQNsVdXHDlo6vD3WymAFcX7tN_G5Lr8I1nGDY3hYKtWqTgE3lPRToGqOjAbVwg7N0qGIzYkRHpVuQM-VIR-PLg4jXBfXACmcSx66gXg9Ae0eiCy9zBn5ht4W0y4ZDSmLiTAD9YuXVR0dHum0D6mAdJRxHPeDo3H6F3x87jYWmo-MT-HPgUtYAM9OdCzZj')" }}></motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary/5 border border-primary/20 rounded-3xl p-12 lg:p-20 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="font-serif text-4xl lg:text-6xl max-w-2xl">Ready to Elevate Your Planning Journey?</h2>
              <p className="text-lg opacity-80 max-w-xl">Join the world&apos;s leading event designers who have traded the chaos for celestial coordination.</p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236,182,19,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="glow-button bg-primary text-background-dark px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_15px_rgba(236,182,19,0.3)] hover:-translate-y-px"
              >
                Request Exclusive Access
              </motion.button>
            </div>
            {/* Abstract Pattern Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ecb613 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-white/30 dark:bg-white/5 border-t border-[#e7e1cf] dark:border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="text-primary scale-75">
                <svg className="size-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-tight font-serif italic">TBO</h2>
            </div>
            <p className="text-xs opacity-60 leading-relaxed">Defining the next generation of luxury coordination for destination wedding specialists and high-end MICE planners.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-antique-gold">Platform</h5>
            <Link className="text-sm opacity-70 hover:opacity-100 transition-opacity" href="#">Venues</Link>
            <Link className="text-sm opacity-70 hover:opacity-100 transition-opacity" href="#">Vendor CRM</Link>
            <Link className="text-sm opacity-70 hover:opacity-100 transition-opacity" href="#">Microsites</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-antique-gold">Company</h5>
            <Link className="text-sm opacity-70 hover:opacity-100 transition-opacity" href="#">About</Link>
            <Link className="text-sm opacity-70 hover:opacity-100 transition-opacity" href="#">Careers</Link>
            <Link className="text-sm opacity-70 hover:opacity-100 transition-opacity" href="#">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-antique-gold">Social</h5>
            <div className="flex gap-4">
              <Link className="opacity-70 hover:opacity-100 transition-opacity" href="#"><span className="material-symbols-outlined">camera</span></Link>
              <Link className="opacity-70 hover:opacity-100 transition-opacity" href="#"><span className="material-symbols-outlined">alternate_email</span></Link>
              <Link className="opacity-70 hover:opacity-100 transition-opacity" href="#"><span className="material-symbols-outlined">brand_awareness</span></Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-12 pt-8 border-t border-[#e7e1cf]/30 text-center text-[10px] opacity-40 uppercase tracking-[0.3em]">
          © 2026 TBO Atelier Inc. All Rights Reserved.
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
          className="bg-background-dark dark:bg-white text-white dark:text-background-dark p-4 rounded-full shadow-2xl flex items-center gap-2 group glow-button transition-all shadow-[0_0_15px_rgba(236,182,19,0.3)] hover:shadow-[0_0_25px_rgba(236,182,19,0.5)]"
        >
          <span className="material-symbols-outlined">forum</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold px-0 group-hover:px-2">Concierge Support</span>
        </motion.button>
      </div>
    </div>
  );
}
