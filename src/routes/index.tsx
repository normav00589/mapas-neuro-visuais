import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import produtoPrincipalMockup from "@/assets/bonus-mockup-01.png.asset.json";
import mapa01 from "@/assets/mapa-01.jpg";
import mapa02 from "@/assets/mapa-02.jpg";
import mapa03 from "@/assets/mapa-03.jpg";
import mapa04 from "@/assets/mapa-04.jpg";
import mapa05 from "@/assets/mapa-05.jpg";
import mapa06 from "@/assets/mapa-06.jpg";
import bonus01Mockup from "@/assets/bonus-mockup-neurotransmissores.png.asset.json";
import bonus02Mockup from "@/assets/bonus-mockup-02.png.asset.json";
import bonus03Mockup from "@/assets/bonus-mockup-03.png.asset.json";
import bonus04Mockup from "@/assets/bonus-mockup-04.png.asset.json";
import garantia from "@/assets/garantia-30.png";
import mapaBuspirona from "@/assets/buspirona_mapa_visual_da_ansiedade.webp.asset.json";
import mapaEscitalopram from "@/assets/escitalopram_mapa_visual_da_serotonina.webp.asset.json";
import mapaFluoxetina from "@/assets/fluoxetina_mapa_visual_da_sinapse.webp.asset.json";
import mapaCitalopram from "@/assets/mapa_neon_do_citalopram_e_serotonina.webp.asset.json";
import mapaBupropiona from "@/assets/mapa_visual_da_bupropiona_nos_neurônios.webp.asset.json";
import mapaCarbamazepina from "@/assets/mapa_visual_da_carbamazepina.webp.asset.json";
import mapaDopamina from "@/assets/mapa_visual_da_dopamina.webp.asset.json";
import mapaClonazepam from "@/assets/mapa_visual_do_clonazepam.webp.asset.json";
import mapaBloqueioAlfa1 from "@/assets/bloqueio_alfa_1_e_hipotensão_ortostática.webp.asset.json";
import mapaBloqueioD2 from "@/assets/bloqueio_d2_e_efeitos_extrapiramidais.webp.asset.json";
import depoimentoJoaoPedro from "@/assets/depoimento-joao-pedro.png.asset.json";
import depoimentoBianca from "@/assets/depoimento-bianca.png.asset.json";
import depoimentoAline from "@/assets/depoimento-aline.png.asset.json";
import depoimentoMariana from "@/assets/depoimento-mariana.png.asset.json";
import depoimentoJulia from "@/assets/depoimento-julia.png.asset.json";
import depoimentoBruno from "@/assets/depoimento-bruno.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Psicofármacos por Dentro | 60 Mapas Visuais de Psicofarmacologia" },
      {
        name: "description",
        content:
          "60 mapas visuais de psicofarmacologia para entender mecanismos de ação, receptores e neurotransmissores dos principais medicamentos. Acesso imediato por R$ 9,90.",
      },
      { property: "og:title", content: "Psicofármacos por Dentro | 60 Mapas Visuais" },
      {
        property: "og:description",
        content:
          "Entenda o que cada psicofármaco faz no cérebro com 60 mapas visuais de consulta rápida. Acesso imediato no celular, tablet ou computador.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#planos";
const CHECKOUT_BASICO = "https://pay.wiapy.com/8dHlBmQF5Lwg";
const CHECKOUT_PRO = "https://pay.wiapy.com/_qWyJetb7V6";
const heroProduto = produtoPrincipalMockup.url;

function Cta({ label = "QUERO MEUS 60 MAPAS VISUAIS", href = CTA_HREF }: { label?: string; href?: string }) {
  return (
    <a href={href} className="btn-cta" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {label}
    </a>
  );
}

function Marquee({ imgs, reverse = false }: { imgs: string[]; reverse?: boolean }) {
  const list = [...imgs, ...imgs];
  return (
    <div className="relative -mx-4 overflow-hidden py-1">
      <div
        className="marquee-track"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {list.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Exemplo de mapa visual de psicofarmacologia"
            loading="lazy"
            width={768}
            height={1024}
            className="h-56 w-auto shrink-0 rounded-xl border border-border object-cover shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}

function UrgencyBanner() {
  const [dateStr, setDateStr] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, "0");
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    setDateStr(`${dd}/${mm}`);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="urgency-banner">
        <span className="urgency-dot" />
        <p className="urgency-text">
          <span className="urgency-label">OFERTA RELÂMPAGO</span>
          {" — "}
          <strong>10% de desconto</strong> só hoje
          {dateStr ? ` · ${dateStr}` : ""}
        </p>
      </div>
    </div>
  );
}

const temas = [
  ["Receptores", "Como o remédio encaixa e o que acontece depois"],
  ["Agonismo × Antagonismo", "A diferença que muda todo o efeito"],
  ["Recaptação", "Por que bloquear o transportador aumenta o neurotransmissor"],
  ["Antidepressivos", "ISRS, IRSN, tricíclicos, IMAO e atípicos lado a lado"],
  ["Ansiolíticos e hipnóticos", "Benzodiazepínicos e o sistema GABAérgico"],
  ["Antipsicóticos", "Alvos principais e diferenças entre moléculas"],
  ["Estabilizadores do humor", "Lítio e os mecanismos que você sempre esquece"],
  ["Psicoestimulantes", "Dopamina e noradrenalina na prática visual"],
];

const beneficios = [
  ["🧠", "Entende de verdade", "Você vê a lógica em vez de decorar frases soltas"],
  ["⚡", "Consulta em segundos", "Abre o mapa, bate o olho e resolve a dúvida"],
  ["🔍", "Para de confundir", "Painéis “Não Confunda” separam o que parece igual"],
  ["📱", "Estuda em qualquer lugar", "Digital e também imprimível para o caderno"],
  ["🎯", "Revisão mais rápida", "Mecanismo, classe e alvo em uma só página"],
  ["💡", "Memória visual", "Imagem gruda muito mais que parágrafo"],
];

const idealPara = [
  ["📚", "Passar em provas", "Revisar farmacologia sem reler capítulos inteiros"],
  ["🩺", "Segurança no estágio", "Saber o que cada classe faz quando perguntarem"],
  ["🧩", "Organizar a cabeça", "Colocar nomes, classes e receptores no lugar certo"],
  ["⏱️", "Ganhar tempo", "Estudar em blocos curtos, com material direto ao ponto"],
  ["🔁", "Revisar sempre", "Ter uma referência para consultar o ano inteiro"],
  ["💬", "Explicar melhor", "Falar de mecanismo com clareza e sem enrolação"],
];

const confirmacao = [
  ["✅", "Fundamentos essenciais"],
  ["✅", "Antidepressivos"],
  ["✅", "Ansiolíticos e hipnóticos"],
  ["✅", "Antipsicóticos"],
  ["✅", "Estabilizadores do humor"],
  ["✅", "Psicoestimulantes"],
];

const bonusList = [
  [bonus01Mockup.url, "Guia Rápido de Neurotransmissores", "Serotonina, dopamina, noradrenalina, GABA e glutamato em consulta visual.", "R$ 37,00"],
  [bonus02Mockup.url, "Tabela Visual de Receptores e Alvos", "Uma visão prática de 5-HT, D2, H1, M1, GABA-A e outros alvos clínicos.", "R$ 29,00"],
  [bonus03Mockup.url, "Protocolos de Monitorização e Segurança", "QT, clozapina, lítio, interações e sinais de alerta para consulta rápida.", "R$ 27,00"],
  [bonus04Mockup.url, "Pôster Resumo dos Psicofármacos", "Uma visão geral das classes e alvos para deixar sempre à vista.", "R$ 24,00"],
];

const itensPrincipais = [
  "60 Mapas Visuais de Psicofarmacologia",
  "Fundamentos essenciais (receptores, recaptação, meia-vida)",
  "Antidepressivos: ISRS, IRSN, tricíclicos, IMAO e atípicos",
  "Ansiolíticos e hipnóticos (sistema GABAérgico)",
  "Antipsicóticos e seus principais alvos",
  "Estabilizadores do humor",
  "Psicoestimulantes",
  "Painéis “Não Confunda”",
  "Acesso ao material principal em formato digital",
];

const bonusBullets = [
  "Guia Visual dos Neurotransmissores",
  "Painéis de Comparação Rápida",
  "Revisão Expressa de Psicofarmacologia",
];

const passos = [
  ["Clique no botão", ["Escolha o plano ideal", "Vá para o checkout seguro"]],
  ["Faça o pagamento", ["Pix, cartão ou boleto", "Confirmação automática"]],
  ["Receba no e-mail", ["Link de acesso imediato", "Sem espera e sem burocracia"]],
  ["Baixe e estude", ["Abra no celular, tablet ou PC", "Imprima se preferir"]],
];

const faq = [
  ["Preciso já saber farmacologia para aproveitar?", "Não. Os mapas começam pelos fundamentos (receptor, recaptação, meia-vida) e vão avançando por classe, então dá pra acompanhar mesmo se você está começando."],
  ["Isso substitui os livros e as aulas?", "Não substitui. O material é uma referência visual de consulta e revisão que faz o conteúdo das aulas finalmente fazer sentido na sua cabeça."],
  ["Psicofarmacologia é complexa demais, vou continuar decorando?", "A proposta é justamente o contrário: quando você vê o caminho medicamento → alvo → receptor → neurotransmissor → efeito, a associação acontece sozinha e sobra muito menos coisa pra decorar."],
  ["É material físico ou digital?", "É 100% digital, com acesso imediato. Os mapas também são imprimíveis, caso você goste de estudar no papel."],
  ["Em quanto tempo recebo o acesso?", "Na hora. Assim que o pagamento é confirmado, o link chega no seu e-mail."],
  ["Funciona no celular?", "Sim, foi pensado para leitura no celular, e também abre normalmente em tablet e computador."],
  ["Serve pra qual curso?", "Psicologia, Medicina, Farmácia, Enfermagem e demais áreas da saúde, além de profissionais que revisam psicofarmacologia."],
  ["Qual a diferença entre os planos?", "O Plano Básico traz os 60 mapas. O Plano Completo traz os 60 mapas mais os bônus: Guia dos Neurotransmissores, Painéis de Comparação Rápida e Revisão Expressa."],
  ["O material ensina a prescrever ou ajustar medicação?", "Não. O conteúdo é educacional, voltado ao estudo e à consulta, e não orienta prescrição, escolha, início, suspensão ou ajuste individual de medicamentos."],
  ["E se eu não gostar?", "Você tem 30 dias de garantia. É só pedir o reembolso dentro do prazo e devolvemos o valor, sem burocracia."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <UrgencyBanner />
      <main className="mx-auto w-full max-w-lg px-4 pb-16 pt-12">
        {/* DOBRA 1 — PROMESSA */}
      <section className="pt-10 text-center">
        <p className="text-[0.68rem] font-semibold tracking-[0.35em] text-primary">
          PSICOFARMACOLOGIA VISUAL
        </p>
        <h1 className="mt-3 text-[2rem] leading-[1.08] font-bold uppercase">
          60 Mapas Visuais de Psicofármacos{" "}
          <span className="text-gradient">para entender o que os remédios fazem no cérebro</span>
        </h1>
        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[image:var(--gradient-neon)]" />
        <img
          src={heroProduto}
          alt="Mockup do material Psicofármacos por Dentro em tablet e cartões impressos"
          width={1024}
          height={1024}
          fetchPriority="high"
          className="mx-auto mt-4 w-full max-w-sm"
        />
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
          Em vez de páginas de texto, cada medicamento vira um caminho visual:{" "}
          <span className="text-foreground">
            remédio → alvo → receptor → neurotransmissor → efeito
          </span>
          . Você abre o mapa, olha e entende.
        </p>
        <div className="mt-6">
          <Cta />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          🔒 Acesso imediato no celular, tablet ou computador
        </p>
      </section>

      {/* DOBRA 2 — TEMAS */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold uppercase">
          O que você vai <span className="text-gradient">encontrar</span>
        </h2>
        <div className="mt-5 space-y-3">
          <Marquee imgs={[mapaBuspirona.url, mapaEscitalopram.url, mapaFluoxetina.url, mapaCitalopram.url, mapaBupropiona.url]} />
          <Marquee imgs={[mapaCarbamazepina.url, mapaDopamina.url, mapaClonazepam.url, mapaBloqueioAlfa1.url, mapaBloqueioD2.url]} reverse />
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Os 60 mapas cobrem do básico ao que mais cai em prova e mais confunde na prática:
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3">
          {temas.map(([t, d]) => (
            <div key={t} className="surface-card flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[image:var(--gradient-neon)]" />
              <div>
                <h3 className="text-base font-semibold">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Cta label="QUERO ESTUDAR ASSIM" />
        </div>
      </section>

      {/* DOBRA 3 — POR QUE É VALIOSO */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold uppercase">
          Por que isso <span className="text-gradient">vale tanto</span>
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {beneficios.map(([e, t, d]) => (
            <div key={t} className="surface-card">
              <span className="text-2xl">{e}</span>
              <h3 className="mt-2 text-sm font-semibold">{t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOBRA 4 — DOR */}
      <section className="mt-14">
        <div className="rounded-2xl bg-[image:var(--gradient-neon)] px-4 py-3 text-center">
          <p className="font-display text-lg font-bold uppercase text-[oklch(0.15_0.04_259)]">
            Você estuda, estuda… e continua misturando tudo
          </p>
        </div>
        <div className="surface-card mt-4 text-center shadow-[var(--shadow-neural)]">
          <h3 className="text-xl font-bold uppercase">
            O problema não é você. É o <span className="text-gradient">formato</span>.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Texto corrido e tabela cinza deixam tudo abstrato: você lê fluoxetina, sertralina,
            venlafaxina e bupropiona e, no dia seguinte, nada fica. Quando o mecanismo vira imagem,
            o cérebro guarda por associação — e a dúvida some em segundos de consulta.
          </p>
          <div className="mt-5">
            <Cta label="QUERO PARAR DE CONFUNDIR" />
          </div>
        </div>
      </section>

      {/* DOBRA 5 — DEPOIMENTOS */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold uppercase">
          Veja quem comprou e o que está <span className="text-gradient">achando</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Depoimentos reais de quem já está estudando com o material
        </p>
        <div className="mt-5 space-y-3">
          <div className="relative -mx-4 overflow-hidden py-1">
            <div className="marquee-track">
              {[depoimentoJoaoPedro.url, depoimentoBianca.url, depoimentoAline.url, depoimentoJoaoPedro.url, depoimentoBianca.url, depoimentoAline.url].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Depoimento de aluno do Psicofármacos por Dentro"
                  loading="lazy"
                  width={471}
                  height={836}
                  className="h-80 w-auto shrink-0 rounded-xl border border-border object-cover shadow-lg"
                />
              ))}
            </div>
          </div>
          <div className="relative -mx-4 overflow-hidden py-1">
            <div className="marquee-track" style={{ animationDirection: "reverse" }}>
              {[depoimentoMariana.url, depoimentoJulia.url, depoimentoBruno.url, depoimentoMariana.url, depoimentoJulia.url, depoimentoBruno.url].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Depoimento de aluno do Psicofármacos por Dentro"
                  loading="lazy"
                  width={471}
                  height={836}
                  className="h-80 w-auto shrink-0 rounded-xl border border-border object-cover shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 6 — IDEAL PARA VOCÊ */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold uppercase">
          Ideal para você que <span className="text-gradient">deseja</span>
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {idealPara.map(([e, t, d]) => (
            <div key={t} className="surface-card">
              <span className="text-2xl">{e}</span>
              <h3 className="mt-2 text-sm font-semibold">{t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOBRA 7 — TUDO QUE VOCÊ RECEBE */}
      <section className="mt-14">
        <div className="surface-card">
          <span className="inline-block rounded-full border border-primary px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-primary">
            ACESSO IMEDIATO
          </span>
          <img
            src={heroProduto}
            alt="Tudo que você recebe no Psicofármacos por Dentro"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto mt-3 w-64"
          />
          <h2 className="text-center text-xl font-bold uppercase">
            Tudo o que você vai <span className="text-gradient">receber</span>
          </h2>
          <ul className="mt-4 space-y-2">
            {itensPrincipais.map((i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-primary">✔</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4">
            {confirmacao.map(([e, t]) => (
              <p key={t} className="text-xs text-muted-foreground">
                {e} {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 8 — BÔNUS */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold uppercase">
          Bônus <span className="text-gradient">exclusivos</span>
        </h2>
        <p className="mt-3 text-center">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
            4 BÔNUS INCLUSOS NO PLANO COMPLETO
          </span>
        </p>
        <div className="mt-5 space-y-4">
          {bonusList.map(([img, titulo, desc, valor], i) => (
            <div key={titulo as string} className="surface-card text-center">
              <p className="text-sm tracking-[0.3em] text-primary">★★★★★</p>
              <img
                src={img as string}
                alt={titulo as string}
                loading="lazy"
                width={512}
                height={512}
                className="mx-auto mt-2 aspect-square w-full rounded-xl object-cover"
              />
              <span className="mt-3 inline-block rounded-full bg-[image:var(--gradient-neon)] px-3 py-1 text-[0.65rem] font-bold text-[oklch(0.15_0.04_259)]">
                BÔNUS {i + 1}
              </span>
              <h3 className="mt-2 text-base font-semibold">{titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              <p className="mt-2 text-sm">
                <span className="text-muted-foreground line-through">{valor}</span>{" "}
                <span className="font-display font-bold text-primary">GRÁTIS</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOBRA 9 — PLANOS */}
      <section id="planos" className="mt-14 scroll-mt-6">
        <h2 className="text-center text-2xl font-bold uppercase">
          Condição especial <span className="text-gradient">por tempo limitado</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Escolha a opção ideal para você
        </p>

        {/* BÁSICO */}
        <div className="surface-card mt-6">
          <h3 className="font-display text-xl font-bold uppercase">Plano Básico</h3>
          <p className="text-sm text-primary">Os 60 mapas visuais</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Para quem quer o material principal e começar a estudar hoje.
          </p>
          <ul className="mt-4 space-y-2">
            {itensPrincipais.map((i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-primary">✔</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground line-through">De R$ 39,90</p>
          <p className="font-display text-4xl font-bold">R$ 9,90</p>
          <p className="text-xs text-muted-foreground">Pagamento único • à vista</p>
          <div className="mt-4">
            <Cta label="QUERO O PLANO BÁSICO" href={CHECKOUT_BASICO} />
          </div>
        </div>

        {/* COMPLETO */}
        <div className="mt-6 rounded-2xl border-2 border-accent bg-card p-4 shadow-[var(--shadow-neural)]">
          <p className="text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold tracking-wider text-accent-foreground">
              MAIS VENDIDO
            </span>
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold uppercase">Plano Completo</h3>
          <p className="text-sm text-primary">60 mapas + todos os bônus</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Para quem quer entender, comparar e revisar tudo com o pacote inteiro.
          </p>
          <img
            src={heroProduto}
            alt="Plano completo do Psicofármacos por Dentro"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto my-3 w-52"
          />
          <ul className="space-y-2">
            {itensPrincipais.map((i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-primary">✔</span>
                <span>{i}</span>
              </li>
            ))}
            {bonusBullets.map((i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-accent">🎁</span>
                <span>{i}</span>
              </li>
            ))}
            <li className="flex gap-2 text-sm">
              <span className="text-accent">🎁</span>
              <span>Acesso ao material principal e aos bônus em formato digital</span>
            </li>
          </ul>
          <p className="mt-5 text-sm text-muted-foreground line-through">De R$ 79,90</p>
          <p className="font-display text-5xl font-bold text-gradient">R$ 19,90</p>
          <p className="text-xs text-muted-foreground">Pagamento único • à vista</p>
          <div className="mt-4">
            <Cta label="QUERO O PLANO COMPLETO" href={CHECKOUT_PRO} />
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Menos que um lanche por um material que você vai consultar o curso inteiro. São 60 mapas
          prontos para resolver dúvidas que hoje custam horas de leitura.
        </p>
      </section>

      {/* DOBRA 10 — GARANTIA */}
      <section className="mt-14 text-center">
        <img
          src={garantia}
          alt="Selo de garantia de 30 dias"
          loading="lazy"
          width={512}
          height={512}
          className="mx-auto w-40"
        />
        <h2 className="mt-2 text-2xl font-bold uppercase">
          Garantia de <span className="text-gradient">30 dias</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Baixe, use e estude sem medo. Se em até 30 dias você achar que o material não te ajudou,
          é só enviar uma mensagem e devolvemos 100% do valor. Sem formulário interminável, sem
          justificativa e sem burocracia.
        </p>
      </section>

      {/* DOBRA 11 — PASSO A PASSO */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold uppercase">
          Como funciona o <span className="text-gradient">acesso</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Do clique ao primeiro mapa aberto em menos de 5 minutos
        </p>
        <div className="mt-5 space-y-3">
          {passos.map(([titulo, itens], i) => (
            <div key={titulo as string} className="surface-card flex gap-3">
              <span className="font-display text-3xl font-bold text-primary">{i + 1}</span>
              <div>
                <h3 className="text-base font-semibold">{titulo as string}</h3>
                <ul className="mt-1 space-y-1">
                  {(itens as string[]).map((it) => (
                    <li key={it} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="text-primary">✔</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Cta label="QUERO ACESSO AGORA" />
        </div>
      </section>

      {/* DOBRA 12 — FAQ */}
      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold uppercase">
          Perguntas <span className="text-gradient">frequentes</span>
        </h2>
        <div className="mt-5 space-y-2">
          {faq.map(([p, r], i) => (
            <div key={p} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold"
                aria-expanded={open === i}
              >
                {p}
                <span className="text-primary">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className="animate-fade-in px-4 pb-4 text-sm text-muted-foreground">{r}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DOBRA 13 — RODAPÉ */}
      <footer className="mt-14 border-t border-border pt-6 text-center text-[0.7rem] leading-relaxed text-muted-foreground">
        <p>© {new Date().getFullYear()} Psicofármacos por Dentro. Todos os direitos reservados.</p>
        <p className="mt-2">
          Este site não é afiliado ao Facebook, Instagram, Google ou a qualquer uma dessas empresas.
          Após sair dessas plataformas, a responsabilidade pelo conteúdo é exclusivamente nossa.
        </p>
        <p className="mt-2">
          Todo o material é protegido por direitos autorais. A reprodução, revenda ou
          compartilhamento não autorizado é proibido e sujeito às penalidades da lei.
        </p>
        <p className="mt-2">
          Conteúdo educacional. Não orienta prescrição, escolha, início, suspensão ou ajuste
          individual de medicamentos.
        </p>
      </footer>
    </main>
    </>
  );
}
