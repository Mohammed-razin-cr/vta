"use client";

import { useEffect, useRef } from "react";
import { FEATURES } from "@/lib/constants/landing-data";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ArrowRight } from "lucide-react";
import styles from "./Features.module.css";

export function Features() {
    const panelRef = useRef(null);

    useEffect(() => {
        const panel = panelRef.current;
        if (!panel || !('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                panel.dataset.revealed = "true";
                observer.disconnect();
            }
        }, { threshold: 0, rootMargin: "0px 0px 64px 0px" });

        observer.observe(panel);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="training" aria-labelledby="platform-features-heading" className={styles.section}>
            <div className={styles.container}>
                <div ref={panelRef} className={styles.panel}>
                    <div className={styles.header}>
                        <div>
                            <p className={styles.eyebrow}><span aria-hidden="true" />The VTA platform</p>
                            <h2 id="platform-features-heading" className={"landing-section-title " + styles.title}>
                                Powerful <span>Platform.</span>
                                <span className={styles.titleLine}>Endless Possibilities.</span>
                            </h2>
                        </div>
                        <p className={styles.intro}>
                            From your first lesson to your next opportunity.
                            Everything you need to learn, prove your skills and grow, in one place.
                        </p>
                    </div>

                    <ul className={styles.grid}>
                        {FEATURES.map((feature, index) => (
                            <li key={feature.title} className={styles.card} style={{ "--card-index": index }}>
                                <div className={styles.iconTile}>
                                    <DynamicIcon name={feature.icon} className={styles.icon} />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                                    <p className={styles.description}>{feature.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.footer}>
                        <p>Built for <span>learners, trainers, employers and partners.</span></p>
                        <a href="#solutions" className={styles.exploreLink}>
                            Explore our solutions <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
