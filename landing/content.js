// Bilingual content dictionary — Spanish (MX) primary, English fallback.
// Keyed by section. Access as window.COPY[lang].hero.title etc.

window.COPY = {
  es: {
    nav: {
      product: "Producto",
      howItWorks: "Cómo funciona",
      pricing: "Precios",
      stories: "Historias",
      resources: "Recursos",
      login: "Iniciar sesión",
      cta: "Agenda una demo",
    },
    hero: {
      eyebrow: "Para restauranteros en México",
      title: "Superpoderes para tu restaurante.",
      subtitle:
        "Más tráfico en Google, más ventas directas y más clientes que regresan. Fluxsales es el sistema operativo que tu restaurante necesita — en español, hecho para LATAM.",
      primary: "Agenda una demo",
      secondary: "Ver producto",
      trust: "Más de 1,400 restaurantes confían en Fluxsales",
    },
    logos: {
      title: "Restaurantes que crecen con Fluxsales",
      brands: [
        "Cosi Fan Tutte",
        "Sabrosy",
        "Cara de Pan",
        "Bora Bora Pizzas",
        "Carl´s Jr",
        "Dolce Bisquet",
        "Brooklyn Burgers",
      ],
    },
    venues: {
      eyebrow: "Nuestros clientes",
      title: "Solo falta el tuyo.",
      subtitle: "Restaurantes ambiciosos en toda LATAM ya están creciendo con Fluxsales. Pulsa o arrastra para ver más.",
      cta: "Empieza con Fluxsales",
      count: "1,400+ restaurantes activos",
      items: [
        { id: "cosi-fan-tutte",   name: "Cosi Fan Tutte",     city: "" },
        { id: "sabrosy",          name: "Sabrosy",            city: "" },
        { id: "cara-de-pan",     name: "Cara de Pan",        city: "" },
        { id: "bora-bora",       name: "Bora Bora Pizzas",   city: "" },
        { id: "carls-jr",        name: "Carl´s Jr",          city: "" },
        { id: "dolce-bisquet",   name: "Dolce Bisquet",      city: "" },
        { id: "brooklyn-burgers",name: "Brooklyn Burgers",   city: "" },
        { id: "tiberius",        name: "Tiberius Pizzas",    city: "" },
      ],
    },
    problem: {
      eyebrow: "El problema",
      title: "Ser dueño de un restaurante nunca fue tan difícil.",
      body:
        "Tus clientes piden por seis apps distintas. Rappi se queda con el 30%. La gente llega una vez y no regresa. Tu competencia gasta en anuncios que tú no tienes tiempo de hacer.",
      points: [
        {
          kpi: "–32%",
          label: "Margen perdido en apps de delivery",
          note: "Comisiones promedio en Rappi, Uber Eats y DiDi Food en México.",
        },
        {
          kpi: "68%",
          label: "Clientes que nunca regresan",
          note: "De cada 10 comensales nuevos, 7 no vuelven en 90 días.",
        },
        {
          kpi: "4.3 hrs",
          label: "Semanales en WhatsApp",
          note: "Tiempo que el staff pierde respondiendo mensajes manualmente.",
        },
      ],
    },
    features: {
      eyebrow: "La plataforma",
      title: "Un solo lugar para crecer tu restaurante.",
      subtitle:
        "Sitio web, pedidos directos, lealtad y marketing — conectados, en automático, y en español.",
      tabs: [
        {
          key: "sitio",
          label: "Más tráfico",
          headline: "Aparece primero en Google.",
          body:
            "Sitio web hecho por IA, optimizado para SEO local. Tus comensales te encuentran cuando buscan 'comer cerca' — sin pagar a Rappi por la visibilidad.",
          bullets: [
            "Sitio web con tu marca, listo en 48 horas",
            "SEO local optimizado por IA en español mexicano",
            "Ficha de Google Maps y Reseñas administradas en automático",
          ],
        },
        {
          key: "pedidos",
          label: "Más ventas",
          headline: "Tu propio delivery, sin el 30%.",
          body:
            "Menú en línea con tu marca. Paga con tarjeta o efectivo. Integrado con tu cocina y repartidores propios o Uber Direct.",
          bullets: [
            "Comisión de 0% vs 30% de apps",
            "Upsells inteligentes que suben el ticket promedio",
            "Integración con Uber Direct y repartidores propios",
          ],
        },
        {
          key: "lealtad",
          label: "Más recompra",
          headline: "Clientes que vuelven solos.",
          body:
            "Programa de puntos digital, cumpleaños automáticos y campañas de reactivación que corren 24/7. App de marca opcional para tus mejores clientes.",
          bullets: [
            "Tarjeta de lealtad en Apple Wallet y Google Wallet",
            "Cupones personalizados por segmento de cliente",
            "Campañas de 'te extrañamos' automáticas",
          ],
        },
        {
          key: "marketing",
          label: "Más automatización",
          headline: "Campañas que se escriben solas.",
          body:
            "Fluxsales aprende quién es tu cliente ideal y manda WhatsApp, SMS y emails en los momentos correctos. Tú apruebas desde el celular, nosotros enviamos.",
          bullets: [
            "Segmentación por hábito de consumo",
            "Copywriting generado por IA en español mexicano",
            "A/B testing automático de asuntos y ofertas",
          ],
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Más ventas, paso a paso.",
      subtitle: "Una sola plataforma que cubre todo el viaje del cliente — desde que te encuentra en Google hasta que vuelve por décima vez.",
      steps: [
        {
          n: "01",
          title: "Aparece arriba en Google",
          body:
            "Gana a tu competencia con un sitio web hecho a la medida de Google. Más pedidos de la gente que ya te busca en tu colonia.",
          link: "Sitio web AI · ver más",
          art: "search",
        },
        {
          n: "02",
          title: "Vende más con pedidos directos",
          body:
            "Tus clientes ordenan más cuando el checkout se siente familiar y fácil — como las cadenas grandes, sin la comisión de Rappi.",
          link: "Pedidos en línea · ver más",
          art: "menu",
        },
        {
          n: "03",
          title: "Trae a los clientes de regreso con tu app",
          body:
            "Tu propia app móvil con tu marca, más un programa de puntos como el de Starbucks. Los clientes que la usan reordenan ~2x más.",
          link: "App móvil · ver más",
          art: "app",
        },
        {
          n: "04",
          title: "Marketing automatizado que vende solo",
          body:
            "Campañas comprobadas de WhatsApp, email y push que se mandan sin que escribas una palabra. Cumpleaños, abandonos, reactivaciones.",
          link: "Automatizaciones · ver más",
          art: "automation",
        },
      ],
    },
    metrics: {
      eyebrow: "Resultados reales",
      title: "Lo que pasa cuando prendes Fluxsales.",
      items: [
        { value: "+38%", label: "Aumento en ventas en 90 días", sub: "Promedio en 1,400+ restaurantes" },
        { value: "3.2×", label: "Clientes que regresan", sub: "Vs. antes de usar Fluxsales" },
        { value: "–74%", label: "Tiempo en marketing manual", sub: "Horas del dueño por semana" },
        { value: "12 días", label: "Payback promedio", sub: "Tiempo para recuperar inversión" },
      ],
    },
    roi: {
      eyebrow: "Calculadora de ahorro",
      title: "¿Cuánto le estás regalando a Rappi?",
      subtitle: "Mueve un porcentaje de tus pedidos de apps a tu propio canal directo. Te mostramos cuánto ahorras al año.",
      ordersWeek: "Pedidos en apps por semana",
      avgTicket: "Ticket promedio (MXN)",
      commission: "Comisión que te cobra la app",
      movePct: "% que mueves a directo con Fluxsales",
      payingNow: "Le pagas a las apps hoy",
      saveYearly: "Ahorras al año con Fluxsales",
      saveMonthly: "al mes",
      directOrders: "Pedidos directos nuevos al año",
      note: "Calculado contra el desempeño promedio de restaurantes Fluxsales en los primeros 12 meses. Comisión de Fluxsales: 0% en pedidos directos.",
      cta: "Quiero esta calculadora con mis números reales",
      caseLabel: "Caso real",
      caseName: "Bora Bora Pizzas",
      caseCity: "Celaya, Guanajuato",
      caseQuote: "Pasamos del 70% al 28% de dependencia de Rappi en cinco meses.",
      caseStat1: "$412,000",
      caseStat1L: "Ahorrados en comisiones el primer año",
      caseStat2: "–42%",
      caseStat2L: "Dependencia de apps",
    },
    testimonials: {
      eyebrow: "Historias",
      title: "Restauranteros hablando de restauranteros.",
      items: [
        {
          quote:
            "Antes pasaba los domingos haciendo posts de Instagram. Ahora Fluxsales los hace por mí y vendemos el doble los martes.",
          name: "Andrea Castellanos",
          role: "Dueña · Cosi Fan Tutte",
          city: "Querétaro",
          photo: "https://i.pravatar.cc/240?img=47",
        },
        {
          quote:
            "Bajamos nuestra dependencia de Rappi del 70% al 28% en cinco meses. El delivery directo cambió el negocio.",
          name: "Ricardo Mendoza",
          role: "Co-fundador · Bora Bora Pizzas",
          city: "Celaya, Guanajuato",
          photo: "https://i.pravatar.cc/240?img=12",
        },
        {
          quote:
            "La parte de lealtad es magia. Los clientes reciben un mensaje el día de su cumpleaños y vienen con tres amigos.",
          name: "Mariana Ortiz",
          role: "Operaciones · Dolce Bisquet",
          city: "Monterrey",
          photo: "https://i.pravatar.cc/240?img=5",
        },
      ],
    },
    pricing: {
      eyebrow: "Precios",
      title: "Precio simple, hecho para tu restaurante.",
      subtitle: "Toda la plataforma de Fluxsales. Mes a mes, sin contratos anuales.",
      perMonth: "/mes",
      plans: [
        {
          name: "Flexible",
          tag: "Suscripción más baja con una pequeña comisión por orden. Tus costos suben solo cuando tus ventas suben.",
          price: 2499,
          fee: "+ 5% comisión por transacción",
          taxes: "+ IVA",
          cta: "Agenda una demo",
        },
        {
          name: "Sin comisiones",
          tag: "Costo predecible, cero comisiones por orden. Mejor si ya facturas $25,000+/mes en órdenes en línea.",
          price: 5499,
          fee: "Sin comisiones adicionales",
          taxes: "+ IVA",
          cta: "Agenda una demo",
          popular: true,
        },
      ],
      multiNote: "Tarifas especiales disponibles para multi-sucursal",
      includedTitle: "Incluido en ambos planes",
      included: [
        { t: "Sitio web AI-optimizado", d: "Construido para rankear en Google. Restaurantes promedio ven 20% más tráfico SEO en 30 días." },
        { t: "Pedidos en línea directos", d: "Convierte hasta 80% más visitantes en clientes vs. el sitio promedio de un restaurante." },
        { t: "App móvil con tu marca", d: "Los clientes que usan tu app reordenan alrededor de 2x más seguido." },
        { t: "Páginas SEO automáticas", d: "Creamos páginas optimizadas que rankean y te traen pedidos directos." },
        { t: "Lealtad y recompensas", d: "Programa de puntos como el de las cadenas grandes, sin la complicación." },
        { t: "Marketing con IA", d: "Campañas de email y WhatsApp comprobadas que venden solas." },
        { t: "Pedidos para catering", d: "Menús, ordenamiento fácil y páginas SEO para que te encuentren las empresas locales." },
        { t: "Migración + setup", d: "Nosotros movemos todo. Te asignamos un especialista dedicado." },
        { t: "Protección de chargebacks", d: "Te protegemos de cargos fraudulentos. Sin riesgo." },
        { t: "Soporte 24/7 en español", d: "Tu restaurante no duerme; nuestro soporte tampoco." },
      ],
    },
    integrations: {
      eyebrow: "Integraciones",
      title: "Se conecta con lo que ya usas.",
      subtitle: "Más de 40 integraciones nativas con los sistemas más usados en México y LATAM.",
      items: [
        "WhatsApp Business",
        "Rappi",
        "Uber Eats",
        "DiDi Food",
        "Clip",
        "Mercado Pago",
        "Stripe",
        "Google Maps",
        "Instagram",
        "Meta Ads",
        "NCR Aloha",
        "Toast",
        "Soft Restaurant",
        "Parrot",
        "Mr. Rappi",
        "QuickBooks",
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que todos nos preguntan.",
      items: [
        {
          q: "¿Cuánto tiempo toma implementar Fluxsales?",
          a: "En promedio, 48 horas. Conectamos tu POS, WhatsApp Business y redes. Tú ves resultados en la primera semana.",
        },
        {
          q: "¿Necesito saber de tecnología?",
          a: "No. Fluxsales está diseñado para restauranteros, no para ingenieros. Si sabes usar WhatsApp, sabes usar Fluxsales.",
        },
        {
          q: "¿Funciona con mi POS actual?",
          a: "Nos integramos con Soft Restaurant, Parrot, NCR Aloha, Toast y 30+ sistemas más. Si usas otro, tenemos API.",
        },
        {
          q: "¿Los datos de mis clientes son míos?",
          a: "100%. A diferencia de Rappi o Uber Eats, tú eres dueño de tu base de clientes. Puedes exportarla cuando quieras.",
        },
        {
          q: "¿Tienen contrato mínimo?",
          a: "No. Mensualidades sin compromiso. El plan anual tiene 20% de descuento, pero no es obligatorio.",
        },
        {
          q: "¿Atienden fuera de México?",
          a: "Sí — actualmente operamos en México, Colombia, Chile y Perú. El producto está localizado para cada mercado.",
        },
      ],
    },
    founders: {
      eyebrow: "Nuestra historia",
      title: "Construido por gente que creció en restaurantes.",
      body:
        "Fluxsales nace en la cocina de un restaurante en la colonia Roma. Después de quince años entre meseros, cocineros y dueños, vimos que la tecnología que existía no estaba hecha para nosotros: estaba traducida, cara y fría. Decidimos construir algo en español, al alcance de cualquier restaurantero, que se sintiera como tener un socio digital 24/7.",
      signature: "— Sebastián Septién y Roger Mart, fundadores",
    },
    cta: {
      title: "Dale superpoderes a tu restaurante.",
      subtitle: "Demo gratuita de 20 minutos. Te mostramos resultados con tus propios números.",
      primary: "Agenda una demo",
      secondary: "Hablar por WhatsApp",
    },
    footer: {
      tagline: "La plataforma #1 para restaurantes en LATAM.",
      product: "Producto",
      productLinks: ["Sitio + SEO", "Pedidos directos", "Lealtad", "Marketing automático", "Integraciones"],
      company: "Empresa",
      companyLinks: ["Sobre nosotros", "Historias de clientes", "Blog", "Trabaja con nosotros", "Prensa"],
      resources: "Recursos",
      resourcesLinks: ["Centro de ayuda", "Academia Fluxsales", "Estado del sistema", "API docs", "Contacto"],
      legal: "© 2026 Fluxsales. Hecho con cariño en CDMX.",
    },
  },
  en: {
    nav: {
      product: "Product",
      howItWorks: "How it works",
      pricing: "Pricing",
      stories: "Stories",
      resources: "Resources",
      login: "Log in",
      cta: "Book a demo",
    },
    hero: {
      eyebrow: "For restaurant operators in Mexico",
      title: "Superpowers for your restaurant.",
      subtitle:
        "More Google traffic, more direct sales, more guests who return. Fluxsales is the operating system your restaurant needs — in Spanish, built for LATAM.",
      primary: "Book a demo",
      secondary: "See the product",
      trust: "1,400+ restaurants run on Fluxsales",
    },
    logos: {
      title: "Restaurants growing with Fluxsales",
      brands: [
        "Cosi Fan Tutte",
        "Sabrosy",
        "Cara de Pan",
        "Bora Bora Pizzas",
        "Carl´s Jr",
        "Dolce Bisquet",
        "Brooklyn Burgers",
      ],
    },
    venues: {
      eyebrow: "Our customers",
      title: "Only yours is missing.",
      subtitle: "Ambitious restaurants across LATAM are already growing with Fluxsales. Tap or drag to see more.",
      cta: "Start with Fluxsales",
      count: "1,400+ active restaurants",
      items: [
        { id: "cosi-fan-tutte",   name: "Cosi Fan Tutte",     city: "" },
        { id: "sabrosy",          name: "Sabrosy",            city: "" },
        { id: "cara-de-pan",     name: "Cara de Pan",        city: "" },
        { id: "bora-bora",       name: "Bora Bora Pizzas",   city: "" },
        { id: "carls-jr",        name: "Carl´s Jr",          city: "" },
        { id: "dolce-bisquet",   name: "Dolce Bisquet",      city: "" },
        { id: "brooklyn-burgers",name: "Brooklyn Burgers",   city: "" },
        { id: "tiberius",        name: "Tiberius Pizzas",    city: "" },
      ],
    },
    problem: {
      eyebrow: "The problem",
      title: "Running a restaurant has never been harder.",
      body:
        "Guests order through six different apps. Rappi keeps 30%. People come once and never return. Your competition is running ads you don't have time to make.",
      points: [
        {
          kpi: "–32%",
          label: "Margin lost to delivery apps",
          note: "Average commissions on Rappi, Uber Eats, and DiDi Food in Mexico.",
        },
        {
          kpi: "68%",
          label: "Guests who never return",
          note: "7 out of 10 new diners don't come back within 90 days.",
        },
        {
          kpi: "4.3 hrs",
          label: "Weekly in WhatsApp",
          note: "Time staff waste replying to messages by hand.",
        },
      ],
    },
    features: {
      eyebrow: "The platform",
      title: "One place to grow your restaurant.",
      subtitle:
        "Website, direct orders, loyalty, and marketing — connected, automatic, and in Spanish.",
      tabs: [
        {
          key: "sitio",
          label: "More traffic",
          headline: "Rank #1 on Google.",
          body:
            "AI-built restaurant website, optimized for local SEO. Guests find you when they search 'food near me' — without paying Rappi for visibility.",
          bullets: [
            "Branded restaurant website, live in 48 hours",
            "Local SEO optimized by AI in Mexican Spanish",
            "Google Maps listing and reviews managed automatically",
          ],
        },
        {
          key: "pedidos",
          label: "More sales",
          headline: "Your own delivery — without the 30%.",
          body:
            "Branded online menu. Card or cash. Plugged into your kitchen and your own drivers or Uber Direct.",
          bullets: [
            "0% commission vs 30% from apps",
            "Smart upsells that lift average ticket",
            "Uber Direct integration for fulfillment",
          ],
        },
        {
          key: "lealtad",
          label: "More repeats",
          headline: "Guests who come back on their own.",
          body:
            "Digital points program, automatic birthday offers, and win-back campaigns that run 24/7. Optional branded app for your best customers.",
          bullets: [
            "Loyalty card in Apple Wallet and Google Wallet",
            "Personalized coupons by guest segment",
            "Automatic 'we miss you' campaigns",
          ],
        },
        {
          key: "marketing",
          label: "More automation",
          headline: "Campaigns that write themselves.",
          body:
            "Fluxsales learns your ideal guest and sends WhatsApp, SMS, and email at the right moments. You approve from your phone — we send.",
          bullets: [
            "Segmentation by dining habits",
            "Copy generated in Mexican Spanish by AI",
            "Automatic A/B testing of subject lines and offers",
          ],
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "More sales, step by step.",
      subtitle: "One platform covering the whole guest journey — from finding you on Google to coming back for the tenth time.",
      steps: [
        {
          n: "01",
          title: "Show up at the top of Google",
          body:
            "Beat your competition with a website perfectly optimized for Google. Get more orders from people in your area already searching for you.",
          link: "AI website · learn more",
          art: "search",
        },
        {
          n: "02",
          title: "Grow sales with the easiest direct ordering",
          body:
            "Guests order more when your checkout feels familiar and easy — just like the big chains, without Rappi's commission.",
          link: "Online ordering · learn more",
          art: "menu",
        },
        {
          n: "03",
          title: "Drive re-orders with your mobile app",
          body:
            "Your own 5-star mobile app, plus a Starbucks-style rewards program. Guests who use it reorder ~2x more often.",
          link: "Mobile app · learn more",
          art: "app",
        },
        {
          n: "04",
          title: "Auto-marketing that sells on its own",
          body:
            "Proven WhatsApp, email, and push campaigns that send themselves — without you writing a word. Birthdays, win-backs, abandons.",
          link: "Automations · learn more",
          art: "automation",
        },
      ],
    },
    metrics: {
      eyebrow: "Real results",
      title: "What happens when you turn Fluxsales on.",
      items: [
        { value: "+38%", label: "Sales growth in 90 days", sub: "Average across 1,400+ restaurants" },
        { value: "3.2×", label: "Guests returning", sub: "Vs. before using Fluxsales" },
        { value: "–74%", label: "Time spent on manual marketing", sub: "Owner hours saved per week" },
        { value: "12 days", label: "Average payback", sub: "Time to recover your investment" },
      ],
    },
    roi: {
      eyebrow: "Savings calculator",
      title: "How much are you giving away to Rappi?",
      subtitle: "Move a share of your app orders to your own direct channel. We'll show you how much you save per year.",
      ordersWeek: "Weekly orders on apps",
      avgTicket: "Average ticket (MXN)",
      commission: "Commission charged by the app",
      movePct: "% moved to direct with Fluxsales",
      payingNow: "You pay the apps today",
      saveYearly: "Yearly savings with Fluxsales",
      saveMonthly: "per month",
      directOrders: "New direct orders per year",
      note: "Calculated against the average performance of Fluxsales restaurants in their first 12 months. Fluxsales fee: 0% on direct orders.",
      cta: "Run this with my real numbers",
      caseLabel: "Real customer",
      caseName: "Bora Bora Pizzas",
      caseCity: "Celaya, Guanajuato",
      caseQuote: "We dropped Rappi dependency from 70% to 28% in five months.",
      caseStat1: "$412,000",
      caseStat1L: "Saved in commissions, year one",
      caseStat2: "–42%",
      caseStat2L: "App dependency",
    },
    testimonials: {
      eyebrow: "Stories",
      title: "Operators talking to operators.",
      items: [
        {
          quote:
            "I used to spend Sundays making Instagram posts. Now Fluxsales does it for me and Tuesdays sell double.",
          name: "Andrea Castellanos",
          role: "Owner · Cosi Fan Tutte",
          city: "Querétaro",
          photo: "https://i.pravatar.cc/240?img=47",
        },
        {
          quote:
            "We cut our Rappi dependency from 70% to 28% in five months. Direct delivery changed the business.",
          name: "Ricardo Mendoza",
          role: "Co-founder · Bora Bora Pizzas",
          city: "Celaya, Guanajuato",
          photo: "https://i.pravatar.cc/240?img=12",
        },
        {
          quote:
            "The loyalty piece is magic. Guests get a birthday message and show up with three friends.",
          name: "Mariana Ortiz",
          role: "Operations · Dolce Bisquet",
          city: "Monterrey",
          photo: "https://i.pravatar.cc/240?img=5",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple pricing that fits your restaurant.",
      subtitle: "The complete Fluxsales platform. Pay month-to-month with no long-term contracts.",
      perMonth: "/mo",
      plans: [
        {
          name: "Flexible",
          tag: "Lower subscription with a small per-order fee. Your costs scale with your sales.",
          price: 2499,
          fee: "+ 5% platform fee per order",
          taxes: "+ VAT",
          cta: "Book a demo",
        },
        {
          name: "Flat rate",
          tag: "Predictable cost and no per-order fees. Best for restaurants at $25k+/mo in online sales.",
          price: 5499,
          fee: "with no additional fees",
          taxes: "+ VAT",
          cta: "Book a demo",
          popular: true,
        },
      ],
      multiNote: "Special rates available for multi-location",
      includedTitle: "Included on both plans",
      included: [
        { t: "AI-optimized website", d: "Built to rank on Google. Restaurants see 20% more SEO traffic in 30 days on average." },
        { t: "Direct online ordering", d: "Turn up to 80% more visitors into customers vs. the average restaurant site." },
        { t: "Branded mobile app", d: "Guests who use your branded app reorder around 2x more often." },
        { t: "Automated SEO pages", d: "We build SEO-optimized pages that rank and earn you direct orders." },
        { t: "Loyalty and rewards", d: "A points program just like the big chains, without the headache." },
        { t: "AI-powered marketing", d: "Proven email and WhatsApp campaigns that drive sales on their own." },
        { t: "Catering orders", d: "Catering menus, easy ordering, and SEO pages that get found by local businesses." },
        { t: "Setup & migration", d: "We handle your entire switch. You get a dedicated specialist." },
        { t: "Chargeback protection", d: "Full protection. Stay safe from fraudulent chargebacks." },
        { t: "24/7 Spanish support", d: "You're 24/7, so our support is, too. Consistently top-rated." },
      ],
    },
    integrations: {
      eyebrow: "Integrations",
      title: "Plugs into what you already use.",
      subtitle: "40+ native integrations with the most popular systems in Mexico and LATAM.",
      items: [
        "WhatsApp Business",
        "Rappi",
        "Uber Eats",
        "DiDi Food",
        "Clip",
        "Mercado Pago",
        "Stripe",
        "Google Maps",
        "Instagram",
        "Meta Ads",
        "NCR Aloha",
        "Toast",
        "Soft Restaurant",
        "Parrot",
        "Mr. Rappi",
        "QuickBooks",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "What everyone asks us.",
      items: [
        {
          q: "How long does implementation take?",
          a: "48 hours on average. We connect your POS, WhatsApp Business, and socials. You see results in the first week.",
        },
        {
          q: "Do I need to be technical?",
          a: "No. Fluxsales is built for operators, not engineers. If you can use WhatsApp, you can use Fluxsales.",
        },
        {
          q: "Does it work with my current POS?",
          a: "We integrate with Soft Restaurant, Parrot, NCR Aloha, Toast, and 30+ more. Anything else, we have an API.",
        },
        {
          q: "Do I own my guest data?",
          a: "100%. Unlike Rappi or Uber Eats, you own your customer base. Export any time.",
        },
        {
          q: "Is there a minimum contract?",
          a: "No. Month-to-month. Annual plans save you 20% but aren't required.",
        },
        {
          q: "Do you operate outside Mexico?",
          a: "Yes — currently Mexico, Colombia, Chile, and Peru. Localized for each market.",
        },
      ],
    },
    founders: {
      eyebrow: "Our story",
      title: "Built by people who grew up in restaurants.",
      body:
        "Fluxsales started in a kitchen in Mexico City's Roma neighborhood. After fifteen years among servers, cooks, and owners, we saw that the technology built for us wasn't built for us — it was translated, expensive, and cold. We set out to build something in Spanish, accessible to any operator, that felt like having a digital partner 24/7.",
      signature: "— Sebastián Septién and Roger Mart, founders",
    },
    cta: {
      title: "Give your restaurant superpowers.",
      subtitle: "20-minute free demo. We'll show you results using your own numbers.",
      primary: "Book a demo",
      secondary: "WhatsApp us",
    },
    footer: {
      tagline: "The #1 platform for restaurants in LATAM.",
      product: "Product",
      productLinks: ["Website + SEO", "Direct ordering", "Loyalty", "Automated marketing", "Integrations"],
      company: "Company",
      companyLinks: ["About", "Customer stories", "Blog", "Careers", "Press"],
      resources: "Resources",
      resourcesLinks: ["Help center", "Fluxsales Academy", "System status", "API docs", "Contact"],
      legal: "© 2026 Fluxsales. Made with cariño in CDMX.",
    },
  },
};
