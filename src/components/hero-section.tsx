import { useRef } from "react"
import { Heart, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <header
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center"
    >
      <div className="absolute top-20 left-[15%] animate-sparkle" style={{ animationDelay: "0s" }}>
        <Sparkles className="w-5 h-5 text-primary/60" />
      </div>
      <div className="absolute top-32 right-[20%] animate-sparkle" style={{ animationDelay: "0.7s" }}>
        <Sparkles className="w-4 h-4 text-primary/50" />
      </div>
      <div className="absolute bottom-32 left-[25%] animate-sparkle" style={{ animationDelay: "1.4s" }}>
        <Sparkles className="w-6 h-6 text-primary/45" />
      </div>

      <div
        className={`transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-6 flex justify-center">
          <div className="animate-gentle-pulse">
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-6" style={{ textWrap: "balance" }}>
          {"Feliz "}
          <span className="text-primary">
            {"Aniversário!"}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
          Para a minha gatinha miau
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-primary/30" />
          <Heart className="w-3 h-3 text-primary/50 fill-primary/50" />
          <div className="h-px w-12 bg-primary/30" />
        </div>
      </div>
    </header>
  )
}
