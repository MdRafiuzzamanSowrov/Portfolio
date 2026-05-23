import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-primary text-sm text-glow-green">&gt;_Rafiuzzaman Sowrov</p>
          <p className="text-muted-foreground text-xs mt-1">
            Certified Ethical Hacker &amp; Cybersecurity Specialist
          </p>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/md-rafiuzzaman-sourov-715b78279", label: "LinkedIn" },
            { icon: Mail, href: "mailto:rafiuzzamansourov@gmail.com", label: "Email" },
            { icon: Github, href: "https://github.com/MdRafiuzzamanSowrov", label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs mb-2">
          All activities are authorized and for educational/defensive purposes.
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Md. Rafiuzzaman Sowrov. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
