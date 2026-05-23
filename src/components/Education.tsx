import { GraduationCap, Eye } from "lucide-react";
import { useState } from "react";
import certCs50x from "@/assets/cert-cs50x.png";
import certCs50Scratch from "@/assets/cert-cs50-scratch.png";

const EDUCATION = [
  {
    degree: "Bachelor in Science, Computer Science and Engineering",
    institution: "Sonargaon University (SU)",
    year: "January 2024 - Present",
    description: "Pursuing BSc in CSE with a focus on cybersecurity, networking, and software development.",
    website: "https://su.edu.bd",
    image: "",
  },
  {
    degree: "CS50x - Introduction to Computer Science",
    institution: "Harvard University",
    year: "2025",
    description: "Completed CS50x including ten problem sets and one final project. Awarded from Cambridge, Massachusetts.",
    image: certCs50x,
  },
  {
    degree: "CS50's Introduction to Programming with Scratch",
    institution: "Harvard University",
    year: "2024",
    description: "Completed CS50's Introduction to Programming with Scratch, including nine projects.",
    image: certCs50Scratch,
  },
  {
    degree: "Cyber Security & Ethical Hacking",
    institution: "Cyber Bangla",
    year: "December 2024 - November 2025",
    description: "Specialized training in cybersecurity and ethical hacking methodologies.",
    image: "",
  },
  {
    degree: "Mission 2025",
    institution: "Byte Capsule",
    year: "2025",
    description: "Intensive program focused on advancing technical skills and career readiness.",
    image: "",
  },
];

const Education = () => {
  const [viewImage, setViewImage] = useState<string | null>(null);

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
          &gt; Education
        </h2>
        <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Academic background and qualifications
        </p>

        <div className="reveal max-w-3xl mx-auto space-y-6">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <GraduationCap size={12} className="text-primary" />
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="text-foreground font-semibold">{edu.degree}</h3>
                <p className="text-primary text-sm font-mono">
                  {edu.website ? (
                    <a href={edu.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {edu.institution}
                    </a>
                  ) : (
                    edu.institution
                  )}
                </p>
                <p className="text-muted-foreground text-xs font-mono mt-1">{edu.year}</p>
                <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>
                {edu.image && (
                  <button
                    onClick={() => setViewImage(edu.image)}
                    className="flex items-center gap-1 mt-3 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                  >
                    <Eye size={12} />
                    View Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setViewImage(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={viewImage} alt="Certificate" className="w-full rounded-lg border border-border shadow-lg" />
            <button
              onClick={() => setViewImage(null)}
              className="mt-4 mx-auto block px-4 py-2 text-sm font-mono rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
