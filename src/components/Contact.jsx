import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  Copy,
  MessageSquare,
  FileDown,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only static mailto action
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 w-full relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[450px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            I'm currently looking for opportunities where I can contribute my development skills, learn from experienced teams, and grow as a Full Stack Developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Left Column: Direct Info & Floating Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy button */}
            <div className="p-8 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 backdrop-blur-xl shadow-xl hover:border-amber-400/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-md">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </h4>
                  <p className="text-base sm:text-lg font-semibold text-white break-all">
                    {personal.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/80 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-amber-400" />
                    <span className="text-amber-400 font-bold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-8 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 backdrop-blur-xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-md">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location
                </h4>
                <p className="text-base sm:text-lg font-semibold text-white">
                  {personal.location}
                </p>
              </div>
            </div>

            {/* Phone Card */}
            {personal.phone && (
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="p-8 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 hover:border-amber-400/40 backdrop-blur-xl flex items-center gap-4 shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone / WhatsApp
                  </h4>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {personal.phone}
                  </p>
                </div>
              </a>
            )}

            {/* Floating Social Icons & Resume Card */}
            <div className="p-8 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 backdrop-blur-xl shadow-xl space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Connect & Repositories
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gowtham's GitHub"
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-amber-300 hover:border-amber-400/50 hover:bg-slate-700 transition-all shadow-md animate-float-medium"
                  >
                    <GithubIcon size={22} />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gowtham's LinkedIn"
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-amber-300 hover:border-amber-400/50 hover:bg-slate-700 transition-all shadow-md animate-float-reverse"
                  >
                    <LinkedinIcon size={22} />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href={personal.resumeUrl}
                  download="Gowtham_B_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 shadow-md shadow-amber-500/20 transition-all"
                >
                  <FileDown size={16} />
                  <span>Download Complete Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#10131a]/60 border border-slate-800/90 backdrop-blur-xl shadow-2xl shadow-black/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Triggers prefilled mailto message directly to {personal.email}
                  </p>
                </div>
              </div>

              {submitted && (
                <div className="mb-8 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm flex items-center gap-3">
                  <Check size={20} className="shrink-0" />
                  <span>Opening your email client to send message to Gowtham B!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiter / Client"
                      className="w-full px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className="w-full px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Opportunity / Project Collaboration"
                    className="w-full px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Gowtham, I'd like to discuss an opportunity..."
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] text-base cursor-pointer"
                >
                  <Send size={18} />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
