import { BookOpen, ExternalLink, Clock, FlaskConical } from "lucide-react";

const PUBLICATIONS = [
  {
    title: "GenEdgeGuard: A Lightweight, Explainable Automatic Intrusion Detection System and Response",
    journal: "In Progress",
    year: "2025",
    abstract: "A lightweight and explainable automatic intrusion detection and response system designed for edge computing environments.",
    link: "",
    status: "in-progress",
  },
  {
    title: "AI in Alzheimer's Disease",
    journal: "Peer Review",
    year: "2025",
    abstract: "Exploring the applications of artificial intelligence in early detection and treatment of Alzheimer's disease.",
    link: "",
    status: "peer-review",
  },
  {
    title: "Nano Robotics in Medical Science",
    journal: "Peer Review",
    year: "2025",
    abstract: "Investigating the potential of nano-scale robotics for targeted drug delivery and minimally invasive medical procedures.",
    link: "",
    status: "peer-review",
  },
];

const Research = () => (
  <section id="research" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
        &gt; Research &amp; Journals
      </h2>
      <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Ongoing research and academic contributions
      </p>

      <div className="reveal max-w-3xl mx-auto space-y-6">
        {PUBLICATIONS.map((pub, i) => (
          <div
            key={i}
            className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <BookOpen className="text-primary mt-1 shrink-0" size={24} />
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-1">{pub.title}</h3>
                <div className="flex items-center gap-2 mb-1">
                  {pub.status === "peer-review" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded-full border border-yellow-500/30 text-yellow-500 bg-yellow-500/5">
                      <Clock size={10} /> Peer Review
                    </span>
                  )}
                  {pub.status === "in-progress" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded-full border border-blue-500/30 text-blue-500 bg-blue-500/5">
                      <FlaskConical size={10} /> In Progress
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-xs font-mono mb-3">{pub.year}</p>
                <p className="text-muted-foreground text-sm mb-3">{pub.abstract}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                  >
                    Read Paper <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
