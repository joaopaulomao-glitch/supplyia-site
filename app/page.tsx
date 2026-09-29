const whatsapp =
  "https://wa.me/5592974008668?text=Ol%C3%A1%2C%20Jo%C3%A3o.%20Tenho%20um%20processo%20manual%20na%20opera%C3%A7%C3%A3o%20e%20quero%20avaliar%20se%20ele%20serve%20para%20o%20piloto%20da%20SupplyIA.";

const whatsappAjuda =
  "https://wa.me/5592974008668?text=Ol%C3%A1%2C%20Jo%C3%A3o.%20Quero%20avaliar%20o%20piloto%2C%20mas%20ainda%20n%C3%A3o%20sei%20qual%20processo%20da%20opera%C3%A7%C3%A3o%20escolher.%20Minha%20%C3%A1rea%20%C3%A9%20%5B%C3%A1rea%5D%20e%20a%20tarefa%20que%20mais%20consome%20tempo%20hoje%20%C3%A9%20%5Btarefa%5D.";

const agenda = "https://calendar.app.google/QSsQ383ENYs2tF9F9";

const levels = [
  { n: "01", name: "Redação", action: "Pede um texto", example: "E-mail de cobrança de fornecedor", surface: "Claude no chat", gain: "minutos" },
  { n: "02", name: "Leitura", action: "Entrega documentos", example: "Comparativo de três propostas", surface: "Claude no chat, com anexos", gain: "horas/semana" },
  { n: "03", name: "Análise", action: "Entrega a base da empresa", example: "Capital parado em itens sem giro, em reais", surface: "Claude com planilhas e arquivos", gain: "dias/mês" },
  { n: "04", name: "Delegação", action: "Pede o processo", example: "Alerta de ruptura toda segunda-feira", surface: "Claude Code", gain: "recorrente" },
];

const applications = [
  ["Estoque", "Decidir", "Capital parado em itens sem giro", "Listar os itens sem saída, somar o valor parado e separar o que liquidar, devolver ou manter.", "Ganho em R$"],
  ["Transporte", "Decidir", "Frete cobrado fora da tabela", "Confrontar CT-e e tabela contratada, somar a diferença por transportadora e montar a contestação.", "Ganho em R$"],
  ["Compras", "Negociar", "Preparar a negociação com o fornecedor", "Cruzar histórico de preço, prazo e atraso e levar para a reunião os pontos com número.", "Ganho em R$"],
  ["Estoque e Compras", "Antecipar", "Risco de ruptura", "Cruzar cobertura, lead time e pedidos em aberto e listar os itens que podem parar a linha nas próximas semanas.", "Ganho em horas e R$"],
  ["PCP", "Comunicar", "Plano contra realizado", "Apontar os desvios da semana e preparar a explicação para a reunião de segunda.", "Ganho em horas"],
  ["Importação", "Processar", "Conferência de documentos", "Cruzar pedido, invoice, packing list e recebido antes do desembaraço.", "Ganho em horas"],
];

const timeline = [
  ["D−10", "Diagnóstico", "Gestor escolhe três dores, um processo e alinha o checklist com TI."],
  ["Encontro 1", "Ler e transformar", "A equipe pratica com documentos e dados reais mascarados."],
  ["Intervalo", "Aplicar na rotina", "As duplas testam um processo e registram cada trava."],
  ["Encontro 2", "Delegar e conferir", "A turma automatiza, valida e trabalha no processo da casa."],
  ["D+5", "Medir e decidir", "Gestor recebe o relatório com horas estimadas, o valor em reais da decisão trabalhada e o plano de continuidade."],
  ["D+30", "Medir de novo", "Nova medição com a rotina em uso na operação."],
];

