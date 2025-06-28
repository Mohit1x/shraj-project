import { CiBank } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadset } from "react-icons/pi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { Gauge, ShieldCheck, SlidersHorizontal, Flame } from "lucide-react";

export const navlinks = [
  { tag: "Home", path: "/", openProduct: false },
  { tag: "About", path: "/about", openProduct: false },
  { tag: "Products", path: "/all-products", openProduct: true },
  { tag: "Enquiry", path: "/enquiry", openProduct: false },
  { tag: "contact", path: "/contact", openProduct: false },
];

export const ovenMainFeatures = [
  "Custom-built to your specifications",
  "Precise temperature control, including a thermocouple actuated PID digital temperature controller and adjustable PID digital over temperature protection",
  "Motor control push buttons",
  "On-off heat switch",
  "LED pilot lights",
  "1-year Manufacturer's warranty.",
];

export type OvenFeatureSection = {
  title: string;
  description?: string;
  features?: string[];
};

export type OvenOtherFeaturesType = {
  materialsOfConstruction: OvenFeatureSection;
  insulation: OvenFeatureSection;
  heatingMedium: OvenFeatureSection;
  temperatureRange: OvenFeatureSection;
  airCirculation: OvenFeatureSection;
  finish: OvenFeatureSection;
  installation: OvenFeatureSection;
  engineering: OvenFeatureSection;
};

const ovenOtherFeatures = {
  materialsOfConstruction: {
    title: "Materials of Construction",
    description: "Rugged, steel construction includes:",
    features: [
      "12 gauge interior walls and 14 gauge exterior walls",
      "Integrated framing and structural members ensure toughness",
      "304 stainless steel construction available",
    ],
  },
  insulation: {
    title: "Insulation",
    description: '2" to 6" thick, 6# density mineral wool',
  },
  heatingMedium: {
    title: "Heating Medium",
    features: ["Electricity or Gas"],
  },
  temperatureRange: {
    title: "Temperature Range",
    description: "Room temperature to 500°C",
  },
  airCirculation: {
    title: "Air Circulation",
    features: [
      "Air circulation with internal plenums for uniform airflow within the oven",
      "Custom arrangements per application",
    ],
  },
  finish: {
    title: "Finish",
    features: [
      "Exterior finished with acrylic enamel or corrosion resistant urethane system",
      "Interior finished with heat resistant silver",
      "Stainless steel available",
    ],
  },
  installation: {
    title: "Installation",
    description:
      "Shipped completely assembled. Set in place and hook up power supply.",
  },
  engineering: {
    title: "Engineering",
    description:
      "Custom engineered, computer designed units are available. Contact us for more information.",
  },
};

const autoclaveOtherFeatures = {
  designAndBuild: {
    title: "Design and Build",
    features: [
      "Cylindrical / Rectangular design",
      "Stainless steel interior and exterior",
      "Triple walled construction",
      "Powder coated / chrome plated MS Stand",
    ],
  },
  heatingAndPressureSystem: {
    title: "Heating and Pressure System",
    features: [
      "ISI marked flange / immersion heating elements",
      "Working pressure 15 psi to 20 psi",
      "Standard temperature 121°C / 134°C",
      "Automatic pressure control switch",
      "Reliable steam pressure gauges",
    ],
  },
  safetyAndProtection: {
    title: "Safety and Protection",
    features: [
      "Vacuum breaker and steam trap valve",
      "Brass safety valves",
      "Automatic water level cut-off",
      "Silicon rubber door gasket",
    ],
  },
  operationAndMonitoring: {
    title: "Operation and Monitoring",
    features: [
      "Digital Temperature controller",
      "Digital Timer and alarm (buzzer)",
      "Viewing glass water level check",
    ],
  },
};

