import { Users } from "lucide-react";

const ACTIVITIES = [
  {
    title: "Circuit Clash 2.0",
    role: "Campus Ambassador",
    institution: "Bangladesh University of Professionals (BUP)",
    icon: Users,
  },
  {
    title: "Robolution 2.0",
    role: "Campus Ambassador",
    institution: "Military Institute of Science and Technology (MIST)",
    icon: Users,
  },
];

const Extracurricular = () => (
  <section id="extracurricular" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
        &gt; Extracurricular
      </h2>
      <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Activities and community involvement
      </p>

      <div className="reveal grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {ACTIVITIES.map((activity, i) => {
          const Icon = activity.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Icon className="text-primary mb-4" size={28} />
              <h3 className="text-foreground font-semibold mb-1">{activity.title}</h3>
              <p className="text-primary text-sm font-mono mb-1">{activity.role}</p>
              <p className="text-muted-foreground text-xs">{activity.institution}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Extracurricular;
