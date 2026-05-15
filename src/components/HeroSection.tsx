import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Building2, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

const typingPhrases = [
  "сайт для ресторана — за счёт банка...",
  "интернет-магазин для бутика — бесплатно...",
  "лендинг для клиники — без вложений...",
  "сайт для турагентства — по гранту...",
  "визитка для юридической фирмы — за 0 ₽...",
]

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const phrase = typingPhrases[currentPhrase]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < phrase.length) {
        timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 50)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25)
      } else {
        setCurrentPhrase((prev) => (prev + 1) % typingPhrases.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, currentPhrase])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-muted/40 blur-3xl animate-pulse"
          style={{ top: "20%", left: "10%", animationDuration: "4s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-muted/30 blur-3xl animate-pulse"
          style={{ bottom: "10%", right: "15%", animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-muted/20 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 150}px`, top: `${mousePosition.y - 150}px` }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Building2
          className="absolute text-muted-foreground/30 animate-float"
          style={{ top: "15%", left: "15%", animationDelay: "0s" }}
          size={40}
        />
        <TrendingUp
          className="absolute text-muted-foreground/30 animate-float"
          style={{ top: "25%", right: "20%", animationDelay: "2s" }}
          size={35}
        />
        <Sparkles
          className="absolute text-muted-foreground/30 animate-float"
          style={{ bottom: "20%", left: "20%", animationDelay: "1s" }}
          size={30}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Т-Банк · Альфа · Точка · ВТБ — партнёрская программа</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
          Банк оплатит{" "}
          <span className="text-primary relative inline-block">
            ваш сайт
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 5 150 5 198 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Откройте РКО у банка-партнёра — и получите профессиональный сайт на Joomla с индивидуальным дизайном совершенно бесплатно.
        </p>

        <div className="mb-10 animate-fade-in-up animate-delay-150">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-background/60 border border-border backdrop-blur-sm text-left max-w-xl w-full">
            <span className="text-muted-foreground text-sm shrink-0">Например:</span>
            <span className="text-foreground text-sm min-h-[20px]">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="#contact">
              Получить грант
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="#portfolio">Наши работы</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>20+ лет опыта</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>Индивидуальный дизайн</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Без вложений в разработку</span>
          </div>
        </div>
      </div>
    </section>
  )
}
