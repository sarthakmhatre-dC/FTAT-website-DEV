import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ChevronRight,
    Calendar,
    Clock,
    User,
    Download,
    ArrowRight,
    MessageCircle
} from "lucide-react";
import { blogContent } from "../data/blogData"; // Importing the centralized data file

const BlogDetail = () => {
    // 1. Get the ID from the URL parameter
    const { blogId } = useParams();
    
    // 2. Fetch the specific post based on the ID
    const post = blogContent[blogId];
    
    const [activeSection, setActiveSection] = useState("Introduction");

    useEffect(() => {
        // Scroll to top on load for better UX
        window.scrollTo(0, 0);

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.getAttribute("data-nav-name"));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("[data-nav-name]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [blogId]); // Dependencies updated to re-run if blogId changes

    // 3. Handle Case where blogId is not found in data
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tighter mb-4">Article Not Found</h2>
                    <Link to="/resources/blogs" className="text-[#3E4D86] font-bold uppercase text-sm flex items-center gap-2 justify-center">
                        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Insights
                    </Link>
                </div>
            </div>
        );
    }

    const navItems = [
        { name: "Introduction", id: "introduction" },
        ...post.sections.map(s => ({ name: s.navTitle, id: s.id })),
        { name: "Final Thoughts", id: "final-thoughts" }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#2D2D2D]">
            {/* Breadcrumbs - Restored and logic-enabled */}
            <div className="pt-6 lg:pt-8 px-8 md:px-16 lg:px-20 border-b border-gray-300">
                <div className="max-w-[1800px] mx-auto flex items-center gap-2 para-sm font-black uppercase tracking-widest text-gray-400 pb-8">
                    <Link to="/" className="hover:text-[#3E4D86] transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link to="/resources/blogs" className="hover:text-[#3E4D86] transition-colors">Blogs</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#E23744]">{post.title}</span>
                </div>
            </div>

            <div className="max-w-8xl mx-10 px-8 py-26">
                {/* Hero / Header */}
                <header className="max-w-6xl mx-auto text-center mb-30">
                    <span className="text-[#E23744] font-black para-md uppercase tracking-[0.5em] block mb-5">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-[#2D2D2D] mb-5 leading-[1.25] tracking-tighter uppercase">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 font-black uppercase tracking-widest text-gray-400 mb-12">
                        <div className="flex items-center gap-2 para-md font-bold text-gray-400">
                            <User className="w-6 h-6 text-[#3E4D86] " />
                            <span>{post.author}</span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3E4D86]"></div>
                        <div className="flex items-center gap-2 para-md font-bold text-gray-400">
                            <Calendar className="w-6 h-6 text-[#3E4D86]" />
                            <span>{post.date}</span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3E4D86]"></div>
                        <div className="inline-flex items-center px-4 py-1.5 bg-[#F4F4F2] rounded-lg text-[#3E4D86] para-md font-bold">
                            {post.readTime}
                        </div>
                    </div>

                    <div className="rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[21/9] border border-gray-100">
                        <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Sidebar */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-40">
                            <h4 className="para-md font-black tracking-[0.3em] text-[#E23744] uppercase mb-8">
                                Contents
                            </h4>
                            <nav className="space-y-6">
                                {navItems.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block text-left para-sm font-black uppercase tracking-widest transition-all duration-300 ${activeSection === item.name ? 'text-[#3E4D86] border-l-4 border-[#3E4D86] pl-4' : 'text-gray-300 border-l-4 border-transparent pl-4 hover:text-[#2D2D2D]'}`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9">
                        <div className="prose prose-lg max-w-none">
                            <div id="introduction" data-nav-name="Introduction">
                                <p className="text-xl md:text-2xl leading-relaxed text-gray-500 font-bold mb-12 relative text-justify">
                                    <span className="float-left text-7xl font-black text-[#3E4D86] mr-4 leading-[0.8]">
                                        {post.intro.charAt(0)}
                                    </span>
                                    {post.intro.slice(1)}
                                </p>
                            </div>

                            {post.sections.map((section, idx) => (
                                <section key={idx} id={section.id} data-nav-name={section.navTitle} className="mb-20 scroll-mt-32">
                                    <h2 className="text-3xl md:text-4xl font-black text-[#2D2D2D] mb-8 uppercase tracking-tight border-b-4 border-[#EDA749] w-fit pb-2">
                                        {section.title}
                                    </h2>
                                    <p className="text-lg text-gray-500 leading-relaxed mb-10 text-justify font-medium">
                                        {section.content}
                                    </p>

                                    {section.list && (
                                        <div className="grid grid-cols-1 gap-6 mb-12">
                                            {section.list.map((item, lIdx) => (
                                                <div key={lIdx} className="p-8 bg-[#F4F4F2] rounded-3xl border-l-8 border-[#3E4D86]">
                                                    <h5 className="font-black text-[#3E4D86] uppercase text-[10px] tracking-[0.2em] mb-2">{item.label}</h5>
                                                    <p className="text-gray-500 text-sm font-medium">{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.quote && (
                                        <div className="bg-[#2D2D2D] rounded-[2.5rem] p-12 my-12 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-full bg-[#E23744]/10 -skew-x-12 translate-x-8" />
                                            <p className="text-xl md:text-2xl text-white font-black leading-tight italic relative z-10">
                                                "{section.quote}"
                                            </p>
                                        </div>
                                    )}

                                    {section.image && (
                                        <div className="rounded-[40px] overflow-hidden my-12 border border-gray-100 shadow-xl">
                                            <img src={section.image} alt={section.title} className="w-full object-cover" />
                                        </div>
                                    )}
                                </section>
                            ))}

                            <div id="final-thoughts" data-nav-name="Final Thoughts" className="border-t border-gray-100 pt-12 scroll-mt-32">
                                <h2 className="text-3xl font-black text-[#2D2D2D] mb-6 uppercase tracking-tight">Final Thoughts</h2>
                                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                    {post.finalThoughts}
                                </p>
                            </div>
                        </div>
                    </main>

                    {/* Right Sidebar */}
                    {/* <aside className="lg:col-span-3 space-y-12">
                        <div>
                            <h4 className="text-[10px] font-black tracking-[0.3em] text-[#E23744] uppercase mb-10">
                                Related Insights
                            </h4>
                            <div className="space-y-10">
                                {post.relatedPosts.map((item, idx) => (
                                    <div key={idx} className="group cursor-pointer">
                                        <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-gray-50 border border-gray-100">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <h5 className="text-[11px] font-black text-[#2D2D2D] line-clamp-2 leading-relaxed mb-2 uppercase tracking-tight group-hover:text-[#3E4D86] transition-colors">
                                            {item.title}
                                        </h5>
                                        <span className="text-[9px] font-black text-[#EDA749] uppercase tracking-widest">{item.category}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sticky top-40">
                            <div className="bg-[#F4F4F2] rounded-[2.5rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/50">
                                <h4 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight mb-4">Operations Guide</h4>
                                <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest mb-10 leading-relaxed">
                                    Download our checklist for corporate uniform procurement.
                                </p>
                                <button className="w-full flex items-center justify-center gap-3 bg-[#3E4D86] text-white px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#E23744] transition-all shadow-2xl shadow-blue-900/20">
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </aside> */}
                </div>
            </div>

            {/* Newsletter Section */}
            {/* <section className="bg-[#2D2D2D] py-24 px-6 mt-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
                        Stay ahead with <br />
                        <span className="text-[#EDA749]">Industry Insights.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 font-medium">
                        Join 500+ professionals receiving our monthly corporate digest.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <input
                            type="email"
                            placeholder="Your work email"
                            className="w-full md:w-96 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3E4D86] transition-all"
                        />
                        <button className="w-full md:w-auto bg-[#E23744] text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#3E4D86] transition-all flex items-center justify-center gap-3 shadow-2xl">
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default BlogDetail;