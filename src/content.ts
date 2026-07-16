// Site content — ported from the Claude Design "Aetnios Labs" theme.jsx CONTENT.

export type IconName = 'stack' | 'graph' | 'ai' | 'shield';

export const CONTENT = {
  brand: 'Aetnios',
  brandSuffix: 'Labs',
  nav: [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Work', href: '#work' },
    { label: 'Approach', href: '#approach' },
    { label: 'About', href: '#about' },
  ],
  hero: {
    eyebrow: 'Software · Data · Applied AI',
    title: ['Engineering intelligent software', 'for mission critical work'],
    sub: 'A software and data engineering studio. Full stack platforms, semantic knowledge graphs, and AI systems that turn complex information into dependable tools.',
    primary: 'Start a conversation',
    secondary: 'View capabilities',
    trust: ['Full stack delivery', 'Secure by design', 'Prototype to production'],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'What we build',
    sub: 'Senior engineering across the stack, from interface to ontology to model.',
    items: [
      {
        k: '01', icon: 'stack' as IconName,
        title: 'Full Stack Engineering',
        body: 'Complete web and application builds, interface modernization, and platform rebuilds, all delivered production ready and accessible.',
        tags: ['Web platforms', 'UI modernization', 'APIs'],
      },
      {
        k: '02', icon: 'graph' as IconName,
        title: 'Data & Knowledge Graphs',
        body: 'Semantic knowledge graphs, OWL ontologies, and Neo4j models, grounded in rigorous data cleaning, validation, and ETL pipelines.',
        tags: ['Ontologies', 'Neo4j', 'ETL & cleaning'],
      },
      {
        k: '03', icon: 'ai' as IconName,
        title: 'Applied AI & Agents',
        body: 'RAG pipelines, agent orchestration, and AI automation loops that put your own data to work: grounded, observable, and auditable.',
        tags: ['RAG pipelines', 'Agent orchestration', 'Automation'],
      },
      {
        k: '04', icon: 'shield' as IconName,
        title: 'Platform Modernization',
        body: 'Legacy modernization, system integration, and secure delivery for teams with real reliability and compliance requirements.',
        tags: ['Integration', 'Security', 'Reliability'],
      },
    ],
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Proof, not promises',
    sub: 'Studio projects you can open, query, and read the source of. Each one backs a capability we claim.',
    items: [
      {
        k: '01',
        title: 'Digital Thread',
        tags: ['Neo4j', 'Java & Spring Boot', 'Kafka', 'GraphQL'],
        body: 'Three federal aviation data feeds describe the same aircraft in three different vocabularies. Digital Thread resolves them into one governed Neo4j graph of 176,000+ nodes with SHACL gated loads, answering which aircraft a defect affects and which failures share a cause.',
        demo: 'https://digital-thread-query.onrender.com/',
        source: 'https://github.com/aetnios-labs/digitalthread',
      },
      {
        k: '02',
        title: 'SupplyGraph',
        tags: ['Neo4j', 'SPARQL & Cypher', 'Python ETL'],
        body: 'A pharmaceutical knowledge graph built from 3,000 openFDA drug label records, linking companies, products, and active ingredients. Plain English questions become Cypher queries, and every edge carries provenance enforced by SHACL, so each answer cites its source record.',
        demo: 'https://pharma-supply-chain-graph.vercel.app/index.html',
        source: 'https://github.com/aetnios-labs/pharma-supply-chain-graph',
      },
      {
        k: '03',
        title: 'Argos',
        tags: ['Agent orchestration', 'Python', 'Zero runtime dependencies'],
        body: 'Spec driven orchestration for AI coding agents. Argos queues tickets, runs planner, coder, and verifier agents in isolated git worktrees with narrow permissions, and checks the result against acceptance criteria. Agents build, the operator owns the merge.',
        demo: 'https://aetnios-labs.github.io/argos/',
        source: 'https://github.com/aetnios-labs/argos',
      },
      {
        k: '04',
        title: 'FinancePulse',
        tags: ['Next.js', 'Real time data'],
        body: 'A real time stock and cryptocurrency analysis platform with portfolio tracking, price alerts, and interactive charting, built end to end as a full stack Next.js application.',
        demo: 'https://financepulse.xyz/',
        source: 'https://github.com/aetnios-labs/FinancePulse',
      },
    ],
  },
  approach: {
    eyebrow: 'How we work',
    title: 'A disciplined path from problem to production',
    steps: [
      { n: '01', title: 'Discover', body: 'We map the problem, constraints, and data before a line of code is written.' },
      { n: '02', title: 'Architect', body: 'Systems designed for security, auditability, and change from day one.' },
      { n: '03', title: 'Build', body: 'Tight iterations, senior hands, production-grade throughout.' },
      { n: '04', title: 'Harden & hand off', body: 'Tested, documented, and delivered ready for your team to operate.' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'A boutique studio for dependable systems',
    body: [
      'Aetnios Labs works at the intersection of software, data, and applied AI. We partner with teams that need systems they can trust: full stack platforms, modern interfaces, semantic knowledge graphs, and grounded AI tooling.',
      'We work in small, senior teams, communicate plainly, and build for the long run. We are open to public sector and enterprise engagements.',
    ],
    values: [
      { title: 'Senior engineers only', body: 'The people who scope your work are the people who build it.' },
      { title: 'Secure & auditable', body: 'Reliability, traceability, and documentation are part of the build.' },
      { title: 'Grounded AI', body: 'No black boxes. AI systems you can inspect, evaluate, and trust.' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your project",
    sub: 'Tell us what you are trying to build. We respond within two business days.',
    email: 'contact@aetnios.com',
    note: 'Open to public sector and enterprise engagements.',
  },
  footer: {
    blurb: 'Building dependable software, data, and AI systems for forward-thinking teams.',
    cols: [
      { head: 'Capabilities', links: ['Full Stack Engineering', 'Data & Knowledge Graphs', 'Applied AI & Agents', 'Platform Modernization'] },
      { head: 'Company', links: ['About', 'Approach', 'Contact'] },
    ],
    copyright: '© 2026 Aetnios Labs. All rights reserved.',
  },
};
