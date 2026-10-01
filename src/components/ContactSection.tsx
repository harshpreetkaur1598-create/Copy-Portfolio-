import React, { useState } from 'react';
import { ArrowUp, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    currency: 'USD ($)',
    budgetValue: '$5,000 - $15,000',
    message: ''
  });

  const emailAddress = 'harshpreetkaur1598@gmail.com';
  const phoneNumber = '+91-9592-164-568';
  const linkedInUrl = 'https://www.linkedin.com/in/harshpreet-kaur-942621182/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact-section"
      className="w-full bg-white pt-16 sm:pt-24 pb-8 px-4 sm:px-8 select-none relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Massive Brutalist Header */}
        <div className="pb-10 mb-10">
          <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tight leading-[0.92] uppercase">
            HAVE A BRIEF? <br />
            <span className="text-[#FF0000]">LET'S JUMP ON A QUICK CALL.</span>
          </h2>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pb-16">
          {/* Left Column: Direct Inbox Dispatch */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full p-6 sm:p-8 bg-neutral-100 border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-neutral-300">
                  <span className="font-anton text-2xl text-black uppercase tracking-tight">
                    DIRECT INBOX DISPATCH
                  </span>
                  <span className="font-courier text-[10px] text-neutral-500 uppercase font-bold">
                    [DIRECT CHANNEL]
                  </span>
                </div>

                <div className="space-y-6 font-courier">
                  {/* Email Address */}
                  <div>
                    <span className="text-[11px] font-bold text-neutral-500 uppercase block mb-1.5">
                      EMAIL:
                    </span>
                    <div className="flex items-center justify-between gap-3 bg-white p-3 border border-neutral-200">
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-xs sm:text-sm font-bold text-black hover:text-[#FF0000] break-all transition-colors select-text"
                      >
                        {emailAddress}
                      </a>
                      <button
                        id="contact-copy-email-btn"
                        onClick={handleCopyEmail}
                        className="bg-black text-white hover:bg-[#FF0000] px-3.5 py-2 font-courier text-xs font-bold uppercase flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                      >
                        {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copiedEmail ? 'COPIED!' : 'COPY'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div>
                    <span className="text-[11px] font-bold text-neutral-500 uppercase block mb-1.5">
                      PHONE & WHATSAPP:
                    </span>
                    <div className="flex items-center justify-between gap-3 bg-white p-3 border border-neutral-200">
                      <a
                        href="https://wa.me/919592164568"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-bold text-black hover:text-[#FF0000] transition-colors select-text"
                      >
                        {phoneNumber}
                      </a>
                      <a
                        href="https://wa.me/919592164568"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-black text-white hover:bg-[#FF0000] px-3.5 py-2 font-courier text-xs font-bold uppercase transition-colors shrink-0 flex items-center gap-1"
                      >
                        <span>CHAT</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn Profile */}
                  <div>
                    <span className="text-[11px] font-bold text-neutral-500 uppercase block mb-1.5">
                      LINKEDIN PROFILE:
                    </span>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between bg-white p-3 border border-neutral-200 hover:border-black group transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-black group-hover:text-[#FF0000] transition-colors">
                        LINKEDIN PROFILE
                      </span>
                      <span className="text-black group-hover:text-[#FF0000] font-bold">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brutalist Project Brief Dispatch Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-6 sm:p-8 bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-3 mb-6 border-b border-neutral-200">
                  <span className="font-anton text-2xl text-black uppercase tracking-tight">
                    PROJECT BRIEF DISPATCH
                  </span>
                  <span className="font-courier text-[10px] text-neutral-500 uppercase font-bold">
                    [RESPONSE IN 24H]
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#FF0000] text-white mx-auto flex items-center justify-center font-anton text-2xl">
                      ✓
                    </div>
                    <h3 className="font-anton text-3xl text-black uppercase">
                      BRIEF DISPATCHED SUCCESSFULLY
                    </h3>
                    <p className="font-courier text-xs sm:text-sm text-neutral-700 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your project brief has been logged.
                      Harshpreet will review your parameters and follow up directly at{' '}
                      <span className="underline font-bold">{formData.email}</span>.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-black text-white px-5 py-2 font-courier text-xs font-bold uppercase hover:bg-[#FF0000] transition-colors cursor-pointer"
                    >
                      DISPATCH ANOTHER BRIEF
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-courier text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe / Creative Lead"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black border border-neutral-200"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@brand.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black border border-neutral-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          BRAND / AGENCY
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. D2C Skincare Co."
                          value={formData.brand}
                          onChange={(e) =>
                            setFormData({ ...formData, brand: e.target.value })
                          }
                          className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black border border-neutral-200"
                        />
                      </div>

                      {/* Estimated Scope Budget with Two Boxes: Values and Currency */}
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          ESTIMATED SCOPE BUDGET
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {/* Currency box */}
                          <div className="col-span-1">
                            <select
                              value={formData.currency}
                              onChange={(e) =>
                                setFormData({ ...formData, currency: e.target.value })
                              }
                              className="w-full bg-white p-3 font-courier text-xs text-black focus:outline-none focus:ring-1 focus:ring-black border border-neutral-200"
                              title="Currency"
                            >
                              <option value="USD ($)">USD ($)</option>
                              <option value="INR (₹)">INR (₹)</option>
                              <option value="EUR (€)">EUR (€)</option>
                              <option value="GBP (£)">GBP (£)</option>
                              <option value="AED (د.إ)">AED</option>
                            </select>
                          </div>

                          {/* Values box */}
                          <div className="col-span-2">
                            <input
                              type="text"
                              placeholder="e.g. 5,000 - 15,000 or custom"
                              value={formData.budgetValue}
                              onChange={(e) =>
                                setFormData({ ...formData, budgetValue: e.target.value })
                              }
                              className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black border border-neutral-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        PROJECT OBJECTIVES & TIMELINE
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell me about your product, what's currently failing in your copy, and your target campaign launch date..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black border border-neutral-200"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-[#FF0000] py-3.5 px-6 font-courier font-bold text-sm uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Send size={15} />
                      <span>DISPATCH BRIEF [→]</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-courier text-[11px] text-neutral-400 border-t border-neutral-200">
          <div>
            HARSHPREET KAUR © 2026 // COPYWRITER | CREATIVE STRATEGIST
          </div>

          <div className="flex items-center gap-6">
            <span className="uppercase text-neutral-600 font-bold">
              [ALL SYSTEMS OPERATIONAL]
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-black hover:text-[#FF0000] font-bold uppercase transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
