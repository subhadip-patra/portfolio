import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-mono">Get In Touch</h2>

        <form
          name="contact"
          method="POST"
          netlify
          className="space-y-6 text-left"
        >
          {/* Honeypot Field (hidden from users) */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Name Field */}
          <div>
            <label className="block text-sm text-slate-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-sm text-slate-300 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="Your email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              className="block text-sm text-slate-300 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Send Message
          </button>
        </form>

        {/* Alternative Contact */}
        <p className="mt-8 text-slate-400 text-sm">
          Or email me directly at{" "}
          <a
            href="mailto:spatra5236@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            spatra5236@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
