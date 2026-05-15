import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Открыл РКО в Т-Банке — и через 3 недели у меня уже работал полноценный сайт. Евгений сделал всё сам, мне нужно было только ответить на вопросы о бизнесе. Трафик пошёл с первого месяца.",
    name: "Алексей М.",
    role: "Владелец автосервиса",
  },
  {
    quote:
      "Я давно хотела сайт для студии, но всегда откладывала из-за стоимости. Digital Grant — это честная схема: банк платит, я получаю. Дизайн получился лучше, чем я ожидала.",
    name: "Марина К.",
    role: "Владелец студии йоги",
  },
  {
    quote:
      "Нам сделали сайт для ресторана — с меню, системой бронирования столиков и SEO под геозапросы. Теперь половина новых гостей приходит из Google. Вложения — только открытие счёта, который нам всё равно был нужен.",
    name: "Дмитрий П.",
    role: "Ресторатор",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Клиенты о Digital Grant
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Реальные истории предпринимателей, которые получили профессиональный сайт через партнёрскую программу с банками.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
