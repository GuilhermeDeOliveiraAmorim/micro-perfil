import { Perfil } from "../pages/api/entities/perfil/perfil.entity";

const paragraphs: {
  title: string;
  paragraph: string[];
}[] = [
  {
    title: "Atual:",
    paragraph: [
      "Desenvolvedor full stack, utilizando PHP com framework CakePHP, além de HTML, CSS e Javascript. Skills em ferramentas de construção e edição de imagens digitais (Illustrator e Photoshop).",
    ],
  },
  {
    title: "Em estudo:",
    paragraph: [
      "DDD e Clean Architecture aplicadas a projetos Node.js, Express, TypeScript, React, React Native, Next.js e Go.",
    ],
  },
  {
    title: "Graduação:",
    paragraph: [
      "Ciência da Computação (Universidade Federal de Alagoas, 2006-201?). Desenvolvimento de competências em Java, MySQL, Engenharia de Software e Empreendedorismo. Bolsista de iniciação científica (Biotecnologia); bolsista de extensão (software desktop); monitor (Teoria da Computação); TCC na área de Análise de Sentimento (nota máxima, com publicação nacional e internacional).",
    ],
  },
  {
    title: "Outras formações:",
    paragraph: [
      "MBA em Desenvolvimento Full Stack com Javascript e TypeScript pelo Instituto de Gestão e Tecnologia da Informação (2023);",
      "Curso Sequencial de Formação Complementar da Universidade Federal de Pernambuco em parceria com a Motorola Mobility. Desenvolvimento de habilidades em Java e Análise de Testes de Software (2013);",
      "Mestrado em Ciência da Computação (Universidade Federal de Sergipe) com atuação nas áreas de Computação Afetiva e Interação Homem-Máquina, grande área Inteligência Artificial. (2014 - Não finalizado);",
    ],
  },

  {
    title: "Outras experiências:",
    paragraph: [
      "3 anos de serviço público (auxiliar administrativo na Prefeitura de Campo Grande/AL). Criação de portal web (Se Liga Arapiraca).",
    ],
  },
];

export const perfil = new Perfil({
  name: "Guilherme Amorim",
  image: "https://avatars.githubusercontent.com/u/5620529?v=4",
  bio: paragraphs,
  jobTitle: "Desenvolvedor Full Stack",
  birthday: "20/10/1986",
});
