import { Quote, Linkedin } from "lucide-react";

const REFERENCES = [
  {
    name: "Md. Habibur Rahman",
    title: "Senior Executive Officer",
    organization: "Bangladesh Edible Oil Limited",
    contact: "01780466209 | habibmbstu13@gmail.com",
    linkedin: "https://www.linkedin.com/in/habibur-rahman-66214989/",
  },
  {
    name: "Md. Rony Talukder",
    title: "Senior Officer",
    organization: "Snowtex Group",
    contact: "01301459080 | almasroni101@gmail.com",
  },
  {
    name: "Md. Bulbul Ahmed",
    title: "Dept. Head, Dept. of CSE",
    organization: "Sonargaon University",
    contact: "+880 1977-880888 | bulbul_cse@su.edu.bd",
  },
  {
    name: "Mst. Salma Tabassum",
    title: "Co-ordinator, Dept. of CSE",
    organization: "Sonargaon University",
    contact: "+8801719705950 | baridhi.tabassum@gmail.com",
  },
  {
    name: "Mst. Sadia Jaman Nigar",
    title: "Lecturer, Dept. of CSE",
    organization: "Sonargaon University",
    contact: "01783909040 | sadiajnigar@gmail.com",
  },
  {
    name: "Mst. Oishika Khair Esha",
    title: "Lecturer, Dept. of CSE",
    organization: "Sonargaon University",
    contact: "+8801716062643 | Oishika.cse.su@gmail.com",
  },
];

const References = () => (
  <section id="references" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
        &gt; References
      </h2>
      <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Testimonials from colleagues, mentors, and clients
      </p>

      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REFERENCES.map((ref, i) => (
          <div
            key={i}
            className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors flex flex-col"
          >
            <div className="flex-1 mb-4">
              <h3 className="text-foreground font-semibold text-sm">{ref.name}</h3>
              <p className="text-primary text-xs font-mono mt-1">{ref.title}</p>
              <p className="text-muted-foreground text-xs">{ref.organization}</p>
              {ref.contact && (
                <p className="text-muted-foreground/70 text-xs mt-2 font-mono">{ref.contact}</p>
              )}
            </div>
            {"linkedin" in ref && ref.linkedin && (
              <a href={ref.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-xs hover:underline">
                <Linkedin size={14} /> LinkedIn
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default References;