const MRSOtherFeatures = {
  dimensions: {
    title: "Dimensions",
    features: [
      "Width: 35 in. / 89 cm",
      "Depth: 88 in. / 224 cm",
      "Height: 81 in. / 206 cm overall",
    ],
  },
  door: {
    title: "Door",
    features: [
      "Width: 24 in. / 61 cm",
      "Height: 54 in. / 137 cm",
      "Overlap door with magnetic gasket",
    ],
  },
  installation: {
    title: "Installation",
    features: [
      "Unit ships fully assembled",
      "Simply plug unit into an outlet and the unit is operational",
    ],
  },
  construction: {
    title: "Exterior and Interior",
    features: [
      "Exterior: Embossed galvanized .016 steel construction",
      "Interior: Walls & ceiling - .016 stucco embossed galvanized",
    ],
  },
  insulation: {
    title: "Insulation",
    features: ["4 in. / 10 cm foamed-in-place urethane (UL listed, Class 1)"],
  },
  rackSystem: {
    title: "Rack System",
    features: ["Provided with (1) interior roller racks"],
  },
  removableTray: {
    title: "Removable Tray",
    features: ["(1) HD plastic storage boards"],
  },
  hardware: {
    title: "Hardware",
    features: ["Heavy-duty chrome-plated hardware for long lasting use"],
  },
  lighting: {
    title: "Lighting",
    features: ["(1) Vapor proof light with switch"],
  },
  refrigeration: {
    title: "Refrigeration",
    features: [
      "Drop-in self-contained refrigeration system",
      "Digital thermometer and easy to adjust temperature controller",
    ],
  },
  operatingTemperature: {
    title: "Operating Temperature",
    features: ["2°C to 8°C and -10°C to -20°C"],
  },
  electrical: {
    title: "Electrical",
    features: ["~220V/50Hz/1Ph", "~115V/60Hz/1Ph available"],
  },
};

export const heroProductImages = [
  { img: "/IO1.png", id: 1 },
  { img: "/auto-1-1.png", id: 11 },
  { img: "/MRS-pictures/MRS1.png", id: 16 },
];

