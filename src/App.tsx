import { useRef, useState } from "react"

function App() {
  const [entered, setEntered] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [language, setLanguage] = useState<"en" | "ru" | "ua">("en")

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const enterSite = async () => {
    setEntered(true)
    setSoundOn(true)

    setTimeout(async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.18
        audioRef.current.loop = true
        await audioRef.current.play()
      }
    }, 400)
  }

  const toggleSound = () => {
    if (!audioRef.current) return

    if (soundOn) {
      audioRef.current.pause()
      setSoundOn(false)
    } else {
      audioRef.current.volume = 0.18
      audioRef.current.play()
      setSoundOn(true)
    }
  }

  const t = {
    en: {
      about: "About",
      topics: "Topics",
      join: "Join",
      enter: "Enter DRIVE",
      enterBtn: "Enter Experience",
      heroTitle: "You don’t have to do life alone.",
      heroText:
        "DRIVE Men’s Club is a place for real conversations, support, faith, connection, and growth for men navigating life, family, immigration, pressure, and purpose.",
      joinBtn: "Join DRIVE",
      learnBtn: "Learn More",
      aboutTitle: "A men’s club for real life.",
      aboutText1:
        "DRIVE is for men who are tired of empty conversations and fake connections.",
      aboutText2:
        "We talk about immigration, family, pressure, work, faith, identity, and the struggles many men carry silently.",
      why: "Why DRIVE",
      whyTitle:
        "Many men are surrounded by people, but still feel alone.",
      whyItems: [
  {
    title: "Pressure they never talk about.",
    desc: "The weight men carry silently — responsibility, expectations, stress, and inner battles.",
  },
  {
    title: "Immigration challenges and uncertainty.",
    desc: "Real conversations about adapting, documents, work, family, and life in a new country.",
  },
  {
    title: "Family, work, stress, and silent battles.",
    desc: "A space to talk honestly about marriage, parenting, pressure, and emotional fatigue.",
  },
  {
    title: "No real place to be honest.",
    desc: "Many men have people around them, but no safe place to speak openly.",
  },
  {
    title: "No strong circle of support.",
    desc: "DRIVE helps men build healthy connections instead of living isolated.",
  },
  {
    title: "A deep need for faith and purpose.",
    desc: "Men need more than survival — they need direction, meaning, and God.",
  },
],
      whyText:
        "DRIVE was created to give men a place for real conversations, support, connection, growth, and faith.",
      topicsTitle: "Real topics for men.",
      topicsList: [
        "Immigration & Life in America",
        "Family & Relationships",
        "Pressure & Stress",
        "Faith & Purpose",
        "Business & Work",
        "Addictions & Recovery",
        "Leadership",
        "Discipline",
        "Real Conversations",
      ],
      nextMeeting: "Join the next meeting",
      registerText:
        "Register for updates, upcoming meetings, and DRIVE events.",
      registerBtn: "Register Now",
      soundOn: "Sound On",
      soundOff: "Sound Off",
    },

    ru: {
      about: "О Нас",
      topics: "Темы",
      join: "Вступить",
      enter: "Войти в DRIVE",
      enterBtn: "Войти",
      heroTitle: "Ты не должен проходить жизнь один.",
      heroText:
        "DRIVE — это мужской клуб для настоящих разговоров, поддержки, веры, общения и роста мужчин, проходящих через жизнь, семью, иммиграцию, давление и поиск смысла.",
      joinBtn: "Присоединиться",
      learnBtn: "Подробнее",
      aboutTitle: "Мужской клуб для настоящей жизни.",
      aboutText1:
        "DRIVE создан для мужчин, которым нужны не поверхностные разговоры.",
      aboutText2:
        "Мы говорим об иммиграции, семье, давлении, работе, вере, личности и внутренней борьбе мужчин.",
      why: "Почему DRIVE",
      whyTitle:
        "Многие мужчины окружены людьми, но внутри остаются одинокими.",
        whyItems: [
          {
            title: "Давление, о котором они молчат.",
            desc: "Ответственность, ожидания, стресс и внутренние битвы, которые мужчины часто несут молча.",
          },
          {
            title: "Иммиграция и постоянная неопределенность.",
            desc: "Разговоры о жизни в новой стране, документах, работе, семье и адаптации.",
          },
          {
            title: "Семья, работа, стресс и внутренние битвы.",
            desc: "Место, где можно честно говорить о браке, семье, давлении и усталости.",
          },
          {
            title: "Отсутствие места, где можно быть настоящим.",
            desc: "Многие мужчины окружены людьми, но не имеют безопасного места для честного разговора.",
          },
          {
            title: "Недостаток сильного мужского окружения.",
            desc: "DRIVE помогает мужчинам строить здоровые связи и не жить в изоляции.",
          },
          {
            title: "Глубокая потребность в вере и смысле.",
            desc: "Мужчине нужно больше, чем просто выживать — ему нужны направление, смысл и Бог.",
          },
        ],
      whyText:
        "DRIVE создан, чтобы мужчины могли находить поддержку, общение, рост и веру.",
      topicsTitle: "Настоящие темы для мужчин.",
      topicsList: [
        "Иммиграция и жизнь в США",
        "Семья и отношения",
        "Стресс и давление",
        "Вера и смысл",
        "Бизнес и работа",
        "Зависимости и восстановление",
        "Лидерство",
        "Дисциплина",
        "Настоящие разговоры",
      ],
      nextMeeting: "Присоединяйся к следующей встрече",
      registerText:
        "Регистрируйся для обновлений, встреч и событий DRIVE.",
      registerBtn: "Регистрация",
      soundOn: "Звук Вкл",
      soundOff: "Звук Выкл",
    },
    ua: {
      about: "Про Нас",
      topics: "Теми",
      join: "Приєднатися",
      enter: "Увійти в DRIVE",
      enterBtn: "Увійти",
      heroTitle: "Ти не повинен проходити життя сам.",
      heroText:
        "DRIVE — це чоловічий клуб для справжніх розмов, підтримки, віри, спілкування та розвитку чоловіків, які проходять через життя, сім’ю, імміграцію, тиск і пошук сенсу.",
      joinBtn: "Приєднатися",
      learnBtn: "Детальніше",
      aboutTitle: "Чоловічий клуб для справжнього життя.",
      aboutText1:
        "DRIVE створений для чоловіків, яким потрібні не поверхневі розмови.",
      aboutText2:
        "Ми говоримо про імміграцію, сім’ю, тиск, роботу, віру, особистість і внутрішню боротьбу чоловіків.",
      why: "Чому DRIVE",
      whyTitle:
        "Багато чоловіків оточені людьми, але всередині залишаються самотніми.",
      whyItems: [
        {
          title: "Тиск, про який вони мовчать.",
          desc: "Відповідальність, очікування, стрес і внутрішні битви, які чоловіки часто несуть мовчки.",
        },
        {
          title: "Імміграція та постійна невизначеність.",
          desc: "Розмови про життя в новій країні, документи, роботу, сім’ю та адаптацію.",
        },
        {
          title: "Сім’я, робота, стрес і внутрішні битви.",
          desc: "Місце, де можна чесно говорити про шлюб, сім’ю, тиск і втому.",
        },
        {
          title: "Відсутність місця, де можна бути справжнім.",
          desc: "Багато чоловіків оточені людьми, але не мають безпечного місця для чесної розмови.",
        },
        {
          title: "Недостатньо сильного чоловічого оточення.",
          desc: "DRIVE допомагає чоловікам будувати здорові зв’язки та не жити в ізоляції.",
        },
        {
          title: "Глибока потреба у вірі та сенсі.",
          desc: "Чоловікові потрібно більше, ніж просто виживати — йому потрібні напрямок, сенс і Бог.",
        },
      ],
      whyText:
        "DRIVE створений, щоб чоловіки могли знаходити підтримку, спілкування, розвиток і віру.",
      topicsTitle: "Справжні теми для чоловіків.",
      topicsList: [
        "Імміграція та життя у США",
        "Сім’я та стосунки",
        "Стрес і тиск",
        "Віра та сенс",
        "Бізнес і робота",
        "Залежності та відновлення",
        "Лідерство",
        "Дисципліна",
        "Справжні розмови",
      ],
      nextMeeting: "Приєднуйся до наступної зустрічі",
      registerText:
        "Реєструйся для оновлень, зустрічей та подій DRIVE.",
      registerBtn: "Реєстрація",
      soundOn: "Звук Увімк",
      soundOff: "Звук Вимк",
    },
  }

  const text = t[language]

  return (
    <>
      <audio ref={audioRef} src="/drive-theme.mp3" preload="auto" />

      {!entered && (
        <section className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black px-6 text-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[120px]" />

          <img
            src="/drive-logo.png"
            alt="DRIVE"
            className="relative mb-10 w-64 md:w-96"
          />

          <h1 className="relative text-4xl md:text-6xl font-black uppercase tracking-tight">
            {text.enter}
          </h1>

          <button
            onClick={enterSite}
            className="relative mt-10 rounded-2xl bg-white px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition hover:bg-zinc-200"
          >
            {text.enterBtn}
          </button>
        </section>
      )}

      <main className="min-h-screen bg-black text-white overflow-hidden">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <img
              src="/drive-logo.png"
              alt="DRIVE Men’s Club"
              className="h-12 md:h-14 w-auto"
            />

            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.28em] text-zinc-400">
                <a href="#about" className="hover:text-white transition">
                  {text.about}
                </a>

                <a href="#topics" className="hover:text-white transition">
                  {text.topics}
                </a>

                <a href="#join" className="hover:text-white transition">
                  {text.join}
                </a>
              </nav>

              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
  <button
    onClick={() => setLanguage("en")}
    className={`transition ${
      language === "en"
        ? "text-white"
        : "text-zinc-500 hover:text-white"
    }`}
  >
    EN
  </button>

  <span className="text-zinc-600">|</span>

  <button
    onClick={() => setLanguage("ru")}
    className={`transition ${
      language === "ru"
        ? "text-white"
        : "text-zinc-500 hover:text-white"
    }`}
  >
    RU
  </button>

  <span className="text-zinc-600">|</span>

  <button
    onClick={() => setLanguage("ua")}
    className={`transition ${
      language === "ua"
        ? "text-white"
        : "text-zinc-500 hover:text-white"
    }`}
  >
    UA
  </button>
