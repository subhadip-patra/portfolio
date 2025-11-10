import React from "react";
import pic from "../assets/pic.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Headshot */}
          <img
            src={pic}
            alt="Subhadip Patra"
            className="w-40 h-40 rounded-full object-cover ring-2 ring-gray-100/20 border-2 border-gray-100 flex-shrink-0"
            loading="lazy"
            decoding="async"
          />

          {/* Condensed About Text */}
          <div className="text-base text-slate-300 leading-relaxed space-y-4">
            <p>
              I'm a CSE student at Chandigarh University with a strong focus on
              software engineering and automation. My journey began with Java,
              and has grown into full-stack development and building smart IoT
              systems.
            </p>
            <p>
              I’ve developed practical solutions like resume builder apps,
              automation bots, and voice-controlled home automation, using tools
              like React, Node.js, Firebase, Python, and UiPath.
            </p>
            <p>
              I’m driven by clean code, creative problem-solving, and learning
              new technologies to build impactful digital experiences.
            </p>

            {/* Core Principles */}
            <div className="pt-2">
              <h3 className="text-lg font-semibold text-white mb-2">
                Core Values
              </h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">▸</span> Build real-world
                  impact
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">▸</span> Write clean, scalable
                  code
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">▸</span> Stay curious & keep
                  learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
