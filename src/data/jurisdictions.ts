export interface JurisdictionData {
  slug: string;
  name: string;
  country: 'USA' | 'Canada';
  evidentiaryStandard: string;
  standardRuleRef: string;
  majorCities: string[];
  legalSummary: string;
}

export const jurisdictions: Record<string, JurisdictionData> = {
  // 50 US States + DC
  alabama: {
    slug: 'alabama',
    name: 'Alabama',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Ala. R. Evid. 702',
    majorCities: ['Birmingham', 'Huntsville', 'Mobile', 'Montgomery'],
    legalSummary: 'Alabama courts apply the Daubert reliability standard under Rule 702 to ensure scientific methodology and medical necessity in future care valuations.'
  },
  alaska: {
    slug: 'alaska',
    name: 'Alaska',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Alaska R. Evid. 702 / State v. Coon',
    majorCities: ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka'],
    legalSummary: 'Alaska courts require expert medical-legal testimony to satisfy the Coon/Daubert threshold, emphasizing clinically grounded care items and reproducible cost data.'
  },
  arizona: {
    slug: 'arizona',
    name: 'Arizona',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Ariz. R. Evid. 702',
    majorCities: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale', 'Chandler'],
    legalSummary: 'Arizona adheres strictly to Daubert principles under Rule 702, mandating that life care plans rest on reliable principles, peer-reviewed medical data, and clinical examination findings.'
  },
  arkansas: {
    slug: 'arkansas',
    name: 'Arkansas',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Ark. R. Evid. 702 / Farm Bureau v. Foote',
    majorCities: ['Little Rock', 'Fayetteville', 'Fort Smith', 'Springdale'],
    legalSummary: 'Arkansas applies Daubert factors to expert testimony to guarantee that future medical care calculations reflect established rehabilitative protocols.'
  },
  california: {
    slug: 'california',
    name: 'California',
    country: 'USA',
    evidentiaryStandard: 'Kelly-Frye Standard & Sargon Framework',
    standardRuleRef: 'Cal. Evid. Code § 801 / Sargon Enterprises',
    majorCities: ['Los Angeles', 'San Diego', 'San Francisco', 'San Jose', 'Sacramento'],
    legalSummary: 'California courts scrutinize expert economic and clinical valuations under Sargon and Kelly-Frye, requiring clear foundational links between injury etiology and life care plan line items.'
  },
  colorado: {
    slug: 'colorado',
    name: 'Colorado',
    country: 'USA',
    evidentiaryStandard: 'Shreck / Daubert Standard',
    standardRuleRef: 'Colo. R. Evid. 702 / People v. Shreck',
    majorCities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder'],
    legalSummary: 'Colorado evaluates expert testimony under CRE 702 and Shreck, prioritizing the scientific validity of the medical methodology and its practical usefulness to the jury.'
  },
  connecticut: {
    slug: 'connecticut',
    name: 'Connecticut',
    country: 'USA',
    evidentiaryStandard: 'Porter / Daubert Standard',
    standardRuleRef: 'Conn. Code Evid. § 7-2 / State v. Porter',
    majorCities: ['Bridgeport', 'New Haven', 'Stamford', 'Hartford', 'Waterbury'],
    legalSummary: 'Connecticut trial judges act as gatekeepers under State v. Porter, requiring life care planners to demonstrate reliable foundational science behind diagnostic and therapeutic projections.'
  },
  delaware: {
    slug: 'delaware',
    name: 'Delaware',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'D.R.E. 702 / M.G. Bancorporation v. Le Beau',
    majorCities: ['Wilmington', 'Dover', 'Newark', 'Middletown'],
    legalSummary: 'Delaware follows federal Daubert guidance under Rule 702, requiring quantifiable cost documentation and expert qualification in catastrophic personal injury claims.'
  },
  'district-of-columbia': {
    slug: 'district-of-columbia',
    name: 'District of Columbia',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Motorola Inc. v. Murray (D.C. 2016)',
    majorCities: ['Washington', 'Georgetown', 'Capitol Hill'],
    legalSummary: 'D.C. courts follow the Daubert framework for expert testimony, requiring defensible evidentiary backing for all prospective medical and attendant care requirements.'
  },
  florida: {
    slug: 'florida',
    name: 'Florida',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Fla. Stat. § 90.702',
    majorCities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'],
    legalSummary: 'Florida strictly governs expert testimony under Fla. Stat. § 90.702 (Daubert), requiring every life care item to be rooted in sufficient medical facts and validated economic methodologies.'
  },
  georgia: {
    slug: 'georgia',
    name: 'Georgia',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'O.C.G.A. § 24-7-702',
    majorCities: ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon'],
    legalSummary: 'Georgia applies the federal Daubert standard across civil litigation under O.C.G.A. § 24-7-702, demanding that physician experts ground future medical needs in reliable clinical data.'
  },
  hawaii: {
    slug: 'hawaii',
    name: 'Hawaii',
    country: 'USA',
    evidentiaryStandard: 'Montalbo / Reliability Standard',
    standardRuleRef: 'HRE Rule 702 / State v. Montalbo',
    majorCities: ['Honolulu', 'Hilo', 'Kailua', 'Kapolei'],
    legalSummary: 'Hawaii courts review expert evidence under HRE 702, ensuring scientific reliability, clinical relevance, and objective justification for catastrophic damages claims.'
  },
  idaho: {
    slug: 'idaho',
    name: 'Idaho',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'I.R.E. 702',
    majorCities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls'],
    legalSummary: 'Idaho applies Rule 702 reliability testing to expert witness opinions, focusing on the logical nexus between traumatic impairment and recommended medical interventions.'
  },
  illinois: {
    slug: 'illinois',
    name: 'Illinois',
    country: 'USA',
    evidentiaryStandard: 'Frye Standard (General Acceptance)',
    standardRuleRef: 'Ill. R. Evid. 702 / Donaldson v. Central Illinois PS',
    majorCities: ['Chicago', 'Aurora', 'Naperville', 'Rockford', 'Springfield'],
    legalSummary: 'Illinois maintains the Frye standard, requiring medical-legal life care methodologies and assessment protocols to enjoy general acceptance within the relevant clinical specialty.'
  },
  indiana: {
    slug: 'indiana',
    name: 'Indiana',
    country: 'USA',
    evidentiaryStandard: 'Daubert-Aligned Standard',
    standardRuleRef: 'Ind. R. Evid. 702',
    majorCities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
    legalSummary: 'Indiana Rule of Evidence 702 mandates that expert scientific testimony rest upon reliable principles, giving trial courts broad gatekeeping oversight over life care plan projections.'
  },
  iowa: {
    slug: 'iowa',
    name: 'Iowa',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Iowa R. Evid. 5.702',
    majorCities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'],
    legalSummary: 'Iowa courts apply Rule 5.702 to ensure expert testimony assists the trier of fact through verifiable clinical reasoning and defensible regional cost accounting.'
  },
  kansas: {
    slug: 'kansas',
    name: 'Kansas',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'K.S.A. § 60-456(b)',
    majorCities: ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka'],
    legalSummary: 'Kansas codified the federal Daubert standard under K.S.A. § 60-456, requiring life care planners to establish the clinical reliability and statistical foundation of all future cost tables.'
  },
  kentucky: {
    slug: 'kentucky',
    name: 'Kentucky',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'KRE 702 / Mitchell v. Commonwealth',
    majorCities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro'],
    legalSummary: 'Kentucky applies Daubert under KRE 702 to screen expert reports, demanding that physical medicine and rehabilitation recommendations be tethered to clinical records.'
  },
  louisiana: {
    slug: 'louisiana',
    name: 'Louisiana',
    country: 'USA',
    evidentiaryStandard: 'Daubert-Foret Standard',
    standardRuleRef: 'La. C.E. art. 702 / State v. Foret',
    majorCities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'],
    legalSummary: 'Louisiana trial courts enforce the Daubert-Foret framework, verifying that future medical cost projections are rooted in reliable data, accurate diagnostic coding, and valid life expectancies.'
  },
  maine: {
    slug: 'maine',
    name: 'Maine',
    country: 'USA',
    evidentiaryStandard: 'Reliability Standard',
    standardRuleRef: 'M.R. Evid. 702 / State v. Williams',
    majorCities: ['Portland', 'Lewiston', 'Bangor', 'South Portland'],
    legalSummary: 'Maine courts review expert testimony under M.R. Evid. 702 for threshold reliability and relevance, ensuring rehabilitation projections assist juries without speculative inflation.'
  },
  maryland: {
    slug: 'maryland',
    name: 'Maryland',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Md. Rule 5-702 / Rochkind v. St. Luke’s (2020)',
    majorCities: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Annapolis'],
    legalSummary: 'Maryland adopted Daubert in 2020, replacing Frye-Reed to hold expert witness testimony to rigorous methodological and peer-reviewed scientific scrutiny in medical-legal claims.'
  },
  massachusetts: {
    slug: 'massachusetts',
    name: 'Massachusetts',
    country: 'USA',
    evidentiaryStandard: 'Lanigan / Daubert Standard',
    standardRuleRef: 'Mass. G. Evid. § 702 / Commonwealth v. Lanigan',
    majorCities: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell'],
    legalSummary: 'Massachusetts applies the Lanigan doctrine (mirroring Daubert), requiring life care plans to demonstrate general acceptance or robust scientific reliability during pre-trial motions.'
  },
  michigan: {
    slug: 'michigan',
    name: 'Michigan',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'MRE 702 / Gilbert v. DaimlerChrysler',
    majorCities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor'],
    legalSummary: 'Michigan Rule of Evidence 702 requires trial judges to ensure each aspect of expert testimony is reliable, including diagnostic causality and long-term attendant care projections.'
  },
  minnesota: {
    slug: 'minnesota',
    name: 'Minnesota',
    country: 'USA',
    evidentiaryStandard: 'Frye-Mack Standard',
    standardRuleRef: 'Minn. R. Evid. 702 / State v. Mack',
    majorCities: ['Minneapolis', 'St. Paul', 'Rochester', 'Bloomington', 'Duluth'],
    legalSummary: 'Minnesota uses the Frye-Mack standard, requiring that medical life care methodologies enjoy general scientific acceptance and that the expert’s foundational analysis is strictly reliable.'
  },
  mississippi: {
    slug: 'mississippi',
    name: 'Mississippi',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Miss. R. Evid. 702 / Mississippi Transportation v. McLemore',
    majorCities: ['Jackson', 'Gulfport', 'Southaven', 'Biloxi', 'Hattiesburg'],
    legalSummary: 'Mississippi trial judges serve as Daubert gatekeepers under Rule 702, ensuring that care cost itemizations are supported by demonstrable medical necessity and sound economics.'
  },
  missouri: {
    slug: 'missouri',
    name: 'Missouri',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Mo. Rev. Stat. § 490.065',
    majorCities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence'],
    legalSummary: 'Missouri statutory law (§ 490.065) codifies the Daubert standard, requiring physician experts to present reliable facts, valid testing, and accepted clinical rubrics in personal injury suits.'
  },
  montana: {
    slug: 'montana',
    name: 'Montana',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'M.R. Evid. 702 / Barmeyer v. Montana Power Co.',
    majorCities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena'],
    legalSummary: 'Montana applies the Daubert framework to expert opinions, ensuring that plans detailing spinal cord or traumatic brain injury care withstand cross-examination on medical necessity.'
  },
  nebraska: {
    slug: 'nebraska',
    name: 'Nebraska',
    country: 'USA',
    evidentiaryStandard: 'Daubert-Schafersman Standard',
    standardRuleRef: 'Neb. Rev. Stat. § 27-702 / Schafersman v. Agland',
    majorCities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island'],
    legalSummary: 'Nebraska trial courts gatekeep medical evidence under Schafersman/Daubert, verifying that physician experts employ valid diagnostic benchmarks for long-term disability plans.'
  },
  nevada: {
    slug: 'nevada',
    name: 'Nevada',
    country: 'USA',
    evidentiaryStandard: 'Higgs / Daubert-Hybrid Standard',
    standardRuleRef: 'NRS 50.275 / Hallmark v. Eldridge',
    majorCities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'],
    legalSummary: 'Nevada judges evaluate expert witness qualification and reliability under NRS 50.275 and Hallmark, prioritizing objective clinical records over speculative medical cost models.'
  },
  'new-hampshire': {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'RSA § 516:29-a / N.H. R. Evid. 702',
    majorCities: ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover'],
    legalSummary: 'New Hampshire statutory law mandates Daubert evaluation for scientific testimony, ensuring life care plan line items are based upon sufficient medical facts and sound actuarial data.'
  },
  'new-jersey': {
    slug: 'new-jersey',
    name: 'New Jersey',
    country: 'USA',
    evidentiaryStandard: 'Daubert-Aligned Standard',
    standardRuleRef: 'N.J.R.E. 702 / In re Accutane Litigation (2018)',
    majorCities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Trenton'],
    legalSummary: 'New Jersey courts follow the Accutane framework aligning with Daubert, requiring medical-legal experts to substantiate methodology and eliminate unsupported analytical leaps.'
  },
  'new-mexico': {
    slug: 'new-mexico',
    name: 'New Mexico',
    country: 'USA',
    evidentiaryStandard: 'Alberico-Lopez / Daubert Standard',
    standardRuleRef: 'Rule 11-702 NMRA / State v. Alberico',
    majorCities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe'],
    legalSummary: 'New Mexico applies Alberico-Lopez (Daubert-consistent), ensuring life care planners present valid clinical methodology that aids the jury in catastrophic injury determinations.'
  },
  'new-york': {
    slug: 'new-york',
    name: 'New York',
    country: 'USA',
    evidentiaryStandard: 'Frye Standard (General Acceptance)',
    standardRuleRef: 'Parker v. Mobil Oil Corp. / People v. Wesley',
    majorCities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany'],
    legalSummary: 'New York adheres to the Frye standard, requiring medical and rehabilitation assessment principles to be generally accepted within physical medicine and rehabilitation communities.'
  },
  'north-carolina': {
    slug: 'north-carolina',
    name: 'North Carolina',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'N.C. R. Evid. 702 / State v. McGrady',
    majorCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'],
    legalSummary: 'North Carolina adopted federal Daubert under amended Rule 702, mandating that life care plans rest upon sufficient clinical examination facts and reproducible cost methodologies.'
  },
  'north-dakota': {
    slug: 'north-dakota',
    name: 'North Dakota',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'N.D. R. Evid. 702',
    majorCities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot'],
    legalSummary: 'North Dakota applies Rule 702 to ensure expert medical opinions are founded on reliable scientific methodology, clinical records, and prevailing medical necessity criteria.'
  },
  ohio: {
    slug: 'ohio',
    name: 'Ohio',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Ohio Evid.R. 702 / Miller v. Bike Athletic Co.',
    majorCities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'],
    legalSummary: 'Ohio courts evaluate expert evidence under Evid.R. 702 and Daubert, requiring physician-authored plans to demonstrate testable, peer-reviewed clinical necessity for future care.'
  },
  oklahoma: {
    slug: 'oklahoma',
    name: 'Oklahoma',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: '12 O.S. § 2702 / Christian v. Gray',
    majorCities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Edmond'],
    legalSummary: 'Oklahoma statutory law mandates Daubert adherence, ensuring catastrophic injury valuations are defended with rigorous diagnostic findings and documented medical provider pricing.'
  },
  oregon: {
    slug: 'oregon',
    name: 'Oregon',
    country: 'USA',
    evidentiaryStandard: 'Brown / O’Key Standard (Daubert-Aligned)',
    standardRuleRef: 'OEC 702 / State v. Brown / State v. O’Key',
    majorCities: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro'],
    legalSummary: 'Oregon evaluates scientific expert testimony under the Brown/O’Key doctrine, demanding that future care cost projections demonstrate high reliability and relevance.'
  },
  pennsylvania: {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    country: 'USA',
    evidentiaryStandard: 'Frye Standard (General Acceptance)',
    standardRuleRef: 'Pa.R.E. 702 / Grady v. Frito-Lay',
    majorCities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Reading', 'Erie', 'Scranton'],
    legalSummary: 'Pennsylvania strictly adheres to the Frye general acceptance rule, ensuring that physician life care planning protocols reflect standard medical consensus across rehabilitative disciplines.'
  },
  'rhode-island': {
    slug: 'rhode-island',
    name: 'Rhode Island',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'R.I. R. Evid. 702 / DiPetrillo v. Dow Chemical',
    majorCities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket'],
    legalSummary: 'Rhode Island trial courts apply DiPetrillo and Daubert to test the foundational reliability of expert testimony, barring speculative medical itemizations from courtroom proceedings.'
  },
  'south-carolina': {
    slug: 'south-carolina',
    name: 'South Carolina',
    country: 'USA',
    evidentiaryStandard: 'Council / Reliability Standard',
    standardRuleRef: 'SCRE 702 / State v. Council',
    majorCities: ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Greenville'],
    legalSummary: 'South Carolina screens expert testimony under SCRE 702 and State v. Council, focusing on the factual basis and reliability of the expert’s specialized medical knowledge.'
  },
  'south-dakota': {
    slug: 'south-dakota',
    name: 'South Dakota',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'SDCL § 19-19-702 / State v. Hofer',
    majorCities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
    legalSummary: 'South Dakota applies the Daubert framework under state statute, requiring expert witnesses to demonstrate clear clinical causation and documented pricing for future therapies.'
  },
  tennessee: {
    slug: 'tennessee',
    name: 'Tennessee',
    country: 'USA',
    evidentiaryStandard: 'McDaniel / Daubert Standard',
    standardRuleRef: 'Tenn. R. Evid. 702 / McDaniel v. CSX Transportation',
    majorCities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'],
    legalSummary: 'Tennessee trial courts evaluate expert testimony under McDaniel and TRE 702, ensuring that medical life care plans provide substantial assistance to juries without subjective speculation.'
  },
  texas: {
    slug: 'texas',
    name: 'Texas',
    country: 'USA',
    evidentiaryStandard: 'Robinson / Daubert Standard',
    standardRuleRef: 'Tex. R. Evid. 702 / E.I. du Pont de Nemours v. Robinson',
    majorCities: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso'],
    legalSummary: 'Texas applies the rigorous Robinson/Daubert standard under Rule 702, requiring catastrophic life care plans to demonstrate peer-reviewed medical grounding and objective cost accounting.'
  },
  utah: {
    slug: 'utah',
    name: 'Utah',
    country: 'USA',
    evidentiaryStandard: 'Rimmasch / Daubert-Aligned Standard',
    standardRuleRef: 'Utah R. Evid. 702 / State v. Rimmasch',
    majorCities: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem'],
    legalSummary: 'Utah Rule of Evidence 702 assigns judges a strict gatekeeping duty to ensure that expert opinions are based upon principles shown to be reliable and clinically sound.'
  },
  vermont: {
    slug: 'vermont',
    name: 'Vermont',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'V.R.E. 702 / State v. Streich',
    majorCities: ['Burlington', 'South Burlington', 'Rutland', 'Barre'],
    legalSummary: 'Vermont applies Daubert factors under Rule 702, requiring that future medical needs in personal injury matters be supported by empirical medical literature and diagnostic evidence.'
  },
  virginia: {
    slug: 'virginia',
    name: 'Virginia',
    country: 'USA',
    evidentiaryStandard: 'Threshold Reliability Standard',
    standardRuleRef: 'Va. Code § 8.01-401.1 / Rule 2:702',
    majorCities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Arlington'],
    legalSummary: 'Virginia governs expert witness testimony under Va. Code § 8.01-401.1, requiring that life care plans be based upon reliable foundational facts without speculative cost compounding.'
  },
  washington: {
    slug: 'washington',
    name: 'Washington',
    country: 'USA',
    evidentiaryStandard: 'Frye Standard (General Acceptance)',
    standardRuleRef: 'ER 702 / State v. Copeland / Lakey v. Puget Sound Energy',
    majorCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue'],
    legalSummary: 'Washington state courts apply the Frye standard, requiring medical diagnostic techniques and rehabilitation cost frameworks to be generally accepted within the clinical community.'
  },
  'west-virginia': {
    slug: 'west-virginia',
    name: 'West Virginia',
    country: 'USA',
    evidentiaryStandard: 'Wilt / Daubert Standard',
    standardRuleRef: 'W. Va. R. Evid. 702 / Wilt v. Buracker',
    majorCities: ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg'],
    legalSummary: 'West Virginia follows the Wilt/Daubert doctrine under Rule 702, mandating that physician expert witness reports be founded on scientifically valid principles and clinical documentation.'
  },
  wisconsin: {
    slug: 'wisconsin',
    name: 'Wisconsin',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'Wis. Stat. § 907.02',
    majorCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'],
    legalSummary: 'Wisconsin statutorily adopted the Daubert standard (§ 907.02), ensuring trial courts bar speculative future damages by demanding peer-reviewed medical and actuarial reliability.'
  },
  wyoming: {
    slug: 'wyoming',
    name: 'Wyoming',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'W.R.E. 702 / Bunting v. Jamieson',
    majorCities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette'],
    legalSummary: 'Wyoming applies the Daubert framework under Rule 702 to ensure that future medical care cost valuations are reliable, relevant, and supported by qualified clinical experts.'
  },

  // 6 Target Canadian Provinces (for Task #6 & cross-border coverage)
  alberta: {
    slug: 'alberta',
    name: 'Alberta',
    country: 'Canada',
    evidentiaryStandard: 'Canadian Rules of Evidence (Mohan Standard)',
    standardRuleRef: 'R. v. Mohan [1994] 2 S.C.R. 9 / Alberta Rules of Court',
    majorCities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge'],
    legalSummary: 'Alberta courts require expert evidence to meet the Mohan threshold of necessity, relevance, qualified expertise, and adherence to Canadian tort cost quantification standards.'
  },
  'british-columbia': {
    slug: 'british-columbia',
    name: 'British Columbia',
    country: 'Canada',
    evidentiaryStandard: 'Canadian Rules of Evidence (Mohan Standard)',
    standardRuleRef: 'BC Supreme Court Civil Rules Rule 11-6',
    majorCities: ['Vancouver', 'Victoria', 'Kelowna', 'Surrey', 'Burnaby'],
    legalSummary: 'British Columbia Supreme Court Rule 11-6 sets strict standards for expert reports, requiring objective clinical evaluations of future care costs beyond provincial MSP coverage.'
  },
  manitoba: {
    slug: 'manitoba',
    name: 'Manitoba',
    country: 'Canada',
    evidentiaryStandard: 'Canadian Rules of Evidence (Mohan Standard)',
    standardRuleRef: 'Manitoba Court of Queen’s Bench Rules / Mohan',
    majorCities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson'],
    legalSummary: 'Manitoba personal injury and catastrophic claims require rigorous medical-legal substantiation of attendant care and rehabilitation outside public provincial coverage.'
  },
  'new-brunswick': {
    slug: 'new-brunswick',
    name: 'New Brunswick',
    country: 'Canada',
    evidentiaryStandard: 'Canadian Rules of Evidence (Mohan Standard)',
    standardRuleRef: 'New Brunswick Rules of Court Rule 52',
    majorCities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe'],
    legalSummary: 'New Brunswick courts admit expert life care plan testimony when grounded in independent physician oversight and established private rehabilitation cost frameworks.'
  },
  'newfoundland-and-labrador': {
    slug: 'newfoundland-and-labrador',
    name: 'Newfoundland and Labrador',
    country: 'Canada',
    evidentiaryStandard: 'Canadian Rules of Evidence (Mohan Standard)',
    standardRuleRef: 'NL Rules of the Supreme Court',
    majorCities: ['St. John’s', 'Mount Pearl', 'Corner Brook', 'Conception Bay South'],
    legalSummary: 'Newfoundland and Labrador civil proceedings demand clear evidentiary proof of long-term medical necessity and future economic losses in catastrophic tort claims.'
  },
  'nova-scotia': {
    slug: 'nova-scotia',
    name: 'Nova Scotia',
    country: 'Canada',
    evidentiaryStandard: 'Canadian Rules of Evidence (Mohan Standard)',
    standardRuleRef: 'Nova Scotia Civil Procedure Rules Rule 55',
    majorCities: ['Halifax', 'Sydney', 'Dartmouth', 'Truro'],
    legalSummary: 'Nova Scotia courts adhere to Rule 55 and Mohan, ensuring expert reports provide balanced, objective analysis of lifetime medical care and supportive housing needs.'
  },
  ontario: {
    slug: 'ontario',
    name: 'Ontario',
    country: 'Canada',
    evidentiaryStandard: 'Ontario Rules of Civil Procedure (Rule 53.03)',
    standardRuleRef: 'Ontario Rules of Civil Procedure Rule 53.03 / Mohan',
    majorCities: ['Toronto', 'Ottawa', 'Hamilton', 'Mississauga', 'London'],
    legalSummary: 'Ontario courts enforce Rule 53.03 Form 53 acknowledgments, requiring physician experts to act as impartial advisors to the court on future medical and attendant care expenses.'
  },
  quebec: {
    slug: 'quebec',
    name: 'Quebec',
    country: 'Canada',
    evidentiaryStandard: 'Civil Code of Quebec Expert Evidence Rules',
    standardRuleRef: 'Code of Civil Procedure (CQLR c C-25.01)',
    majorCities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau'],
    legalSummary: 'Quebec civil law requires independent medical expertise to assess bodily injuries, loss of autonomy, and ongoing specialized care requirements.'
  },
  saskatchewan: {
    slug: 'saskatchewan',
    name: 'Saskatchewan',
    country: 'Canada',
    evidentiaryStandard: 'Canadian Rules of Evidence (Mohan Standard)',
    standardRuleRef: 'Saskatchewan Queen’s Bench Rules Part 5',
    majorCities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw'],
    legalSummary: 'Saskatchewan civil courts evaluate life care cost projections against Mohan criteria to ensure objective necessity in catastrophic motor vehicle and liability claims.'
  },
  vi: {
    slug: 'vi',
    name: 'Virgin Islands',
    country: 'USA',
    evidentiaryStandard: 'Daubert Standard',
    standardRuleRef: 'V.I. R. Evid. 702',
    majorCities: ['St. Thomas', 'St. Croix', 'St. John'],
    legalSummary: 'U.S. Virgin Islands courts apply federal Daubert standards under local evidentiary rules, requiring peer-reviewed clinical foundation for all future care items.'
  }
};

export function getAllJurisdictionSlugs(): string[] {
  return Object.keys(jurisdictions);
}

export function getJurisdiction(slug: string): JurisdictionData | undefined {
  return jurisdictions[slug];
}
