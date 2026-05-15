import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Layout, Search, Shield, Zap, Layers } from "lucide-react"

const advantages = [
  {
    icon: Code2,
    title: "Чистый код, ваша собственность",
    description:
      "Сайт на Joomla — это полноценный продукт, который принадлежит вам. Никакой зависимости от конструктора: меняйте хостинг, дорабатывайте функционал, масштабируйтесь без ограничений платформы.",
  },
  {
    icon: Layout,
    title: "Уникальная сетка Gridbox",
    description:
      "Мы используем Gridbox — профессиональный page-builder с пиксельной точностью вёрстки. Каждый сайт имеет индивидуальный UX/UI-дизайн, а не типовой шаблон из каталога.",
  },
  {
    icon: Search,
    title: "SEO-старт с первого дня",
    description:
      "Семантическое ядро, корректные мета-теги, микроразметка Schema.org, оптимизация скорости — сайт технически готов к индексации с момента запуска. Органический трафик начинает расти сразу.",
  },
  {
    icon: Zap,
    title: "Скорость и конверсия",
    description:
      "PageSpeed 90+, оптимизированные изображения, кэширование и CDN. Быстрый сайт — это не только UX, но и конверсия: каждая лишняя секунда загрузки снижает продажи на 7%.",
  },
  {
    icon: Shield,
    title: "Независимость от платформ",
    description:
      "В отличие от Tilda, Wix или других конструкторов — вы не платите ежемесячную подписку и не теряете сайт при отключении аккаунта. Ваш бизнес защищён от рисков платформ.",
  },
  {
    icon: Layers,
    title: "Масштабируемая архитектура",
    description:
      "Joomla позволяет добавлять любой функционал: личный кабинет, каталог товаров, интеграции с CRM и платёжными системами. Сайт растёт вместе с вашим бизнесом без переделок с нуля.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-center mb-4">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Технологическое преимущество
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Почему не <span className="text-primary">конструктор</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Конструктор даёт шаблон. Мы строим цифровую архитектуру — независимую, быструю и готовую к росту вашего бизнеса.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}