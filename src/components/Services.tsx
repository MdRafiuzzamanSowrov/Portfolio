import { Globe, ShieldCheck, MessageSquare, Bug, Search, GraduationCap } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Web App Penetration Testing",
    description: "Comprehensive testing of web applications to identify vulnerabilities in authentication, authorization, input validation, and business logic.",
  },
  {
    icon: ShieldCheck,
    title: "Vulnerability Assessment",
    description: "Systematic identification and evaluation of security weaknesses across your infrastructure with detailed remediation reports.",
  },
  {
    icon: MessageSquare,
    title: "Security Consultation",
    description: "Strategic security advisory services to help organizations build robust security programs and comply with industry standards.",
  },
  {
    icon: Bug,
    title: "Bug Bounty Support",
    description: "Expert assistance in setting up and managing bug bounty programs, or direct participation in identifying critical vulnerabilities.",
  },
  {
    icon: Search,
    title: "OSINT & Reconnaissance",
    description: "Legal and ethical open-source intelligence gathering to assess your organization's digital footprint and exposure.",
  },
  {
    icon: GraduationCap,
    title: "Training & Mentorship",
    description: "Hands-on cybersecurity training for teams and individuals, covering offensive and defensive security methodologies.",
  },
];

const Services = () => (
  <section id="services" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
        &gt; Services
      </h2>
      <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        How I can help secure your organization
      </p>

      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:box-glow-green"
          >
            <service.icon className="text-primary mb-4 group-hover:text-glow-green transition" size={28} />
            <h3 className="text-foreground font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
