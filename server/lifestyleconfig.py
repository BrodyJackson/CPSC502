# this file maps contains confugration elements which detail the effects that each of the lifestyle elements have on the gut
# shows which genera are positively or negatively impacted
# the idea is to get these values to be the ones which are supported by data analytics in the future
# for now they are encoded based on effects found in current research into the topic

lifestyle_effects = {
    'height' : {
        'impact_scale': 0.2,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },    
    'weight' : {
        'impact_scale': 0.7,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'age' : {
        'impact_scale': 0.6,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'gender' : {
        'impact_scale': 0.3,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'exercise' : {
        'impact_scale': 0.7,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'sleep' : {
        'impact_scale': 0.7,
        'bifidobacterium' : 'increase',
        'lactobacillus' : 'increase',
        'bacteroides' : 'increase',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'stressed' : {
        'impact_scale': 0.6,
        'bifidobacterium' : 'decrease',
        'lactobacillus' : 'decrease',
        'bacteroides' : 'decrease',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'increase',
        'roseburia' : 'decrease',
        'eubacterium' : 'null',
        'enterococcus' : 'increase',
        'faecalibacterium' : 'decrease',
        'eschericiaColi' : 'increase',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'increase',
    },
    'smoking' : {
        'impact_scale': 0.8,
        'bifidobacterium' : 'decrease',
        'lactobacillus' : 'decrease',
        'bacteroides' : 'increase',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'increase',
        'roseburia' : 'null',
        'eubacterium' : 'decrease',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'decrease',
        'streptococcus' : 'null',
    },
    'antiBiotics' : {
        'impact_scale': 0.9,
        'bifidobacterium' : 'decrease',
        'lactobacillus' : 'decrease',
        'bacteroides' : 'increase',
        'alistipes' : 'decrease',
        'bilophila' : 'decrease',
        'clostridium' : 'decrease',
        'roseburia' : 'decrease',
        'eubacterium' : 'decrease',
        'enterococcus' : 'increase',
        'faecalibacterium' : 'decrease',
        'eschericiaColi' : 'decrease',
        'helicobacterPylori' : 'decrease',
        'streptococcus' : 'decrease',
    },
    'country' : {
        'impact_scale': 0.2,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'fermentedfood' : {
        'impact_scale': 0.6,
        'bifidobacterium' : 'increase',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'mediterranean' : {
        'impact_scale': 0.2,
        'bifidobacterium' : 'increase',
        'lactobacillus' : 'increase',
        'bacteroides' : 'increase',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'increase',
        'eubacterium' : 'increase',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'vegan' : {
        'impact_scale': 0.2,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'glutenfree' : {
        'impact_scale': 0.2,
        'bifidobacterium' : 'decrease',
        'lactobacillus' : 'decrease',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'decrease',
        'eubacterium' : 'decrease',
        'enterococcus' : 'increase',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'vegitarean' : {
        'impact_scale': 0.3,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'western' : {
        'impact_scale': 0.4,
        'bifidobacterium' : 'decrease',
        'lactobacillus' : 'decrease',
        'bacteroides' : 'decrease',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'decrease',
        'enterococcus' : 'increase',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'animalProtein' : {
        'impact_scale': 0.5,
        'bifidobacterium' : 'increase',
        'lactobacillus' : 'null',
        'bacteroides' : 'increase',
        'alistipes' : 'increase',
        'bilophila' : 'increase',
        'clostridium' : 'increase',
        'roseburia' : 'decrease',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'plantProtein' : {
        'impact_scale': 0.5,
        'bifidobacterium' : 'increase',
        'lactobacillus' : 'increase',
        'bacteroides' : 'decrease',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'decrease',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'complexCarbs' : {
        'impact_scale': 0.5,
        'bifidobacterium' : 'increase',
        'lactobacillus' : 'null',
        'bacteroides' : 'decrease',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'refinedCarbs' : {
        'impact_scale': 0.5,
        'bifidobacterium' : 'decrease',
        'lactobacillus' : 'decrease',
        'bacteroides' : 'increase',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'decrease',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'saturatedFats' : {
        'impact_scale': 0.5,
        'bifidobacterium' : 'null',
        'lactobacillus' : 'null',
        'bacteroides' : 'increase',
        'alistipes' : 'null',
        'bilophila' : 'increase',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'increase',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    },
    'unsaturatedFats' : {
        'impact_scale': 0.5,
        'bifidobacterium' : 'increase',
        'lactobacillus' : 'null',
        'bacteroides' : 'null',
        'alistipes' : 'null',
        'bilophila' : 'null',
        'clostridium' : 'null',
        'roseburia' : 'null',
        'eubacterium' : 'null',
        'enterococcus' : 'null',
        'faecalibacterium' : 'null',
        'eschericiaColi' : 'null',
        'helicobacterPylori' : 'null',
        'streptococcus' : 'null',
    }
}

allLifestyleImpacts = [
    'Height',
    'Weight',
    'Age',
    'Gender',
    'Exercise',
    'Sleep',
    'Smoking',
    'Stress',
    'Antibiotics',
    'Fermentedfood',
    'Location',
    'Mediterranean',
    'Vegan Diet',
    'Gluten Free Diet',
    'Vegitarian Diet',
    'Western Diet',
    'Animal Proteins',
    'Plant Proteins',
    'Complex Carbs',
    'Refined Carbs',
    'Saturated Fats',
    'Unsaturated Fats'
]