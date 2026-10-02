import type { Lang } from '../i18n/routes';

type L<T = string> = Record<Lang, T>;

export type Category = 'power' | 'memory' | 'display' | 'sensors' | 'opto' | 'frequency' | 'magnetics';

export const categories: { key: Category; label: L; short: L; blurb: L }[] = [
  {
    key: 'power',
    label: { pt: 'Semicondutores de potência', en: 'Power semiconductors' },
    short: { pt: 'Potência', en: 'Power' },
    blurb: { pt: 'MOSFETs, IGBTs, SiC, diodos e transistores', en: 'MOSFETs, IGBTs, SiC, diodes and transistors' },
  },
  {
    key: 'memory',
    label: { pt: 'Memórias e armazenamento', en: 'Memory & storage' },
    short: { pt: 'Memória', en: 'Memory' },
    blurb: { pt: 'NOR, NAND (SSD, eMMC, UFS) e DRAM', en: 'NOR, NAND (SSD, eMMC, UFS) and DRAM' },
  },
  {
    key: 'display',
    label: { pt: 'Displays customizados', en: 'Custom displays' },
    short: { pt: 'Displays', en: 'Displays' },
    blurb: { pt: 'TFT com touchscreen e monocromáticos', en: 'TFT with touchscreen and monochrome' },
  },
  {
    key: 'sensors',
    label: { pt: 'Sensores', en: 'Sensors' },
    short: { pt: 'Sensores', en: 'Sensors' },
    blurb: { pt: 'MEMS, corrente e tensão (Hall e fluxgate)', en: 'MEMS, current and voltage (Hall and fluxgate)' },
  },
  {
    key: 'opto',
    label: { pt: 'Optoacopladores e isolação', en: 'Optocouplers & isolation' },
    short: { pt: 'Opto', en: 'Opto' },
    blurb: { pt: 'Drivers isolados para IGBT/MOSFET, SSR e Opto‑MOS', en: 'Isolated IGBT/MOSFET drivers, SSR and Opto‑MOS' },
  },
  {
    key: 'frequency',
    label: { pt: 'Controle de frequência', en: 'Frequency control' },
    short: { pt: 'Frequência', en: 'Frequency' },
    blurb: { pt: 'Cristais, osciladores e wafers piezoelétricos', en: 'Crystals, oscillators and piezoelectric wafers' },
  },
  {
    key: 'magnetics',
    label: { pt: 'Componentes magnéticos', en: 'Magnetic components' },
    short: { pt: 'Magnéticos', en: 'Magnetics' },
    blurb: { pt: 'Transformadores e indutores sob medida', en: 'Custom transformers and inductors' },
  },
];

export interface Manufacturer {
  slug: string;
  name: string;             // display name
  legal: string;            // full company name
  logo: string;             // /logos/…
  logoScale?: number;       // optical size correction in grids
  site: { href: string; label: string };
  categories: Category[];
  tagline: L;
  description: L;
  products: L<string[]>;
  markets: L<string[]>;
  facts?: L<{ value: string; label: string }[]>;
  highlights?: L<string[]>;
  images?: string[];        // keys into src/assets/products
}

