export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const insights: InsightPost[] = [
  {
    slug: 'understanding-cameroon-sourcing-market',
    title: 'Understanding Cameroon as a Sourcing Market',
    excerpt:
      "An overview of Cameroon's position within Central African trade, its key export commodities, and what international buyers should understand before engaging suppliers in the region.",
    category: 'Market Overview',
    date: '2025-09-15',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/30255157/pexels-photo-30255157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'what-buyers-should-verify',
    title: 'What International Buyers Should Verify Before Sourcing from Central Africa',
    excerpt:
      'A practical guide to the verification steps that help reduce risk when sourcing commodities from Cameroon and the broader CEMAC region — from supplier identity to documentation review.',
    category: 'Buyer Guidance',
    date: '2025-09-10',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'farm-to-port-export-supply-chain',
    title: "From Farm to Port: Understanding Cameroon's Export Supply Chain",
    excerpt:
      'Tracing the path of Central African commodities from agricultural origin to port of export, and the coordination required at each stage of the supply chain.',
    category: 'Supply Chain',
    date: '2025-09-05',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/14020705/pexels-photo-14020705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'trade-documentation-reduces-risk',
    title: 'How Trade Documentation Reduces Transaction Risk',
    excerpt:
      'Why proper commercial, export, quality and shipping documentation is central to reducing execution risk in international commodity transactions.',
    category: 'Trade Documentation',
    date: '2025-08-28',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'why-buyer-verification-matters',
    title: 'Why Buyer Verification Matters in Commodity Trade',
    excerpt:
      'Verification is not only about suppliers. Buyer-side KYC and AML procedures play a critical role in ensuring smooth, compliant transactions.',
    category: 'Compliance',
    date: '2025-08-20',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'cocoa-coffee-opportunity',
    title: "Cocoa, Coffee and the Opportunity in Cameroon's Agricultural Supply Chain",
    excerpt:
      "Cameroon's cocoa and coffee sectors represent a significant opportunity for international buyers — but accessing them requires the right sourcing and verification approach.",
    category: 'Commodities',
    date: '2025-08-12',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/5252060/pexels-photo-5252060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
