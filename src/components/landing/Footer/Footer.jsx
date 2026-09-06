import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/constants/landing-data";
import styles from "./Footer.module.css";

function FooterRibbon({ side }) {
    const gradientId = "footer-ribbon-" + side;
    return (
        <svg className={styles.ribbon + " " + (side === "right" ? styles.ribbonRight : styles.ribbonLeft)} viewBox="0 0 320 620" fill="none" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id={gradientId} x1="14" y1="60" x2="245" y2="366" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#170304" />
                    <stop offset=".5" stopColor="#830f14" />
                    <stop offset=".78" stopColor="var(--footer-red)" />
                    <stop offset="1" stopColor="#340608" />
                </linearGradient>
                <linearGradient id={gradientId + "-fold"} x1="6" y1="454" x2="263" y2="168" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#170304" />
                    <stop offset=".52" stopColor="#a31319" />
                    <stop offset="1" stopColor="var(--footer-red)" />
                </linearGradient>
            </defs>
            <path d="M-81-86 210 196Q234 220 210 246L-58 516-147 418 102 171-126-49Z" fill={"url(#" + gradientId + ")"} />
            <path d="m-38 163 262 249q26 25 0 51L-23 708-128 603 116 363-128 121Z" fill={"url(#" + gradientId + "-fold)"} opacity=".74" />
            <path d="M-32-22 255 251M-37 151 282 453M-30 577 215 332" stroke="var(--footer-red)" strokeOpacity=".26" />
            <path d="m-30-42 288 274M-21 613 265 329" stroke="var(--footer-red)" strokeOpacity=".12" />
        </svg>
    );
}

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="site-footer" className={styles.footer}>
            <div className={styles.atmosphere} aria-hidden="true">
                <FooterRibbon side="left" />
                <FooterRibbon side="right" />
                <div className={styles.horizon} />
            </div>

            <div className={styles.container}>
                <div id="about" className={"reveal " + styles.intro}>
                    <div className={styles.logoPlate}>
                        <Image src="/assets/vta-logo.png" alt="VTA Talent Cloud" width={160} height={56} className={styles.logo} />
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
