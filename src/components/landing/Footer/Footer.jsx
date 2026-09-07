import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/constants/landing-data";
import styles from "./Footer.module.css";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="site-footer" className={styles.footer}>
            <div className={styles.atmosphere} aria-hidden="true">
                <div className={styles.horizon} />
            </div>

            <div className={styles.container}>
                <div id="about" className={"reveal " + styles.intro}>
                    <div className={styles.logoPlate}>
                        <Image src="/assets/vta-logo.webp" alt="VTA Talent Cloud" width={160} height={56} className={styles.logo} />
                    </div>
                    <p className={styles.statement}>
                        VTA Talent Cloud™ is India&apos;s AI-Powered Automotive Workforce Platform, connecting talent, industry
                        and opportunities.
                    </p>
                    <a href="#contact" className={styles.contactLink}>
                        <span>Contact VTA</span><ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                </div>

                <div className={"reveal " + styles.navigationPanel} style={{ "--reveal-delay": "60ms" }}>
                    <div className={styles.navigationGrid}>
                        {FOOTER_COLUMNS.map((column) => (
                            <div key={column.title} className={styles.column}>
                                <h2>{column.title}</h2>
                                <ul>
                                    {column.links.map((link) => (
                                        <li key={column.title + "-" + link.label}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className={styles.appColumn}>
                            <h2>Mobile App</h2>
                            <div className={styles.appCard}>
                                <span className={styles.appIcon}><Smartphone size={23} aria-hidden="true" /></span>
                                <p className={styles.appStatus}>Coming soon</p>
                                <p className={styles.appDescription}>Learn and track your progress on the go.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>© {year} VOC Technical Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
