import { StaticImageData } from 'next/image'
import abb from '@/assets/abb.png'
import abceram from '@/assets/abceram.png'
import abece from '@/assets/abece.jpg'
import abendi from '@/assets/abendi.png'
import abia from '@/assets/abia.jpg'
import abichama from '@/assets/abichama.jpg'
import abimaq from '@/assets/abimaq.jpg'
import aboutsolution from '@/assets/aboutsolution.jpg'
import abralimp from '@/assets/abralimp.png'
import adn from '@/assets/adn.png'
import advantech from '@/assets/advantech.jpg'
import afip from '@/assets/afip.jpg'
import error from '@/assets/error.svg'
import agrothings from '@/assets/agrothings.png'
import i2a2 from '@/assets/i2a2.png'
import ai4 from '@/assets/ai4.png'
import alberteinstein from '@/assets/alberteinstein.png'
import alianca from '@/assets/alianca.jpg'
import amazonas from '@/assets/amazonas.png'
import anbima from '@/assets/anbima.png'
import anhanguera from '@/assets/anhanguera.jpg'
import ariston from '@/assets/ariston.png'
import artimar from '@/assets/artimar.png'
import ascael from '@/assets/ascael.png'
import ashrae from '@/assets/ashrae.png'
import aspect from '@/assets/aspect.jpg'
import americantower from '@/assets/americantower.svg'
import airtek from '@/assets/airtek.png'
import amt from '@/assets/amt.png'
import kapok from '@/assets/kapok.jpg'
import attus from '@/assets/attus.jpg'
import grob from '@/assets/grob.jpg'
import bestinclass from '@/assets/bestinclass.png'
import bioseta from '@/assets/bioseta.png'
import bizup from '@/assets/bizup.png'
import boomera from '@/assets/boomera.png'
import autron from '@/assets/autron.png'
import cargill from '@/assets/cargil.png'
import cbca from '@/assets/cbca.jpg'
import cepefer from '@/assets/cepefer.png'
import ceva from '@/assets/ceva.jpg'
import chemours from '@/assets/chemours.png'
import chrompack from '@/assets/chrompack.png'
import ciesp from '@/assets/ciesp.jpg'
import cmp from '@/assets/cmp.png'

interface Company {
  id: number
  name: string
  image: StaticImageData
  desc: string
  link: string
}

