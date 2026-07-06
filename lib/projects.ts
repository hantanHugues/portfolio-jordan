export type Project = {
  slug: string;
  num: string;
  title: string;
  location: string;
  year: string;
  type: string;
  tools: string[];
  cardLabel: string;
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
    ],
    highlight:
      "Le dossier le plus fourni du stage (11 planches) : de la démolition partielle de l'existant jusqu'aux détails d'ancrage millimétrés sur mur mitoyen.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
