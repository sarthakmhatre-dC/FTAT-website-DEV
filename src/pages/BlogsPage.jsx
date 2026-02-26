import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPostsArray } from "../data/blogData";
import BottomCTA from "../components/common/bottomCTA";

const BlogsPage = ({ posts = blogPostsArray }) => {
  const INITIAL_COUNT = 6;
  // State to manage the number of visible posts
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Logic to toggle between "Load More" and "Show Less"
  const handleTogglePosts = () => {
    if (visibleCount >= posts.length) {
      setVisibleCount(INITIAL_COUNT); // Reset to initial 6
    } else {
      setVisibleCount(posts.length); // Show all articles
    }
  };

  // Determine which posts to render
  const displayedPosts = posts.slice(0, visibleCount);
  const isAllShown = visibleCount >= posts.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - UI Structure strictly preserved */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-8 md:px-16 lg:px-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4F4F2]/60 -skew-x-12 translate-x-1/4 z-0" />
        <div className="max-w-8xl mx-auto text-left relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[#E23744] font-black uppercase tracking-[0.5em] para-md">Our Blogs</span>
              <div className="h-px w-10 bg-gray-300" />
            </div>
            <h1 className="heading-1 font-black text-[#2D2D2D] mb-15 leading-[-1.05] tracking-tighter">
              Insights & <br /> <span className="text-[#3E4D86]">Corporate Guides.</span>
            </h1>
            <p className="text-gray-500 para-lg max-w-2xl leading-relaxed font-medium mb-10">
              Expert advice on corporate transit, fleet logistics, and institutional mobility solutions designed for modern enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advice Section Title */}
      <section className="py-15 px-8 md:px-16 lg:px-20 border-t border-gray-100 pt-30">
        <div className="max-w-8xl mx-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-2 font-semibold text-[#2D2D2D] mb-8 uppercase">
              Practical Advice for <span className="text-[#3E4D86]">Better Decisions</span>
            </h2>
            <p className="text-gray-400 para-lg max-w-3xl font-bold uppercase tracking-widest leading-relaxed">
              Helping procurement teams manage large-scale logistics efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-8 md:px-16 lg:px-20">
        <div className="max-w-8xl mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 space-y-5 md:space-y-0">
            {displayedPosts.map((post, idx) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-6 relative shadow-xl shadow-gray-200/50 border border-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div>
                  <span className="para-sm font-black tracking-[0.3em] text-[#E23744] uppercase mb-3 block">{post.category}</span>
                  <h3 className="para-lg font-black text-[#2D2D2D] mb-4 leading-tight group-hover:text-[#3E4D86] transition-colors uppercase tracking-tight">{post.title}</h3>
                  <p className="text-gray-500 para-md leading-relaxed mb-6 line-clamp-3 font-medium">{post.description}</p>
                  
                  <Link to={`/resources/blogs/${post.id}`} className="inline-flex items-center gap-3 text-[#2D2D2D] font-black para-sm uppercase tracking-widest hover:text-[#3E4D86] transition-colors group/btn">
                    Read Full Article <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conditional Rendering for Toggle Button */}
          {posts.length > INITIAL_COUNT && (
            <div className="mt-20 text-center">
              <button 
                onClick={handleTogglePosts}
                className="bg-white hover:bg-[#E23744] hover:text-white text-[#E23744] font-black px-12 py-5 rounded-2xl transition-all para-sm uppercase tracking-[0.2em] border border-gray-200 shadow-xl shadow-gray-200/50 hover:scale-105"
              >
                {isAllShown ? "Close Articles" : "Load More Articles"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pt-30 px-8 md:px-16 lg:px-20 pb-40">
        <div className="max-w-8xl mx-10">
          <div className="bg-[#2D2D2D] rounded-[3.5rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
            <div className="max-w-xl text-center lg:text-left relative z-10">
              <span className="text-[#EDA749] font-black para-sm uppercase tracking-[0.5em] block mb-10">Operations Support</span>
              <h2 className="heading-1 font-bold text-white mb-10 tracking-tighter leading-[-1.5]">
                Need Expert <br />
                <span className="text-[#EDA749]">Logistics Advice?</span>
              </h2>
              <p className="text-gray-400 para-lg font-medium leading-relaxed">
                Our team is here to help you plan high-efficiency transit
                solutions tailored for your corporate requirements.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 lg:gap-15">
              {/* <a href="https://calendly.com/" className="flex items-center gap-4 bg-[#3E4D86] text-white px-10 py-5 rounded-2xl para-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-black/20 hover:bg-[#E23744] hover:scale-105 transition-all group">
                <MessageSquare className="w-4 h-4" />
                Talk to Our Team
              </a> */}
              <a href="https://wa.me/" className="flex items-center gap-4 bg-white text-[#2D2D2D] px-10 py-5 rounded-2xl para-sm font-black uppercase tracking-[0.2em] shadow-xl hover:bg-gray-50 hover:scale-105 transition-all group">
                <Phone className="w-4 h-4 text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA/>
    </div>
  );
};

export default BlogsPage;