export const manufacturers: Manufacturer[] = [
  // ───────────── New (2026) ─────────────
  {
    slug: 'memsic',
    tagline: { pt: 'Sensores MEMS: magnetômetros, acelerômetros, chaves Hall e IMUs', en: 'MEMS sensors: magnetometers, accelerometers, Hall switches and IMUs' },
    name: 'Memsic',
    legal: 'Memsic Semiconductor Co., Ltd.',
    logo: '/logos/memsic.png',
    logoScale: 0.9,
    site: { href: 'https://www.memsic.com', label: 'www.memsic.com' },
    categories: ['sensors'],
    description: {
      pt: 'A Memsic Semiconductor é fabricante integrado (IDM) de sensores MEMS, oferecendo magnetômetros AMR, acelerômetros térmicos e capacitivos, chaves Hall, IMUs de 6 eixos e módulos de estabilização de imagem (eOIS), com alta precisão, robustez e tecnologia térmica proprietária. Atua em mercados como automotivo, industrial, médico, eletrônica de consumo e wearables, com foco em soluções completas (chip, algoritmo e aplicação), baixo consumo e suporte a aplicações que exigem alta sensibilidade e estabilidade térmica.',
      en: 'Memsic Semiconductor is an integrated device manufacturer (IDM) of MEMS sensors, offering AMR magnetometers, thermal and capacitive accelerometers, Hall switches, 6-axis IMUs and image-stabilization (eOIS) modules, with high precision, robustness and proprietary thermal technology. It serves markets such as automotive, industrial, medical, consumer electronics and wearables, focusing on complete solutions (chip, algorithm and application), low power consumption and support for applications that demand high sensitivity and thermal stability.',
    },
    products: {
      pt: ['Magnetômetros AMR 3D', 'Acelerômetros térmicos', 'Acelerômetros capacitivos', 'IMU de 6 eixos', 'Chaves Hall', 'Drivers de estabilização de imagem (OIS)'],
      en: ['3D AMR magnetometers', 'Thermal accelerometers', 'Capacitive accelerometers', '6-axis IMU', 'Hall switches', 'Image-stabilization (OIS) drivers'],
    },
    markets: {
      pt: ['Automotivo', 'Industrial', 'Médico', 'Eletrônica de consumo', 'Wearables', 'Casa inteligente'],
      en: ['Automotive', 'Industrial', 'Medical', 'Consumer electronics', 'Wearables', 'Smart home'],
    },
    facts: {
      pt: [
        { value: 'IDM', label: 'Chip, algoritmo e aplicação sob o mesmo teto' },
        { value: 'AEC-Q100', label: 'Grade 1 e Grade 2 em linhas automotivas' },
        { value: '0,8 mm', label: 'Magnetômetro AMR 3D em encapsulamento WLP de 0,8 × 0,8 mm' },
      ],
      en: [
        { value: 'IDM', label: 'Chip, algorithm and application under one roof' },
        { value: 'AEC-Q100', label: 'Grade 1 and Grade 2 automotive parts' },
        { value: '0.8 mm', label: '3D AMR magnetometer in a 0.8 × 0.8 mm WLP package' },
      ],
    },
    highlights: {
      pt: [
        'Acelerômetro térmico proprietário: sem massa móvel, extremamente resistente a impacto e com baixíssima deriva térmica.',
        'Acelerômetros automotivos para ESC, freio de estacionamento eletrônico (EPB) e suspensão ativa.',
        'Centros de P&D e design na China, nos EUA (San Jose) e na Europa (Holanda).',
      ],
      en: [
        'Proprietary thermal accelerometer: no moving proof mass, extremely shock-resistant and with ultra-low thermal drift.',
        'Automotive accelerometers for ESC, electronic parking brake (EPB) and active suspension.',
        'R&D and design centers in China, the USA (San Jose) and Europe (the Netherlands).',
      ],
    },
  },
  {
    slug: 'ct-micro',
    tagline: { pt: 'Optoacopladores, drivers isolados e relés Opto‑MOS', en: 'Optocouplers, isolated gate drivers and Opto‑MOS relays' },
    name: 'CT Micro',
    legal: 'CT Micro International Corporation',
    logo: '/logos/ct-micro.png',
    logoScale: 0.95,
    site: { href: 'https://www.ct-micro.com', label: 'www.ct-micro.com' },
    categories: ['opto'],
    description: {
      pt: 'A CT Micro International é um dos seis maiores fabricantes globais de optoacopladores, oferecendo drivers isolados para IGBT/MOSFET, relés SSR e Opto‑MOS, acopladores de interface para IPM e sensores/fotointerruptores infravermelhos, com alta isolação galvânica e desempenho em alta velocidade. Atua em mercados como eletrônica de potência industrial (inversores, UPS, solares, soldagem), sistemas de gerenciamento de bateria (BMS) e telegestão de redes elétricas, com foco em segurança elétrica, imunidade a ruído (CMTI) e suporte a aplicações que exigem alta confiabilidade.',
      en: 'CT Micro International is one of the six largest optocoupler manufacturers in the world, offering isolated IGBT/MOSFET gate drivers, SSR and Opto‑MOS relays, IPM interface couplers and infrared sensors/photo interrupters, with high galvanic isolation and high-speed performance. It serves markets such as industrial power electronics (inverters, UPS, solar, welding), battery management systems (BMS) and smart-grid remote management, focusing on electrical safety, noise immunity (CMTI) and support for applications that demand high reliability.',
    },
    products: {
      pt: ['Optoacopladores de alta velocidade e Darlington', 'Drivers isolados para IGBT/MOSFET', 'Relés de estado sólido (SSR) e Opto‑MOS', 'Optoacopladores DFN ultrafinos', 'Emissores e sensores infravermelhos', 'Fotointerruptores e LEDs'],
      en: ['High-speed and Darlington optocouplers', 'Isolated IGBT/MOSFET gate drivers', 'Solid-state relays (SSR) and Opto‑MOS', 'Ultra-thin DFN optocouplers', 'Infrared emitters and sensors', 'Photo interrupters and LEDs'],
    },
    markets: {
      pt: ['Inversores e solar', 'UPS', 'BMS e armazenamento', 'Carregadores veiculares', 'Automação industrial', 'Medição inteligente'],
      en: ['Inverters & solar', 'UPS', 'BMS & energy storage', 'EV chargers', 'Industrial automation', 'Smart metering'],
    },
    facts: {
      pt: [
        { value: 'Top 6', label: 'Entre os maiores fabricantes globais de optoacopladores' },
        { value: '150 mi', label: 'Peças por mês de capacidade produtiva' },
        { value: 'IATF 16949', label: 'Além de ISO 9001, 14001 e 45001; aprovações UL, VDE e CQC' },
      ],
      en: [
        { value: 'Top 6', label: 'Among the largest optocoupler makers worldwide' },
        { value: '150 M', label: 'Parts per month of production capacity' },
        { value: 'IATF 16949', label: 'Plus ISO 9001, 14001 and 45001; UL, VDE and CQC approvals' },
      ],
    },
    highlights: {
      pt: [
        'Encapsulamento patenteado DMC-Isolator®, com distância de isolação ≥ 0,4 mm garantida pelo próprio lead-frame.',
        'Optoacoplador DFN™ com 1,5 mm de espessura máxima e operação de −55 °C a 125 °C.',
        'Relés Opto‑MOS de 40 V a 1500 V, com Ron a partir de 0,08 Ω.',
      ],
      en: [
        'Patented DMC-Isolator® package, with ≥ 0.4 mm distance through insulation built into the lead frame.',
        'DFN™ optocoupler with 1.5 mm maximum thickness and −55 °C to 125 °C operation.',
        'Opto‑MOS relays from 40 V to 1500 V, with Ron down to 0.08 Ω.',
      ],
    },
    images: ['ctmicro-product-2', 'ctmicro-product-1', 'ctmicro-product-3', 'ctmicro-product-4'],
  },
  {
    slug: 'crrc-times-transducer',
    tagline: { pt: 'Sensores de corrente e tensão Hall e fluxgate', en: 'Hall and fluxgate current and voltage sensors' },
    name: 'CRRC Times Transducer',
    legal: 'Ningbo CRRC Times Transducer Technology Co., Ltd.',
    logo: '/logos/crrc-sensor.png',
    logoScale: 0.9,
    site: { href: 'https://www.nb-csrsensor.com', label: 'www.nb-csrsensor.com' },
    categories: ['sensors'],
    description: {
      pt: 'A Ningbo CRRC Times Transducer Technology é o braço de sensores do grupo CRRC, com mais de 30 anos de experiência em tração ferroviária e capacidade de produção de 85 milhões de sensores/ano, oferecendo transdutores de corrente e tensão Hall (open-loop e closed-loop), fluxgate e de detecção de fuga (RCD), com alta precisão e ampla faixa de operação. Atua em mercados como inversores solares e eólicos, sistemas de armazenamento de energia (BESS), carregadores veiculares, UPS e tração ferroviária, com foco em isolamento galvânico, precisão de medição e suporte a aplicações que exigem alta confiabilidade em ambientes de potência.',
      en: 'Ningbo CRRC Times Transducer Technology is the sensor arm of the CRRC group, with more than 30 years of experience in railway traction and a production capacity of 85 million sensors per year, offering Hall-effect current and voltage transducers (open-loop and closed-loop), fluxgate and residual-current detection (RCD) sensors, with high accuracy and a wide operating range. It serves markets such as solar and wind inverters, battery energy storage systems (BESS), EV chargers, UPS and railway traction, focusing on galvanic isolation, measurement accuracy and support for applications that demand high reliability in power environments.',
    },
    products: {
      pt: ['Transdutores de corrente Hall open-loop e closed-loop', 'Transdutores de tensão', 'Sensores fluxgate', 'Sensores de corrente residual (RCD)', 'Sensores integrados a barramento', 'Sensores para tração ferroviária'],
      en: ['Open-loop and closed-loop Hall current transducers', 'Voltage transducers', 'Fluxgate sensors', 'Residual-current (RCD) sensors', 'Busbar-integrated sensors', 'Railway traction sensors'],
    },
    markets: {
      pt: ['Inversores solares e eólicos', 'BESS', 'Carregadores veiculares', 'Veículos elétricos', 'UPS e data centers', 'Tração ferroviária'],
      en: ['Solar & wind inverters', 'BESS', 'EV chargers', 'Electric vehicles', 'UPS & data centers', 'Railway traction'],
    },
    facts: {
      pt: [
        { value: '85 mi', label: 'Sensores por ano de capacidade produtiva' },
        { value: '+30 anos', label: 'Em sensores para tração ferroviária, desde 1990' },
        { value: 'Nº 1', label: 'Marca de sensores ferroviários e eólicos na China' },
      ],
      en: [
        { value: '85 M', label: 'Sensors per year of production capacity' },
        { value: '30+ years', label: 'In railway traction sensors, since 1990' },
        { value: 'No. 1', label: 'Rail and wind-power sensor brand in China' },
      ],
    },
    highlights: {
      pt: [
        'Único fabricante de sensores do grupo CRRC, com planta de 30.000 m² em Ningbo.',
        'Sensores automotivos de 50 A a 1.500 A, com milhões de unidades em montadoras globais.',
        'Fornecedor dos principais fabricantes de inversores solares da China.',
      ],
      en: [
        'CRRC group’s only sensor manufacturer, with a 30,000 m² plant in Ningbo.',
        'Automotive sensors from 50 A to 1,500 A, with millions of units at global OEMs.',
        'Supplier to China’s leading solar inverter makers.',
      ],
    },
    images: ['crrc-sensor-product-1', 'crrc-sensor-product-3', 'crrc-sensor-product-2', 'crrc-sensor-product-4'],
  },

  // ───────────── Established linecard ─────────────
  {
    slug: 'phison',
    tagline: { pt: 'Controladoras NAND e módulos SSD, eMMC e UFS', en: 'NAND controllers and SSD, eMMC and UFS modules' },
    name: 'Phison',
    legal: 'Phison Electronics Corp.',
    logo: '/logos/phison.png',
    logoScale: 0.9,
    site: { href: 'https://www.phison.com', label: 'www.phison.com' },
    categories: ['memory'],
    description: {
      pt: 'A Phison Electronics é líder global em soluções de armazenamento NAND, oferecendo controladoras e módulos SSD, USB, SD, eMMC e UFS, com alto desempenho, confiabilidade e integração avançada. Atua em mercados como computação (consumo e corporativo), automotivo e industrial, com foco em customização, segurança de dados e suporte a aplicações que exigem velocidade, longevidade e eficiência energética.',
      en: 'Phison Electronics is a global leader in NAND storage solutions, offering NAND controllers and SSD, USB, SD, eMMC, and UFS modules, with high performance, reliability, and advanced integration. The company serves markets such as smartphones, computers (Consumer and Enterprise), automotive, and industrial, focusing on customization, data security, and support for applications that require speed, longevity, and energy efficiency.',
    },
    products: { pt: ['Controladoras NAND', 'SSD', 'eMMC', 'UFS', 'USB e SD'], en: ['NAND controllers', 'SSD', 'eMMC', 'UFS', 'USB and SD'] },
    markets: { pt: ['Computação', 'Automotivo', 'Industrial'], en: ['Computing', 'Automotive', 'Industrial'] },
  },
  {
    slug: 'dynex',
    tagline: { pt: 'Módulos IGBT, tiristores e diodos de alta potência', en: 'High-power IGBT modules, thyristors and diodes' },
    name: 'Dynex',
    legal: 'Dynex Semiconductor Limited',
    logo: '/logos/dynex.svg',
    site: { href: 'https://www.dynexsemi.com/', label: 'www.dynexsemi.com' },
    categories: ['power'],
    description: {
      pt: 'A Dynex Semiconductor é especializada em semicondutores de alta potência e montagens de energia, oferecendo módulos IGBT, tiristores e diodos em disco para aplicações industriais, ferroviárias e automotivas. Com fabricação no Reino Unido e suporte global, a empresa se destaca pela confiabilidade, eficiência energética e capacidade de customização em projetos críticos de conversão e controle de energia.',
      en: 'Dynex Semiconductor specializes in high-power semiconductors and power assemblies, offering IGBT modules, thyristors, and diodes for industrial, railway, and automotive applications. With manufacturing in the United Kingdom and global support, the company stands out for its reliability, energy efficiency, and ability to customize solutions in critical power conversion and control projects.',
    },
    products: { pt: ['Módulos IGBT', 'Tiristores', 'Diodos em disco', 'Montagens de potência'], en: ['IGBT modules', 'Thyristors', 'Disc diodes', 'Power assemblies'] },
    markets: { pt: ['Industrial', 'Ferroviário', 'Automotivo'], en: ['Industrial', 'Railway', 'Automotive'] },
  },
  {
    slug: 'crrc-times-semiconductor',
    tagline: { pt: 'IGBT de média e alta tensão, IGCT e SiC', en: 'Medium- and high-voltage IGBT, IGCT and SiC' },
    name: 'CRRC Times Semiconductor',
    legal: 'CRRC Times Semiconductor Co.',
    logo: '/logos/crrc-tsc.png',
    logoScale: 0.95,
    site: { href: 'https://ctsc.csrzic.com/protalen/cpzx/cpzx_1.htm', label: 'Product Center' },
    categories: ['power'],
    description: {
      pt: 'A TSC (Times Semiconductor), subsidiária da CRRC Times Electric, é especializada em semicondutores de potência, com um portfólio que inclui módulos IGBT de média e alta tensão, dispositivos FRD, tiristores, IGCTs, além de soluções em SiC. Atuando como IDM, a empresa domina todo o ciclo de desenvolvimento e fabricação desses componentes, atendendo setores como transporte ferroviário, automotivo, energia renovável e controle industrial.',
      en: 'TSC (Times Semiconductor), a subsidiary of CRRC Times Electric, specializes in power semiconductors with a portfolio that includes medium and high voltage IGBT modules, FRD devices, thyristors, IGCTs, as well as SiC solutions. Acting as an IDM, the company masters the entire development and manufacturing cycle of these components, serving sectors such as rail transport, automotive, renewable energy, and industrial control.',
    },
    products: { pt: ['Módulos IGBT de média e alta tensão', 'FRD', 'Tiristores', 'IGCT', 'SiC'], en: ['Medium & high voltage IGBT modules', 'FRD', 'Thyristors', 'IGCT', 'SiC'] },
    markets: { pt: ['Ferroviário', 'Automotivo', 'Energia renovável', 'Controle industrial'], en: ['Railway', 'Automotive', 'Renewable energy', 'Industrial control'] },
  },
  {
    slug: 'goford',
    tagline: { pt: 'MOSFETs de potência com baixo RDS(on)', en: 'Low RDS(on) power MOSFETs' },
    name: 'Goford',
    legal: 'Goford Semiconductor',
    logo: '/logos/goford.png',
    logoScale: 0.9,
    site: { href: 'https://www.gofordsemi.com/', label: 'www.gofordsemi.com' },
    categories: ['power'],
    description: {
      pt: 'A Goford Semiconductor é especializada em dispositivos de potência, oferecendo uma ampla linha de MOSFETs para aplicações automotivas, industriais, de consumo e telecomunicações. Com foco em eficiência energética, baixo RDS(on) e alta densidade de corrente, seus produtos atendem demandas críticas em conversão de energia, controle de motores, sistemas BMS e fontes chaveadas, com opções avançadas de encapsulamento.',
      en: 'Goford Semiconductor specializes in power devices, offering a wide range of MOSFETs for automotive, industrial, consumer, and telecommunications applications. With a focus on energy efficiency, low RDS(on), and high current density, its products meet critical demands in power conversion, motor control, BMS systems, and switch-mode power supplies, with advanced packaging options.',
    },
    products: { pt: ['MOSFETs de potência', 'Encapsulamentos avançados'], en: ['Power MOSFETs', 'Advanced packages'] },
    markets: { pt: ['Automotivo', 'Industrial', 'Consumo', 'Telecom'], en: ['Automotive', 'Industrial', 'Consumer', 'Telecom'] },
  },
  {
    slug: 'esmt',
    tagline: { pt: 'Memórias DRAM e Flash e analógicos de sinal misto', en: 'DRAM and Flash memory, mixed-signal analog' },
    name: 'ESMT',
    legal: 'Elite Semiconductor Microelectronics Technology Inc.',
    logo: '/logos/esmt.png',
    logoScale: 0.7,
    site: { href: 'https://esmt.com.tw/en/Products', label: 'esmt.com.tw' },
    categories: ['memory'],
    description: {
      pt: 'A ESMT é especializada em soluções de memória DRAM e Flash, além de componentes analógicos de sinal misto, oferecendo produtos confiáveis e competitivos para aplicações industriais, automotivas, de consumo e comunicação.',
      en: 'ESMT specializes in DRAM and Flash memory solutions, as well as mixed-signal analog components, providing reliable and competitive products for industrial, automotive, consumer, and communication applications.',
    },
    products: { pt: ['DRAM', 'Flash', 'Analógicos de sinal misto'], en: ['DRAM', 'Flash', 'Mixed-signal analog'] },
    markets: { pt: ['Industrial', 'Automotivo', 'Consumo', 'Comunicação'], en: ['Industrial', 'Automotive', 'Consumer', 'Communication'] },
  },
  {
    slug: 'jenson-display',
    tagline: { pt: 'Módulos LCD e TFT customizados com touch capacitivo', en: 'Custom LCD and TFT modules with capacitive touch' },
    name: 'Jenson Display',
    legal: 'Jenson Display Group',
    logo: '/logos/jenson.png',
    logoScale: 0.85,
    site: { href: 'http://www.jensondisplay.com/', label: 'www.jensondisplay.com' },
    categories: ['display'],
    description: {
      pt: 'A Jenson Display é especializada em módulos LCD personalizados, com destaque para soluções TFT com touchscreen capacitivo, desenvolvidas sob medida para aplicações industriais, automotivas e médicas, combinando durabilidade, ampla faixa térmica e alta confiabilidade conforme padrões internacionais.',
      en: 'Jenson Display specializes in custom LCD modules, with a focus on TFT solutions featuring capacitive touchscreens, tailored for industrial, automotive, and medical applications, combining durability, a wide temperature range, and high reliability according to international standards.',
    },
    products: { pt: ['Módulos LCD customizados', 'TFT com touch capacitivo'], en: ['Custom LCD modules', 'TFT with capacitive touch'] },
    markets: { pt: ['Industrial', 'Automotivo', 'Médico'], en: ['Industrial', 'Automotive', 'Medical'] },
  },
  {
    slug: 'rcl-display',
    tagline: { pt: 'Módulos LCD customizados, fabricante desde 1981', en: 'Custom LCD modules, manufacturing since 1981' },
    name: 'RCL Display',
    legal: 'RCL Display Limited',
    logo: '/logos/rcl.png',
    site: { href: 'https://www.rcldisplay.com/', label: 'www.rcldisplay.com' },
    categories: ['display'],
    description: {
      pt: 'A RCL Display é fabricante de soluções LCD desde 1981, oferecendo módulos personalizados em tecnologias como TFT, EBTN, Mono LCD e painéis touch, conforme os requisitos de cada aplicação. Atende aplicações automotivas, industriais e comerciais com foco em customização, confiabilidade e suporte técnico especializado.',
      en: 'RCL Display has been a manufacturer of LCD solutions since 1981, offering custom LCD modules in technologies such as TFT, EBTN, Mono LCD, and touch panels, according to the requirements of each application. The company serves automotive, industrial, and commercial applications with a focus on customization, reliability, and strong technical support.',
    },
    products: { pt: ['TFT', 'EBTN', 'LCD monocromático', 'Painéis touch'], en: ['TFT', 'EBTN', 'Mono LCD', 'Touch panels'] },
    markets: { pt: ['Automotivo', 'Industrial', 'Comercial'], en: ['Automotive', 'Industrial', 'Commercial'] },
  },
  {
    slug: 'siward',
    tagline: { pt: 'Cristais, osciladores e wafers piezoelétricos', en: 'Crystals, oscillators and piezoelectric wafers' },
    name: 'Siward',
    legal: 'Siward Crystal Technology Co., Ltd.',
    logo: '/logos/siward.svg',
    logoScale: 0.95,
    site: { href: 'https://www.siward.com/en', label: 'www.siward.com' },
    categories: ['frequency'],
    description: {
      pt: 'A Siward Crystal é líder global em dispositivos de controle de frequência, oferecendo cristais, osciladores e wafers piezoelétricos de alta precisão para aplicações em 5G, data centers, automotivo, IoT e aeroespacial, com foco em miniaturização, estabilidade térmica e baixo ruído de fase.',
      en: 'Siward Crystal is a global leader in frequency control devices, offering high-precision crystals, oscillators, and piezoelectric wafers for applications in 5G, data centers, automotive, IoT, and aerospace, with a focus on miniaturization, thermal stability, and low phase noise.',
    },
    products: { pt: ['Cristais', 'Osciladores', 'Wafers piezoelétricos'], en: ['Crystals', 'Oscillators', 'Piezoelectric wafers'] },
    markets: { pt: ['5G', 'Data centers', 'Automotivo', 'IoT', 'Aeroespacial'], en: ['5G', 'Data centers', 'Automotive', 'IoT', 'Aerospace'] },
  },
  {
    slug: 'ee-magnetic',
    tagline: { pt: 'Transformadores e indutores sob medida', en: 'Custom transformers and inductors' },
    name: 'EE Magnetic',
    legal: 'E & E Magnetic Products Limited',
    logo: '/logos/ee-magnetic.png',
    site: { href: 'http://www.eemagnetic.com/', label: 'www.eemagnetic.com' },
    categories: ['magnetics'],
    description: {
      pt: 'A EE Magnetic desenvolve transformadores, indutores e componentes magnéticos sob medida, com foco em desempenho, confiabilidade e flexibilidade para aplicações industriais, automotivas, médicas e de energia.',
      en: 'EE Magnetic develops transformers, inductors, and custom magnetic components, focusing on performance, reliability, and flexibility for industrial, automotive, medical, and energy applications.',
    },
    products: { pt: ['Transformadores', 'Indutores', 'Magnéticos sob medida'], en: ['Transformers', 'Inductors', 'Custom magnetics'] },
    markets: { pt: ['Industrial', 'Automotivo', 'Médico', 'Energia'], en: ['Industrial', 'Automotive', 'Medical', 'Energy'] },
  },
];