</div>
            </div>
          </div>
        </header>

        <section className="relative min-h-screen flex items-center px-6 pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(120,120,120,0.25),rgba(0,0,0,0.9)_55%,#000_100%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),#000_95%)]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-20 md:grid-cols-2">
            <div>
              <p className="mb-5 text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-amber-400/80">
                EST. 2026 • Philadelphia
              </p>

              <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.92] tracking-tight">
  {text.heroTitle}
</h1>

              <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-300">
                {text.heroText}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="rounded-2xl bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-zinc-200"
                >
                  {text.joinBtn}
                </a>

                <a
                  href="#about"
                  className="rounded-2xl border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  {text.learnBtn}
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/drive-hero.png"
                alt="DRIVE Men’s Club"
                className="relative w-full max-w-4xl opacity-95"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 45%, transparent 78%)",
                  maskImage:
                    "radial-gradient(ellipse at center, black 45%, transparent 78%)",
                }}
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-white/10 bg-zinc-950 px-6 py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
                {text.aboutTitle}
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
              <p>{text.aboutText1}</p>
              <p>{text.aboutText2}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-black px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400/80">
              {text.why}
            </p>

            <h2 className="max-w-4xl text-4xl md:text-6xl font-black uppercase leading-tight">
              {text.whyTitle}
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
            {text.whyItems.map((item) => (
  <div
    key={item.title}
    className="
group
relative
min-h-[120px]
rounded-[2rem]
border
border-white/10
bg-white/[0.03]
backdrop-blur-xl
p-7
shadow-[0_0_30px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:border-amber-400/30
hover:bg-white/[0.05]
hover:shadow-[0_0_40px_rgba(255,180,80,0.08)]
"
  >
    <p className="text-lg font-semibold leading-relaxed text-zinc-100 transition duration-300 group-hover:text-amber-300">
      {item.title}
    </p>

    <p className="mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-zinc-400 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
      {item.desc}
    </p>
  </div>
))}
            </div>

            <p className="mt-14 max-w-3xl text-xl leading-relaxed text-zinc-300">
              {text.whyText}
            </p>
          </div>
        </section>

        <section id="topics" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-14 text-4xl md:text-6xl font-black uppercase">
              {text.topicsTitle}
            </h2>

            <div className="grid gap-5 md:grid-cols-3">
              {text.topicsList.map((topic) => (
                <div
                  key={topic}
                  className="
group
rounded-[2rem]
bg-white/[0.02]
px-7
py-5
backdrop-blur-xl
transition-all
duration-500
hover:bg-white/[0.05]
"
                >
                  <p className="text-lg font-semibold">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="join"
          className="border-t border-white/10 bg-zinc-950 px-6 py-24"
        >
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-black p-10 text-center md:p-16">
            <img
              src="/drive-logo.png"
              alt="DRIVE"
              className="mx-auto mb-8 h-32 w-auto"
            />

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              {text.nextMeeting}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {text.registerText}
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScTUx8UHNaJsEZxeHvbN9pbho-hjas-fdPfXQloZYvHa3w4dQ/viewform"
              target="_blank"
              className="mt-10 inline-block rounded-2xl bg-white px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition hover:bg-zinc-200"
            >
              {text.registerBtn}
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
          © 2026 DRIVE Men’s Club. All rights reserved.
        </footer>

        <button
          onClick={toggleSound}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-black/70 px-5 py-3 text-sm text-white backdrop-blur-xl hover:bg-white/10"
        >
          {soundOn ? text.soundOn : text.soundOff}
        </button>
      </main>
    </>
  )
}

export default App