const SKILL_CATEGORIES = [
  {
    title: "Web Security",
    color: "primary",
    skills: ["OWASP Top 10", "XSS / CSRF", "SQL Injection", "API Security", "Authentication Bypass", "Session Hijacking"],
  },
  {
    title: "Network Security",
    color: "secondary",
    skills: ["TCP/IP Analysis", "Firewall Config", "IDS/IPS", "Wireless Security", "VPN Auditing", "Packet Analysis"],
  },
  {
    title: "Tools & Platforms",
    color: "primary",
    skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "Kali Linux", "Nessus", "OWASP ZAP", "Ghidra"],
  },
  {
    title: "Scripting & Dev",
    color: "secondary",
    skills: ["Python", "Bash", "JavaScript", "PowerShell", "SQL", "Go"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 px-4 bg-card/30">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
        &gt; Skills
      </h2>
      <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Technical arsenal and expertise areas
      </p>

      <div className="reveal grid sm:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.title} className="p-6 rounded-lg bg-card border border-border">
            <h3 className={`font-mono font-semibold mb-4 ${cat.color === "primary" ? "text-primary text-glow-green" : "text-secondary text-glow-blue"}`}>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all hover:scale-105 ${
                    cat.color === "primary"
                      ? "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10"
                      : "border-secondary/30 text-secondary bg-secondary/5 hover:bg-secondary/10"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
