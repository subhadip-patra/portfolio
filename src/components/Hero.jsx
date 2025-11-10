import React from "react";
import pic from "../assets/pic.png";

const Hero = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-2xl blur-3xl"></div>
        <img
          src={pic}
          alt="Subhadip Patra headshot"
          className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-mono">
          <span className="text-cyan-400">Hello,</span> I'm Subhadip Patra
        </h1>
        <p className="text-xl lg:text-2xl text-slate-300 mb-8">
          Front End Developer specializing in creating web-based digital
          experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