export const products = [
  {
    id: 1,
    name: "Batch Ovens",
    brand: "Stericlin",
    type: "Industrial Ovens",
    image: "/IO1.png",
    images: [
      "/BatchOvens/BatchOven1.png",
      "/BatchOvens/BatchOven2.png",
      "/BatchOvens/BatchOven3.png",
      "/BatchOvens/BatchOven4.png",
    ],
    description:
      "A compact Batch Ovens ideal for laboratory sterilization tasks.",
    overallDescription:
      "Shraj Batch Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 2,
    name: "Conveyor Ovens",
    brand: "LabTech",
    type: "Industrial Ovens",
    image: "/IO2.png",
    images: [
      "/ConveyorOvens/ConO1.png",
      "/ConveyorOvens/ConO2.png",
      "/ConveyorOvens/ConO3.png",
      "/ConveyorOvens/ConO4.png",
    ],
    description:
      "Vertical autoclave with knob-lock mechanism and durable SS chamber.",
    overallDescription:
      "Shraj Conveyor Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 3,
    name: "Cabinet Ovens",
    brand: "Medinox",
    type: "Industrial Ovens",
    image: "/IO3.png",
    images: [
      "/CabinetOvens/CabO1.png",
      "/CabinetOvens/CabO2.png",
      "/CabinetOvens/CabO3.png",
      "/CabinetOvens/CabO4.png",
    ],
    description:
      "Offers radial arm locking for enhanced safety and pressure sealing.",
    overallDescription:
      "Shraj Cabinet Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 4,
    name: "Walk-In Ovens",
    brand: "Stericlin",
    type: "Industrial Ovens",
    image: "/IO4.png",
    images: [
      "/WalkInOvens/WIO1.png",
      "/WalkInOvens/WIO1.png",
      "/WalkInOvens/WIO1.png",
      "/WalkInOvens/WIO1.png",
    ],
    description: "Large-capacity horizontal autoclave for hospitals and labs.",
    overallDescription:
      "Shraj Walk-In Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 5,
    name: "Truck-In Ovens",
    brand: "ChillPoint",
    type: "Industrial Ovens",
    image: "/IO5.png",
    images: [
      "/TruckInOvens/TIO1.png",
      "/TruckInOvens/TIO2.png",
      "/TruckInOvens/TIO3.png",
      "/TruckInOvens/TIO4.png",
    ],
    description:
      "Mortuary fridge with six compartments and digital temperature control.",
    overallDescription:
      "Shraj Truck-In Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 6,
    name: "Preheat Ovens",
    brand: "BioCool",
    type: "Industrial Ovens",
    image: "/IO6.png",
    images: [
      "/PreHeatOvens/preheatOven1.png",
      "/PreHeatOvens/preheatOven2.png",
      "/PreHeatOvens/preheatOven3.png",
    ],
    description:
      "Designed for safe storage of blood bags at optimal temperatures.",
    overallDescription:
      "Shraj Preheat Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 7,
    name: "Drum / Tote Warming Ovens",
    brand: "LabCare",
    type: "Industrial Ovens",
    image: "/IO7.png",
    images: [
      "/DrumWarmingOvens/DTW1.png",
      "/DrumWarmingOvens/DTW2.png",
      "/DrumWarmingOvens/DTW3.png",
      "/DrumWarmingOvens/DTW4.png",
    ],
    description:
      "Used in pharmacies and labs for storing temperature-sensitive meds.",
    overallDescription:
      "Shraj Drum / Tote Warming Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 8,
    name: "Curing Ovens",
    brand: "CoolTech",
    type: "Industrial Ovens",
    image: "/IO8.png",
    images: ["/IO8.png", "/CurvingOvens/CurO1.png", "/CurvingOvens/CurO2.png"],
    description:
      "Ultra-low deep freezer for biological and industrial cold storage.",
    overallDescription:
      "Shraj Curing Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 9,
    name: "Drying Ovens",
    brand: "ThermoSafe",
    type: "Industrial Ovens",
    image: "/IO9.png",
    images: [
      "/DryingOvens/DryO1.png",
      "/DryingOvens/DryO2.png",
      "/DryingOvens/DryO3.png",
    ],
    description: "Accurate temperature control for culture growth in labs.",
    overallDescription:
      "Shraj Drying Ovens offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 10,
    name: "Powder Coating Oven",
    brand: "ThermoSafe",
    type: "Industrial Ovens",
    image: "/IO10.png",
    images: [
      "/IO10.png",
      "/PowderCoatingOvens/PCO1.png",
      "/PowderCoatingOvens/PCO2.png",
    ],
    description:
      "Dry heat sterilizer suitable for glassware and lab instruments.",
    overallDescription:
      "Shraj Powder Coating Oven offer a range of sizes and heating arrangements to meet a variety of batch heating applications. Challenge us with your toughest oven applications! Shraj Products is not restricted to industrial oven standard model sizes and, instead, will custom build an industrial oven to meet your specifications.",
    mainFeatures: ovenMainFeatures,
    otherFeatures: ovenOtherFeatures,
    more: {},
  },
  {
    id: 11,
    name: "VERTICAL AUTOCLAVE RADIAL AND KNOB LOCKING",
    brand: "SafeAir",
    type: "Sterilizers",
    image: "/auto-1-1.png",
    images: ["/auto-1-1.png", "/auto-1-2.png"],
    description: "Essential for ventilating hazardous fumes in laboratories.",
    overallDescription:
      "Shraj Industries Pvt. Ltd. offers Vertical Autoclave units with chamber volumes ranging from 22 liters to 175 liters, accommodating two and three drums accordingly. These systems are expertly designed to meet the stringent sterilization requirements of bacteriological and research laboratories, hospitals, clinics, as well as food and beverage facilities. The vertical chamber design ensures optimal space utilization, while the advanced microprocessor control system provides seamless and reliable operation during each use.",
    mainFeatures: [
      "Efficient Operation and Monitoring",
      "Safety and Protection",
      "Design and Build",
      "Heating and Exhaust System",
      "Accessories",
      "Ease of Use",
    ],
    otherFeatures: {
      designAndBuild: {
        title: "Design and Build",
        features: [
          "Durable Build: Strong metal body with a stainless steel chamber",
          "Double & Triple Wall Construction: For enhanced insulation",
        ],
      },
      heatingAndPressureSystem: {
        title: "Heating and Pressure System",
        features: [
          "Automatic Purging: Solenoid valve based auto purging system",
          "Auto Steam Release: Ensures safety after sterilization",
        ],
      },
      safetyAndProtection: {
        title: "Safety and Protection",
        features: [
          "Built-in safety Alerts: Low water indicator for element protection",
          "Secure Locking: Heavy-gauge wing nuts with radial locking mechanism (optional)",
        ],
      },
      operationAndMonitoring: {
        title: "Operation and Monitoring",
        features: [
          "Fully Automatic: Intelligent sterilization control monitoring",
          "Smart Control: Digital temperature controller and indicator",
          "Data Logging & Printing: For compliance and quality tracking (optional)",
        ],
      },
    },
    more: {
      img: ["/table-1.png"],
    },
  },
  {
    id: 12,
    name: "HORIZONTAL CYLINDRICLE HIGH PRESSURE AUTOCLAVE",
    brand: "AirGuard",
    type: "Sterilizers",
    image: "/auto-2.png",
    images: ["/auto-2.png"],
    description:
      "Used to provide sterile and particle-free working environments.",
    overallDescription:
      "Shraj Industries Pvt. Ltd. offers Vertical Autoclave units with chamber volumes ranging from 22 liters to 175 liters, accommodating two and three drums accordingly. These systems are expertly designed to meet the stringent sterilization requirements of bacteriological and research laboratories, hospitals, clinics, as well as food and beverage facilities. The vertical chamber design ensures optimal space utilization, while the advanced microprocessor control system provides seamless and reliable operation during each use.",
    mainFeatures: [
      "Efficient Operation and Monitoring",
      "Safety and Protection",
      "Design and Build",
      "Heating and Exhaust System",
      "Accessories",
      "Ease of Use",
    ],
    otherFeatures: autoclaveOtherFeatures,
    more: {
      img: ["/table-2.png"],
    },
  },
  {
    id: 13,
    name: "HORIZONTAL RECTANGULAR HIGH PRESSURE AUTOCLAVE",
    brand: "BioCool",
    type: "Sterilizers",
    image: "/auto-3.png",
    images: ["/auto-3.png"],
    description:
      "Walk-in cold room for bulk storage of medical or research samples.",
    overallDescription:
      "Shraj Industries Pvt. Ltd. offers Vertical Autoclave units with chamber volumes ranging from 22 liters to 175 liters, accommodating two and three drums accordingly. These systems are expertly designed to meet the stringent sterilization requirements of bacteriological and research laboratories, hospitals, clinics, as well as food and beverage facilities. The vertical chamber design ensures optimal space utilization, while the advanced microprocessor control system provides seamless and reliable operation during each use.",
    mainFeatures: [
      "Efficient Operation and Monitoring",
      "Safety and Protection",
      "Design and Build",
      "Heating and Exhaust System",
      "Accessories",
      "Ease of Use",
    ],
    otherFeatures: autoclaveOtherFeatures,
    more: {
      img: ["/table-3.png"],
    },
  },
  {
    id: 16,
    name: "TWO BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS1.png",
    images: ["/MRS-pictures/MRS1.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Casters: (4) 6 in./15 cm. diameter casters, two are swivel type with wheel brakes",
      "Full length interior roller racks",
      "HD plastic storage boards",
      "Remote systems offered",
    ],

    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-1.png"],
    },
  },
  {
    id: 17,
    name: "TWO BODY MOBILE REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS2.png",
    images: ["/MRS-pictures/MRS2.png"],
    description:
      "Freezer model available: Model SIPL-02W operating temp.:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "HD plastic storage boards",
      "Remote systems offered",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-2.png"],
    },
  },
  {
    id: 18,
    name: "THREE BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS3-1.png",
    images: ["/MRS-pictures/MRS3-1.png", "/MRS-pictures/MRS3-2.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Stainless Steel Body Trays 18 gauge Type 304 stainless steel w/No. 4 finish",
      "Casters: (4) 6 in./ 15 cm. diameter casters , two are swivel type with wheel brakes",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-3.png"],
    },
  },
  {
    id: 19,
    name: "MODEL SIPL-03/2 THREE BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS4-1.png",
    images: ["/MRS-pictures/MRS4-2.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Stainless Steel Body Trays 18 gauge Type 304 stainless steel w/ No. 4 finish",
      "Casters: (4) 6 in./15 cm. diameter casters, two are swivel type with wheel brakes",
      "Full length interior roller racks",
      "TWO BODY CAPACITY AV AILABLE",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-4.png"],
    },
  },
  {
    id: 20,
    name: "ROLL-IN TWO BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS5-1.png",
    images: ["/MRS-pictures/MRS5-2.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Stainless Steel Body Trays 18 gauge Type 304 stainless steel w/No. 4 finish (Optional)",
      "Mortuary cot or carrier",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-5.png"],
    },
  },
  {
    id: 21,
    name: "TWO OR THREE BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS6.png",
    images: ["/MRS-pictures/MRS6.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Two-Tier Carrier",
      "Full length interior roller racks",
      "HD plastic storage boards",
      "Single-Tier Carrier",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-6.png"],
    },
  },
  {
    id: 22,
    name: "MODEL SIPL-03 THREE BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS7.png",
    images: ["/MRS-pictures/MRS7.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Full length interior roller racks",
      "HD plastic storage boards",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-7.png"],
    },
  },
  {
    id: 23,
    name: "TWO BODY SIDE ACTING REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS8.png",
    images: ["/MRS-pictures/MRS8.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Casters: (4) 6 in./15 cm. diameter casters, two are swivel type with wheel brakes",
      "Full length interior roller racks",
      "HD plastic storage boards",
      "Remote systems offered",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-8.png"],
    },
  },
  {
    id: 24,
    name: "THREE BODY SIDE ACTING REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS9.png",
    images: ["/MRS-pictures/MRS9.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Casters: (4) 6 in./15 cm. diameter casters, two are swivel type with wheel brakes",
      "Full length interior roller racks",
      "HD plastic storage boards",
      "Remote systems offered",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-9.png"],
    },
  },
  {
    id: 25,
    name: "FOUR BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS10.png",
    images: ["/MRS-pictures/MRS10.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Full length interior roller racks",
      "HD plastic storage boards",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-10.png"],
    },
  },
  {
    id: 26,
    name: "MODEL SIPL-04/2 TWO OR FOUR BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS11.png",
    images: ["/MRS-pictures/MRS11.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Two-Tier Carrier",
      "Single-Tier Carrier",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-11.png"],
    },
  },
  {
    id: 27,
    name: "SIX BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS12.png",
    images: ["/MRS-pictures/MRS12.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Full length interior roller racks",
      "HD plastic storage boards",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-12.png"],
    },
  },
  {
    id: 28,
    name: "MODEL SIPL-06V SIX BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS13.png",
    images: ["/MRS-pictures/MRS13.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Full length interior roller racks",
      "HD plastic storage boards",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-13.png"],
    },
  },
  {
    id: 29,
    name: "MODEL SIPL-06TTS FOUR OR SIX BODY REFRIGERATOR",
    brand: "CoolTech",
    type: "Mortuary Rrefrigeration System",
    image: "/MRS-pictures/MRS14.png",
    images: ["/MRS-pictures/MRS14.png"],
    description:
      "Freezer model available: Model SIPL-02 Freezer operating temperature:2°C to 8°C and -10°C to -20°C",
    overallDescription:
      "A mortuary refrigeration system is designed to preserve human remains by maintaining low temperatures to slow down decomposition. These systems are essential for hospitals, forensic labs, and funeral homes, offering hygienic, efficient, and reliable storage solutions. Constructed with stainless steel and insulated panels, they ensure durability, temperature consistency, and ease of cleaning while adhering to health and safety regulations.",
    mainFeatures: [
      "Custom sizes for larger cases",
      "Two-Tier Carrier",
      "Single-Tier Carrier",
      "Full length interior roller racks",
    ],
    otherFeatures: MRSOtherFeatures,
    more: {
      img: ["/drawing/drawing-14.png"],
    },
  },
];

