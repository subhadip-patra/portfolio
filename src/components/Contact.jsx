import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-mono">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {["name", "email", "message"].map((field) => (
            <div key={field}>
              <label
                className="block text-sm text-slate-300 mb-2 capitalize"
                htmlFor={field}
              >
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white"
                  placeholder="Your message..."
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  required
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white"
                  placeholder={`Your ${field}`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg hover:bg-cyan-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
