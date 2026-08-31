"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Award,
  BookOpenCheck,
  Gauge,
  Settings,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { PremiumButton } from "@/components/common/PremiumButton";

const FACILITIES = [
  { title: "Classroom", image: "/assets/vta-classroom.webp" },
  { title: "Electrical Circuit Area", image: "/assets/vta-eca-image.webp" },
  { title: "Engine Area", image: "/assets/vta-engine-image.webp" },
  { title: "Service Area", image: "/assets/vta-service-area-image.webp" },
  { title: "Technical Area", image: "/assets/vta-technicalarea.webp" },
];

const TRAINING_TRACKS = [
  {
    number: "01",
    title: "Technical Training",
    icon: Wrench,
    items: ["Basic Training", "Periodic Maintenance Training", "Trouble shooting Training", "FI & OBD Tool Training"],
  },
  {
    number: "02",
    title: "Process Training",
    icon: Settings,
    items: ["Workshop Process Training", "Smart Dealer & Rider App Training"],
  },
  {
    number: "03",
    title: "Soft Skill Training",
    icon: Users,
    items: ["Customer Handling Training", "Selling Skill Training"],
  },
];

const ACADEMY_STATS = [
  ["5,000+", "Technicians Trained"],
  ["6", "State Locations"],
  ["180+", "Outlets"],
  ["100+", "Tie-Ups"],
];

export function AcademyOverview() {
  return (
    <section id="about" className="academy-overview section-shell">
      <div className="section-grid academy-overview__grid">
        <div className="academy-overview__visual reveal tilt-card">
          <div className="academy-overview__image-wrap">
            <Image
              src="/assets/vta-technical.webp"
              alt="Technician training at VOC Technical Academy"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div className="academy-overview__stamp" aria-hidden="true">
            <span>100%</span>
            <small>Job assurance at all VOC centres</small>
          </div>
        </div>

        <div className="academy-overview__copy">
          <p className="section-kicker reveal">VOC Technical Academy</p>
          <h2 className="section-title reveal">
            Where workshop knowledge becomes <span>career momentum.</span>
          </h2>
          <p className="section-copy reveal">
            VTA combines multi-brand two-wheeler theory with hands-on training in diagnostics, repair,
            maintenance and emerging electric-vehicle technology.
          </p>
          <p className="section-copy reveal">
            Expert-led programs, modern facilities and access to VOC Automotive&apos;s service network help
            learners build practical, job-ready capability.
          </p>
          <div className="academy-stat-grid reveal">
            {ACADEMY_STATS.map(([value, label]) => (
              <div key={label} className="academy-stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Facilities() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    trackRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.78, 420), behavior: "smooth" });
  };

  return (
    <section id="facilities" className="facilities section-shell">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker reveal">Built for practical learning</p>
          <h2 className="section-title reveal">
            VTA classroom amenities<br />and <span>infrastructure.</span>
          </h2>
        </div>
        <div className="carousel-controls reveal" aria-label="Facilities carousel controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous facility">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next facility" className="is-primary">
            <span>Next</span>
          </button>
        </div>
      </div>

      <div ref={trackRef} className="facilities-track" role="region" aria-label="Academy facilities">
        {FACILITIES.map((facility, index) => (
          <article key={facility.title} className="facility-card tilt-card reveal">
            <div className="facility-card__image">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                sizes="(max-width: 640px) 84vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="facility-card__meta">
              <span>{facility.title}</span>
              <small>0{index + 1}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TrainingPrograms() {
  return (
    <section className="training-programs section-shell">
      <div className="training-programs__backdrop" data-parallax="-8" aria-hidden="true">
        <Image src="/assets/vta-eca.webp" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="training-programs__overlay" aria-hidden="true" />
      <div className="training-programs__inner">
        <p className="section-kicker section-kicker--light reveal">What we do at VTA</p>
        <div className="training-programs__heading">
          <h2 className="section-title section-title--light reveal">
            Training shaped around the<br /><span>real workshop.</span>
          </h2>
          <p className="reveal">VOC conducts various trainings for technicians across three job-ready tracks.</p>
        </div>
        <div className="training-grid">
          {TRAINING_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title} className="training-card tilt-card reveal">
                <div className="training-card__top">
                  <span>{track.number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{track.title}</h3>
                <ul>
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BronzeCourse() {
  return (
    <section className="bronze-course section-shell">
      <div className="bronze-course__card reveal">
        <div className="bronze-course__copy">
          <p className="section-kicker">Flagship workshop foundation</p>
          <h2 className="section-title">Bronze Level <span>Course.</span></h2>
          <div className="course-duration"><Gauge aria-hidden="true" /> Duration: 120 Hours</div>
          <h3>What you&apos;ll learn</h3>
          <ul className="course-list">
            <li><BookOpenCheck aria-hidden="true" /><span><strong>Tools &amp; Equipment</strong>Identification and safe use of general-purpose workshop tools.</span></li>
            <li><Wrench aria-hidden="true" /><span><strong>Workshop Equipment</strong>Usage, maintenance and safety practices across core service equipment.</span></li>
            <li><Award aria-hidden="true" /><span><strong>Measuring Instruments</strong>Practical application of special tools, installers, pullers and measuring equipment.</span></li>
          </ul>
          <PremiumButton label="Enroll Now" href="#contact" />
        </div>
        <div className="bronze-course__visual">
          <Image src="/assets/vta-tech-voc.webp" alt="VTA technical training equipment" fill className="object-cover" sizes="(max-width: 900px) 100vw, 45vw" />
          <div className="bronze-course__badge" aria-hidden="true"><Sparkles /> Learn. Perform. Earn.</div>
        </div>
      </div>
    </section>
  );
}