export const featuresData = [
  {
    icon: HiOutlineShieldCheck,
    tag: "all time warranty",
    desc: "Peace of mind – all-time warranty coverage included.",
  },
  {
    icon: CiBank,
    tag: "financing available",
    desc: "Easy on the wallet – financing options readily available.",
  },
  {
    icon: PiHeadset,
    tag: "outstanding support",
    desc: "Top-notch service – outstanding support provided.",
  },
  {
    icon: TbTruckDelivery,
    tag: "free delivery & installation",
    desc: "Hassle-free setup – free delivery & installation included.",
  },
];

export const carouselData = [
  "/carousel1.png",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel6.png",
  "/carousel4.png",
  "/carousel5.png",
];

export const banners = ["banner1.png", "banner2.png", "banner3.png"];

export const HomeOvens = [
  { id: 2, img: "/IO2.png", title: "Conveyor Ovens" },
  { id: 3, img: "/IO3.png", title: "Cabinet Ovens" },
  { id: 4, img: "/IO4.png", title: "Walk-In Ovens" },
];
export const HomeMortuary = [
  {
    id: 19,
    img: "/MRS-pictures/MRS4-1.png",
    title: "MODEL SIPL-03/2 THREE BODY REFRIGERATOR",
  },
  {
    id: 20,
    img: "/MRS-pictures/MRS5-1.png",
    title: "ROLL-IN TWO BODY REFRIGERATOR",
  },
  {
    id: 21,
    img: "/MRS-pictures/MRS6.png",
    title: "TWO OR THREE BODY REFRIGERATOR",
  },
];
export const HomeSterilizers = [
  {
    id: 11,
    img: "/auto-1-1.png",
    title: "VERTICAL AUTOCLAVE RADIAL AND KNOB LOCKING",
  },
  {
    id: 12,
    img: "/auto-2.png",
    title: "HORIZONTAL CYLINDRICLE HIGH PRESSURE AUTOCLAVE",
  },
  {
    id: 13,
    img: "/auto-3.png",
    title: "HORIZONTAL RECTANGULAR HIGH PRESSURE AUTOCLAVE",
  },
];

export const features = [
  {
    icon: Gauge,
    title: "High-Performance Systems",
    description: "Engineered for maximum efficiency and output.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Operations",
    description: "Built to deliver consistent, fail-safe performance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Sterilization",
    description: "Tailored solutions to meet your unique requirements.",
  },
  {
    icon: Flame,
    title: "Preservation & Heating",
    description: "Advanced solutions for precise preservation and heating.",
  },
];
