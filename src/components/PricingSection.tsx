import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const banks = [
  { id: "tbank", label: "Т-Банк", color: "#FFD700", bg: "#1a1a1a", accent: "#FFD700" },
  { id: "alfa", label: "Альфа-Банк", color: "#EF3124", bg: "#1a1a1a", accent: "#EF3124" },
  { id: "tochka", label: "Точка", color: "#FF7A00", bg: "#1a1a1a", accent: "#FF7A00" },
  { id: "vtb", label: "ВТБ", color: "#009FDB", bg: "#1a1a1a", accent: "#009FDB" },
]

const tiers = [
  {
    num: "01",
    name: "Старт",
    bank: "ТОЧКА / ВТБ",
    price: "Бесплатно",
    subtext: "при открытии РКО",
    features: ["До 5 страниц", "Адаптивный дизайн", "Базовое семантическое ядро", "Форма обратной связи", "SSL + хостинг"],
    popular: false,
    cta: "Открыть РКО",
  },
  {
    num: "02",
    name: "Бизнес",
    bank: "Т-BANK / АЛЬФА",
    price: "Бесплатно",
    subtext: "при открытии РКО",
    features: ["До 15 страниц", "Уникальный UX/UI-дизайн", "Полное семантическое ядро", "Интеграция с CRM", "Schema.org микроразметка", "3 месяца поддержки"],
    popular: true,
    cta: "Получить грант",
  },
  {
    num: "03",
    name: "Индивидуальный",
    bank: "ЛЮБОЙ БАНК",
    price: "По запросу",
    subtext: "обсудим условия",
    features: ["Неограниченно страниц", "Кастомный функционал", "API-интеграция", "Личный кабинет / каталог", "Персональный менеджер", "6 месяцев поддержки"],
    popular: false,
    cta: "Обсудить проект",
  },
]

interface ModalProps {
  bank: string
  onClose: () => void
}

function GrantModal({ bank, onClose }: ModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 p-8"
        style={{
          background: "rgba(15,15,15,0.92)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 0 60px rgba(255,0,53,0.15), 0 25px 50px rgba(0,0,0,0.8)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ background: "rgba(255,0,53,0.15)", border: "1px solid rgba(255,0,53,0.3)" }}>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-400 font-medium">Грант доступен</span>
          </div>
          <h3 className="text-2xl font-bold text-white leading-tight">
            Закрепить грант за<br />вашим бизнесом
          </h3>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1.5 block">Ваше Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,0,53,0.6)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
          <div>
            <label className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1.5 block">Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (999) 000-00-00"
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,0,53,0.6)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
          <div>
            <label className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1.5 block">Выбранный банк</label>
            <div
              className="w-full rounded-xl px-4 py-3 text-white/50 flex items-center justify-between"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="text-white/60">{bank}</span>
              <Icon name="Lock" size={14} className="text-white/30" />
            </div>
          </div>
        </div>

        <button
          className="mt-6 w-full rounded-xl py-4 font-bold text-white text-sm tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #FF0035 0%, #cc0029 100%)",
            boxShadow: "0 4px 24px rgba(255,0,53,0.4)",
          }}
        >
          Отправить заявку и перейти к регистрации счета
        </button>

        <p className="mt-4 text-xs text-white/25 text-center leading-relaxed">
          После отправки вы будете автоматически перенаправлены на официальный сайт банка для открытия РКО.
        </p>
      </div>
    </div>
  )
}

export function PricingSection() {
  const [activeBank, setActiveBank] = useState("tbank")
  const [modalBank, setModalBank] = useState<string | null>(null)

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(255,0,53,0.06)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(255,0,53,0.04)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(255,0,53,0.03)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "rgba(255,0,53,0.12)", border: "1px solid rgba(255,0,53,0.25)", color: "#ff4060" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Всё бесплатно через грант
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Выберите{" "}
            <span
              className="relative inline-block"
              style={{ color: "#FF0035", textShadow: "0 0 40px rgba(255,0,53,0.4)" }}
            >
              банк-партнёр
            </span>
            <br className="hidden sm:block" />
            {" "}и получите сайт
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
            Условия зависят от банка и реферальной программы. Чем крупнее банк — тем больше грант.
          </p>
        </div>

        {/* Bank Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex gap-1 p-1.5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {banks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => setActiveBank(bank.id)}
                className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  activeBank === bank.id
                    ? {
                        background: "rgba(255,255,255,0.1)",
                        color: bank.accent,
                        border: `1px solid ${bank.accent}40`,
                        boxShadow: `0 0 20px ${bank.accent}20`,
                      }
                    : { color: "rgba(255,255,255,0.35)", border: "1px solid transparent" }
                }
              >
                {activeBank === bank.id && (
                  <span
                    className="absolute inset-0 rounded-xl opacity-10"
                    style={{ background: bank.accent }}
                  />
                )}
                <span className="relative">{bank.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: tier.popular
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(255,255,255,0.04)",
                border: tier.popular
                  ? "1px solid rgba(255,0,53,0.45)"
                  : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                boxShadow: tier.popular
                  ? "0 0 40px rgba(255,0,53,0.12), 0 20px 40px rgba(0,0,0,0.6)"
                  : "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Ghost number */}
              <div
                className="absolute -top-4 -right-2 text-[110px] font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.03)" }}
              >
                {tier.num}
              </div>

              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0">
                  <div
                    className="px-4 py-1 text-xs font-bold tracking-widest uppercase text-white rounded-b-xl"
                    style={{ background: "linear-gradient(135deg, #FF0035, #cc0029)", boxShadow: "0 4px 16px rgba(255,0,53,0.4)" }}
                  >
                    Популярный
                  </div>
                </div>
              )}

              <div className="p-7 pt-9 relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-xs font-bold tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {tier.bank}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className="text-4xl font-black"
                    style={{ color: "#FF0035", textShadow: "0 0 24px rgba(255,0,53,0.35)" }}
                  >
                    {tier.price}
                  </span>
                  <p className="text-xs text-white/35 mt-1">{tier.subtext}</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px mb-6" style={{ background: "rgba(255,255,255,0.07)" }} />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(255,0,53,0.15)", border: "1px solid rgba(255,0,53,0.35)" }}
                      >
                        <Icon name="Check" size={10} style={{ color: "#FF0035" }} />
                      </span>
                      <span className="text-sm text-white/65 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => setModalBank(banks.find(b => b.id === activeBank)?.label || "Т-Банк")}
                  className="w-full rounded-xl py-3.5 text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={
                    tier.popular
                      ? {
                          background: "linear-gradient(135deg, #FF0035 0%, #cc0029 100%)",
                          color: "#fff",
                          boxShadow: "0 4px 20px rgba(255,0,53,0.35)",
                        }
                      : {
                          background: "rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.75)",
                          border: "1px solid rgba(255,255,255,0.12)",
                        }
                  }
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
            Все тарифы включают{" "}
            <span style={{ color: "rgba(255,0,53,0.8)" }}>SSL-сертификат</span>{" "}
            и{" "}
            <span style={{ color: "rgba(255,0,53,0.8)" }}>настройку хостинга</span>.
            {" "}Сайт — ваша собственность навсегда.
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalBank && (
        <GrantModal bank={modalBank} onClose={() => setModalBank(null)} />
      )}
    </section>
  )
}
