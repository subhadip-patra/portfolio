import { useState } from "react";
import caseStudies from "../data/caseStudies";
import project4 from "../assets/project4.png";
import project2 from "../assets/project2.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

// For now, use project4 for all projects until you add more images
const projectImages = [
  project2, // index 0
  project2, // index 1
  project4, // index 2
  project4, // index 3
  project5, // index 4
  project6, // index 5
];

// Demo content - you can replace these with actual demo videos, iframes, or images
const projectDemos = [
  "", // Example YouTube embed
  "",
  "",
  "https://agrishop-kb7i.onrender.com/",
  "",
  "",
];

// Live website URLs for each project
const liveWebsiteUrls = [
  "", // Add URLs for each project
  "",
  "",
  "https://agrishop-kb7i.onrender.com/",
  "",
  "",
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDemo = (index) => {
    setSelectedProject(index);
    setIsModalOpen(true);
  };

  const closeDemo = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const visitLiveWebsite = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          Projects & Case Studies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors group cursor-pointer"
              onClick={() => openDemo(index)}
            >
              <img
                src={projectImages[index] || project4}
                alt={`${study.title} preview`}
                className="w-full h-48 mb-4 rounded-xl object-cover border border-slate-700"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {study.title}
              </h3>
              <div className="space-y-1 text-sm text-slate-400">
                <p>
                  <span className="text-slate-500">Problem:</span>{" "}
                  {study.problem}
                </p>
                <p>
                  <span className="text-slate-500">Role:</span> {study.role}
                </p>
                <p>
                  <span className="text-slate-500">Outcome:</span>{" "}
                  {study.outcome}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-cyan-400 font-semibold text-sm mb-1">
                  {study.metrics}
                </p>
                <p className="text-slate-500 text-xs">Tech: {study.tech}</p>
              </div>
              <div className="mt-4">
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  View Demo →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {isModalOpen && selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-white">
                {caseStudies[selectedProject]?.title} - Demo
              </h3>
              <button
                onClick={closeDemo}
                className="text-slate-400 hover:text-white transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              {/* Demo Content - Replace with your actual demo content */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                {projectDemos[selectedProject] ? (
                  <iframe
                    src={projectDemos[selectedProject]}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${caseStudies[selectedProject]?.title} Demo`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <p>Demo content not available</p>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Project Overview
                  </h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p>
                      <strong className="text-slate-400">Problem:</strong>{" "}
                      {caseStudies[selectedProject]?.problem}
                    </p>
                    <p>
                      <strong className="text-slate-400">Role:</strong>{" "}
                      {caseStudies[selectedProject]?.role}
                    </p>
                    <p>
                      <strong className="text-slate-400">Outcome:</strong>{" "}
                      {caseStudies[selectedProject]?.outcome}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Technical Details
                  </h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p>
                      <strong className="text-slate-400">Metrics:</strong>{" "}
                      {caseStudies[selectedProject]?.metrics}
                    </p>
                    <p>
                      <strong className="text-slate-400">Tech Stack:</strong>{" "}
                      {caseStudies[selectedProject]?.tech}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-700 flex justify-between items-center">
              {/* Live Website Button */}
              {liveWebsiteUrls[selectedProject] && (
                <button
                  onClick={() =>
                    visitLiveWebsite(liveWebsiteUrls[selectedProject])
                  }
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Live Website
                </button>
              )}

              <div className="flex gap-3">
                {/* Close Demo Button */}
                <button
                  onClick={closeDemo}
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
                >
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
