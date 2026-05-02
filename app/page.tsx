"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/fundo1.jpg", "/fundo2.jpg"];

const winRanking = [
  { pos: "01", name: "Marlon", wins: 8, record: "8V - 1D", note: "Atual Rei da Norte" },
  { pos: "02", name: "Salles", wins: 6, record: "6V - 2D", note: "Desafiante do cinturão" },
  { pos: "03", name: "Roma", wins: 5, record: "5V - 2D", note: "Referência no x2" },
  { pos: "04", name: "Macedo", wins: 4, record: "4V - 3D", note: "Jogo agressivo" },
  { pos: "05", name: "Victor", wins: 3, record: "3V - 3D", note: "Busca o top 3" },
];

const kingRanking = [
  { pos: "01", name: "Marlon", points: "1V", status: "1 jogo" },
  { pos: "02", name: "Salles", points: "1V", status: "1 jogo" },
  { pos: "03", name: "Galinha", points: "0V", status: "2 jogos / 2 derrotas" },
];

const fights = [
  {
    category: "X1",
    title: "Macedo x Victor",
    prize: "Premiação de 2K",
    left: { name: "Macedo", image: "/confrontos/macedo.png" },
    right: { name: "Victor", image: "/confrontos/vitin.png" },
    badge: "Abertura da noite",
  },
  {
    category: "X2",
    title: "Roma x Aposentados",
    prize: "Premiação de 2K",
    left: { name: "Roma", image: "/confrontos/roma.png" },
    right: { name: "Aposentados", image: "/confrontos/aposentados.png" },
    badge: "Duelo de experiência",
  },
  {
    category: "X1",
    title: "Marlon x Salles",
    prize: "Premiação de 4K",
    left: { name: "Marlon", image: "/confrontos/marlon.png" },
    right: { name: "Salles", image: "/confrontos/salles.png" },
    badge: "Rei da Norte",
    featured: true,
  },
];

const duelCardTitles = ["Victor x Macedo", "Aposentados x Roma", "Salles x Marlon"];

const reiDaNorteRanking = [
  { pos: "Top 1", name: "Marlon", games: "1 jogo", record: "1 vitoria", image: "/confrontos/marlin3x4.png", champion: true },
  { pos: "Top 2", name: "Salles", games: "1 jogo", record: "1 vitoria", image: "/confrontos/salles3x4.png" },
  { pos: "Top 3", name: "Galinha", games: "2 jogos", record: "2 derrotas", image: "/confrontos/gala3x4.png" },
];

const partners = [
  { name: "Betim X1", image: "/patrocinadores/betimx1.png", href: "https://www.instagram.com/betimx1/" },
  { name: "DevLeão", image: "/patrocinadores/Devleaooo.png", href: "https://devleaoagencia.netlify.app/" },
  { name: "Clone", image: "/patrocinadores/clone.png" },
  { name: "Crosfut", image: "/patrocinadores/crosfut.png" },
  { name: "Ervas e Cia", image: "/patrocinadores/ervasecia.png" },
  { name: "Espaço LL", image: "/patrocinadores/espaçoll.png" },
  { name: "Gas Mauro", image: "/patrocinadores/gasmauro.png" },
  { name: "Provernet", image: "/patrocinadores/provernet.png" },
];

