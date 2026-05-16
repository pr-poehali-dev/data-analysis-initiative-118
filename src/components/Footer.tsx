export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-primary">ИТМВЕБ</span> | Digital Grant
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Профессиональные сайты на Joomla + Gridbox за счёт банковского гранта.
            </p>
            <p className="text-xs text-muted-foreground">© 2025 ИТМВЕБ. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О студии
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Условия гранта
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Получить сайт
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Банки-партнёры</h4>
            <ul className="space-y-2">
              {["Т-Банк", "Альфа-Банк", "Точка", "ВТБ"].map((bank) => (
                <li key={bank} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{bank}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}