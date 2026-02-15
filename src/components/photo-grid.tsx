import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const photos = [
  {
    image: "/muque.jpg",
    caption: "Seu bíceps",
    rotation: -3,
  },
  {
    image: "/muah.gif",
    caption: "Seus beijinhos",
    rotation: 1,
  },
  {
    image: "/muque2.jpg",
    caption: "Seu bíceps denovo",
    rotation: -2,
  },
]

function PhotoCard({
  photo,
  index,
}: {
  photo: (typeof photos)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div
        className="group relative bg-card rounded-2xl p-3 pb-12 shadow-lg shadow-primary/5 border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:rotate-0 cursor-default"
        style={{
          transform: `rotate(${photo.rotation}deg)`,
        }}
      >
        <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
          <img
            src={photo.image}
            alt={photo.caption}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/400x400/fce4ec/e91e63?text=Foto+${index + 1}`
            }}
          />
        </div>

        <div className="mt-3">
          <p className="text-center font-serif text-base md:text-lg text-foreground/80 italic">
            {photo.caption}
          </p>
        </div>

        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-primary/10 rounded-sm backdrop-blur-sm" />
      </div>
    </div>
  )
}

export function PhotoGrid() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Obrigado por ser tao especial
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground" style={{ textWrap: "balance" }}>
            {"Coisas pelas quais eu caio de amor por "}
            <span className="text-primary">{"você"}</span>
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} index={index} />
          ))}
        </div>
    
    
    <p className="text-center mt-20 mb-16 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
        Brincadeirinha! Eu caio de amor por você por completo
      </p>
      </div>
    </section>
  )
}
