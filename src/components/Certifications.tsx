import { Award, Eye } from "lucide-react";
import { useState } from "react";
import certIsoLeadAuditor from "@/assets/cert-iso-lead-auditor.png";
import certIso27001LeadAuditor from "@/assets/cert-iso-27001-lead-auditor.png";
import certCtiga from "@/assets/cert-ctiga.png";
import certCapt from "@/assets/cert-capt.png";
import certCasa from "@/assets/cert-casa.png";
import certAspire from "@/assets/cert-aspire.png";
import certLeadershipMastery from "@/assets/cert-leadership-mastery.png";
import certUmdCoursera from "@/assets/cert-umd-coursera.png";
import certCpps from "@/assets/cert-cpps.png";
import certCrtom from "@/assets/cert-crtom.png";
import certCcep from "@/assets/cert-ccep.png";
import certCscrb from "@/assets/cert-cscrb.png";

const CERTIFICATIONS = [
  {
    title: "Certified API Security Analyst (CASA)",
    issuer: "APISEC University",
    year: "2026",
    credentialId: "84ff055a-d0ae-4b13-8ced-29dfef5aec49",
    issued: "2026-04-29",
    expires: "",
    creditHours: "",
    image: certCasa,
  },
  {
    title: "Certified Associate Penetration Tester (CAPT)",
    issuer: "Hackviser",
    year: "2026",
    credentialId: "HV-CAPT-6PMPD7LD",
    issued: "2026-01-16",
    expires: "",
    creditHours: "",
    image: certCapt,
  },
  {
    title: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    issuer: "Red Team Leaders",
    year: "2026",
    credentialId: "41d39f04628ec395",
    issued: "2026-03-19",
    expires: "",
    creditHours: "",
    image: certCtiga,
  },
  {
    title: "ISO/IEC 27001:2022 Lead Auditor",
    issuer: "Mastermind Assurance",
    year: "2026",
    credentialId: "krfzdljboe",
    issued: "2026-03-11",
    expires: "2029-03-10",
    creditHours: "16",
    image: certIso27001LeadAuditor,
  },
  {
    title: "ISO/IEC 42001:2023 Lead Auditor",
    issuer: "Mastermind Assurance",
    year: "2026",
    credentialId: "w4wmrfet12",
    issued: "2026-02-10",
    expires: "2029-02-09",
    creditHours: "24",
    image: certIsoLeadAuditor,
  },
  {
    title: "2025 Aspire Leaders Program",
    issuer: "Aspire Institute",
    year: "2025",
    credentialId: "",
    issued: "2025-08",
    expires: "",
    creditHours: "40",
    image: certAspire,
  },
  {
    title: "Leadership Mastery",
    issuer: "Leadership Development Academy (ILC 1.0)",
    year: "2025",
    credentialId: "",
    issued: "",
    expires: "",
    creditHours: "",
    image: certLeadershipMastery,
  },
  {
    title: "Cybersecurity Risk Management Across Critical Systems",
    issuer: "University of Maryland (Coursera)",
    year: "2025",
    credentialId: "8FP9GZRK7254",
    issued: "2025-12-08",
    expires: "",
    creditHours: "",
    image: certUmdCoursera,
  },
  {
    title: "Certified Phishing Prevention Specialist (CPPS)",
    issuer: "Hack & Fix Academy",
    year: "2025",
    credentialId: "5617-4278-6029-2683",
    issued: "2025-12-21",
    expires: "",
    creditHours: "",
    image: certCpps,
  },
  {
    title: "Certified Red Team Operations Management (CRTOM)",
    issuer: "Red Team Leaders",
    year: "2025",
    credentialId: "26c5eb1e9bedb6e7",
    issued: "2025-12-26",
    expires: "",
    creditHours: "",
    image: certCrtom,
  },
  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Red Team Leaders",
    year: "2025",
    credentialId: "6d536d0ee7a71b93",
    issued: "2025-11-18",
    expires: "",
    creditHours: "",
    image: certCcep,
  },
  {
    title: "Certified Security Code Review Beginners (CSCRB)",
    issuer: "Red Team Leaders",
    year: "2025",
    credentialId: "21d4cd47b720b26a",
    issued: "2025-12-26",
    expires: "",
    creditHours: "",
    image: certCscrb,
  },
];

const Certifications = () => {
  const [viewImage, setViewImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-4 font-mono text-glow-green text-primary">
          &gt; Certifications
        </h2>
        <p className="reveal text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Professional certifications and credentials
        </p>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <Award className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-foreground font-semibold mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span className="font-mono">{cert.year}</span>
                {cert.credentialId && <span className="font-mono text-primary/70">{cert.credentialId}</span>}
              </div>
              {cert.issued && cert.expires && (
                <p className="text-xs text-muted-foreground font-mono">
                  Valid: {cert.issued} - {cert.expires}
                </p>
              )}
              {cert.issued && !cert.expires && (
                <p className="text-xs text-muted-foreground font-mono">
                  Issued: {cert.issued}
                </p>
              )}
              {cert.image && (
                <button
                  onClick={() => setViewImage(cert.image)}
                  className="flex items-center gap-1 mt-3 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                >
                  <Eye size={12} />
                  View Certificate
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {viewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setViewImage(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={viewImage} alt="Certificate" className="w-full rounded-lg border border-border shadow-lg" />
            <button
              onClick={() => setViewImage(null)}
              className="mt-4 mx-auto block px-4 py-2 text-sm font-mono rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
