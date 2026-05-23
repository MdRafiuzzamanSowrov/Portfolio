import { Award, Trophy, ShieldCheck, Flag, Rocket, Eye, GraduationCap } from "lucide-react";
import { useState } from "react";
import certNasaVdp from "@/assets/cert-nasa-vdp.png";
import certAspireLetter from "@/assets/cert-aspire-letter.png";

const ACHIEVEMENTS = [
  {
    icon: Rocket,
    title: "NASA Vulnerability Disclosure Policy (VDP) Recognition",
    org: "National Aeronautics and Space Administration (NASA)",
    year: "2025",
    image: certNasaVdp,
  },
  {
    icon: GraduationCap,
    title: "Aspire Leaders Program 2025 - Cohort 3 Finalist",
    org: "Aspire Institute (Founded at Harvard University)",
    year: "2025",
    image: certAspireLetter,
  },
];

const Achievements = () => {
  const [viewImage, setViewImage] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
          &gt; Achievements
        </h2>
        <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Certifications, awards, and milestones
        </p>

        <div className="reveal space-y-4">
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-foreground font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.org}</p>
                {item.image && (
                  <button
                    onClick={() => setViewImage(item.image)}
                    className="flex items-center gap-1 mt-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                  >
                    <Eye size={12} />
                    View Certificate
                  </button>
                )}
              </div>
              <span className="text-xs font-mono text-primary flex-shrink-0">{item.year}</span>
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

export default Achievements;
