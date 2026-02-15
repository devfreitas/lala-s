import { useRef } from "react"
import { Heart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function BirthdayFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <footer ref={ref} className="relative px-4 pt-8 pb-16 md:pb-24">
      <div
        className={`text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-border" />
          <Heart className="w-4 h-4 text-primary/40 fill-primary/40" />
          <div className="h-px w-16 bg-border" />
        </div>

        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full border border-primary/20">
          <Heart className="w-4 h-4 fill-primary" />
          <span className="font-serif text-lg italic">Meaw!</span>
          <Heart className="w-4 h-4 fill-primary" />
        </div>

        <p className="mt-6 text-sm text-muted-foreground tracking-wide">
          Feito com amor, Rafa
        </p>
      </div>
    </footer>
  )
}
