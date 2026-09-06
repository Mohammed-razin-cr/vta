"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Facilities.module.css";

const FACILITIES = [
    {
        title: "Classroom",
        category: "Theory & discussion",
        description: "Build your foundation through trainer-led sessions and shared learning.",
        image: "/assets/vta-classroom.webp",
        alt: "Learners in red VTA vests taking part in a classroom session",
    },
    {
        title: "Electrical Circuit Area",
        category: "Wiring & circuits",
        description: "Follow the connections and understand how electrical systems work.",
        image: "/assets/vta-eca-image.webp",
        alt: "Two-wheeler electrical training board with wiring diagrams and components",
    },
    {
        title: "Engine Area",
        category: "Components & mechanics",
        description: "Explore engine components up close with cutaway training models.",
        image: "/assets/vta-engine-image.webp",
        alt: "Cutaway engine model showing internal gears and mechanical components",
    },
    {
        title: "Service Area",
        category: "Workshop practice",
        description: "Bring your skills to the workshop and get familiar with service equipment.",
        image: "/assets/vta-service-area-image.webp",
        alt: "Practical service training area at VOC Technical Academy",
    },
    {
        title: "Technical Area",
        category: "Hands-on learning",
        description: "Connect theory with practice through guided technical exercises.",
        image: "/assets/vta-technicalarea.webp",
        alt: "Technical training equipment at VOC Technical Academy",
    },
];

const formatNumber = (value) => String(value).padStart(2, "0");

