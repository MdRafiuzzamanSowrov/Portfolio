import { Flag, Trophy, Target, Medal, ExternalLink } from "lucide-react";

interface CTFEntry {
  icon: React.ElementType;
  title: string;
  description: string;
  year: string;
  link?: string;
}

const CTF_ACHIEVEMENTS: CTFEntry[] = [
  {
    icon: Trophy,
    title: "HackerHunt 2025 — Champion",
    description: "Won the intra-university solo CTF competition at Sonargaon University.",
    year: "2025",
    link: "https://www.linkedin.com/posts/md-rafiuzzaman-sourov-715b78279_hackerhunt25-cybersecurity-programming-activity-7375963733937999873-YdbK",
  },
  {
    icon: Medal,
    title: "POTDF CTF 2025 — 6th Place (Solo)",
    description: "Ranked 6th among 40+ teams as a solo performer.",
    year: "2025",
    link: "https://www.linkedin.com/posts/md-rafiuzzaman-sourov-715b78279_cybersecurity-ctf-capturetheflag-activity-7397667995751256064-_iAc",
  },
  {
    icon: Flag,
    title: "BUP CTF 2025 — 15th in Final",
    description: "Ranked 9th in selection round among 300+ teams, 15th in final among 35 teams.",
    year: "2025",
    link: "https://www.linkedin.com/posts/md-rafiuzzaman-sourov-715b78279_today-at-bup-15th-its-ok-activity-7377324994558660608-Iq5g",
  },
  {
    icon: Medal,
    title: "BUET CTF 2026 — 19th in Final",
    description: "Ranked 15th in selection round among 300+ teams, 19th in final among 35 teams.",
    year: "2026",
    link: "https://www.linkedin.com/posts/md-rafiuzzaman-sourov-715b78279_cybersecurity-ctf-buet-activity-7423297226589945856-Js8D",
  },
  {
    icon: Target,
    title: "Al Khwarizmi Science Fest 2026 — Shibir CTF 9th",
    description: "Ranked 23rd in selection round among 600+ teams, 9th in final.",
    year: "2026",
    link: "https://www.linkedin.com/posts/md-rafiuzzaman-sourov-715b78279_cybersecurity-capturetheflag-ctf-activity-7422894107976699904-SxKh",
  },
  {
    icon: Flag,
    title: "Stealth Flag 3.0 (CUET) — 32nd Place",
    description: "Ranked 32nd among 400+ teams in this CTF organized by CUET.",
    year: "2025",
    link: "https://www.linkedin.com/posts/md-rafiuzzaman-sourov-715b78279_cybersecurity-ctf-marvel-activity-7397665993386389505-VtMl",
  },
  {
    icon: Medal,
    title: "SUCTF 2024 — 3rd Place",
    description: "Secured 3rd place in SUCTF 2024.",
    year: "2024",
    link: "https://www.linkedin.com/posts/md-rafiuzzaman-sourov-715b78279_cybersecurity-ctf-capturetheflag-activity-7266137285534855169-iQ6w",
  },
];

const CTFs = () => {
  return (
    <section id="ctfs" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
          &gt; CTF Competitions
        </h2>
        <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Capture The Flag competitions and achievements
        </p>

        <div className="reveal grid sm:grid-cols-2 gap-6">
          {CTF_ACHIEVEMENTS.map((ctf, i) => {
            const Icon = ctf.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all hover:box-glow-green"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-semibold text-sm sm:text-base">{ctf.title}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{ctf.year}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{ctf.description}</p>
                {ctf.link && (
                  <a
                    href={ctf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-primary hover:underline underline-offset-4 transition-colors"
                  >
                    View on LinkedIn <ExternalLink size={12} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTFs;
