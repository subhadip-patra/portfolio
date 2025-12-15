import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key.env.REACT_APP_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          redirect_url: "https://web3forms.com/success",
          to_email: "spatra5236@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false, message: "" }));
        }, 5000);
      } else {
        throw new Error(result.message || "Something went wrong!");
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-mono">Get In Touch</h2>

        {/* Success Message */}
        {status.success && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 flex items-center justify-center gap-2">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            {status.message}
          </div>
        )}

        {/* Error Message */}
        {status.error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 flex items-center justify-center gap-2">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
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
              value={formData.name}
              onChange={handleChange}
              disabled={status.loading}
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all disabled:opacity-50"
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
              value={formData.email}
              onChange={handleChange}
              disabled={status.loading}
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all disabled:opacity-50"
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
              value={formData.message}
              onChange={handleChange}
              disabled={status.loading}
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none disabled:opacity-50"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          >
            {status.loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
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
              </>
            )}
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
