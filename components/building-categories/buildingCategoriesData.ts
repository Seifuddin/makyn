export interface BuildingCategory {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  overview: string;
  image: string;
  examples: string[];
  features: {
    title: string;
    description: string;
  }[];
  processIntro: string;
}

export const buildingCategories: BuildingCategory[] = [
  {
    slug: "residential",
    number: "01",
    title: "Residential Construction",
    shortTitle: "Residential",
    subtitle: "Building homes. Creating lasting value.",
    description:
      "Thoughtfully planned and carefully executed residential developments designed around the way people live.",
    overview:
      "A home is more than a structure. It is a place where families grow, memories are created and everyday life unfolds. At Makyn Construction, we recognise the importance of creating residential spaces that combine functionality, comfort, durability and thoughtful design.",
    image: "/images/buildings/residential.jpeg",
    examples: [
      "Private Homes",
      "Bungalows",
      "Maisonettes",
      "Apartment Buildings",
      "Townhouses",
      "Luxury Villas",
    ],
    features: [
      {
        title: "Functional Living Spaces",
        description:
          "Well-considered spaces designed around comfort, usability and everyday living.",
      },
      {
        title: "Quality Construction",
        description:
          "Careful attention to materials, workmanship and structural quality.",
      },
      {
        title: "Thoughtful Finishing",
        description:
          "Finishing details that contribute to attractive and practical living environments.",
      },
    ],
    processIntro:
      "We approach residential construction with careful planning, attention to detail and an understanding of the needs of the people who will occupy the space.",
  },

  {
    slug: "commercial",
    number: "02",
    title: "Commercial Construction",
    shortTitle: "Commercial",
    subtitle: "Building spaces where business thrives.",
    description:
      "Modern commercial developments designed to support businesses, enhance functionality and create lasting value.",
    overview:
      "Commercial spaces play an important role in business operations, customer experiences and economic growth. We approach commercial construction with a focus on practical layouts, durability, functionality and professional presentation.",
    image: "/images/buildings/commercial.jpg",
    examples: [
      "Office Buildings",
      "Shopping Centres",
      "Retail Spaces",
      "Supermarkets",
      "Hotels",
      "Restaurants",
    ],
    features: [
      {
        title: "Business Functionality",
        description:
          "Spaces planned to accommodate business operations and customer requirements.",
      },
      {
        title: "Practical Design",
        description:
          "Layouts that make effective use of available space and support daily activities.",
      },
      {
        title: "Professional Finishing",
        description:
          "Attention to presentation, durability and the overall quality of the building.",
      },
    ],
    processIntro:
      "Our commercial construction approach considers the purpose of the building, its users, operational requirements and long-term functionality.",
  },

  {
    slug: "institutional",
    number: "03",
    title: "Institutional Construction",
    shortTitle: "Institutional",
    subtitle: "Building spaces that serve communities.",
    description:
      "Purpose-driven institutional environments designed to support education, healthcare and essential community services.",
    overview:
      "Institutional buildings serve important social functions. From learning environments to healthcare facilities, these structures require thoughtful planning, practical layouts and attention to safety, accessibility and durability.",
    image: "/images/buildings/institutional.avif",
    examples: [
      "Schools",
      "Universities",
      "Colleges",
      "Hospitals",
      "Clinics",
      "Training Centres",
    ],
    features: [
      {
        title: "Purpose-Driven Spaces",
        description:
          "Layouts developed around the specific functions and requirements of each institution.",
      },
      {
        title: "Safety & Accessibility",
        description:
          "Consideration of safe movement, accessibility and practical building requirements.",
      },
      {
        title: "Long-Term Durability",
        description:
          "Construction considerations that support buildings designed for continued public use.",
      },
    ],
    processIntro:
      "We recognise that institutional facilities must serve people effectively. Our approach places emphasis on functionality, planning and quality execution.",
  },

  {
    slug: "industrial",
    number: "04",
    title: "Industrial Construction",
    shortTitle: "Industrial",
    subtitle: "Building infrastructure for productivity.",
    description:
      "Practical industrial facilities developed to support manufacturing, storage, processing and operational activities.",
    overview:
      "Industrial facilities require careful consideration of operational demands, structural requirements, circulation and available working space. Our approach focuses on developing functional environments suited to their intended industrial use.",
    image: "/images/buildings/Industrial.jpeg",
    examples: [
      "Factories",
      "Warehouses",
      "Workshops",
      "Manufacturing Plants",
      "Processing Facilities",
      "Industrial Storage",
    ],
    features: [
      {
        title: "Operational Efficiency",
        description:
          "Space planning that considers movement, workflow and industrial activities.",
      },
      {
        title: "Structural Considerations",
        description:
          "Attention to the structural requirements and intended use of each facility.",
      },
      {
        title: "Practical Layouts",
        description:
          "Functional arrangements that support storage, production and daily operations.",
      },
    ],
    processIntro:
      "Industrial construction begins with understanding the intended operations, site requirements and technical considerations of the facility.",
  },

  {
    slug: "religious",
    number: "05",
    title: "Religious Construction",
    shortTitle: "Religious",
    subtitle: "Building spaces for faith and community.",
    description:
      "Purposeful worship and fellowship environments designed to accommodate congregations and community gatherings.",
    overview:
      "Religious buildings are important gathering places that bring communities together. Their construction requires an understanding of space, congregation requirements, functionality and the intended architectural character.",
    image: "/images/buildings/Religious.jpg",
    examples: [
      "Churches",
      "Mosques",
      "Worship Halls",
      "Religious Centres",
      "Fellowship Halls",
      "Community Worship Spaces",
    ],
    features: [
      {
        title: "Purposeful Spaces",
        description:
          "Layouts that consider congregation size, movement and intended activities.",
      },
      {
        title: "Architectural Character",
        description:
          "Thoughtful attention to the architectural identity and appearance of each building.",
      },
      {
        title: "Community Functionality",
        description:
          "Spaces designed to accommodate worship, fellowship and community interaction.",
      },
    ],
    processIntro:
      "We approach religious construction with respect for the purpose of the facility and the needs of the community it is intended to serve.",
  },

  {
    slug: "recreational",
    number: "06",
    title: "Recreational Construction",
    shortTitle: "Recreational",
    subtitle: "Building spaces for activity and connection.",
    description:
      "Functional leisure, sporting and entertainment facilities designed to bring people together.",
    overview:
      "Recreational facilities provide spaces for sports, entertainment, fitness and social interaction. Their design and construction must consider usability, circulation, safety and the activities they are intended to accommodate.",
    image: "/images/buildings/recreational.webp",
    examples: [
      "Sports Halls",
      "Gymnasiums",
      "Fitness Centres",
      "Entertainment Centres",
      "Indoor Arenas",
      "Community Recreation Centres",
    ],
    features: [
      {
        title: "Activity-Focused Design",
        description:
          "Spaces planned around the activities and experiences they will accommodate.",
      },
      {
        title: "User Comfort",
        description:
          "Consideration of movement, accessibility and the comfort of facility users.",
      },
      {
        title: "Functional Environments",
        description:
          "Practical facilities designed to support recreational and sporting activities.",
      },
    ],
    processIntro:
      "Our approach considers the intended activities, user requirements and functional demands of each recreational facility.",
  },

  {
    slug: "agricultural",
    number: "07",
    title: "Agricultural Construction",
    shortTitle: "Agricultural",
    subtitle: "Building infrastructure for agriculture.",
    description:
      "Purpose-built agricultural structures designed to support farming, livestock management and agricultural production.",
    overview:
      "Agricultural buildings support essential farming activities and require practical planning based on their intended use. We consider functionality, ventilation, space utilisation and the operational requirements of each agricultural structure.",
    image: "/images/buildings/agricultural.webp",
    examples: [
      "Poultry Houses",
      "Livestock Shelters",
      "Barns",
      "Greenhouses",
      "Farm Storage Facilities",
      "Agricultural Workshops",
    ],
    features: [
      {
        title: "Purpose-Built Structures",
        description:
          "Facilities planned around specific agricultural and farming activities.",
      },
      {
        title: "Practical Functionality",
        description:
          "Attention to space, access and the operational needs of agricultural facilities.",
      },
      {
        title: "Environmental Considerations",
        description:
          "Consideration of ventilation, drainage and relevant site conditions.",
      },
    ],
    processIntro:
      "We consider the specific agricultural activities, environmental conditions and practical requirements that influence each structure.",
  },

  {
    slug: "public",
    number: "08",
    title: "Public & Civic Construction",
    shortTitle: "Public & Civic",
    subtitle: "Building facilities that serve society.",
    description:
      "Functional public facilities designed to support essential services, civic activities and community development.",
    overview:
      "Public and civic buildings serve communities and support important administrative and social functions. These facilities require thoughtful planning, accessibility, functionality and attention to their long-term public use.",
    image: "/images/buildings/Public.jpg",
    examples: [
      "Government Offices",
      "Police Stations",
      "Fire Stations",
      "Courthouses",
      "Public Libraries",
      "Community Centres",
    ],
    features: [
      {
        title: "Public Accessibility",
        description:
          "Layouts that consider the movement and accessibility needs of different users.",
      },
      {
        title: "Functional Planning",
        description:
          "Spaces organised around administrative, operational and community requirements.",
      },
      {
        title: "Durable Construction",
        description:
          "Attention to construction quality and the demands of public facilities.",
      },
    ],
    processIntro:
      "We approach public and civic construction with an emphasis on practical planning, accessibility and the needs of the communities these facilities serve.",
  },
];