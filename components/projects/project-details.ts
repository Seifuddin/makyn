
export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ProjectDetail = {
  eyebrow: string;
  headline: string;
  intro: string;
  overview: string[];
  highlights: string[];
  process: { title: string; description: string }[];
  priceHeading: string;
  priceRange: string;
  priceUnit: string;
  priceNote: string;
  priceFactors: string[];
  gallery: string[];
  faqs: ServiceFAQ[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "residential-building": {
    eyebrow: "Building Construction",
    headline: "Build with confidence. Build for the future.",
    intro:
      "From the first site assessment to the finishing touches, successful building construction requires careful planning, sound technical decisions and coordinated workmanship. Makyn Construction works toward spaces that serve their purpose, respect the agreed scope and are built with long-term use in mind.",
    overview: [
      "Building construction brings together site preparation, foundations, structural work, walling, roofing, building services and finishes. Every stage depends on the quality of the work that came before it, making planning and supervision essential.",
      "Whether you are planning a family home, rental property, commercial space or another building project, the process should begin with a clear brief, suitable professional designs, a realistic budget and an agreed programme of work.",
      "The scope of a construction contract should clearly explain what is included, which materials and finishes are specified, how progress is measured and how changes are approved. This helps reduce misunderstandings and makes financial decisions easier to manage."
    ],
    highlights: [
      "Residential and selected commercial building projects",
      "Foundation, structural and walling works",
      "Roofing, ceilings and finishing coordination",
      "Material planning and construction-stage coordination",
      "Quality checks at agreed milestones"
    ],
    process: [
      {
        title: "Consultation and site assessment",
        description:
          "Discuss the intended use, preferred size, site conditions, budget and priorities. Soil conditions, access, drainage and the plot layout may influence the design and construction approach."
      },
      {
        title: "Design, approvals and budgeting",
        description:
          "Coordinate suitable architectural and structural professionals, required approvals and a detailed scope of work. A measured Bill of Quantities (BoQ) helps define the work and compare costs."
      },
      {
        title: "Groundworks and structure",
        description:
          "After the necessary checks and approvals, work can progress through setting out, excavation, foundations, reinforcement, concrete, walling and other specified structural stages."
      },
      {
        title: "Roofing and building services",
        description:
          "Install the specified roof structure and covering, and coordinate plumbing, drainage and electrical work with the construction sequence and approved drawings."
      },
      {
        title: "Finishes, inspection and handover",
        description:
          "Complete plastering, flooring, ceilings, painting, fittings and external works as contracted. Review outstanding items, test relevant installations and document agreed handover requirements."
      }
    ],
    priceHeading: "Indicative residential construction costs in Kenya",
    priceRange: "KSh 32,000–95,000+",
    priceUnit: "per m² of floor area",
    priceNote:
      "This is a broad budgeting guide, not a Makyn quotation. Published estimates differ by location, specification, finish level and what the rate includes. It is not a substitute for drawings, a BoQ and a site-specific estimate.",
    priceFactors: [
      "Floor area, number of storeys and building complexity",
      "Soil conditions, foundation requirements and site access",
      "Structural system, roof type and material specification",
      "Doors, windows, flooring, ceilings and finish quality",
      "Plumbing, electrical installations and external works",
      "Professional fees, approvals, transport and contingency"
    ],
    gallery: [
      "/images/projects/homes.jpg",
      "/images/projects/finishing.jpeg",
      "/images/projects/Architecture.jpeg",
      "/images/projects/construction.jpg"
    ],
    faqs: [
      {
        question: "How much does it cost to build a house in Kenya?",
        answer:
          "The cost depends on floor area, site conditions, design, finishes and the scope included in the contract. Per-square-metre figures are useful for early budgeting, but a BoQ and project-specific quotation provide a more reliable estimate."
      },
      {
        question: "How long does building construction take?",
        answer:
          "The programme depends on the size and complexity of the building, approvals, weather, material availability and finishing requirements. A realistic schedule should be agreed after the scope and construction method are established."
      },
      {
        question: "Can I build in stages?",
        answer:
          "Phased construction may be possible when the design, structural requirements, weather protection and budget are planned together. Structural decisions should not be improvised to fit short-term funding."
      },
      {
        question: "What should I prepare before construction starts?",
        answer:
          "Prepare your plot information, intended room requirements, budget, suitable drawings and approvals, and an agreed scope of work. Confirm responsibilities, payment milestones and how variations will be handled."
      }
    ]
  },

  renovations: {
    eyebrow: "Renovations & Remodelling",
    headline: "Give existing spaces a better future.",
    intro:
      "A well-planned renovation can improve comfort, appearance, usability and maintenance without starting from scratch. From refreshing tired finishes to reworking selected rooms, the key is understanding the building's existing condition before deciding what to change.",
    overview: [
      "Renovation covers a wide range of work, including repairing damaged surfaces, replacing floors, updating ceilings, repainting, improving kitchens and bathrooms, and refreshing interior or exterior spaces.",
      "Remodelling can also involve changing room layouts, improving circulation or upgrading selected building services. Where structural elements, electrical installations or plumbing systems are affected, the work must be assessed and handled by appropriately qualified professionals.",
      "An effective renovation begins with identifying the underlying problem. Covering dampness, cracks or leaks without resolving their cause can lead to repeated repairs and unnecessary expense."
    ],
    highlights: [
      "Interior and exterior renovation work",
      "Room upgrades and selected remodelling",
      "Floor, wall and ceiling improvements",
      "Kitchen and bathroom refurbishment",
      "Repair planning and finishing coordination"
    ],
    process: [
      {
        title: "Inspect the existing property",
        description:
          "Review the condition of surfaces, fittings, moisture-prone areas and any visible defects. Determine which items can be retained, repaired or replaced."
      },
      {
        title: "Define the renovation scope",
        description:
          "Agree which rooms and elements will be changed, the expected finish level, the budget and how occupants or business operations will be affected."
      },
      {
        title: "Prepare and protect",
        description:
          "Plan material deliveries, isolate work areas where necessary and protect surfaces that will remain. Removal work should be controlled and appropriate for the building."
      },
      {
        title: "Repair and install",
        description:
          "Address identified defects, complete agreed repairs and install specified flooring, ceilings, fittings or other improvements in a coordinated sequence."
      },
      {
        title: "Finish and inspect",
        description:
          "Complete painting and finishing, check workmanship against the agreed scope, resolve defects and review the completed work with the client."
      }
    ],
    priceHeading: "Indicative renovation budgets in Kenya",
    priceRange: "KSh 30,000–8,000,000+",
    priceUnit: "per project, depending on scope",
    priceNote:
      "This very broad range covers different types and sizes of renovation, from limited room improvements to extensive whole-property work. It is not a single package price. Inspection and a written scope are needed before a meaningful estimate can be prepared.",
    priceFactors: [
      "Number and size of rooms being renovated",
      "Condition of existing walls, floors, roof and fittings",
      "Whether plumbing or electrical work is required",
      "Demolition, disposal and protection requirements",
      "Material choices, custom joinery and finish quality",
      "Whether the property remains occupied during work"
    ],
    gallery: [
      "/images/projects/homes.jpg",
      "/images/projects/finishing.jpeg",
      "/images/projects/Architecture.jpeg",
      "/images/projects/construction.jpg"
    ],
    faqs: [
      {
        question: "How much does house renovation cost in Kenya?",
        answer:
          "A small room refresh may cost far less than a full-house renovation. The existing condition, material choices, room sizes and services affected all influence the total. A site assessment is the best starting point."
      },
      {
        question: "Can renovation work be done while a building is occupied?",
        answer:
          "Often, depending on the scope. Work areas, access, dust, noise, water or power interruptions and safety arrangements should be planned before work begins."
      },
      {
        question: "Should damaged areas be repaired before painting?",
        answer:
          "Yes. Cracks, loose plaster, moisture and peeling paint should be assessed and the underlying cause addressed before applying new finishes."
      },
      {
        question: "How can I control my renovation budget?",
        answer:
          "Prioritise essential repairs, select materials before work begins, agree on the scope in writing and approve any variations before additional work is carried out."
      }
    ]
  },

  architecture: {
    eyebrow: "Architecture & Building Design",
    headline: "Thoughtful design begins with how you live.",
    intro:
      "Good architectural planning connects the way a space looks with how it functions. A well-considered design balances room requirements, circulation, natural light, site constraints, buildability and budget before construction begins.",
    overview: [
      "Architectural design can include project briefing, site analysis, space planning, concept development, floor plans, elevations, sections and other drawings appropriate to the project scope.",
      "Design decisions affect much more than appearance. Building orientation, room proportions, circulation, window placement, roof form and material selection can influence comfort, maintenance and construction costs.",
      "The design and approval requirements depend on the type and location of the project. Architectural and structural work should be undertaken and signed off by professionals who are appropriately qualified and registered for the relevant work."
    ],
    highlights: [
      "Client briefing and requirements planning",
      "Space planning and concept development",
      "Architectural drawings and design coordination",
      "Material and finish considerations",
      "Coordination with relevant consultants and approvals"
    ],
    process: [
      {
        title: "Understand the brief",
        description:
          "Discuss the intended use, household or business needs, number of rooms, preferred style, budget and future expansion plans."
      },
      {
        title: "Assess the site",
        description:
          "Review plot dimensions, access, orientation, neighbouring conditions and other site information needed to inform the design."
      },
      {
        title: "Develop concepts",
        description:
          "Explore layout options, circulation, daylight, ventilation, roof form and the relationship between indoor and outdoor spaces."
      },
      {
        title: "Coordinate drawings",
        description:
          "Develop the agreed design and coordinate the relevant architectural, structural and building-services information with the appropriate professionals."
      },
      {
        title: "Prepare for construction",
        description:
          "Confirm the drawings, specification, approval requirements and cost information needed to move toward construction with fewer unresolved decisions."
      }
    ],
    priceHeading: "Indicative architectural design costs in Kenya",
    priceRange: "From KSh 25,000+",
    priceUnit: "for selected basic house-plan services",
    priceNote:
      "This is an entry-level reference for selected house-plan services advertised in the Kenyan market, not a complete design fee or a Makyn price. Full architectural services, revisions, structural drawings, BoQs, site supervision and approval-related work may be priced separately.",
    priceFactors: [
      "Building size, complexity and intended use",
      "Level of design detail and number of revisions",
      "Whether 3D visualisations or presentation drawings are needed",
      "Structural and building-services coordination",
      "BoQ preparation, site visits and supervision requirements",
      "Professional appointments and applicable approval fees"
    ],
    gallery: [
      "/images/projects/homes.jpg",
      "/images/projects/finishing.jpeg",
      "/images/projects/Architecture.jpeg",
      "/images/projects/construction.jpg"
    ],
    faqs: [
      {
        question: "Why do I need architectural drawings?",
        answer:
          "Drawings communicate the building's intended layout, dimensions and design. They help coordinate the project, inform cost planning and support the applicable approval process."
      },
      {
        question: "Does a house plan include structural drawings?",
        answer:
          "Not necessarily. The deliverables depend on the service agreement. Structural engineering, building-services drawings, a BoQ, visualisations and site supervision may be separate items."
      },
      {
        question: "Can a design be adjusted to fit my budget?",
        answer:
          "Yes. Early decisions about floor area, layout complexity, roof design and finishes can help align a concept with the available budget without compromising essential safety requirements."
      },
      {
        question: "Can construction begin as soon as the design is ready?",
        answer:
          "The required drawings, professional reviews and relevant approvals must be in place before proceeding. Requirements depend on the project and local authority."
      }
    ]
  },

  masonry: {
    eyebrow: "Masonry & Carpentry",
    headline: "Precision in the details. Strength in the structure.",
    intro:
      "Masonry and carpentry bring together many of the practical elements that shape a building. From accurate blockwork and plastering to timber installations and carefully fitted components, the quality of the work influences both durability and finish.",
    overview: [
      "Masonry work can include block or stone walling, brickwork, mortar joints, plastering, screeding and selected repair work. Correct setting out, suitable materials and appropriate curing practices all contribute to a sound result.",
      "Carpentry may include roof timber work, door frames, skirting, shelving, timber fittings and other specified installations. Components should be measured carefully and selected for their intended environment and use.",
      "The appropriate method depends on the design, structural requirements, exposure to moisture, material specification and expected loads. Structural alterations should be reviewed by the relevant professional rather than treated as ordinary repair work."
    ],
    highlights: [
      "Block, brick and stone walling",
      "Plastering, screeding and surface preparation",
      "Selected timber and carpentry installations",
      "Repairs to masonry and timber components",
      "Accurate setting out and finishing checks"
    ],
    process: [
      {
        title: "Measure and set out",
        description:
          "Confirm dimensions, levels, openings and the intended position of the work against the relevant drawings and site conditions."
      },
      {
        title: "Select materials",
        description:
          "Choose appropriate blocks, stone, mortar, timber, fixings and other materials according to the specification and exposure conditions."
      },
      {
        title: "Carry out the work",
        description:
          "Complete walling, joints, plastering or carpentry in the agreed sequence, checking alignment, levels and dimensions as the work progresses."
      },
      {
        title: "Allow for curing and adjustment",
        description:
          "Observe suitable curing and drying periods, and allow materials to stabilise before applying finishes or loading components where required."
      },
      {
        title: "Inspect the finish",
        description:
          "Check workmanship, alignment, joints, fixings and surfaces against the agreed requirements before proceeding to the next trade."
      }
    ],
    priceHeading: "Indicative masonry and carpentry budgets",
    priceRange: "Quoted after measurement",
    priceUnit: "by material, quantity and work item",
    priceNote:
      "There is no reliable single price for all masonry and carpentry work. A measured estimate should distinguish walling, mortar, reinforcement where specified, plastering, timber, fittings, labour, access and waste. Request a BoQ or itemised quotation for an accurate range.",
    priceFactors: [
      "Wall area, thickness and type of masonry unit",
      "Mortar specification and structural reinforcement where designed",
      "Working height, access and scaffolding needs",
      "Plastering, screeding and final surface finish",
      "Timber species, dimensions, treatment and joinery complexity",
      "Quantity of openings, cuts, fittings and repairs"
    ],
    gallery: [
      "/images/projects/homes.jpg",
      "/images/projects/finishing.jpeg",
      "/images/projects/Architecture.jpeg",
      "/images/projects/construction.jpg"
    ],
    faqs: [
      {
        question: "What affects the cost of masonry work?",
        answer:
          "The type and thickness of the wall, area, material prices, mortar specification, access, openings and whether plastering or other finishes are included all affect the cost."
      },
      {
        question: "How do I know whether a wall can be removed?",
        answer:
          "Do not assume a wall is non-structural from appearance alone. Have the building assessed by an appropriately qualified professional before altering or removing it."
      },
      {
        question: "Why are cracks appearing in plaster or masonry?",
        answer:
          "Cracks can have several causes, including shrinkage, movement, moisture or structural issues. The cause should be assessed before deciding on a repair method."
      },
      {
        question: "Can carpentry be customised?",
        answer:
          "Yes. Dimensions, timber type, finish, hardware and intended use can be specified before work starts. Custom work should be measured and agreed in writing."
      }
    ]
  },

  roofing: {
    eyebrow: "Roofing & Ceilings",
    headline: "Protection above. Precision throughout.",
    intro:
      "A reliable roof protects a building from weather while contributing to its appearance, comfort and long-term maintenance needs. The roof structure, covering, drainage, ventilation and ceiling should be considered as connected parts of the building envelope.",
    overview: [
      "Roofing services can include roof-frame installation, sheet or tile covering, ridge details, flashing, gutters, waterproofing and selected repairs. The right system depends on the building design, roof pitch, weather exposure, span and specified materials.",
      "Ceiling work may include gypsum board, other specified ceiling systems, access panels, finishing and coordination with lighting or ventilation. Correct framing, secure fixing and careful joint finishing are important for the final appearance.",
      "Leaks are not always caused by the visible point where water appears. Roof junctions, fixings, gutters, flashing, damaged underlay and drainage can all contribute, so inspection should precede major repairs."
    ],
    highlights: [
      "Roof structures and roof-covering installation",
      "Mabati, tile and other specified roof systems",
      "Flashing, gutters and water-management details",
      "Ceiling framing, board installation and finishing",
      "Roof inspection, repairs and maintenance"
    ],
    process: [
      {
        title: "Inspect the roof and building",
        description:
          "Assess the roof geometry, existing covering, frame condition, drainage and visible leak points. Unsafe access should be avoided until proper arrangements are in place."
      },
      {
        title: "Select the roof system",
        description:
          "Confirm the covering, frame material, fixings, flashing, underlay, insulation and rainwater goods required by the design and site conditions."
      },
      {
        title: "Install the structure and covering",
        description:
          "Prepare and install the specified frame and roof covering, checking alignment, fixing details and junctions throughout the installation."
      },
      {
        title: "Complete ceilings and details",
        description:
          "Where included, coordinate ceiling framing, boards, joints, access points, lighting and other services with the roof and building layout."
      },
      {
        title: "Check weather protection",
        description:
          "Inspect roof junctions, flashings, gutters, outlets and visible finishes. Any testing should suit the system and site conditions."
      }
    ],
    priceHeading: "Indicative roofing installation prices in Kenya",
    priceRange: "KSh 1,200–6,500+",
    priceUnit: "per m² for selected roof-covering systems",
    priceNote:
      "Published market estimates vary by covering and installation scope. The range above is a broad reference for selected systems, not a complete roof quotation. Roof framing, ceilings, gutters, access, replacement of damaged material and disposal may be additional.",
    priceFactors: [
      "Roof area, pitch, shape and number of junctions",
      "Mabati, tile, stone-coated steel or another covering",
      "Timber or steel trusses and their design requirements",
      "Underlay, insulation, flashing and rainwater drainage",
      "Ceiling system, lighting coordination and paint finish",
      "Access, working height, removal and disposal of old materials"
    ],
    gallery: [
      "/images/projects/homes.jpg",
      "/images/projects/finishing.jpeg",
      "/images/projects/Architecture.jpeg",
      "/images/projects/construction.jpg"
    ],
    faqs: [
      {
        question: "How much does a new roof cost in Kenya?",
        answer:
          "The cost depends on roof area, covering type, truss design, pitch, fittings and access. Compare quotations using the same specifications and confirm whether the price includes the structure, covering and rainwater goods."
      },
      {
        question: "Can an existing leaking roof be repaired?",
        answer:
          "Often, but the roof should be inspected to identify the source of water entry and any damage to the frame or surrounding materials. Some roofs require partial or full replacement rather than a patch."
      },
      {
        question: "Which roofing material is best?",
        answer:
          "There is no universal best choice. The appropriate covering depends on the design, budget, structural support, weather exposure, appearance and maintenance expectations."
      },
      {
        question: "Can ceiling installation be included with roofing?",
        answer:
          "Yes, when agreed in the project scope. Confirm the ceiling type, framing, insulation requirements, access points, lighting coordination and painting or finishing responsibilities."
      }
    ]
  },

  painting: {
    eyebrow: "Painting & Finishing",
    headline: "The final details make the difference.",
    intro:
      "A high-quality finish starts long before the first coat of paint. Surface preparation, moisture control, suitable primers, compatible products and careful application help create a cleaner appearance and improve the service life of the finished surface.",
    overview: [
      "Painting and finishing can include interior walls, ceilings, exterior facades, metalwork and selected decorative finishes. Each surface needs preparation and products suitable for its material and exposure.",
      "Preparation may involve cleaning, scraping loose paint, repairing minor defects, filling, sanding and priming. Where dampness, corrosion or persistent peeling is present, the cause should be addressed before applying a new coating.",
      "A finish specification should identify the colour, sheen, product type, surface preparation and number of coats. This helps align expectations and makes it easier to compare quotations."
    ],
    highlights: [
      "Interior and exterior painting",
      "Surface repairs, filling and preparation",
      "Primers and protective coating systems",
      "Ceiling and selected decorative finishes",
      "Final inspection and touch-ups"
    ],
    process: [
      {
        title: "Inspect the surfaces",
        description:
          "Identify the substrate, existing coating, cracks, peeling, stains, moisture and other defects that may affect adhesion or the final finish."
      },
      {
        title: "Prepare the area",
        description:
          "Protect floors, fixtures and adjacent surfaces. Clean, scrape, fill, sand or repair as appropriate for the surface and coating system."
      },
      {
        title: "Apply suitable primer",
        description:
          "Use a compatible primer or sealer where required by the substrate, existing condition and paint manufacturer's instructions."
      },
      {
        title: "Apply the specified finish",
        description:
          "Apply the agreed coating system with suitable tools and allow the required drying times between coats. Colour and sheen should be confirmed before large areas are painted."
      },
      {
        title: "Inspect and touch up",
        description:
          "Check coverage, edges, consistency and visible defects under suitable lighting. Complete agreed touch-ups and clean the work area."
      }
    ],
    priceHeading: "Indicative painting prices in Kenya",
    priceRange: "KSh 730–1,620",
    priceUnit: "per m² for selected complete paint systems",
    priceNote:
      "Published Nairobi and Central-region rate schedules show different costs for paint systems and finishes. The range is an indicative reference only; it may not match Makyn's rates or the requirements of every surface. Confirm the measured area, preparation, primer, coats, paint quality and access before pricing.",
    priceFactors: [
      "Total wall and ceiling area, including surface condition",
      "Interior or exterior exposure and substrate type",
      "Amount of scraping, filling, plaster repair and sanding",
      "Primer, number of coats, paint brand and finish",
      "Height, scaffolding and protection of furniture or fittings",
      "Decorative effects, colour changes and specialist coatings"
    ],
    gallery: [
      "/images/projects/homes.jpg",
      "/images/projects/finishing.jpeg",
      "/images/projects/Architecture.jpeg",
      "/images/projects/construction.jpg"
    ],
    faqs: [
      {
        question: "How much does it cost to paint a house in Kenya?",
        answer:
          "The cost depends on the measured area, wall condition, preparation, paint system and access. A room that needs little repair will be priced differently from an exterior that requires extensive scraping or plaster work."
      },
      {
        question: "Why is surface preparation important?",
        answer:
          "Paint adheres and looks better when the surface is sound, clean and suitable for the selected coating. Painting over loose paint or unresolved dampness can cause premature failure."
      },
      {
        question: "How many coats of paint are needed?",
        answer:
          "The number depends on the surface, colour change, product specification and desired coverage. The quotation should state the agreed preparation, primer and finish coats."
      },
      {
        question: "Can I choose my own colours and paint?",
        answer:
          "Yes. Confirm the colour, sheen and product specification before work begins. A sample patch can help you assess the colour under the property's actual lighting."
      }
    ]
  }
};