export default function X1DaNorteSite() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#D9A404] selection:text-black">
      <section className="relative isolate min-h-screen overflow-hidden border-b border-white/10">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 scale-105 transition-[opacity,transform] duration-[1800ms] ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,.45), rgba(10,10,10,.82), rgba(10,10,10,.98)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: current === index ? "scale(1)" : "scale(1.045)",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,4,.18),transparent_28%),linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px] opacity-40" />

        <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div>
            <Image
              src="/logo.png"
              alt="Logo X1 da Norte"
              width={240}
              height={192}
              priority
              className="h-32 w-auto object-contain md:h-40 lg:h-48"
            />
          </div>

          <nav className="absolute right-0 top-0 hidden gap-8 pt-6 text-sm font-medium text-white/70 md:flex lg:pt-8">
            <a href="#evento" className="transition hover:text-white">Evento</a>
            <a href="#rei" className="transition hover:text-white">Rei da Norte</a>
            <a href="#proximo-evento" className="transition hover:text-white">Confrontos</a>
          </nav>
        </header>

        <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-7xl items-start px-6 pb-12 pt-3 lg:px-8 lg:pb-16 lg:pt-5">
          <div className="grid w-full gap-10 lg:grid-cols-1">
            <div className="max-w-[620px]">
              <div>
                <h2 className="-mt-8 max-w-4xl text-[18vw] font-black uppercase italic leading-[0.9] tracking-tight sm:text-[14vw] md:text-[10vw] lg:-mt-16 lg:text-[7rem]">
                  X1 da <br /> <span className="text-[#D9A404]">Norte</span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/74 md:text-lg">
                  Os confrontos mais pesados, os atletas mais falados e a atmosfera que transforma cada duelo em prova de respeito. Aqui, quem entra precisa sustentar o nome dentro da quadra.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#proximo-evento"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D9A404] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
                  >
                    Próximo evento <span aria-hidden="true">›</span>
                  </a>
                  <a
                    href="#evento"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                  >
                    Liga X1 da Norte <span aria-hidden="true">›</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#050505] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-3 md:p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D9A404]/15 bg-black">
              <video
                className="h-[140px] w-full object-cover md:h-[180px] lg:h-[220px]"
                src="/anuncios.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      <section id="evento" className="relative isolate overflow-hidden border-b border-white/8 bg-[#080808] py-28">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-52"
          src="/fundo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.72)_46%,rgba(0,0,0,.86)),radial-gradient(circle_at_72%_30%,rgba(217,164,4,.22),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">A liga</p>
            <h3 className="mt-4 max-w-2xl text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl">
              O palco onde o nome <span className="text-[#D9A404]">vira alvo</span>.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 md:text-lg">
              Confrontos com chamada oficial, rivalidade real e ranking valendo moral. Na Norte, cada jogo mexe na fila do cinturão.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur">
              {[
                ["03", "duelos"],
                ["04K", "main event"],
                ["01", "cinturão"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
                  <p className="text-3xl font-black italic text-[#D9A404]">{value}</p>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <p className="hidden">
              O X1 da Norte organiza confrontos diretos com identidade de várzea, entrega de atleta grande e estrutura de evento. Cada duelo vale mais do que placar: vale nome, moral e posição no ranking.
            </p>
            <p className="hidden">
              A disputa principal gira em torno do cinturão Rei da Norte. Quem domina a noite vira referência; quem desafia precisa provar dentro da quadra.
            </p>
            <div className="grid gap-4">
              {[
                ["Formato", "X1 e X2 com premiação, chamada oficial e confronto montado para gerar jogo grande."],
                ["Ranking", "Vitória pesa, derrota cobra. Cada duelo muda a fila e aumenta a pressão do próximo card."],
                ["Cinturão", "O Rei da Norte carrega o posto máximo até a próxima defesa. Quem desafia precisa provar na quadra."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur transition hover:border-[#D9A404]/35 hover:bg-black/60"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[#D9A404]" />
                  <div className="grid gap-4 sm:grid-cols-[72px_1fr] sm:items-center">
                    <p className="text-5xl font-black italic text-white/10 transition group-hover:text-[#D9A404]/22">0{index + 1}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9A404]">{title}</p>
                      <p className="mt-3 text-sm leading-6 text-white/68 md:text-base">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rei" className="border-b border-white/8 bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">Atual campeão</p>
              <h3 className="mt-3 text-5xl font-black uppercase italic leading-[0.88] tracking-tight md:text-7xl">
                Rei da <span className="text-[#D9A404]">Norte</span>
              </h3>
            </div>
            <p className="max-w-2xl text-white/65 md:text-lg">
              Marlon chega como dono do cinturão e lidera o ranking atual do Rei da Norte.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[.92fr_1.08fr]">
            <div className="relative min-h-[620px] overflow-hidden rounded-2xl border border-[#D9A404]/35 bg-[linear-gradient(145deg,rgba(217,164,4,.18),rgba(17,17,17,.96)_45%,rgba(0,0,0,.98))] shadow-[0_30px_90px_rgba(0,0,0,.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(245,215,110,.25),transparent_32%),linear-gradient(to_bottom,transparent,rgba(0,0,0,.78))]" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#F5D76E]/80 to-transparent" />
              <p className="absolute left-6 top-6 z-10 rounded-full border border-[#D9A404]/35 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#F5D76E]">
                Campeao atual
              </p>
              <Image
                src="/rei-da-norte.jpg"
                alt="Marlon, atual Rei da Norte"
                width={900}
                height={1200}
                priority
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
              />
              <Image
                src="/confrontos/cinturão.png"
                alt="Cinturão Rei da Norte"
                width={360}
                height={260}
                className="absolute right-4 top-16 z-10 w-28 rotate-6 object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,.65)] sm:right-8 sm:w-40"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/72 to-transparent p-6 pt-28 md:p-8 md:pt-32">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5D76E]">Dono do cinturão</p>
                <h4 className="mt-3 text-6xl font-black uppercase italic leading-none md:text-8xl">Marlon</h4>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/75">1 jogo</span>
                  <span className="rounded-full border border-[#D9A404]/30 bg-[#D9A404] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black">1 vitoria</span>
                </div>
                <p className="mt-4 max-w-xl text-white/72 md:text-lg">
                  Campeão atual, referência da liga e alvo principal de quem quer sentar no trono da Norte.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-[0_30px_90px_rgba(0,0,0,.35)]">
              <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(217,164,4,.14),transparent)] p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9A404]">Ranking atual</p>
                <h4 className="mt-3 text-4xl font-black uppercase italic tracking-tight md:text-5xl">Rei da Norte</h4>
              </div>

              <div className="grid gap-3 p-4 md:p-5">
                {reiDaNorteRanking.map((row) => (
                  <div
                    key={row.pos}
                    className={`relative min-h-[124px] overflow-hidden rounded-xl border ${
                      row.champion
                        ? "border-[#D9A404]/50 bg-[linear-gradient(135deg,rgba(217,164,4,.9),rgba(150,102,0,.88))] text-black shadow-[0_18px_45px_rgba(217,164,4,.18)]"
                        : "border-white/10 bg-[#171717] text-white"
                    }`}
                  >
                    <div className="relative z-10 grid min-h-[124px] grid-cols-[72px_88px_minmax(0,1fr)_auto] items-center gap-4 px-5">
                      <p className={`text-sm font-black uppercase tracking-[0.18em] ${row.champion ? "text-black/65" : "text-[#D9A404]"}`}>
                        {row.pos}
                      </p>
                      <div className="relative -mb-px flex h-[124px] w-[88px] self-end overflow-hidden">
                        <Image
                          src={row.image}
                          alt={row.name}
                          width={160}
                          height={220}
                          className="h-full w-full object-cover object-top drop-shadow-[0_12px_16px_rgba(0,0,0,.35)]"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-3xl font-black uppercase italic leading-none md:text-4xl">{row.name}</p>
                        <p className={`mt-2 text-sm font-semibold uppercase tracking-[0.16em] ${row.champion ? "text-black/62" : "text-white/42"}`}>
                          {row.games} / {row.record}
                        </p>
                      </div>
                      {row.champion ? (
                        <Image
                          src="/confrontos/cinturão.png"
                          alt="Cinturao"
                          width={110}
                          height={80}
                          className="w-20 rotate-6 object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,.32)]"
                        />
                      ) : (
                        <span className="text-4xl font-black italic text-white/12">{row.pos.replace("Top ", "#")}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden">
              <div className="rounded-xl border border-white/10 bg-[#131313] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">Status</p>
                <h4 className="mt-3 text-3xl font-black uppercase italic tracking-tight">Cinturão ativo</h4>
                <p className="mt-3 text-white/66">
                  O posto está em jogo no confronto Marlon x Salles. Vitória mantém a coroa; derrota inaugura um novo reinado.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[#131313] p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/40">Campanha</p>
                  <p className="mt-3 text-5xl font-black italic text-[#D9A404]">8V</p>
                  <p className="mt-2 text-sm text-white/60">Líder em vitórias no ranking.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#131313] p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/40">Próxima defesa</p>
                  <p className="mt-3 text-5xl font-black italic text-[#D9A404]">16/05</p>
                  <p className="mt-2 text-sm text-white/60">Noite valendo 4K.</p>
                </div>
              </div>

              <div className="rounded-xl border border-[#D9A404]/20 bg-[linear-gradient(180deg,rgba(217,164,4,.12),rgba(217,164,4,.04))] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5D76E]">Confronto principal</p>
                <h4 className="mt-3 text-3xl font-black uppercase italic tracking-tight">Marlon x Salles</h4>
                <p className="mt-3 text-white/72">
                  Rei da Norte, premiação de 4K e o duelo que decide quem sai carregando o cinturão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ranking" className="hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">Classificação oficial</p>
              <h3 className="mt-3 text-5xl font-black uppercase italic leading-none tracking-tight md:text-7xl">
                Rankings da <span className="text-[#D9A404]">liga</span>
              </h3>
            </div>
            <p className="max-w-2xl text-white/65 md:text-lg">
              Duas leituras para acompanhar a temporada: quem mais venceu no X1 e quem está mais perto do posto de Rei da Norte.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <RankingTable title="Mais vitórias no X1" subtitle="Ranking por quantidade de vitórias" rows={winRanking} mode="wins" />
            <RankingTable title="Rank do Rei da Norte" subtitle="Pontuação pela corrida do cinturão" rows={kingRanking} mode="points" />
          </div>
        </div>
      </section>

      <section id="proximo-evento" className="relative overflow-hidden border-b border-white/8 bg-[#070707] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(217,164,4,.13),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(178,28,28,.16),transparent_28%),linear-gradient(to_bottom,transparent,rgba(0,0,0,.72))]" />
        <div className="absolute inset-0 opacity-[.13] bg-[linear-gradient(to_right,rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.7)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">Próximo evento</p>
              <h3 className="mt-4 text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl">
                16 de <span className="text-[#D9A404]">maio</span>
              </h3>
            </div>
            <p className="max-w-3xl text-white/72 md:text-lg">
              A próxima edição já chega com três duelos confirmados, duas premiações de 2K e a luta principal valendo o cinturão Rei da Norte.
            </p>
          </div>

          <div className="grid gap-7">
            {fights.map((fight, index) => (
              <article
                key={fight.title}
                className={`fight-card group relative overflow-hidden rounded-[1.75rem] border p-2 shadow-[0_32px_80px_rgba(0,0,0,.44)] transition duration-500 hover:-translate-y-1 md:p-3 ${
                  fight.featured
                    ? "border-[#D9A404]/55 bg-[linear-gradient(135deg,rgba(217,164,4,.18),rgba(13,13,13,.98)_42%,rgba(111,16,16,.28))]"
                    : "border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,.07),rgba(13,13,13,.98)_46%,rgba(111,16,16,.14))]"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(255,255,255,.10),transparent_24%),linear-gradient(90deg,rgba(217,164,4,.1),transparent_30%,transparent_70%,rgba(178,28,28,.12))]" />
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#F5D76E]/80 to-transparent" />
                <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-[#D9A404]/10 blur-3xl" />
                <div className="absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-red-700/12 blur-3xl" />
                <div className="fight-card-shine absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="relative z-10 overflow-hidden rounded-[1.35rem] bg-black">
                  <Image
                    src={`/confrontos/duelo${index + 1}.png`}
                    alt={`Card oficial ${duelCardTitles[index]}`}
                    width={1440}
                    height={640}
                    sizes="(min-width: 1280px) 1216px, calc(100vw - 48px)"
                    className="duel-card-image h-auto w-full object-cover transition duration-700 group-hover:scale-[1.012]"
                    priority={fight.featured}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/10" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden bg-[#080808] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(217,164,4,.18),transparent_28%),linear-gradient(135deg,rgba(217,164,4,.08),transparent_34%,rgba(120,12,12,.16))]" />
        <div className="fire-particles pointer-events-none absolute inset-0" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#D9A404]/20 bg-black shadow-[0_34px_90px_rgba(0,0,0,.48)]">
            <div className="grid lg:grid-cols-[1fr_auto]">
              <div className="p-7 md:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">Entre no radar</p>
                <h3 className="mt-4 max-w-4xl text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl">
                  Quer teu nome no <span className="text-[#D9A404]">próximo card</span>?
                </h3>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                  Faz um vídeo, posta no Instagram marcando <span className="font-black text-white">@x1_danorte</span> e desafia o jogador que você quer enfrentar.
                </p>
              </div>

              <div className="flex flex-col justify-end gap-4 border-t border-white/10 bg-white/[.04] p-7 md:p-10 lg:min-w-[360px] lg:border-l lg:border-t-0">
                <a
                  href="https://www.instagram.com/x1_danorte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#D9A404] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03]"
                >
                  Marcar no Instagram
                </a>
                <a
                  href="https://wa.me/5531987373781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-black/40 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#D9A404]/50 hover:text-[#D9A404]"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato-old" className="hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(217,164,4,.18),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(160,18,18,.18),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.07),rgba(10,10,10,.96)_42%,rgba(217,164,4,.08))] shadow-[0_34px_90px_rgba(0,0,0,.42)] lg:grid-cols-[1fr_.72fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">Entre no radar</p>
              <h3 className="mt-4 max-w-3xl text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl">
                Quer teu nome no <span className="text-[#D9A404]">próximo card</span>?
              </h3>
              <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
                Manda teu material, mostra tua campanha e entra na conversa dos próximos desafios da liga.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5531987373781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#D9A404] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03]"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/x1_danorte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#D9A404]/40 hover:bg-white/10 hover:text-[#D9A404]"
                >
                  Ver Instagram
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-black/35 p-7 md:p-10 lg:border-l lg:border-t-0">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/38">Envie seu material</p>
              <div className="mt-6 grid gap-4">
                {["Nome e posição", "Vídeos jogando", "Campanha atual"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.04] p-4">
                    <span className="text-2xl font-black italic text-[#D9A404]">0{index + 1}</span>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,164,4,.14),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D9A404]">Entre no radar</p>
          <h3 className="mt-4 text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl">
            Quer teu nome no <span className="text-[#D9A404]">card</span>?
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-white/70 md:text-lg">
            Manda teu material, mostra tua campanha e entra na fila dos próximos desafios da liga.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D9A404] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03]"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Ver Instagram
            </a>
          </div>
        </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black py-9">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/80">Parceiros</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14">
              {partners.map((partner) => {
                const logo = (
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={170}
                    height={90}
                    className="max-h-12 w-auto object-contain opacity-45 grayscale transition hover:opacity-90 hover:grayscale-0"
                  />
                );

                return partner.href ? (
                  <a key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" aria-label={partner.name}>
                    {logo}
                  </a>
                ) : (
                  <div key={partner.name}>{logo}</div>
                );
              })}
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(217,164,4,.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.04),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.8fr_auto] lg:items-start">
            <div>
              <Image src="/logo.png" alt="Logo X1 da Norte" width={150} height={120} className="h-24 w-auto object-contain" />
              <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                X1 da Norte é duelo, cinturão e chamada pesada. Quem quer respeito precisa provar dentro da quadra.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D9A404]">Mapa</p>
              <div className="mt-5 grid gap-3">
                <a href="#evento" className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62 transition hover:text-[#D9A404]">A liga</a>
                <a href="#rei" className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62 transition hover:text-[#D9A404]">Rei da Norte</a>
                <a href="#proximo-evento" className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62 transition hover:text-[#D9A404]">Confrontos</a>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D9A404]">Contato</p>
              <div className="mt-5 flex items-center gap-3">
                <a href="https://www.instagram.com/x1_danorte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-icon-button">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
                </a>
                <a href="mailto:leandrofls16@gmail.com" aria-label="Email" className="footer-icon-button">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
                </a>
                <a href="https://wa.me/5531987373781" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-icon-button footer-icon-button-gold">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19.5 6.2 16A8 8 0 1 1 9 18.2Z" /><path d="M9.2 8.8c.2-.5.4-.6.7-.6h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2.1.4-.1.6l-.4.5c.7 1.2 1.6 2.1 2.9 2.8l.5-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.6v.5c0 .3-.1.5-.5.7-.5.2-1.1.4-1.8.3-3.4-.4-6.2-3.1-6.7-6.5-.1-.7.1-1.4.3-1.9Z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/36 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 X1 da Norte. Todos os direitos reservados.</p>
            <p>Desenvolvido por <a href="https://devleaoagencia.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#D9A404] transition hover:text-white">DevLeão</a></p>
          </div>
        </div>
      </footer>

      <footer className="hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(217,164,4,.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.04),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:items-start">
            <div>
              <Image
                src="/logo.png"
                alt="Logo X1 da Norte"
                width={150}
                height={120}
                className="h-24 w-auto object-contain"
              />
              <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                X1 da Norte é duelo, cinturão e chamada pesada. Quem quer respeito precisa provar dentro da quadra.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D9A404]">Mapa</p>
              <div className="mt-5 grid gap-3">
                <a href="#evento" className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62 transition hover:text-[#D9A404]">A liga</a>
                <a href="#rei" className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62 transition hover:text-[#D9A404]">Rei da Norte</a>
                <a href="#proximo-evento" className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62 transition hover:text-[#D9A404]">Confrontos</a>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D9A404]">Contato</p>
              <div className="mt-5 grid gap-3">
                <a
                  href="https://www.instagram.com/x1_danorte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#D9A404]/40 hover:text-[#D9A404]"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/5531987373781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#D9A404]/35 bg-[#D9A404] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:scale-[1.02]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/36 sm:flex-row sm:items-center sm:justify-between">
            <p>X1 da Norte</p>
            <p>@x1_danorte</p>
          </div>
        </div>
      </footer>

      <footer className="hidden">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A404]">X1 da Norte</p>
            <p className="mt-3 max-w-xl text-sm text-white/50">Confrontos, cinturão e nomes que precisam provar dentro da quadra.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#evento" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-[#D9A404]/30 hover:text-[#D9A404]">A liga</a>
            <a href="#proximo-evento" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-[#D9A404]/30 hover:text-[#D9A404]">Confrontos</a>
            <a href="https://www.instagram.com/x1_danorte/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-[#D9A404]/30 hover:text-[#D9A404]">Instagram</a>
            <a href="https://wa.me/5531987373781" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D9A404]/35 bg-[#D9A404] px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:scale-[1.03]">WhatsApp</a>
          </div>
        </div>
        <div className="hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A404]">X1 da Norte</p>
            <p className="mt-3 text-sm text-white/50">Duelo, ranking e cinturão em jogo.</p>
          </div>

          <div className="flex items-center gap-3">
            {["Instagram", "YouTube", "WhatsApp"].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:border-[#D9A404]/30 hover:text-[#D9A404]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        </div>
      </footer>
    </main>
  );
}

type RankingRow =
  | { pos: string; name: string; wins: number; record: string; note: string }
  | { pos: string; name: string; points: string; status: string };

function RankingTable({
  title,
  subtitle,
  rows,
  mode,
}: {
  title: string;
  subtitle: string;
  rows: RankingRow[];
  mode: "wins" | "points";
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#131313]">
      <div className="border-b border-white/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9A404]">{subtitle}</p>
        <h4 className="mt-3 text-3xl font-black uppercase italic tracking-tight">{title}</h4>
      </div>
      <div className="divide-y divide-white/8">
        {rows.map((row) => (
          <div key={row.pos} className="grid grid-cols-[64px_1fr_auto] items-center gap-4 p-5 transition hover:bg-white/[0.03]">
            <p className="text-2xl font-black italic text-[#D9A404]">{row.pos}</p>
            <div>
              <p className="text-lg font-black uppercase italic">{row.name}</p>
              <p className="mt-1 text-sm text-white/50">{"note" in row ? row.note : row.status}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-white">{mode === "wins" && "wins" in row ? `${row.wins}V` : "points" in row ? row.points : ""}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">{"record" in row ? row.record : "ranking"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
