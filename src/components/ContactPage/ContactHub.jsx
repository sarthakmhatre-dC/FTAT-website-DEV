import React from 'react';
import {
    User,
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Briefcase,
    Send,
    Globe,
    Clock,
    FileText,
    Car,
    Calendar,
    Users// <--- Ensure this is here
} from 'lucide-react';

const ContactHub = () => {
    return (
        <section className="relative w-full bg-white pb-32 overflow-hidden">
            {/* 1. Cinematic Hero Header */}
            <div className="relative w-full h-[80vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
                    }}
                />
                {/* Multi-layered Branding Gradient */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/90 to-[#3E4D86]/40" />

                <div className="relative z-20 max-w-8xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                        <span className="text-[#E23744] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                            Global Support Network
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                            Let’s Architect <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA749] to-[#f3c681]">
                                Your Movement.
                            </span>
                        </h1>
                    </div>

                    {/* Quick-Access Contact Pills */}
                    <div className="hidden lg:flex flex-col gap-4 items-end">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-6 w-full max-w-sm">
                            <div className="p-3 bg-[#E23744] rounded-xl text-white"><Phone size={20} /></div>
                            <div>
                                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Immediate Hotline</p>
                                <p className="text-white font-bold">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Overlapping Contact Architecture */}
            <div className="relative z-30 mx-auto px-6 lg:px-12 -mt-30 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-[0_50px_100px_rgba(0,0,0,0.15)] rounded-[3rem] overflow-hidden">

                    {/* Left Side: Strategic Info (4 Columns) */}
                    {/* <div className="lg:col-span-4 bg-[#3E4D86] p-12 lg:p-16 flex flex-col justify-between text-white">
                        <div>
                            <h3 className="text-3xl font-black mb-6 leading-tight">Expert <br />Consultation</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-12">
                                Our strategic account managers are available 24/7 to design custom
                                SLA-backed mobility solutions for your enterprise.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <Globe className="text-[#EDA749]" size={20} />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#EDA749]">Regional Hub</h4>
                                        <p className="text-sm font-medium">Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Clock className="text-[#EDA749]" size={20} />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#EDA749]">Operation Hours</h4>
                                        <p className="text-sm font-medium">24/7 Enterprise Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/10">
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Trusted Partner</p>
                            <div className="mt-4 flex gap-4 grayscale opacity-50">
                                
                                <div className="h-6 w-20 bg-white/20 rounded-md" />
                                <div className="h-6 w-20 bg-white/20 rounded-md" />
                            </div>
                        </div>
                    </div> */}

                    {/* Right Side: Re-engineered Contact Form (8 Columns) */}
                    {/* <div className="lg:col-span-8 bg-white p-12 lg:p-16">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-[#2D2D2D]">Initiate Partnership</h3>
                            <p className="text-gray-400 text-sm mt-1">Please provide the strategic details of your requirement.</p>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors" size={18} />
                                <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744] outline-none font-medium text-[#2D2D2D] transition-all" />
                            </div>

                            <div className="group relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors" size={18} />
                                <input type="email" placeholder="Corporate Email" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744] outline-none font-medium text-[#2D2D2D] transition-all" />
                            </div>

                            <div className="group relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors" size={18} />
                                <input type="tel" placeholder="Mobile Number" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744] outline-none font-medium text-[#2D2D2D] transition-all" />
                            </div>

                            <div className="group relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors" size={18} />
                                <input type="text" placeholder="Organization City" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744] outline-none font-medium text-[#2D2D2D] transition-all" />
                            </div>

                            <div className="group relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors" size={18} />
                                <select className="w-full pl-12 pr-10 py-4 bg-[#F4F4F2] border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744] outline-none font-medium text-[#2D2D2D] appearance-none cursor-pointer">
                                    <option>Strategic Interest</option>
                                    <option>Employee Commute Solutions</option>
                                    <option>Corporate Long-term Lease</option>
                                    <option>VIP / Executive Movement</option>
                                </select>
                            </div>

                            <div className="group relative">
                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors" size={18} />
                                <input type="text" placeholder="Project Scale (e.g. 50+ Employees)" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744] outline-none font-medium text-[#2D2D2D] transition-all" />
                            </div>

                            <div className="group relative lg:col-span-2">
                                <FileText className="absolute left-4 top-6 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors" size={18} />
                                <textarea rows="4" placeholder="Briefly describe your requirements or challenges..." className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#E23744]/20 focus:border-[#E23744] outline-none font-medium text-[#2D2D2D] transition-all resize-none"></textarea>
                            </div>

                            <div className="lg:col-span-2">
                                <button className="group relative w-full overflow-hidden py-5 bg-[#E23744] text-white font-black rounded-2xl shadow-2xl shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.3em] text-xs">
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Initiate Strategic Discussion <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>

            <div className="relative z-30 max-w-6xl mx-auto px-6 lg:px-12">
                <div className="bg-white rounded-[1.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-100 p-4 md:p-6">

                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Input Groups */}
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input type="text" placeholder="Enter Your Name" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input type="email" placeholder="Enter Email Id" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input type="tel" placeholder="Phone No" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
                        </div>

                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input type="text" placeholder="Enter Pickup City" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
                        </div>

                        <div className="relative">
                            <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <select className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] appearance-none">
                                <option>Select Vehicle</option>
                                <option>Premium Sedan</option>
                                <option>Luxury SUV</option>
                                <option>Executive Coach</option>
                            </select>
                        </div>

                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input type="date" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D]" />
                        </div>

                        <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input type="number" placeholder="No. of Travelers" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
                        </div>

                        <div className="relative">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <select className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] appearance-none">
                                <option>Select Rental Purpose</option>
                                <option>Corporate Event</option>
                                <option>Airport Transfer</option>
                                <option>Monthly Subscription</option>
                            </select>
                        </div>

                        <div className="relative lg:col-span-1">
                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input type="text" placeholder="Requirement Details" className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl focus:ring-2 focus:ring-[#E23744] outline-none font-medium text-[#2D2D2D] placeholder:text-gray-400" />
                        </div>

                        {/* Submission Button */}
                        <div className="lg:col-span-3 mt-4">
                            <button className="w-full py-5 bg-[#E23744] text-white font-bold rounded-2xl shadow-xl shadow-red-900/10 hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 uppercase tracking-[0.2em] text-sm">
                                Confirm Booking Request
                            </button>
                        </div>
                    </form>

                </div>
            </div>


        </section>
    );
};

export default ContactHub;