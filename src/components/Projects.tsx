import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Expense Tracker",
    problem: "People need a simple way to track and manage their daily expenses.",
    solution: "Built a Python-based expense tracker that allows anyone to note and monitor their daily expenses efficiently.",
    tools: ["Python"],
    link: "https://github.com/MdRafiuzzamanSowrov/Expense_Tracker",
  },
  {
    title: "IoT Intrusion Detection System",
    problem: "IoT networks are vulnerable to anomaly activities that go undetected.",
    solution: "Developed an IoT intrusion detection system that detects anomaly activity and monitors real-world traffic on a machine.",
    tools: ["Python", "Machine Learning", "IoT"],
    link: "https://github.com/MdRafiuzzamanSowrov/IoT-Intrusion-Detection-System",
  },
  {
    title: "MCP Test",
    problem: "Need a testing framework for MCP-based workflows.",
    solution: "Created a testing project for MCP protocol experimentation and validation.",
    tools: ["Python"],
    link: "https://github.com/MdRafiuzzamanSowrov/mcp-test",
  },
  {
    title: "Face Recognition Attendance System",
    problem: "Manual attendance tracking is time-consuming and error-prone.",
    solution: "Built a face recognition-based attendance system that automates the process using computer vision.",
    tools: ["Python", "OpenCV", "Face Recognition"],
    link: "https://github.com/MdRafiuzzamanSowrov/Face_Recognition_Attendance_System",
  },
  {
    title: "Basic Network Sniffer",
    problem: "Need to capture and analyze live network traffic for security analysis.",
    solution: "A Python-based network sniffer using Scapy to capture and analyze live TCP, UDP, and ICMP traffic with real-time viewing and PCAP export.",
    tools: ["Python", "Scapy", "Networking"],
    link: "https://github.com/MdRafiuzzamanSowrov/Basic_Network_Sniffer",
  },
  {
    title: "Basic Keylogger",
    problem: "Need a controlled tool to study keystroke capture techniques for defensive analysis.",
    solution: "A Python-based keylogger that records keystrokes and stores them in both raw text and JSON formats for educational and defensive research.",
    tools: ["Python"],
    link: "https://github.com/MdRafiuzzamanSowrov/Basic_Keylogger",
  },
  {
    title: "StealthLogger",
    problem: "Defensive teams need to understand how advanced keyloggers exfiltrate data to build better detections.",
    solution: "An advanced keylogger that captures keystrokes from a host and exfiltrates them via email, built strictly for educational and defensive research.",
    tools: ["Python", "SMTP"],
    link: "https://github.com/MdRafiuzzamanSowrov/StealthLogger",
  },
  {
    title: "Malware Scanner",
    problem: "Users need a quick way to detect potentially malicious files on their system.",
    solution: "A Python-based malware scanner that analyzes files and flags suspicious indicators for defensive review.",
    tools: ["Python"],
    link: "https://github.com/MdRafiuzzamanSowrov/Malware_Scanner",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-card/30">
    <div className="max-w-6xl mx-auto">
      <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
        &gt; Projects
      </h2>
      <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Real-world engagements and case studies
      </p>

      <div className="reveal grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group p-6 rounded-lg bg-card border border-border hover:border-secondary/40 transition-all duration-300 hover:box-glow-blue"
          >
            <h3 className="text-foreground font-semibold text-lg mb-3">{project.title}</h3>
            <div className="mb-2">
              <span className="text-xs font-mono text-destructive">Problem:</span>
              <p className="text-muted-foreground text-sm">{project.problem}</p>
            </div>
            <div className="mb-4">
              <span className="text-xs font-mono text-primary">Solution:</span>
              <p className="text-muted-foreground text-sm">{project.solution}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-xs font-mono rounded border border-secondary/30 text-secondary bg-secondary/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary text-sm hover:underline shrink-0"
              >
                GitHub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
