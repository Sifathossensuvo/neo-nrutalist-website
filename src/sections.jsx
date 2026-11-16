import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Sec, Title, Counter } from "./ui.jsx";
import Car from "./Car.jsx";
import { roles, marquee, cars, carLove, qualities, journey, skills, quotes, goals, facts, letter, socials } from "./data.js";

const links = [["About", "about"], ["Dream", "dream"], ["Garage", "garage"], ["Journey", "journey"], ["Goals", "goals"], ["Letter", "letter"], ["Contact", "contact"]];

/* Navbar */
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} className="sticky top-0 z-40 border-b-4 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="nb-sm bg-pink px-3 py-1 font-display text-xl">Nairien.</a>
        <nav className="hidden gap-2 md:flex" aria-label="Main">
          {links.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="rounded-lg border-2 border-transparent px-3 py-1 font-bold transition hover:border-ink hover:bg-butter">{l}</a>
          ))}
        </nav>
        <button className="nb-sm bg-butter px-4 py-1 font-bold md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden border-t-4 border-ink bg-mint md:hidden" aria-label="Mobile">
            <div className="flex flex-col gap-2 p-4">
              {links.map(([l, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="nb-sm bg-white px-4 py-2 font-bold">{l}</a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* 1. Hero */
export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2300);
    return () => clearInterval(t);
  }, []);
  const floaters = [["top-10 left-[5%]", "✦", "bg-butter", 0], ["top-24 right-[7%]", "★", "bg-mint", 1], ["top-[48%] left-[2%]", "●", "bg-sky", 2], ["top-14 right-[36%]", "✺", "bg-lilac", 1.5]];
  return (
    <section id="home" className="relative overflow-hidden border-b-4 border-ink bg-pink pt-12 md:pt-20">
      {floaters.map(([pos, ch, bg, d], k) => (
        <motion.div key={k} aria-hidden="true" className={`nb-sm absolute ${pos} ${bg} hidden h-12 w-12 items-center justify-center text-2xl lg:flex`}
          animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity, delay: d, ease: "easeInOut" }}>{ch}</motion.div>
      ))}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="nb-sm mb-5 inline-block -rotate-2 bg-butter px-4 py-1 text-base font-bold sm:text-lg">
          Hey! Welcome to the world of
        </motion.p>
        <h1 className="font-display text-[clamp(3rem,15vw,11rem)] leading-[0.9]" aria-label="Nairien" style={{ textShadow: "5px 5px 0 #fff" }}>
          {"NAIRIEN".split("").map((l, k) => (
            <motion.span key={k} aria-hidden="true" className="inline-block" initial={{ y: -220, opacity: 0, rotate: -20 }} animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 11, delay: 0.15 + k * 0.08 }} whileHover={{ y: -12, rotate: k % 2 ? 6 : -6 }}>{l}</motion.span>
          ))}
        </h1>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="nb mt-4 inline-block -rotate-1 bg-lilac px-4 py-1 font-display text-2xl sm:text-4xl">
          Jahan Era
        </motion.div>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-lg font-bold sm:text-2xl">
          <span>is</span>
          <div className="nb-sm min-h-[2.75rem] bg-white px-4 py-1 sm:min-w-[19rem]">
            <AnimatePresence mode="wait">
              <motion.span key={i} className="block" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.25 }}>{roles[i]}</motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#about" className="nb-btn bg-butter">Meet Nairien</a>
          <a href="#garage" className="nb-btn bg-mint">See the dream garage</a>
        </div>
      </div>
      <div className="relative mt-4">
        <div className="relative mx-auto h-36 max-w-6xl md:h-52">
          <div className="absolute bottom-[-0.3rem] left-1/2 w-64 -translate-x-1/2 md:left-auto md:right-[8%] md:w-[26rem] md:translate-x-0">
            <Car className="w-full" />
          </div>
        </div>
        <div className="relative h-14 border-t-4 border-ink bg-ink">
          <div className="road-lines absolute inset-x-0 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}



