import { Mail, MapPin, Download, Phone, Linkedin, Github, Bug, Shield, Youtube } from "lucide-react";

const SOCIALS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "md-rafiuzzaman-sourov",
    url: "https://linkedin.com/in/md-rafiuzzaman-sourov-715b78279",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "MdRafiuzzamanSowrov",
    url: "https://github.com/MdRafiuzzamanSowrov",
  },
  {
    icon: Shield,
    label: "HackerOne",
    handle: "md_rafiuzzaman_sowrov",
    url: "https://hackerone.com/md_rafiuzzaman_sowrov?type=user",
  },
  {
    icon: Bug,
    label: "Bugcrowd",
    handle: "Md_Rafiuzzaman_Sowrov",
    url: "https://bugcrowd.com/h/Md_Rafiuzzaman_Sowrov",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "Cybernetix Avenue",
    url: "https://www.youtube.com/@Rolls_Royce-w8h",
  },
];

const INFO = [
  { icon: Mail, label: "Email", value: "rafiuzzamansourov@gmail.com", href: "mailto:rafiuzzamansourov@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "+880 1838014986", href: "https://wa.me/8801838014986" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
          &gt; Contact
        </h2>
        <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Ready to secure your systems? Let's talk.
        </p>

        <div className="reveal grid md:grid-cols-2 gap-6">
          {/* LEFT — Social handles */}
          <div className="relative p-6 rounded-lg bg-card border border-border overflow-hidden">
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-2">~/social-handles</span>
            </div>

            <div className="mt-10 space-y-3">
              <p className="font-mono text-xs text-primary mb-4">
                <span className="text-muted-foreground">$</span> ls -la ./connect/
              </p>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md bg-background/50 border border-border hover:border-primary hover:bg-primary/5 hover:translate-x-1 transition-all group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition">
                    <s.icon className="text-primary" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-foreground font-semibold text-sm">{s.label}</h4>
                    <p className="text-muted-foreground text-xs font-mono truncate">@{s.handle}</p>
                  </div>
                  <span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Direct contact */}
          <div className="relative p-6 rounded-lg bg-card border border-border overflow-hidden">
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-2">~/direct-contact</span>
            </div>

            <div className="mt-10 space-y-4">
              <p className="font-mono text-xs text-primary mb-4">
                <span className="text-muted-foreground">$</span> cat ./contact.info
              </p>

              {INFO.map((item) => {
                const content = (
                  <div className="flex items-start gap-3 p-3 rounded-md bg-background/50 border border-border hover:border-primary/50 transition group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition flex-shrink-0">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-foreground font-semibold text-sm">{item.label}</h4>
                      <p className="text-muted-foreground text-xs break-all">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1yuy7F4qhPAT6HFSafGXpmqGy6rOVU1gp/view?usp=sharing",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 mt-2 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition box-glow-green"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