export const companies: Company[] = [
  {
    id: 1,
    name: 'ABB Automação Ltda',
    image: abb,
    desc: 'Segmentos de energia, papel e celulose, mineração, óleo e gás, alimentos e bebidas.',
    link: 'https://new.abb.com/br'
  },
  {
    id: 2,
    name: 'ABCERAM - Associação Brasileira de Cerâmica',
    image: abceram,
    desc: 'Segmento de cerâmica onde compreende todos os materiais inorgânicos, não metálicos, obtidos geralmente após tratamento térmico em temperaturas elevadas.',
    link: 'https://abceram.org.br'
  },
  {
    id: 3,
    name: 'ABECE - Associação Brasileira de Engenharia e Consultoria Estrutural',
    image: abece,
    desc: 'Ramo de Engenharia e Consultoria Estrutural.',
    link: 'https://site.abece.com.br'
  },
  {
    id: 4,
    name: 'ABENDI - Associação Brasileira de Ensaios Não Destrutivos e Inspeção',
    image: abendi,
    desc: 'Gestão de projetos de pesquisa, desenvolvimento e inovação, capacitação, qualificação e certificação, normalização técnica e difusão do conhecimento nas áreas de Ensaios Não Destrutivos, Inspeções, Acesso por Corda, Saneamento & Infraestrutura, Qualidade & Meio Ambiente e Monitoramento de Condição.',
    link: 'http://www.abendihomologacao.com.br/abendi/'
  },
  {
    id: 5,
    name: 'ABIA - Associação Brasileira das Indústrias da Alimentação',
    image: abia,
    desc: 'Indústria de alimentos e bebidas.',
    link: 'https://www.abia.org.br'
  },
  {
    id: 6,
    name: 'ABICHAMA - Associação Brasileira da Indústria de Retardantes de Chama',
    image: abichama,
    desc: 'Fomentar a conscientização acerca da importância da segurança contra incêndio no país, além de subsidiar pesquisas e estudos científicos nas áreas de saúde e meio ambiente.',
    link: 'http://www.abichama.com.br'
  },
  {
    id: 7,
    name: 'ABIMAQ - Associação Brasileira da Indústria de Máquinas e Equipamentos',
    image: abimaq,
    desc: 'Indústria de Máquinas e Equipamentos.',
    link: 'https://www.abimaq.org.br'
  },
  {
    id: 8,
    name: 'ABOUT SOLUTION',
    image: aboutsolution,
    desc: 'Pioneiras da Ciência Sensorial, possibiltam cursos de pós graduação também.',
    link: 'https://aboutsolution.com.br'
  },
  {
    id: 9,
    name: 'ABRALIMP - Associação Brasileira do Mercado de Limpeza Profissional',
    image: abralimp,
    desc: 'Atuação em prol da limpeza profissional e seu importante papel na promoção da saúde às pessoas',
    link: 'https://abralimp.org.br'
  },
  {
    id: 10,
    name: 'ADN - Projetos em Tecnologia da Informação  Ltda',
    image: adn,
    desc: 'ERP, análise e planejamento financeiro, gestão de operações financeiras, gestão de contratos e de faturamento, inovação para aplicativos, análise e verificação de TI, transformação digital governança de TI, serviços de BPO, suporte de Ti, solução em nuvem, serviços e soluções de segurança cibernética.',
    link: 'https://adn.com.br'
  },
  {
    id: 11,
    name: 'ADVANTECH',
    image: advantech,
    desc: 'Líder global nas áreas de sistemas inteligentes IoT e plataformas embarcadas.',
    link: 'https://www.advantech.com/pt-br'
  },
  {
    id: 12,
    name: 'AFIP - Associação Fundo de Incentivo a Pesquisa',
    image: afip,
    desc: 'Fornecer suporte financeiro para atividades de docência, pesquisa científica e atendimento médico à comunidade, com ênfase no serviço público de saúde.',
    link: 'https://www.afip.com.br'
  },
  {
    id: 13,
    name: 'AGRIPA Consultoria Ltda',
    image: error,
    desc: 'Consultoria em gestão empresarial.',
    link: '/'
  },
  {
    id: 14,
    name: 'AGROTHINGS (TWT)',
    image: agrothings,
    desc: 'Sem necessidade de internet no campo, a AgroThings permite ao gestor da fazenda, em tempo real, gerenciar com qualidade a execução dos serviços de plantio, aplicação de químicos e colheita, especialmente no cultivo de grãos e fibras.',
    link: 'https://www.instagram.com/agrothingsbr/'
  },
  {
    id: 15,
    name: 'I2 A2 - Associação Insituto de Inteligência Artificial',
    image: i2a2,
    desc: 'Oferecem treinamentos em tecnologias emergentes como robótica avançada, computação quântica e inteligência artificial em várias disciplinas como ciência de dados, visão computacional e processamento de linguagem natural.',
    link: 'https://www.i2a2.academy/pt'
  },
  {
    id: 16,
    name: 'AI4',
    image: ai4,
    desc: 'Startup de Sensoriamento IoT e Diagnósticos por Inteligência Artificial.',
    link: 'https://ai4.io'
  },
  {
    id: 17,
    name: 'HOSPITAL ALBERT EINSTEIN',
    image: alberteinstein,
    desc: 'Complexo de saúde cujo foco de atuação está nas áreas da medicina de alta complexidade. Por isto, se tornou referência na prevenção, diagnóstico e tratamento de doenças na área da cardiologia, oncologia, ortopedia, neurologia e cirurgia.',
    link: 'https://www.einstein.br/Pages/Home.aspx'
  },
  {
    id: 18,
    name: 'ALIANÇA FRANCESA - Associação de Cultura Francesa do Grande ABC',
    image: alianca,
    desc: 'Escola de língua francesa e cultura francófona.',
    link: 'https://www.aliancafrancesagabc.com.br'
  },
  {
    id: 19,
    name: 'ALPUNTO BRASIL',
    image: error,
    desc: 'Oferecem refrigeradores, cervejeiras e congeladores.',
    link: 'https://www.linkedin.com/company/alpunto-brasil-refrigeradores-e-servicos-ltda-/'
  },
  {
    id: 20,
    name: 'AMAZONAS CAP',
    image: amazonas,
    desc: 'A proposta da AmazonasCap é acelerar startups ao longo de sua jornada, com planejamento estratégico, conexões com o mercado, acesso a investidores e internacionalização, seja ela do Brasil para mercados internacionais ou de outros países para o mercado brasileiro; é também apoiar a inovação aberta conectando grandes empresas ao poder transformador das startups.',
    link: 'https://amazonascap.com.br'
  },
  {
    id: 21,
    name: 'ANBIMA - Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais',
    image: anbima,
    desc: 'Define uma série de boas práticas para as empresas do mercado financeiro e de capitais, além de oferecer certificações para os profissionais das áreas.',
    link: 'https://www.anbima.com.br/pt_br/pagina-inicial.htm'
  },
  {
    id: 22,
    name: 'ANHANGUERA',
    image: anhanguera,
    desc: 'Centro universitário.',
    link: 'https://www.anhanguera.com'
  },
  {
    id: 23,
    name: 'APELIMPS - Associação Paulista das Empresas Prestadoras de Serviços de Limpeza e Terceirização',
    image: error,
    desc: 'Empresa de limpeza.',
    link: '/'
  },
  {
    id: 24,
    name: 'ARISTON',
    image: ariston,
    desc: 'Especialista global em aquecimento de água e produtos de aquecimento.',
    link: 'https://www.ariston.com'
  },
  {
    id: 25,
    name: 'ARTIMAR',
    image: artimar,
    desc: 'Representante comercial das principais fábricas mundiais de componentes eletrônicos.',
    link: 'https://www.artimar.com.br'
  },
  {
    id: 26,
    name: 'ASCAEL',
    image: ascael,
    desc: 'Especializada em sistemas de combate a incendio fabricante de detector de fumaça e temperatura, central de alarme de incendio e acionadores.',
    link: 'https://ascael.com.br'
  },
  {
    id: 27,
    name: 'ASHRAE',
    image: ashrae,
    desc: 'Associação profissional americana que busca promover o projeto e a construção de sistemas de aquecimento, ventilação, ar condicionado e refrigeração.',
    link: ''
  },
  {
    id: 28,
    name: 'ASPECT',
    image: aspect,
    desc: 'Alternativas tecnológicas que integrem-se ao fluxo de admissão existente na Instituição - máquina de cartão; assinatura digital; câmera; impressora de pulseira; monitor; dispensador de álcoll em gel; impressora de senha; wi-fi; Nobreak; plataforma.',
    link: 'https://www.aspect.com.br'
  },
  {
    id: 29,
    name: 'AMERICAN TOWER',
    image: americantower,
    desc: 'Alugam espaços em torres, oferecemos soluções customizadas, sistemas internos (in building DAS), sistemas externos (outdoor DAS), topo de prédio, conectividade de fibra óptica, uma rede de IoT na tecnologia LoRaWAN™ e serviços que aprimoram a cobertura de redes sem fio.',
    link: 'https://americantower.com.br/pt/index.html'
  },
  {
    id: 30,
    name: 'AIRTEK',
    image: airtek,
    desc: 'Oferecemos produtos e serviços de engenharia para o tratamento do ar e outros gases.',
    link: 'https://airtek.com.br'
  },
  {
    id: 31,
    name: 'ABGI - Incentivar Consultoria Empresarial Ltda',
    image: error,
    desc: 'Consultoria com visão das opções de incentivos fiscais e recursos financeiros, buscando as melhores práticas de processos para gestão da inovação e acompanhamento das tendências tecnológicas globais.',
    link: '/'
  },
  {
    id: 32,
    name: 'AMT - Association For Manufacturing Technology',
    image: amt,
    desc: 'Empresa de tecnologia de manufatura.',
    link: 'https://www.amtonline.org'
  },
  {
    id: 33,
    name: 'INSTITUTO KAPOK',
    image: kapok,
    desc: 'Articulamos melhorias do ambiente regulatório da inovação corporativa. Promovemos a troca de conhecimento e experiências entre seus profissionais. Realizamos pesquisas e estudos de seus temas. Divulgamos melhores práticas. Apoiamos projetos em inovação corporativa, em especial, para ICT privados.',
    link: 'https://institutokapok.org'
  },
  {
    id: 34,
    name: 'ASTRO ABC INDÚSTRIA E COMÉRCIO LTDA',
    desc: '',
    image: error,
    link: '/'
  },
  {
    id: 35,
    name: 'ATTUS TECNOLOGIA EM TELECOMUNICAÇÕES LTDA',
    image: attus,
    desc: 'Oferecem soluções em telecomunicações com tecnologia avançada e inovadora, com muita flexibilidade.',
    link: 'https://attustelecom.com.br'
  },
  {
    id: 36,
    name: 'B. GROB',
    image: grob,
    desc: 'É a mais antiga e a terceira maior fábrica do Grupo GROB, produzindo há mais de 60 anos máquinas para a indústria nacional e internacional de acordo com o padrão alemão. A produção de equipamentos de sistemas e de máquinas universais da mais alta qualidade é assegurada por mais de 550 trabalhadores em uma área de produção superior a 34.000 metros quadrados.',
    link: 'https://www.linkedin.com/company/bgrobdobrasil/?originalSubdomain=br'
  },
  {
    id: 37,
    name: 'BEST IN CLASS',
    image: bestinclass,
    desc: 'É uma empresa com mais de 12 anos de experiência no mercado, fornecendo serviços de locação e produtos da mais alta qualidade para todos os segmentos. Com uma equipe altamente capacitada, buscamos constantemente a excelência, garantindo o mais alto padrão de qualidade para nossos clientes.',
    link: 'https://www.bestinclass.com.br'
  },
  {
    id: 38,
    name: 'BIOSETA',
    image: bioseta,
    desc: 'É uma empresa que atua há mais de 30 anos em serviços essenciais para o equilíbrio e harmonia do desenvolvimento econômico, social e ambiental, abrangendo áreas como saúde ambiental, água, higienização, tratamento fitossanitário e resíduos.',
    link: 'https://www.bioseta.com.br'
  },
  {
    id: 39,
    name: 'BIZUP',
    image: bizup,
    desc: 'Visa transformar o mercado de consultoria estratégica, por meio de conhecimento da indústria e estratégia de crescimento aplicados ao negócio.',
    link: 'https://www.bizupstrategy.com'
  },
  {
    id: 40,
    name: 'BOOMERA',
    image: boomera,
    desc: 'Empresa especialista em Economia Circular do início ao início. Transformamos resíduo em matéria-prima para produtos surpreendentes.',
    link: 'https://boomera.com.br'
  },
  {
    id: 41,
    name: 'C+ TECNOLOGIA (AUTRON)',
    image: autron,
    desc: 'Somos uma equipe de profissionais focados em prover soluções inovadoras e com um alto valor agregado, com atuação nacional e internacional, assegurando aos nossos clientes significativos ganhos.',
    link: 'https://www.autron.com.br'
  },
  {
    id: 42,
    name: 'CARGILL',
    image: cargill,
    desc: 'Oferecemos serviços e produtos alimentícios, agrícolas, financeiros e industriais ao mundo. Juntamente com produtores rurais, clientes, governos e comunidades, ajudamos as pessoas a prosperar com a aplicação de nossas ideias há mais de 155 anos. Temos 155.000 funcionários em 70 países, que estão comprometidos a fornecer alimentos ao mundo de uma forma responsável, reduzindo o impacto ambiental e melhorando as comunidades onde atuamos.',
    link: 'https://www.cargill.com.br/pt_BR/início'
  },
  {
    id: 43,
    name: 'CBCA - Centro Brasileiro de Construção em Aço',
    image: cbca,
    desc: 'O CBCA vem juntar-se também aos esforços de organizações nacionais que congregam representantes da indústria local, entidades e profissionais ligados à construção em aço. Ela foi criada sob a forma de "consórcio" tendo o Instituto Aço Brasil como gestor.',
    link: 'https://www.cbca-acobrasil.org.br/site/'
  },
  {
    id: 44,
    name: 'CEPEDI - Centro de Pesquisa e Desenvolvimento Tecnológico em Informática e Eletroeletrônica de Ikhéus ',
    image: error,
    desc: '',
    link: '/'
  },
  {
    id: 45,
    name: 'CEPEFER - Centro de Estudos e Pesquisas Ferroviárias Ltda',
    image: cepefer,
    desc: 'Centro universitário.',
    link: 'https://cepefer.ucam-campos.br'
  },
  {
    id: 46,
    name: 'CEVA LOGISTIC',
    image: ceva,
    desc: '',
    link: 'https://www.cevalogistics.com/pt-br'
  },
  {
    id: 47,
    name: 'CHEMOURS',
    image: chemours,
    desc: 'A Chemours é um tipo diferente de empresa química, impulsionada pelo propósito de criar um mundo melhor por meio do poder da química. Com um portfólio de classe mundial, fornecemos soluções para setores que vão desde automotivo, tintas e laminados até eletrônicos avançados, construção, energia e telecomunicações, ajudando a tornar o mundo mais colorido, capaz e mais limpo.',
    link: 'https://www.chemours.com/en'
  },
  {
    id: 48,
    name: 'CHROMPACK',
    image: chrompack,
    desc: 'Fornecedor de equipamentos para o setor petrolífero em São Paulo.',
    link: 'https://chrompack.com.br'
  },
  {
    id: 49,
    name: 'CIESP - Centro das Indústrias do Estado de São Paulo',
    image: ciesp,
    desc: 'Centro das Indústrias do Estado de São Paulo é uma associação privada que apoia e representa os interesses das Indústrias paulistas junto à sociedade e o governo.',
    link: 'https://www.ciesp.com.br'
  },
  {
    id: 50,
    name: 'CMP - Companhia Metalgraphica Paulista',
    image: cmp,
    desc: 'Atuamos no mercado de latas para químicos e alimentos, com os mais variados segmentos, mantendo as especificações e necessidades de cada aplicação, oferecendo também projetos de litografia com tecnologia de ponta. Contamos com uma equipe capacitada e motivada, com atendimento rápido e eficiente, considerando às necessidades e expectativas de nossos clientes.',
    link: 'https://www.cmp.ind.br'
  }
]
