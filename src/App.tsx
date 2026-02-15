import { FloatingHearts } from "@/components/floating-hearts"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { MessageSection } from "@/components/message-section"
import { PhotoGrid } from "@/components/photo-grid"
import { BirthdayFooter } from "@/components/birthday-footer"

export default function App() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(346 77% 62% / 0.06), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, hsl(20 60% 90% / 0.15), transparent)",
        }}
      />
      <FloatingHearts />
      <div className="relative z-10">
        <HeroSection />
        <VideoSection />
        <MessageSection />
        <PhotoGrid />
        <BirthdayFooter />
      </div>
    </main>
  )
}
