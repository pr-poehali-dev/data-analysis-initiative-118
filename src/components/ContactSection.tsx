import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          Старт без вложений
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
          Запустите бизнес в интернете{" "}
          <span className="text-primary">за счёт банка</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Напишите нам — и мы подберём оптимальный банк-партнёр под ваш бизнес, объясним условия гранта и начнём разработку сайта. Без обязательств, без предоплаты.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-[#2AABEE] hover:bg-[#2AABEE]/90 text-white font-semibold px-8 py-6 text-lg gap-3 shadow-lg shadow-[#2AABEE]/25 hover:shadow-xl transition-all w-full sm:w-auto"
            asChild
          >
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Написать в Telegram
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-6 text-lg gap-3 shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all w-full sm:w-auto"
            asChild
          >
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <Phone className="h-5 w-5" />
              Написать в WhatsApp
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Или позвоните:{" "}
          <a href="tel:" className="text-primary hover:underline font-medium">
            +7 — — —
          </a>
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Банки-партнёры", value: "Т-Банк, Альфа, Точка, ВТБ" },
            { label: "Срок разработки", value: "2–4 недели" },
            { label: "Ваши вложения", value: "0 ₽ в разработку" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-background/60 border border-border backdrop-blur-sm">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