/* 3. About */
export function About() {
  const [ok, setOk] = useState(true);
  return (
    <Sec id="about" bg="bg-sky">
      <Title sticker="👋">Who is Nairien?</Title>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal v="left">
          <motion.div whileHover={{ rotate: -2, scale: 1.02 }} className="nb relative mx-auto aspect-square w-full max-w-md rotate-3 overflow-hidden bg-lilac">
            {ok ? (
              <img src="/nairien.jpg" alt="Nairien Jahan Era" className="h-full w-full object-cover" onError={() => setOk(false)} />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-[9rem] leading-none sm:text-[12rem]">N</div>
            )}
          </motion.div>
        </Reveal>
        <Reveal v="right">
          <div className="nb bg-white p-6 sm:p-8">
            <p className="text-lg leading-relaxed sm:text-xl">
              Nairien Jahan Era is a dreamer with a plan. The goal is simple and huge: become a big entrepreneur and build a name the whole world remembers.
            </p>
            <p className="mt-4 text-lg leading-relaxed sm:text-xl">
              Beyond the ambition, Nairien is the friend who understands feelings, stands beside people in hard times and brings the laughter back.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Entrepreneur", "Car lover", "Kind soul", "Big dreamer"].map((t, k) => (
                <motion.span key={t} className={`nb-sm px-3 py-1 font-bold ${["bg-pink", "bg-butter", "bg-mint", "bg-lilac"][k]}`} animate={{ y: [0, -5, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: k * 0.3 }}>{t}</motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Sec>
  );
}

/* 4. Stats */
export function Stats() {
  const items = [{ n: 100, s: "%", l: "Good heart", c: "bg-pink" }, { n: 1, s: "", l: "Giant dream", c: "bg-sky" }, { n: 999, s: "+", l: "Smiles shared", c: "bg-mint" }, { n: 0, s: "", l: "Limits", c: "bg-lilac" }];
  return (
    <Sec id="stats" bg="bg-butter">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
        {items.map((it, k) => (
          <Reveal key={it.l} v="pop" d={k * 0.1}>
            <div className={`nb nb-hover p-5 text-center ${it.c}`}>
              <div className="whitespace-nowrap font-display text-[clamp(1.75rem,9vw,3.75rem)] leading-none"><Counter to={it.n} suffix={it.s} /></div>
              <div className="mt-2 font-bold">{it.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

/* 5. Dream */
export function Dream() {
  const cards = [["Build", "Start something real and grow it step by step.", "🏗️", "bg-pink"], ["Lead", "Create a team where everyone feels valued.", "🧭", "bg-mint"], ["Give back", "Lift up the people who helped along the way.", "🎁", "bg-sky"]];
  return (
    <Sec id="dream" bg="bg-lilac">
      <Title sticker="🌟" color="bg-pink">The big dream</Title>
      <Reveal v="up">
        <div className="nb relative bg-ink p-6 text-paper sm:p-10">
          <p className="font-display text-3xl leading-tight sm:text-5xl md:text-6xl">To become a big entrepreneur and a great businessman.</p>
          <motion.span aria-hidden="true" className="nb-sm absolute -right-2 -top-6 bg-butter px-3 py-1 text-3xl text-ink" animate={{ rotate: [8, -8, 8] }} transition={{ duration: 3, repeat: Infinity }}>👑</motion.span>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cards.map(([t, d, e, c], k) => (
          <Reveal key={t} v={k === 1 ? "up" : k ? "right" : "left"} d={k * 0.1}>
            <div className={`nb nb-hover h-full p-6 ${c}`}>
              <div className="text-4xl">{e}</div>
              <h3 className="mt-3 font-display text-3xl">{t}</h3>
              <p className="mt-2 text-lg">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

/* 6. Dream garage */
export function Garage() {
  return (
    <Sec id="garage" bg="bg-mint">
      <Title sticker="🔥" color="bg-pink">The dream garage</Title>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {cars.map((c, k) => (
          <Reveal key={c.name} v="pop" d={(k % 3) * 0.1}>
            <motion.article whileHover={{ rotate: k % 2 ? -1.5 : 1.5, scale: 1.03 }} className="nb overflow-hidden bg-white">
              <div className={`flex h-40 items-center justify-center border-b-4 border-ink ${c.c}`}>
                <motion.span aria-hidden="true" className="text-7xl" animate={{ x: [-10, 10, -10] }} transition={{ duration: 2.4 + k * 0.3, repeat: Infinity, ease: "easeInOut" }}>{c.e}</motion.span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl leading-tight">{c.name}</h3>
                <p className="mt-1 text-lg">{c.tag}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

/* 7. Why cars (interactive tabs) */
export function CarLove() {
  const [a, setA] = useState(0);
  const cols = ["bg-pink", "bg-sky", "bg-butter", "bg-lilac"];
  return (
    <Sec id="why-cars" bg="bg-peach">
      <Title sticker="🛞">Why cars?</Title>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {carLove.map((x, k) => (
          <button key={x.k} onClick={() => setA(k)} aria-pressed={a === k} className={`nb-btn ${a === k ? cols[k] : "bg-white"}`}>{x.e} {x.k}</button>
        ))}
      </div>
      <div className={`nb mt-8 min-h-[11rem] p-6 sm:p-10 ${cols[a]}`}>
        <AnimatePresence mode="wait">
          <motion.p key={a} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }} className="font-display text-2xl leading-snug sm:text-4xl">
            {carLove[a].t}
          </motion.p>
        </AnimatePresence>
      </div>
    </Sec>
  );
}

/* 8. Qualities */
export function Qualities() {
  return (
    <Sec id="heart" bg="bg-pink">
      <Title sticker="💖" color="bg-mint">A rare heart</Title>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {qualities.map((q, k) => (
          <Reveal key={q.t} v="up" d={k * 0.1}>
            <motion.div whileHover={{ rotate: [0, -3, 3, 0] }} className={`nb h-full p-6 ${q.c}`}>
              <div className="text-5xl">{q.e}</div>
              <h3 className="mt-3 font-display text-2xl">{q.t}</h3>
              <p className="mt-2 text-lg">{q.d}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Sec>
  );
}

/* 9. Journey (a real sequence, so numbered) */
export function Journey() {
  const cols = ["bg-pink", "bg-butter", "bg-mint", "bg-lilac"];
  return (
    <Sec id="journey" bg="bg-sky">
      <Title sticker="🛣️" color="bg-butter">The journey</Title>
      <ol className="relative ml-5 border-l-4 border-ink sm:ml-8">
        {journey.map((j, k) => (
          <Reveal key={j.t} v="left" d={0.05}>
            <li className="relative mb-8 pl-8 last:mb-0 sm:pl-12">
              <span className={`nb-sm absolute -left-[1.6rem] top-2 flex h-12 w-12 items-center justify-center font-display text-xl ${cols[k]}`}>{k + 1}</span>
              <div className="nb nb-hover bg-white p-5 sm:p-6">
                <h3 className="font-display text-2xl sm:text-3xl">{j.t}</h3>
                <p className="mt-1 text-lg">{j.d}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Sec>
  );
}

/* 10. Skills */
export function Skills() {
  return (
    <Sec id="strengths" bg="bg-butter">
      <Title sticker="💪" color="bg-lilac">Super strengths</Title>
      <div className="nb space-y-6 bg-white p-6 sm:p-10">
        {skills.map((s) => (
          <div key={s.n}>
            <div className="mb-2 flex justify-between text-lg font-bold"><span>{s.n}</span><span>{s.v}%</span></div>
            <div className="nb-sm h-8 overflow-hidden bg-paper">
              <motion.div className={`h-full border-r-4 border-ink ${s.c}`} initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} />
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* 11. Quotes (auto carousel) */
export function Quotes() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % quotes.length), 3800);
    return () => clearInterval(t);
  }, []);
  const cols = ["bg-pink", "bg-mint", "bg-butter", "bg-sky"];
  return (
    <Sec id="mindset" bg="bg-lilac">
      <Title sticker="💬" color="bg-butter">Mindset</Title>
      <div className={`nb flex min-h-[15rem] items-center justify-center p-6 text-center sm:p-12 ${cols[i]}`} aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.p key={i} initial={{ opacity: 0, scale: 0.9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.35 }} className="font-display text-3xl leading-tight sm:text-5xl">
            “{quotes[i]}”
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {quotes.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Quote ${k + 1}`} className={`nb-sm h-6 w-6 ${k === i ? "bg-ink" : "bg-white"}`} />
        ))}
      </div>
    </Sec>
  );
}

/* 12. Goals (tap to check) */
export function Goals() {
  const [done, setDone] = useState([]);
  const toggle = (k) => setDone((d) => (d.includes(k) ? d.filter((x) => x !== k) : [...d, k]));
  const pct = Math.round((done.length / goals.length) * 100);
  return (
    <Sec id="goals" bg="bg-mint">
      <Title sticker="🎯" color="bg-pink">The road ahead</Title>
      <div className="nb bg-white p-6 sm:p-10">
        <div className="nb-sm mb-6 h-8 overflow-hidden bg-paper">
          <motion.div className="h-full border-r-4 border-ink bg-pink" animate={{ width: `${pct}%` }} transition={{ type: "spring", stiffness: 80 }} />
        </div>
        <ul className="space-y-4">
          {goals.map((g, k) => {
            const on = done.includes(k);
            return (
              <li key={g}>
                <button onClick={() => toggle(k)} aria-pressed={on} className={`nb-sm flex w-full items-center gap-4 p-4 text-left text-lg font-bold transition ${on ? "bg-butter" : "bg-paper"}`}>
                  <span className="nb-sm flex h-8 w-8 shrink-0 items-center justify-center bg-white">{on ? "✔" : ""}</span>
                  <span className={on ? "line-through" : ""}>{g}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <AnimatePresence>
          {pct === 100 && (
            <motion.p initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: -2 }} exit={{ scale: 0 }} className="nb mt-6 bg-lilac p-4 text-center font-display text-2xl sm:text-4xl">
              👑 Empire unlocked!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </Sec>
  );
}

/* 13. Flip cards */
function Flip({ q, a, c }) {
  const [f, setF] = useState(false);
  const hide = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };
  return (
    <button onClick={() => setF(!f)} aria-label={`${q} Tap to flip`} className="h-56 w-full [perspective:1000px]">
      <motion.div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }} animate={{ rotateY: f ? 180 : 0 }} transition={{ type: "spring", stiffness: 90, damping: 14 }}>
        <div className={`nb absolute inset-0 flex items-center justify-center p-4 font-display text-2xl ${c}`} style={hide}>{q}</div>
        <div className="nb absolute inset-0 flex items-center justify-center bg-white p-4 text-xl font-bold" style={{ ...hide, transform: "rotateY(180deg)" }}>{a}</div>
      </motion.div>
    </button>
  );
}
export function Facts() {
  return (
    <Sec id="facts" bg="bg-peach">
      <Title sticker="🃏" color="bg-mint">Tap to flip</Title>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f, k) => (
          <Reveal key={f.q} v="pop" d={k * 0.1}><Flip {...f} /></Reveal>
        ))}
      </div>
    </Sec>
  );
}

/* 14. Letter */
export function Letter() {
  return (
    <Sec id="letter" bg="bg-pink">
      <Title sticker="💌" color="bg-butter">A note from your best friend</Title>
      <Reveal v="up">
        <div className="nb relative mx-auto max-w-3xl -rotate-1 bg-paper p-6 sm:p-12">
          <span aria-hidden="true" className="nb-sm absolute -top-4 left-8 rotate-[-6deg] bg-butter px-6 py-1">&nbsp;</span>
          <span aria-hidden="true" className="nb-sm absolute -top-4 right-8 rotate-[6deg] bg-mint px-6 py-1">&nbsp;</span>
          {letter.map((p, k) => (
            <p key={k} className={`text-lg leading-relaxed sm:text-2xl ${k ? "mt-5" : "font-display text-3xl"}`}>{p}</p>
          ))}
          <p className="mt-8 font-display text-2xl">Your best friend ❤️</p>
        </div>
      </Reveal>
    </Sec>
  );
}

/* 15. Contact + footer */
export function Contact() {
  return (
    <Sec id="contact" bg="bg-sky" className="pb-8 md:pb-10">
      <Reveal v="pop">
        <h2 className="font-display text-5xl leading-none sm:text-7xl md:text-8xl">Let’s build something big.</h2>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-4">
        {socials.map((s, k) => (
          <motion.a key={s.n} href={s.href} className={`nb-btn ${s.c}`} animate={{ y: [0, -6, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: k * 0.25 }}>{s.n}</motion.a>
        ))}
      </div>
      <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t-4 border-ink pt-6 font-bold sm:flex-row">
        <span>© {new Date().getFullYear()} Nairien Jahan Era</span>
        <span>Made with 💖 by your best friend</span>
      </div>
    </Sec>
  );
}
