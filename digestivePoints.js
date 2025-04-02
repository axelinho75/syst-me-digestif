const digestivePoints = [
    {
        id: 'mouth',
        name: 'Bouche',
        x: 32, // pourcentage relatif à la largeur de l'image
        y: 18, // pourcentage relatif à la hauteur de l'image
        description: "La bouche est le point d'entrée du système digestif. C'est ici que commence la digestion mécanique (mastication) et chimique (enzymes salivaires).",
        facts: [
            "Les enzymes dans la salive commencent à décomposer les glucides",
            "La langue aide à mélanger les aliments avec la salive et à former le bol alimentaire",
            "Un adulte produit environ 1.5 litre de salive par jour"
        ]
    },
    {
        id: 'esophagus',
        name: 'Œsophage',
        x: 50,
        y: 25,
        description: "L'œsophage est un tube musculaire d'environ 25-30 cm qui relie la bouche à l'estomac. Il transporte la nourriture grâce à des mouvements péristaltiques.",
        facts: [
            "Les ondes péristaltiques permettent de manger même en position horizontale ou inversée",
            "Le passage entre l'œsophage et l'estomac est appelé sphincter œsophagien inférieur",
            "Il faut environ 8-9 secondes pour que la nourriture descende de la bouche à l'estomac"
        ]
    },
    {
        id: 'stomach',
        name: 'Estomac',
        x: 66,
        y: 56,
        description: "L'estomac est un organe en forme de J qui sert de réservoir temporaire pour la nourriture. Il mélange les aliments avec les acides gastriques et les enzymes pour poursuivre la digestion.",
        facts: [
            "L'estomac peut contenir jusqu'à 4 litres de nourriture",
            "L'acide gastrique est assez puissant pour dissoudre du métal",
            "L'estomac produit une nouvelle couche de mucus toutes les deux semaines pour éviter de se digérer lui-même"
        ]
    },
    {
        id: 'liver',
        name: 'Foie',
        x: 35,
        y: 56,
        description: "Le foie est la plus grande glande du corps humain. Il produit la bile nécessaire à la digestion des graisses et remplit plus de 500 fonctions différentes dans l'organisme.",
        facts: [
            "Le foie peut se régénérer, même si jusqu'à 75% est endommagé",
            "Il filtre environ 1.5 litre de sang par minute",
            "La bile produite par le foie aide à l'absorption des vitamines A, D, E et K"
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
        description: "La vésicule biliaire stocke et concentre la bile produite par le foie. Lors d'un repas, elle libère la bile dans l'intestin grêle pour aider à digérer les graisses.",
        facts: [
            "La vésicule biliaire peut stocker environ 50 ml de bile",
            "On peut vivre normalement sans vésicule biliaire",
            "Les calculs biliaires se forment quand la bile contient trop de cholestérol"
        ]
    },
    {
        id: 'pancreas',
        name: 'Pancréas',
        x: 51,
        y: 61,
        description: "Le pancréas produit des enzymes digestives qui aident à décomposer les protéines, les lipides et les glucides. Il sécrète également des hormones comme l'insuline pour réguler la glycémie.",
        facts: [
            "Le pancréas produit jusqu'à 1.5 litre de suc pancréatique par jour",
            "Il contient à la fois des tissus exocrines (enzymes) et endocrines (hormones)",
            "Un dysfonctionnement du pancréas peut causer le diabète"
        ]
    },
    {
        id: 'small_intestine',
        name: 'Intestin grêle',
        x: 53,
        y: 79,
        description: "L'intestin grêle est un tube d'environ 6-7 mètres de long où se déroule la majeure partie de la digestion et de l'absorption des nutriments. Il est composé du duodénum, du jéjunum et de l'iléon.",
        facts: [
            "Il possède une surface d'absorption équivalente à un terrain de tennis grâce aux villosités",
            "90% de l'absorption des nutriments se produit dans l'intestin grêle",
            "Il contient plus de 100 millions de neurones, parfois appelé 'deuxième cerveau'"
        ]
    },
    {
        id: 'large_intestine',
        name: 'Gros intestin (côlon)',
        x: 74,
        y: 66,
        description: "Le gros intestin mesure environ 1.5 mètre et entoure l'intestin grêle. Sa principale fonction est d'absorber l'eau et les électrolytes des restes alimentaires pour former les selles.",
        facts: [
            "Le côlon héberge des billions de bactéries bénéfiques (microbiote intestinal)",
            "Il peut absorber jusqu'à 5 litres d'eau par jour",
            "Un transit complet dans le côlon prend généralement entre 24 et 72 heures"
        ]
    },
    {
        id: 'rectum',
        name: 'Rectum',
        x: 66,
        y: 88,
        description: "Le rectum est la dernière partie du gros intestin, mesurant environ 12 cm. Il stocke temporairement les matières fécales avant leur élimination.",
        facts: [
            "Le rectum contient des récepteurs qui signalent quand il est temps d'évacuer les selles",
            "Il est doté d'une grande élasticité pour s'adapter au volume des matières",
            "Des muscles spécialisés contrôlent la rétention et l'évacuation"
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