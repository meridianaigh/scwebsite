export type ProductSlug = 'ginger' | 'cocoa' | 'coffee' | 'shea-butter' | 'charcoal' | 'gold';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: ProductSlug;
  number: string;
  name: string;
  tagline: string;
  image: string;
  formats: string[];
  origin: string;
  moq: string;
  packaging: string;
  leadTime: string;
  ports: string[];
  specs: ProductSpec[];
  buyerSpecs: string[];
  isPreciousMetals?: boolean;
  preciousMetalsDescription?: string[];
  ctaLabel: string;
}

export const products: Product[] = [
  {
    slug: 'ginger',
    number: '01',
    name: 'Dried Ginger',
    tagline: 'Whole · Sliced · Powder',
    image: 'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    formats: ['Whole', 'Sliced', 'Powder'],
    origin: 'Northern and Far North Cameroon, subject to supplier availability and verification.',
    moq: '2 MT',
    packaging: 'Selected according to product format, quality requirements and order volume.',
    leadTime: '10–21 days',
    ports: ['Douala Port', 'Kribi Deep Sea Port'],
    specs: [
      { label: 'Format', value: 'Whole · Sliced · Powder' },
      { label: 'MOQ', value: '2 MT' },
      { label: 'Origin', value: 'Northern / Far North Cameroon' },
    ],
    buyerSpecs: [
      'Moisture',
      'Foreign matter',
      'Size / cut',
      'Color',
      'Microbiological parameters',
      'Destination-specific requirements',
    ],
    ctaLabel: 'Detailed Specs',
  },
  {
    slug: 'cocoa',
    number: '02',
    name: 'Cocoa',
    tagline: 'Cameroon cocoa sourced through verified suppliers',
    image: 'https://images.pexels.com/photos/5208267/pexels-photo-5208267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    formats: ['Raw cocoa beans'],
    origin: 'Cameroon, sourced through verified suppliers. Exact origin confirmed per transaction.',
    moq: '2 MT',
    packaging: 'Subject to buyer requirements and order volume.',
    leadTime: '10–21 days',
    ports: ['Douala Port', 'Kribi Deep Sea Port'],
    specs: [
      { label: 'Format', value: 'Raw cocoa beans' },
      { label: 'MOQ', value: '2 MT' },
      { label: 'Origin', value: 'Cameroon (verified suppliers)' },
    ],
    buyerSpecs: [
      'Origin',
      'Grade',
      'Bean count',
      'Moisture',
      'Fermentation',
      'Defect levels',
      'Foreign matter',
      'Mold / slaty beans',
      'Crop / harvest',
      'Packaging',
    ],
    ctaLabel: 'Detailed Specs',
  },
  {
    slug: 'coffee',
    number: '03',
    name: 'Coffee',
    tagline: '100% Arabica · 70% Arabica / 30% Robusta',
    image: 'https://images.pexels.com/photos/15312642/pexels-photo-15312642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    formats: ['100% Arabica', '70% Arabica / 30% Robusta'],
    origin: 'Western Cameroon and other verified producing areas where applicable.',
    moq: '2 MT',
    packaging: 'Subject to buyer requirements and order volume.',
    leadTime: '10–21 days',
    ports: ['Douala Port', 'Kribi Deep Sea Port'],
    specs: [
      { label: 'Format', value: '100% Arabica · 70/30 Blend' },
      { label: 'MOQ', value: '2 MT' },
      { label: 'Origin', value: 'Western Cameroon' },
    ],
    buyerSpecs: [
      'Bean type',
      'Grade',
      'Screen size',
      'Moisture',
      'Defect count',
      'Processing method',
      'Cup profile',
      'Crop / harvest',
      'Packaging',
    ],
    ctaLabel: 'Detailed Specs',
  },
  {
    slug: 'shea-butter',
    number: '04',
    name: 'Shea Butter',
    tagline: 'Refined · Unrefined',
    image: 'https://images.pexels.com/photos/8015483/pexels-photo-8015483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    formats: ['Refined', 'Unrefined'],
    origin: 'Northern / Far North Cameroon, subject to supplier availability and verification.',
    moq: '2 MT',
    packaging: 'Subject to buyer requirements and order volume.',
    leadTime: '10–21 days',
    ports: ['Douala Port', 'Kribi Deep Sea Port'],
    specs: [
      { label: 'Format', value: 'Refined · Unrefined' },
      { label: 'MOQ', value: '2 MT' },
      { label: 'Origin', value: 'Northern / Far North Cameroon' },
    ],
    buyerSpecs: [
      'Refined / Unrefined',
      'Color',
      'Odor',
      'Moisture',
      'Free fatty acids',
      'Peroxide value',
      'Impurities',
      'Packaging',
    ],
    ctaLabel: 'Detailed Specs',
  },
  {
    slug: 'charcoal',
    number: '05',
    name: 'Charcoal',
    tagline: 'Wood type and quality per buyer specification',
    image: 'https://images.pexels.com/photos/10709388/pexels-photo-10709388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    formats: ['Lump charcoal'],
    origin: 'Cameroon, subject to supplier availability and verification. All sourcing must comply with applicable laws and destination requirements.',
    moq: '10 MT',
    packaging: 'Subject to buyer requirements and order volume.',
    leadTime: '10–21 days',
    ports: ['Douala Port', 'Kribi Deep Sea Port'],
    specs: [
      { label: 'Format', value: 'Lump charcoal' },
      { label: 'MOQ', value: '10 MT' },
      { label: 'Origin', value: 'Cameroon (verified suppliers)' },
    ],
    buyerSpecs: [
      'Wood type / source',
      'Fixed carbon',
      'Ash content',
      'Moisture',
      'Volatile matter',
      'Calorific value',
      'Lump size',
      'Foreign matter',
      'Packaging',
    ],
    ctaLabel: 'Detailed Specs',
  },
  {
    slug: 'gold',
    number: '06',
    name: 'Gold & Precious Metals',
    tagline: 'Buyer Representation & Trade Facilitation',
    image: 'https://images.pexels.com/photos/8442325/pexels-photo-8442325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    formats: ['Buyer representation'],
    origin: 'Subject to transaction-specific verification and licensed participant coordination.',
    moq: 'Available upon request',
    packaging: 'Subject to transaction structure and licensed participant coordination.',
    leadTime: 'Subject to transaction structure',
    ports: ['Subject to transaction structure'],
    specs: [
      { label: 'Service', value: 'Buyer Representation & Trade Facilitation' },
      { label: 'MOQ', value: 'Available upon request' },
      { label: 'Target Markets', value: 'Qatar · Singapore · China' },
    ],
    buyerSpecs: [],
    isPreciousMetals: true,
    preciousMetalsDescription: [
      'Buyer representation',
      'Counterparty verification',
      'Transaction coordination',
      'Documentation review',
      'KYC coordination',
      'Licensed participant coordination',
      'Transaction support',
    ],
    ctaLabel: 'Enquire About Precious Metals',
  },
];

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
