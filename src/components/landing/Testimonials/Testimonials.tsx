import Image from "next/image";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants/landing-data";

export function Testimonials() {
  return (
    <section id="success-stories" className="stories section-shell">
      <header className="stories__heading reveal"><p className="section-kicker">Success stories</p><h2 className="section-title">Built around people.<br /><span>Proven by outcomes.</span></h2></header>
      <div className="stories__grid">
        {TESTIMONIALS.map((testimonial, index) => <figure className={`story-card story-card--${index + 1} reveal`} key={testimonial.name}><Quote aria-hidden="true" /><blockquote>{testimonial.quote}</blockquote><figcaption><Image src={testimonial.avatar} alt="" width={56} height={56} /><span><small>{testimonial.role}</small></span></figcaption></figure>)}
        <aside className="recognition-panel reveal"><span>Media &amp; recognition</span><div><strong>BUSINESS TODAY</strong><strong>ET <i>Auto</i></strong><strong>YOURSTORY</strong><strong>Inc<i>42</i></strong></div></aside>
      </div>
    </section>
  );
}
