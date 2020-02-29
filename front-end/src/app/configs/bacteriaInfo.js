export const bacteriaInfo = {
    Bacteroidetes : {
        description: 'The Bacteroidetes phylum is a large class of rod-shaped bacteria that are widely distributed in the gut and skin of animals. Bacteroides are highly abundant in intestines where they perform metabolic conversions that are essential for the host, such as degradation of proteins or complex sugar polymers. In the gastrointestinal microbiota Bacteroidetes have a very broad metabolic potential and are regarded as one of the most stable part of gastrointestinal microflora. Reduced abundance of the Bacteroidetes in some cases is associated with obesity and irritable bowel syndrome, and this bacterial group appears to be enriched in patients suffering from type 1 and type 2 diabetes. ',
        location: ['GI Tract, Intestines and Skin'],
        health_benefits: ['increase in healthy immune responses', 'reduction of colitis inflammation', 'reduce severity/onset of IBS'],
        health_impacts: ['Contributes to type 1/2 diabetes'],
        desired_outcome: 'increase',
    },
    Proteobacteria : {
        description: 'Proteobacteria are the largest phylum of bacteria which includes a wide variety of pathogenic genera, such as Escherichia, Salmonella, Vibrio, Helicobacter, Yersinia, Legionellales. Although small in number in the gut, misbalances in Proteobacteria are increasingly being associated with human diseases. ',
        location: ['GI Tract, Tongue, Skin and Vagina'],
        health_benefits: [],
        health_impacts: ['Gut Inflammation', 'Obesity', 'Impacts on Liver Function', 'Implicated in Cardiovascular disease', 'Development of IBS', 'Implicated in Respiratory Conditions'],
        desired_outcome: 'decrease'
    },
    Actinobacteria : {
        description: 'Actinobacteria are one the four major phyla of the gut microbiota and, although they represent only a small percentage, are pivotal in the maintenance of gut homeostasis. During the last decade many studies focused the attention on Actinobacteria, especially on their role both in gastrointestinal and systemic diseases and on their possible therapeutic use. In fact, classes of this phylum, especially Bifidobacteria, are widely used as probiotic demonstrating beneficial effects in many pathological conditions, even if larger in vivo studies are needed to confirm such encouraging results.',
        location: ['Intestine, '],
        health_benefits: ['help process fiber in diet', 'maintanence of healthy body weight', 'reduce infections in the gut', 'help maintain gut homeostasis'],
        health_impacts: ['none'],
        desired_outcome: 'increase'
    },
    Cyanobacteria : {
        description: 'Cyanobacteria are a group of photosynthetic bacteria not commonly associated with the human gut. However, recent investigations have begun to associate genetic signatures of this phylum within humans. Not much is known about the effects of these bacterial populations in the human micrbiome, however, the production of cyanotoxins characteristic of this phylum have been associated with negative health affects in humans.',
        location: ['GI Tract'],
        health_benefits: [],
        health_impacts: ['Gastrointestinal irritation', 'reduction in immune function'],
        desired_outcome: 'decrease'
    },
    Firmicutes : {
        description: 'Firmicutes make up the largest portion of the mouse and human gut microbiome. The division Firmicutes as part of the gut flora has been shown to be involved in energy resorption, and potentially related to the development of diabetes and obesity. Within the gut of healthy human adults, the most abundant bacterium: Faecalibacterium prausnitzii, which makes up 5% of the total gut microbiome, is a member of the Firmicutes phylum. This species is directly associated with reduced low-grade inflammation in obesity.' +
          '\n' +
          'A higher level of Lactobacillus (of the Firmicutes phylum) has been found in obese patients and in one study, obese patients put on weight loss diets showed a reduced amount of Firmicutes within their guts. A higher relative abundance of Firmicutes was seen in mice fed a western diet (high fat/high sugar) than in mice fed a standard low fat/ high polysaccharide diet.',
        location: ['GI Tract', 'Vagina'],
        health_benefits: ['Reduction in inflammatory conditions such as IBS', ''],
        health_impacts: ['Large implications in obesity', 'depression disorder',],
        desired_outcome: 'increase'
    },
    Tenericutes : {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: ['GI Tract', 'Vagina'],
        health_benefits: ['increase in healthy immune responses', 'reduction of colitis inflammation', 'reduce severity of IBS'],
        health_impacts: ['none'],
        desired_outcome: 'increase'
    },
    Verrucomicrobia : {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: ['GI Tract', 'Vagina'],
        health_benefits: ['increase in healthy immune responses', 'reduction of colitis inflammation', 'reduce severity of IBS'],
        health_impacts: ['none'],
        desired_outcome: 'increase'
    },
    Fusobacteria : {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: ['GI Tract', 'Vagina'],
        health_benefits: ['increase in healthy immune responses', 'reduction of colitis inflammation', 'reduce severity of IBS'],
        health_impacts: ['none'],
        desired_outcome: 'increase'
    }
}

export const allGenusList = [
    'Bacteroidetes',
    'Proteobacteria',
    'Actinobacteria',
    'Cyanobacteria',
    'Firmicutes',
    'Tenericutes',
    'Verrumicrobia',
    'Fusobacteria'
]