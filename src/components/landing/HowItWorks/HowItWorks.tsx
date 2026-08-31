import { STEPS } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";

export function HowItWorks() {
  return (
    <section id="platform" className="workflow section-shell">
      <header className="workflow__heading reveal"><p className="section-kicker">From profile to profession</p><h2 className="section-title">Your career journey,<br /><span>engineered end to end.</span></h2></header>
      <ol className="workflow__track">
        {STEPS.map((step, index) => <li key={step.title} className="workflow-step reveal"><div className="workflow-step__marker"><span>{String(index + 1).padStart(2, "0")}</span></div><DynamicIcon name={step.icon} className="workflow-step__icon" /><h3>{step.title.replace(/^\d+\.\s*/, "")}</h3><p>{step.desc}</p></li>)}
      </ol>
    </section>
  );
}