export default function Home() {
  return (
    <main>
      <div className="topline" />
      <header className="nav shell">
        <a href="#top" className="brand" aria-label="SupplyIA, início">
          <img src="/supplyia-logo.svg" alt="SupplyIA" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#niveis">4 níveis</a><a href="#aplicacoes">Aplicações</a><a href="#metodo">Método</a><a href="#governanca">Governança</a><a href="/catalogo">Catálogo</a>
        </nav>
        <a className="button small" href={whatsapp}>Avaliar um processo</a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">TREINAMENTO IN-COMPANY · NA OPERAÇÃO</p>
          <h1>Em dois encontros, sua equipe transforma uma tarefa manual em um processo que consegue repetir.</h1>
          <p className="lead">O piloto usa <strong>arquivos reais da sua operação</strong>. A equipe aprende a analisar o dado, conferir o resultado e medir quanto tempo e quanto dinheiro aquele processo consumia antes.</p>
          <div className="actions"><a className="button" href={whatsapp}>Quero avaliar meu processo <span>→</span></a><a className="text-link" href="#niveis">Ver como os 4 níveis funcionam ↓</a></div>
          <p className="micro">Conversa inicial de 30 minutos. Se o processo não couber no piloto, você sabe antes de receber uma proposta.</p>
        </div>
        <div className="hero-panel" aria-label="Resumo do treinamento">
          <div className="panel-label">FORMATO DO PILOTO</div>
          <div className="metric"><b>02</b><span>encontros presenciais<br/>de 4 horas</span></div>
          <div className="metric"><b>6 a 12</b><span>participantes, podendo<br/>juntar áreas</span></div>
          <div className="metric"><b>01</b><span>processo real<br/>da empresa</span></div>
          <div className="panel-foot"><span className="pulse" /> medição assinada pelo gestor</div>
        </div>
      </section>

      <section className="thesis border-section">
        <div className="shell split">
          <div><p className="eyebrow">O PROBLEMA</p><h2>A equipe já testou IA. Na segunda-feira, o trabalho manual continuou igual.</h2></div>
          <div className="thesis-copy"><p>Isso acontece porque pedir uma resposta e mudar um processo são trabalhos diferentes. A resposta ajuda uma vez. O processo bem definido pode ser conferido e repetido toda semana.</p><p className="rule">O ganho aparece quando a tarefa deixa de depender de alguém refazer os mesmos passos.</p></div>
        </div>
      </section>

      <section className="section shell" id="niveis">
        <p className="eyebrow">A TESE DOS 4 NÍVEIS</p>
        <div className="section-head"><h2>Descubra onde o resultado para.</h2><p>Os quatro níveis mostram o que a equipe já faz e qual é o próximo salto. A classificação é por tarefa. Uma mesma empresa pode estar no N1 em Compras e no N3 em Estoque.</p></div>
        <div className="levels">
          {levels.map((l) => <article className="level" key={l.n}><div className="level-top"><span>N{l.n}</span><em>{l.gain}</em></div><h3>{l.name}</h3><p className="action">{l.action}</p><p>{l.example}</p><div className="surface">{l.surface}</div></article>)}
        </div>
        <div className="level-note"><b>O ponto de virada está entre N2 e N3.</b> A equipe para de pedir resposta e passa a entregar a base da empresa. O que volta é uma conta que o gestor consegue conferir: quanto está parado, quanto custa e o que resolver primeiro.</div>
      </section>

      <section className="section applications" id="aplicacoes">
        <div className="shell">
          <p className="eyebrow">APLICAÇÃO REAL</p>
          <div className="section-head"><h2>Em qual destas tarefas sua operação perde mais: horas ou dinheiro?</h2><p>Na conversa de diagnóstico, o gestor escolhe três tarefas. A que mais consome tempo vira o processo central do piloto. Uma com valor em reais vira o exercício de decisão da turma.</p></div>
          <div className="app-grid">{applications.map(([area,kind,title,text,gain],i)=><article className="app-card" key={title}><span>{String(i+1).padStart(2,"0")} · {area} · {kind}</span><h3>{title}</h3><p>{text}</p><p className="gain">{gain}</p></article>)}</div>
          <p className="disclaimer">O ganho depende do volume, da qualidade do dado e das regras da operação. Horas e reais saem dos números da sua empresa. Não usamos média de mercado para justificar o investimento.</p>
          <p className="cat-more"><a className="text-link" href="/catalogo">Ver as 30 aplicações por área →</a></p>
        </div>
      </section>

      <section className="section shell" id="metodo">
        <p className="eyebrow">MÉTODO</p>
        <div className="section-head"><h2>A turma trabalha no processo antes de falar sobre teoria.</h2><p>Cada bloco produz uma saída que o gestor consegue verificar. A equipe também aprende o que fazer quando o resultado vem errado.</p></div>
        <div className="timeline">{timeline.map(([when,title,text])=><article key={when}><div className="dot"/><span>{when}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section governance" id="governanca">
        <div className="shell split">
          <div><p className="eyebrow">GOVERNANÇA</p><h2>Antes de abrir um arquivo, a TI define o que pode sair e quem pode acessar.</h2><p className="muted">O treinamento segue a regra da empresa. Se a política ainda não existe, o piloto registra as decisões pendentes para TI e jurídico. A SupplyIA não promete conformidade por conta própria.</p></div>
          <div className="guardrails">
            <div><b>01</b><span><strong>Acesso controlado</strong>Claude só vê o que for anexado ou explicitamente autorizado. Não entra sozinho no ERP.</span></div>
            <div><b>02</b><span><strong>Dado autorizado</strong>Arquivos reais entram mascarados, com a estrutura preservada e os valores sensíveis removidos.</span></div>
            <div><b>03</b><span><strong>Conferência obrigatória</strong>Amostra de linhas, batimento com fonte independente e teste de caso-limite.</span></div>
            <div><b>04</b><span><strong>Decisão humana</strong>A máquina prepara; o responsável valida e assina a decisão.</span></div>
          </div>
        </div>
      </section>

      <section className="section shell instructor">
        <div className="portrait"><img src="/joao-paulo.jpg" alt="João Paulo Costa, fundador da SupplyIA" /></div>
        <div><p className="eyebrow">QUEM CONDUZ</p><h2>Quando alguém diz &quot;na nossa operação é diferente&quot;, a conversa começa de verdade.</h2><p className="lead-small">João Paulo Costa trabalha há mais de 20 anos com WMS, TMS, PCP, Compras e Importação. Hoje lidera operações no Polo Industrial de Manaus e constrói sistemas de apoio com IA.</p><div className="facts"><span><b>20+</b> anos em operação</span><span>WMS · TMS · PCP</span><span>Compras · Importação</span><span>.NET · IA aplicada</span></div><p className="muted">João Paulo Costa, gerente de Operações e fundador da SupplyIA. O curso é independente e não possui vínculo oficial com a Anthropic.</p></div>
      </section>

      <section className="section offer" id="piloto">
        <div className="shell offer-grid">
          <div><p className="eyebrow">PILOTO FUNDADOR</p><h2>Antes de ampliar a iniciativa, prove valor em um processo.</h2><p>O piloto reúne de 6 a 12 pessoas que executam, conferem e respondem pelos processos escolhidos. A turma pode juntar Compras, PCP e Logística. Ao final, o gestor sabe o que a equipe conseguiu repetir, quais travas apareceram e se existe motivo para avançar.</p><div className="price"><small>investimento do piloto fundador</small><strong>R$ 4.900</strong><span>por turma de 6 a 12 participantes · turmas seguintes: R$ 7.500</span></div><div className="terms"><p><b>Três turmas fundadoras até a parada de dezembro</b>, de terça a quinta, das 13h às 17h.</p><p><b>Condição fundadora:</b> a empresa autoriza publicar o caso e o gestor dá um depoimento, com termo próprio.</p><p><b>Pagamento:</b> 50% na assinatura e 50% na entrega do relatório da turma.</p></div></div>
          <div className="included"><h3>O que está incluído</h3><ul><li>Reunião de diagnóstico com o gestor</li><li>2 encontros presenciais de 4 horas</li><li>Turma de 6 a 12 pessoas, podendo juntar áreas</li><li>Exercícios adaptados aos arquivos da empresa</li><li>Material, checklist de conferência e certificado</li><li>Relatório da turma entregue em até 5 dias</li><li>Canal de dúvidas por 30 dias</li><li>Nova medição 30 dias depois do curso</li><li>Sessão extra de 2 horas sem custo se, no Encontro 2, a rotina não rodar com um arquivo novo</li></ul><div className="not-included"><b>Importante</b> Licenças do Claude não estão incluídas. O gestor participa dos marcos críticos, incluindo o exercício de decisão, sem precisar ocupar uma das vagas. A entrega de 3 arquivos mascarados até D−5 também é condição do piloto.</div><a className="button wide" href={whatsapp}>Avaliar se o piloto serve para a minha equipe →</a></div>
        </div>
      </section>

      <section className="section shell faq">
        <p className="eyebrow">PARA QUEM PRECISA APROVAR</p><h2>As perguntas que aparecem antes do &quot;sim&quot;.</h2>
        <div className="faq-grid">
          <details open><summary>O que o gestor consegue apresentar depois?</summary><p>A primeira versão do processo escolhido, os critérios usados para conferir o resultado, as horas mensais estimadas, o valor em reais da decisão trabalhada e as travas que precisam de decisão.</p></details>
          <details><summary>Como RH comprova aprendizagem?</summary><p>Por pontos de controle observáveis: pedido completo, dado tratado e conferido, e rotina que repete com nova entrada. Há certificado de 8 horas por participante.</p></details>
          <details><summary>A TI precisa liberar acesso ao ERP?</summary><p>Não. O piloto pode operar com exportações autorizadas e mascaradas. Integração com ERP é projeto separado, não promessa do treinamento.</p></details>
          <details><summary>Como funciona o pagamento?</summary><p>50% na assinatura e 50% na entrega do relatório da turma, em até 5 dias depois do Encontro 2. As licenças do Claude são contratadas pela empresa, à parte.</p></details>
          <details><summary>E se a rotina não funcionar?</summary><p>Se no Encontro 2 a rotina não rodar com um arquivo novo, fazemos uma sessão extra de 2 horas sem custo para fechar o processo.</p></details>
          <details><summary>Precisa saber programar?</summary><p>Não. A equipe aprende a descrever entrada, transformação, saída e critério de aceite. O objetivo é operar e conferir a rotina, não formar programadores.</p></details>
        </div>
      </section>

      <section className="final-cta"><div className="shell"><p className="eyebrow">DIAGNÓSTICO ANTES DA PROPOSTA</p><h2>Traga a tarefa que sempre volta para a fila.<br/>Em 30 minutos, João avalia se ela cabe no piloto.</h2><div className="actions center"><a className="button" href={whatsapp}>Quero avaliar meu processo →</a><a className="text-link" href={whatsappAjuda}>Não sei qual processo escolher</a></div><p className="micro agenda">Prefere escolher o horário? <a href={agenda} target="_blank" rel="noopener">Marque 30 min direto na agenda</a>, de terça a quinta.</p><p className="micro">Sem apresentação comercial pronta. Primeiro entendemos o arquivo, a regra e o resultado que o gestor espera.</p></div></section>

      <footer className="shell"><img src="/supplyia-logo.svg" alt="SupplyIA"/><p>Logística que aprende.</p><span>© 2026 SupplyIA · Manaus, AM</span></footer>
    </main>
  );
}
