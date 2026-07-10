"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const NEXT_EVENT_ANNOUNCED = false;

const reiDaNorteRanking = [
  { pos: "01", name: "Vitinho", games: "1 jogo", record: "1 vitoria", image: "/confrontos/vitin.png", champion: true },
  { pos: "02", name: "Marlon", games: "1 jogo", record: "1 vitoria", image: "/confrontos/marlon.png" },
  { pos: "03", name: "Salles", games: "1 jogo", record: "1 vitoria", image: "/confrontos/salles3x4.png" },
];

const fights = [
  {
    title: "Macedo x Victor",
    left: { name: "Macedo", image: "/confrontos/macedo.png" },
    right: { name: "Victor", image: "/confrontos/vitin.png" },
    featured: false,
  },
  {
    title: "Roma x Aposentados",
    left: { name: "Roma", image: "/confrontos/roma.png" },
    right: { name: "Aposentados", image: "/confrontos/aposentados.png" },
    featured: false,
  },
  {
    title: "Marlon x Salles",
    left: { name: "Marlon", image: "/confrontos/marlon.png" },
    right: { name: "Salles", image: "/confrontos/salles.png" },
    featured: true,
  },
];

const duelCardTitles = ["Victor x Macedo", "Aposentados x Roma", "Salles x Marlon"];