export function Facilities() {
    const trackRef = useRef(null);
    const dialogRef = useRef(null);
    const scrollTimerRef = useRef(null);
    const requestedPositionRef = useRef(null);
    const [view, setView] = useState({ first: 0, last: 0, canPrevious: false, canNext: true });
    const [photoIndex, setPhotoIndex] = useState(null);
    const photo = FACILITIES[photoIndex ?? 0];
    const photoOpen = photoIndex !== null;

    const syncView = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        const frame = track.getBoundingClientRect();
        const cards = Array.from(track.querySelectorAll("[data-facility-index]"));
        const visible = cards.flatMap((card, index) => {
            const rect = card.getBoundingClientRect();
            return rect.left >= frame.left - 2 && rect.right <= frame.right + 2 ? [index] : [];
        });
        const nearest = cards.reduce((closest, card, index) => {
            const distance = Math.abs(card.getBoundingClientRect().left - frame.left);
            return distance < closest.distance ? { index, distance } : closest;
        }, { index: 0, distance: Infinity }).index;

        setView({
            first: visible[0] ?? nearest,
            last: visible.at(-1) ?? nearest,
            canPrevious: track.scrollLeft > 2,
            canNext: track.scrollLeft < track.scrollWidth - track.clientWidth - 2,
        });
        requestedPositionRef.current = null;
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const observer = new ResizeObserver(syncView);
        observer.observe(track);
        syncView();
        return () => {
            observer.disconnect();
            window.clearTimeout(scrollTimerRef.current);
        };
    }, [syncView]);

    useEffect(() => {
        if (!photoOpen) return;
        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        dialog.showModal();
        document.body.style.overflow = "hidden";
        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
        };
    }, [photoOpen]);

    const handleScroll = () => {
        window.clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = window.setTimeout(syncView, 120);
    };

    const navigate = (direction) => {
        const track = trackRef.current;
        if (!track) return;
        const maxScroll = track.scrollWidth - track.clientWidth;
        const frame = track.getBoundingClientRect();
        // Track-relative stops stay accurate in centered layouts; the final stop uses the real scroll limit.
        const positions = Array.from(track.querySelectorAll("[data-facility-index]")).map((card) =>
            Math.min(maxScroll, Math.max(0, card.getBoundingClientRect().left - frame.left + track.scrollLeft)),
        );
        const current = requestedPositionRef.current ?? track.scrollLeft;
        let target;
        if (direction === "first") target = 0;
        else if (direction === "last") target = maxScroll;
        else if (direction === "next") target = positions.find((position) => position > current + 2) ?? maxScroll;
        else target = positions.findLast((position) => position < current - 2) ?? 0;

        requestedPositionRef.current = target;
        track.scrollTo({
            left: target,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
    };

    const handleTrackKeyDown = (event) => {
        if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
        const direction = { ArrowLeft: "previous", ArrowRight: "next", Home: "first", End: "last" }[event.key];
        if (!direction) return;
        event.preventDefault();
        navigate(direction);
    };

    const closePhoto = () => dialogRef.current?.close();
    const changePhoto = (direction) => {
        const nextIndex = Math.min(FACILITIES.length - 1, Math.max(0, (photoIndex ?? 0) + direction));
        const focusedLabel = document.activeElement?.getAttribute("aria-label");
        // Move focus before disabling the button that reached the first or last photo.
        if (nextIndex === FACILITIES.length - 1 && focusedLabel === "Next photo") {
            dialogRef.current?.querySelector('[aria-label="Previous photo"]')?.focus();
        } else if (nextIndex === 0 && focusedLabel === "Previous photo") {
            dialogRef.current?.querySelector('[aria-label="Next photo"]')?.focus();
        }
        setPhotoIndex(nextIndex);
    };

    return (
        <section id="facilities" aria-labelledby="facilities-heading" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}><span aria-hidden="true" />Our training spaces</p>
                        <h2 id="facilities-heading" className="landing-section-title text-[#151310]">
                            Built like the workshops
                            <span className={styles.accent}>you&apos;ll work in.</span>
                        </h2>
                    </div>
                    <p className={styles.intro}>
                        Classrooms, circuit benches, engine bays and live service areas.
                        <span>Training happens where the work happens.</span>
                    </p>
                </div>

                <p id="facilities-instructions" className="sr-only">
                    Use the previous and next buttons or swipe to explore all five spaces. When the gallery is focused,
                    use the arrow keys, Home or End. Select a photo to view it larger.
                </p>
                <div
                    ref={trackRef}
                    id="facilities-gallery"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Training spaces gallery"
                    aria-describedby="facilities-instructions"
                    tabIndex={0}
                    onScroll={handleScroll}
                    onKeyDown={handleTrackKeyDown}
                    className={styles.track}
                >
                    {FACILITIES.map((facility, index) => (
                        <figure key={facility.title} data-facility-index={index} className={styles.card}>
                            <button
                                type="button"
                                className={styles.photoButton}
                                aria-label={"View " + facility.title + " photo"}
                                aria-haspopup="dialog"
                                onClick={() => setPhotoIndex(index)}
                            >
                                <Image
                                    src={facility.image}
                                    alt={facility.alt}
                                    fill
                                    sizes="(max-width: 639px) 85vw, (max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 395px"
                                    className={styles.image}
                                />
                                <span className={styles.photoNumber} aria-hidden="true">{formatNumber(index + 1)} / 05</span>
                                <span className={styles.expandLabel} aria-hidden="true"><Expand size={16} /><span>View photo</span></span>
                            </button>
                            <figcaption className={styles.caption}>
                                <p className={styles.category}>{facility.category}</p>
                                <h3>{facility.title}</h3>
                                <p className={styles.description}>{facility.description}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className={styles.footer}>
                    <div className={styles.status}>
                        <span className={styles.count} aria-live="polite" aria-atomic="true">
                            <span className="sr-only">Showing training spaces </span>
                            <strong>{formatNumber(view.first + 1)}{view.last > view.first && "–" + formatNumber(view.last + 1)}</strong>
                            <span> / 05</span>
                        </span>
                        <span className={styles.browseHint}>Explore every space</span>
                    </div>
                    <div className={styles.progress} aria-hidden="true">
                        <span style={{ transform: "scaleX(" + (view.last + 1) / FACILITIES.length + ")" }} />
                    </div>
                    <div className={styles.controls}>
                        <button type="button" onClick={() => navigate("previous")} disabled={!view.canPrevious} aria-label="Previous facility" aria-controls="facilities-gallery" className={styles.previous}>
                            <ArrowLeft size={18} aria-hidden="true" />
                        </button>
                        <button type="button" onClick={() => navigate("next")} disabled={!view.canNext} aria-label="Next facility" aria-controls="facilities-gallery" className={styles.next}>
                            <span>Next</span><ArrowRight size={18} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            <dialog
                ref={dialogRef}
                className={styles.dialog}
                aria-labelledby="facility-photo-title"
                aria-describedby="facility-photo-description"
                onClose={() => setPhotoIndex(null)}
                onClick={(event) => { if (event.target === event.currentTarget) closePhoto(); }}
                onKeyDown={(event) => {
                    if (event.key === "Tab") {
                        const buttons = Array.from(event.currentTarget.querySelectorAll("button:not(:disabled)"));
                        const first = buttons[0];
                        const last = buttons.at(-1);
                        const focused = document.activeElement;
                        if (!buttons.includes(focused) || (event.shiftKey ? focused === first : focused === last)) {
                            event.preventDefault();
                            (event.shiftKey ? last : first)?.focus();
                        }
                    }
                    if (event.altKey || event.ctrlKey || event.metaKey) return;
                    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                        event.preventDefault();
                        changePhoto(event.key === "ArrowLeft" ? -1 : 1);
                    }
                }}
            >
                {photoOpen && <div>
                    <div className={styles.dialogHeader}>
                        <span>Inside VOC Technical Academy</span>
                        <button type="button" autoFocus onClick={closePhoto} aria-label="Close photo" className={styles.closeButton}><X size={22} aria-hidden="true" /></button>
                    </div>
                    <div className={styles.fullPhoto}>
                        <Image src={photo.image} alt={photo.alt} fill sizes="(max-width: 1023px) 94vw, 1000px" className={styles.fullImage} />
                    </div>
                    <div className={styles.dialogFooter}>
                        <div aria-live="polite" aria-atomic="true">
                            <p className={styles.dialogCount}>{formatNumber((photoIndex ?? 0) + 1)} / 05 · {photo.category}</p>
                            <h3 id="facility-photo-title">{photo.title}</h3>
                            <p id="facility-photo-description">{photo.description}</p>
                        </div>
                        <div className={styles.controls}>
                            <button type="button" disabled={photoIndex === 0} onClick={() => changePhoto(-1)} aria-label="Previous photo" className={styles.photoNav}><ArrowLeft size={20} aria-hidden="true" /></button>
                            <button type="button" disabled={photoIndex === FACILITIES.length - 1} onClick={() => changePhoto(1)} aria-label="Next photo" className={styles.photoNav}><ArrowRight size={20} aria-hidden="true" /></button>
                        </div>
                    </div>
                </div>}
            </dialog>
        </section>
    );
}
