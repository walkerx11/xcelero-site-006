export interface Insight {
  id: string;
  title: string;
  date: string;
  category: string;
  author: string;
  summary: string;
  content: string[];
  image?: string;
  imageCover?: string;
}

export const insightsData: Insight[] = [
  {
    id: "sovereign-energy-microgrids",
    title: "Sovereign Energy: The Case for Next-Gen Microgrids in the Global South",
    date: "October 12, 2025",
    category: "Energy",
    author: "Dr. Amina Touré",
    summary: "Why decentralized energy grids are not just a climate imperative, but a sovereign necessity for leapfrogging legacy infrastructure.",
    content: [
      "The traditional model of centralized power generation relies on heavy infrastructure, massive capital expenditure, and decades of rollout. For many regions, this model is not just slow; it's a bottleneck to civilizational progress.",
      "Enter next-generation microgrids. By combining advanced non-lithium storage, solar, and small-scale geothermal, communities can bypass the national grid entirely.",
      "At xCelero Labs, we are piloting autonomous energy clusters in three of our XHansa HUBS. These aren't just backups—they are the primary engines keeping prototyping labs and wet labs online 24/7 without fail.",
      "The sovereignty of a nation begins with its ability to power its own tools. That's what we are building."
    ]
  },
  {
    id: "algorithmic-agriculture-yields",
    title: "Algorithmic Agriculture and the Future of Food Security",
    date: "November 04, 2025",
    category: "Bio-Systems",
    author: "Elias Vance",
    summary: "How edge computing and real-time planetary monitoring are creating hyper-resilient crop cycles.",
    content: [
      "Agriculture is the oldest critical technology. Today it faces unprecedented climate volatility. The answer isn't just better seeds, but better nervous systems for the soil.",
      "Algorithmic agriculture uses edge AI and distributed sensors to monitor moisture, nutrient levels, and microbial health in real-time. This isn't theoretical—it's being deployed in the fields right now.",
      "Our recent pilot in the Sahel demonstrated a 40% reduction in water usage while maintaining crop yields, achieved entirely through sovereign compute nodes that don't rely on cloud connections.",
      "Food security is a foundation of the Civilization Stack. By writing better algorithms for our agriculture, we can feed the next billion without depleting the earth."
    ]
  },
  {
    id: "decentralized-manufacturing-nodes",
    title: "The XEmbassy Blueprint: Distributed Manufacturing at Scale",
    date: "December 01, 2025",
    category: "Infrastructure",
    author: "xCelero Systems Team",
    summary: "Unpacking the architecture behind our 42,000 sq ft physical nodes and why we believe the future of manufacturing is local, modular, and agile.",
    content: [
      "Heavy industry doesn't have to mean massive, distant factories. The XEmbassy model flips this paradigm by creating high-density, multi-disciplinary prototyping labs close to the point of invention.",
      "Inside a single XEmbassy, you'll find CNC machines, biosafety cabinets, and clean benches co-located with open software workspaces. This radical proximity smashes the barrier between bits and atoms.",
      "When a software engineer sits next to a mechanical engineer operating a 5-axis mill, iteration cycles drop from months to hours. This is the Sovereign Agile Laboratory.",
      "We are expanding this blueprint to 190 hubs. By distributing the means of deep-tech production, we ensure that innovation can take root anywhere, instantly."
    ]
  }
];