const instagramVideos: string[] = [
  "https://www.instagram.com/p/Dad-p7jxs1d/",
  "https://www.instagram.com/p/DaRCO_iRVZ2/",
  "https://www.instagram.com/p/DaOn8l2RYPS/",
  "https://www.instagram.com/p/DaKtfIORXMW/",
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
  useEffect(() => {
    const instgrm = (window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm;
    instgrm?.Embeds.process();
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] pb-[92px] font-[family-name:var(--font-tag)] text-[#F5F5F5] selection:bg-[#D9A404] selection:text-black md:pb-[118px]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b-4 border-[#D9A404] bg-black">
        <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Image
            src="/logo.png"
            alt="Logo X1 da Norte"
            width={200}
            height={160}
            priority
            className="h-20 w-auto object-contain md:h-24"
          />
          <nav className="hidden gap-8 text-xs font-bold uppercase tracking-[0.28em] text-white/60 md:flex">
            <a href="#evento" className="transition hover:text-[#D9A404]">A Liga</a>
            <a href="#rei" className="transition hover:text-[#D9A404]">Rei da Norte</a>
            <a href="#rainha" className="transition hover:text-[#D9A404]">Rainha da Norte</a>
            <a href="#videos" className="transition hover:text-[#D9A404]">Vídeos</a>
            <a href="#contato" className="transition hover:text-[#D9A404]">Contato</a>
          </nav>
        </header>

        <div className="relative grid lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-20 flex flex-col justify-center px-6 pb-14 pt-4 lg:px-16 lg:pb-24 lg:pt-10">
            <p className="skew-tag mb-6 inline-flex w-fit items-center bg-[#D9A404] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black">
              Liga oficial de X1
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[13vw] leading-[0.92] tracking-tight text-white sm:text-[9vw] lg:text-[4rem]">
              Aonde os <span className="gradient-text">brabos</span> se <span className="gradient-text">encontram</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
              Os confrontos mais pesados, os atletas mais falados e a atmosfera que transforma cada duelo em prova de respeito. Quem entra precisa sustentar o nome dentro da quadra.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#rei" className="skew-tag bg-[#D9A404] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white">
                Rei da Norte
              </a>
              <a href="#evento" className="skew-tag border-2 border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#D9A404] hover:text-[#D9A404]">
                A Liga
              </a>
            </div>
          </div>

          <div className="hero-clip relative z-10 min-h-[340px] lg:min-h-[560px]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.1), rgba(0,0,0,.55)), url(/fundo2.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "95% 22%",
              }}
            />
          </div>
        </div>

        <div className="relative z-20 border-t border-white/10 bg-[#0A0A0A]">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-6 lg:px-8">
            {[
              ["03", "DUELOS"],
              ["04K", "MAIN EVENT"],
              ["01", "CINTURÃO"],
            ].map(([value, label]) => (
              <div key={label} className="px-4 py-5 text-center">
                <p className="font-[family-name:var(--font-display)] text-4xl text-[#D9A404] md:text-5xl">{value}</p>
                <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A LIGA */}
      <section id="evento" className="relative overflow-hidden bg-[#0e0e0e] py-24">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-15 grayscale"
          src="/fundo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 bg-[#D9A404] pulse-dot" />
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">A liga</p>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-6xl leading-[0.85] text-white md:text-8xl">
            O PALCO ONDE O NOME <span className="text-[#D9A404]">VIRA ALVO</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            Confrontos com chamada oficial, rivalidade real e ranking valendo moral. Na Norte, cada jogo mexe na fila do cinturão.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden bg-white/10 md:grid-cols-3">
            {[
              ["01", "Formato", "X1 e X2 com premiação, chamada oficial e confronto montado para gerar jogo grande."],
              ["02", "Ranking", "Vitória pesa, derrota cobra. Cada duelo muda a fila e aumenta a pressão do próximo card."],
              ["03", "Cinturão", "O Rei da Norte carrega o posto máximo até a próxima defesa. Quem desafia precisa provar na quadra."],
            ].map(([num, title, text], index) => (
              <Reveal key={title} delay={index * 120}>
                <div className="group bg-[#0e0e0e] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-black">
                  <p className="font-[family-name:var(--font-display)] text-3xl text-white/15 transition group-hover:text-[#D9A404]">{num}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D9A404]">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REI DA NORTE */}
      <section id="rei" className="border-t border-white/10 bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-4">
              <span className="h-3 w-3 bg-[#D9A404] pulse-dot" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">Atual campeão</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-6xl leading-[0.85] text-white md:text-8xl">
                  REI DA <span className="text-[#D9A404]">NORTE</span>
                </h2>
              </div>
            </div>
            <p className="max-w-md text-white/55">Vitinho chega como dono do cinturão e lidera o ranking atual do Rei da Norte.</p>
          </div>

          <Reveal>
          <div className="grid gap-px overflow-hidden bg-white/10 lg:grid-cols-[.95fr_1.05fr]">
            <div className="champion-frame">
            <div className="relative min-h-[560px] overflow-hidden bg-[#0e0e0e]">
              <p className="absolute left-0 top-0 z-10 bg-[#D9A404] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black">
                Campeão atual
              </p>
              <Image
                src="/confrontos/reidanorte.jpeg"
                alt="Vitinho, atual Rei da Norte"
                width={900}
                height={1200}
                priority
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <Image
                src="/confrontos/cinturão.png"
                alt="Cinturão Rei da Norte"
                width={360}
                height={260}
                className="absolute right-6 top-16 z-10 w-28 rotate-6 object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,.65)] sm:w-40"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Dono do cinturão</p>
                <h3 className="font-[family-name:var(--font-display)] text-7xl leading-none text-white md:text-8xl">Vitinho</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">1 jogo</span>
                  <span className="bg-[#D9A404] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">1 vitoria</span>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-[#0e0e0e]">
              <div className="border-b border-white/10 px-7 py-6 md:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9A404]">Ranking atual</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-white md:text-5xl">Rei da Norte</h3>
              </div>

              <div className="divide-y divide-white/10">
                {reiDaNorteRanking.map((row) => (
                  <div
                    key={row.pos}
                    className={`relative grid min-h-[124px] grid-cols-[64px_88px_minmax(0,1fr)_auto] items-center gap-4 px-6 transition-colors duration-300 ${
                      row.champion ? "bg-[#D9A404] text-black" : "text-white hover:bg-white/5"
                    }`}
                  >
                    <p className={`font-[family-name:var(--font-display)] text-3xl ${row.champion ? "text-black/55" : "text-white/25"}`}>
                      {row.pos}
                    </p>
                    <div className="relative h-[104px] w-[88px] self-end overflow-hidden">
                      <Image
                        src={row.image}
                        alt={row.name}
                        width={160}
                        height={220}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-[family-name:var(--font-display)] text-3xl leading-none md:text-4xl">{row.name}</p>
                      <p className={`mt-2 text-xs font-bold uppercase tracking-[0.2em] ${row.champion ? "text-black/65" : "text-white/40"}`}>
                        {row.games} / {row.record}
                      </p>
                    </div>
                    {row.champion ? (
                      <Image
                        src="/confrontos/cinturão.png"
                        alt="Cinturao"
                        width={110}
                        height={80}
                        className="w-16 rotate-6 object-contain"
                      />
                    ) : (
                      <span className="font-[family-name:var(--font-display)] text-3xl text-white/15">#{row.pos}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* RAINHA DA NORTE */}
      <section id="rainha" className="border-t border-white/10 bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-4">
            <span className="h-3 w-3 bg-[#D9A404] pulse-dot" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">Atual campeã</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-6xl leading-[0.85] text-white md:text-8xl">
                RAINHA DA <span className="text-[#D9A404]">NORTE</span>
              </h2>
            </div>
          </div>

          <Reveal>
          <div className="grid gap-px overflow-hidden bg-white/10 lg:grid-cols-[.95fr_1.05fr]">
            <div className="champion-frame">
            <div className="relative min-h-[420px] overflow-hidden bg-[#0e0e0e] md:min-h-[560px]">
              <p className="absolute left-0 top-0 z-10 bg-[#D9A404] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black">
                Rainha atual
              </p>
              <Image
                src="/rafarainha.jpeg"
                alt="Rafaela, atual Rainha da Norte"
                width={1200}
                height={1600}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Dona do título</p>
                <h3 className="font-[family-name:var(--font-display)] text-7xl leading-none text-white md:text-8xl">Rafaela</h3>
              </div>
            </div>
            </div>

            <div className="flex flex-col justify-center bg-[#0e0e0e] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9A404]">A conquista</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-white md:text-5xl">
                Rafaela, Rainha da Norte
              </h3>
              <p className="mt-5 max-w-md text-base leading-7 text-white/60">
                Em uma noite mágica na Arena Águia Dourada, Rafaela leva o cinturão na partida contra Maiza e vence pelo placar de 4x1. O reinado começa — quem vai ser a próxima a desafiar?
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* VÍDEOS DO INSTAGRAM */}
      <section id="videos" className="border-t border-white/10 bg-[#0e0e0e] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 bg-[#D9A404] pulse-dot" />
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">Direto do Instagram</p>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-6xl leading-[0.85] text-white md:text-8xl">
            MOMENTOS DA <span className="text-[#D9A404]">NORTE</span>
          </h2>

          {instagramVideos.length > 0 ? (
            <>
              <HorizontalScroller>
                {instagramVideos.map((url, index) => (
                  <div key={url} className="shrink-0 snap-start" style={{ width: "min(85vw, 360px)" }}>
                    <Reveal delay={index * 100}>
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={url}
                        data-instgrm-version="14"
                        style={{ background: "#000", border: 0, margin: 0, width: "100%" }}
                      />
                    </Reveal>
                  </div>
                ))}
              </HorizontalScroller>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/30">Use as setas ou arraste para o lado para ver mais →</p>
            </>
          ) : (
            <p className="mt-12 max-w-xl text-white/40">
              Em breve: vídeos direto do nosso Instagram aparecem aqui.
            </p>
          )}
        </div>
      </section>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={() => {
        (window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm?.Embeds.process();
      }} />

      {NEXT_EVENT_ANNOUNCED && (
        <section id="proximo-evento" className="border-t border-white/10 bg-[#0e0e0e] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-6xl text-white md:text-8xl">
              PRÓXIMO <span className="text-[#D9A404]">EVENTO</span>
            </h2>
            <div className="mt-10 grid gap-6">
              {fights.map((fight, index) => (
                <article key={fight.title} className="overflow-hidden bg-black">
                  <Image
                    src={`/confrontos/duelo${index + 1}.png`}
                    alt={`Card oficial ${duelCardTitles[index]}`}
                    width={1440}
                    height={640}
                    className="h-auto w-full object-cover"
                    priority={fight.featured}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTATO */}
      <section id="contato" className="border-t border-white/10 bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
          <div className="grid overflow-hidden border-2 border-[#D9A404] lg:grid-cols-[1fr_auto]">
            <div className="p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#D9A404]">Entre no radar</p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-6xl leading-[0.85] text-white md:text-7xl">
                QUER TEU NOME NO <span className="text-[#D9A404]">PRÓXIMO CARD</span>?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                Faz um vídeo, posta no Instagram marcando <span className="font-bold text-white">@x1_danorte</span> e desafia o jogador que você quer enfrentar.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-4 border-t border-white/10 bg-white/[.03] p-8 md:p-10 lg:min-w-[340px] lg:border-l lg:border-t-0">
              <a
                href="https://www.instagram.com/x1_danorte/"
                target="_blank"
                rel="noopener noreferrer"
                className="skew-tag bg-[#D9A404] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white"
              >
                Marcar no Instagram
              </a>
              <a
                href="https://wa.me/5531987373781"
                target="_blank"
                rel="noopener noreferrer"
                className="skew-tag border-2 border-white/20 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#D9A404] hover:text-[#D9A404]"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="border-t border-white/10 bg-[#0e0e0e] py-10">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Patrocinadores oficiais</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14">
            {partners.map((partner) => {
              const logo = (
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={170}
                  height={90}
                  className="max-h-12 w-auto object-contain opacity-40 grayscale transition hover:opacity-90 hover:grayscale-0"
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.8fr_auto] lg:items-start">
            <div>
              <Image src="/logo.png" alt="Logo X1 da Norte" width={140} height={112} className="h-20 w-auto object-contain" />
              <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                X1 da Norte é duelo, cinturão e chamada pesada. Quem quer respeito precisa provar dentro da quadra.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9A404]">Mapa</p>
              <div className="mt-5 grid gap-3">
                <a href="#evento" className="text-sm font-bold uppercase tracking-[0.16em] text-white/55 transition hover:text-[#D9A404]">A liga</a>
                <a href="#rei" className="text-sm font-bold uppercase tracking-[0.16em] text-white/55 transition hover:text-[#D9A404]">Rei da Norte</a>
                <a href="#rainha" className="text-sm font-bold uppercase tracking-[0.16em] text-white/55 transition hover:text-[#D9A404]">Rainha da Norte</a>
                <a href="#contato" className="text-sm font-bold uppercase tracking-[0.16em] text-white/55 transition hover:text-[#D9A404]">Contato</a>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9A404]">Contato</p>
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

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 X1 da Norte. Todos os direitos reservados.</p>
            <p>Desenvolvido por <a href="https://devleaoagencia.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#D9A404] transition hover:text-white">DevLeão</a></p>
          </div>
        </div>
      </footer>

      <StickyAdBar />
    </main>
  );
}

function HorizontalScroller({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    ref.current?.releasePointerCapture(e.pointerId);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.9, 380), behavior: "smooth" });
  };

  return (
    <div className="relative mt-12">
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(e) => {
          if (drag.current.moved) e.stopPropagation();
        }}
        className="no-scrollbar flex cursor-grab select-none gap-6 overflow-x-auto pb-4 active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Ver posts anteriores"
        className="footer-icon-button absolute left-1 top-1/2 hidden -translate-y-1/2 bg-black/80 md:flex"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Ver mais posts"
        className="footer-icon-button absolute right-1 top-1/2 hidden -translate-y-1/2 bg-black/80 md:flex"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
      </button>
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function StickyAdBar() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-[#D9A404] bg-black">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2 md:gap-4 md:px-6 md:py-3">
        <span className="hidden shrink-0 bg-[#D9A404] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-black sm:inline-flex">
          Patrocinado
        </span>

        <div className="relative flex-1 overflow-hidden border border-white/10 bg-[#0a0a0a]">
          <video
            className="block h-[56px] w-full object-contain md:hidden"
            src="/anuncios.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
          />
          <video
            className="hidden h-[76px] w-full object-contain md:block"
            src="/videoparapc.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
          />
        </div>

        <div className="hidden shrink-0 md:block">
          <button
            type="button"
            onClick={() => setMuted((prev) => !prev)}
            aria-label={muted ? "Ativar som do anúncio" : "Silenciar anúncio"}
            className="footer-icon-button h-11 w-11"
          >
            {muted ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="m16 9 4 4M20 9l-4 4" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16 8a4 4 0 0 1 0 8" /><path d="M18.5 5.5a8 8 0 0 1 0 13" /></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
