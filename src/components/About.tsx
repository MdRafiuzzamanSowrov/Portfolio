import { Bug, Flag, GraduationCap, Wrench } from "lucide-react";

const TERMINAL_LINES = [
  { cmd: "whoami", output: "rafiuzzaman_sowrov" },
  { cmd: "cat skills.txt", output: "VAPT, Web Security, AD Attacks\n  Network Forensics, SOC, ICS/OT" },
  { cmd: "cat location.txt", output: "Dhaka, Bangladesh" },
  { cmd: "cat education.txt", output: "BSc CSE @ Sonargaon University (SU)" },
  { cmd: "cat status.txt", output: "Open to opportunities_" },
];

const ROLES = [
  { icon: Bug, label: "Bug Bounty Hunter" },
  { icon: Flag, label: "CTF Competitor" },
  { icon: GraduationCap, label: "Security Trainer" },
  { icon: Wrench, label: "Tool Developer" },
];

const About = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          About <span className="text-primary text-glow-green">Me</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Learn more about my background, interests, and what drives me in the cybersecurity field.
        </p>
      </div>

      {/* Two-column: Bio + Terminal */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Bio */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-glow-green mb-6">
            Security Researcher &amp; CTF Enthusiast
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-5">
            I'm a passionate Computer Science Engineering student with a deep interest in offensive security.
            My journey in cybersecurity started with curiosity about how systems can be compromised and has evolved
            into a professional pursuit of making the digital world more secure.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With experience in web application security, Active Directory attacks, network forensics, and SOC
            fundamentals, I bring a comprehensive approach to security assessments. I actively participate in
            national and international CTF competitions.
          </p>

          {/* Role cards */}
          <div className="grid grid-cols-2 gap-3">
            {ROLES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <Icon className="text-primary shrink-0" size={20} />
                <span className="text-foreground text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="rounded-lg border border-border bg-cyber-dark overflow-hidden">
          {/* Terminal titlebar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-muted-foreground text-sm font-mono">sowrov@kali:~</span>
          </div>
          {/* Terminal body */}
          <div className="p-5 font-mono text-sm space-y-4">
            {TERMINAL_LINES.map(({ cmd, output }) => (
              <div key={cmd}>
                <p>
                  <span className="text-primary">$</span>{" "}
                  <span className="text-primary font-semibold">{cmd}</span>
                </p>
                <p className="text-muted-foreground whitespace-pre-line ml-3 mt-0.5">{output}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
