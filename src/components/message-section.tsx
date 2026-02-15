import { useRef } from "react"
import { Heart, Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function MessageSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="relative bg-card/60 backdrop-blur-md rounded-3xl shadow-xl shadow-primary/5 p-8 md:p-12 border border-border/40">
            <div className="absolute -top-5 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <Quote className="w-4 h-4 text-primary-foreground" />
            </div>

            <div className="space-y-6 pt-2">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Hoje e um dia muito especial! Um dia para celebrar a pessoa incrivel que voce e.
                Cada momento ao seu lado e um presente, e sou grato por cada sorriso, cada conversa,
                cada memoria que criamos juntos.
              </p>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Que este novo ano da sua vida seja repleto de alegrias, realizacoes e momentos
                inesqueciveis. Voce merece tudo de melhor que o mundo pode oferecer!
              </p>

              <div className="flex items-center justify-end gap-2 pt-4">
                <span className="font-serif text-lg italic text-primary">
                  Com todo meu amor 
                </span>                 
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </div>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