const order = ['phison', 'crrc-times-semiconductor', 'dynex', 'memsic', 'ct-micro', 'crrc-times-transducer', 'goford', 'esmt', 'siward', 'jenson-display', 'rcl-display', 'ee-magnetic'];
manufacturers.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

export const distributors: { name: string; logo: string; href: string; about: L }[] = [
  {
    name: 'Arrow Electronics', logo: '/logos/arrow.png', href: 'https://www.arrow.com/',
    about: { pt: 'Um dos maiores distribuidores de componentes eletrônicos do mundo, com presença global e integrante da Fortune 500.', en: 'One of the world’s largest electronic component distributors, a Fortune 500 company with a global footprint.' },
  },
  {
    name: 'Future Electronics', logo: '/logos/future.png', href: 'https://www.futureelectronics.com/',
    about: { pt: 'Distribuidor global de componentes eletrônicos, com operação nas Américas, Europa e Ásia.', en: 'A global electronic component distributor operating across the Americas, Europe and Asia.' },
  },
  {
    name: 'Macnica DHW', logo: '/logos/macnica.png', href: 'https://www.macnica.com/americas/dhw/pt/',
    about: { pt: 'Operação sul-americana do grupo japonês Macnica, com presença local no Brasil.', en: 'The South American operation of Japan’s Macnica group, with a local presence in Brazil.' },
  },
  {
    name: 'Richardson RFPD', logo: '/logos/richardson.png', href: 'https://www.richardsonrfpd.com/',
    about: { pt: 'Uma empresa Arrow, especializada em RF, micro-ondas e eletrônica de potência.', en: 'An Arrow company specializing in RF, microwave and power electronics.' },
  },
];

export const catLabel = (lang: Lang, key: Category) => categories.find((c) => c.key === key)!.short[lang];
