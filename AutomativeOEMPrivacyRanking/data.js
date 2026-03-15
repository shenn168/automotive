// Automotive OEM Privacy Ranking Data
const rankingData = [
    {
        rank: 1,
        oemName: "General Motors (OnStar)",
        brandName: "GM",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 5,
        privacyStatements: [
            {
                name: "OnStar Privacy Statement",
                url: "https://www.onstar.com/us/en/privacy_statement/"
            }
        ],
        rationale: "OnStar has historically been transparent about data collection, limiting third-party sharing without explicit consent. Clear opt-in/opt-out mechanisms and relatively straightforward language about connected services data usage. Strong privacy controls for location data."
    },
    {
        rank: 2,
        oemName: "BMW ConnectedDrive",
        brandName: "BMW",
        country: "Germany",
        countryCode: "🇩🇪",
        privacyRating: 5,
        privacyStatements: [
            {
                name: "BMW ConnectedDrive Privacy Policy",
                url: "https://www.bmw.ca/en/topics/details/connected-drive-privacy-policy.html"
            }
        ],
        rationale: "Strong GDPR compliance framework (BMW is EU-based). Clear separation of data purposes. Explicit consent mechanisms for non-essential data. Transparent about law enforcement requests. Good data minimization practices."
    },
    {
        rank: 3,
        oemName: "Mercedes-Benz (Mercedes me connect)",
        brandName: "Mercedes-Benz",
        country: "Germany",
        countryCode: "🇩🇪",
        privacyRating: 5,
        privacyStatements: [
            {
                name: "Mercedes me connect Privacy Notice",
                url: "https://www.mercedes-benz.com/en/privacy/mercedes-me-connect/"
            }
        ],
        rationale: "Comprehensive privacy notice with clear layering of information. Strong GDPR compliance. Explicit purpose limitation and data minimization. Transparent retention periods. Clear third-party data sharing restrictions."
    },
    {
        rank: 4,
        oemName: "Volkswagen (We Connect)",
        brandName: "Volkswagen",
        country: "Germany",
        countryCode: "🇩🇪",
        privacyRating: 4,
        privacyStatements: [
            {
                name: "We Connect Privacy Policy",
                url: "https://consent.vwgroup.io/consent/v1/texts/WeConnect/gb/en/dataprivacycar/latest/html"
            }
        ],
        rationale: "Well-structured privacy policy with clear consent mechanisms. Strong GDPR compliance given EU headquarters. Transparent about data processing. However, some ambiguity around certain third-party sharing arrangements."
    },
    {
        rank: 5,
        oemName: "Lexus Connected Services",
        brandName: "Lexus",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 4,
        privacyStatements: [
            {
                name: "Lexus Connected Services Privacy Notice",
                url: "https://www.lexus.com/privacyvts"
            }
        ],
        rationale: "Generally clear about data collection and usage. Toyota's statements are relatively transparent about what data is collected and with whom it may be shared. However, privacy controls could be more granular."
    },
    {
        rank: 6,
        oemName: "Toyota Connected Services",
        brandName: "Toyota",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 4,
        privacyStatements: [
            {
                name: "Toyota Connected Services Privacy Notice",
                url: "https://www.toyota.com/privacyvts/"
            }
        ],
        rationale: "Reasonable transparency regarding connected services data. However, has faced litigation regarding unlawful data sharing with third parties (CAS, insurance companies) without explicit consumer consent, which raises concerns about actual implementation vs. stated policy."
    },
    {
        rank: 7,
        oemName: "Nissan/Infiniti (NissanConnect)",
        brandName: "Nissan",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 4,
        privacyStatements: [
            {
                name: "NissanConnect Services Privacy Policy",
                url: "https://www.nissanusa.com/connect/privacy"
            }
        ],
        rationale: "Generally adequate privacy protections with clear opt-in/opt-out options. However, some statements could be clearer regarding data retention periods and third-party access."
    },
    {
        rank: 8,
        oemName: "Ford Connected Vehicle",
        brandName: "Ford",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 4,
        privacyStatements: [
            {
                name: "Ford Connected Vehicle Privacy Notice",
                url: "https://www.ford.com/help/privacy/connected-vehicle/"
            }
        ],
        rationale: "Reasonable transparency about data collection. Clear purpose limitation. However, Ford's history of misleading consumers about quality assurance (per litigation) raises concerns about trustworthiness in privacy implementation. Privacy controls could be more granular."
    },
    {
        rank: 9,
        oemName: "Honda (HondaLink)",
        brandName: "Honda",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "HondaLink Privacy Policy",
                url: "https://hondalink.honda.com/privacy"
            }
        ],
        rationale: "Adequate basic privacy protections. However, privacy statement is relatively generic and lacks specific detail about data minimization practices. Limited transparency regarding third-party data sharing arrangements."
    },
    {
        rank: 10,
        oemName: "Hyundai Bluelink",
        brandName: "Hyundai",
        country: "South Korea",
        countryCode: "🇰🇷",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "Hyundai Bluelink Privacy Policy",
                url: "https://www.hyundai.com/worldwide/en/privacy-policy"
            }
        ],
        rationale: "While the privacy policy covers basic protections, Hyundai's history of data breaches (2.7 million individuals affected) and penalties from the CFPB for furnishing inaccurate information to credit reporting agencies raises significant concerns about actual data protection practices and implementation."
    },
    {
        rank: 11,
        oemName: "Kia Connect",
        brandName: "Kia",
        country: "South Korea",
        countryCode: "🇰🇷",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "Kia Connect Privacy Policy",
                url: "https://owners.kia.com/us/en/privacy-policy.html"
            }
        ],
        rationale: "Similar concerns to Hyundai given shared ownership structure (Hyundai Motor Group). Data breach history undermines confidence in stated privacy protections. Privacy statement lacks robustness in data minimization language."
    },
    {
        rank: 12,
        oemName: "Acura (AcuraLink)",
        brandName: "Acura",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "AcuraLink Privacy Policy",
                url: "https://acuralink.acura.com/privacy"
            }
        ],
        rationale: "Basic privacy framework but lacks depth. Limited transparency regarding how data is used internally vs. shared externally. Insufficient detail on data retention and deletion practices."
    },
    {
        rank: 13,
        oemName: "Chevrolet/GMC/Cadillac/Buick (OnStar)",
        brandName: "Chevrolet",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "OnStar Privacy Statement",
                url: "https://www.onstar.com/us/en/privacy_statement/"
            }
        ],
        rationale: "While OnStar has reasonable protections, the shared platform across multiple brands raises questions about granular consent for brand-specific data uses. Some ambiguity around data sharing between GM divisions."
    },
    {
        rank: 14,
        oemName: "Mazda Connected Services",
        brandName: "Mazda",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "Mazda Connected Services Privacy Policy",
                url: "https://www.mazdausa.com/site/privacy-connectedservices"
            }
        ],
        rationale: "Fairly basic privacy protections. Lacks detailed transparency regarding data minimization, retention periods, and third-party access governance. Privacy statement is relatively vague on key consumer protections."
    },
    {
        rank: 15,
        oemName: "Subaru STARLINK",
        brandName: "Subaru",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "Subaru STARLINK Privacy Policy",
                url: "https://www.subaru.com/support/starlink-privacy-policy.html"
            }
        ],
        rationale: "Adequate but generic privacy protections. Limited detail on data governance and third-party sharing restrictions. Could provide greater transparency on consumer rights and data access."
    },
    {
        rank: 16,
        oemName: "Mitsubishi Connect",
        brandName: "Mitsubishi",
        country: "Japan",
        countryCode: "🇯🇵",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "Mitsubishi Connect Privacy Policy",
                url: "https://www.mitsubishicars.com/mitsubishi-connect-privacy"
            }
        ],
        rationale: "Basic privacy framework with limited depth. Insufficient transparency regarding data uses and third-party relationships. Lacks robust data minimization language."
    },
    {
        rank: 17,
        oemName: "Lincoln Connected Vehicle",
        brandName: "Lincoln",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 3,
        privacyStatements: [
            {
                name: "Lincoln Connected Vehicle Privacy Notice",
                url: "https://www.lincoln.com/help/privacy-policy/connected-vehicle/"
            }
        ],
        rationale: "Similar to Ford's framework given corporate relationship, but with less transparency and detail. Privacy controls appear limited."
    },
    {
        rank: 18,
        oemName: "Chrysler/Dodge/Jeep/Ram (FCA UConnect)",
        brandName: "Chrysler",
        country: "Italy",
        countryCode: "🇮🇹",
        privacyRating: 2,
        privacyStatements: [
            {
                name: "FCA Connected Services Privacy Notice",
                url: "https://www.driveuconnect.com/connected-services/privacy.html"
            }
        ],
        rationale: "Privacy statement is relatively generic. Stellantis has faced shareholder lawsuits alleging concealment of corporate misconduct, raising concerns about transparency. Limited transparency regarding third-party data sharing. Privacy controls are not granular."
    },
    {
        rank: 19,
        oemName: "Alfa Romeo",
        brandName: "Alfa Romeo",
        country: "Italy",
        countryCode: "🇮🇹",
        privacyRating: 2,
        privacyStatements: [
            {
                name: "Alfa Connect Privacy Policy",
                url: "https://www.alfaromeousa.com/connect/privacy"
            }
        ],
        rationale: "Multiple privacy statements across regions create inconsistency. Stellantis corporate concerns carry over. Limited consumer-friendly transparency. Lack of clear data minimization practices."
    },
    {
        rank: 20,
        oemName: "Genesis Connected Services",
        brandName: "Genesis",
        country: "South Korea",
        countryCode: "🇰🇷",
        privacyRating: 2,
        privacyStatements: [
            {
                name: "Genesis Connected Services Privacy Notice",
                url: "https://owners.genesis.com/us/en/privacy-policy.html"
            }
        ],
        rationale: "Relatively basic privacy protections. Limited transparency regarding data governance and third-party relationships. Consumer privacy controls appear minimal. Lacks detailed retention and deletion policies."
    },
    {
        rank: 21,
        oemName: "Maserati",
        brandName: "Maserati",
        country: "Italy",
        countryCode: "🇮🇹",
        privacyRating: 2,
        privacyStatements: [
            {
                name: "Global Privacy Policy for Connected Vehicles",
                url: "https://www.maserati.com/international/en/privacy-policy-connected-car"
            }
        ],
        rationale: "Sparse privacy information specific to connected services. Global privacy policy lacks granularity. Limited transparency on data sharing practices. Insufficient detail on consumer rights and data minimization."
    },
    {
        rank: 22,
        oemName: "Peugeot/Citroën/Opel/Vauxhall (Stellantis)",
        brandName: "Peugeot",
        country: "Italy",
        countryCode: "🇮🇹",
        privacyRating: 2,
        privacyStatements: [
            {
                name: "Stellantis Connected Services Privacy Policy",
                url: "https://www.stellantis.com/en/privacy-policy"
            }
        ],
        rationale: "General Stellantis privacy policy lacks brand-specific detail. Given Stellantis regulatory concerns, confidence in implementation is limited. Privacy statement does not clearly separate essential vs. non-essential data collection."
    },
    {
        rank: 23,
        oemName: "Rivian",
        brandName: "Rivian",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 2,
        privacyStatements: [
            {
                name: "Data Privacy Notice",
                url: "https://rivian.com/legal/privacy"
            }
        ],
        rationale: "As a newer entrant, Rivian's privacy framework is still developing. Privacy notice lacks comprehensiveness. Limited transparency regarding data governance and consumer controls. Insufficient detail on data minimization and retention practices."
    },
    {
        rank: 24,
        oemName: "Tesla",
        brandName: "Tesla",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 1,
        privacyStatements: [
            {
                name: "Customer Privacy Notice",
                url: "https://www.tesla.com/legal/privacy"
            }
        ],
        rationale: "Despite being a technology-focused company, Tesla's privacy notice is notably opaque regarding connected vehicle data collection and sharing. Minimal transparency on data minimization. Limited consumer control mechanisms. History of over 1,750 lawsuits including privacy-related claims raises significant concerns. Lacks clear third-party data sharing restrictions. Insufficient detail on data retention and deletion."
    },
    {
        rank: 25,
        oemName: "Lucid Motors",
        brandName: "Lucid",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 1,
        privacyStatements: [
            {
                name: "Vehicle Data Privacy Policy",
                url: "https://www.lucidmotors.com/legal/vehicle-data-privacy-policy"
            }
        ],
        rationale: "Privacy policy is relatively underdeveloped for a connected vehicle platform. Lacks depth and transparency on key consumer protections. Minimal detail on data governance, retention, and consumer rights. Insufficient information on third-party data sharing limits."
    },
    {
        rank: 26,
        oemName: "VinFast",
        brandName: "VinFast",
        country: "Vietnam",
        countryCode: "🇻🇳",
        privacyRating: 1,
        privacyStatements: [
            {
                name: "Connected Services Privacy Policy",
                url: "https://vinfastauto.us/privacy-policy"
            }
        ],
        rationale: "Privacy statement lacks detail and transparency. Limited consumer-friendly language. Insufficient governance around data minimization and third-party access. Weak on consumer rights and data access mechanisms. Lacks clear retention and deletion policies."
    },
    {
        rank: 27,
        oemName: "NIO",
        brandName: "NIO",
        country: "China",
        countryCode: "🇨🇳",
        privacyRating: 1,
        privacyStatements: [
            {
                name: "Account and Digital Services Privacy Notice",
                url: "https://www.nio.com/privacy"
            }
        ],
        rationale: "Privacy notice is sparse and lacks comprehensive consumer protections. Limited transparency regarding data uses and sharing. Minimal consumer control mechanisms. Insufficient detail on data minimization, retention, and deletion practices."
    },
    {
        rank: 28,
        oemName: "BYD",
        brandName: "BYD",
        country: "China",
        countryCode: "🇨🇳",
        privacyRating: 1,
        privacyStatements: [
            {
                name: "Privacy Policy",
                url: "#"
            }
        ],
        rationale: "Specific connected privacy statement not readily available or not sufficiently detailed. This absence itself is a significant privacy concern. Unclear governance and consumer protections for connected vehicle data."
    },
    {
        rank: 29,
        oemName: "PACCAR (Kenworth, Peterbilt, DAF)",
        brandName: "PACCAR",
        country: "United States",
        countryCode: "🇺🇸",
        privacyRating: 1,
        privacyStatements: [
            {
                name: "PACCAR Connect Privacy Policy",
                url: "https://paccarconnect.com/privacy-policy/"
            }
        ],
        rationale: "Commercial vehicle privacy statements are often less consumer-focused and more enterprise-oriented. However, they generally lack transparency regarding driver privacy protections. Limited consumer-friendly language. Insufficient detail on personal data minimization in fleet management contexts."
    },
    {
        rank: 30,
        oemName: "Daimler Truck",
        brandName: "Daimler",
        country: "Germany",
        countryCode: "🇩🇪",
        privacyRating: 1,
        privacyStatements: [
            {
                name: "Daimler Truck Privacy Statement",
                url: "https://www.daimlertruck.com/en/privacy-statement"
            }
        ],
        rationale: "Multiple privacy statements create inconsistency. Limited transparency regarding driver privacy in fleet management contexts. Insufficient detail on personal data governance. Privacy controls appear minimal for individual drivers."
    }
];

// Get current assessment date
function getCurrentAssessmentDate() {
    return new Date('2026-03-15').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}