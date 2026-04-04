const alumniData = [
  {
    n: "Warren Rogers Dean", u: "Dean Rogers", g: "G3", p: "F2",
    ph: "717-533-2358", em: "intel17@aol.com", tw: "Hershey", st: "PA",
    ac: "Golf at cheap public courses, sporting events",
    fa: "Army aviation reconnaissance — RU-21H along North Korea border, RC-12H Central America, RC-12N Fort Huachuca AZ",
    ma: "Harrisburg PA", tm: "Rabble Rousers", p1: "",
    w: "Dean lives in Hershey, Pennsylvania, with his wife Sharon (Loveless), USMA '88. They have three daughters named Echo, Chosin, and Thayer. As a cadet, he served as a Rabble Rouser, directing the crowd from high in the stands at Veterans Stadium during the Army-Navy walk-on — concealing beneath his uniform a red jersey bearing #30, a silent protest against Navy's redshirting of Napoleon McCallum. A prior slug kept him from ever revealing it. His Army assignments centered on aerial reconnaissance: flying the border of North Korea in an RU-21H, operating in Central America in an RC-12H, and becoming the first Army Aviator qualified in the RC-12N, after which he trained the next generation of reconnaissance pilots at Fort Huachuca. After military service, he flew for FedEx and USAir before spending more than 20 years teaching Statistics at Hershey High School. Dean can be reached at intel17@aol.com | 717-533-2358."
  },
  {
    n: "David Alexander", u: "Butch Alexander", g: "D3", p: "B4",
    ph: "407-730-0444", em: "butch.alexander86@gmail.com", tw: "Tabuk", st: "Saudi Arabia",
    ac: "Travel, cycling, SCUBA diving, good food and great conversation",
    fa: "Fort Stewart, 24th Infantry Division",
    ma: "Saudi Arabia", tm: "Army Baseball", p1: "",
    w: "Butch lives in Tabuk, Saudi Arabia, where he supports the Royal Saudi Land Forces Armor Corps SWORD Project with Booz Allen Hamilton. His children Shelley, Ashley, and DR are all thriving in the Orlando area. His Army career spanned Ft. Stewart with the 24th ID, Camp Garry Owen with the 2nd ID, Ft. Bliss with 3rd ACR — his professional peak — Mannheim with the 7th Signal Brigade, and HQDA ASA M&RA. After retirement he co-ran an insurance services company before returning to defense contracting with SAIC, Leidos, and Booz Allen. He recently got engaged to Marian, a nurse relocating to San Antonio to join the Methodist Hospital System. Butch can be reached at butch.alexander86@gmail.com | 407-730-0444."
  },
  {
    n: "Alfred Schellhorn", u: "Al Schellhorn", g: "H4", p: "A1",
    ph: "(205) 908-7565", em: "alschellhorn@yahoo.com", tw: "Acworth", st: "GA",
    ac: "Golf, fishing, attending Army football games (home or road)",
    fa: "Attack helicopter battalion, Germany — second Army unit fielded with the Apache",
    ma: "Atlanta GA", tm: "Cadet Glee Club", p1: "",
    w: "Al lives in Acworth, Georgia. He has a daughter Allison, a son Stephen, a grandson Caden, and a granddaughter on the way in May 2026. His favorite memories are of his time in the Cadet Glee Club, traveling throughout the United States and meeting celebrities at a Bob Hope tribute in Hollywood including Charlton Heston and Jimmy Stewart. Most of his time was served in an attack helicopter battalion in Germany — the second Army unit fielded with the Apache. His most interesting assignments were deploying to Israel to train the Israeli Air Force on the AH-64, and conducting the Army's first-ever cross-FLOT night deep attack during Desert Storm. After the Army, he earned his MBA at Duke, worked at Coopers & Lybrand, and currently owns a commercial cabinetry manufacturing company in Calhoun, Georgia. He played in bands for 30 years and has a recording studio in his home. Al can be reached at alschellhorn@yahoo.com | 205-908-7565."
  },
  {
    n: "Alan Hendricks", u: "Alan Hendricks", g: "D3", p: "B4",
    ph: "571-447-3938", em: "hendricksemail@yahoo.com", tw: "Oscoda", st: "MI",
    ac: "Backcountry backpacking, pontoon boating, travel, bourbon and cigars on the deck",
    fa: "82nd Airborne Division, Fort Bragg — Operation Golden Pheasant, Just Cause, Desert Storm",
    ma: "Northern Michigan", tm: "", p1: "",
    w: "Alan lives in Oscoda, Michigan, with his wife Gina. His Army career began with the 82nd Airborne Division, deploying on Golden Pheasant, Just Cause, and Desert Shield/Desert Storm, and commanding the Advanced Airborne School at Fort Bragg. He then branch-transferred to Military Intelligence, spent two years in Korea managing intel information systems, five years at the National Reconnaissance Office, and after the post-Cold War RIF transitioned to the Army Reserve — deploying with a Military Transition Team in Iraq during OIF, experiencing more combat than his previous three deployments combined. He retired in 2009 as Senior Intelligence Officer at the Defense Intelligence Agency. Simultaneously he built a cybersecurity executive career culminating as Senior Director of Cybersecurity at DMI. In 2024 he returned all his badges, bought a lake house, and retired. He makes much of his own backpacking gear, excels at pinochle, and is a Maker's Mark Ambassador. Alan can be reached at hendricksemail@yahoo.com | 571-447-3938."
  },
  {
    n: "Joseph Wucik", u: "Joe Wucik", g: "F4", p: "G1",
    ph: "915-275-9119", em: "joe.wucik@sbcglobal.net", tw: "Landstuhl", st: "Germany",
    ac: "Golfing, hiking, and watching live music",
    fa: "Airborne reconnaissance aircraft, Republic of Korea",
    ma: "Germany", tm: "", p1: "",
    w: "Joe lives in Landstuhl, Germany, where he works as an Army civilian for the garrison in Baumholder. He and his wife Tonya, married four years, share a blended family: stepdaughter Kamylla Heinbaugh manages a store in Chambersburg, Pennsylvania; stepson SGT Luke Heinbaugh serves with the 11th Airborne Division in Anchorage, Alaska, where he and his wife Madison are new parents to baby Charlotte; and son Joseph IV is a freshman at the University of Texas at Austin. His most memorable Army assignment was flying airborne reconnaissance aircraft in the Republic of Korea. After leaving active duty, he briefly taught high school mathematics before transitioning to his current Army civilian role. Joe can be reached at joe.wucik@sbcglobal.net | 915-275-9119."
  },
  {
    n: "Kevin Farrell", u: "Kevin Farrell", g: "I3", p: "H4",
    ph: "845-248-7268", em: "kevin.farrell@battlefieldleadership.com", tw: "Greenville", st: "SC",
    ac: "Battlefield tours, history-based leadership programs",
    fa: "3-32 Armor, 1st Cavalry Division, Fort Hood — platoon leader and HHC XO",
    ma: "Greenville SC", tm: "", p1: "",
    w: "Kevin lives in Greenville, South Carolina, married 35 years to the former Sheila Newman. He served a full career as an armor officer, retiring as a colonel, in four tank battalions at Fort Hood, Fort Carson, Schweinfurt Germany and Kosovo, and Fort Stewart and Iraq. His most meaningful assignment was battalion command of a 1,000-man combined arms battalion in extended combat operations in Iraq for thirteen months. He also served as a History Professor at West Point 1995-1998, as an advisor to the Afghan National Army, and finished as an Academy Professor. Since retiring in 2013 he has been CEO of Battlefield Leadership, LLC, working with corporate groups at historic sites. He served as senior military advisor on the 2014 film Fury starring Brad Pitt. Kevin can be reached at kevin.farrell@battlefieldleadership.com | 845-248-7268."
  },
  {
    n: "Mark Vakkur", u: "Mark Vakkur", g: "A2", p: "A4",
    ph: "404-964-9883", em: "mvakkur@gmail.com", tw: "Decatur", st: "GA",
    ac: "Historical battlefield tours with a historian",
    fa: "Fort Huachuca — military intelligence; Presidio San Francisco — present during 1989 earthquake",
    ma: "Atlanta GA", tm: "", p1: "",
    w: "Mark lives in Decatur, Georgia. His son is in medical school in Augusta and his youngest daughter is a junior at Georgia Tech. He found Fort Huachuca interesting and was in the 1989 San Francisco earthquake at the Presidio. He trained as a flight surgeon and flew nap-of-the-earth medevac missions over the Potomac to Walter Reed during rush hour. He served four years as a psychiatrist at the Atlanta VAMC, then spent the rest of his career in private practice, writing novels and co-authoring a book on cultural psychiatry. He spent five years in Switzerland briefly working for the World Health Organization. He attended church with Jimmy and Rosalynn Carter in Plains, Georgia, and had dinner with President Ford. Mark can be reached at mvakkur@gmail.com | 404-964-9883."
  },
  {
    n: "James Marshall", u: "Jim Marshall", g: "C1", p: "",
    ph: "910-263-1229", em: "jimz07@yahoo.com", tw: "Miramar", st: "FL",
    ac: "Traveling, fishing, sport shooting, hiking, battlefield terrain rides",
    fa: "3rd Armored Division, Germany — Cavalry officer",
    ma: "South Florida", tm: "", p1: "",
    w: "Jim lives in Miramar, Florida. He has three children including Lee, 22, being commissioned in Cyber branch, and Ashley, 19, in Army ROTC at UCF. He served as a Cavalry Officer in the 3rd Armored Division and the 3rd and 11th Armored Cavalry Regiments, deploying for Desert Shield and Desert Storm. He completed 33 rotations at the National Training Center and later served as a Public Affairs Officer with tours in Kosovo and South America, earning a master's in Mass Communication from UNC Chapel Hill. He retired as a Colonel in 2010 as Director of Public Affairs at U.S. Southern Command, then worked as communications director for the FBI's Miami Field Office. In summer 2027, he plans to follow the WWII battle route of the 3rd Armored Division across France, Belgium, and Germany while podcasting. Jim can be reached at jimz07@yahoo.com | 910-263-1229."
  },
  {
    n: "Paul LaFontaine", u: "PLAF LaFontaine", g: "I3", p: "C4",
    ph: "720-537-6400", em: "paulklafontaine@proton.me", tw: "Myrtle Beach", st: "SC",
    ac: "Battlefield tours, travel, shared meals, reunions, skiing, wargame design",
    fa: "Military Intelligence — Desert Storm, 24th Infantry Division G2 night operations",
    ma: "Myrtle Beach SC", tm: "", p1: "",
    w: "PLAF lives in Myrtle Beach, South Carolina with his wife Colleen of 26 years. He has one son, Luke (33), a mechanical engineer in the defense industry. He branched Military Intelligence and his Army highlight was deploying to Desert Storm where he ran night operations in the 24th Infantry Division G2. After leaving the Army, he had a varied civilian career including early internet startups, executive roles at Ticketmaster and Disney, and a ten-year stint in London and Helsinki acquiring and running company units. In retirement, he focuses on maintaining class relationships, designing wargames, and producing military history content online. PLAF can be reached at paul@paulklafontaine.com | 720-537-6400."
  },
  {
    n: "Daniel Hokanson", u: "Dan Hokanson", g: "C1", p: "",
    ph: "", em: "hokansondr86@gmail.com", tw: "St Augustine", st: "FL",
    ac: "Athletic events, outdoor activities",
    fa: "Infantry — Operations Just Cause, Enduring Freedom, Iraqi Freedom; brigade combat team command Iraq; Joint Chiefs of Staff; 38 years service",
    ma: "Jacksonville FL", tm: "", p1: "",
    w: "Daniel lives in St. Augustine, Florida, where he serves as a board director and senior advisor following his recent retirement from the Army. His career spanned 38 years and included service in Operations Just Cause, Enduring Freedom, and Iraqi Freedom, command of a brigade combat team in Iraq, and membership on the Joint Chiefs of Staff. He can be reached at hokansondr86@gmail.com."
  },
  {
    n: "Cary Clayborn", u: "Cary Clayborn", g: "E4", p: "I2",
    ph: "214-202-8939", em: "cary.clayborn.abt@gmail.com", tw: "Frisco", st: "TX",
    ac: "Golf (774 courses worldwide, 45 states, 17 countries), travel, SCUBA diving, skiing",
    fa: "1/59th ADA, Mainz Germany — defended the Fulda Gap; then General's Aide-de-camp",
    ma: "Dallas-Fort Worth TX", tm: "", p1: "",
    w: "Cary lives in Frisco, Texas. He has one daughter, Carly, attending Honors College of Charleston. He served all five years in Mainz, Germany with 1/59th ADA, initially defending The Fulda Gap, then became General's aide-de-camp. He was pre-med at USMA and built 30 years of medical sales overlapping with 20 years of financial industry work. His favorite job was training minimally invasive heart surgery for five years with Heartport. He started playing golf at 30 and has played 774 different courses worldwide in 45 states and 17 countries, with access through EPIC Golf Club to nearly every top-250 private course including Augusta. Cary can be reached at cary.clayborn.abt@gmail.com | 214-202-8939."
  },
  {
    n: "Douglas Andrews", u: "Doug Andrews", g: "H1", p: "E4",
    ph: "253-381-9320", em: "dougandrews86@gmail.com", tw: "Lake Tapps", st: "WA",
    ac: "Golf, travel, skiing, fishing, hiking",
    fa: "2/75 Rangers, Fort Lewis — jumped into Panama as main effort of the main effort",
    ma: "Seattle WA", tm: "", p1: "",
    w: "Doug lives in Lake Tapps, Washington with his wife Shannon and a blended family of five adult sons and a grandson. He served as a platoon leader in 2/75 Rangers and jumped into Panama, where his platoon fought Noriega's elite troops, losing one soldier with multiple wounded while accomplishing the mission. He left during the post-Cold War drawdown and joined Merrill Lynch on the same day his first child was born, building a 33-year career as a financial advisor and manager at Merrill Lynch and later RBC. Two sons plan to join the practice. Doug can be reached at dougandrews86@gmail.com | 253-381-9320."
  },
  {
    n: "Laurence Ortiz", u: "Greg Ortiz", g: "D3", p: "H4",
    ph: "915-731-5975", em: "lgortiz222@gmail.com", tw: "El Paso", st: "TX",
    ac: "Casual, unstructured social time with classmates",
    fa: "Airborne School; OBC and OAC Fort Huachuca; Stuttgart Germany — staff positions including Battalion Maintenance Officer",
    ma: "El Paso TX", tm: "", p1: "",
    w: "Greg lives in El Paso, Texas. His 27-year-old daughter lives in New York City working as a journalist, and his 25-year-old son lives in Los Angeles as an audio producer for Disney. His most rewarding West Point memory was working on the 100th-night show: he and classmate Mike Gwynn sat down at his electric keyboard — Gwynn gave direction and lyrics, and he composed the music. He served 5 years as an MI officer with no command or combat tours, completing OBC and OAC at Fort Huachuca and a 3-year tour in Stuttgart, Germany. After the Army, he was a public high school math and engineering teacher in El Paso ISD for 26 years. He is one of the Puerto Rico Four — all attended the same DoD high school in San Juan. Greg can be reached at lgortiz222@gmail.com | 915-731-5975."
  },
  {
    n: "Dean Dorman", u: "Deano Dorman", g: "D1", p: "A3",
    ph: "857-222-0602", em: "dean.dorman@yahoo.com", tw: "Carmel", st: "NY",
    ac: "Travel (Scotland with CNQ 2026), Army rugby alumni events",
    fa: "Fort Lewis — great group of lieutenants; stint in Honduras",
    ma: "Hudson Valley NY", tm: "Army Rugby", p1: "",
    w: "Dean lives in Carmel, New York. He has been married to MaryBeth for 37 years, with four grown children including two in the military and one USMA grad, and two grandchildren. He served mostly at Fort Lewis with a great group of lieutenants, plus a cool stint in Honduras. After the Army, he attended Harvard Business School, worked at McKinsey and GE as CEO, then spent 23 years in private equity. He ran an Army-Navy tailgate for 30 consecutive years, retiring in 2023 where attendance peaked at over 3,000. He serves on the Board of Johnny Mac Soldiers Fund and co-founded men's Army Rugby Alumni efforts in 2017. Dean can be reached at dean.dorman@yahoo.com | 857-222-0602."
  },
  {
    n: "Barry Kellar", u: "Barry Kellar", g: "A4", p: "B3",
    ph: "270-348-2916", em: "barrykellar1@gmail.com", tw: "Clarksville", st: "TN",
    ac: "Travel, scuba, sporting events, golf if driving the cart",
    fa: "Fort Stewart, 24th Mechanized Infantry Division — briefed General Schwarzkopf",
    ma: "Clarksville TN", tm: "", p1: "",
    w: "Barry lives in Clarksville, Tennessee. He is still married to his high school sweetheart Allison. They have no children but have dogs, cats, nephews, and nieces — they like the dogs more. He served at Fort Stewart with the 24th Mechanized Infantry Division and briefed General Schwarzkopf. After the Army, he worked at GE for 10 years as global director for GE Plastics, then as CEO North America and global VP at Freudenberg, retiring in 2022. He came out of retirement as CEO for HOMAG Americas, which he considers his best role in the wood industry. Barry can be reached at barrykellar1@gmail.com | 270-348-2916."
  },
  {
    n: "Hope Donnelly", u: "Hope Donnelly", g: "H4", p: "",
    ph: "813-466-9091", em: "dcdonnelly@aol.com", tw: "Tampa", st: "FL",
    ac: "Swimming, yoga, Tampa Riverwalk, Lightning hockey, Buccaneers football, cultural events, travel",
    fa: "Did not commission due to medical issue",
    ma: "Tampa Bay FL", tm: "", p1: "",
    w: "Hope lives in Tampa, Florida. She did not commission due to a sudden medical issue, but her highlight became service-adjacent: deep involvement with West Point Societies, running young-grad programs in DC, and later serving on the AOG Board of Trustees. She earned an MBA and spent 10 years in financial services with Merrill Lynch and Franklin Templeton. After 9/11 she returned to defense contracting in Tampa, then joined the Veterans Administration as a remote program manager in the VHA supply-chain program office — her most meaningful role. She remains active in the West Point Society of West Central Florida as secretary. Hope can be reached at dcdonnelly@aol.com | 813-466-9091."
  },
  {
    n: "William Pursel", u: "Bill Pursel", g: "G3", p: "H4",
    ph: "513-477-5708", em: "billpursel@aol.com", tw: "Watkins", st: "CO",
    ac: "Chess tournaments, attending sporting events, travel",
    fa: "2/43 ADA Patriot — Fort Bliss; Germany; Desert Storm shot down 5 SCUD missiles; Bronze Star",
    ma: "Denver CO", tm: "", p1: "",
    w: "Bill lives in Watkins, Colorado. His daughter Kristin has a two-year-old son, CJ, in Cincinnati. He served as a Patriot officer. During Desert Storm he and a three-soldier crew shot down five Scuds, earning a Bronze Star. He survived brain cancer after surgery, chemo, and radiation, aided by classmate Jeff Thramann. He maintains a 10,000-steps-a-day streak approaching 3,300 consecutive days — nearly nine years. He is deeply involved in veterans' organizations, having served five years as VFW quartermaster. After the Army, he entered sales with General Mills, then spent more than twenty years with Lawson Products before roles at UPS, United Airlines catering operations, and 7-Eleven. Bill can be reached at billpursel@aol.com | 513-477-5708."
  },
  {
    n: "Darren Moore", u: "Darren Moore", g: "I3", p: "B4",
    ph: "405-778-0125", em: "darrenmmoore@sbcglobal.net", tw: "Melbourne", st: "FL",
    ac: "Drinking beer and laughing about cadet and life adventures",
    fa: "Fort Rucker OBC and flight school; 55th Aviation Company K-16 Korea — flew VIPs into JSA, DMZ, supported 1988 Summer Olympics",
    ma: "Space Coast FL", tm: "", p1: "",
    w: "Darren lives in Melbourne, Florida, married to Yong for 36 years. His Army career took him from Fort Rucker for OBC and flight school, to the 55th Aviation Company at K-16 in Korea as XO, Ops Officer, and Platoon Leader — flying VIPs into the JSA, DMZ, and supporting the 1988 Summer Olympics with eight classmates. He then served as Brigade Ops Officer with the 8th Infantry Division in Mainz, Germany, deploying to Iraq for Operation Provide Comfort. From 1992-2000 he was a USCG active duty helicopter pilot in Miami and Puerto Rico, then flew rotary wing, Predator B, and fixed wing for US Customs 2000-2022, retiring as a Coast Guard O6. Darren can be reached at darrenmmoore@sbcglobal.net | 405-778-0125."
  },
  {
    n: "Kevin Lauterjung", u: "Kevin Lauterjung", g: "C1", p: "E2",
    ph: "330-607-2829", em: "sklauterjung@gmail.com", tw: "Akron", st: "OH",
    ac: "Army football, tailgating",
    fa: "9th Combat Engineer Battalion, Aschaffenburg Germany — ski trips to the Alps every Thanksgiving",
    ma: "Akron OH", tm: "", p1: "",
    w: "Kevin lives in Akron, Ohio. He and Sally have three kids in their 20s, all in New York. He served with an amazing group of lieutenants in the 9th Combat Engineer Battalion in Aschaffenburg, Germany, taking ski trips to the Alps every Thanksgiving and playing a memorable tackle football game against the armor battalion officers. After the Army, he worked in health care consulting, then spent 15 years at a health insurance company culminating as EVP of Managed Care. He started an energy brokerage in 2013 and an energy services company in 2021, and dabbles in real estate and commercial property development. Kevin can be reached at sklauterjung@gmail.com | 330-607-2829."
  },
  {
    n: "Robert Lockett", u: "Bob Lockett", g: "I4", p: "C1",
    ph: "210-488-7464", em: "boblockett@icloud.com", tw: "Basking Ridge", st: "NJ",
    ac: "Golf, basketball, boxing, fitness, sporting events, travel, reunions",
    fa: "Field Artillery — commanded MLRS battery; Desert Shield/Desert Storm, liaison with British artillery",
    ma: "New York Metro", tm: "Gospel Choir", p1: "",
    w: "Bob lives in Basking Ridge, New Jersey and splits time with St. Louis. He has four children including his youngest Aiden, who has committed to play football for Franklin & Marshall College. He grew up in East St. Louis and attended Culver Military Academy for a year in high school. A defining highlight was commanding an MLRS battery. He served in Desert Shield/Desert Storm, including firing missions in combat and liaison work with British artillery. After nine years he transitioned into executive recruiting, then senior HR leadership at Lucas Group, Frito-Lay, Harrah's, Limited Brands, USAA, and ADP, culminating in multiple chief people officer roles. He is currently Chief People Officer at Schnucks Markets. Bob can be reached at boblockett@icloud.com | 210-488-7464."
  }
];
