export type Project = {
  slug: string;
  num: string;
  title: string;
  location: string;
  year: string;
  type: string;
  tools: string[];
  cardLabel: string;
  cardImage: string;
  gallery: { src: string; caption: string }[];
  summary: string;
  context: string;
  mission: string[];
  deliverables: string[];
  highlight: string;
};

export const projects: Project[] = [
  {
    slug: "maison-individuelle-fort-mahon-plage",
    num: "01",
    title: "Étude d'exécution d'une maison individuelle",
    location: "Fort-Mahon-Plage (80)",
    year: "2026",
    type: "Étude d'exécution",
    tools: ["AutoCAD", "Graitec"],
    cardLabel: "plan de fondation",
    cardImage: "/projets/maison-individuelle-fort-mahon-plage/01-plan-fondation.png",
    gallery: [
      { src: "/projets/maison-individuelle-fort-mahon-plage/01-plan-fondation.png", caption: "Plan de fondation (AutoCAD)" },
      { src: "/projets/maison-individuelle-fort-mahon-plage/02-ferraillage-poteau.png", caption: "Carnet de ferraillage — poteau (Graitec)" },
    ],
    summary:
      "Définition des travaux de gros œuvre d'une maison individuelle : fondations, poutres, poteaux, planchers et murs porteurs.",
    context:
      "Maison individuelle à usage d'habitation. Le bureau d'études structure était chargé de définir les travaux de gros œuvre assurant la stabilité de l'ouvrage et sa conformité aux normes en vigueur.",
    mission: [
      "Étude des éléments porteurs, des descentes de charges et dimensionnement des fondations, poutres, poteaux, planchers et murs porteurs.",
      "Assistance à l'ingénieur structure dans la compréhension des méthodologies de calcul, puis réalisation des plans techniques d'exécution.",
    ],
    deliverables: [
      "Plan de fondation (AutoCAD)",
      "Plan du plancher haut RDC",
      "4 coupes structurelles (A-A, B-B, A'-A', B'-B')",
      "Carnet de ferraillage complet : poteau, poutres, semelles filante et isolée (Graitec)",
    ],
    highlight:
      "Carnet de ferraillage le plus complet réalisé durant le stage : poteau BA 25×25, poutres BA jusqu'à 5,60 m de portée, semelles filante et isolée.",
  },
  {
    slug: "trois-ouvertures-guesnain",
    num: "02",
    title: "Création de trois ouvertures dans une maison existante",
    location: "Guesnain (59)",
    year: "2026",
    type: "Renforcement structurel",
    tools: ["AutoCAD", "Graitec"],
    cardLabel: "coupe existant / projet",
    cardImage: "/projets/trois-ouvertures-guesnain/01-plan-rdc-projet.png",
    gallery: [
      { src: "/projets/trois-ouvertures-guesnain/01-plan-rdc-projet.png", caption: "Plan RDC — état projet" },
      { src: "/projets/trois-ouvertures-guesnain/02-ferraillage-poutre.png", caption: "Ferraillage — poutre de reprise (Graitec)" },
    ],
    summary:
      "Étude des modifications structurelles nécessaires pour créer trois nouvelles ouvertures dans un bâtiment existant, en garantissant sa stabilité.",
    context:
      "Bâtiment existant (espace café/bar, vente de produits locaux, cuisine) devant accueillir trois nouvelles ouvertures en façade et en mur porteur.",
    mission: [
      "Analyse des éléments porteurs concernés et évaluation des charges supportées par les murs existants.",
      "Dimensionnement des éléments de renforcement (poutres, poteaux, linteaux de reprise) avec des informations d'entrée limitées, nécessitant des allers-retours réguliers avec le maître de stage.",
      "Première approche des plans de ferraillage sous Graitec, en assistance, avant de gagner en autonomie sur les projets suivants.",
    ],
    deliverables: [
      "Plan RDC existant et projet",
      "Coupes A-A et B-B, existant et projet",
      "Carnet de ferraillage : 2 poteaux BA, 1 poutre de reprise",
    ],
    highlight:
      "Premier projet où les contraintes de l'existant (peu de documentation disponible) ont exigé une lecture fine du bâti avant tout dimensionnement.",
  },
  {
    slug: "extension-ba-wannehain",
    num: "03",
    title: "Étude béton armé pour la création d'une extension",
    location: "Wannehain (59)",
    year: "2026",
    type: "Extension · étude BA",
    tools: ["AutoCAD", "Graitec"],
    cardLabel: "plan de fondation",
    cardImage: "/projets/extension-ba-wannehain/02-photo-site.png",
    gallery: [
      { src: "/projets/extension-ba-wannehain/02-photo-site.png", caption: "Vue du site — existant" },
      { src: "/projets/extension-ba-wannehain/01-plan-fondation.png", caption: "Plan de fondation" },
    ],
    summary:
      "Dimensionnement des éléments porteurs d'une extension à partir du rapport géotechnique et des descentes de charges fournies.",
    context:
      "Extension d'une maison individuelle existante, avec raccordement de la nouvelle structure à l'existant.",
    mission: [
      "Analyse du rapport géotechnique pour identifier les contraintes liées à l'extension et à son raccordement à la structure existante.",
      "Dimensionnement des fondations, poutres, poteaux et linteaux à partir des charges permanentes et d'exploitation transmises par le maître de stage.",
      "Réalisation des plans structurels sur AutoCAD puis des plans de ferraillage sur Graitec, avec validation et ajustements successifs.",
    ],
    deliverables: [
      "Photographie de site — existant",
      "Plan de fondation",
      "Plan du plancher haut RDC (solivage bois)",
      "Coupes A-A et B-B",
    ],
    highlight:
      "Structure mixte : fondations et poteaux béton armé supportant un plancher formé de solives bois.",
  },
  {
    slug: "charpente-bois-ronchin",
    num: "04",
    title: "Création d'une charpente bois dans un bâtiment existant",
    location: "Ronchin (59)",
    year: "2026",
    type: "Charpente bois",
    tools: ["AutoCAD"],
    cardLabel: "vue en plan ossature",
    cardImage: "/projets/charpente-bois-ronchin/02-photo-chantier.png",
    gallery: [
      { src: "/projets/charpente-bois-ronchin/02-photo-chantier.png", caption: "Vue chantier — charpente existante avant reprise" },
      { src: "/projets/charpente-bois-ronchin/01-structure-primaire.png", caption: "Vue en plan — structure primaire" },
    ],
    summary:
      "Première étude en structure bois : faisabilité d'une nouvelle charpente et reprise des charges vers l'existant.",
    context:
      "Bâtiment existant nécessitant la création d'une nouvelle charpente bois, avec adaptation partielle de l'ossature existante (ferme à déplacer, trémies pour châssis).",
    mission: [
      "Recherches complémentaires sur les principes de dimensionnement bois, première expérience de ce type de structure durant le stage.",
      "Analyse de la faisabilité structurelle de la charpente et de la transmission des charges vers les éléments porteurs existants.",
      "Réalisation des vues en plan (existant / projet), des coupes et des détails d'assemblage sur AutoCAD, à partir d'un modèle de plan transmis par le bureau d'études.",
    ],
    deliverables: [
      "Photographie de chantier — charpente existante",
      "Vue en plan existant et projet",
      "Vue en plan — structure primaire",
      "Coupes A-A et B-B, existant et projet",
      "4 détails d'assemblage (chevillage, ancrages, achelets béton armé)",
    ],
    highlight:
      "Fermes, pannes et chevrons dimensionnés avec chevillage HILTI sur achelets béton armé créés dans le mur existant.",
  },
  {
    slug: "extension-ba-saint-python",
    num: "05",
    title: "Extension béton armé — du croquis au ferraillage",
    location: "Saint-Python (59)",
    year: "2026",
    type: "Extension · étude BA — projet fil rouge",
    tools: ["AutoCAD", "Graitec"],
    cardLabel: "méthodologie complète",
    cardImage: "/projets/extension-ba-saint-python/03-photo-site.png",
    gallery: [
      { src: "/projets/extension-ba-saint-python/03-photo-site.png", caption: "Vue du site — zone d'extension" },
      { src: "/projets/extension-ba-saint-python/01-plan-fondation.png", caption: "Plan de fondation" },
      { src: "/projets/extension-ba-saint-python/02-ferraillage-dalle.png", caption: "Ferraillage dalle — nappe inférieure (Graitec)" },
    ],
    summary:
      "Projet suivi de bout en bout : lecture des plans, analyse géotechnique, descente de charges, croquis, plans structurels et ferraillage de dalle.",
    context:
      "Extension en RDC (~50 m² d'emprise au sol) d'un logement individuel de type R+1 avec sous-sol partiel. Sol de type D (meuble à moyennement compact).",
    mission: [
      "Lecture du plan architectural du maître d'ouvrage et compréhension de la liaison entre le bâtiment existant et l'extension projetée.",
      "Analyse du rapport géotechnique : fondations superficielles par semelles filantes et/ou isolées, profondeur de fouille estimée à 1,40 m avec ancrage de 30 cm.",
      "Détermination des charges permanentes et d'exploitation appliquées à la structure.",
      "Réalisation d'un croquis de plan de fondation à la minute, validé et corrigé par le maître de stage avant passage en 2D.",
      "Réalisation des plans structurels (plan de fondation, PH RDC, coupes) sur AutoCAD.",
      "Réalisation des plans de ferraillage de dalle (nappes inférieure et supérieure) sur Graitec.",
    ],
    deliverables: [
      "Photographies de site (existant + zone d'extension)",
      "Plan de fondation et PH RDC",
      "Coupes A-A et B-B",
      "Ferraillage dalle — nappe inférieure et nappe supérieure",
      "Croquis de fondation manuscrit (plan à la minute)",
    ],
    highlight:
      "Le projet le plus complet du stage : c'est celui qui illustre toute la chaîne de travail d'un bureau d'études structure, de la lecture de plan au ferraillage validé.",
  },
  {
    slug: "reprise-structure-bois-lille",
    num: "06",
    title: "Reprise d'une structure bois dégradée",
    location: "Lille (59)",
    year: "2026",
    type: "Diagnostic & réparation structurelle",
    tools: ["AutoCAD"],
    cardLabel: "vue de face existant / projet",
    cardImage: "/projets/reprise-structure-bois-lille/01-vue-de-face-projet.png",
    gallery: [
      { src: "/projets/reprise-structure-bois-lille/01-vue-de-face-projet.png", caption: "Vue de face — état projet" },
    ],
    summary:
      "Diagnostic d'une poutre et de solives bois dégradées par la pourriture pour un syndicat de copropriétaires, et conception de leur remplacement.",
    context:
      "Copropriété dont la poutre muralière (16×16 cm) et une partie des solives de plancher présentaient une dégradation avancée (bois pourri) nécessitant une reprise structurelle.",
    mission: [
      "Relevé de l'état existant : identification de la partie de poutre et des solives détériorées.",
      "Conception de la reprise : nouvelle poutre muralière, solives dégradées remplacées et moisées, assemblage par moises bois et tiges filetées.",
      "Réalisation des vues de face et des vues en plan (existant / projet) sur AutoCAD.",
    ],
    deliverables: [
      "Vue de face — état existant et état projet",
      "Vue en plan — état existant et état projet",
    ],
    highlight:
      "Projet de diagnostic et réparation plutôt que de construction neuve : une facette différente du métier, orientée pathologie du bâtiment.",
  },
  {
    slug: "surelevation-maison-mitoyenne-lille",
    num: "07",
    title: "Surélévation d'une maison mitoyenne en ossature bois",
    location: "Lille (59)",
    year: "2026",
    type: "Surélévation · ossature bois",
    tools: ["AutoCAD"],
    cardLabel: "façade existant / projet",
    cardImage: "/projets/surelevation-maison-mitoyenne-lille/01-coupe-a-a.png",
    gallery: [
      { src: "/projets/surelevation-maison-mitoyenne-lille/01-coupe-a-a.png", caption: "Coupe A-A" },
      { src: "/projets/surelevation-maison-mitoyenne-lille/02-ferraillage-chainage.png", caption: "Carnet de ferraillage — chaînage BA 22×31,3 cm (Graitec)" },
    ],
    summary:
      "Conception structurelle d'une surélévation en ossature bois : planchers, chaînages béton armé de liaison et détails d'ancrage sur mur mitoyen.",
    context:
      "Surélévation d'une maison mitoyenne en ossature bois, avec démolition partielle de la toiture existante et création de nouvelles ouvertures en façade.",
    mission: [
      "Conception des planchers en ossature bois (PH R+2 et R+3) : solives bois massif, poutres bois, montants et sablières.",
      "Étude des chaînages béton armé (achelets, chaînage de liaison 22 × 31,3 cm) assurant la reprise de l'ossature bois sur le mur mitoyen.",
      "Réalisation des façades existantes et projetées (rue et arrière) et des coupes structurelles, avec 5 détails de fixation (chevilles HILTI, platines métalliques, UPE 240).",
    ],
    deliverables: [
      "PH R+3 et PH R+2 (vue en plan projet)",
      "Façade sur rue — existante et projet",
      "Façade arrière — existante et projet",
      "Coupes A-A et B-B",
      "5 détails techniques d'assemblage et d'ancrage",
      "Carnet de ferraillage — chaînage béton armé 22×31,3 cm (Graitec)",
    ],
    highlight:
      "Le dossier le plus fourni du stage (11 planches) : de la démolition partielle de l'existant jusqu'aux détails d'ancrage millimétrés sur mur mitoyen.",
  },
  {
    slug: "diagnostic-plancher-montataire",
    num: "08",
    title: "Vérification de planchers existants pour une dalle coupe-feu",
    location: "Montataire (60)",
    year: "2026",
    type: "Diagnostic structurel · bâtiment public",
    tools: ["AutoCAD"],
    cardLabel: "plan PH RDC existant",
    cardImage: "/projets/diagnostic-plancher-montataire/01-plan-ph-rdc.png",
    gallery: [
      { src: "/projets/diagnostic-plancher-montataire/01-plan-ph-rdc.png", caption: "Plan PH RDC — existant" },
      { src: "/projets/diagnostic-plancher-montataire/02-ferraillage-dalle.png", caption: "Ferraillage dalle — nappe inférieure / nappe supérieure" },
    ],
    summary:
      "Vérification de la capacité portante de planchers existants d'un bâtiment public, pour permettre la mise en place d'une dalle béton coupe-feu sans compromettre la stabilité de l'ouvrage.",
    context:
      "Bâtiment municipal dont il fallait évaluer si les planchers existants (solives bois, poutrelles métalliques jumelées, poteaux béton armé) pouvaient recevoir une nouvelle dalle coupe-feu sans risque pour la structure.",
    mission: [
      "Analyse des caractéristiques du plancher existant à partir des relevés transmis par le maître de stage.",
      "Détermination des charges permanentes et d'exploitation agissant sur la structure existante.",
      "Calcul des sollicitations reprises par les éléments porteurs et vérification de leur compatibilité avec les nouvelles charges induites par la dalle coupe-feu.",
      "Réalisation des plans techniques (existant / projet, coupes A-A et B-B) représentant les dispositions constructives retenues : nouveau plancher béton armé de 16 cm d'épaisseur, empochements dans le mur existant.",
      "Réalisation des plans de ferraillage de la nouvelle dalle (nappe inférieure et nappe supérieure) sur AutoCAD.",
    ],
    deliverables: [
      "Plan PH RDC — existant et projet",
      "Coupes A-A et B-B, existant et projet",
      "Ferraillage dalle — nappe inférieure et nappe supérieure",
    ],
    highlight:
      "Un diagnostic plutôt qu'une conception neuve : vérifier qu'une structure existante (poteaux BA, poutrelles métalliques jumelées, planchers préfabriqués) peut absorber une charge supplémentaire sans compromettre sa stabilité.",
  },
  {
    slug: "reprise-ouverture-roubaix",
    num: "09",
    title: "Reprise de désordres sur une ouverture existante",
    location: "Roubaix (59)",
    year: "2026",
    type: "Diagnostic & renforcement structurel",
    tools: ["AutoCAD"],
    cardLabel: "coupe existant / projet",
    cardImage: "/projets/reprise-ouverture-roubaix/01-coupe-existante.png",
    gallery: [
      { src: "/projets/reprise-ouverture-roubaix/01-coupe-existante.png", caption: "Coupe existante — poteaux et poutre bois à déposer" },
      { src: "/projets/reprise-ouverture-roubaix/02-coupe-projet.png", caption: "Coupe projet — reprise en poteaux et poutre HEA 160" },
    ],
    summary:
      "Diagnostic de désordres liés à la mauvaise qualité du bois sur une ouverture existante, et conception du renforcement par une structure métallique.",
    context:
      "Ouverture déjà réalisée dans un mur en bois existant (R+1), dont les investigations ont révélé une mauvaise qualité des éléments bois porteurs (poteaux et poutre) ainsi qu'une discontinuité des solives de plancher au droit de la poutre.",
    mission: [
      "Relevé de l'état existant : poteaux et poutre bois de 17×17 cm, absence d'entretoises entre les solives du plancher.",
      "Conception de la reprise : remplacement des deux poteaux et de la poutre bois par des profilés métalliques HEA 160 soudés, sur platines chevillées au sol.",
      "Ajout d'entretoises entre les solives pour améliorer leur stabilité, limiter les déformations et mieux répartir les charges du plancher.",
      "Réalisation des coupes et vues en plan (existant / projet) sur AutoCAD, support à l'étude et à la préparation des travaux de renforcement.",
    ],
    deliverables: [
      "Coupe sur ouverture — existante et projet",
      "Vue en plan PH RDC — existante et projet",
    ],
    highlight:
      "Reprise d'une structure bois défaillante par une ossature métallique HEA 160 soudée, avec ajout d'entretoises pour stabiliser des solives jusque-là discontinues au droit de la poutre.",
  },
  {
    slug: "plancher-scene-watremez-roubaix",
    num: "10",
    title: "Charge d'exploitation admissible d'une scène de spectacle",
    location: "Roubaix (59)",
    year: "2026",
    type: "Diagnostic structurel · établissement recevant du public",
    tools: ["AutoCAD"],
    cardLabel: "plancher voûté existant",
    cardImage: "/projets/plancher-scene-watremez-roubaix/01-plan-existant.png",
    gallery: [
      { src: "/projets/plancher-scene-watremez-roubaix/01-plan-existant.png", caption: "Plancher haut sous-sol — existant" },
      { src: "/projets/plancher-scene-watremez-roubaix/02-plan-projet.png", caption: "Plancher haut sous-sol — projet" },
    ],
    summary:
      "Évaluation de la charge d'exploitation admissible de la scène d'une salle de spectacle municipale, et préconisation des adaptations structurelles nécessaires.",
    context:
      "Plancher voûté en sous-sol (solives bois massif sur poteaux métalliques IPN 180) supportant la scène d'une salle de spectacle communale, à vérifier vis-à-vis des exigences de sécurité et d'exploitation du bâtiment.",
    mission: [
      "Analyse de la structure existante : solives bois massif de 7,5×23,5 cm à entraxe de 50 cm, poteaux métalliques IPN 180, poutre limitée à un simple madrier de 75×225 mm.",
      "Évaluation de la capacité portante de l'ensemble et détermination des charges d'exploitation admissibles pour l'usage scénique.",
      "Préconisation des adaptations : remplacement des solives par des sections plus adaptées (20×40 et 25×40 cm), modification de leur entraxe, changement du sens de portée du plancher, remplacement des deux poteaux métalliques.",
      "Réalisation des plans structurels (vues en plan et coupes A-A / B-B, existant / projet) et des détails d'exécution (achelets béton armé, platines soudées) sur AutoCAD.",
    ],
    deliverables: [
      "Plan plancher haut sous-sol — existant et projet",
      "Coupes A-A et B-B, existant et projet",
      "Détail d'exécution — achelet béton armé et platine métallique",
    ],
    highlight:
      "Le plus grand plancher étudié durant le stage : une voûte en solives bois massif de plus de 13 m de portée, au-dessus d'une salle de spectacle recevant du public.",
  },
  {
    slug: "extension-touquet-paris-plage",
    num: "11",
    title: "Extension d'une habitation sur trois niveaux",
    location: "Le Touquet-Paris-Plage (62)",
    year: "2026",
    type: "Extension · étude BA — sous-sol, RDC, combles",
    tools: ["AutoCAD"],
    cardLabel: "plan de fondation",
    cardImage: "/projets/extension-touquet-paris-plage/01-plan-fondation.png",
    gallery: [
      { src: "/projets/extension-touquet-paris-plage/01-plan-fondation.png", caption: "Plan de fondation" },
      { src: "/projets/extension-touquet-paris-plage/02-coupe-a-a.png", caption: "Coupe A-A — sous-sol, RDC et combles" },
      { src: "/projets/extension-touquet-paris-plage/03-photo-chantier.png", caption: "Vue chantier — ferraillage du chaînage en fouille" },
    ],
    summary:
      "Descente de charges et plans structurels complets d'une extension d'habitation sur trois niveaux : sous-sol, rez-de-chaussée et combles.",
    context:
      "Extension d'une habitation existante en R-1, RDC et combles, accolée à un bâtiment existant. Structure en poteaux-poutres béton armé, dalles alvéolaires et parpaings banchés, avec charpente à faîtage de 7 m sur les combles.",
    mission: [
      "Réalisation de la descente de charges de la nouvelle structure afin de vérifier la reprise des efforts sur l'ensemble des trois niveaux.",
      "Traduction des solutions structurelles définies (poteaux, poutres, longrines et semelles isolées BA, dalles alvéolaires 16+5) en plans techniques précis sur AutoCAD.",
      "Réalisation du plan de fondations, des plans de niveau (sous-sol, RDC, combles) et de trois coupes (A-A, B-B, C-C).",
      "Réalisation des plans de ferraillage de dalle (nappes inférieure et supérieure).",
    ],
    deliverables: [
      "Plan de fondations",
      "Plans de niveau — sous-sol, RDC, combles",
      "Coupes A-A, B-B et C-C",
      "Ferraillage dalle — nappe inférieure et nappe supérieure",
      "Photographie de chantier — ferraillage du chaînage",
    ],
    highlight:
      "Le dossier le plus complet du stage (9 planches) : une structure sur trois niveaux menée de la descente de charges jusqu'aux plans de ferraillage, avec suivi photographique du chantier.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
