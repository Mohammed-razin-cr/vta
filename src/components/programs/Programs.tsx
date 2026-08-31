import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { TRAINING_TRACKS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CourseLevelSwitcher } from "./CourseLevelSwitcher";

/**
 * Programs: four progressive course levels followed by the three training
 * tracks laid out as spec-sheet rows.
 */
export function Programs() {
  return (
    <section id="programs" className="border-t border-line bg-paper py-16 sm:py-20 md:py-32">
      <div className="container-shell">
        <SectionHeader
          index="01"
          kicker="Programs"
          align="split"
          title={
            <>
              Training shaped around the <em>real workshop.</em>
            </>
          }
          lede="Four progressive course levels and three job-ready tracks, taught on live machines, not slides."
        />

        <Reveal standalone>
          <CourseLevelSwitcher />
        </Reveal>

        {/* Training tracks: spec-sheet rows */}
        <RevealGroup className="mt-10 sm:mt-12 md:mt-16">
          {TRAINING_TRACKS.map((track, i) => (
            <Reveal
              as="article"
              key={track.index}
              className={cn(
                "group grid items-start gap-4 border-t border-line py-6 transition-colors duration-200 hover:bg-white md:-mx-4 md:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:rounded-card md:px-4 md:py-10",
                i === TRAINING_TRACKS.length - 1 && "border-b",
              )}
            >
              <p className="spec-label text-ember">{track.index}</p>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-ink md:text-[1.65rem]">
                  {track.title}
                </h3>
                <p className="mt-2 max-w-md text-smoke">{track.description}</p>
              </div>

              <div className="flex flex-wrap content-start gap-2">
                {track.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
