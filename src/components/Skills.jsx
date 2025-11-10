import React from "react";
import skills from "../data/skills";

const Skills = () => (
  <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 font-mono">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
