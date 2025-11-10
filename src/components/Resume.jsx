import React from "react";

const Resume = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 font-mono">Resume</h2>
      <p className="text-lg text-slate-300 mb-8">
        Download my resume to learn more about my experience and qualifications.
      </p>
      <a
        href="/resume.pdf"
        download
        className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
      >
        Download Resume (PDF)
      </a>
    </div>
  </section>
);

export default Resume;
