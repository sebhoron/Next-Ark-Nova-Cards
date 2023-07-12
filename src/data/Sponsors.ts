import { CardSource } from '@/types/CardSource';
import { EffectType } from '@/types/Effect';
import { SponsorCard } from '@/types/SponsorCard';
import { AnimalTag, ContinentTag, OtherTag } from '@/types/Tags';
// import {Size} from "@/types/Size";

export const SponsorsData: SponsorCard[] = [
  {
    id: '201',
    name: 'SCIENCE LAB',
    // upper
    strength: 5, // Size;
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII],
    tags: [OtherTag.Science],

    // middle
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s201_desc1',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s201_desc2',
        display: false,
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s201_desc3',
      },
    ],
    // bottom
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,

    // meta data
    source: CardSource.BASE,
  },
  {
    id: '202',
    name: 'SPOKESPERSON',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Science],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s202_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '203',
    name: 'VETERINARIAN',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s203_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '204',
    name: 'SCIENCE MUSEUM',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [
      OtherTag.Science,
      OtherTag.Science,
      OtherTag.Science,
      OtherTag.Science,
    ],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s204_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '205',
    name: 'GORILLA FIELD RESEARCH',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Science, OtherTag.Science, OtherTag.Science],
    tags: [OtherTag.Science],
    effects: [],
    reputation: 2,
    appeal: 0,
    conservationPoint: 1,
    source: CardSource.BASE,
  },

  {
    id: '206',
    name: 'MEDICAL BREAKTHROUGH',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [
      OtherTag.Science,
      OtherTag.Science,
      OtherTag.Science,
      OtherTag.Science,
    ],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s206_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '207',
    name: 'BASIC RESEARCH',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII, OtherTag.Appeal],
    tags: [OtherTag.Science],

    // middle
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s207_desc1',
        fontSize: 'sm',
      },
    ],
    // bottom
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,

    // meta data
    source: CardSource.BASE,
  },

  {
    id: '208',
    name: 'SCIENCE LIBRARY',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [OtherTag.Science],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s208_desc1' },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s208_desc2',
        display: false,
      },
      { effectType: EffectType.ENDGAME, effectDesc: 'sponsors.s208_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '209',
    name: 'TECHNOLOGY INSTITUTE',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s209_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '210',
    name: 'EXPERT ON THE AMERICAS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [ContinentTag.Americas],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s210_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '211',
    name: 'EXPERT ON EUROPE',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [ContinentTag.Europe],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s211_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '212',
    name: 'EXPERT ON AUSTRALIA',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [ContinentTag.Australia],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s212_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '213',
    name: 'EXPERT ON ASIA',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [ContinentTag.Asia],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s213_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '214',
    name: 'EXPERT ON AFRICA',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [ContinentTag.Africa],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s214_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
  {
    id: '215',
    name: 'BREEDING COOPERATION',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Partner_Zoo, OtherTag.Partner_Zoo],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s215_desc1',
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s215_desc2',
        fontSize: 'md',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
  {
    id: '216',
    name: 'TALENTED COMMUNICATOR',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII],
    tags: [],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s216_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '217',
    name: 'ENGINEER',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s217_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '218',
    name: 'BREEDING PROGRAM',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Science, OtherTag.Science],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s218_desc1',
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s218_desc2',
        fontSize: 'md',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '219',
    name: 'DIVERSITY RESEARCHER',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s219_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s219_desc2',
        fontSize: 'md',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '220',
    name: 'FEDERAL GRANTS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s220_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '221',
    name: 'ARCHEOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Science],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s221_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '222',
    name: 'RELEASE OF PATENTS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Appeal],
    tags: [],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s222_desc1',
        fontSize: 'sm',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '223',
    name: 'SCIENCE INSTITUTE',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [OtherTag.Science, OtherTag.Science],
    effects: [],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '224',
    name: 'MIGRATION RECORDING',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Science],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s224_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '225',
    name: 'QUARANTINE LAB',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s225_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s225_desc2',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '226',
    name: 'FOREIGN INSTITUTE',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s226_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 2,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '227',
    name: 'WAZA SPECIAL ASSIGNMENT',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Reputation],
    tags: [],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s227_desc1',
        fontSize: 'sm',
        start: 1,
      },
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s227_desc2',
        fontSize: 'sm',
        start: 1,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '228',
    name: 'WAZA SMALL ANIMAL PROGRAM',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Reputation],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s228_desc1',
        fontSize: 'md',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '229',
    name: 'EXPERT IN SMALL ANIMALS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s229_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '230',
    name: 'EXPERT IN LARGE ANIMALS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s230_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
  {
    id: '231',
    name: 'SPONSORSHIP: PRIMATES',
    strength: 3,
    requirements: [AnimalTag.Primate],
    tags: [],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s231_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s231_desc2',
        display: false,
      },
    ],
    source: CardSource.BASE,
  },
  {
    id: '232',
    name: 'SPONSORSHIP: REPTILES',
    strength: 3,
    requirements: [AnimalTag.Reptile],
    tags: [],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s232_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s232_desc2',
        display: false,
      },
    ],
    source: CardSource.BASE,
  },
  {
    id: '233',
    name: 'SPONSORSHIP: VULTURES',
    strength: 3,
    requirements: [AnimalTag.Bird],
    tags: [],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s233_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s233_desc2',
        display: false,
      },
    ],
    source: CardSource.BASE,
  },
  {
    id: '234',
    name: 'SPONSORSHIP: LIONS',
    strength: 3,
    requirements: [AnimalTag.Predator],
    tags: [],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s234_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s234_desc2',
        display: false,
      },
    ],
    source: CardSource.BASE,
  },
  {
    id: '235',
    name: 'SPONSORSHIP: ELEPHANTS',
    strength: 3,
    requirements: [AnimalTag.Herbivore],
    tags: [],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s235_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s235_desc2',
        display: false,
      },
    ],
    source: CardSource.BASE,
  },
  {
    id: '236',
    name: 'PRIMATOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [AnimalTag.Primate],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s236_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '237',
    name: 'HERPETOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [AnimalTag.Reptile],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s237_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '238',
    name: 'ORNITHOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [AnimalTag.Bird],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s238_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '239',
    name: 'EXPERT IN PREDATORS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [AnimalTag.Predator],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s239_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '240',
    name: 'EXPERT IN HERBIVORES',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [AnimalTag.Herbivore],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s240_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '241',
    name: 'HYDROLOGIST',
    strength: 5,
    rock: 0,
    water: 1,
    requirements: [],
    tags: [OtherTag.Water],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s241_desc1' },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s241_desc2',
        display: false,
      },
      { effectType: EffectType.ENDGAME, effectDesc: 'sponsors.s241_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '242',
    name: 'GEOLOGIST',
    strength: 5,
    rock: 1,
    water: 0,
    requirements: [],
    tags: [OtherTag.Rock],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s242_desc1' },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s242_desc2',
        display: false,
      },
      { effectType: EffectType.ENDGAME, effectDesc: 'sponsors.s242_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '243',
    name: 'MEERKAT DEN',
    strength: 5,
    rock: 1,
    water: 0,
    requirements: [],
    tags: [AnimalTag.Herbivore],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s243_desc1' },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s243_desc2',
        display: false,
      },
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s243_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '244',
    name: 'PENGUIN POOL',
    strength: 5,
    rock: 0,
    water: 1,
    requirements: [OtherTag.Reputation],
    tags: [AnimalTag.Bird],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s244_desc1' },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s243_desc2',
        display: false,
      },
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s244_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '245',
    name: 'AQUARIUM',
    strength: 5,
    rock: 0,
    water: 2,
    requirements: [OtherTag.Reputation],
    tags: [],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s245_desc1' },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s245_desc2',
        display: false,
      },
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s245_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
  {
    id: '246',
    name: 'CABLE CAR',
    strength: 6,
    rock: 2,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s246_desc1' },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s246_desc2',
        display: false,
      },
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s246_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
  {
    id: '247',
    name: 'BABOON ROCK',
    strength: 6,
    rock: 1,
    water: 0,
    requirements: [],
    tags: [AnimalTag.Primate],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s247_desc1' },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s247_desc2',
        display: false,
      },
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s247_desc3' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '248',
    name: 'RHESUS MONKEY PARK',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [AnimalTag.Primate],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s248_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s248_desc2',
        display: false,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '249',
    name: 'BARRED OWL HUT',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [AnimalTag.Bird],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s249_desc1' },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s249_desc2',
        display: false,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '250',
    name: 'SEA TURTLE TANK',
    strength: 5,
    rock: 0,
    water: 1,
    requirements: [],
    tags: [AnimalTag.Reptile],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s250_desc1' },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s250_desc2',
        display: false,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '251',
    name: 'POLAR BEAR EXHIBIT',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [AnimalTag.Bear, AnimalTag.Predator],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s251_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s251_desc2',
        display: false,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '252',
    name: 'SPOTTED HYENA COMPOUND',
    strength: 5,
    rock: 1,
    water: 0,
    requirements: [],
    tags: [AnimalTag.Predator],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s252_desc1' },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s252_desc2',
        display: false,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '253',
    name: 'OKAPI STABLE',
    strength: 6,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [AnimalTag.Herbivore],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s253_desc1' },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s253_desc2',
        display: false,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '254',
    name: 'ZOO SCHOOL',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s254_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 1,
    appeal: 0,
    conservationPoint: 1,
    source: CardSource.BASE,
  },

  {
    id: '255',
    name: 'ADVENTURE PLAYGROUND',
    strength: 3,
    rock: 1,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s255_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 4,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '256',
    name: 'WATER PLAYGROUND',
    strength: 3,
    rock: 0,
    water: 1,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s256_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '257',
    name: 'SIDE ENTRANCE',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s257_desc1' },
      { effectType: EffectType.INCOME, effectDesc: 'sponsors.s257_desc2' },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s257_desc3',
        display: false,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '258',
    name: 'NATIVE SEABIRDS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Appeal],
    tags: [AnimalTag.Bird],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s258_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s258_desc2',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '259',
    name: 'NATIVE LIZARDS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Appeal],
    tags: [AnimalTag.Reptile],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s259_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s259_desc2',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '260',
    name: 'NATIVE FARM ANIMALS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Appeal],
    tags: [AnimalTag.Herbivore],
    effects: [
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s260_desc1' },
      { effectType: EffectType.ENDGAME, effectDesc: 'sponsors.s260_desc2' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '261',
    name: 'GUIDED SCHOOL TOURS',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s261_desc1',
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '262',
    name: 'EXPLORER',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII],
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s262_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s262_desc2',
        start: 48,
      },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },

  {
    id: '263',
    name: 'WAZA LARGE ANIMAL PROGRAM',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.SponsorsII, OtherTag.Reputation],
    tags: [],
    effects: [
      { effectType: EffectType.PASSIVE, effectDesc: 'sponsors.s263_desc1' },
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s263_desc2' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
  {
    id: '264',
    name: 'FREE-RANGE NEW WORLD MONKEYS',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Appeal],
    tags: [AnimalTag.Primate],
    effects: [
      { effectType: EffectType.IMMEDIATE, effectDesc: 'sponsors.s264_desc1' },
      { effectType: EffectType.ENDGAME, effectDesc: 'sponsors.s264_desc2' },
    ],
    reputation: 0,
    appeal: 0,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
  {
    id: '265',
    name: 'FRANCHISE BUSINESS',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Kiosk],
    tags: [],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s265_desc1',
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s265_desc2',
        display: false,
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s265_desc3',
        display: false,
        fontSize: 'lg',
      },
    ],
    reputation: 0,
    appeal: 2,
    conservationPoint: 0,
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '266',
    name: 'MARINE BIOLOGIST',
    strength: 4,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [AnimalTag.SeaAnimal],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s266_desc1',
        fontSize: 'lg',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '267',
    name: 'FARM CAT',
    strength: 5,
    rock: 0,
    water: 0,
    requirements: [OtherTag.Appeal],
    tags: [AnimalTag.Predator],
    effects: [
      { effectType: EffectType.IMMEDIATE, effectDesc: '', display: false },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s267_desc1',
        fontSize: 'lg',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '268',
    name: 'CONFERENCE ON EUROPE',
    strength: 5,
    rock: 0,
    water: 0,
    tags: [ContinentTag.Europe],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s268_desc1',
        display: true,
        fontSize: 'lg',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s268_desc2',
        display: true,
        fontSize: 'lg',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '269',
    name: 'CONFERENCE ON AUSTRALIA',
    strength: 5,
    rock: 0,
    water: 0,
    tags: [ContinentTag.Australia],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s269_desc1',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s269_desc2',
        display: true,
        fontSize: 'md',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '270',
    name: 'MARINE RESEARCH EXPEDITION',
    strength: 5,
    rock: 0,
    water: 0,
    tags: [OtherTag.Science, AnimalTag.SeaAnimal],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s270_desc1',
        display: true,
        fontSize: 'lg',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '271',
    name: 'EXCAVATION SITE',
    strength: 5,
    rock: 0,
    water: 0,
    tags: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s271_desc1',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s271_desc2',
        display: true,
        fontSize: 'md',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '272',
    name: 'EXCAVATION SITE',
    strength: 5,
    rock: 0,
    water: 0,
    tags: [],
    requirements: [OtherTag.SponsorsII],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s272_desc1',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s272_desc2',
        display: true,
        fontSize: 'md',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '273',
    name: 'PUBLICATIONS',
    strength: 4,
    rock: 0,
    water: 0,
    tags: [OtherTag.Science],
    requirements: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s273_desc1',
        display: true,
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s273_desc2',
        display: true,
        fontSize: 'lg',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '274',
    name: 'MASCOT STATUE',
    strength: 3,
    rock: 0,
    water: 0,
    tags: [OtherTag.Science],
    requirements: [OtherTag.Science],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s274_desc1',
        display: true,
        fontSize: 'lg',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s274_desc2',
        display: true,
        fontSize: 'lg',
      },
    ],
    appeal: 1,
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '275',
    name: 'HORSE WHISPERER',
    strength: 3,
    rock: 0,
    water: 0,
    tags: [AnimalTag.Pet],
    requirements: [OtherTag.Reputation],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s275_desc1',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s275_desc2',
        display: true,
        fontSize: 'md',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '276',
    name: 'LANDSCAPE GARDENER',
    strength: 6,
    rock: 0,
    water: 0,
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s276_desc1',
        display: true,
        fontSize: 'lg',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s276_desc2',
        display: false,
        fontSize: 'lg',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '277',
    name: 'FIELD RESEARCH TYPE D ORCAS',
    strength: 3,
    rock: 0,
    water: 0,
    tags: [OtherTag.Science],
    requirements: [OtherTag.Science, OtherTag.Science, AnimalTag.SeaAnimal],
    effects: [],
    reputation: 3,
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '278',
    name: 'AMAZON HOUSE',
    strength: 6,
    rock: 1,
    water: 1,
    tags: [AnimalTag.SeaAnimal, AnimalTag.Herbivore, AnimalTag.Primate],
    requirements: [
      OtherTag.SponsorsII,
      ContinentTag.Americas,
      OtherTag.Reputation,
    ],
    effects: [
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s278_desc1',
        display: true,
        fontSize: 'lg',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '279',
    name: 'UNDERWATER TUNNEL',
    strength: 4,
    rock: 0,
    water: 0,
    tags: [],
    requirements: [OtherTag.SponsorsII],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s279_desc1',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s279_desc2',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s279_desc3',
        display: true,
        fontSize: 'md',
      },
    ],
    appeal: 2,
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '280',
    name: 'RECONSTRUCTION',
    strength: 3,
    rock: 0,
    water: 0,
    tags: [],
    effects: [
      {
        effectType: EffectType.PASSIVE,
        effectDesc: 'sponsors.s280_desc1',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.IMMEDIATE,
        effectDesc: 'sponsors.s280_desc2',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s280_desc3',
        display: false,
        fontSize: 'md',
      },
    ],
    source: CardSource.MARINE_WORLD,
  },
  {
    id: '281',
    name: 'ARCADE',
    strength: 3,
    rock: 0,
    water: 0,
    requirements: [],
    tags: [],
    effects: [
      {
        effectType: EffectType.INCOME,
        effectDesc: 'sponsors.s281_desc1',
        display: true,
        fontSize: 'md',
      },
      {
        effectType: EffectType.ENDGAME,
        effectDesc: 'sponsors.s281_desc2',
        display: true,
        fontSize: 'md',
      },
    ],
    reputation: 0,
    appeal: 2,
    conservationPoint: 0,
    source: CardSource.BASE,
  },
];
