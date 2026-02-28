import React, { useState } from 'react';
import { ArrowRight, Headset, X, User, Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryData, setQueryData] = useState({ name: '', email: '', query: '' });

  const handleQueryChange = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    const ownerNumber = import.meta.env.VITE_CLIENT_CONTACT;
    const message = `New Inquiry%0a------------------------%0aHi, I am ${queryData.name}%0aEmail: ${queryData.email}%0aQuery: ${queryData.query}`;
    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
    setQueryData({ name: '', email: '', query: '' });
    setIsModalOpen(false);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#262626] border-t border-white/5"
      style={{
        paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(5rem, 8vw, 7.5rem)'
      }}
    >
      {/* Refined Background Layer: 
          - On mobile, the vertical gradient now stays transparent for 40% of the height, 
            ensuring the image is much clearer.
      */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-right-bottom md:bg-right"
        style={{
          backgroundImage: `url('/galleryImages/galleryImage5.webp')`,
          backgroundSize: 'auto 100%',
          /* Blending logic: Pushed the 'black' stop further back on mobile for more visibility */
          maskImage: window.innerWidth < 768
            ? 'none'
            : 'linear-gradient(to bottom, transparent 0%, black 100%), linear-gradient(to right, transparent 0%, transparent 40%, black 85%)',
          WebkitMaskImage: window.innerWidth < 768
            ? 'none'
            : 'linear-gradient(to bottom, transparent 0%, black 100%), linear-gradient(to right, transparent 0%, transparent 40%, black 85%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in'
        }}
      />

      {/* Lightened Mobile Overlay:
          - Reduced the 'via' intensity on mobile to prevent the black mask from overpowering the image.
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#262626] via-[#262626]/70 md:via-[#262626]/80 to-[#262626]/20 md:to-transparent" />

      <div className="relative z-20 max-w-8xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 w-full text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">

          <div className="flex flex-col md:flex-row items-center gap-3 mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <Headset size={18} className="text-[#E23744]" />
              <span className="text-[#E23744] font-black para-sm uppercase tracking-[0.4em]">Contact Us</span>
            </div>
            <div className="h-px w-10 bg-white/10 hidden md:block" />
            <div className="h-1 w-8 bg-[#E23744]/20 md:hidden rounded-full" />
          </div>

          <h2 className="heading-2 text-white mb-10 md:mb-15 uppercase tracking-tighter leading-tight break-words drop-shadow-lg">
            Still have questions regarding <br className="hidden md:block" />
            our <span className="text-[#EDA749]">transport services?</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-[#E23744] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl md:rounded-full shadow-2xl shadow-black/40 hover:bg-white hover:text-[#2D2D2D] transition-all duration-500 flex items-center justify-center gap-3 group active:scale-95"
            >
              Get in touch now
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <span className="para-md text-white/80 hidden sm:block drop-shadow-sm">Available 24/7 for Institutional Support</span>
            <span className="para-xs text-white/60 md:hidden uppercase tracking-widest font-bold">Available 24/7</span>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL (Structure strictly preserved) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden p-8 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#E23744] transition-colors">
              <X size={24} />
            </button>
            <div className="mb-8 text-center md:text-left">
              <h3 className="text-2xl font-black text-[#2D2D2D] mb-2 uppercase tracking-tight">Send a Query</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 p-3 bg-green-50 rounded-xl border border-green-100">
                <FaWhatsapp className="text-green-500" />
                <p className="text-[10px] text-green-700 font-black uppercase tracking-widest">You will be redirected to WhatsApp</p>
              </div>
            </div>
            <form onSubmit={handleQuerySubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="text" name="name" required value={queryData.name} onChange={handleQueryChange} placeholder="Your Full Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] text-sm" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input type="email" name="email" required value={queryData.email} onChange={handleQueryChange} placeholder="Work Email ID" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] text-sm" />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400" size={16} />
                <textarea name="query" required value={queryData.query} onChange={handleQueryChange} rows="4" placeholder="How can our operations team help you?" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none font-medium text-[#2D2D2D] resize-none text-sm" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#E23744] text-white font-black rounded-xl shadow-lg hover:bg-[#2D2D2D] transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest active:scale-95">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactBanner;