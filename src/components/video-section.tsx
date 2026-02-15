import { useRef } from "react"
import { Play } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function VideoSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Miaus
          </p>

          <div className="group relative">
            <div className="bg-card rounded-2xl p-3 md:p-4 pb-14 md:pb-16 shadow-lg shadow-primary/5 border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/us.mp4" type="video/mp4" />
                  Seu navegador nao suporta videos.
                </video>

                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-5">
                <p className="text-center font-serif text-lg md:text-xl text-foreground/80 italic">
                  Nosso primeiro video juntos!
                </p>
              </div>
            </div>

            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-primary/15 rounded-sm rotate-[-1deg] backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
