import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Noname Interior",
    category: "Дизайн интерьера",
    image: "/professional-corporate-website.png",
    description:
      "Лаконичный сайт для студии дизайна интерьера: портфолио проектов, онлайн-консультация и форма заявки. Архитектура страниц выстроена под конверсию — от вдохновения к контакту.",
    tags: ["Joomla", "Gridbox", "UX/UI", "SEO"],
  },
  {
    title: "Forest Glamp",
    category: "Глэмпинг и туризм",
    image: "/restaurant-website-design.png",
    description:
      "Атмосферный сайт для глэмпинга с системой бронирования домиков, фотогалереей и интеграцией карты. Семантическое ядро настроено под геозапросы — трафик пошёл с первого месяца.",
    tags: ["Joomla", "Gridbox", "Бронирование", "SEO-старт"],
  },
  {
    title: "Prime Realty",
    category: "Недвижимость",
    image: "/creative-portfolio-website.png",
    description:
      "Агентство недвижимости с каталогом объектов, фильтрацией и формами обратной связи. Чистый код и быстрая загрузка обеспечивают высокую конверсию из поискового трафика.",
    tags: ["Joomla", "Gridbox", "Каталог", "CRM-интеграция"],
  },
  {
    title: "Digital Grant — ваш проект",
    category: "Следующий кейс",
    image: "/modern-ecommerce-website.png",
    description:
      "Каждый наш проект — это цифровая архитектура, выстроенная под бизнес-цели конкретного клиента. Ваш сайт может стать следующим примером того, как банковский грант превращается в работающий инструмент продаж.",
    tags: ["Ваша ниша", "Ваш бренд", "Бесплатно"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Портфолио
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждый проект — это цифровая архитектура, построенная под задачи конкретного бизнеса. Не шаблон, а инструмент роста.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => {}}
                  >
                    Подробнее <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
