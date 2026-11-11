
import type { ReactNode } from "react";

export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  sections: {
    id: string;
    title: string;
  }[];
  content: ReactNode;
};

export const blogArticles: BlogArticle[] = [
  {
  slug: "building-mistakes-to-avoid",
  title: "10 Common Construction Mistakes to Avoid When Building Your Home",
  category: "Construction Knowledge",
  description:
    "Building a home is a major investment. Discover ten common construction mistakes that can lead to unnecessary expenses, delays and structural problems, and learn how to avoid them.",
  image: "/images/blog/mistakes.jpg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "9 min read",
  featured: true,

  sections: [
    {
      id: "poor-project-planning",
      title: "1. Poor Project Planning",
    },
    {
      id: "ignoring-soil-investigation",
      title: "2. Ignoring Soil Investigation",
    },
    {
      id: "inadequate-budgeting",
      title: "3. Inadequate Budgeting",
    },
    {
      id: "poor-quality-materials",
      title: "4. Choosing Poor-Quality Materials",
    },
    {
      id: "unqualified-professionals",
      title: "5. Hiring Unqualified Professionals",
    },
    {
      id: "ignoring-approved-drawings",
      title: "6. Ignoring Approved Drawings",
    },
    {
      id: "poor-site-supervision",
      title: "7. Poor Site Supervision",
    },
    {
      id: "skipping-important-stages",
      title: "8. Rushing Construction Stages",
    },
    {
      id: "poor-waterproofing-drainage",
      title: "9. Neglecting Waterproofing and Drainage",
    },
    {
      id: "neglecting-finishing-inspection",
      title: "10. Neglecting Finishing and Inspection",
    },
    {
      id: "building-with-confidence",
      title: "Building With Confidence",
    },
  ],

  content: (
    <>
      <p>
        Building a home is one of the most significant
        investments many people make in their lifetime.
        From purchasing land and preparing architectural
        drawings to selecting materials and supervising
        construction, every decision contributes to the
        final outcome.
      </p>

      <p>
        However, construction projects can encounter
        challenges when important details are overlooked.
        Some mistakes result in unnecessary expenses,
        while others can affect the durability, appearance
        and safety of a building.
      </p>

      <p>
        Understanding these common mistakes before
        construction begins can help you make better
        decisions and protect your investment.
      </p>

      <h2 id="poor-project-planning">
        1. Poor Project Planning
      </h2>

      <p>
        One of the biggest mistakes is starting
        construction without a clear project plan.
        Some property owners begin building before
        establishing their requirements, budget,
        design and expected construction timeline.
      </p>

      <p>
        Poor planning can result in repeated design
        changes, material wastage, unnecessary expenses
        and delays.
      </p>

      <p>
        Before construction begins, establish the
        purpose of the building, required spaces,
        preferred specifications and available budget.
        Work with relevant professionals to develop
        a coordinated construction plan.
      </p>

      <h2 id="ignoring-soil-investigation">
        2. Ignoring Soil Investigation
      </h2>

      <p>
        The ground beneath a building plays a critical
        role in supporting its weight. Different sites
        have different soil characteristics, and these
        conditions can influence foundation design.
      </p>

      <p>
        Assuming that a particular foundation will work
        simply because it was used on a neighbouring
        property can be a costly mistake.
      </p>

      <p>
        A suitable geotechnical investigation helps
        establish important information about soil
        conditions, groundwater and the suitability
        of the ground for the proposed development.
      </p>

      <p>
        Foundation design should be prepared by a
        qualified structural engineer using appropriate
        site investigation information.
      </p>

      <h2 id="inadequate-budgeting">
        3. Inadequate Budgeting
      </h2>

      <p>
        Underestimating construction costs can interrupt
        an otherwise promising project. Some homeowners
        calculate only the cost of major materials
        without considering labour, transportation,
        professional fees, approvals and other expenses.
      </p>

      <p>
        Construction costs in Kenya vary depending on
        location, design complexity, materials,
        specifications, ground conditions and market
        prices.
      </p>

      <p>
        Prepare a detailed cost estimate that accounts
        for the different stages of construction.
        Include an appropriate contingency allowance
        for unforeseen expenses.
      </p>

      <p>
        Regularly compare actual expenditure against
        the approved budget to identify financial
        challenges early.
      </p>

      <h2 id="poor-quality-materials">
        4. Choosing Poor-Quality Materials
      </h2>

      <p>
        Selecting building materials based entirely
        on the lowest available price can compromise
        construction quality.
      </p>

      <p>
        Materials must meet the technical specifications
        and performance requirements of the project.
        Their suitability, durability, storage and
        handling should all be considered.
      </p>

      <p>
        For example, inappropriate roofing materials,
        poor-quality plumbing fittings or unsuitable
        concrete ingredients may create problems
        that are expensive to correct.
      </p>

      <p>
        Compare suppliers, check product specifications
        and seek professional guidance before making
        important material decisions.
      </p>

      <h2 id="unqualified-professionals">
        5. Hiring Unqualified Professionals
      </h2>

      <p>
        A construction project requires different
        technical skills and areas of responsibility.
        Engaging people without the appropriate
        qualifications or experience can expose
        the project to unnecessary risks.
      </p>

      <p>
        Architects, engineers, quantity surveyors
        and other specialists should be appropriately
        qualified and registered where required.
      </p>

      <p>
        Before engaging a contractor or professional,
        review their relevant experience, credentials,
        previous projects and references.
      </p>

      <p>
        Choosing a construction partner should involve
        more than comparing quotations. Reliability,
        workmanship, communication and technical
        capability matter too.
      </p>

      <h2 id="ignoring-approved-drawings">
        6. Ignoring Approved Drawings
      </h2>

      <p>
        Construction drawings communicate how a
        building should be constructed. They provide
        essential information about dimensions,
        structural components, materials and
        building installations.
      </p>

      <p>
        Making unauthorised changes during construction
        can affect structural performance, building
        functionality and regulatory compliance.
      </p>

      <p>
        For example, changing the position of a
        structural column or removing an important
        wall without professional assessment may
        create serious problems.
      </p>

      <p>
        Follow the approved drawings and specifications.
        Any proposed changes should first be reviewed
        by the relevant professionals and approved
        through the appropriate process.
      </p>

      <h2 id="poor-site-supervision">
        7. Poor Site Supervision
      </h2>

      <p>
        Even a well-designed building can experience
        problems when construction activities are
        not properly supervised.
      </p>

      <p>
        Poor supervision may result in incorrect
        measurements, improper material use,
        inconsistent workmanship and failure to
        follow technical specifications.
      </p>

      <p>
        Establish appropriate site supervision and
        inspection arrangements. Monitor important
        construction activities and ensure that
        issues are addressed before subsequent
        work covers them.
      </p>

      <h2 id="skipping-important-stages">
        8. Rushing Construction Stages
      </h2>

      <p>
        Construction involves a sequence of activities
        that depend on one another. Rushing important
        stages to save time can compromise the quality
        of the finished building.
      </p>

      <p>
        Concrete work, curing, reinforcement placement,
        waterproofing and other technical activities
        must follow the appropriate specifications
        and procedures.
      </p>

      <p>
        Allow sufficient time for each activity,
        including inspections and necessary testing.
        A realistic construction schedule is more
        useful than an unrealistic completion promise.
      </p>

      <h2 id="poor-waterproofing-drainage">
        9. Neglecting Waterproofing and Drainage
      </h2>

      <p>
        Water-related problems can affect the
        durability and comfort of a building.
        Poor drainage, leaking roofs and inadequate
        waterproofing may lead to dampness, damaged
        finishes and deterioration of building
        components.
      </p>

      <p>
        Pay attention to roof drainage, gutters,
        downpipes, site gradients and the proper
        disposal of surface water.
      </p>

      <p>
        Bathrooms, balconies, roofs and other
        water-exposed areas should receive suitable
        waterproofing according to their design
        and specifications.
      </p>

      <p>
        Addressing these details during construction
        is generally easier than repairing extensive
        water damage later.
      </p>

      <h2 id="neglecting-finishing-inspection">
        10. Neglecting Finishing and Inspection
      </h2>

      <p>
        Finishing work has a major influence on the
        appearance and usability of a building.
        Poor tiling, uneven surfaces, badly fitted
        doors and windows, and careless painting
        can reduce the overall quality of the project.
      </p>

      <p>
        However, appearance should not be the only
        consideration. Important installations,
        drainage systems, electrical works and
        plumbing should also be checked.
      </p>

      <p>
        Before handover, arrange appropriate
        inspections and prepare a list of outstanding
        defects. Ensure agreed corrections are
        completed and relevant documentation is
        provided.
      </p>

      <h2 id="building-with-confidence">
        Building With Confidence
      </h2>

      <p>
        Successful construction depends on a
        combination of proper planning, technical
        knowledge, quality materials, skilled
        workmanship and effective supervision.
      </p>

      <p>
        Avoiding these ten mistakes does not mean
        that every construction project will be
        free from challenges. However, making
        informed decisions and working with
        qualified professionals can significantly
        reduce avoidable problems.
      </p>

      <blockquote>
        A quality building is not created by
        rushing the process. It is achieved
        through careful planning, responsible
        decisions and attention to every detail.
      </blockquote>

      <p>
        At Makyn Construction Company Limited,
        we believe that every successful project
        deserves a commitment to quality,
        professionalism and dependable construction
        practices.
      </p>

      <p>
        Planning a building or renovation project?
        Get in touch with our team to discuss
        your requirements and explore suitable
        construction solutions.
      </p>
    </>
  ),
},

  {
  slug: "choosing-the-right-foundation",
  title: "How to Choose the Right Foundation for Your Building",
  category: "Construction Knowledge",
  description:
    "Discover the different types of building foundations, what influences their selection, and why proper ground assessment is essential before construction begins.",
  image: "/images/blog/foundation.jpg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "7 min read",

  sections: [
    {
      id: "understanding-foundations",
      title: "Understanding Building Foundations",
    },
    {
      id: "types-of-foundations",
      title: "Common Types of Foundations",
    },
    {
      id: "factors-affecting-selection",
      title: "Factors That Determine Foundation Choice",
    },
    {
      id: "importance-of-soil-testing",
      title: "Why Soil Testing Matters",
    },
    {
      id: "common-foundation-mistakes",
      title: "Foundation Mistakes to Avoid",
    },
    {
      id: "professional-guidance",
      title: "The Importance of Professional Guidance",
    },
  ],

  content: (
    <>
      <p>
        Every successful construction project begins with a
        strong foundation. Although much of it remains hidden
        beneath the ground, the foundation plays a critical
        role in determining the strength, stability and
        long-term performance of a building.
      </p>

      <p>
        Whether you are planning a residential home, a
        commercial building or a larger development, choosing
        the right foundation is one of the most important
        decisions you will make during the construction
        process.
      </p>

      <h2 id="understanding-foundations">
        Understanding Building Foundations
      </h2>

      <p>
        A foundation is the structural element that transfers
        the weight of a building safely into the ground. It
        distributes loads from walls, columns, floors and
        roofs to the supporting soil or rock.
      </p>

      <p>
        A properly designed foundation helps prevent excessive
        settlement, structural movement and other problems
        that may compromise the safety of a building.
      </p>

      <h2 id="types-of-foundations">
        Common Types of Foundations
      </h2>

      <p>
        Different buildings require different foundation
        systems. The choice depends on the structural design,
        ground conditions and loads the building is expected
        to carry.
      </p>

      <h3>1. Strip Foundations</h3>

      <p>
        Strip foundations are continuous strips of concrete
        commonly placed beneath load-bearing walls. They are
        often considered for buildings where suitable
        near-surface ground conditions can support the
        proposed structure.
      </p>

      <h3>2. Pad Foundations</h3>

      <p>
        Pad foundations are isolated concrete bases that
        support individual columns. They are commonly used
        where structural loads are concentrated at specific
        points.
      </p>

      <h3>3. Raft Foundations</h3>

      <p>
        A raft foundation is a reinforced concrete slab
        extending beneath a substantial portion of a
        building. It distributes structural loads over a
        wider ground area and may be suitable for certain
        sites with weaker near-surface soils.
      </p>

      <h3>4. Pile Foundations</h3>

      <p>
        Pile foundations transfer building loads to deeper,
        more suitable soil or rock layers. They may be
        necessary where surface soils cannot adequately
        support the proposed structure.
      </p>

      <h2 id="factors-affecting-selection">
        Factors That Determine Foundation Choice
      </h2>

      <p>
        Selecting a foundation is not simply about choosing
        the most popular option. Several important factors
        must be evaluated before a decision is made.
      </p>

      <ul>
        <li>
          <strong>Soil conditions:</strong> Soil strength,
          composition and compressibility influence how
          loads can safely be transferred into the ground.
        </li>

        <li>
          <strong>Building design:</strong> The size,
          height and structural arrangement determine the
          loads that the foundation must support.
        </li>

        <li>
          <strong>Groundwater conditions:</strong> The
          presence and level of groundwater can affect
          excavation, construction methods and foundation
          design.
        </li>

        <li>
          <strong>Site conditions:</strong> Slopes, nearby
          structures, access and underground services can
          influence the appropriate foundation system.
        </li>

        <li>
          <strong>Project budget:</strong> Foundation
          selection should consider construction and
          long-term performance costs without compromising
          structural safety.
        </li>
      </ul>

      <h2 id="importance-of-soil-testing">
        Why Soil Testing Matters
      </h2>

      <p>
        Before construction begins, the ground should be
        properly investigated to understand its engineering
        characteristics.
      </p>

      <p>
        A geotechnical investigation can provide information
        about soil layers, bearing characteristics,
        groundwater conditions and other factors that affect
        foundation design.
      </p>

      <p>
        Skipping proper ground investigation can lead to
        unsuitable design assumptions, unexpected excavation
        challenges and potentially expensive structural
        problems.
      </p>

      <h2 id="common-foundation-mistakes">
        Foundation Mistakes to Avoid
      </h2>

      <p>
        Some foundation problems begin with decisions made
        before concrete is even poured. Common mistakes
        include:
      </p>

      <ul>
        <li>Starting construction without adequate ground investigation.</li>
        <li>Using foundation designs copied from unrelated projects.</li>
        <li>Ignoring groundwater and drainage conditions.</li>
        <li>Making structural changes without professional review.</li>
        <li>Using unsuitable materials or poor construction practices.</li>
        <li>Failing to follow approved structural drawings.</li>
      </ul>

      <p>
        These mistakes can affect the durability and safety
        of the entire building. Proper planning and
        professional supervision help reduce these risks.
      </p>

      <h2 id="professional-guidance">
        The Importance of Professional Guidance
      </h2>

      <p>
        Foundation design requires proper engineering
        assessment. A qualified structural engineer should
        evaluate the building loads and develop an
        appropriate foundation design using the available
        geotechnical information.
      </p>

      <p>
        Construction should then follow the approved
        drawings, specifications and applicable building
        requirements.
      </p>

      <blockquote>
        A strong building does not begin with the walls or
        the roof. It begins with a foundation designed to
        support everything that follows.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we recognise
        the importance of careful planning, quality
        workmanship and professional construction practices
        in delivering dependable building solutions.
      </p>

      <p>
        Planning a construction project? Speak to our team
        about your building requirements and the next steps
        towards bringing your vision to life.
      </p>
    </>
  ),
},

{
  slug: "step-by-step-guide-building-house-kenya",
  title: "A Step-by-Step Guide to Building a House in Kenya",
  category: "Construction Knowledge",
  description:
    "Planning to build your dream home in Kenya? Understand the major stages of construction, from acquiring land and preparing drawings to finishing and final handover.",
  image: "/images/blog/house.jpg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "9 min read",

  sections: [
    {
      id: "planning-your-project",
      title: "1. Planning Your Construction Project",
    },
    {
      id: "land-and-site-selection",
      title: "2. Land and Site Selection",
    },
    {
      id: "design-and-architectural-plans",
      title: "3. Architectural and Structural Design",
    },
    {
      id: "approvals-and-documentation",
      title: "4. Approvals and Documentation",
    },
    {
      id: "budget-and-cost-estimation",
      title: "5. Budgeting and Cost Estimation",
    },
    {
      id: "site-preparation-and-foundation",
      title: "6. Site Preparation and Foundation",
    },
    {
      id: "structural-construction",
      title: "7. Structural Construction",
    },
    {
      id: "roofing-and-installations",
      title: "8. Roofing and Building Installations",
    },
    {
      id: "finishing-and-landscaping",
      title: "9. Finishing and Landscaping",
    },
    {
      id: "inspection-and-handover",
      title: "10. Inspection and Handover",
    },
  ],

  content: (
    <>
      <p>
        Building a house is one of the most significant
        investments many people make in their lifetime.
        Whether you are planning a modest family home or a
        larger residential property, the process requires
        careful planning, financial preparation and
        professional coordination.
      </p>

      <p>
        In Kenya, construction involves several stages,
        including land assessment, architectural design,
        statutory approvals, structural works, installations
        and finishing. Understanding these stages can help
        you make informed decisions and avoid unnecessary
        complications.
      </p>

      <p>
        Here is a practical guide to the major steps involved
        in building a house in Kenya.
      </p>

      <h2 id="planning-your-project">
        1. Planning Your Construction Project
      </h2>

      <p>
        Before purchasing materials or engaging a
        contractor, establish what you want to build and why.
        Think about the number of bedrooms, living spaces,
        bathrooms, parking arrangements and any future
        expansion plans.
      </p>

      <p>
        Your initial planning should consider:
      </p>

      <ul>
        <li>The type and size of house you want.</li>
        <li>Your available construction budget.</li>
        <li>Your preferred location.</li>
        <li>Your family's present and future needs.</li>
        <li>The expected project completion timeline.</li>
      </ul>

      <p>
        Clear planning provides a foundation for making
        decisions throughout the construction process.
      </p>

      <h2 id="land-and-site-selection">
        2. Land and Site Selection
      </h2>

      <p>
        The land you choose can significantly influence
        construction costs, design possibilities and the
        long-term suitability of your home.
      </p>

      <p>
        Before purchasing land, conduct the necessary
        ownership and legal checks. Confirm the property's
        boundaries, access arrangements, permitted land use
        and any restrictions affecting development.
      </p>

      <p>
        Also consider the site's slope, drainage, soil
        conditions, access to utilities and proximity to
        essential services.
      </p>

      <p>
        Engage appropriate professionals to assess the
        property before making a final decision.
      </p>

      <h2 id="design-and-architectural-plans">
        3. Architectural and Structural Design
      </h2>

      <p>
        Once the site is selected, the next stage is turning
        your ideas into a workable building design.
      </p>

      <p>
        A registered architect can develop architectural
        drawings that reflect your requirements, site
        conditions and applicable building regulations.
      </p>

      <p>
        A qualified structural engineer then develops the
        structural design, including the foundation,
        columns, beams, slabs and other structural elements
        where applicable.
      </p>

      <p>
        Other relevant professionals may also be required
        for electrical, plumbing, mechanical and specialist
        building services.
      </p>

      <h2 id="approvals-and-documentation">
        4. Approvals and Documentation
      </h2>

      <p>
        Before construction starts, obtain the relevant
        statutory approvals and permits required for your
        particular development.
      </p>

      <p>
        Requirements vary depending on the county, project
        type, location and nature of the proposed building.
        They may include development permission, approved
        architectural and structural drawings, and other
        applicable regulatory clearances.
      </p>

      <p>
        Confirm the current requirements with the relevant
        county government and professional advisers.
        Construction should not proceed on the assumption
        that approvals are unnecessary.
      </p>

      <h2 id="budget-and-cost-estimation">
        5. Budgeting and Cost Estimation
      </h2>

      <p>
        A realistic construction budget helps you manage
        expenditure and make informed decisions about
        materials, specifications and project priorities.
      </p>

      <p>
        Your budget should account for more than the visible
        construction works. Consider:
      </p>

      <ul>
        <li>Professional design and consultancy fees.</li>
        <li>Statutory approval and related charges.</li>
        <li>Site preparation and excavation.</li>
        <li>Materials and labour.</li>
        <li>Electrical and plumbing installations.</li>
        <li>Roofing, finishes and external works.</li>
        <li>Transport, equipment and site management.</li>
        <li>A contingency allowance for unforeseen expenses.</li>
      </ul>

      <p>
        Construction costs in Kenya vary depending on
        location, building design, specifications, material
        choices, ground conditions and market prices.
        Obtain current quotations and a detailed cost
        estimate before committing to the project.
      </p>

      <h2 id="site-preparation-and-foundation">
        6. Site Preparation and Foundation
      </h2>

      <p>
        Once the necessary approvals and preparations are
        complete, physical construction can begin.
      </p>

      <p>
        Site preparation may involve clearing vegetation,
        setting out the building, excavation and establishing
        suitable access and working areas.
      </p>

      <p>
        Foundation construction follows the approved
        structural design and geotechnical recommendations.
        The work may include excavation, reinforcement,
        formwork, concrete placement and other specified
        operations.
      </p>

      <p>
        Proper supervision and inspection at this stage
        are essential because foundation work supports
        everything constructed above it.
      </p>

      <h2 id="structural-construction">
        7. Structural Construction
      </h2>

      <p>
        After the foundation has been completed and
        inspected as required, the main structural works
        proceed.
      </p>

      <p>
        Depending on the design, this stage may involve
        constructing columns, beams, walls, suspended
        slabs, staircases and other structural components.
      </p>

      <p>
        Materials, reinforcement details, dimensions and
        construction methods should follow the approved
        drawings and specifications.
      </p>

      <h2 id="roofing-and-installations">
        8. Roofing and Building Installations
      </h2>

      <p>
        Roofing protects the building from weather
        conditions while contributing to its appearance
        and overall performance.
      </p>

      <p>
        The roofing system should be selected according to
        the architectural design, structural requirements,
        drainage needs and available budget.
      </p>

      <p>
        Electrical, plumbing and other building services
        are also installed and coordinated during the
        appropriate construction stages. Their positioning
        should be planned carefully to avoid unnecessary
        alterations later.
      </p>

      <h2 id="finishing-and-landscaping">
        9. Finishing and Landscaping
      </h2>

      <p>
        Finishing works transform the completed structure
        into a functional and comfortable living space.
      </p>

      <p>
        Common finishing activities include:
      </p>

      <ul>
        <li>Plastering and wall preparation.</li>
        <li>Floor and wall tiling.</li>
        <li>Painting and decorative finishes.</li>
        <li>Installation of doors and windows.</li>
        <li>Ceiling installation.</li>
        <li>Kitchen and bathroom fittings.</li>
        <li>External paving, drainage and landscaping.</li>
      </ul>

      <p>
        Pay attention to workmanship and material quality.
        Poor finishing can affect both the appearance and
        long-term maintenance requirements of your home.
      </p>

      <h2 id="inspection-and-handover">
        10. Inspection and Handover
      </h2>

      <p>
        Before occupying the building, arrange the
        necessary inspections and confirm that the
        completed works meet the approved designs,
        specifications and applicable requirements.
      </p>

      <p>
        Check essential installations, drainage, doors,
        windows, finishes and other building components.
        Any outstanding defects should be documented and
        addressed through the agreed handover process.
      </p>

      <p>
        Collect relevant project documentation, warranties,
        certificates and operating information where
        applicable.
      </p>

      <h2 id="building-with-confidence">
        Building With Confidence
      </h2>

      <p>
        Building a house in Kenya is a process that requires
        more than purchasing land and hiring construction
        workers. It involves professional planning,
        technical expertise, regulatory compliance,
        financial discipline and quality supervision.
      </p>

      <blockquote>
        A successful building project is not measured only
        by the finished structure, but also by the quality
        of planning and decisions that brought it to life.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we believe
        that every successful project begins with a clear
        vision, careful preparation and a commitment to
        quality.
      </p>

      <p>
        Planning to build your home or undertake a
        construction project? Get in touch with our team
        to discuss your requirements.
      </p>
    </>
  ),
},

{
  slug: "modern-house-designs-in-kenya",
  title: "Modern House Designs in Kenya: Ideas, Features and Planning Considerations",
  category: "Architecture & Design",
  description:
    "Explore modern architectural ideas for Kenyan homes, from contemporary facades and open-plan layouts to natural lighting, outdoor spaces and practical design choices.",
  image: "/images/blog/modern.jpeg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "8 min read",

  sections: [
    { id: "modern-architecture", title: "Understanding Modern Architecture" },
    { id: "popular-house-styles", title: "Popular Modern House Styles" },
    { id: "interior-layouts", title: "Interior Layout and Space Planning" },
    { id: "natural-lighting", title: "Natural Lighting and Ventilation" },
    { id: "choosing-materials", title: "Choosing the Right Materials" },
    { id: "planning-your-design", title: "Planning Your Dream Home" },
  ],

  content: (
    <>
      <p>
        Modern house design has become increasingly popular among
        homeowners in Kenya. From elegant contemporary homes to
        minimalist residential buildings, people are looking for
        designs that combine beauty, comfort, functionality and
        long-term value.
      </p>

      <p>
        However, an attractive house design should do more than
        look impressive. It should respond to the needs of its
        occupants, the characteristics of the site and the
        surrounding environment.
      </p>

      <h2 id="modern-architecture">Understanding Modern Architecture</h2>

      <p>
        Modern architecture focuses on simplicity, functionality
        and thoughtful use of space. It often incorporates clean
        lines, balanced proportions, open layouts and carefully
        selected materials.
      </p>

      <p>
        In residential construction, this approach can create
        comfortable homes that are visually appealing while
        remaining practical for everyday living.
      </p>

      <h2 id="popular-house-styles">Popular Modern House Styles</h2>

      <h3>Contemporary Homes</h3>

      <p>
        Contemporary homes often feature geometric forms, large
        windows, modern finishes and carefully designed exterior
        spaces. Their appearance can be adapted to different
        plot sizes and homeowner preferences.
      </p>

      <h3>Minimalist Homes</h3>

      <p>
        Minimalist architecture emphasises simplicity and avoids
        unnecessary decorative elements. Clean surfaces,
        functional spaces and restrained colour combinations
        help create a calm appearance.
      </p>

      <h3>Modern Flat-Roof Homes</h3>

      <p>
        Flat-roof designs are popular in contemporary residential
        architecture. They can provide a distinctive appearance
        and may accommodate certain rooftop features when
        properly designed and waterproofed.
      </p>

      <h3>Modern Pitched-Roof Homes</h3>

      <p>
        Pitched roofs remain practical in many settings. They
        can provide effective rainwater drainage and offer
        opportunities for attractive architectural detailing.
      </p>

      <h2 id="interior-layouts">Interior Layout and Space Planning</h2>

      <p>
        A beautiful exterior should be supported by a functional
        interior. The arrangement of bedrooms, living areas,
        kitchens and circulation spaces affects how comfortably
        a home can be used.
      </p>

      <p>
        Open-plan living areas can create a sense of spaciousness
        by connecting the kitchen, dining and living spaces.
        However, privacy, noise control and family preferences
        should also be considered.
      </p>

      <p>
        Storage, furniture arrangements, accessibility and
        future household needs should be considered during
        the design stage.
      </p>

      <h2 id="natural-lighting">Natural Lighting and Ventilation</h2>

      <p>
        Good architectural design makes thoughtful use of
        natural light and airflow. Window placement, building
        orientation and room arrangements can influence the
        indoor environment.
      </p>

      <p>
        Cross-ventilation, suitable window sizes and shaded
        openings can improve comfort while reducing reliance
        on artificial lighting and mechanical cooling.
      </p>

      <h2 id="choosing-materials">Choosing the Right Materials</h2>

      <p>
        Materials influence the appearance, durability,
        maintenance requirements and cost of a building.
        Common choices include natural stone, concrete,
        timber, glass, steel and different exterior finishes.
      </p>

      <p>
        Selection should consider local availability,
        workmanship requirements, weather exposure,
        maintenance and the overall architectural concept.
      </p>

      <h2 id="planning-your-design">Planning Your Dream Home</h2>

      <p>
        Before settling on a design, establish your budget,
        household requirements, preferred architectural style
        and available site conditions.
      </p>

      <p>
        Work with qualified design and engineering
        professionals to develop drawings that are practical,
        structurally appropriate and compliant with applicable
        building requirements.
      </p>

      <blockquote>
        Great architecture is not simply about creating a
        beautiful building. It is about designing spaces
        that make everyday life better.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we appreciate
        the importance of thoughtful planning and quality
        construction in bringing architectural ideas to life.
      </p>
    </>
  ),
},

{
  slug: "importance-of-architectural-drawings",
  title: "Why Architectural Drawings Are Essential Before Building",
  category: "Architecture & Design",
  description:
    "Discover why architectural drawings matter, what they communicate, how they support construction planning and why professional design coordination can prevent costly mistakes.",
  image: "/images/blog/drawings.jpeg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "7 min read",

  sections: [
    { id: "what-are-drawings", title: "What Are Architectural Drawings?" },
    { id: "types-of-drawings", title: "Common Types of Drawings" },
    { id: "communication", title: "A Common Language for Construction" },
    { id: "cost-and-planning", title: "Planning and Cost Management" },
    { id: "coordination", title: "Coordination Between Professionals" },
    { id: "professional-design", title: "Why Professional Design Matters" },
  ],

  content: (
    <>
      <p>
        Every successful building project needs a clear plan.
        Before construction workers begin laying foundations,
        raising walls or installing roofs, the proposed building
        must be translated into technical information that
        professionals can understand and follow.
      </p>

      <p>
        Architectural drawings provide this essential
        communication. They help transform a homeowner's ideas
        into a coordinated design that can guide the construction
        process.
      </p>

      <h2 id="what-are-drawings">What Are Architectural Drawings?</h2>

      <p>
        Architectural drawings are technical representations
        of a proposed building. They communicate the arrangement
        of spaces, dimensions, building appearance and important
        construction details.
      </p>

      <p>
        They allow clients, architects, engineers, contractors
        and relevant authorities to understand what is being
        proposed before physical construction takes place.
      </p>

      <h2 id="types-of-drawings">Common Types of Drawings</h2>

      <h3>Floor Plans</h3>

      <p>
        Floor plans show the arrangement of rooms, walls,
        doors, windows and circulation spaces when viewed
        from above. They help establish how people will move
        through the building.
      </p>

      <h3>Elevations</h3>

      <p>
        Elevations illustrate the external faces of a building.
        They show features such as windows, doors, rooflines,
        exterior finishes and architectural proportions.
      </p>

      <h3>Sections</h3>

      <p>
        Section drawings show a building as if it has been
        cut vertically. They help explain floor levels,
        ceiling heights, roof construction and relationships
        between different building spaces.
      </p>

      <h3>Structural Drawings</h3>

      <p>
        Structural drawings communicate engineering
        information relating to foundations, reinforcement,
        columns, beams, slabs and other structural components.
      </p>

      <h3>Building Services Drawings</h3>

      <p>
        These may show electrical installations, plumbing,
        drainage, ventilation and other building systems.
      </p>

      <h2 id="communication">A Common Language for Construction</h2>

      <p>
        Construction involves several professionals and
        different categories of workers. Drawings provide
        a shared reference that helps everyone understand
        the intended outcome.
      </p>

      <p>
        Without clear drawings, different people may make
        conflicting assumptions about dimensions, materials,
        positions and construction details.
      </p>

      <h2 id="cost-and-planning">Planning and Cost Management</h2>

      <p>
        Drawings help professionals estimate quantities,
        identify material requirements and prepare more
        reliable project budgets.
      </p>

      <p>
        They also make it easier to identify design issues
        before construction begins, when changes are generally
        easier to coordinate than after work has been completed.
      </p>

      <h2 id="coordination">Coordination Between Professionals</h2>

      <p>
        Architectural, structural and building services
        designs need to work together. For example, plumbing
        routes should be coordinated with structural elements,
        while electrical installations need suitable
        provisions within the building layout.
      </p>

      <p>
        Proper coordination helps reduce clashes, unnecessary
        alterations and delays during construction.
      </p>

      <h2 id="professional-design">Why Professional Design Matters</h2>

      <p>
        Building drawings should be prepared and reviewed by
        appropriately qualified and registered professionals
        within their respective areas of responsibility.
      </p>

      <p>
        A professional design process considers site conditions,
        functionality, structural safety, applicable regulations
        and the client's requirements.
      </p>

      <blockquote>
        Good construction begins long before the first
        foundation is excavated. It begins with a clear,
        coordinated plan.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we value proper
        planning and coordination because they contribute to
        better construction outcomes.
      </p>
    </>
  ),
},

{
  slug: "home-renovation-guide-kenya",
  title: "Home Renovation in Kenya: What Every Homeowner Should Know",
  category: "Home Improvement",
  description:
    "Planning to renovate your home? Learn how to assess your property, prioritise improvements, prepare a budget and coordinate renovation work effectively.",
  image: "/images/blog/statehouse.jpeg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "7 min read",

  sections: [
    { id: "why-renovate", title: "Why Renovate Your Home?" },
    { id: "assess-property", title: "Assessing Your Existing Property" },
    { id: "prioritise-work", title: "Prioritising Renovation Work" },
    { id: "renovation-budget", title: "Preparing a Renovation Budget" },
    { id: "choosing-contractor", title: "Choosing the Right Contractor" },
    { id: "managing-renovation", title: "Managing the Renovation Process" },
  ],

  content: (
    <>
      <p>
        A home should continue meeting the needs of the people
        living in it. However, as families grow, lifestyles
        change and building materials age, certain parts of
        a property may require improvement.
      </p>

      <p>
        Home renovation offers an opportunity to improve
        functionality, update the appearance of a building
        and address maintenance issues without necessarily
        constructing an entirely new property.
      </p>

      <h2 id="why-renovate">Why Renovate Your Home?</h2>

      <p>
        Homeowners renovate for different reasons. Some want
        modern interiors, while others need additional space
        or want to repair deteriorating building components.
      </p>

      <p>
        Common renovation goals include improving kitchens
        and bathrooms, upgrading flooring, repairing roofs,
        repainting walls, improving lighting and reorganising
        living spaces.
      </p>

      <h2 id="assess-property">Assessing Your Existing Property</h2>

      <p>
        Before starting renovation work, inspect the property
        to understand its current condition.
      </p>

      <p>
        Pay attention to cracks, dampness, leaking roofs,
        damaged finishes, drainage problems, electrical
        installations and plumbing systems.
      </p>

      <p>
        Structural concerns should be assessed by a qualified
        professional. Cosmetic improvements should not be
        used to conceal potentially serious structural or
        water-related problems.
      </p>

      <h2 id="prioritise-work">Prioritising Renovation Work</h2>

      <p>
        Not every improvement needs to happen at the same
        time. Prioritise work according to safety, urgency,
        functionality and available finances.
      </p>

      <p>
        Repairs involving structural integrity, water
        penetration, electrical safety and plumbing should
        generally be considered before decorative upgrades.
      </p>

      <p>
        Once essential issues have been addressed, you can
        plan improvements such as new tiles, kitchen
        cabinetry, lighting and painting.
      </p>

      <h2 id="renovation-budget">Preparing a Renovation Budget</h2>

      <p>
        A renovation budget should cover materials, labour,
        transport, professional services, waste removal
        and other project-related expenses.
      </p>

      <p>
        The final cost depends on the existing condition
        of the property, the size of the work, material
        specifications, location and the complexity of
        the improvements.
      </p>

      <p>
        Request detailed quotations and allow for unexpected
        repairs that may only become visible after existing
        finishes are removed.
      </p>

      <h2 id="choosing-contractor">Choosing the Right Contractor</h2>

      <p>
        Select a contractor with relevant experience,
        appropriate qualifications and a clear understanding
        of the work required.
      </p>

      <p>
        Review previous projects, request references and
        establish a written agreement covering the scope,
        specifications, payment arrangements and expected
        completion period.
      </p>

      <h2 id="managing-renovation">Managing the Renovation Process</h2>

      <p>
        Good coordination helps renovation work progress
        smoothly. Agree on the work sequence, access
        arrangements, working hours and how changes will
        be approved.
      </p>

      <p>
        Monitor workmanship and material quality throughout
        the project. Keep records of payments, agreed
        changes and completed activities.
      </p>

      <blockquote>
        A successful renovation is not simply about making
        a home look new. It is about making the space work
        better for the people who use it.
      </blockquote>

      <p>
        Makyn Construction Company Limited provides
        construction and renovation solutions designed
        around project requirements and client needs.
      </p>
    </>
  ),
},

{
  slug: "kitchen-and-bathroom-improvement-ideas",
  title: "Kitchen and Bathroom Improvement Ideas for Modern Homes",
  category: "Home Improvement",
  description:
    "Discover practical ways to improve your kitchen and bathroom through better layouts, durable materials, lighting, ventilation and functional fittings.",
  image: "/images/blog/kichen.jpg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "6 min read",

  sections: [
    { id: "functional-kitchen", title: "Creating a Functional Kitchen" },
    { id: "kitchen-materials", title: "Choosing Kitchen Materials" },
    { id: "bathroom-layout", title: "Designing a Practical Bathroom" },
    { id: "waterproofing", title: "Waterproofing and Drainage" },
    { id: "lighting-ventilation", title: "Lighting and Ventilation" },
    { id: "planning-upgrades", title: "Planning Your Improvements" },
  ],

  content: (
    <>
      <p>
        Kitchens and bathrooms are among the most frequently
        used spaces in a home. Their design affects comfort,
        convenience, hygiene and the overall experience of
        living in a property.
      </p>

      <p>
        Improving these spaces does not always require
        completely rebuilding them. Thoughtful changes to
        layouts, fittings, storage and finishes can make
        a significant difference.
      </p>

      <h2 id="functional-kitchen">Creating a Functional Kitchen</h2>

      <p>
        A good kitchen design should support the activities
        carried out there every day. Food preparation,
        cooking, cleaning and storage should be arranged
        in a practical way.
      </p>

      <p>
        Consider the relationship between the refrigerator,
        cooking area and sink. Ensure there is adequate
        working space, convenient storage and comfortable
        movement between different areas.
      </p>

      <h2 id="kitchen-materials">Choosing Kitchen Materials</h2>

      <p>
        Kitchen materials should balance appearance,
        durability and ease of maintenance.
      </p>

      <p>
        Worktops, cabinets, flooring and wall finishes
        should be suitable for exposure to moisture, heat,
        regular cleaning and everyday use.
      </p>

      <p>
        Compare material quality, installation requirements
        and maintenance needs before making a final choice.
      </p>

      <h2 id="bathroom-layout">Designing a Practical Bathroom</h2>

      <p>
        Bathroom improvements should begin with a suitable
        layout. Consider the positioning of the toilet,
        shower, washbasin and storage areas.
      </p>

      <p>
        Provide enough clearance for comfortable movement
        and ensure doors, fittings and sanitary fixtures
        can be accessed conveniently.
      </p>

      <p>
        Good storage also helps keep toiletries and cleaning
        supplies organised.
      </p>

      <h2 id="waterproofing">Waterproofing and Drainage</h2>

      <p>
        Bathrooms are regularly exposed to water, making
        proper waterproofing and drainage particularly
        important.
      </p>

      <p>
        Suitable waterproofing systems should be installed
        in the specified areas, while floor gradients and
        drainage outlets should direct water appropriately.
      </p>

      <p>
        Poor waterproofing can lead to dampness, damaged
        finishes and water penetration into adjoining spaces.
      </p>

      <h2 id="lighting-ventilation">Lighting and Ventilation</h2>

      <p>
        Appropriate lighting improves visibility and
        usability in both kitchens and bathrooms.
        Task lighting can support food preparation, while
        well-positioned bathroom lighting helps with
        everyday activities.
      </p>

      <p>
        Ventilation is equally important. Proper airflow
        helps manage moisture, odours and condensation,
        particularly in bathrooms with limited natural
        ventilation.
      </p>

      <h2 id="planning-upgrades">Planning Your Improvements</h2>

      <p>
        Before starting work, establish your priorities,
        budget and preferred finishes. Confirm whether
        plumbing, electrical or structural changes are
        required.
      </p>

      <p>
        Engage appropriate professionals for technical
        work and ensure installations follow relevant
        safety requirements.
      </p>

      <blockquote>
        The best interior improvements combine attractive
        finishes with practical design and dependable
        workmanship.
      </blockquote>

      <p>
        With careful planning, your kitchen and bathroom
        can become more comfortable, functional and
        visually appealing spaces.
      </p>
    </>
  ),
},

{
  slug: "understanding-construction-costs-in-kenya",
  title: "Understanding Construction Costs in Kenya: What Determines the Budget?",
  category: "Building Costs & Planning",
  description:
    "Learn about the major factors affecting building costs in Kenya, including design, materials, labour, site conditions, professional fees and project management.",
  image: "/images/blog/cost.webp",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "8 min read",

  sections: [
    { id: "construction-costs", title: "Understanding Construction Costs" },
    { id: "design-and-size", title: "Building Size and Design" },
    { id: "materials-and-labour", title: "Materials and Labour" },
    { id: "location-and-site", title: "Location and Site Conditions" },
    { id: "professional-fees", title: "Professional Fees and Approvals" },
    { id: "managing-budget", title: "Managing Your Construction Budget" },
  ],

  content: (
    <>
      <p>
        One of the first questions people ask when planning
        to build is: How much will the project cost?
      </p>

      <p>
        Although construction cost estimates can provide
        useful guidance, there is no single price that
        applies to every building. Two houses with similar
        floor areas can have very different budgets because
        of differences in design, specifications, location
        and ground conditions.
      </p>

      <h2 id="construction-costs">Understanding Construction Costs</h2>

      <p>
        Construction costs cover the resources and services
        required to turn a building design into a completed
        structure.
      </p>

      <p>
        These may include materials, labour, equipment,
        transportation, professional services, statutory
        charges, site management and external works.
      </p>

      <h2 id="design-and-size">Building Size and Design</h2>

      <p>
        The size of a building is an important cost factor,
        but the floor area alone does not determine the
        final budget.
      </p>

      <p>
        Complex architectural forms, multiple storeys,
        large openings, balconies, special roof structures
        and customised finishes can affect the amount of
        work and materials required.
      </p>

      <p>
        A simple, well-planned design can help reduce
        unnecessary complexity while still meeting the
        client's needs.
      </p>

      <h2 id="materials-and-labour">Materials and Labour</h2>

      <p>
        Material selection has a significant influence
        on construction expenditure. Different grades,
        brands and specifications have different prices
        and performance characteristics.
      </p>

      <p>
        Labour costs also vary according to the location,
        type of work, availability of skilled workers
        and complexity of the project.
      </p>

      <p>
        Comparing quotations should involve checking
        specifications and quality, not simply choosing
        the lowest price.
      </p>

      <h2 id="location-and-site">Location and Site Conditions</h2>

      <p>
        Where a building is constructed can influence
        transportation, labour availability, material
        supply and access to equipment.
      </p>

      <p>
        Site conditions are equally important. Sloping
        land, weak soils, difficult access, high groundwater
        and extensive excavation can increase project
        requirements.
      </p>

      <p>
        A site investigation helps identify conditions
        that should be considered during design and
        cost estimation.
      </p>

      <h2 id="professional-fees">Professional Fees and Approvals</h2>

      <p>
        Building projects may require services from
        architects, structural engineers, quantity
        surveyors and other specialists.
      </p>

      <p>
        Statutory approvals and other regulatory
        requirements should also be included in the
        project budget.
      </p>

      <p>
        The professionals involved and the approvals
        required depend on the nature and scale of
        the development.
      </p>

      <h2 id="managing-budget">Managing Your Construction Budget</h2>

      <p>
        A detailed budget is one of the most useful tools
        for controlling construction expenditure.
      </p>

      <ul>
        <li>Prepare a clear project brief before design begins.</li>
        <li>Obtain coordinated drawings and specifications.</li>
        <li>Request detailed and comparable quotations.</li>
        <li>Track material purchases and labour expenditure.</li>
        <li>Document design changes and their cost implications.</li>
        <li>Allow a reasonable contingency for unforeseen work.</li>
        <li>Review project expenditure regularly.</li>
      </ul>

      <p>
        Avoid making major changes without understanding
        their financial and technical implications.
      </p>

      <blockquote>
        A well-managed construction budget is built on
        accurate information, realistic planning and
        consistent monitoring.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we believe
        that clear communication and proper planning are
        essential when managing construction projects.
      </p>
    </>
  ),
},

{
  slug: "how-to-plan-a-construction-project",
  title: "How to Plan a Construction Project Before Breaking Ground",
  category: "Building Costs & Planning",
  description:
    "A practical guide to preparing for construction, covering project objectives, land assessment, design, approvals, budgeting, contractor selection and scheduling.",
  image: "/images/blog/before.jpeg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "7 min read",

  sections: [
    { id: "define-objectives", title: "Define Your Project Objectives" },
    { id: "assess-site", title: "Assess the Construction Site" },
    { id: "prepare-design", title: "Prepare the Design and Specifications" },
    { id: "approvals-and-budget", title: "Secure Approvals and Prepare a Budget" },
    { id: "select-contractor", title: "Select the Right Construction Team" },
    { id: "schedule-project", title: "Develop a Construction Schedule" },
    { id: "prepare-for-work", title: "Prepare for Construction" },
  ],

  content: (
    <>
      <p>
        Starting a construction project without adequate
        preparation can lead to delays, unexpected expenses
        and avoidable complications.
      </p>

      <p>
        Whether you are developing a residential home,
        commercial property or institutional building,
        proper planning helps establish a clear direction
        before work begins on site.
      </p>

      <h2 id="define-objectives">Define Your Project Objectives</h2>

      <p>
        Begin by establishing what you want to achieve.
        Identify the purpose of the building, intended
        users, required facilities and expected performance.
      </p>

      <p>
        Develop a project brief that communicates the
        essential requirements. This document will help
        guide design decisions and discussions with
        professionals.
      </p>

      <h2 id="assess-site">Assess the Construction Site</h2>

      <p>
        Understand the land before committing to a
        construction design. Confirm ownership and
        boundaries, investigate access and establish
        whether there are restrictions affecting development.
      </p>

      <p>
        A suitable site investigation should also consider
        ground conditions, drainage, slopes, groundwater
        and existing underground services.
      </p>

      <h2 id="prepare-design">Prepare the Design and Specifications</h2>

      <p>
        Engage qualified professionals to develop
        architectural and engineering designs appropriate
        for the project.
      </p>

      <p>
        Drawings should communicate dimensions, materials,
        structural requirements and relevant building
        services.
      </p>

      <p>
        Clear specifications help ensure that everyone
        understands the expected quality and scope of work.
      </p>

      <h2 id="approvals-and-budget">Secure Approvals and Prepare a Budget</h2>

      <p>
        Identify the statutory permissions and regulatory
        requirements applicable to the proposed development.
        Confirm these with the relevant authorities before
        starting construction.
      </p>

      <p>
        Prepare a realistic project budget covering
        professional fees, approvals, materials, labour,
        equipment, transportation and external works.
      </p>

      <p>
        A contingency allowance should be considered
        to accommodate unforeseen circumstances.
      </p>

      <h2 id="select-contractor">Select the Right Construction Team</h2>

      <p>
        Choosing the right contractor is an important
        part of project preparation. Look for relevant
        experience, appropriate registration and
        qualifications, quality workmanship and reliable
        communication.
      </p>

      <p>
        Discuss the project scope, payment arrangements,
        responsibilities, supervision and expected
        completion period before entering into an agreement.
      </p>

      <h2 id="schedule-project">Develop a Construction Schedule</h2>

      <p>
        A construction schedule identifies the sequence
        of activities and the expected timing of important
        milestones.
      </p>

      <p>
        It should consider material procurement, labour
        availability, inspections, approvals and dependencies
        between different activities.
      </p>

      <p>
        Realistic scheduling helps the project team
        coordinate work and identify potential delays early.
      </p>

      <h2 id="prepare-for-work">Prepare for Construction</h2>

      <p>
        Before physical work begins, confirm that the site
        is accessible, required approvals are in place,
        drawings are available and the construction team
        understands its responsibilities.
      </p>

      <p>
        Establish communication and reporting arrangements
        so that decisions, changes and progress can be
        monitored throughout the project.
      </p>

      <blockquote>
        The quality of a construction project is influenced
        by the decisions made before construction begins.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we recognise
        that proper preparation is essential to delivering
        organised and dependable construction work.
      </p>
    </>
  ),
},

{
  slug: "from-blueprint-to-completed-building",
  title: "From Blueprint to Completed Building: Understanding the Construction Journey",
  category: "Projects & Inspiration",
  description:
    "Follow the journey of a building project from the first design concept through site preparation, structural works, installations, finishing and final handover.",
  image: "/images/blog/jane.jpeg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "7 min read",

  sections: [
    { id: "initial-vision", title: "Every Project Begins With an Idea" },
    { id: "turning-ideas-into-plans", title: "Turning Ideas Into Drawings" },
    { id: "preparing-the-site", title: "Preparing the Construction Site" },
    { id: "building-the-structure", title: "Building the Structure" },
    { id: "bringing-spaces-to-life", title: "Bringing the Spaces to Life" },
    { id: "final-handover", title: "The Final Inspection and Handover" },
  ],

  content: (
    <>
      <p>
        A completed building may appear to be a single
        finished product, but behind every structure is
        a journey involving planning, design, coordination,
        skilled workmanship and countless individual
        construction activities.
      </p>

      <p>
        Understanding this journey helps property owners
        appreciate what goes into transforming an idea
        into a functional building.
      </p>

      <h2 id="initial-vision">Every Project Begins With an Idea</h2>

      <p>
        Every construction project starts with a need or
        vision. A family may want a comfortable home, a
        business may require additional premises, or an
        organisation may need a facility to support its
        operations.
      </p>

      <p>
        At this stage, the client establishes the project
        objectives, preferred features, available budget
        and general expectations.
      </p>

      <h2 id="turning-ideas-into-plans">Turning Ideas Into Drawings</h2>

      <p>
        The initial vision is developed into architectural
        drawings, engineering designs and construction
        specifications.
      </p>

      <p>
        Professionals assess the site, consider applicable
        requirements and coordinate the different technical
        aspects of the proposed building.
      </p>

      <p>
        This stage creates the reference documents that
        guide construction and help the project team
        understand the intended outcome.
      </p>

      <h2 id="preparing-the-site">Preparing the Construction Site</h2>

      <p>
        Once the necessary preparations and approvals
        are complete, the site can be organised for
        construction.
      </p>

      <p>
        Activities may include clearing, setting out,
        excavation, temporary facilities and establishing
        suitable working arrangements.
      </p>

      <p>
        Foundation construction then follows the approved
        engineering design and site investigation findings.
      </p>

      <h2 id="building-the-structure">Building the Structure</h2>

      <p>
        Structural construction gradually transforms
        the foundation into a visible building.
      </p>

      <p>
        Depending on the design, the work may include
        columns, beams, walls, slabs, staircases and
        roofing structures.
      </p>

      <p>
        Throughout this stage, quality control and
        appropriate inspections help confirm that the
        work follows the approved drawings and specifications.
      </p>

      <h2 id="bringing-spaces-to-life">Bringing the Spaces to Life</h2>

      <p>
        Building installations and finishing works
        introduce the features that make the structure
        suitable for its intended use.
      </p>

      <p>
        Electrical systems, plumbing, drainage, windows,
        doors, flooring, ceilings and painting all
        contribute to the building's functionality
        and appearance.
      </p>

      <p>
        External works may also include paving, access
        areas, drainage improvements and landscaping.
      </p>

      <h2 id="final-handover">The Final Inspection and Handover</h2>

      <p>
        Before handover, the completed work should be
        inspected against the agreed scope, drawings
        and specifications.
      </p>

      <p>
        Outstanding defects should be recorded and
        addressed through the agreed process. Relevant
        documentation, warranties and certificates
        should be provided where applicable.
      </p>

      <blockquote>
        Every finished building tells a story of planning,
        teamwork, technical skill and commitment to
        bringing an idea to life.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we value
        every stage of the construction journey because
        lasting results depend on the quality of work
        at every step.
      </p>
    </>
  ),
},

{
  slug: "sustainable-construction-practices",
  title: "Sustainable Construction: Building Responsibly for the Future",
  category: "Industry Insights",
  description:
    "Explore sustainable construction practices that can reduce waste, improve building efficiency, conserve resources and support more responsible development.",
  image: "/images/blog/afodabo.jpeg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "8 min read",

  sections: [
    { id: "meaning-of-sustainability", title: "What Is Sustainable Construction?" },
    { id: "efficient-design", title: "Designing for Efficiency" },
    { id: "responsible-materials", title: "Responsible Material Selection" },
    { id: "water-and-energy", title: "Water and Energy Efficiency" },
    { id: "reducing-waste", title: "Reducing Construction Waste" },
    { id: "long-term-value", title: "Long-Term Building Performance" },
  ],

  content: (
    <>
      <p>
        Construction plays an important role in economic
        development and the creation of spaces where people
        live, work and conduct business.
      </p>

      <p>
        However, building activities also consume materials,
        energy and water and generate waste. Sustainable
        construction seeks to reduce unnecessary environmental
        impacts while delivering buildings that remain
        functional and durable over time.
      </p>

      <h2 id="meaning-of-sustainability">What Is Sustainable Construction?</h2>

      <p>
        Sustainable construction involves planning,
        designing, building and maintaining structures
        in ways that consider environmental, economic
        and social impacts.
      </p>

      <p>
        It encourages responsible resource use, efficient
        building performance, waste reduction and the
        selection of appropriate materials.
      </p>

      <h2 id="efficient-design">Designing for Efficiency</h2>

      <p>
        Sustainable decisions can begin at the architectural
        design stage. Building orientation, window placement,
        shading and natural ventilation can influence how
        much energy a building requires during operation.
      </p>

      <p>
        Thoughtful space planning can also reduce unnecessary
        building areas and avoid complicated construction
        arrangements.
      </p>

      <h2 id="responsible-materials">Responsible Material Selection</h2>

      <p>
        Materials should be selected with consideration
        for durability, availability, performance,
        maintenance and environmental impact.
      </p>

      <p>
        Locally available materials may reduce transportation
        requirements where they are technically suitable.
        Recycled or reused materials can also contribute
        to resource conservation when their quality and
        intended use are properly assessed.
      </p>

      <p>
        Material selection should never compromise
        structural safety or required building performance.
      </p>

      <h2 id="water-and-energy">Water and Energy Efficiency</h2>

      <p>
        Efficient fixtures, appropriate plumbing design
        and rainwater harvesting systems can help reduce
        unnecessary water consumption where suitable.
      </p>

      <p>
        Natural lighting, energy-efficient lighting
        equipment and properly designed ventilation
        can also contribute to improved building
        energy performance.
      </p>

      <p>
        The most appropriate solutions depend on the
        building's use, location, budget and available
        infrastructure.
      </p>

      <h2 id="reducing-waste">Reducing Construction Waste</h2>

      <p>
        Construction waste can arise from poor planning,
        incorrect measurements, unnecessary material
        purchases and improper storage.
      </p>

      <p>
        A well-organised project can reduce waste through
        accurate quantity estimation, proper material
        handling, careful cutting and sorting materials
        for reuse or appropriate recycling.
      </p>

      <h2 id="long-term-value">Long-Term Building Performance</h2>

      <p>
        A building's environmental impact continues
        long after construction is completed. Maintenance
        requirements, durability, energy consumption
        and water use all influence its long-term
        performance.
      </p>

      <p>
        Investing in suitable materials, quality
        workmanship and maintainable building systems
        can support better performance throughout
        the building's useful life.
      </p>

      <blockquote>
        Responsible construction is about creating
        buildings that serve today's needs while
        considering the needs of tomorrow.
      </blockquote>

      <p>
        At Makyn Construction Company Limited, we
        recognise the importance of thoughtful material
        choices, efficient planning and durable
        construction solutions.
      </p>
    </>
  ),
},

{
  slug: "choosing-the-right-construction-contractor",
  title: "How to Choose the Right Construction Contractor for Your Project",
  category: "Industry Insights",
  description:
    "Learn what to look for when hiring a construction contractor, including experience, qualifications, project documentation, quotations, communication and quality control.",
  image: "/images/blog/contracta.jpeg",
  author: "Makyn Construction",
  date: "November 1, 2026",
  readTime: "7 min read",

  sections: [
    { id: "why-contractor-matters", title: "Why Your Contractor Matters" },
    { id: "experience-and-qualifications", title: "Experience and Qualifications" },
    { id: "previous-projects", title: "Reviewing Previous Projects" },
    { id: "quotations-and-contracts", title: "Understanding Quotations and Contracts" },
    { id: "communication", title: "Communication and Project Management" },
    { id: "quality-and-safety", title: "Quality Control and Site Safety" },
    { id: "making-your-decision", title: "Making an Informed Decision" },
  ],

  content: (
    <>
      <p>
        Choosing a construction contractor is one of
        the most important decisions you will make
        when undertaking a building project.
      </p>

      <p>
        The contractor's experience, organisation,
        workmanship and ability to coordinate activities
        can influence the quality and progress of the
        entire project.
      </p>

      <p>
        With several contractors offering construction
        services, knowing what to evaluate can help
        you make a more informed decision.
      </p>

      <h2 id="why-contractor-matters">Why Your Contractor Matters</h2>

      <p>
        A construction contractor coordinates the
        execution of agreed building works. This may
        involve organising labour, sourcing materials,
        managing activities and working with other
        professionals.
      </p>

      <p>
        A dependable contractor should understand
        the project requirements and have a clear
        approach to delivering the agreed scope.
      </p>

      <h2 id="experience-and-qualifications">Experience and Qualifications</h2>

      <p>
        Look for a contractor with experience relevant
        to the type and scale of your project.
      </p>

      <p>
        Ask about their previous work, technical
        capabilities, professional qualifications
        and applicable registration requirements.
        Verify relevant credentials rather than
        relying solely on verbal claims.
      </p>

      <h2 id="previous-projects">Reviewing Previous Projects</h2>

      <p>
        Previous projects can help you understand
        the contractor's workmanship and experience.
      </p>

      <p>
        Where possible, inspect completed work and
        request references from previous clients.
        Ask about the contractor's reliability,
        communication, quality and approach to
        handling challenges.
      </p>

      <h2 id="quotations-and-contracts">Understanding Quotations and Contracts</h2>

      <p>
        A construction quotation should clearly
        explain the work being offered and the
        expected costs.
      </p>

      <p>
        Check whether it identifies materials,
        labour, quantities, specifications,
        exclusions and other relevant expenses.
      </p>

      <p>
        Before work begins, establish a written
        agreement covering the project scope,
        responsibilities, payment schedule,
        expected timeline, variations and
        dispute-resolution arrangements.
      </p>

      <p>
        Be cautious of quotations that are
        unusually low without a clear explanation
        of what is included.
      </p>

      <h2 id="communication">Communication and Project Management</h2>

      <p>
        Good communication helps prevent
        misunderstandings and supports better
        decision-making throughout construction.
      </p>

      <p>
        Establish who will be your main contact,
        how progress will be reported and how
        changes will be approved.
      </p>

      <p>
        The contractor should also demonstrate
        an organised approach to scheduling,
        procurement and coordination of workers.
      </p>

      <h2 id="quality-and-safety">Quality Control and Site Safety</h2>

      <p>
        Quality should be considered throughout
        the project, not only when the building
        is almost complete.
      </p>

      <p>
        Discuss material standards, workmanship
        expectations, inspections and procedures
        for addressing defects.
      </p>

      <p>
        Site safety arrangements are equally
        important. Confirm that appropriate
        safety practices, protective equipment
        and applicable legal requirements
        are observed.
      </p>

      <h2 id="making-your-decision">Making an Informed Decision</h2>

      <p>
        Do not base your decision entirely on
        the lowest quotation or the most
        attractive promises.
      </p>

      <p>
        Compare experience, verified credentials,
        project understanding, workmanship,
        communication and the clarity of the
        proposed agreement.
      </p>

      <blockquote>
        The right construction partner does
        more than undertake building work.
        They help turn your project requirements
        into a well-coordinated result.
      </blockquote>

      <p>
        At Makyn Construction Company Limited,
        we believe that trust, communication
        and commitment to quality are essential
        parts of every construction relationship.
      </p>

      <p>
        Have a project in mind? Contact our team
        to discuss your construction requirements.
      </p>
    </>
  ),
},

];

export const getArticleBySlug = (slug: string) => {
  return blogArticles.find(
    (article) => article.slug === slug
  );
};

export const getFeaturedArticle = () => {
  return blogArticles.find(
    (article) => article.featured
  );
};

export const getRelatedArticles = (
  currentArticle: BlogArticle
) => {
  return blogArticles
    .filter(
      (article) =>
        article.slug !== currentArticle.slug &&
        article.category === currentArticle.category
    )
    .slice(0, 3);
};

export const blogCategories = [
  "Construction Knowledge",
  "Architecture & Design",
  "Home Improvement",
  "Building Costs & Planning",
  "Projects & Inspiration",
  "Industry Insights",
];

export const getAllCategories = () => [
  "All Articles",
  ...blogCategories,
];
