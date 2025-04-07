const digestivePoints = [
    {
        id: 'mouth',
        name: 'Boca',
        x: 32, // pourcentage relatif à la largeur de l'image
        y: 18, // pourcentage relatif à la hauteur de l'image
        description: "La boca es el punto de entrada al sistema digestivo. Aquí comienza la digestión mecánica (masticación) y química (enzimas salivales).",
        facts: [
            "Las enzimas de la saliva comienzan a descomponer los hidratos de carbono.",
            "La lengua ayuda a mezclar los alimentos con la saliva y a formar el bolo alimenticio. ",
            "Un adulto produce alrededor de 1,5 litros de saliva al día."
        ]
    },
    {
        id: 'esophagus',
        name: 'Epiglotis',
        x: 50,
        y: 25,
        description: "La epiglotis es un pequeño colgajo de tejido que impide que los alimentos entren en la tráquea al tragar.",
        facts: [
            "Se cierra automáticamente al tragar.",
            "Separa las vías respiratoria y digestiva.",
            "Sin ella, podríamos atragantarnos con la comida."
        ]
    },
    {
        id: 'stomach',
        name: 'Estomago',
        x: 66,
        y: 56,
        description: "El estómago es un saco muscular que descompone los alimentos con ácidos y potentes enzimas.",
        facts: [
            "Puede contener hasta 2 litros de alimentos.",
            "El jugo gástrico contiene ácido clorhídrico.",
            "Transforma los alimentos en una sustancia semilíquida llamada quimo."
        ]
    },
    {
        id: 'liver',
        name: 'Higado',
        x: 35,
        y: 56,
        description: "El hígado es un órgano vital que facilita la digestión produciendo bilis. También desempeña un papel importante en el metabolismo y la desintoxicación.",
        facts: [
            "Puede regenerar sus células dañadas.",
            "Produce alrededor de 1 litro de bilis al día.",
            "Almacena glucosa en forma de glucógeno."
        ]
    },
    {
        id: 'gallbladder',
        name: 'Vésicule biliaire',
        x: 54,
        y: 14,
        description: "La vésicule biliaire stocke et concentre la bile produite par le foie. Lors d'un repas, elle libère la bile dans l'intestin grêle pour aider à digérer les graisses.",
        facts: [
            "La vésicule biliaire peut stocker environ 50 ml de bile",
            "On peut vivre normalement sans vésicule biliaire",
            "Les calculs biliaires se forment quand la bile contient trop de cholestérol"
        ]
    },
    {
        id: 'gallbladder',
        name: 'Vésicule biliaire',
        x: 42,
        y: 23,
        description: "El páncreas produce enzimas digestivas y hormonas como la insulina. Es esencial para la digestión y la regulación de los niveles de azúcar en sangre.",
        facts: [
            "Segrega enzimas en el intestino delgado para descomponer las grasas, las proteínas y los hidratos de carbono.",
            "Desempeña un papel crucial en el control de la glucemia.",
            "Mide unos 15 cm de largo."
        ]
    },
    {
        id: 'pancreas',
        name: 'Páncreas',
        x: 51,
        y: 61,
        description: "El páncreas produce enzimas digestivas y hormonas como la insulina. Es esencial para la digestión y la regulación de los niveles de azúcar en sangre..",
        facts: [
            "Segrega enzimas en el intestino delgado para descomponer las grasas, las proteínas y los hidratos de carbono.",
            "Desempeña un papel crucial en el control de la glucemia.",
            "Mide unos 15 cm de largo."
        ]
    },
    {
        id: 'small_intestine',
        name: 'Intestino delgado',
        x: 53,
        y: 79,
        description: "En el intestino delgado tiene lugar la mayor parte de la digestión y absorción de nutrientes. Mide unos 6 metros de largo y se divide en tres partes: duodeno, yeyuno e íleon.",
        facts: [
            "La pared del intestino delgado contiene vellosidades que aumentan la absorción de nutrientes.",
            "Puede absorber alrededor del 90% de los nutrientes consumidos.",
            "Las enzimas digestivas y la bilis actúan aquí para completar la digestión."
        ]
    },
    {
        id: 'large_intestine',
        name: 'Intestino grueso',
        x: 74,
        y: 66,
        description: "El intestino grueso se encarga de absorber el agua y los minerales de los alimentos no digeridos y de formar las heces.",
        facts: [
            "El intestino grueso mide aproximadamente 1,5 metros de largo.",
            "Alberga miles de millones de bacterias útiles para la digestión.",
            "Transforma los desechos en materia fecal lista para su eliminación."
        ]
    },
    {
        id: 'rectum',
        name: 'Recto',
        x: 66,
        y: 88,
        description: "El recto es la última parte del intestino grueso. Almacena las heces antes de ser expulsadas.",
        facts: [
            "Mide entre 12 y 15 cm de largo.",
            "El jugo gástrico contiene ácido clorhídrico.",
            "Transforma los alimentos en una sustancia semilíquida llamada quimo."
        ]
    },
    {
        id: 'anus',
        name: 'Anus',
        x: 49,
        y: 96,
        description: "L'anus est l'ouverture terminale du tube digestif, composé de muscles sphincters internes et externes qui contrôlent l'élimination des déchets.",
        facts: [
            "Le sphincter interne fonctionne involontairement, tandis que le sphincter externe est sous contrôle volontaire",
            "L'anus contient de nombreuses terminaisons nerveuses sensibles",
            "Il joue un rôle essentiel dans la continence fécale"
        ]
    }
];