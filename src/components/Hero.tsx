import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown, Bug, Shield, SearchCode } from "lucide-react";
import profileImg from "@/assets/profile.png";

const TYPING_TEXT = "Securing digital assets. Breaking systems to build them stronger.";

const AFFILIATIONS = "CS50's/CS50'x Alumni || Aspire Leadership Program 25 || ALP Alumni || Cyber Security Researcher || CAPT || ISO/IEC 42001:2023 Lead Auditor || CRTOM || CCEP || CSCRB || CPPS || Bug Hunter || Pentester || Ethical Hacker";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setDisplayText(TYPING_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center cyber-grid scanline overflow-hidden pt-24 pb-12 lg:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text content */}
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary text-glow-green leading-tight mb-4">
            Md. Rafiuzzaman<br />Sowrov
          </h1>
          <p className="text-lg sm:text-xl text-secondary font-semibold mb-5">
            Certified Ethical Hacker &amp; Cybersecurity Specialist
          </p>

          {/* Affiliations bar */}
          <div className="rounded-lg border border-primary/30 bg-primary/5 px-5 py-3 mb-6 max-w-xl">
            <p className="font-mono text-xs sm:text-sm text-primary/90 leading-relaxed">
              {AFFILIATIONS}<span className={showCursor ? "typing-cursor" : ""} />
            </p>
          </div>

          {/* Bio line */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            {displayText}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition box-glow-green"
            >
              <Mail size={18} /> Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-secondary text-secondary font-semibold hover:bg-secondary/10 transition"
            >
              View Projects
            </a>
            <button
              type="button"
              onClick={() => window.open("https://drive.google.com/file/d/1yuy7F4qhPAT6HFSafGXpmqGy6rOVU1gp/view?usp=sharing", "_blank", "noopener,noreferrer")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition"
            >
              <Download size={18} /> Download CV
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
          {[
              { icon: Linkedin, href: "https://linkedin.com/in/md-rafiuzzaman-sourov-715b78279", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/MdRafiuzzamanSowrov", label: "GitHub" },
              { icon: Bug, href: "https://bugcrowd.com/h/Md_Rafiuzzaman_Sowrov", label: "Bugcrowd" },
              { icon: Shield, href: "https://hackerone.com/md_rafiuzzaman_sowrov?type=user", label: "HackerOne" },
              { icon: SearchCode, href: "https://yeswehack.com/user/profile#latest-hacktivity", label: "YesWeHack" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Large profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative p-3">
            <div className="absolute inset-0 rounded-xl border border-primary/30 box-glow-green" />
            <img
              src={profileImg}
              alt="Md. Rafiuzzaman Sowrov"
              className="relative rounded-xl w-72 h-80 sm:w-80 sm:h-96 md:w-[22rem] md:h-[26rem] object-cover border-2 border-primary/50"
            />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground font-mono text-xs">
        <span>SCROLL DOWN</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
