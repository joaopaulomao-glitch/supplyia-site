import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo: 30 aplicações de Claude em Supply Chain | SupplyIA",
  description:
    "As 30 tarefas de Compras, PCP, Logística, Importação e Estoque que o treinamento in-company trabalha, com as que mexem em dinheiro marcadas em R$.",
  alternates: { canonical: "/catalogo" },
  openGraph: {
    title: "Catálogo: 30 aplicações de Claude em Supply Chain | SupplyIA",
    description: "O que sua equipe passa a conseguir fazer, por área.",
    url: "/catalogo",
    images: [{ url: "/og-catalogo.jpg", width: 1200, height: 627, alt: "Catálogo SupplyIA: 30 aplicações de Claude em supply chain" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo: 30 aplicações de Claude em Supply Chain | SupplyIA",
    images: ["/og-catalogo.jpg"],
  },
};

const whatsapp =
  "https://wa.me/5592974008668?text=Ol%C3%A1%2C%20Jo%C3%A3o.%20Vi%20o%20cat%C3%A1logo%20de%20aplica%C3%A7%C3%B5es%20e%20quero%20avaliar%20um%20processo%20da%20minha%20opera%C3%A7%C3%A3o%20para%20o%20piloto.";

type Item = [titulo: string, nivel: "N1" | "N2" | "N3" | "N4", reais: boolean];

const areas: { nome: string; itens: Item[] }[] = [
  {
    nome: "Compras e Suprimentos",
    itens: [
      ["Comparar 3 a 5 propostas de fornecedor", "N2", true],
      ["Extrair PDFs de pedidos para planilha", "N3", false],
      ["Mapa de cotações recebidas por e-mail", "N3", false],
      ["Contrato novo contra o anterior", "N2", false],
      ["Pedidos em atraso e cobrança de cada um", "N4", true],
      ["Curva ABC com a justificativa de cada faixa", "N3", false],
      ["Preparar negociação de reajuste", "N2", true],
      ["E-mail de cobrança com o histórico do caso", "N1", false],
    ],
  },
  {
    nome: "PCP e Planejamento",
    itens: [
      ["Programa firme contra plano interno", "N3", false],
      ["Relatório de aderência ao plano", "N3", false],
      ["Motivo de cada desvio de programação", "N2", false],
      ["Simular atraso de insumo na linha", "N3", true],
      ["Resumo diário de produção para a diretoria", "N4", false],
    ],
  },
  {
    nome: "Logística e Transporte",
    itens: [
      ["Auditar fatura x CT-e x tabela contratada", "N4", true],
      ["Padronizar base suja de entregas", "N3", false],
      ["OTIF com cada falha explicada", "N3", false],
      ["Tracking de várias transportadoras consolidado", "N4", false],
      ["Carta de reclamação de avaria", "N2", true],
      ["Contestar frete fora da tabela com evidência", "N3", true],
    ],
  },
  {
    nome: "Importação e Comex",
    itens: [
      ["Invoice e packing list para conferência", "N3", false],
      ["Pedido x faturado x recebido", "N3", true],
      ["Situação de cada processo em aberto", "N2", false],
      ["Ler instrução normativa e listar o que muda", "N2", false],
      ["Planilha de custo de importação", "N3", false],
    ],
  },
  {
    nome: "Estoque e Gestão",
    itens: [
      ["Giro, cobertura e risco de ruptura", "N3", true],
      ["Divergência de inventário e lista de apuração", "N3", true],
      ["Ponto de pedido e estoque de segurança", "N3", true],
      ["Capital parado em itens sem giro", "N3", true],
      ["Pacote de indicadores do mês", "N4", false],
      ["Instrução de trabalho a partir do procedimento", "N1", false],
    ],
  },
];

const total = areas.reduce((s, a) => s + a.itens.length, 0);
const comReais = areas.reduce((s, a) => s + a.itens.filter((i) => i[2]).length, 0);

const niveis = [
  ["N1", "Redação", "pede um texto"],
  ["N2", "Leitura", "entrega documentos"],
  ["N3", "Análise", "entrega a base da empresa"],
  ["N4", "Delegação", "pede o processo"],
];

const formato = [
  ["8 horas", "em 2 encontros de 4h, com uma semana de aplicação entre eles"],
  ["Presencial", "na planta da empresa, terça a quinta, 13h às 17h"],
  ["Turma de 6 a 12 pessoas", "em duplas, turma mista entre áreas aceita"],
  ["Público", "analistas e assistentes de PCP, Compras, Logística, Importação, Expedição e Estoque"],
  ["Pré-requisito", "nenhum. Não exige saber programar nem ter usado IA"],
  ["Gestor presente", "em momentos definidos, e obrigatório na medição final"],
];

const recebe = [
  "Primeira versão do processo escolhido pelo gestor, rodando e conferida",
  "Recomendação de decisão em reais, com a conta aberta",
  "Projeto configurado que fica com a empresa depois do curso",
  "Biblioteca de pedidos da turma, no vocabulário da empresa",
  "Caderno de exercícios, guia da ferramenta, cartão dos 4 níveis, glossário, checklist de conferência e base de treino mascarada",
  "Relatório da turma em até 5 dias, com os pontos de controle atingidos",
  "Ficha de medição assinada pelo gestor, com horas e, quando houver, reais",
  "Certificado de 8 horas por participante, canal de dúvidas por 30 dias e trilha de 30 dias",
  "Medição D+30: o processo está rodando, quantas horas, quanto em reais, o que travou",
];

const naoInclui = [
  "Licenças do Claude, contratadas e administradas pela empresa",
  "Integração com ERP, sistema pronto e política de IA escrita pela SupplyIA",
  "Acompanhamento de 90 dias e deslocamento fora de Manaus",
  "Não é curso de programação nem treinamento oficial da Anthropic",
];

export default function Catalogo() {
  return (
    <main>
      <div className="topline" />
      <header className="nav shell">
        <a href="/" className="brand" aria-label="SupplyIA, início">
          <img src="/supplyia-logo.svg" alt="SupplyIA" />
        </a>
        <nav aria-label="Navegação do catálogo">
          <a href="/">Início</a><a href="#areas">Aplicações</a><a href="#formato">Formato</a><a href="#investimento">Investimento</a>
        </nav>
        <a className="button small" href={whatsapp}>Avaliar um processo</a>
      </header>

      <section className="shell cat-hero">
        <div>
          <p className="eyebrow">CATÁLOGO · {total} APLICAÇÕES</p>
          <h1>O que sua equipe passa a conseguir fazer.</h1>
          <p className="lead">
            Tarefas de Compras, PCP, Logística, Importação e Estoque que o curso trabalha com arquivos reais da empresa.
            O gestor escolhe três antes do primeiro encontro. As marcadas com <span className="rs">R$</span> mexem em dinheiro, não só em hora.
          </p>
          <div className="actions">
            <a className="button" href="/catalogo.pdf" download>Baixar em PDF (1 página) <span>↓</span></a>
            <a className="text-link" href={whatsapp}>Avaliar um processo no WhatsApp</a>
          </div>
        </div>
        <div className="hero-panel cat-panel" aria-label="Resumo do catálogo">
          <div className="panel-label">NO CATÁLOGO</div>
          <div className="metric"><b>{String(total).padStart(2, "0")}</b><span>aplicações<br />em 5 áreas</span></div>
          <div className="metric"><b>{String(comReais).padStart(2, "0")}</b><span>mexem em dinheiro<br />marcadas em R$</span></div>
          <div className="metric"><b>03</b><span>escolhidas pelo gestor<br />para o piloto</span></div>
        </div>
      </section>

      <section className="section applications" id="areas">
        <div className="shell">
          <div className="cat-legend" aria-label="Legenda dos níveis">
            {niveis.map(([n, nome, acao]) => (
              <span key={n}><b>{n}</b> {nome} · {acao}</span>
            ))}
            <a className="text-link" href="/#niveis">Como funcionam os 4 níveis</a>
          </div>
          <div className="cat-grid">
            {areas.map((a) => (
              <article className="app-card cat-area" key={a.nome}>
                <div className="cat-area-head"><h2>{a.nome}</h2><span>{a.itens.length}</span></div>
                <ul>
                  {a.itens.map(([t, n, r]) => (
                    <li key={t} className={r ? "is-rs" : undefined}>
                      <span className="cat-item">{t}</span>
                      <span className="cat-tags"><em>{n}</em>{r && <strong>R$</strong>}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="app-card cat-area cat-decisao">
              <p className="eyebrow">A DECISÃO EM REAIS</p>
              <h2>No exercício final, a dupla não pede o relatório: pede a decisão.</h2>
              <p>Opções, risco e o valor em reais, com a conta aberta, sobre a base de vocês. O critério de aprovação é o gestor dizer se levaria aquela recomendação à reunião.</p>
              <p>Não é economia garantida. É o dinheiro em jogo naquela decisão, com premissa que o gestor reconhece.</p>
            </article>
          </div>
          <p className="disclaimer">Os tempos de referência por aplicação são estimativas a validar, nunca promessa. O número que vale é o da sua equipe, medido antes e 30 dias depois.</p>
        </div>
      </section>

      <section className="section shell" id="formato">
        <p className="eyebrow">FORMATO E ENTREGAS</p>
        <div className="section-head"><h2>O que acontece na turma e o que fica com a empresa.</h2><p>Dois encontros de 4 horas na planta. A equipe trabalha sobre arquivos reais e mascarados, e o curso termina com o processo escolhido rodando e conferido.</p></div>
        <div className="cat-three">
          <div className="included">
            <h3>Formato</h3>
            <ul>{formato.map(([b, t]) => <li key={b}><b>{b}</b> {t}</li>)}</ul>
          </div>
          <div className="included">
            <h3>O que a empresa recebe</h3>
            <ul>{recebe.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="included cat-not">
            <h3>O que não está incluído</h3>
            <ul>{naoInclui.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section offer" id="investimento">
        <div className="shell">
          <p className="eyebrow">INVESTIMENTO</p>
          <div className="cat-prices">
            <div className="cat-price is-main">
              <small>Piloto fundador</small>
              <strong>R$ 4.900</strong>
              <p>Por turma. Três primeiras turmas ou até a parada de dezembro, o que vier primeiro. Em troca: depoimento do gestor e autorização de publicar a medição, no nível que a empresa escolher.</p>
            </div>
            <div className="cat-price">
              <small>Turmas seguintes</small>
              <strong>R$ 7.500</strong>
              <p>Por turma de 6 a 12 pessoas. Mesmo formato, mesmos entregáveis. Nada é cortado no piloto.</p>
            </div>
            <div className="cat-price">
              <small>Condições</small>
              <p><b>Pagamento:</b> 50% na assinatura e 50% na entrega do relatório da turma, em até 5 dias após o segundo encontro.</p>
              <p><b>Garantia:</b> se a rotina construída no curso não rodar com um arquivo novo da empresa, uma sessão extra de 2 horas sem custo.</p>
              <p><b>Antes da turma:</b> reunião de 45 min com o gestor em D−10, checklist de TI e três arquivos reais mascarados até D−5.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <p className="eyebrow">DIAGNÓSTICO ANTES DA PROPOSTA</p>
          <h2>Escolha a tarefa que mais pesa.<br />Em 30 minutos, João avalia se ela cabe no piloto.</h2>
          <div className="actions center">
            <a className="button" href={whatsapp}>Quero avaliar meu processo →</a>
            <a className="text-link" href="/catalogo.pdf" download>Baixar o catálogo em PDF</a>
          </div>
          <p className="micro">joao.paulo@supplyia.com.br · (92) 97400-8668 · linkedin.com/in/joao-supplyia</p>
        </div>
      </section>

      <footer className="shell">
        <img src="/supplyia-logo.svg" alt="SupplyIA" />
        <p>Logística que aprende.</p>
        <span>Curso independente, sem vínculo com a Anthropic. Nenhum número deste catálogo é resultado comprovado em cliente. © 2026 SupplyIA · Manaus, AM</span>
      </footer>
    </main>
  );
}
