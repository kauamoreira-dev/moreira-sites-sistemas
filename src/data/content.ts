import type { LucideIcon } from "lucide-react";
import {
  LayoutTemplate,
  Cog,
  ShoppingBag,
  LifeBuoy,
  Compass,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  ShieldCheck,
  Gauge,
  Wallet,
  UserCheck,
} from "lucide-react";

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Sites institucionais",
    description:
      "Presença digital que representa o padrão do seu negócio: rápida, clara e fácil de encontrar no Google.",
    items: ["Landing pages", "Sites institucionais", "Portfólios e páginas de serviço"],
  },
  {
    icon: Cog,
    title: "Sistemas sob medida",
    description:
      "Ferramentas construídas para o seu processo real, não o contrário: painéis, cadastros, fluxos de gestão.",
    items: ["Painéis administrativos", "Sistemas de reserva e pedidos", "Automação de rotinas"],
  },
  {
    icon: ShoppingBag,
    title: "Cardápio digital & e-commerce",
    description:
      "Catálogos e cardápios que atualizam em segundos e vendem sem fricção, no celular do cliente.",
    items: ["Cardápio digital", "Catálogo de produtos", "Loja online enxuta"],
  },
  {
    icon: LifeBuoy,
    title: "Manutenção & evolução",
    description:
      "Depois do lançamento, o site continua sendo cuidado: ajustes, novas páginas, melhorias de performance.",
    items: ["Suporte contínuo", "Novas funcionalidades", "Monitoramento de performance"],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, seu cliente e o que o site ou sistema precisa resolver de verdade antes de desenhar qualquer tela.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Interface pensada para o seu público, com identidade própria — nada de template genérico remontado.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Código limpo em React, performance e responsividade desde a primeira linha, não como retrofit.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testes & ajustes",
    description:
      "Revisão em dispositivos reais, ajustes finos de conteúdo e comportamento antes de qualquer coisa ir ao ar.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Lançamento & suporte",
    description:
      "Publicação acompanhada e canal direto aberto para ajustes e evolução depois da entrega.",
    icon: Rocket,
  },
];

export interface Project {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  accent: "gold" | "tide";
}

export const projects: Project[] = [
  {
    name: "MesaPronta",
    tag: "Gestão de mesas & pedidos",
    description:
      "Sistema demonstrativo para restaurantes: controle de mesas, comandas digitais e status de pedido em tempo real, pensado para o ritmo do salão.",
    stack: ["React", "TypeScript", "Sistema de gestão"],
    accent: "gold",
  },
  {
    name: "Vagas Tapajós",
    tag: "Plataforma de empregos regional",
    description:
      "Mural de vagas demonstrativo conectando empresas e candidatos da região do Tapajós, com busca por cidade e categoria.",
    stack: ["React", "Busca & filtros", "Painel administrativo"],
    accent: "tide",
  },
  {
    name: "Prato do Dia",
    tag: "Cardápio digital",
    description:
      "Cardápio digital demonstrativo com atualização instantânea de pratos e preços, otimizado para leitura rápida no celular.",
    stack: ["React", "Mobile-first", "Cardápio dinâmico"],
    accent: "gold",
  },
];

export interface TechItem {
  name: string;
  role: string;
}

export const techStack: TechItem[] = [
  { name: "React", role: "Interface" },
  { name: "Vite", role: "Build & DX" },
  { name: "TypeScript", role: "Tipagem" },
  { name: "Framer Motion", role: "Animação" },
  { name: "Node.js", role: "Backend" },
  { name: "PostgreSQL", role: "Dados" },
];

export interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    icon: UserCheck,
    title: "Fala direto com quem desenvolve",
    description: "Sem camadas de atendimento. Quem escreve o código é quem responde suas mensagens.",
  },
  {
    icon: ShieldCheck,
    title: "Código limpo e documentado",
    description: "Um sistema que você — ou qualquer outro desenvolvedor — consegue entender e evoluir depois.",
  },
  {
    icon: Gauge,
    title: "Performance e SEO nativos",
    description: "Velocidade e boas práticas de busca desde a primeira versão, não como ajuste posterior.",
  },
  {
    icon: Wallet,
    title: "Preço justo, sem intermediários",
    description: "Orçamento condizente com o escopo real do projeto, sem taxas de agência sobre agência.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Quanto tempo leva para desenvolver um site ou sistema?",
    answer:
      "Sites institucionais costumam levar de 2 a 4 semanas; sistemas sob medida variam conforme a complexidade do processo que eles automatizam. O prazo exato é definido na etapa de Descoberta, antes de qualquer compromisso.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Cada projeto é orçado pelo escopo real — número de páginas, funcionalidades e integrações necessárias. Você recebe uma proposta clara antes de decidir, sem letras miúdas.",
  },
  {
    question: "Vocês atendem empresas fora da região do Tapajós?",
    answer:
      "Sim. O trabalho é feito remotamente, com reuniões por vídeo e alinhamento contínuo — a região de origem do estúdio não limita quem pode ser atendido.",
  },
  {
    question: "O site inclui domínio e hospedagem?",
    answer:
      "Ajudamos a configurar domínio e hospedagem e recomendamos as opções mais adequadas ao projeto; os custos desses serviços são do cliente, cobrados diretamente pelo provedor escolhido.",
  },
  {
    question: "E depois que o site vai ao ar?",
    answer:
      "Fica um canal aberto para ajustes, dúvidas e pequenas evoluções. Planos de manutenção contínua também estão disponíveis para quem quer o site sempre atualizado.",
  },
];
