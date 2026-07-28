import { ServiceItem, ProductItem, ProjectItem, TestimonialItem, FaqItem, BlogPost } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Solar Installation',
    shortDesc: 'Turnkey solar panel systems designed for luxury homes and suburban residences.',
    fullDesc: 'Custom-engineered rooftop solar solutions tailored to your home electricity demand. Includes smart net metering setup, rapid tier-1 panel mounting, aesthetic black-frame panels, and integrated smart home energy monitoring.',
    iconName: 'Home',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Tier 1 Monocrystalline PERC & N-Type Panels',
      'Smart Microinverters / Hybrid String Inverters',
      '25-Year Linear Power Warranty',
      'Rooftop Leak-Proof Mounting guarantee',
      'Real-time Mobile App Power Tracking'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Solar Solutions',
    shortDesc: 'Scale energy savings for office buildings, warehouses, shopping malls, and plazas.',
    fullDesc: 'Empower your business with high-yield solar energy. Slash operational overheads, qualify for corporate tax credits, enhance ESG sustainability credentials, and lock in predictable electricity rates for 25+ years.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    features: [
      'High-capacity 50kW to 1MW+ System Architecture',
      'Zero-Upfront Leasing & PPA Financing Options',
      'Peak Shaving & Demand Charge Reduction',
      'Rapid ROI within 3 to 5 years',
      'Dedicated Commercial Project Engineering'
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Solar Grids',
    shortDesc: 'Heavy-duty solar infrastructure for manufacturing plants and industrial complexes.',
    fullDesc: 'Robust multi-megawatt ground-mounted and rooftop arrays built to withstand extreme industrial loads and harsh environments. Seamless integration with high-voltage sub-stations and grid export systems.',
    iconName: 'Factory',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
    features: [
      'Mega-watt Class Photovoltaic Systems',
      'High Voltage Transformer & Switchgear Integration',
      'SCADA Remote Industrial Monitoring',
      'Structural Wind & Load Certified Mounting',
      'Heavy-Duty Corrosion Resistant Hardware'
    ]
  },
  {
    id: 'net-metering',
    title: 'Net Metering Integration',
    shortDesc: 'Sell excess solar power back to the local utility grid for electricity bill credits.',
    fullDesc: 'Complete end-to-end management of utility company applications, bi-directional meter installations, grid synchronization testing, and net metering agreement approvals. Turn your roof into a revenue asset.',
    iconName: 'Zap',
    badge: 'High ROI',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
    features: [
      'Full Utility Application Handling',
      'Bi-Directional Smart Meter Synchronization',
      'Automatic Energy Credit Accounting',
      'Zero Grid Power Waste Assurance',
      'Compliance with State & Regional Grid Standards'
    ]
  },
  {
    id: 'maintenance',
    title: 'Solar Maintenance & Inspection',
    shortDesc: 'Proactive preventative care, thermal drone scans, and performance optimization.',
    fullDesc: 'Ensure your solar array operates at maximum kWh yield. Our certified technicians perform infrared thermal imaging, electrical wiring diagnostics, inverter firmware updates, and string testing.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1356b20?auto=format&fit=crop&w=800&q=80',
    features: [
      'Infrared Thermal Imaging for Hotspot Detection',
      'Inverter Diagnostics & Firmware Updates',
      'String Voltage & Insulation Testing',
      'Preventative Component Replacement',
      '24/7 Remote Monitoring Alerts'
    ]
  },
  {
    id: 'consultation',
    title: 'Solar Consultation & Audit',
    shortDesc: 'Professional 3D shading simulation, energy audits, and custom ROI blueprints.',
    fullDesc: 'Get a comprehensive energy evaluation before spending a dime. We analyze 12 months of utility bills, create LiDAR 3D rooftop shading models, and deliver an exact financial breakdown with payback projections.',
    iconName: 'FileText',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    features: [
      '3D LiDAR Roof Shading Analysis',
      '12-Month Utility Consumption Breakdown',
      'Tax Incentive & Rebate Optimization',
      'Custom Financial Payback & ROI Modeling',
      'No-Obligation Custom Proposal'
    ]
  },
  {
    id: 'cleaning',
    title: 'Solar Panel Cleaning Services',
    shortDesc: 'Specialized de-ionized eco-friendly cleaning to restore lost power efficiency.',
    fullDesc: 'Dust, pollen, bird droppings, and industrial grime can reduce solar power output by up to 25%. Our robotic and soft-bristle water-fed cleaning systems safely clean panels without scratching delicate Anti-Reflective coatings.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    features: [
      'De-Ionized Purified Water Cleaning',
      'Scratch-Free Soft Rotary Brushes',
      'Up to 25% Power Restoration',
      'Seasonal Cleaning Maintenance Contracts',
      'Safe High-Reach Telescopic Equipment'
    ]
  },
  {
    id: 'batteries',
    title: 'Battery Backup & Off-Grid Systems',
    shortDesc: 'Uninterrupted power security during grid outages with high-tech lithium storage.',
    fullDesc: 'Store daytime solar energy for night use or automatic backup power during storms and grid blackouts. Seamless transition in 10 milliseconds so your critical appliances never flicker.',
    iconName: 'BatteryCharging',
    badge: '100% Backup',
    image: 'https://images.unsplash.com/photo-1558441719-6705166e03c7?auto=format&fit=crop&w=800&q=80',
    features: [
      'LiFePO4 Lithium Iron Phosphate Storage',
      '10ms Automatic Blackout Transfer',
      'Peak Shaving Time-of-Use Rate Optimization',
      '10-Year Battery Performance Guarantee',
      'Expandable Modular Capacity (10kWh - 100kWh+)'
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'SolarTech UltraPro 580W N-Type Bifacial Panel',
    category: 'panels',
    priceRange: '$220 - $260 / panel',
    popular: true,
    rating: 4.9,
    reviewsCount: 142,
    efficiency: '22.8% Efficiency',
    warranty: '30-Year Performance Warranty',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80',
    description: 'Next-generation N-Type TOPCon bifacial module capturing light from both front and rear surfaces for up to 25% extra energy yield.',
    specs: {
      'Max Power': '580W',
      'Cell Type': 'N-Type TOPCon Monocrystalline',
      'Efficiency': '22.8%',
      'Dimensions': '2278 x 1134 x 30 mm',
      'Weight': '27.8 kg',
      'Bifaciality Ratio': '80% ± 5%'
    }
  },
  {
    id: 'prod-2',
    name: 'SolarTech Apex 450W All-Black Architectural Panel',
    category: 'panels',
    priceRange: '$180 - $210 / panel',
    popular: true,
    rating: 4.8,
    reviewsCount: 98,
    efficiency: '21.5% Efficiency',
    warranty: '25-Year Product & Power Warranty',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
    description: 'Sleek premium all-black aesthetic engineered for luxury residential roofs. Anti-reflective toughened glass with extreme hail resistance.',
    specs: {
      'Max Power': '450W',
      'Cell Type': 'Mono PERC Half-Cut',
      'Efficiency': '21.5%',
      'Frame': 'Anodized Matte Black Aluminum',
      'Hail Rating': 'Class 4 (up to 40mm hail)'
    }
  },
  {
    id: 'prod-3',
    name: 'SolarTech SyncPro 12kW Hybrid Smart Inverter',
    category: 'inverters',
    priceRange: '$1,800 - $2,200',
    popular: true,
    rating: 4.9,
    reviewsCount: 86,
    efficiency: '98.6% Efficiency',
    warranty: '12-Year Warranty (Extendable to 20)',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    description: 'Dual MPPT hybrid inverter supporting solar, battery, grid, and generator inputs with built-in Wi-Fi and smart meter gateway.',
    specs: {
      'Rated AC Output': '12,000 W',
      'Max PV Input': '18,000 W',
      'MPPT Trackers': '2 (4 Strings)',
      'Peak Efficiency': '98.6%',
      'Communication': 'Wi-Fi / Ethernet / 4G / RS485'
    }
  },
  {
    id: 'prod-4',
    name: 'SolarTech Commercial GridInverter 100kW 3-Phase',
    category: 'inverters',
    priceRange: '$6,500 - $7,800',
    popular: false,
    rating: 4.7,
    reviewsCount: 34,
    efficiency: '99.0% Efficiency',
    warranty: '10-Year Commercial Warranty',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    description: 'Heavy commercial 3-phase string inverter with 10 independent MPPTs for large roof orientations and industrial parks.',
    specs: {
      'Rated Output': '100 kW',
      'AC Voltage': '400V / 480V 3-Phase',
      'MPPT Count': '10',
      'Enclosure': 'IP66 Weatherproof'
    }
  },
  {
    id: 'prod-5',
    name: 'SolarTech PowerVault 15kWh LiFePO4 Battery Unit',
    category: 'batteries',
    priceRange: '$3,800 - $4,500',
    popular: true,
    rating: 5.0,
    reviewsCount: 112,
    efficiency: '96% Round-Trip',
    warranty: '10-Year / 6,000 Cycles Warranty',
    image: 'https://images.unsplash.com/photo-1558441719-6705166e03c7?auto=format&fit=crop&w=600&q=80',
    description: 'Wall-mounted slimline Lithium Iron Phosphate battery pack with integrated intelligent BMS, auto thermal control, and emergency blackout transfer.',
    specs: {
      'Capacity': '15.36 kWh',
      'Nominal Voltage': '51.2 V',
      'Max Discharge': '100A Continuous',
      'Chemistry': 'LiFePO4 (Safe Non-Toxic)',
      'Expandable': 'Up to 15 units parallel (230kWh)'
    }
  },
  {
    id: 'prod-6',
    name: 'SolarTech Commercial Storage Rack 50kWh',
    category: 'batteries',
    priceRange: '$12,000 - $14,500',
    popular: false,
    rating: 4.9,
    reviewsCount: 29,
    efficiency: '96.5% Round-Trip',
    warranty: '10-Year Performance Warranty',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80',
    description: 'High-density industrial energy storage cabinet with automatic aerosol fire suppression and climate-controlled liquid cooling.',
    specs: {
      'Capacity': '51.2 kWh',
      'Voltage Range': '400V - 750V High Voltage',
      'Cooling': 'Integrated Liquid Cooling System',
      'Fire Safety': 'Aerosol Automatic Suppression'
    }
  },
  {
    id: 'prod-7',
    name: 'SolarTech DuraRail Anodized Roof Railing & Clamps',
    category: 'mounting',
    priceRange: '$45 - $60 / panel set',
    popular: false,
    rating: 4.8,
    reviewsCount: 67,
    efficiency: '180 mph Wind Tested',
    warranty: '25-Year Anti-Corrosion Warranty',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=600&q=80',
    description: 'Aircraft-grade 6005-T5 aluminum rails with stainless steel EPDM rubber sealed mounting feet for zero roof leaks.',
    specs: {
      'Material': '6005-T5 Aluminum & SUS304 Steel',
      'Wind Load': 'Up to 180 mph (80 m/s)',
      'Snow Load': '1.4 KN/m²',
      'Roof Compatibility': 'Tile, Metal, Shingle, Flat Roofs'
    }
  },
  {
    id: 'prod-8',
    name: 'SolarTech AquaFlow Deep Well Solar Water Pump 5HP',
    category: 'pumps',
    priceRange: '$1,250 - $1,600',
    popular: true,
    rating: 4.9,
    reviewsCount: 53,
    efficiency: '95% Motor Efficiency',
    warranty: '5-Year Full Replacement Warranty',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    description: 'High-lift brushless DC submersible solar pump ideal for agricultural irrigation, livestock, and rural community water supply.',
    specs: {
      'Motor Power': '5 HP (3.7 kW)',
      'Max Flow Rate': '35,000 Liters / Hour',
      'Max Head Distance': '180 Meters',
      'Controller': 'Smart MPPT Pump Controller'
    }
  },
  {
    id: 'prod-9',
    name: 'SolarTech SunLumin All-In-One Solar Street Light 120W',
    category: 'lights',
    priceRange: '$160 - $220 / unit',
    popular: false,
    rating: 4.7,
    reviewsCount: 88,
    efficiency: '190 lm/W LED Optics',
    warranty: '5-Year All-Inclusive Warranty',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
    description: 'Integrated solar lighting unit with mono PV panel, high-brightness Philips LED chips, motion sensor, and lithium battery.',
    specs: {
      'Brightness': '18,000 Lumens',
      'Battery': 'LifePO4 3.2V 90Ah',
      'Lighting Time': '12-15 Hours per charge',
      'IP Rating': 'IP67 Waterproof & Dustproof'
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Modern Villa Rooftop Installation',
    category: 'residential',
    location: 'Silicon Valley, CA',
    capacity: '18 kW System + 30kWh Battery',
    savings: '$4,800 / year',
    completionYear: '2025',
    panelsCount: 32,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Flush-mounted all-black panels on a custom luxury residence with complete off-grid power security during wildfires and grid outages.'
  },
  {
    id: 'proj-2',
    title: 'Apex Commercial Logistics Center',
    category: 'commercial',
    location: 'Austin, TX',
    capacity: '350 kW Rooftop Array',
    savings: '$62,000 / year',
    completionYear: '2025',
    panelsCount: 610,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    description: 'Large scale ballasted commercial array lowering warehouse energy bills by 88% and providing EV charging power for company logistics fleets.'
  },
  {
    id: 'proj-3',
    title: 'Green Valley Industrial Manufacturing',
    category: 'industrial',
    location: 'Phoenix, AZ',
    capacity: '1.2 MW Ground Mount & Rooftop',
    savings: '$210,000 / year',
    completionYear: '2024',
    panelsCount: 2150,
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-megawatt installation powering heavy industrial metal fabrication equipment with high-voltage step-up grid integration.'
  },
  {
    id: 'proj-4',
    title: 'Suburban Smart Home Net Metering',
    category: 'residential',
    location: 'San Jose, CA',
    capacity: '12.5 kW Array',
    savings: '$3,200 / year',
    completionYear: '2025',
    panelsCount: 24,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    description: 'High-efficiency residential setup generating 120% of household energy needs and earning annual grid export credits from PG&E.'
  },
  {
    id: 'proj-5',
    title: 'Horizon Corporate Tech Campus',
    category: 'commercial',
    location: 'Seattle, WA',
    capacity: '180 kW Carport & Rooftop',
    savings: '$38,000 / year',
    completionYear: '2024',
    panelsCount: 320,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Dual-purpose solar parking canopy providing shade for 120 employee vehicles while powering corporate office servers.'
  },
  {
    id: 'proj-6',
    title: 'AgriTech Farms Solar Irrigation System',
    category: 'industrial',
    location: 'Fresno, CA',
    capacity: '450 kW Solar Well Array',
    savings: '$85,000 / year',
    completionYear: '2025',
    panelsCount: 780,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Off-grid agricultural solar pumping plant irrigating 600 acres of farmland with zero diesel fuel consumption.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Robert Jenkins',
    role: 'Homeowner',
    location: 'San Jose, CA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Switching to SolarTech Energy was the smartest financial decision I have made in years. My monthly electric bill plummeted from $480 down to a minimal $15 grid connection fee. Installation was completed in just 2 days!',
    projectType: '14kW Residential System + Battery',
    annualSavings: '$5,580 / yr',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Sarah Lin',
    role: 'VP of Operations, Nova Tech',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'SolarTech engineered a 220kW rooftop solar system for our manufacturing headquarters. Their engineering team handled all city permits, tax credit documentation, and grid interconnection flawlessly. Extraordinary service!',
    projectType: '220kW Commercial Array',
    annualSavings: '$41,200 / yr',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Marcus Vance',
    role: 'Property Developer',
    location: 'Phoenix, AZ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'We partnered with SolarTech for a 50-home eco-luxury housing subdivision. Their Tier-1 panels look sleek, their 25-year warranty gives home buyers total peace of mind, and their customer support is always responsive.',
    projectType: 'Residential Community Project',
    annualSavings: '$180,000+ Total',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How do solar panels work during cloudy days or rainy weather?',
    answer: 'Solar panels generate electricity using photovoltaic light energy, not heat. While power output drops to about 20%–50% on very overcast days, modern N-Type and Monocrystalline panels continue generating power from diffused sunlight. Plus, net metering or battery backups seamlessly supply power when clouds pass.'
  },
  {
    id: 'faq-2',
    category: 'cost',
    question: 'How much money can I save with solar energy?',
    answer: 'Average residential homeowners save between $1,500 and $4,500 annually on electricity bills. Over a 25-year panel lifetime, total net savings often exceed $60,000 to $100,000+, depending on local electricity rates, tax incentives, and system size.'
  },
  {
    id: 'faq-3',
    category: 'cost',
    question: 'What solar incentives, tax credits, and rebates are available?',
    answer: 'Under current federal policies, homeowners and businesses qualify for a 30% Federal Investment Tax Credit (ITC) on the total cost of solar and battery storage installation. Additional state rebates, SREC credits, and accelerated commercial depreciation (MACRS) further lower upfront costs.'
  },
  {
    id: 'faq-4',
    category: 'installation',
    question: 'How long does the solar panel installation process take?',
    answer: 'Physical installation of rooftop panels takes only 1 to 2 days. The complete turnkey process—including initial site survey, custom 3D engineering, municipal permits, and final utility net metering interconnection—typically takes 2 to 4 weeks total.'
  },
  {
    id: 'faq-5',
    category: 'netmetering',
    question: 'What is Net Metering and how does it benefit me?',
    answer: 'Net Metering is a utility billing arrangement that credits solar system owners for electricity sent back to the grid. When your panels produce excess power during sunny afternoons, your meter spins backward, earning credits you can use during night hours.'
  },
  {
    id: 'faq-6',
    category: 'maintenance',
    question: 'What maintenance do solar panels require?',
    answer: 'Solar panels have zero moving parts and require minimal maintenance. Rinsing dust or pollen off panels 1-2 times a year and scheduling an annual professional electrical/thermal health check will ensure optimal 25+ year performance.'
  },
  {
    id: 'faq-7',
    category: 'installation',
    question: 'Will solar panels damage my roof or cause leaks?',
    answer: 'No! SolarTech Energy utilizes certified leak-proof flashings, stainless steel hardware, and EPDM rubber waterproofing seals. In fact, solar panels protect the covered roof section from UV degradation and weather damage.'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Complete 2026 Guide to Solar Tax Credits & Net Metering',
    category: 'Guides & Policy',
    author: 'Elena Rostova, Chief Energy Economist',
    date: 'July 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    tags: ['Tax Credits', 'Net Metering', 'Savings', '2026 Policy'],
    excerpt: 'Everything you need to know about taking advantage of the 30% Federal ITC, state rebates, and net metering bill credits in 2026.',
    content: `
### Maximizing Your Solar Returns in 2026

Solar energy adoption is accelerating rapidly, driven by rising utility electricity tariffs and lucrative government tax incentives.

#### 1. The 30% Federal Investment Tax Credit (ITC)
The 30% Federal ITC allows homeowners and commercial properties to deduct 30% of total solar installation expenses (including panels, inverters, battery storage, wiring, and labor) directly from their federal tax liability.

#### 2. Net Metering 3.0 & Battery Integration
As utility companies update net metering structures, pairing solar arrays with high-capacity lithium battery backup (like LiFePO4 storage) enables "Time-of-Use" rate arbitrage—storing daytime solar energy and discharging during expensive peak evening tariff hours.

#### 3. Property Value Boost
Studies by the National Renewable Energy Laboratory (NREL) show that solar panel installations increase home market values by an average of 4.1% while remaining exempt from property tax increases in most states.
`
  },
  {
    id: 'blog-2',
    title: 'N-Type TOPCon vs Mono PERC: Which Solar Panel Technology is Best?',
    category: 'Technology',
    author: 'Dr. Arthur Pendelton, Head of Solar Engineering',
    date: 'June 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    tags: ['Solar Tech', 'TOPCon', 'Mono PERC', 'Efficiency'],
    excerpt: 'A technical comparison between N-Type TOPCon and traditional Mono PERC modules in high-temperature performance and bifacial yield.',
    content: `
### Solar PV Cell Evolution

Choosing the right solar cell architecture dictates your total system output over 25 to 30 years.

#### N-Type TOPCon Advantages
* **Higher Conversion Efficiency:** Reaches up to 23% module efficiency compared to 21% for conventional P-type PERC.
* **Lower Temperature Coefficient:** Degrades far less on hot summer days (-0.30%/°C vs -0.35%/°C).
* **Zero Light-Induced Degradation (LID):** N-type silicon eliminates boron-oxygen defects, preserving first-year output.
* **Superior Bifaciality:** Captures up to 80% rear-side reflection light.
`
  },
  {
    id: 'blog-3',
    title: 'How Battery Backup Storage Secures Your Home During Blackouts',
    category: 'Storage',
    author: 'David Vance, Microgrid Architect',
    date: 'June 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558441719-6705166e03c7?auto=format&fit=crop&w=800&q=80',
    tags: ['Battery Storage', 'Off-Grid', 'Blackout Protection', 'PowerVault'],
    excerpt: 'Discover how smart lithium iron phosphate batteries switch instantly during power outages to keep refrigerators, lights, and medical equipment running.',
    content: `
### Uninterrupted Power Independence

When extreme storms or grid failures strike, standard grid-tied solar systems automatically shut down to protect line workers. 

By adding an integrated smart battery backup, your system creates a microgrid within 10 milliseconds of a blackout, keeping your essential electronics powered without noisy, polluting gas generators.
`
  }
];

export const PARTNER_BRANDS = [
  { name: 'Tesla Energy', logoText: 'TESLA POWERWALL' },
  { name: 'Canadian Solar', logoText: 'CANADIAN SOLAR' },
  { name: 'SolarEdge', logoText: 'SOLAREDGE' },
  { name: 'Enphase Energy', logoText: 'ENPHASE' },
  { name: 'Huawei Solar', logoText: 'HUAWEI FUSION' },
  { name: 'SMA Solar', logoText: 'SMA SUNNY BOY' },
  { name: 'SunPower', logoText: 'SUNPOWER' }
];
