import { Briefcase, ExternalLink } from "lucide-react";
import { useState } from "react";

const EXPERIENCE = [
  {
    title: "Founder & CEO",
    company: "Cybernetix_Avenue",
    period: "October 2025 - Present",
    description: "A Cyber security institute where anyone can learn one of the most valuable skills in cyber security and ethical hacking for FREE.",
    youtube: "https://www.youtube.com/@Rolls_Royce-w8h",
    technologies: ["Cyber Security", "Ethical Hacking", "Leadership"],
    details: "Founded and leading Cybernetix_Avenue, building a community-driven platform that provides free cybersecurity education. Managing curriculum development, mentoring students, and organizing hands-on workshops.",
  },
  {
    title: "Research Assistant",
    company: "Neurobridge Research Bangladesh",
    period: "August 2025 - Present",
    description: "Contributing to research initiatives in the field of cybersecurity and technology.",
    technologies: ["Research", "Cyber Security"],
    details: "Assisting in cybersecurity research projects, conducting literature reviews, and contributing to publications in the domain of information security.",
  },
  {
    title: "Executive Board Member",
    company: "Sonargaon University Programming Club",
    period: "May 2025 - Present",
    description: "Serving on the executive board, organizing programming events and fostering a tech community.",
    technologies: ["Leadership", "Programming", "Community Building"],
    details: "Organizing coding competitions, hackathons, and technical workshops. Mentoring junior members and building partnerships with industry professionals.",
  },
  {
    title: "Official Campus Ambassador",
    company: "International Model United Nations Association (IMUNA)",
    period: "December 2025 - Present",
    description: "Representing IMUNA as an official campus ambassador, promoting international diplomacy and leadership.",
    technologies: ["Public Speaking", "Leadership"],
    details: "Coordinating MUN events on campus, recruiting delegates, and promoting diplomatic discourse and leadership development among university students.",
  },
  {
    title: "Campus Ambassador",
    company: "Hackviser",
    period: "September 2025 - Present",
    description: "Promoting cybersecurity awareness and ethical hacking culture on campus.",
    technologies: ["Cyber Security", "Networking"],
    details: "Driving cybersecurity awareness campaigns, organizing CTF events, and connecting students with industry opportunities in ethical hacking.",
  },
  {
    title: "Campus Ambassador",
    company: "Brighters",
    period: "December 2025 - Present",
    description: "Bridging students with learning opportunities and career development resources.",
    technologies: ["Community Building", "Outreach"],
    details: "Facilitating access to educational resources, career mentorship programs, and professional development workshops for fellow students.",
  },
  {
    title: "Executive",
    company: "Charity for Helpless People",
    period: "2025 - Present",
    description: "A non-profit organization dedicated to serving and uplifting helpless and underprivileged communities.",
    facebook: "https://www.facebook.com/profile.php?id=61574738292665",
    technologies: ["Non-Profit", "Social Work", "Community Service"],
    details: "Contributing as an executive member to plan and execute charitable initiatives, organize relief campaigns, and support underprivileged communities through various outreach programs.",
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
          &gt; Experience
        </h2>
        <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Professional work experience and career journey
        </p>

        <div className="reveal max-w-3xl mx-auto space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="text-foreground font-semibold">{exp.title}</h3>
                <p className="text-primary text-sm font-mono">{exp.company}</p>
                <p className="text-muted-foreground text-xs font-mono mt-1">{exp.period}</p>
                <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                {(exp as any).youtube && (
                  <a
                    href={(exp as any).youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-mono text-primary hover:underline underline-offset-4"
                  >
                    <ExternalLink size={12} /> YouTube Channel
                  </a>
                )}
                {(exp as any).facebook && (
                  <a
                    href={(exp as any).facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 ml-3 text-xs font-mono text-primary hover:underline underline-offset-4"
                  >
                    <ExternalLink size={12} /> Facebook Page
                  </a>
                )}

                {/* Details toggle */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="flex items-center gap-1 mt-3 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={12} />
                  {expandedIndex === i ? "Hide Details" : "View Details"}
                </button>

                {expandedIndex === i && (
                  <div className="mt-3 p-3 rounded bg-primary/5 border border-primary/10 text-sm text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-200">
                    {exp.details}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
