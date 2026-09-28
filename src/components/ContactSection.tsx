import React, { useState, useEffect } from 'react';
import { ArrowUp, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedService, setSelectedService] = useState('Launch Campaign');
  const [currentTime, setCurrentTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    budget: '$5k - $15k',
    message: ''
  });

  const emailAddress = 'harshpreetkaur1598@gmail.com';

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeStr);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="flex items-center gap-2 mb-3 font-courier text-xs sm:text-sm font-bold text-[#FF0000] uppercase tracking-widest">
            <span className="w-2.5 h-2.5 bg-[#FF0000] inline-block" />
            <span>COMMISSION BRIEF & STRATEGY INQUIRIES</span>
          </div>
          <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tight leading-[0.92] uppercase">
            HAVE A BRIEF? <br />
            <span className="text-[#FF0000]">LET'S TALK MONEY & METRICS.</span>
          </h2>
          <p className="font-courier text-sm sm:text-base text-neutral-800 max-w-2xl mt-4 font-medium leading-relaxed">
            Weak buckets drain budgets. Let's build full-funnel copy architecture that converts
            curiosity into high-retention revenue.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16">
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Quick Copy Email Box */}
            <div className="p-6 bg-neutral-100">
              <span className="font-courier text-[11px] font-bold text-neutral-500 uppercase block mb-1">
                // DIRECT INBOX DISPATCH:
              </span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-2">
                <span className="font-courier text-sm sm:text-base font-bold text-black break-all select-text">
                  {emailAddress}
                </span>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="bg-black text-white hover:bg-[#FF0000] px-3.5 py-2 font-courier text-xs font-bold uppercase flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-5 bg-neutral-50">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span className="font-courier text-xs font-bold uppercase tracking-wider text-black">
                  CURRENT AVAILABILITY:
                </span>
              </div>
              <p className="font-courier text-xs text-neutral-700 leading-normal">
                Currently booking select <strong>Q3/Q4 Brand Retainers</strong> and{' '}
                <strong>High-Velocity Creative Strategy Sprints</strong>. Response turnaround: under
                24 hours.
              </p>
            </div>

            {/* Social & Channel Links */}
            <div>
              <span className="font-courier text-xs font-bold uppercase text-neutral-500 block mb-3">
                // EXTERNAL PROFILES & SOCIAL CHANNELS:
              </span>
              <div className="grid grid-cols-2 gap-2.5 font-courier text-xs font-bold uppercase">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-100 p-3 hover:bg-black hover:text-white transition-colors flex justify-between items-center"
                >
                  <span>LINKEDIN</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-100 p-3 hover:bg-black hover:text-white transition-colors flex justify-between items-center"
                >
                  <span>INSTAGRAM</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-100 p-3 hover:bg-black hover:text-white transition-colors flex justify-between items-center"
                >
                  <span>SUBSTACK</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-100 p-3 hover:bg-black hover:text-white transition-colors flex justify-between items-center"
                >
                  <span>TWITTER / X</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Location & Time Stamp */}
            <div className="font-courier text-xs text-neutral-500 space-y-1">
              <div>BASE: MUMBAI // NEW DELHI // REMOTE WORLDWIDE</div>
              <div>LOCAL TIME (IST): {currentTime || '12:00:00 PM'}</div>
            </div>
          </div>

          {/* Right Column: Brutalist Project Brief Dispatch Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-neutral-50">
            <div className="flex justify-between items-center pb-4 mb-6">
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
              <form onSubmit={handleSubmit} className="space-y-5 font-courier text-xs">
                {/* Service Selection Pills */}
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-2">
                    SELECT PRIMARY FOCUS AREA:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Launch Campaign',
                      'Creative Strategy',
                      'Meta Ad Copy',
                      'Retention & CRM',
                      'D2C PDP & Story'
                    ].map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setSelectedService(srv)}
                        className={`px-3 py-1.5 uppercase font-bold transition-all cursor-pointer ${
                          selectedService === srv
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-neutral-200'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
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
                      className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black"
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
                      className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black"
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
                      className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      ESTIMATED SCOPE BUDGET
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-white p-3 font-courier text-xs text-black focus:outline-none focus:ring-1 focus:ring-black"
                    >
                      <option value="$2.5k - $5k">$2,500 - $5,000 (Sprint)</option>
                      <option value="$5k - $15k">$5,000 - $15,000 (Full Campaign)</option>
                      <option value="$15k+">$15,000+ (Quarterly Retainer)</option>
                      <option value="Undetermined">To Be Scoped</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    PROJECT OBJECTIVES & TIMELINE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your product, what's currently failing in your copy, and your target campaign launch date..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white p-3 font-courier text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black"
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

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-courier text-[11px] text-neutral-400">
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
