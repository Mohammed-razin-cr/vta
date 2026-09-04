import Image from "next/image";
import { Handshake } from "lucide-react";
const ROLE_CARDS = [
    {
        id: "learners",
        index: "01",
        title: "LEARNERS",
        subtitle: "Learn & Upskill",
        image: "/assets/silver-course-engine-workshop.webp",
        imagePosition: "38% center",
    },
    {
        id: "trainers",
        index: "02",
        title: "TRAINERS",
        subtitle: "Teach & Empower",
        image: "/assets/card-trainer.png",
        imagePosition: "center bottom",
    },
    {
        id: "employers",
        index: "03",
        title: "EMPLOYERS",
        subtitle: "Hire & Grow",
        image: "/assets/card-employer.png",
        imagePosition: "center bottom",
    },
    {
        id: "partners",
        index: "04",
        title: "PARTNERS",
        subtitle: "Collaborate & Grow",
        icon: Handshake,
    },
];
const CONNECTORS = [
    "M 205 140 H 235 V 155 H 250",
    "M 335 140 H 305 V 155 H 290",
    "M 335 400 H 305 V 385 H 290",
    "M 205 400 H 235 V 385 H 250",
];
const NODES = [
    [205, 140], [250, 155], [335, 140], [290, 155],
    [335, 400], [290, 385], [205, 400], [250, 385],
];
export function TalentCloudDiagram() {
    return (<div className="talent-tech-stage mx-auto shrink-0 lg:mx-0 lg:justify-self-end" role="img" aria-label="Technical diagram connecting learners, trainers, employers, and partners around the VTA Talent Cloud">
      <div className="talent-tech-diagram relative">
        <div className="talent-tech-diagram__grid" aria-hidden="true"/>

        <svg className="talent-tech-connectors" viewBox="0 0 540 540" aria-hidden="true">
          {CONNECTORS.map((path, index) => (<path key={path} d={path} style={{ animationDelay: `${index * 180}ms` }}/>))}
          {NODES.map(([cx, cy], index) => (<g key={`${cx}-${cy}`} className="talent-tech-node" style={{ animationDelay: `${index * 90}ms` }}>
              <circle cx={cx} cy={cy} r="8" className="talent-tech-node__outer"/>
              <circle cx={cx} cy={cy} r="3" className="talent-tech-node__inner"/>
            </g>))}
        </svg>

        <div className="talent-tech-core" aria-hidden="true">
          <div className="talent-tech-core__halo"/>
          <Image src="/assets/vta-gear.png" alt="" fill priority className="talent-tech-core__gear"/>
          <div className="talent-tech-core__center">
            <span>Talent</span>
            <span>Cloud<sup>™</sup></span>
          </div>
        </div>

        {ROLE_CARDS.map((card) => {
            const Icon = card.icon;
            return (<div key={card.id} className={`talent-tech-card talent-tech-card--${card.id}`} aria-hidden="true">
              <div className="talent-tech-card__surface">
                <div className="talent-tech-card__media">
                  {card.image ? (<Image src={card.image} alt="" fill sizes="220px" className="talent-tech-card__image" style={{ objectPosition: card.imagePosition }}/>) : Icon ? (<Icon className="talent-tech-card__icon" strokeWidth={1.7}/>) : null}
                </div>
                <div className="talent-tech-card__copy">
                  <span className="talent-tech-card__number">{card.index}</span>
                  <strong>{card.title}</strong>
                  <span className="talent-tech-card__subtitle">{card.subtitle}</span>
                  <span className="talent-tech-card__stripes"/>
                </div>
              </div>
            </div>);
        })}
      </div>
    </div>);
}
