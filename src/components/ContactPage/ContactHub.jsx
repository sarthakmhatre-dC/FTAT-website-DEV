import React, { useState } from 'react';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    FileText,
    Car,
    Calendar,
    Users
} from 'lucide-react';

const ContactHub = () => {
    // 1. Functionality: Initial State and Logic from RentalForm
    const today = new Date().toISOString().split('T')[0];
    const initialState = {
        name: '', email: '', phone: '', pickupCity: '',
        vehicle: 'Select Vehicle', date: '', travelers: '',
        purpose: 'Select Rental Purpose', details: ''
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'travelers' && value !== '' && parseInt(value) < 1) return;
        setFormData({ ...formData, [name]: value });
    };

    const handleWhatsAppRedirect = (e) => {
        e.preventDefault();
        if (formData.vehicle === 'Select Vehicle' || formData.purpose === 'Select Rental Purpose') {
            alert("Please select a vehicle and a rental purpose.");
            return;
        }
        const ownerNumber = import.meta.env.VITE_CLIENT_CONTACT;
        const message = `New Booking Request%0a` +
            `------------------------%0a` +
            `Name: ${formData.name}%0a` +
            `Email: ${formData.email}%0a` +
            `Phone: ${formData.phone}%0a` +
            `City: ${formData.pickupCity}%0a` +
            `Vehicle: ${formData.vehicle}%0a` +
            `Date: ${formData.date}%0a` +
            `Travelers: ${formData.travelers}%0a` +
            `Purpose: ${formData.purpose}%0a` +
            `Details: ${formData.details}`;

        window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
        setFormData(initialState);
    };

    return (
        <section className="relative w-full bg-white pb-32 overflow-hidden">
            {/* Cinematic Hero Header */}
            <div className="relative w-full h-[90vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
                    style={{
                        backgroundImage: `url('/blogs/image.png')`,
                    }}
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/90 to-[#3E4D86]/40" />

                <div className="relative z-20 max-w-8xl mx-auto px-8 sm:px-10 md:px-16 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -mt-30">
                    <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                        <span className="text-[#E23744] font-bold tracking-[0.3em] para-md uppercase mb-4 block">
                            Global Support Network
                        </span>
                        <h1 className="heading-1 font-black text-white leading-tight tracking-[0.02em]">
                            Your Journey, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDA749] to-[#f3c681]">
                                Our Priority
                            </span>
                        </h1>
                    </div>

                    <div className="hidden lg:flex flex-col gap-4 items-end">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-6 w-full max-w-sm">
                            <div className="p-3 bg-[#E23744] rounded-xl text-white"><Phone size={20} /></div>
                            <div>
                                <p className="para-sm font-bold text-white/50 uppercase tracking-widest">Immediate Hotline</p>
                                <p className="text-white font-bold">+91 {import.meta.env.VITE_CLIENT_CONTACT}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Form Container - UI strictly matched to RentalForm */}
            <div className="relative z-30 mx-auto px-6 lg:px-12 -mt-50 max-w-6xl">
                <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-100 p-8 md:p-12">

                    <div className="mb-10">
                        <span className="para-md text-[#E23744] uppercase font-bold tracking-[0.2em]">Reservation Details</span>
                        <h3 className="heading-3 text-[#2D2D2D] mt-2">Instant Booking Request</h3>
                        <p className="text-gray-400 para-sm mt-1">Please provide the strategic details of your requirement.</p>
                    </div>

                    <form onSubmit={handleWhatsAppRedirect} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Standard Inputs */}
                        {[
                            { name: 'name', icon: <User />, placeholder: 'Your Name', type: 'text' },
                            { name: 'email', icon: <Mail />, placeholder: 'Email Address', type: 'email' },
                            { name: 'phone', icon: <Phone />, placeholder: 'Phone Number', type: 'tel' },
                            { name: 'pickupCity', icon: <MapPin />, placeholder: 'Pickup City', type: 'text' },
                        ].map((input) => (
                            <div key={input.name} className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86] group-focus-within:text-[#E23744] transition-colors">
                                    {React.cloneElement(input.icon, { size: 18 })}
                                </div>
                                <input
                                    type={input.type}
                                    name={input.name}
                                    value={formData[input.name]}
                                    onChange={handleChange}
                                    placeholder={input.placeholder}
                                    className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-2 border-transparent focus:border-[#3E4D86]/20 rounded-xl outline-none para-sm font-medium text-[#2D2D2D] transition-all"
                                    required
                                />
                            </div>
                        ))}

                        {/* Vehicle Select */}
                        <div className="relative group">
                            <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <select
                                name="vehicle"
                                value={formData.vehicle}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D] appearance-none cursor-pointer"
                                required
                            >
                                <option disabled value="Select Vehicle">Select Vehicle</option>
                                <option>Premium Sedan</option>
                                <option>Luxury SUV</option>
                                <option>Executive Coach</option>
                            </select>
                        </div>

                        {/* Date Input */}
                        <div className="relative group">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input
                                type="date"
                                name="date"
                                min={today}
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D] cursor-pointer"
                                required
                            />
                        </div>

                        {/* Travelers Input */}
                        <div className="relative group">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input
                                type="number"
                                name="travelers"
                                min="1"
                                value={formData.travelers}
                                onChange={handleChange}
                                placeholder="Travelers"
                                className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D]"
                                required
                            />
                        </div>

                        {/* Purpose Select */}
                        <div className="relative group">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <select
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D] appearance-none cursor-pointer"
                                required
                            >
                                <option disabled value="Select Rental Purpose">Select Purpose</option>
                                <option>Corporate Event</option>
                                <option>Airport Transfer</option>
                                <option>Monthly Subscription</option>
                            </select>
                        </div>

                        {/* Details Input */}
                        <div className="relative">
                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E4D86]" size={18} />
                            <input
                                type="text"
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                placeholder="Specific Requirements"
                                className="w-full pl-12 pr-4 py-4 bg-[#F4F4F2] border-none rounded-xl outline-none para-sm font-medium text-[#2D2D2D]"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="sm:col-span-2 lg:col-span-3 mt-4">
                            <button
                                type="submit"
                                className="w-full py-5 bg-[#E23744] text-white font-bold rounded-2xl shadow-xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-300 uppercase para-md !tracking-[0.2em]"
                            >
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