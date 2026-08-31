import Image from "next/image";
import { SOLUTIONS } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";

export function Solutions() {
  return (
    <section id="solutions" className="solutions-editorial section-shell">
      <header className="solutions-editorial__heading reveal">
        <div><p className="section-kicker">One connected ecosystem</p><h2 className="section-title">Four stakeholders.<br /><span>One talent cloud.</span></h2></div>
        <p>Every part of the automotive workforce journey, including learning, assessment, hiring and growth, works together on a single platform.</p>
      </header>
      <div className="solutions-editorial__grid">
        {SOLUTIONS.map((card, index) => (
          <article className={`solution-panel solution-panel--${index + 1} reveal tilt-card`} key={card.title}>
            <div className="solution-panel__number">0{index + 1}</div>
            <div className="solution-panel__body"><DynamicIcon name={card.icon} className="solution-panel__icon" /><h3>{card.title}</h3><ul>{card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a href="#contact">Know more</a></div>
            <Image src={card.image} alt="" width={330} height={330} className="solution-panel__image" />
          </article>
        ))}
      </div>
    </section>
  );
}
