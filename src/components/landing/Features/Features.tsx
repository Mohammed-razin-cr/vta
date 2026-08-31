import { FEATURES } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";

export function Features() {
  return (
    <section id="training" className="platform-features section-shell">
      <header className="platform-features__heading reveal"><div><p className="section-kicker section-kicker--light">Platform capabilities</p><h2 className="section-title section-title--light">Built for the<br /><span>real world.</span></h2></div><p>Eight connected tools. One operational view of learning, talent and workforce outcomes.</p></header>
      <div className="platform-features__grid">
        {FEATURES.map((feature, index) => <article className="feature-panel reveal" key={feature.title}><span>0{index + 1}</span><DynamicIcon name={feature.icon} /><h3>{feature.title}</h3><p>{feature.desc}</p></article>)}
      </div>
    </section>
  );
}
