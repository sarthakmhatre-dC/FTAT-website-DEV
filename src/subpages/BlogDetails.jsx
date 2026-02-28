import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ChevronRight,
    Calendar,
    User,
    ArrowRight
} from "lucide-react";
import { blogContent } from "../data/blogData"; // Importing the centralized data file
import ContactBanner from "../components/common/ContactBanner";

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
                <div className="text-center px-4">
                    <h2 className="heading-2 text-[#2D2D2D] uppercase mb-4">Article Not Found</h2>
                    <Link to="/resources/blogs" className="text-[#3E4D86] font-bold uppercase para-sm flex items-center gap-2 justify-center">
                        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Insights
                    </Link>
                </div>
            </div>
        );
    }

    const navItems = [
        { name: "Introduction", id: "introduction" },
        ...post.sections.map(s => ({ name: s.title, id: s.id })),
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
            {/* Breadcrumbs - Made fully responsive with flex-wrap and responsive padding */}
            <div className="pt-6 lg:pt-8 px-4 md:px-16 lg:px-20 border-b border-gray-300">
                <div className="max-w-[1800px] mx-auto flex flex-wrap items-center gap-2 para-sm md:para-sm font-black uppercase tracking-widest text-gray-400 pb-6 md:pb-8">
                    <Link to="/" className="hover:text-[#3E4D86] transition-colors shrink-0">Home</Link>
                    <ChevronRight className="w-3 h-3 shrink-0" />
                    <Link to="/resources/blogs" className="hover:text-[#3E4D86] transition-colors shrink-0">Blogs</Link>
                    <ChevronRight className="w-3 h-3 shrink-0" />
                    <span className="text-[#E23744] truncate">{blogId}</span>
                </div>
            </div>

            {/* Main Container - Fixed horizontal overflow on mobile */}
            <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-12 md:py-26">
                
                {/* Hero / Header */}
                <header className="mx-auto text-center mb-16 md:mb-30 flex flex-col items-center">
                    <span className="text-[#E23744] font-black para-md md:para-md uppercase tracking-[0.3em] md:tracking-[0.5em] block mb-4 md:mb-5">
                        {post.category}
                    </span>
                    
                    {/* Centered H1 with max-w-6xl applied to text */}
                    <h1 className="heading-1 tracking-[0.02em] text-[#2D2D2D] mb-6 md:mb-8 mx-auto max-w-6xl text-center">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 font-black uppercase tracking-widest text-gray-400 mb-8 md:mb-12">
                        <div className="flex items-center gap-1.5 md:gap-2 para-sm md:para-md font-bold text-gray-400">
                            <User className="w-5 h-5 md:w-6 md:h-6 text-[#3E4D86]" />
                            <span>{post.author}</span>
                        </div>
                        <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-[#3E4D86]"></div>
                        <div className="flex items-center gap-1.5 md:gap-2 para-sm md:para-md font-bold text-gray-400">
                            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#3E4D86]" />
                            <span>{post.date}</span>
                        </div>
                        <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-[#3E4D86]"></div>
                        <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 bg-[#F4F4F2] rounded-lg text-[#3E4D86] para-sm md:para-md font-bold w-full sm:w-auto mt-2 sm:mt-0 justify-center">
                            {post.readTime}
                        </div>
                    </div>

                    <div className="w-full rounded-2xl md:rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] border border-gray-100">
                        <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover scale-110 hover:scale-120 transition-transform duration-1000 ease-out"
                        />
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
                    {/* Left Sidebar */}
                    <aside className="lg:col-span-3 hidden lg:block">
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
                        <div className="max-w-none">
                            <div id="introduction" data-nav-name="Introduction">
                                {post.intro.map((paragraph, idx) => (
                                    // Tighter spacing on mobile (mb-5) vs desktop (mb-8)
                                    <p key={idx} className="para-xl text-gray-500 font-bold mb-5 md:mb-8 relative text-left sm:text-justify">
                                        {idx === 0 ? (
                                            <>
                                                {/* Adjusted Drop Cap for smaller screens */}
                                                <span className="float-left text-5xl md:text-7xl font-black text-[#3E4D86] mr-3 md:mr-4 leading-[0.8] mt-1 md:mt-0">
                                                    {paragraph.charAt(0)}
                                                </span>
                                                {paragraph.slice(1)}
                                            </>
                                        ) : (
                                            paragraph
                                        )}
                                    </p>
                                ))}
                            </div>

                            {post.sections.map((section, idx) => (
                                <section key={idx} id={section.id} data-nav-name={section.title} className="mb-12 md:mb-20 scroll-mt-24 md:scroll-mt-32 mt-10 md:mt-16">
                                    <h2 className="heading-3 uppercase text-[#2D2D2D] mb-6 md:mb-8 border-b-4 border-[#EDA749] w-fit pb-2">
                                        {section.title}
                                    </h2>
                                    
                                    {section.content.map((para, pIdx) => (
                                        // Tightened bottom margin on mobile (mb-4) to fix the gap issue
                                        <p key={pIdx} className="para-lg text-gray-500 mb-4 md:mb-6 text-left sm:text-justify font-medium">
                                            {para}
                                        </p>
                                    ))}

                                    {section.list && (
                                        <div className="grid grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-12 mt-6">
                                            {section.list.map((item, lIdx) => (
                                                <div key={lIdx} className="p-6 md:p-8 bg-[#F4F4F2] rounded-2xl md:rounded-3xl border-l-4 md:border-l-8 border-[#3E4D86]">
                                                    <h5 className="font-black text-[#3E4D86] uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">{item.label}</h5>
                                                    <p className="text-gray-500 para-sm font-medium">{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.quote && (
                                        <div className="bg-[#2D2D2D] rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 my-8 md:my-12 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-[#E23744]/10 -skew-x-12 translate-x-4 md:translate-x-8" />
                                            <p className="heading-3 md:heading-2 text-white font-black italic relative z-10">
                                                "{section.quote}"
                                            </p>
                                        </div>
                                    )}

                                    {section.image && (
                                        <div className="rounded-2xl md:rounded-[40px] overflow-hidden my-8 md:my-12 border border-gray-100 shadow-xl">
                                            <img src={section.image} alt={section.title} className="w-full object-cover" />
                                        </div>
                                    )}
                                </section>
                            ))}

                            <div id="final-thoughts" data-nav-name="Final Thoughts" className="border-t border-gray-200 pt-8 md:pt-12 scroll-mt-24 md:scroll-mt-32">
                                <h2 className="heading-2 text-[#2D2D2D] mb-4 md:mb-6 uppercase">Final Thoughts</h2>
                                {post.finalThoughts.map((para, pIdx) => (
                                    <p key={pIdx} className="para-lg text-gray-500 mb-4 md:mb-6 font-medium text-left sm:text-justify">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <ContactBanner/>
        </div>
    );
};

export default BlogDetail;