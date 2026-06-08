// Auric venue directory
// Source of truth for all venue listings — used by listings.html, saved.html, and any future consumers.
// To update a venue, edit the entry below and re-upload this file.

window.AURIC_VENUES = [
  {
    name: "NYPL — Brooklyn Central Library",
    sub: "Public Library · Grand Army Plaza · Up to 60 guests",
    phone: "718.230.2100",
    instagram: "bklynlibrary",
    type: "free", free: true,
    score: 88, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free",
    priceNote: "Community events · application required",
    bookingUrl: "https://www.bklynlibrary.org/rentals",
    bookingLabel: "Apply to book",
    bars: [
      {label:"Audience fit",pct:85,color:"#7B9E87"},
      {label:"Aesthetic",pct:80,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:95,color:"#6B9AB8"}
    ],
    tags:[{t:"Free",c:"tag-free"},{t:"ADA · Elevator",c:"tag-sky"},{t:"No cert needed",c:"tag-green"}],
    requirements:[
      {dot:"req-none",text:"No certification required for wellness workshops, meditation, or breathwork."},
      {dot:"req-none",text:"No liability insurance required for standard community events."},
      {dot:"req-recommended",text:"CPR certification recommended if hosting physical movement classes."}
    ],
    access:[
      {color:"#7B9E87",text:"2/3 at Grand Army Plaza · 1 min walk"},
      {color:"#7B9E87",text:"Fully ADA accessible throughout"},
      {color:"#7B9E87",text:"Free street parking nearby"}
    ],
    outreach:"Hi Brooklyn Public Library events team, I'd like to apply to book a community room for a wellness workshop for approximately 30 people. We focus on mindful movement and breathwork and would love to bring this programming to your space.",
    modalities:["meditation","breathwork","workshop","sound_bath","tai_chi"]
  },
  {
    name: "Body by Simone — Flatiron",
    sub: "Dance Fitness Studio · Flatiron · Up to 35 guests",
    email: "info@bodybysimone.com",
    instagram: "bodybysimone",
    type: "studio", free: false,
    score: 86, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$125–$175/hr",
    priceNote: "3hr minimum on weekends",
    bookingUrl: "https://www.bodybysimone.com/",
    bookingLabel: "Studio rental info",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:85,color:"#7B9E87"},
      {label:"Value",pct:78,color:"#C9A84C"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Sprung floors · Mirrors",c:"tag-green"},{t:"N/R/W · 4 min",c:"tag-sky"},{t:"Sound system",c:"tag-stone"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum. COI required before confirmation."},
      {dot:"req-required",text:"Personal trainer or fitness instructor certification required (ACE, NASM, or equivalent)."},
      {dot:"req-recommended",text:"Pilates certification (PMA or equivalent) required if leading reformer or mat Pilates."}
    ],
    access:[
      {color:"#7B9E87",text:"N/R/W at 23rd St · 4 min walk"},
      {color:"#C9A84C",text:"Paid parking nearby · no free street"},
      {color:"#7B9E87",text:"Elevator access · ADA compliant"}
    ],
    outreach:"Hi Body by Simone team, I'm interested in renting your Flatiron studio for a wellness event for 25–35 guests. I'm a certified instructor and would love to discuss availability and your rental requirements including insurance specifications.",
    modalities:["pilates","dance","hiit","barre","strength"]
  },
  {
    name: "Central Park — Rumsey Playfield",
    sub: "Outdoor Permit Zone · Midtown · Up to 100 guests",
    phone: "212.360.1399",
    instagram: "summerstage",
    type: "outdoor", free: true,
    score: 84, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free – $50 permit fee",
    priceNote: "Depends on group size and date",
    bookingUrl: "https://nycgovparks.org/permits",
    bookingLabel: "Apply for permit",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:95,color:"#7B9E87"},
      {label:"Value",pct:98,color:"#7B9E87"},
      {label:"Accessibility",pct:85,color:"#6B9AB8"}
    ],
    tags:[{t:"Free–$50",c:"tag-free"},{t:"Outdoor · Seasonal",c:"tag-green"},{t:"No cert needed",c:"tag-green"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for outdoor yoga or meditation events."},
      {dot:"req-recommended",text:"Liability insurance recommended for groups over 20 — some permit applications ask for it."},
      {dot:"req-none",text:"No insurance required for informal gatherings under 20 people."}
    ],
    access:[
      {color:"#7B9E87",text:"Multiple subway lines · 5 min walk"},
      {color:"#C9A84C",text:"No on-site parking · rideshare recommended"},
      {color:"#7B9E87",text:"Accessible pathways throughout park"}
    ],
    outreach:"Hi NYC Parks Events Team, I'd like to apply for a permit to host a small outdoor wellness event (yoga/meditation) at Rumsey Playfield for approximately 25 people. Please let me know the best process for applying and any requirements.",
    modalities:["yoga","tai_chi","meditation","breathwork"]
  },
  {
    name: "The Well NYC",
    sub: "Wellness Club · Flatiron · Up to 35 guests",
    phone: "646.560.8080",
    instagram: "thewell",
    type: "studio", free: false,
    score: 87, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$200–$350/hr",
    priceNote: "Premium pricing · full buyout available",
    bookingUrl: "https://www.the-well.com/",
    bookingLabel: "Private events page",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:95,color:"#7B9E87"},
      {label:"Value",pct:55,color:"#C47D7D"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Luxury tier",c:"tag-gold"},{t:"Spa + studio",c:"tag-green"},{t:"N/R/W · 4 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum for private events. The Well has specific COI requirements — request their template."},
      {dot:"req-required",text:"Yoga or Pilates certification required (RYT-200 or PMA minimum). The Well vets instructors."},
      {dot:"req-required",text:"Background check may be required for instructors leading events at their facility."}
    ],
    access:[
      {color:"#7B9E87",text:"N/R/W at 23rd St · 4 min walk"},
      {color:"#C47D7D",text:"Paid garage only · $35–45/visit"},
      {color:"#C9A84C",text:"Elevator · 3 steps at rooftop entry"}
    ],
    outreach:"Hi The Well NYC events team, I run Auric Movement, a curated wellness event series. I'm interested in exploring a private event hire at your Flatiron location for 20–30 guests. Could you share your rental rates, insurance requirements, and instructor certification specs?",
    modalities:["yoga","pilates","meditation","breathwork","sound_bath","workshop","retreat"]
  },
  {
    name: "Green-Wood Cemetery Chapel",
    sub: "Historic Cemetery · Park Slope · Up to 30 guests",
    email: "events@green-wood.com",
    type: "unique", free: true,
    score: 85, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "Free for wellness events",
    priceNote: "Community programming · email to apply",
    bookingUrl: "mailto:events@green-wood.com",
    bookingLabel: "Email events team",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:98,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:72,color:"#C9A84C"}
    ],
    tags:[{t:"Free",c:"tag-free"},{t:"Sound healing gem",c:"tag-plum"},{t:"No cert needed",c:"tag-green"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for sound healing or meditation events."},
      {dot:"req-recommended",text:"Liability insurance recommended but not strictly required — confirm with events team."},
      {dot:"req-none",text:"Green-Wood is specifically open to wellness programming — no formal vetting process."}
    ],
    access:[
      {color:"#C9A84C",text:"R at 25th St · 8 min walk"},
      {color:"#7B9E87",text:"Free parking on-site"},
      {color:"#C9A84C",text:"Some garden paths uneven · limited ADA"}
    ],
    outreach:"Hi Green-Wood events team, I'd love to explore hosting a small sound healing session in your north chapel for 15–25 people. We run intimate wellness gatherings and your space's acoustics and architecture would create an extraordinary setting. Is this something you'd consider?",
    modalities:["sound_bath","meditation","breathwork","workshop"]
  },
  {
    name: "1 Hotel Brooklyn Bridge",
    sub: "Eco-Luxury Hotel · DUMBO · Up to 120 guests",
    instagram: "1hotelbrooklynbridge",
    type: "hotel", free: false,
    score: 89, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$500–$2,000+",
    priceNote: "Varies by space and date · F&B minimums apply",
    bookingUrl: "https://www.1hotels.com/brooklyn-bridge",
    bookingLabel: "Events inquiry",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:95,color:"#7B9E87"},
      {label:"Value",pct:45,color:"#C47D7D"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Retreat packages",c:"tag-gold"},{t:"Rooftop + spa",c:"tag-green"},{t:"Premium tier",c:"tag-stone"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum. Hotel will provide their specific COI requirements."},
      {dot:"req-required",text:"Instructor certification required — hotel vets wellness professionals leading events."},
      {dot:"req-required",text:"Event permit may be required for outdoor rooftop events. Hotel events team handles this."}
    ],
    access:[
      {color:"#7B9E87",text:"A/C at High St · 6 min walk"},
      {color:"#C47D7D",text:"Valet only · $45/night"},
      {color:"#7B9E87",text:"Fully ADA accessible throughout"}
    ],
    outreach:"Hi 1 Hotel Brooklyn Bridge events team, I run Auric Movement, a curated wellness event series. I'm interested in exploring a retreat partnership or event space hire for 30–80 guests. Your sustainability mission and aesthetic align perfectly with our community. Could we set up a call?",
    modalities:["yoga","pilates","meditation","breathwork","sound_bath","retreat","workshop"]
  },
  {
    name: "Brooklyn Botanic Garden",
    sub: "Botanical Garden · Crown Heights · Up to 200 guests",
    instagram: "brooklynbotanic",
    type: "outdoor", free: false,
    score: 86, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$300–$1,500",
    priceNote: "Varies by garden space and season",
    bookingUrl: "https://www.bbg.org/visit/private_and_corporate_events",
    bookingLabel: "Private events",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:98,color:"#7B9E87"},
      {label:"Value",pct:65,color:"#C9A84C"},
      {label:"Accessibility",pct:90,color:"#6B9AB8"}
    ],
    tags:[{t:"Greenhouse hire",c:"tag-green"},{t:"2/3 · Eastern Pkwy",c:"tag-sky"},{t:"Seasonal",c:"tag-stone"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum. BBG requires COI naming Brooklyn Botanic Garden as additional insured."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement events — BBG may request credentials."},
      {dot:"req-none",text:"No certification required for meditation, sound healing, or non-movement wellness events."}
    ],
    access:[
      {color:"#7B9E87",text:"2/3 at Eastern Pkwy · 2 min walk"},
      {color:"#7B9E87",text:"Free parking lot on-site"},
      {color:"#7B9E87",text:"Fully accessible paved paths"}
    ],
    outreach:"Hi Brooklyn Botanic Garden events team, I'd love to inquire about renting a greenhouse or garden space for a private wellness event for approximately 40 people. We host mindful movement and meditation experiences and your grounds would be an extraordinary setting.",
    modalities:["yoga","tai_chi","meditation","breathwork","workshop","retreat"]
  },
  {
    name: "St. Paul's Community Church Hall",
    sub: "Church Hall · Park Slope · Up to 80 guests",
    email: "office@stpaulsparkslope.org",
    type: "unique", free: false,
    score: 83, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$75–$120/hr",
    priceNote: "Negotiable for regular bookings",
    bookingUrl: "mailto:office@stpaulsparkslope.org",
    bookingLabel: "Email church office",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:92,color:"#7B9E87"},
      {label:"Value",pct:92,color:"#7B9E87"},
      {label:"Accessibility",pct:75,color:"#C9A84C"}
    ],
    tags:[{t:"Sound healing ideal",c:"tag-plum"},{t:"High ceilings",c:"tag-gold"},{t:"B/Q · 7th Ave",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required — church halls are generally open to all wellness formats."},
      {dot:"req-recommended",text:"Liability insurance recommended — ask the office if they require it. Many church halls don't."},
      {dot:"req-none",text:"No formal vetting process — email the office, describe your event, and they'll let you know."}
    ],
    access:[
      {color:"#7B9E87",text:"B/Q at 7th Ave · 4 min walk"},
      {color:"#C9A84C",text:"Street parking available"},
      {color:"#C47D7D",text:"3 steps at entry · no elevator"}
    ],
    outreach:"Hi, I'm reaching out about renting your hall for a small wellness event. We host sound healing and breathwork sessions for 20–40 people and your hall's acoustics and architecture would be a beautiful setting. Would you be open to discussing availability and your rental terms?",
    modalities:["sound_bath","meditation","breathwork","yoga","workshop"]
  },
  {
    name: "NYPL — Mulberry Street Branch",
    sub: "Public Library · SoHo/NoLita · Up to 45 guests",
    email: "mulberrybranch@nypl.org",
    phone: "212.966.3424",
    type: "free", free: true,
    score: 82, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free",
    priceNote: "2 weeks notice · online application",
    bookingUrl: "https://nypl.org/spacerental",
    bookingLabel: "Apply for space",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:75,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:92,color:"#6B9AB8"}
    ],
    tags:[{t:"Free",c:"tag-free"},{t:"SoHo location",c:"tag-green"},{t:"No cert needed",c:"tag-green"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for any wellness programming at NYPL branches."},
      {dot:"req-none",text:"No liability insurance required for standard community events."},
      {dot:"req-none",text:"Simply fill out the online space request form — NYPL is very welcoming to wellness programming."}
    ],
    access:[
      {color:"#7B9E87",text:"6 at Spring St · 5 min walk"},
      {color:"#7B9E87",text:"ADA accessible throughout"},
      {color:"#C9A84C",text:"Limited street parking · meter"}
    ],
    outreach:"Hi NYPL Mulberry Street Branch, I'd like to book your community room for a wellness workshop for approximately 25 people. We focus on breathwork and mindful movement programming and would love to serve the SoHo/NoLita community through your space.",
    modalities:["meditation","breathwork","workshop","sound_bath","tai_chi"]
  },
  {
    name: "Equinox — Private Studio Hire",
    sub: "Luxury Fitness Club · Multiple NYC locations · Up to 30 guests",
    instagram: "equinox",
    type: "studio", free: false,
    score: 81, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$200–$400/hr",
    priceNote: "Member pricing available · varies by location",
    bookingUrl: "https://equinox.com/",
    bookingLabel: "Corporate & events",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:50,color:"#C47D7D"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Premium equipment",c:"tag-gold"},{t:"Multiple locations",c:"tag-sky"},{t:"ADA accessible",c:"tag-green"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum. Equinox has a detailed COI template they send upon inquiry."},
      {dot:"req-required",text:"Instructor certification required — ACE, NASM, RYT-200, or equivalent. Equinox vets all external instructors."},
      {dot:"req-required",text:"Background check required for all instructors leading events at Equinox facilities."}
    ],
    access:[
      {color:"#7B9E87",text:"Multiple subway lines · all locations"},
      {color:"#C47D7D",text:"Paid parking only at most locations"},
      {color:"#7B9E87",text:"All locations fully ADA accessible"}
    ],
    outreach:"Hi Equinox events team, I'm interested in hiring a private studio space for a wellness event for 20–30 guests. I'm a certified instructor and carry liability insurance. Could you share your rental rates, available locations, and the specific certification and insurance requirements?",
    modalities:["yoga","pilates","hiit","dance","barre","strength"]
  },
  {
    name: "Bartow-Pell Mansion",
    sub: "Historic House Trust · Pelham Bay, Bronx · 35 indoor / 125 garden",
    phone: "718.885.1461",
    type: "unique", free: false,
    score: 84, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$700–$3,500",
    priceNote: "6-hr block · indoor + formal garden",
    bookingUrl: "https://www.bartowpellmansionmuseum.org/rent/space-rentals/",
    bookingLabel: "Mansion rentals",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:92,color:"#7B9E87"},
      {label:"Accessibility",pct:62,color:"#C47D7D"}
    ],
    tags:[{t:"Historic House Trust",c:"tag-plum"},{t:"Indoor + garden",c:"tag-green"},{t:"6 train · 20 min walk",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for groups over 20 — confirm with events team."},
      {dot:"req-none",text:"No instructor certification required for meditation, sound healing, or contemplative programming."},
      {dot:"req-recommended",text:"Events must end by 10pm to respect park hours."}
    ],
    access:[
      {color:"#C9A84C",text:"6 at Pelham Bay Park · 20 min walk or short rideshare"},
      {color:"#7B9E87",text:"Free on-site parking"},
      {color:"#C47D7D",text:"Stairs at mansion entry · limited ADA access indoors"}
    ],
    outreach:"Hi Bartow-Pell team, I'm interested in renting the mansion or formal garden for a small wellness gathering of 25–30 people. We run contemplative wellness events — sound healing, breathwork, gentle movement — and your property's history and grounds feel perfectly suited. Could you share availability and rental terms?",
    modalities:["sound_bath","meditation","breathwork","workshop","retreat","yoga"]
  },
  {
    name: "Old Stone House",
    sub: "Historic House · Park Slope · Up to 80 guests",
    email: "info@theoldstonehouse.org",
    phone: "718.768.3195",
    instagram: "oldstonehousebklyn",
    type: "unique", free: false,
    score: 83, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$400–$1,500",
    priceNote: "Great Room + garden + park access",
    bookingUrl: "https://theoldstonehouse.org/space-rental/",
    bookingLabel: "Space rental",
    bars: [
      {label:"Audience fit",pct:86,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:96,color:"#7B9E87"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Park Slope gem",c:"tag-plum"},{t:"F/G · 4 min",c:"tag-sky"},{t:"Indoor + park",c:"tag-green"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for community wellness programming."},
      {dot:"req-recommended",text:"Liability insurance recommended for movement events — email to confirm."},
      {dot:"req-none",text:"Old Stone House actively welcomes wellness programming as community-aligned use."}
    ],
    access:[
      {color:"#7B9E87",text:"F/G at 4th Ave–9th St · 4 min walk"},
      {color:"#C9A84C",text:"Street parking · metered weekdays"},
      {color:"#C9A84C",text:"Park-level entry · ground floor accessible"}
    ],
    outreach:"Hi Old Stone House team, I run a small wellness event series in Brooklyn and would love to inquire about renting the Great Room for a movement and sound session for 30–50 people. Your space's history and community-aligned use feel like a perfect match. Could you share rates and availability?",
    modalities:["yoga","sound_bath","meditation","breathwork","workshop","tai_chi"]
  },
  {
    name: "Merchant's House Museum",
    sub: "Historic House · NoHo · Max 25 guests",
    email: "nyc1832@merchantshouse.org",
    phone: "212.777.1089",
    instagram: "merchantshouse",
    type: "unique", free: false,
    score: 80, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$1,500–$3,500",
    priceNote: "+ $500 deposit · no catering · ceremony-only",
    bookingUrl: "https://merchantshouse.org/rentals/",
    bookingLabel: "Rentals",
    bars: [
      {label:"Audience fit",pct:78,color:"#C9A84C"},
      {label:"Aesthetic",pct:98,color:"#7B9E87"},
      {label:"Value",pct:72,color:"#C9A84C"},
      {label:"Accessibility",pct:55,color:"#C47D7D"}
    ],
    tags:[{t:"Greek Revival parlor",c:"tag-plum"},{t:"Secret garden",c:"tag-green"},{t:"6 · Bleecker · 4 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Strict 25-person cap including all vendors. No catering or open flames."},
      {dot:"req-recommended",text:"Liability insurance recommended — confirm with events coordinator."},
      {dot:"req-none",text:"No instructor certification required — events must respect the historic interior."}
    ],
    access:[
      {color:"#7B9E87",text:"6 at Bleecker St · 4 min walk · B/D/F/M at Broadway-Lafayette"},
      {color:"#C47D7D",text:"No on-site parking · meter only"},
      {color:"#C47D7D",text:"Historic stairs · no elevator · not ADA"}
    ],
    outreach:"Hi Merchant's House team, I'd like to inquire about renting the parlor or garden for an intimate wellness ceremony for 15–20 people. We run contemplative gatherings — breathwork and sound healing — that would be respectful of the historic interior. What dates are available?",
    modalities:["sound_bath","meditation","breathwork","workshop"]
  },
  {
    name: "Bronx Museum of the Arts",
    sub: "Museum · Concourse, Bronx · 25–275 guests",
    email: "info@bronxmuseum.org",
    phone: "718.681.6000",
    instagram: "bronxmuseum",
    type: "unique", free: false,
    score: 86, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "From $1,500",
    priceNote: "4-hr minimum · free-admission museum",
    bookingUrl: "https://bronxmuseum.org/rentals/",
    bookingLabel: "Rentals",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:88,color:"#7B9E87"},
      {label:"Accessibility",pct:90,color:"#6B9AB8"}
    ],
    tags:[{t:"Mid-tier museum",c:"tag-plum"},{t:"B/D · 167 St",c:"tag-sky"},{t:"Under-the-radar",c:"tag-gold"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum. Museum will provide their COI requirements."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement programming."},
      {dot:"req-none",text:"No certification needed for workshops, talks, sound healing, or meditation."}
    ],
    access:[
      {color:"#7B9E87",text:"B/D at 167 St · 3 min walk"},
      {color:"#7B9E87",text:"Street parking · plentiful evenings"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi Bronx Museum team, I'd love to inquire about renting your gallery or community space for a wellness workshop for 40–60 people. We're a curated wellness series and would love to bring programming to the Bronx — your community-first model is a perfect fit. Could you share rental options and availability?",
    modalities:["workshop","sound_bath","meditation","breathwork","retreat","yoga"]
  },
  {
    name: "Snug Harbor Cultural Center",
    sub: "83-Acre Campus · Staten Island · Up to 300 guests",
    email: "alombardi@snug-harbor.org",
    phone: "718.425.3516",
    instagram: "snugharborccbg",
    type: "outdoor", free: false,
    score: 85, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Custom quotes",
    priceNote: "Multiple buildings + Chinese Scholar's Garden",
    bookingUrl: "https://snug-harbor.org/rentals/",
    bookingLabel: "Rentals",
    bars: [
      {label:"Audience fit",pct:80,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:85,color:"#7B9E87"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Major untapped gem",c:"tag-gold"},{t:"83-acre campus",c:"tag-green"},{t:"Staten Island Ferry",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required for events — $1M minimum for most spaces."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement programming."},
      {dot:"req-none",text:"Snug Harbor actively encourages wellness programming and is welcoming to community-first creators."}
    ],
    access:[
      {color:"#C9A84C",text:"Staten Island Ferry + S40 bus · 45 min from Manhattan"},
      {color:"#7B9E87",text:"Free on-site parking"},
      {color:"#C9A84C",text:"Most outdoor paths accessible · some buildings ADA-limited"}
    ],
    outreach:"Hi Snug Harbor team, I'm interested in hosting a wellness retreat day on your campus — sound healing, breathwork, gentle movement across the gardens. We typically run gatherings of 40–80 people and your scale, beauty, and almost-zero wellness creator awareness make this an exciting fit. Could we explore dates and spaces?",
    modalities:["yoga","tai_chi","meditation","breathwork","sound_bath","retreat","workshop"]
  },
  {
    name: "Wave Hill",
    sub: "Public Garden · Riverdale, Bronx · Up to 120 guests",
    instagram: "wavehillnyc",
    type: "outdoor", free: false,
    score: 88, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$10K–$16K (membership + rental)",
    priceNote: "Weekday: $5K membership + $5K rental · Hudson views",
    bookingUrl: "https://www.wavehill.org/weddings-private-events",
    bookingLabel: "Private events",
    bars: [
      {label:"Audience fit",pct:92,color:"#7B9E87"},
      {label:"Aesthetic",pct:98,color:"#7B9E87"},
      {label:"Value",pct:60,color:"#C9A84C"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Forest bathing",c:"tag-plum"},{t:"Hudson + Palisades view",c:"tag-green"},{t:"1 train + shuttle",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum for events of 20+."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement events. Wave Hill is wellness-welcoming."},
      {dot:"req-recommended",text:"Wave Hill already runs forest bathing and meditation programming — strong programmatic alignment."}
    ],
    access:[
      {color:"#C9A84C",text:"1 train to 231st + free Wave Hill shuttle · 35 min from Midtown"},
      {color:"#7B9E87",text:"Free on-site parking"},
      {color:"#7B9E87",text:"Paved accessible pathways throughout most of property"}
    ],
    outreach:"Hi Wave Hill events team, I'd love to inquire about hosting a wellness retreat day or sunset gathering at the property. Given that you already run forest bathing and meditation programming, my work feels directly aligned. Could you share weekday rates and which spaces work best for groups of 30–60?",
    modalities:["yoga","tai_chi","meditation","breathwork","sound_bath","workshop","retreat"]
  },
  {
    name: "NYPL Stavros Niarchos Library — Rooftop",
    sub: "Public Library Rooftop · Midtown · 3,500 sqft · Up to 250",
    phone: "212.340.0863",
    instagram: "nyplsnfl",
    type: "outdoor", free: false,
    score: 89, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "Inquire",
    priceNote: "Public-library rooftop · Bryant Park skyline view",
    bookingUrl: "https://www.nypl.org/locations/snfl/event-center",
    bookingLabel: "Event center",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:94,color:"#7B9E87"},
      {label:"Value",pct:85,color:"#7B9E87"},
      {label:"Accessibility",pct:96,color:"#6B9AB8"}
    ],
    tags:[{t:"Rooftop · public library",c:"tag-gold"},{t:"Hidden gem",c:"tag-plum"},{t:"B/D/F/M · Bryant Park",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — NYPL will provide COI specifications."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement events."},
      {dot:"req-none",text:"NYPL is welcoming to community wellness programming aligned with public benefit."}
    ],
    access:[
      {color:"#7B9E87",text:"B/D/F/M at Bryant Park · 1 min walk · 7 at 5th Ave"},
      {color:"#C9A84C",text:"Paid garages nearby"},
      {color:"#7B9E87",text:"Fully ADA accessible · elevator to rooftop"}
    ],
    outreach:"Hi NYPL Stavros Niarchos events team, I'm interested in renting the rooftop terrace for a sunset wellness gathering for 40–80 people. The skyline view across Bryant Park is unmatched and a public-library rooftop is exactly the kind of space our community values. Could you share rental rates and available dates?",
    modalities:["yoga","pilates","sound_bath","meditation","breathwork","tai_chi","workshop"]
  },
  {
    name: "Brooklyn Grange — Brooklyn Navy Yard",
    sub: "Rooftop Farm · BNY · Up to 100 guests · 1.5 acres",
    instagram: "brooklyngrange",
    type: "outdoor", free: false,
    score: 86, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$8,500–$10,000",
    priceNote: "3-hr block · +$1,000/hr overage · Manhattan skyline view",
    bookingUrl: "https://www.brooklyngrangefarm.com/",
    bookingLabel: "Private events",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:62,color:"#C9A84C"},
      {label:"Accessibility",pct:75,color:"#C9A84C"}
    ],
    tags:[{t:"Working rooftop farm",c:"tag-green"},{t:"Already runs yoga",c:"tag-gold"},{t:"F · York St + shuttle",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum. COI before booking."},
      {dot:"req-recommended",text:"Instructor certification recommended — Brooklyn Grange already partners with wellness creators."},
      {dot:"req-recommended",text:"Weather contingency planning required for any guaranteed-rain-or-shine event."}
    ],
    access:[
      {color:"#C9A84C",text:"F at York St + BNY shuttle · 15 min total"},
      {color:"#C9A84C",text:"Paid lot at BNY · limited"},
      {color:"#C47D7D",text:"Elevator up · uneven gravel pathways on rooftop"}
    ],
    outreach:"Hi Brooklyn Grange team, I'd love to bring a sunrise yoga + sound healing session to the BNY rooftop farm. We run intimate wellness gatherings of 30–50 people and your existing wellness programming aligns directly with our community. Could you share a few weekday morning dates?",
    modalities:["yoga","meditation","breathwork","sound_bath","tai_chi","workshop","retreat"]
  },
  {
    name: "The Invisible Dog Art Center",
    sub: "1863 Factory + Art Center · Boerum Hill · Up to 300 guests",
    instagram: "invisibledogartcenter",
    type: "unique", free: false,
    score: 85, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$1,000–$6,000",
    priceNote: "Weekday $1K · weekend day $6K · 10pm hard end",
    bookingUrl: "https://www.theinvisibledog.org/event-space-faq",
    bookingLabel: "Space rentals",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:92,color:"#7B9E87"},
      {label:"Value",pct:88,color:"#7B9E87"},
      {label:"Accessibility",pct:72,color:"#C9A84C"}
    ],
    tags:[{t:"Polished concrete",c:"tag-green"},{t:"Outside catering OK",c:"tag-gold"},{t:"F/G · Bergen St",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum. COI before booking."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement events."},
      {dot:"req-required",text:"All events end at 10pm sharp · load-out included in rental."}
    ],
    access:[
      {color:"#7B9E87",text:"F/G at Bergen St · 4 min walk"},
      {color:"#C9A84C",text:"Street parking · alternate side rules apply"},
      {color:"#C47D7D",text:"Steps at entry · limited ADA · contact for accommodation"}
    ],
    outreach:"Hi Invisible Dog team, I'd love to inquire about a weekday booking for a wellness pop-up — yoga, sound healing, and ecstatic dance — for around 40 people. The polished concrete and art-center brand feel perfectly aligned with our community. Could you share availability for next month?",
    modalities:["yoga","pilates","sound_bath","meditation","breathwork","dance","ecstatic_dance","workshop"]
  },
  {
    name: "Frying Pan / Pier 66 Maritime",
    sub: "Historic Lightship + Barge · Pier 66, West Side · 15–400",
    instagram: "fryingpanny",
    type: "outdoor", free: false,
    score: 78, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Group min 25 · F&B-driven",
    priceNote: "Seasonal Apr–Oct · sunrise/sunset slots possible",
    bookingUrl: "https://www.fryingpan.com/group-reservations/",
    bookingLabel: "Group reservations",
    bars: [
      {label:"Audience fit",pct:78,color:"#C9A84C"},
      {label:"Aesthetic",pct:92,color:"#7B9E87"},
      {label:"Value",pct:75,color:"#C9A84C"},
      {label:"Accessibility",pct:72,color:"#C9A84C"}
    ],
    tags:[{t:"On the water",c:"tag-sky"},{t:"Seasonal Apr–Oct",c:"tag-gold"},{t:"C/E · 23rd St",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended — confirm with the events team."},
      {dot:"req-none",text:"No instructor certification typically required for sunrise yoga or meditation on deck."},
      {dot:"req-recommended",text:"Weather backup essential — open-deck venue."}
    ],
    access:[
      {color:"#7B9E87",text:"C/E at 23rd St · 10 min walk to Pier 66"},
      {color:"#C9A84C",text:"Limited paid parking nearby · rideshare recommended"},
      {color:"#C9A84C",text:"Step over rail to board lightship · uneven decks"}
    ],
    outreach:"Hi Frying Pan team, I'd love to inquire about a sunrise yoga and breathwork session on the barge deck before public hours. We run intimate water-side wellness events for 20–30 people and the lightship's atmosphere would create something genuinely unforgettable. Could you share rates and morning availability?",
    modalities:["yoga","meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "SeaGlass Carousel at The Battery",
    sub: "Aquarium-Inspired Pavilion · Battery Park · ~25 guests",
    instagram: "thebatterynyc",
    type: "unique", free: false,
    score: 84, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$680 · 1.5 hrs",
    priceNote: "Deep Sea Divers package · terrace + Piet Oudolf garden",
    bookingUrl: "https://www.seaglasscarousel.nyc/birthdays/",
    bookingLabel: "Private events",
    bars: [
      {label:"Audience fit",pct:80,color:"#7B9E87"},
      {label:"Aesthetic",pct:98,color:"#7B9E87"},
      {label:"Value",pct:94,color:"#7B9E87"},
      {label:"Accessibility",pct:90,color:"#6B9AB8"}
    ],
    tags:[{t:"Hidden gem",c:"tag-gold"},{t:"Nautilus pavilion",c:"tag-plum"},{t:"1/R/W/4/5 · Bowling Green",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required — terrace package is independently operated."},
      {dot:"req-recommended",text:"Liability insurance recommended for any group movement."},
      {dot:"req-none",text:"Battery Park location is publicly accessible · no formal vetting."}
    ],
    access:[
      {color:"#7B9E87",text:"1 to South Ferry · 4/5 to Bowling Green · R/W to Whitehall · 3 min walk"},
      {color:"#C47D7D",text:"No on-site parking · rideshare or transit"},
      {color:"#7B9E87",text:"Fully ADA accessible · paved garden paths"}
    ],
    outreach:"Hi SeaGlass Party team, I'd love to inquire about renting the Deep Sea Divers terrace package for a small wellness gathering of 20–25 people. We run breathwork and meditation events and the carousel's nautilus design plus the Piet Oudolf garden setting would create something genuinely unique. Could you confirm availability?",
    modalities:["meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "New York Aquarium",
    sub: "Aquarium · Coney Island · Up to 250 cocktail / 90 plated",
    instagram: "nyaquarium",
    type: "unique", free: false,
    score: 78, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "From $10,000",
    priceNote: "Site rental + F&B from ~$200/pp + bar ~$55/pp",
    bookingUrl: "https://nyaquarium.com/",
    bookingLabel: "Host an event",
    bars: [
      {label:"Audience fit",pct:72,color:"#C9A84C"},
      {label:"Aesthetic",pct:94,color:"#7B9E87"},
      {label:"Value",pct:42,color:"#C47D7D"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Premium tier",c:"tag-gold"},{t:"Underwater galleries",c:"tag-plum"},{t:"F/Q · Coney Island",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum. WCS-managed venue."},
      {dot:"req-required",text:"Instructor certification required for movement events."},
      {dot:"req-required",text:"Mandatory in-house catering · external food not permitted."}
    ],
    access:[
      {color:"#7B9E87",text:"F/Q at West 8th–NY Aquarium · steps from entrance"},
      {color:"#7B9E87",text:"Free parking lot on-site"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi New York Aquarium events team, I'd love to inquire about a private event in your underwater galleries for around 80 guests. We run premium wellness gatherings — sound healing, ceremonial movement — and the aquarium's atmosphere would create something nobody could replicate. Could you share rental rates and available dates?",
    modalities:["sound_bath","meditation","retreat","workshop"]
  },
  {
    name: "Hayden Planetarium · Rose Center",
    sub: "Planetarium Dome · AMNH, UWS · Custom capacity",
    instagram: "amnh",
    type: "unique", free: false,
    score: 82, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "Premium tier",
    priceNote: "After-hours dome buyouts · custom proposals",
    bookingUrl: "https://www.amnh.org/host-an-event",
    bookingLabel: "Host an event",
    bars: [
      {label:"Audience fit",pct:75,color:"#C9A84C"},
      {label:"Aesthetic",pct:100,color:"#7B9E87"},
      {label:"Value",pct:35,color:"#C47D7D"},
      {label:"Accessibility",pct:92,color:"#6B9AB8"}
    ],
    tags:[{t:"Unicorn booking",c:"tag-gold"},{t:"Sound bath under stars",c:"tag-plum"},{t:"B/C · 81st St",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $5M typical for AMNH spaces. Museum will provide specifications."},
      {dot:"req-required",text:"Background check + vetting for all instructors leading events."},
      {dot:"req-required",text:"AMNH approves all programming · 4–6 week lead time minimum."}
    ],
    access:[
      {color:"#7B9E87",text:"B/C at 81st St–Museum of Natural History · steps to entrance"},
      {color:"#C9A84C",text:"Paid garage · $50+ per visit"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi AMNH events team, I'd love to explore an after-hours sound bath under the Hayden Planetarium dome for an intimate audience. We run premium wellness gatherings and a sound healing experience under your projected sky would be a singular collaboration. Could we set up an initial conversation?",
    modalities:["sound_bath","meditation","breathwork","workshop","retreat"]
  },
  {
    name: "NeueHouse Madison Square",
    sub: "Members' Club · Flatiron · 80–225 guests · 5 event spaces",
    instagram: "neuehouse",
    type: "studio", free: false,
    score: 82, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Non-member event hire · Penthouse + cinema + gallery",
    bookingUrl: "https://www.neuehouse.com/private-events/madison-square/",
    bookingLabel: "Private events",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:94,color:"#7B9E87"},
      {label:"Value",pct:55,color:"#C9A84C"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Non-member bookable",c:"tag-gold"},{t:"Penthouse + cinema",c:"tag-plum"},{t:"R/W · 23rd St",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum. NeueHouse will share COI specifications."},
      {dot:"req-required",text:"Instructor certification required for any movement programming."},
      {dot:"req-recommended",text:"Brand alignment review · NeueHouse curates which non-member events fit their members."}
    ],
    access:[
      {color:"#7B9E87",text:"R/W at 23rd St · 3 min walk"},
      {color:"#C9A84C",text:"Paid garages · no free street parking"},
      {color:"#7B9E87",text:"Fully ADA accessible · elevators throughout"}
    ],
    outreach:"Hi NeueHouse Private Events team, I'm reaching out about a wellness gathering for 40–80 guests at your Madison Square location. We're a creator-led wellness series with strong brand alignment to your members. Could you share which of your 5 event spaces work best and current rates?",
    modalities:["yoga","pilates","meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "Pioneer Works",
    sub: "Warehouse + Garden · Red Hook · Up to 1,000 guests",
    instagram: "pioneerworks_brooklyn",
    type: "unique", free: false,
    score: 83, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$10,000–$38,000/day",
    priceNote: "25,000 sqft warehouse + 20,000 sqft garden",
    bookingUrl: "https://pioneerworks.org/rentals",
    bookingLabel: "Rentals",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:92,color:"#7B9E87"},
      {label:"Value",pct:48,color:"#C47D7D"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Premium retreat scale",c:"tag-gold"},{t:"Polished concrete + garden",c:"tag-green"},{t:"Red Hook · F · ferry",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $2M minimum for events of this scale."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement-based programming."},
      {dot:"req-recommended",text:"Pioneer Works is a nonprofit — programming that aligns with their cultural mission gets favorable terms."}
    ],
    access:[
      {color:"#C9A84C",text:"F at Smith–9th + B61 bus · 25 min · or NYC Ferry to Red Hook"},
      {color:"#7B9E87",text:"Street parking · plentiful"},
      {color:"#7B9E87",text:"Fully ADA accessible warehouse + garden paths"}
    ],
    outreach:"Hi Pioneer Works team, I'd love to inquire about hosting a wellness retreat day in the warehouse + garden — sound healing, breathwork, movement, ecstatic dance — for around 100 people. Your nonprofit mission and creator-aligned brand are a strong match. Could we explore weekday rates and dates?",
    modalities:["yoga","dance","ecstatic_dance","sound_bath","meditation","breathwork","workshop","retreat"]
  },
  {
    name: "The Fit In",
    sub: "Boutique Wellness Brand · Bed-Stuy, Brooklyn · 4 studios",
    instagram: "thefitinwellness",
    type: "studio", free: false,
    score: 88, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Reformer · Beats & Barres · Strong · Mobility",
    bookingUrl: "https://thefitinwellness.com/",
    bookingLabel: "The Fit In",
    bars: [
      {label:"Audience fit",pct:92,color:"#7B9E87"},
      {label:"Aesthetic",pct:86,color:"#7B9E87"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Black woman-owned",c:"tag-gold"},{t:"Bed-Stuy",c:"tag-plum"},{t:"A/C · Utica + Kingston-Throop",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required for instructor-led events — $1M minimum standard for boutique studios."},
      {dot:"req-required",text:"Pilates or fitness certification required for instructor-led classes (PMA, ACE, NASM, or equivalent)."},
      {dot:"req-recommended",text:"Brand alignment matters — The Fit In is community-care focused and welcomes creators aligned with equity, accessibility, and Bed-Stuy."}
    ],
    access:[
      {color:"#7B9E87",text:"A/C at Utica Ave or Kingston-Throop · 5–8 min walk"},
      {color:"#C9A84C",text:"Street parking · alternate side rules"},
      {color:"#C9A84C",text:"Studio-by-studio · contact for ADA specifics"}
    ],
    outreach:"Hi The Fit In team, I'd love to explore renting one of your studios for a small wellness event for 15–20 people. I'm aligned with your community-care mission and would love to bring programming to Bed-Stuy that builds on what you're already doing. Could you share your studio rental options and rates?",
    modalities:["pilates","barre","strength","yoga","hiit"]
  },
  {
    name: "The Space Pilates Studio",
    sub: "Boutique Pilates + Teacher Training · Flatiron · ~20 guests",
    phone: "917.301.7610",
    instagram: "thespacepilates",
    type: "studio", free: false,
    score: 86, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Balanced Body Reformer classroom · natural light",
    bookingUrl: "https://www.thespacepilates.com/",
    bookingLabel: "The Space Pilates",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:80,color:"#7B9E87"},
      {label:"Accessibility",pct:84,color:"#6B9AB8"}
    ],
    tags:[{t:"Reformer studio",c:"tag-gold"},{t:"Teacher Training School",c:"tag-plum"},{t:"R/W · 23rd St · 4 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum. COI before booking confirmation."},
      {dot:"req-required",text:"Pilates certification required for any Reformer-led programming (PMA or comprehensive 450-hr equivalent)."},
      {dot:"req-recommended",text:"Mat Pilates and workshop-style events more flexible on cert requirements — confirm with studio."}
    ],
    access:[
      {color:"#7B9E87",text:"R/W at 23rd St · 4 min walk · N/W/6 at 14th St"},
      {color:"#C47D7D",text:"Paid garages only · no free street parking"},
      {color:"#C9A84C",text:"2nd floor · elevator access · confirm specifics"}
    ],
    outreach:"Hi The Space team, I'm a Pilates instructor interested in renting your Reformer classroom for a small workshop or community class for around 15 people. Your Balanced Body equipment and the studio's reputation make this an ideal fit. Could you share rental rates, availability, and your specific certification and insurance requirements?",
    modalities:["pilates","barre"]
  },
  {
    name: "Gibney 280 Broadway",
    sub: "Dance Center · Lower Manhattan · 14 studios · Various sizes",
    email: "rentals@gibneydance.org",
    phone: "646.837.6809",
    instagram: "gibneydance",
    type: "studio", free: false,
    score: 91, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$10/hr (NPDR) – market rate",
    priceNote: "$10/hr subsidized for nonprofit/independent dance artists",
    bookingUrl: "https://gibneydance.org/center/",
    bookingLabel: "Gibney rentals",
    bars: [
      {label:"Audience fit",pct:92,color:"#7B9E87"},
      {label:"Aesthetic",pct:85,color:"#7B9E87"},
      {label:"Value",pct:98,color:"#7B9E87"},
      {label:"Accessibility",pct:95,color:"#6B9AB8"}
    ],
    tags:[{t:"$10/hr nonprofit rate",c:"tag-free"},{t:"Sprung floors · 14 studios",c:"tag-green"},{t:"4/5/6/J/Z/R/W · 4 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for movement programming — Gibney is flexible on requirements for nonprofit/independent dance artists."},
      {dot:"req-none",text:"No instructor certification required for community programming, meditation, breathwork, or non-equipment Pilates."},
      {dot:"req-recommended",text:"Half-price rentals available 8–10am M–F · 50% discount for last-minute (within 24hr) bookings."}
    ],
    access:[
      {color:"#7B9E87",text:"4/5/6 at Brooklyn Bridge · J/Z at Chambers · R/W at City Hall · 4 min walk"},
      {color:"#C47D7D",text:"Paid garages nearby · no on-site parking"},
      {color:"#7B9E87",text:"Fully ADA accessible · elevators throughout"}
    ],
    outreach:"Hi Gibney Rentals team, I'd love to inquire about renting a studio for a small wellness session — likely 15–25 people. I run movement and breathwork programming aligned with your community focus. Could you share which studios fit my group size and confirm whether I qualify for the NPDR rate?",
    modalities:["yoga","pilates","barre","dance","ecstatic_dance","tai_chi","workshop","meditation","breathwork"]
  },
  {
    name: "Gibney 890 Broadway",
    sub: "Dance Center · Flatiron · 9 studios · Steps from Union Square",
    email: "rentals@gibneydance.org",
    phone: "212.677.8560",
    instagram: "gibneydance",
    type: "studio", free: false,
    score: 90, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$10/hr (NPDR) – market rate",
    priceNote: "Historic dance building · home to many NYC dance companies",
    bookingUrl: "https://gibneydance.org/center/",
    bookingLabel: "Gibney rentals",
    bars: [
      {label:"Audience fit",pct:92,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:98,color:"#7B9E87"},
      {label:"Accessibility",pct:92,color:"#6B9AB8"}
    ],
    tags:[{t:"$10/hr nonprofit rate",c:"tag-free"},{t:"Historic dance complex",c:"tag-gold"},{t:"N/R/W/4/5/6/L · Union Sq",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended — Gibney is flexible for nonprofit/independent dance artists."},
      {dot:"req-none",text:"No instructor certification required for community wellness programming."},
      {dot:"req-recommended",text:"Half-price 8–10am M–F · 50% off last-minute (within 24hr) bookings."}
    ],
    access:[
      {color:"#7B9E87",text:"N/R/W/4/5/6/L at Union Square · 2 min walk"},
      {color:"#C47D7D",text:"Paid garages nearby"},
      {color:"#7B9E87",text:"Fully ADA accessible · elevator"}
    ],
    outreach:"Hi Gibney Rentals team, I'd love to inquire about renting a studio at 890 Broadway for a wellness session of around 20 people. The dance-heritage of this building is a perfect fit for movement-based programming. Could you share availability and confirm whether I qualify for the NPDR rate?",
    modalities:["yoga","pilates","barre","dance","ecstatic_dance","tai_chi","workshop","meditation","breathwork"]
  },
  {
    name: "Yogalution Movement",
    sub: "Donation-Based Yoga Studio · Long Beach, LI · Multiple rooms",
    instagram: "yogalutionmovement",
    type: "studio", free: false,
    score: 92, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$85/hr",
    priceNote: "$150 deposit · 2-hr minimum incl. setup/breakdown",
    bookingUrl: "https://www.yogalutionmovement.com/studio-rental",
    bookingLabel: "Studio rental",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:84,color:"#7B9E87"},
      {label:"Value",pct:96,color:"#7B9E87"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Published rental rates",c:"tag-gold"},{t:"Long Beach LIRR · 5 min",c:"tag-sky"},{t:"Donation-based",c:"tag-plum"}],
    requirements:[
      {dot:"req-required",text:"Proposal-form review · Yogalution screens rental requests for community fit."},
      {dot:"req-recommended",text:"Liability insurance recommended — confirm specifics with the studio."},
      {dot:"req-none",text:"No instructor cert required for non-yoga community programming; RYT-200 expected for yoga-led classes."}
    ],
    access:[
      {color:"#7B9E87",text:"Long Beach LIRR (Long Beach branch terminus) · 5 min walk · ~55 min from Penn"},
      {color:"#C9A84C",text:"Street parking · metered on Park Ave"},
      {color:"#C9A84C",text:"Ground floor accessible · confirm specifics"}
    ],
    outreach:"Hi Yogalution Movement team, I saw your studio-rental page and would love to inquire about a 2-hour booking for a community wellness session of 15–20 people. I'd like to use the Asana Room. Could you share available dates and confirm what's included with the $85/hr rate?",
    modalities:["yoga","pilates","sound_bath","meditation","breathwork","dance","tai_chi","workshop"]
  },
  {
    name: "Wave Wellness Hamptons — Southampton",
    sub: "Social Wellness Club · Southampton, LI · 4,000 sqft",
    instagram: "wavewellnesshamptons",
    type: "studio", free: false,
    score: 89, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "1,000 sqft studio + sauna + cold plunge · programming-forward",
    bookingUrl: "https://www.wavewellnesshamptons.com/",
    bookingLabel: "Wave Wellness",
    bars: [
      {label:"Audience fit",pct:92,color:"#7B9E87"},
      {label:"Aesthetic",pct:94,color:"#7B9E87"},
      {label:"Value",pct:62,color:"#C9A84C"},
      {label:"Accessibility",pct:90,color:"#6B9AB8"}
    ],
    tags:[{t:"Members + non-member events",c:"tag-gold"},{t:"Sauna + cold plunge",c:"tag-green"},{t:"Southampton LIRR",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Vetted instructor model — application-based for guest practitioners."},
      {dot:"req-required",text:"Liability insurance required · membership-club standards apply."},
      {dot:"req-recommended",text:"Wave Wellness actively curates guest-practitioner programming and corporate/private events."}
    ],
    access:[
      {color:"#7B9E87",text:"Southampton LIRR · 5 min walk · ~2.5 hr from Penn"},
      {color:"#C9A84C",text:"Street parking nearby · seasonal limits"},
      {color:"#7B9E87",text:"Fully ADA accessible · new build"}
    ],
    outreach:"Hi Wave Wellness Hamptons team, I'd love to inquire about hosting a guest-practitioner session at your Southampton flagship — I run breathwork and movement programming aligned with your social wellness model. Could we discuss your guest-practitioner pathway and rental options for groups of 20–30?",
    modalities:["yoga","pilates","sound_bath","meditation","breathwork","strength","workshop","retreat"]
  },
  {
    name: "Yoga Shanti",
    sub: "Flagship Yoga Studio · Sag Harbor, LI · ~30 guests",
    phone: "631.725.6424",
    instagram: "yogashanti.sagharbor",
    type: "studio", free: false,
    score: 90, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Founded by Colleen Saidman & Rodney Yee · workshop-heavy",
    bookingUrl: "https://yogashanti.com/",
    bookingLabel: "Yoga Shanti",
    bars: [
      {label:"Audience fit",pct:94,color:"#7B9E87"},
      {label:"Aesthetic",pct:92,color:"#7B9E87"},
      {label:"Value",pct:70,color:"#C9A84C"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Hamptons flagship",c:"tag-gold"},{t:"Hosts visiting teachers",c:"tag-plum"},{t:"Bridgehampton LIRR + shuttle",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"RYT-200 minimum for yoga-led programming · Yoga Shanti vets visiting teachers."},
      {dot:"req-required",text:"Liability insurance required · COI before booking."},
      {dot:"req-recommended",text:"Strong precedent for outside instructors — explicit history of hosting workshops and retreats."}
    ],
    access:[
      {color:"#C9A84C",text:"Bridgehampton LIRR + SFCC shuttle to Sag Harbor · ~3 hr total"},
      {color:"#7B9E87",text:"Street parking in Sag Harbor village"},
      {color:"#C9A84C",text:"Confirm ADA accommodation · second-floor studio"}
    ],
    outreach:"Hi Yoga Shanti team, I'm a yoga and breathwork creator and would love to explore hosting a workshop or weekend intensive at your Sag Harbor studio for around 25 people. The lineage you've built feels deeply aligned with the kind of programming I run. Could you share availability and instructor-vetting requirements?",
    modalities:["yoga","meditation","breathwork","sound_bath","workshop","retreat"]
  },
  {
    name: "Mandala Yoga Center for Healing Arts",
    sub: "Yoga + Healing Arts · Amagansett, LI · Scoville Hall · 30–50",
    email: "jolie@mandalayoga.com",
    phone: "631.267.6144",
    type: "studio", free: false,
    score: 88, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Historic Scoville Hall (since 2024) · multi-modality",
    bookingUrl: "https://www.mandalayoga.com/",
    bookingLabel: "Mandala Yoga",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:80,color:"#7B9E87"},
      {label:"Accessibility",pct:85,color:"#6B9AB8"}
    ],
    tags:[{t:"Rents to outside groups",c:"tag-gold"},{t:"Ayurveda + Reiki + sound",c:"tag-plum"},{t:"Amagansett LIRR · 0.5 mi",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"RYT-200 expected for yoga-led classes; healing-arts modalities reviewed case-by-case."},
      {dot:"req-recommended",text:"Liability insurance recommended for any group movement programming."},
      {dot:"req-none",text:"Owner explicitly allows group rentals · Scoville Hall is large-format flexible."}
    ],
    access:[
      {color:"#7B9E87",text:"Amagansett LIRR · 0.5 mi walk · ~3 hr from Penn"},
      {color:"#7B9E87",text:"Free parking on-site"},
      {color:"#7B9E87",text:"Scoville Hall is ground-floor accessible"}
    ],
    outreach:"Hi Mandala Yoga team, I'd love to inquire about renting Scoville Hall for a wellness workshop combining sound healing and gentle movement for 25–40 people. Your multi-modality home feels perfectly suited. Could you share availability and rental terms?",
    modalities:["yoga","sound_bath","meditation","breathwork","workshop","retreat","dance"]
  },
  {
    name: "North Fork Yoga Shala",
    sub: "Multi-Site Yoga Studio · North Fork, LI · 5 locations",
    phone: "516.443.5626",
    instagram: "northforkyogashala",
    type: "studio", free: false,
    score: 86, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Parish Hall + waterfront + rooftop options",
    bookingUrl: "https://northforkyogashala.com/",
    bookingLabel: "North Fork Yoga Shala",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:92,color:"#7B9E87"},
      {label:"Value",pct:85,color:"#7B9E87"},
      {label:"Accessibility",pct:75,color:"#C9A84C"}
    ],
    tags:[{t:"Waterfront + rooftop sites",c:"tag-gold"},{t:"Rents to outside groups",c:"tag-plum"},{t:"Greenport LIRR",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"RYT-200 expected for yoga · open to other movement/sound modalities."},
      {dot:"req-recommended",text:"Liability insurance recommended — confirm by site (rooftop has different needs than parish hall)."},
      {dot:"req-none",text:"Claire Copersino's network has been hosting outside groups since 2000."}
    ],
    access:[
      {color:"#7B9E87",text:"Greenport LIRR (terminus) · ~3 hr from Penn"},
      {color:"#7B9E87",text:"Free parking at most sites"},
      {color:"#C9A84C",text:"Site-by-site accessibility · waterfront has uneven ground"}
    ],
    outreach:"Hi Claire / North Fork Yoga Shala team, I'd love to explore renting one of your sites — the Menhaden Hotel rooftop or parish hall — for a weekend yoga + sound healing immersion for 20–30 people. Could you share which sites have availability and what your rental terms look like?",
    modalities:["yoga","sound_bath","meditation","breathwork","workshop","retreat"]
  },
  {
    name: "Hot Yoga 4 You",
    sub: "Hot Yoga Studio · Rockville Centre, LI · 35–50 guests",
    email: "hotyoga4yourvc@gmail.com",
    phone: "516.432.7777",
    type: "studio", free: false,
    score: 85, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Large heated room · markets private events explicitly",
    bookingUrl: "https://bikramyogarvc.com/",
    bookingLabel: "Studio + private events",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:80,color:"#7B9E87"},
      {label:"Value",pct:85,color:"#7B9E87"},
      {label:"Accessibility",pct:72,color:"#C9A84C"}
    ],
    tags:[{t:"Private events welcome",c:"tag-gold"},{t:"Largest heated room in area",c:"tag-green"},{t:"Rockville Centre LIRR",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required for instructor-led events — $1M minimum standard."},
      {dot:"req-required",text:"Yoga certification (Bikram, RYT-200, or equivalent) required for yoga-led programming."},
      {dot:"req-none",text:"No certification required for birthdays, bachelorettes, corporate wellness events."}
    ],
    access:[
      {color:"#7B9E87",text:"Rockville Centre LIRR · close walk · ~50 min from Penn"},
      {color:"#C9A84C",text:"Street parking · metered"},
      {color:"#C47D7D",text:"2nd-floor studio · confirm ADA access with studio"}
    ],
    outreach:"Hi Hot Yoga 4 You team, I'd love to inquire about renting your studio for a private group event of 30–40 people. I see you explicitly market private bookings — could you share rates, available windows, and any insurance or certification specs?",
    modalities:["yoga","pilates","hiit","workshop"]
  },
  {
    name: "Soundbody Hamptons",
    sub: "Boutique Pilates + Sound + Yoga · Westhampton Beach, LI · 12–20",
    email: "whb@soundbodyhamptons.com",
    phone: "631.388.4738",
    type: "studio", free: false,
    score: 85, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Main St boutique · sound bath programming established",
    bookingUrl: "https://soundbodyhamptons.com/",
    bookingLabel: "Soundbody Hamptons",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:78,color:"#C9A84C"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Sound bath native",c:"tag-plum"},{t:"Pilates + Yoga + Meditation",c:"tag-green"},{t:"Westhampton LIRR",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum standard for boutique studios."},
      {dot:"req-required",text:"Pilates or yoga certification (PMA, RYT-200) required for movement-led programming."},
      {dot:"req-none",text:"Sound healing + breathwork modalities reviewed case-by-case — Loulou's curation is the bar."}
    ],
    access:[
      {color:"#7B9E87",text:"Westhampton LIRR · close walk · ~2.5 hr from Penn"},
      {color:"#C9A84C",text:"Street parking · Main St seasonal limits"},
      {color:"#7B9E87",text:"Ground-floor Main St entrance"}
    ],
    outreach:"Hi Loulou / Soundbody team, I'd love to inquire about a visiting-practitioner slot for a sound bath + breathwork session of 12–18 people at your Westhampton Beach studio. Your fitness-meets-mindfulness brand is exactly the audience I serve. Could you share rates and visiting-instructor process?",
    modalities:["pilates","yoga","sound_bath","meditation","breathwork","workshop"]
  },
  {
    name: "Shou Sugi Ban House",
    sub: "Destination Wellness Retreat · Water Mill, LI · Boutique groups",
    email: "events@ssbhouse.com",
    phone: "631.500.9049",
    instagram: "shousugibanhouse",
    type: "hotel", free: false,
    score: 87, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Partnership inquiry",
    priceNote: "Conde Nast / T+L ranked spa · guest-instructor residencies",
    bookingUrl: "https://shousugibanhouse.com/",
    bookingLabel: "Shou Sugi Ban House",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:100,color:"#7B9E87"},
      {label:"Value",pct:30,color:"#C47D7D"},
      {label:"Accessibility",pct:92,color:"#6B9AB8"}
    ],
    tags:[{t:"Premium retreat tier",c:"tag-gold"},{t:"Guest-instructor residencies",c:"tag-plum"},{t:"Bridgehampton LIRR + shuttle",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Application + curation by Healing Arts team · highest standard of instructor vetting."},
      {dot:"req-required",text:"Liability insurance + professional credentials required."},
      {dot:"req-recommended",text:"Best path is a guest-instructor residency pitch — not a single-event rental."}
    ],
    access:[
      {color:"#C9A84C",text:"Bridgehampton/Southampton LIRR + property shuttle · ~3 hr from Penn"},
      {color:"#7B9E87",text:"Resort-managed transport"},
      {color:"#7B9E87",text:"Fully ADA accessible · luxury-resort standard"}
    ],
    outreach:"Hi Shou Sugi Ban House Healing Arts team, I'd love to explore a guest-instructor residency for a weekend programming series — sound healing, breathwork, contemplative movement. I run a curated wellness practice that I believe aligns with your aesthetic and standards. Could we set up an initial conversation about your residency pathway?",
    modalities:["yoga","sound_bath","meditation","breathwork","retreat","workshop"]
  },
  {
    name: "SomaWell",
    sub: "Integrative Wellness Center · Halesite, Huntington, LI · 20–30",
    phone: "631.848.2268",
    type: "studio", free: false,
    score: 84, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Harbor-view studio · integrative practitioner team",
    bookingUrl: "https://www.somawell.com/",
    bookingLabel: "SomaWell",
    bars: [
      {label:"Audience fit",pct:86,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:90,color:"#6B9AB8"}
    ],
    tags:[{t:"Harbor view",c:"tag-plum"},{t:"Workshops + community events",c:"tag-gold"},{t:"Huntington LIRR + rideshare",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required for movement-based events."},
      {dot:"req-recommended",text:"RYT-200 or equivalent recommended; multidisciplinary practitioners welcome via application."},
      {dot:"req-none",text:"SomaWell already hosts workshops and community events — explicit precedent for outside instructors."}
    ],
    access:[
      {color:"#C9A84C",text:"Huntington LIRR + short rideshare to Halesite · ~1.5 hr from Penn"},
      {color:"#7B9E87",text:"Free parking · downtown Halesite"},
      {color:"#7B9E87",text:"Ground-floor accessible"}
    ],
    outreach:"Hi SomaWell team, I'd love to inquire about hosting a wellness workshop in your harbor-view studio for 20–25 people. I see you actively run community events and would love to bring breathwork and sound healing programming to your North Shore audience. Could you share rates and availability?",
    modalities:["yoga","meditation","breathwork","sound_bath","workshop","retreat"]
  },
  {
    name: "Montauk Salt Cave",
    sub: "Salt Therapy + Wellness · Montauk + Huntington outpost, LI",
    email: "huntington@montauksaltcave.com",
    phone: "631.923.3030",
    instagram: "montauksaltcavewest",
    type: "unique", free: false,
    score: 85, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "Inquire",
    priceNote: "Only true salt cave on LI · sound bath programming established",
    bookingUrl: "https://www.montauksaltcave.com/",
    bookingLabel: "Montauk Salt Cave",
    bars: [
      {label:"Audience fit",pct:86,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:78,color:"#C9A84C"},
      {label:"Accessibility",pct:70,color:"#C9A84C"}
    ],
    tags:[{t:"Salt cave · LI only",c:"tag-gold"},{t:"Sound bath native",c:"tag-plum"},{t:"Montauk LIRR · terminus",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No specific instructor certification required — Montauk Salt Cave reviews healing practitioners case-by-case."},
      {dot:"req-recommended",text:"Liability insurance recommended for group sessions."},
      {dot:"req-recommended",text:"Cave capacity is small (6–12) · main room larger · plan accordingly."}
    ],
    access:[
      {color:"#C9A84C",text:"Montauk LIRR (terminus) for Montauk site · ~3 hr from Penn · Huntington outpost on Port Jeff branch"},
      {color:"#7B9E87",text:"Free street parking in both locations"},
      {color:"#C9A84C",text:"Cave entry has steps · confirm specifics"}
    ],
    outreach:"Hi Montauk Salt Cave team, I'd love to inquire about renting your space for a sound bath + breathwork session — likely the main room rather than the cave for capacity. I run a wellness series aligned with your healing-practitioner programming. Could you share rates and available dates at either location?",
    modalities:["sound_bath","meditation","breathwork","workshop","retreat"]
  },
  {
    name: "Roslyn Salt Cave",
    sub: "Salt Cave + Studio · Roslyn, LI · 15–20 (Quartz) + smaller rooms",
    email: "info@roslynsaltcave.com",
    phone: "516.629.7089",
    type: "unique", free: false,
    score: 90, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$65–$200/hr",
    priceNote: "Quartz Room $125–$200/hr · Amethyst $65/hr · Rose Quartz $65/hr",
    bookingUrl: "https://roslynsaltcave.com/rental-opportunities",
    bookingLabel: "Rental opportunities",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:94,color:"#7B9E87"},
      {label:"Value",pct:92,color:"#7B9E87"},
      {label:"Accessibility",pct:75,color:"#C9A84C"}
    ],
    tags:[{t:"Published rental rates",c:"tag-gold"},{t:"Salt cave + 3 rooms",c:"tag-plum"},{t:"Albertson LIRR + cab",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No specific instructor certification required — Roslyn Salt Cave invites integrative and holistic practitioners."},
      {dot:"req-recommended",text:"Liability insurance recommended for group movement programming."},
      {dot:"req-recommended",text:"Three room sizes available — match the room to your group (Quartz fits 15–20, smaller rooms are 1:1 to small-circle scale)."}
    ],
    access:[
      {color:"#C9A84C",text:"~10-min cab from Albertson LIRR · ~50 min from Penn"},
      {color:"#7B9E87",text:"Free parking on-site"},
      {color:"#C9A84C",text:"Confirm ADA specifics with the studio"}
    ],
    outreach:"Hi Roslyn Salt Cave team, I saw your Rental Opportunities page and would love to book the Quartz Room for a sound bath + breathwork session of around 15 people. Could you confirm available dates and what's included with the rental rate?",
    modalities:["sound_bath","meditation","breathwork","yoga","workshop","retreat"]
  },
  {
    name: "The Goddess Loft",
    sub: "Multi-Modality Event Loft · Garden City, LI · 30 seated / 60 standing",
    email: "hello@thegoddessloft.com",
    phone: "917.214.4444",
    type: "studio", free: false,
    score: 88, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$155/hr",
    priceNote: "3-hr minimum · published rental rates",
    bookingUrl: "https://goddessloft.com/pages/rent-a-space",
    bookingLabel: "Rent a space",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:84,color:"#7B9E87"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Published rental rates",c:"tag-gold"},{t:"Full moon · manifestation · sound",c:"tag-plum"},{t:"Garden City LIRR · 3 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for any group programming — confirm with the loft."},
      {dot:"req-none",text:"No specific certification required — Goddess Loft is welcoming to ceremony, manifestation, and movement formats."},
      {dot:"req-recommended",text:"Co-host is a Certified Yoga Instructor / Reiki Healer — operationally tuned to outside-instructor events."}
    ],
    access:[
      {color:"#7B9E87",text:"Garden City LIRR (Hempstead Branch) · 3-min walk · ~45 min from Penn"},
      {color:"#C9A84C",text:"Street parking · metered weekdays"},
      {color:"#C9A84C",text:"Historic industrial building · confirm ADA specifics on inquiry"}
    ],
    outreach:"Hi Goddess Loft team, I'd love to inquire about renting your loft for a sound bath + manifestation circle for around 25 people. I see your $155/hr rate and 3-hr minimum on the rental page — could you share available dates over the next month?",
    modalities:["sound_bath","meditation","breathwork","yoga","workshop","ceremony"]
  },
  {
    name: "Here and Now Yoga, Wellness & Arts Collective",
    sub: "Wellness + Arts Collective · Floral Park, LI · 3 studios",
    phone: "516.880.3924",
    type: "studio", free: false,
    score: 87, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "3-studio collective · classes + workshops + retreats + performance",
    bookingUrl: "https://hereandnowyoga.com/",
    bookingLabel: "Here and Now",
    bars: [
      {label:"Audience fit",pct:92,color:"#7B9E87"},
      {label:"Aesthetic",pct:84,color:"#7B9E87"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Arts Collective framing",c:"tag-gold"},{t:"Inclusive · chair yoga",c:"tag-plum"},{t:"Floral Park LIRR · 8 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended — confirm specifics on inquiry."},
      {dot:"req-recommended",text:"Cert preferences vary by modality — Here and Now's collective model means individual instructors set their own bar."},
      {dot:"req-none",text:"Multi-modality openness: Yoga, Mat Pilates, Tai Chi, Floor Barre, Sculpt, Inclusive/Chair Yoga, art/music/dance/performance."}
    ],
    access:[
      {color:"#7B9E87",text:"Floral Park LIRR (Hempstead Branch) · 8-min walk · ~30 min from Penn"},
      {color:"#7B9E87",text:"Street parking available"},
      {color:"#7B9E87",text:"Inclusive yoga programming for disabled community — accessibility-aware culture"}
    ],
    outreach:"Hi Here and Now team, I'd love to inquire about renting one of your studios for a wellness workshop for around 20 people. Your arts-collective framing is exactly the kind of community I want to be part of. Could you share rental rates and which studio fits my group size?",
    modalities:["yoga","pilates","tai_chi","barre","dance","meditation","sound_bath","breathwork","workshop","retreat"]
  },
  {
    name: "MOSS Wellness Workspace",
    sub: "Wellness Co-Working + Event Space · Garden City, LI",
    email: "admin@mosswellnessworkspace.com",
    phone: "516.252.6679",
    type: "studio", free: false,
    score: 85, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Purpose-built for independent wellness practitioners",
    bookingUrl: "https://mosswellnessworkspace.com/",
    bookingLabel: "MOSS Wellness",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:86,color:"#7B9E87"},
      {label:"Value",pct:80,color:"#7B9E87"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Built for practitioners",c:"tag-gold"},{t:"Event + Workshop Space",c:"tag-plum"},{t:"Nassau Blvd LIRR + cab",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended — MOSS's practitioner-first model means most renters carry their own COI."},
      {dot:"req-recommended",text:"Cert culture established — MOSS screens members for credentialed practitioners."},
      {dot:"req-none",text:"Workshops + events explicitly listed as an offering — no awkward conversation about whether they rent."}
    ],
    access:[
      {color:"#C9A84C",text:"Short cab from Nassau Boulevard or Garden City LIRR · ~50 min from Penn"},
      {color:"#7B9E87",text:"On-site parking"},
      {color:"#7B9E87",text:"Modern build · ADA likely · confirm specifics"}
    ],
    outreach:"Hi MOSS Wellness team, I'd love to inquire about renting your Event + Workshop Space for a small wellness gathering — likely 15–20 people. Since your model is purpose-built for practitioners like me, I'd love to understand your event rental tier and member benefits. Could you share details?",
    modalities:["yoga","pilates","meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "PRACTICE Body Mind Soul",
    sub: "Wellness + Retreat Center · Roslyn, LI · Multi-room",
    phone: "516.858.3095",
    instagram: "practicebodymindsoul",
    type: "studio", free: false,
    score: 86, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Yoga Alliance RYS · runs YTT and Pilates teacher trainings",
    bookingUrl: "https://www.yelp.com/biz/practice-body-mind-soul-roslyn",
    bookingLabel: "PRACTICE Body Mind Soul",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:74,color:"#C9A84C"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Retreat center infrastructure",c:"tag-gold"},{t:"YA RYS · runs YTTs",c:"tag-plum"},{t:"Roslyn LIRR + cab",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"RYT-200 minimum for yoga-led programming · YA RYS sets the standard."},
      {dot:"req-required",text:"Liability insurance required — confirm COI specs on inquiry."},
      {dot:"req-recommended",text:"PRACTICE's retreat-center setup makes them well-equipped to host visiting facilitators at a premium tier."}
    ],
    access:[
      {color:"#C9A84C",text:"~10-min cab from Roslyn or Albertson LIRR · ~50 min from Penn"},
      {color:"#7B9E87",text:"On-site parking"},
      {color:"#C9A84C",text:"Confirm ADA specifics on inquiry"}
    ],
    outreach:"Hi PRACTICE Body Mind Soul team, I'd love to explore hosting a weekend retreat or workshop intensive at your center for 20–30 people. Your YA RYS standing and retreat-center infrastructure make this a strong fit. Could we discuss available dates and your visiting-facilitator process?",
    modalities:["yoga","pilates","meditation","breathwork","workshop","retreat"]
  },
  {
    name: "Sukha Studio",
    sub: "Yoga + Pilates + Sound · Garden City, LI · Boutique",
    email: "info@sukhastudiogc.com",
    phone: "516.440.4485",
    instagram: "sukhastudio_gc",
    type: "studio", free: false,
    score: 83, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Multi-modality boutique · sound + reiki events",
    bookingUrl: "https://www.sukhastudiogc.com/",
    bookingLabel: "Sukha Studio",
    bars: [
      {label:"Audience fit",pct:86,color:"#7B9E87"},
      {label:"Aesthetic",pct:86,color:"#7B9E87"},
      {label:"Value",pct:80,color:"#7B9E87"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Multi-modality",c:"tag-gold"},{t:"Sound + Reiki events",c:"tag-plum"},{t:"Mineola/Merillon LIRR + drive",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for movement programming."},
      {dot:"req-recommended",text:"RYT-200 / PMA expected for movement-led classes; sound and reiki reviewed case-by-case."},
      {dot:"req-none",text:"Already runs Sound Journey + Reiki events — precedent for outside modalities."}
    ],
    access:[
      {color:"#C9A84C",text:"~10-min drive from Mineola or Merillon Ave LIRR"},
      {color:"#7B9E87",text:"Shopping-center parking · plentiful"},
      {color:"#C9A84C",text:"Confirm ADA specifics with the studio"}
    ],
    outreach:"Hi Sukha team, I saw your Sound Journey events and would love to inquire about renting your studio for a similar evening of sound bath and breathwork — about 15–20 people. Could you share rental rates and available dates?",
    modalities:["yoga","pilates","sound_bath","meditation","breathwork","workshop"]
  },
  {
    name: "Way Finder T.R.I.B.E.",
    sub: "Multi-Modality Ashram · Mineola, LI · Inclusive · Neurodiverse-friendly",
    email: "wayfinderfitness@gmail.com",
    phone: "516.491.5051",
    type: "studio", free: false,
    score: 82, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Ashram framing · serves neurodiverse + special-needs community",
    bookingUrl: "https://www.wayfindertribe.com/",
    bookingLabel: "Way Finder TRIBE",
    bars: [
      {label:"Audience fit",pct:86,color:"#7B9E87"},
      {label:"Aesthetic",pct:80,color:"#7B9E87"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:90,color:"#6B9AB8"}
    ],
    tags:[{t:"Inclusive · neurodiverse",c:"tag-plum"},{t:"Yoga + Hot + Pilates + PT",c:"tag-green"},{t:"Mineola LIRR · 10 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended."},
      {dot:"req-recommended",text:"RYT-200 / PMA expected for movement-led classes."},
      {dot:"req-none",text:"\"Art, music, and yoga, all individualized\" — programming structure is built for outside facilitators."}
    ],
    access:[
      {color:"#7B9E87",text:"Mineola LIRR · ~10-min walk · ~35 min from Penn"},
      {color:"#7B9E87",text:"Street parking on Jericho Turnpike"},
      {color:"#7B9E87",text:"Accessibility-focused programming · confirm physical access on inquiry"}
    ],
    outreach:"Hi Way Finder team, I love your inclusive, individualized approach. I'd like to inquire about renting your studio for a gentle wellness session that could welcome neurodiverse participants — sound healing and breathwork for around 15 people. Could you share rates and what's possible?",
    modalities:["yoga","pilates","meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "On Track Wellness Mineola",
    sub: "Boutique Wellness Studio · Mineola, LI · 4–5 per class",
    phone: "516.434.1692",
    type: "studio", free: false,
    score: 80, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Private + semi-private model · workshops listed as core offering",
    bookingUrl: "http://ontrackwellness212.com/",
    bookingLabel: "On Track Wellness",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:78,color:"#C9A84C"},
      {label:"Value",pct:84,color:"#7B9E87"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Workshops are core",c:"tag-gold"},{t:"Reiki + aromatherapy + coaching",c:"tag-plum"},{t:"Across from Mineola LIRR",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for any group programming."},
      {dot:"req-recommended",text:"Cert preferences depend on modality — life-coaching and workshops more flexible than movement."},
      {dot:"req-none",text:"\"Workshops\" is a core service line — explicit precedent for outside facilitators."}
    ],
    access:[
      {color:"#7B9E87",text:"Mineola LIRR · 30 seconds across the street · best LIRR access in scope"},
      {color:"#C9A84C",text:"Paid garage at LIRR"},
      {color:"#C9A84C",text:"2nd floor · confirm elevator with studio"}
    ],
    outreach:"Hi On Track Wellness team, I'd love to inquire about renting your studio for an intimate workshop of 8–12 people — breathwork and meditation. Your location directly across from Mineola LIRR is perfect for an NYC audience. Could you share rates and available dates?",
    modalities:["meditation","breathwork","sound_bath","workshop","yoga"]
  },
  {
    name: "Know Yoga Know Bliss",
    sub: "Boutique Yoga + Meditation · Manhasset, LI",
    phone: "516.548.9642",
    type: "studio", free: false,
    score: 78, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Owner-operated independent studio on Plandome Rd",
    bookingUrl: "http://www.knowyogaknowbliss.com/",
    bookingLabel: "Know Yoga Know Bliss",
    bars: [
      {label:"Audience fit",pct:80,color:"#7B9E87"},
      {label:"Aesthetic",pct:80,color:"#7B9E87"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Owner-operated indie",c:"tag-plum"},{t:"Yoga + meditation",c:"tag-green"},{t:"Manhasset LIRR · 7 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended."},
      {dot:"req-required",text:"RYT-200 expected for yoga-led classes."},
      {dot:"req-recommended",text:"Smaller indie studio · outreach-based rental approach (no public rental page)."}
    ],
    access:[
      {color:"#7B9E87",text:"Manhasset LIRR (Port Washington Branch) · 7-min walk · ~40 min from Penn"},
      {color:"#C9A84C",text:"Street parking on Plandome Rd"},
      {color:"#C9A84C",text:"Confirm ADA on inquiry"}
    ],
    outreach:"Hi Know Yoga Know Bliss team, I'd love to inquire about renting your studio for a small meditation and breathwork session — about 12–15 people. Your community-focused approach is the kind of space I want to bring programming to. Could you share rental rates and availability?",
    modalities:["yoga","meditation","breathwork","workshop"]
  },
  {
    name: "Ki Body & Spirit",
    sub: "Multi-Modality Wellness Community · Great Neck, LI",
    email: "info@kibodyandspirit.com",
    phone: "516.283.2610",
    type: "studio", free: false,
    score: 84, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Yoga · Aerial · Pilates · Dance · Qi Gong · Breathwork programming",
    bookingUrl: "https://www.kibodyandspirit.com/",
    bookingLabel: "Ki Body & Spirit",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:86,color:"#7B9E87"},
      {label:"Value",pct:80,color:"#7B9E87"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Multi-modality community",c:"tag-gold"},{t:"Aerial yoga + Qi Gong",c:"tag-plum"},{t:"Great Neck LIRR · 10 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required for instructor-led events."},
      {dot:"req-required",text:"Cert required by modality — RYT-200 for yoga, aerial certification for aerial, etc."},
      {dot:"req-none",text:"Already runs breathwork, mindfulness, posture, and meditation workshops as discrete programs."}
    ],
    access:[
      {color:"#7B9E87",text:"Great Neck LIRR (Port Washington Branch) · 10-min walk · ~35 min from Penn"},
      {color:"#C9A84C",text:"Street parking · metered"},
      {color:"#C9A84C",text:"Confirm ADA on inquiry"}
    ],
    outreach:"Hi Ki Body & Spirit team, I'd love to inquire about renting one of your studios for a breathwork or sound healing workshop for 15–25 people. Your multi-modality programming makes this an ideal fit. Could you share rates and availability?",
    modalities:["yoga","pilates","aerial","dance","tai_chi","meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "Fit-Pilates",
    sub: "Independent Reformer Studio · Great Neck, LI · Boutique",
    phone: "917.378.3733",
    instagram: "sk_fitpilates",
    type: "studio", free: false,
    score: 79, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Owner Sepi Koren · classical Pilates lineage · non-franchise",
    bookingUrl: "https://www.fit-pilates.com/",
    bookingLabel: "Fit-Pilates",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:82,color:"#7B9E87"},
      {label:"Value",pct:74,color:"#C9A84C"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Independent (non-franchise)",c:"tag-gold"},{t:"Classical Reformer",c:"tag-plum"},{t:"Great Neck LIRR + drive",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"PMA / comprehensive Pilates certification required for Reformer-led programming."},
      {dot:"req-required",text:"Liability insurance required."},
      {dot:"req-recommended",text:"Off-hours rental potential · classical lineage = high bar for visiting teachers."}
    ],
    access:[
      {color:"#7B9E87",text:"Great Neck LIRR · ~5-min drive"},
      {color:"#7B9E87",text:"Street parking on Middle Neck Rd"},
      {color:"#C9A84C",text:"Confirm ADA on inquiry"}
    ],
    outreach:"Hi Sepi / Fit-Pilates team, I'm a Pilates instructor interested in renting your Reformer studio for a small workshop intensive of 6–10 people. I'd love to learn more about your classical lineage and your off-hours rental options. Could you share rates and availability?",
    modalities:["pilates","barre"]
  },
  {
    name: "Bikram Yoga+ Roslyn (Buddha Jams)",
    sub: "Hot Yoga + Wellness · Roslyn, LI · 3,400 sqft · 2 private rooms",
    email: "bikramyogaroslyn@gmail.com",
    phone: "516.200.9200",
    instagram: "bikramyogaroslyn",
    type: "studio", free: false,
    score: 82, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Bikram + Vinyasa + Ashtanga + Inferno Hot Pilates · 2 private wellness rooms",
    bookingUrl: "http://bikramyogaroslyn.com/",
    bookingLabel: "Bikram Yoga+ Roslyn",
    bars: [
      {label:"Audience fit",pct:80,color:"#7B9E87"},
      {label:"Aesthetic",pct:82,color:"#7B9E87"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:84,color:"#6B9AB8"}
    ],
    tags:[{t:"Private wellness rooms",c:"tag-gold"},{t:"Independent (not Bikram corporate)",c:"tag-plum"},{t:"Albertson LIRR + cab",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Yoga certification required for instructor-led classes (Bikram, RYT-200, or modality-appropriate)."},
      {dot:"req-required",text:"Liability insurance required."},
      {dot:"req-none",text:"Two dedicated private rooms make off-hours hourly hire straightforward."}
    ],
    access:[
      {color:"#C9A84C",text:"~12-min cab from Albertson LIRR"},
      {color:"#7B9E87",text:"On-site parking"},
      {color:"#7B9E87",text:"Modern ionic air system · ADA likely · confirm specifics"}
    ],
    outreach:"Hi Buddha Jams / Bikram Yoga+ Roslyn team, I'd love to inquire about renting one of your private wellness rooms for a small heated yoga or hot Pilates session of 12–18 people. Could you share rates, available dates, and what's included?",
    modalities:["yoga","pilates","hiit","meditation","workshop"]
  },
  {
    name: "Fitness Figures",
    sub: "Multi-Practitioner Wellness Center · Williston Park, LI",
    email: "fitnessfigures@yahoo.com",
    phone: "516.294.2998",
    type: "studio", free: false,
    score: 78, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Hosts chiro · massage · acupuncture · yoga · TRX · Zumba",
    bookingUrl: "https://www.fitnessfiguresny.com/",
    bookingLabel: "Fitness Figures",
    bars: [
      {label:"Audience fit",pct:78,color:"#C9A84C"},
      {label:"Aesthetic",pct:74,color:"#C9A84C"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Multi-practitioner model",c:"tag-plum"},{t:"Yoga + TRX + Zumba + chair yoga",c:"tag-green"},{t:"Mineola LIRR + cab",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended — practitioner-tenant model implies insurance norms."},
      {dot:"req-recommended",text:"Cert preferences vary by modality."},
      {dot:"req-none",text:"Existing shared-tenant model · familiar with hosting outside professionals."}
    ],
    access:[
      {color:"#C9A84C",text:"~10-min cab from Mineola LIRR"},
      {color:"#7B9E87",text:"Street parking on Willis Ave"},
      {color:"#C9A84C",text:"Confirm ADA on inquiry"}
    ],
    outreach:"Hi Fitness Figures team, I'd love to inquire about renting space for a small wellness session of 10–15 people. Your shared-practitioner model makes this an easy fit. Could you share rates and what room sizes are available?",
    modalities:["yoga","pilates","strength","hiit","dance","workshop"]
  },
  {
    name: "Body in Balance",
    sub: "Yoga + Reformer + Barre · Williston Park, LI · Boutique",
    email: "info@bodyinbalanceli.com",
    phone: "516.587.1111",
    type: "studio", free: false,
    score: 80, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Long-running indie · runs Yoga Tune-Up workshops",
    bookingUrl: "https://www.bodyinbalanceli.com/",
    bookingLabel: "Body in Balance",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:80,color:"#7B9E87"},
      {label:"Value",pct:78,color:"#C9A84C"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Long-running indie",c:"tag-plum"},{t:"Reformer + Barre + Yoga Tune-Up",c:"tag-green"},{t:"Mineola/Merillon LIRR + cab",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"PMA / comprehensive Pilates cert required for Reformer-led programming."},
      {dot:"req-recommended",text:"Liability insurance recommended."},
      {dot:"req-recommended",text:"Appointment-only culture · rental fit needs to be validated on outreach."}
    ],
    access:[
      {color:"#C9A84C",text:"~10-min cab from Mineola or Merillon Ave LIRR"},
      {color:"#7B9E87",text:"Street parking on Willis Ave"},
      {color:"#C9A84C",text:"Confirm ADA on inquiry"}
    ],
    outreach:"Hi Body in Balance team, I'd love to inquire about renting your studio for a workshop intensive for 10–15 people. Your existing Yoga Tune-Up programming makes this a natural fit. Could you share rates and your visiting-instructor process?",
    modalities:["pilates","barre","yoga","workshop"]
  },
  {
    name: "Hot Yoga Carle Place",
    sub: "Hot Yoga + Pilates Studio · Carle Place, LI · 2 rooms",
    email: "info@hotyogacarleplace.com",
    phone: "516.385.6787",
    type: "studio", free: false,
    score: 81, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Inquire",
    priceNote: "Bikram + Vinyasa + Yin + Inferno Hot Pilates · 50+ classes/wk",
    bookingUrl: "https://www.bikramyogacarleplace.com/",
    bookingLabel: "Hot Yoga Carle Place",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:80,color:"#7B9E87"},
      {label:"Value",pct:82,color:"#7B9E87"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Independent · not Bikram corp",c:"tag-plum"},{t:"2 practice rooms",c:"tag-green"},{t:"Carle Place LIRR + cab",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Yoga certification required (Bikram, RYT-200, or equivalent)."},
      {dot:"req-required",text:"Liability insurance required."},
      {dot:"req-none",text:"Teacher-rotation culture · operationally easy to slot off-peak workshops."}
    ],
    access:[
      {color:"#C9A84C",text:"~5-min cab from Carle Place LIRR · ~40 min from Penn"},
      {color:"#7B9E87",text:"On-site parking"},
      {color:"#7B9E87",text:"Modern fit-out · ADA likely · confirm specifics"}
    ],
    outreach:"Hi Hot Yoga Carle Place team, I'd love to inquire about renting one of your practice rooms for a workshop intensive of 20–30 people. Your teacher-rotation culture suggests this would be an easy fit. Could you share rates and available off-peak windows?",
    modalities:["yoga","pilates","hiit","workshop"]
  },
  {
    name: "Prospect Park Boathouse Lawn",
    sub: "Outdoor Permit Zone · Prospect Park, Brooklyn · Up to 20 guests",
    email: "boathouse@purslane.com",
    phone: "718.701.8344",
    instagram: "prospect_park",
    type: "outdoor", free: true, community: true,
    score: 86, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free permit",
    priceNote: "5-7 day approval · sunrise yoga gem",
    bookingUrl: "https://nycgovparks.org/permits",
    bookingLabel: "Apply for permit",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Free permit",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"Q · Prospect Park",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for sunrise yoga or meditation."},
      {dot:"req-recommended",text:"Liability insurance recommended for groups over 20."},
      {dot:"req-none",text:"NYC Parks permit applications approved in 5-7 days for groups under 20."}
    ],
    access:[
      {color:"#7B9E87",text:"Q at Prospect Park · 10 min walk"},
      {color:"#C9A84C",text:"Street parking · alternate side"},
      {color:"#7B9E87",text:"Paved paths to boathouse"}
    ],
    outreach:"Hi NYC Parks Events Team, I'd like to apply for a permit to host a sunrise yoga session at the Prospect Park Boathouse lawn for approximately 15-20 people. Please let me know the application process and any requirements.",
    modalities:["yoga","meditation","breathwork","tai_chi","workshop"]
  },
  {
    name: "New York Society Library Reading Room",
    sub: "Private Membership Library · UES · Up to 20 guests",
    email: "events@nysoclib.org",
    type: "unique", free: false, community: true,
    score: 86, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "$75/hr",
    priceNote: "Dark wood paneling · 2 week notice required",
    bookingUrl: "mailto:events@nysoclib.org",
    bookingLabel: "Email events team",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:92,color:"#7B9E87"},
      {label:"Accessibility",pct:80,color:"#6B9AB8"}
    ],
    tags:[{t:"Community gem",c:"tag-plum"},{t:"Hidden Manhattan",c:"tag-gold"},{t:"6 · 77th St",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No certification required for meditation, breathwork, or quiet wellness programming."},
      {dot:"req-recommended",text:"Liability insurance recommended."},
      {dot:"req-recommended",text:"Wellness events aligned with community wellbeing get approved regularly."}
    ],
    access:[
      {color:"#7B9E87",text:"6 at 77th St · 5 min walk"},
      {color:"#C47D7D",text:"Paid garages nearby"},
      {color:"#C9A84C",text:"Confirm ADA on inquiry"}
    ],
    outreach:"Hi New York Society Library events team, I'd love to inquire about renting your reading room for an intimate meditation and breathwork session for about 15 people. Your space's silence and architecture would be a perfect setting. Could you share rates and available dates?",
    modalities:["meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "NYPL Schwarzman Building",
    sub: "Beaux-Arts Library · Midtown · Up to 40 guests",
    phone: "917.275.6975",
    instagram: "nyplresearch",
    type: "free", free: true, community: true,
    score: 88, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free",
    priceNote: "Apply 3 weeks ahead · DeWitt Wallace Periodical Room",
    bookingUrl: "https://nypl.org/spacerental",
    bookingLabel: "Apply for space",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:98,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:95,color:"#6B9AB8"}
    ],
    tags:[{t:"Free",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"7 · 5th Ave",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for community wellness programming."},
      {dot:"req-none",text:"No liability insurance required for standard community events."},
      {dot:"req-recommended",text:"3 weeks lead time for community event applications."}
    ],
    access:[
      {color:"#7B9E87",text:"7 at 5th Ave · 1 min walk · B/D/F/M at Bryant Park"},
      {color:"#C9A84C",text:"Paid garages nearby"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi NYPL events team, I'd love to apply for a community event space at the Schwarzman Building for a wellness workshop for approximately 30 people. We focus on contemplative programming aligned with public benefit. Could you share which spaces are available?",
    modalities:["meditation","breathwork","workshop","sound_bath"]
  },
  {
    name: "Brooklyn Bridge Park — Pier 1 Lawn",
    sub: "Outdoor Permit Zone · DUMBO, Brooklyn · Up to 20 guests",
    instagram: "brooklynbridgepark",
    type: "outdoor", free: true, community: true,
    score: 87, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free permit",
    priceNote: "1 week notice · Manhattan skyline backdrop",
    bookingUrl: "https://brooklynbridgepark.org/events",
    bookingLabel: "Permit application",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:98,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Free permit",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"A/C at High St",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for outdoor wellness events under 20."},
      {dot:"req-recommended",text:"Liability insurance recommended for groups over 20."},
      {dot:"req-none",text:"BBP permits are free and fast for small gatherings."}
    ],
    access:[
      {color:"#7B9E87",text:"A/C at High St · 10 min walk · F at York St"},
      {color:"#C9A84C",text:"Paid lots nearby · limited street parking"},
      {color:"#7B9E87",text:"Paved pathways · fully accessible"}
    ],
    outreach:"Hi Brooklyn Bridge Park events team, I'd like to apply for a permit to host a sunset meditation at Pier 1 for approximately 18 people. Could you share the permit process and any requirements?",
    modalities:["yoga","meditation","breathwork","sound_bath","tai_chi"]
  },
  {
    name: "Scandinave Spa NYC — Private Lounge",
    sub: "Recovery Spa · Midtown · Up to 15 guests",
    email: "spa@scandinave.com",
    type: "studio", free: false, community: true,
    score: 80, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "~$200/hr",
    priceNote: "Available outside spa hours · brand-aligned events only",
    bookingUrl: "mailto:spa@scandinave.com",
    bookingLabel: "Email spa",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:62,color:"#C9A84C"},
      {label:"Accessibility",pct:85,color:"#6B9AB8"}
    ],
    tags:[{t:"Community gem",c:"tag-plum"},{t:"Recovery + Breathwork",c:"tag-gold"},{t:"Midtown · multiple lines",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — spa-grade standards."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement-based events."},
      {dot:"req-recommended",text:"Brand alignment matters — Scandinave is selective about visiting practitioners."}
    ],
    access:[
      {color:"#7B9E87",text:"Multiple subway lines · Midtown"},
      {color:"#C47D7D",text:"Paid garage only"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi Scandinave team, I'd love to explore renting your private lounge for a small recovery + breathwork session of 12-15 people. My programming aligns with sauna and cold plunge culture. Could you share rates and visiting-practitioner process?",
    modalities:["breathwork","meditation","sound_bath","workshop"]
  },
  {
    name: "Pioneer Schooner — South Street Seaport",
    sub: "Historic Sailing Schooner · Pier 16 · Up to 25 guests",
    instagram: "southstreetseaport",
    type: "outdoor", free: false, community: true,
    score: 84, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "~$400 / 2 hrs",
    priceNote: "Seasonal May–Oct · sunrise sessions ideal",
    bookingUrl: "https://southstreetseaportmuseum.org",
    bookingLabel: "South Street Seaport Museum",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:80,color:"#7B9E87"},
      {label:"Accessibility",pct:60,color:"#C47D7D"}
    ],
    tags:[{t:"Community gem",c:"tag-plum"},{t:"19th c. schooner",c:"tag-gold"},{t:"Seasonal · J/Z · Fulton",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required for water-based programming."},
      {dot:"req-recommended",text:"Confirm weather contingency — open deck venue."},
      {dot:"req-none",text:"Pioneer welcomes private charter programming May-October."}
    ],
    access:[
      {color:"#7B9E87",text:"J/Z at Fulton St · 5 min walk"},
      {color:"#C47D7D",text:"No on-site parking"},
      {color:"#C47D7D",text:"Step up to board · uneven deck"}
    ],
    outreach:"Hi Pioneer / South Street Seaport Museum team, I'd love to inquire about chartering the Pioneer for a sunrise yoga session of about 15 people. Could you share rates and available morning windows during the season?",
    modalities:["yoga","meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "Queens Botanical Garden Event Lawn",
    sub: "Botanical Garden · Flushing, Queens · Up to 30 guests",
    phone: "718.886.3800",
    instagram: "queensbotanicalgarden",
    type: "outdoor", free: false, community: true,
    score: 84, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Free–$50",
    priceNote: "Free for members · $50 non-members · rose + herb gardens",
    bookingUrl: "https://queensbotanical.org/",
    bookingLabel: "Rentals",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:94,color:"#7B9E87"},
      {label:"Value",pct:96,color:"#7B9E87"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Free–$50",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"7 · Flushing",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for group programming."},
      {dot:"req-none",text:"No instructor certification required for outdoor wellness."},
      {dot:"req-none",text:"Off-the-radar vs Brooklyn Botanic · much easier to book."}
    ],
    access:[
      {color:"#7B9E87",text:"7 at Flushing-Main St · 15 min walk or short bus"},
      {color:"#7B9E87",text:"Free parking on-site"},
      {color:"#7B9E87",text:"Fully accessible paths"}
    ],
    outreach:"Hi Queens Botanical Garden team, I'd love to inquire about renting the event lawn for a small outdoor wellness session of around 25 people. Could you share rates and available dates?",
    modalities:["yoga","tai_chi","meditation","breathwork","workshop"]
  },
  {
    name: "Schomburg Center",
    sub: "Research + Community Center · Harlem · Up to 60 guests",
    phone: "917.275.6975",
    instagram: "schomburgcenter",
    type: "free", free: true, community: true,
    score: 85, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free",
    priceNote: "Community events program · NYPL-affiliated",
    bookingUrl: "https://nypl.org/locations/schomburg",
    bookingLabel: "Schomburg Center",
    bars: [
      {label:"Audience fit",pct:86,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:92,color:"#6B9AB8"}
    ],
    tags:[{t:"Free",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"2/3 · 135th St",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for community wellness programming."},
      {dot:"req-none",text:"No liability insurance required for standard community events."},
      {dot:"req-recommended",text:"Schomburg is welcoming and Harlem brings a distinct creator community."}
    ],
    access:[
      {color:"#7B9E87",text:"2/3 at 135th St · 1 min walk"},
      {color:"#C9A84C",text:"Street parking · metered"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi Schomburg Center community events team, I'd love to apply to host a wellness workshop or community program at your space. We focus on inclusive wellness programming and would love to serve the Harlem community. Could you share the application process?",
    modalities:["meditation","breathwork","workshop","yoga","sound_bath","dance"]
  },
  {
    name: "Angel Orensanz Foundation",
    sub: "160-Year-Old Synagogue + Arts Space · LES · Up to 80 guests",
    email: "foundation@orensanz.org",
    phone: "212.253.0452",
    type: "unique", free: false, community: true,
    score: 87, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "~$500",
    priceNote: "Morning slots before evening events · 50-ft ceilings",
    bookingUrl: "https://www.orensanz.org/",
    bookingLabel: "Orensanz Foundation",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:100,color:"#7B9E87"},
      {label:"Value",pct:88,color:"#7B9E87"},
      {label:"Accessibility",pct:65,color:"#C47D7D"}
    ],
    tags:[{t:"Community gem",c:"tag-gold"},{t:"Cathedral acoustics",c:"tag-plum"},{t:"F/J/M/Z · Delancey",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — historic building, $1M minimum."},
      {dot:"req-recommended",text:"Cert recommended for movement; sound and ceremony reviewed case-by-case."},
      {dot:"req-recommended",text:"Morning slots before evening events are the affordable window."}
    ],
    access:[
      {color:"#7B9E87",text:"F/J/M/Z at Delancey-Essex · 4 min walk"},
      {color:"#C47D7D",text:"Street parking · metered"},
      {color:"#C47D7D",text:"Stairs at entry · limited ADA · confirm specifics"}
    ],
    outreach:"Hi Angel Orensanz Foundation team, I'd love to inquire about renting your main hall for a sound healing ceremony of around 40 people. Your acoustics and architecture would be transformative. Could you share morning availability and rates?",
    modalities:["sound_bath","meditation","breathwork","workshop","ceremony"]
  },
  {
    name: "NYC Parks Comfort Stations",
    sub: "Restored Beaux-Arts Buildings · Multiple Parks · Up to 20 guests",
    phone: "212.360.1319",
    instagram: "nycparks",
    type: "free", free: true, community: true,
    score: 82, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free with permit",
    priceNote: "Tompkins Square + Seward Park · original tile + arches",
    bookingUrl: "https://nycgovparks.org/permits",
    bookingLabel: "Search comfort stations",
    bars: [
      {label:"Audience fit",pct:80,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:78,color:"#C9A84C"}
    ],
    tags:[{t:"Free permit",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"Multiple parks",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No certification required for intimate community events."},
      {dot:"req-recommended",text:"Liability insurance recommended for groups."},
      {dot:"req-none",text:"NYC Parks permit application required · search 'comfort stations'."}
    ],
    access:[
      {color:"#C9A84C",text:"Varies by park location"},
      {color:"#C9A84C",text:"Street parking varies"},
      {color:"#C9A84C",text:"Confirm ADA per location"}
    ],
    outreach:"Hi NYC Parks events team, I'd like to apply for a permit to use a comfort station building (Tompkins Square or Seward Park) for an intimate wellness session of around 15 people. Could you share the application process and availability?",
    modalities:["meditation","breathwork","sound_bath","workshop"]
  },
  {
    name: "Nitehawk Cinema Williamsburg",
    sub: "Cinema · Williamsburg · Up to 25 guests",
    email: "events@nitehawkcinema.com",
    instagram: "nitehawkcinema",
    type: "unique", free: false, community: true,
    score: 84, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "~$150/hr",
    priceNote: "Smaller screening rooms · pre-show window · spatial audio",
    bookingUrl: "https://nitehawkcinema.com/",
    bookingLabel: "Nitehawk rentals",
    bars: [
      {label:"Audience fit",pct:86,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:84,color:"#7B9E87"},
      {label:"Accessibility",pct:82,color:"#6B9AB8"}
    ],
    tags:[{t:"Community gem",c:"tag-plum"},{t:"Spatial audio · darkness",c:"tag-gold"},{t:"L · Bedford Ave",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for group programming."},
      {dot:"req-none",text:"No certification required for guided meditation or sound experiences."},
      {dot:"req-none",text:"Surround sound system makes this ideal for sound journeys."}
    ],
    access:[
      {color:"#7B9E87",text:"L at Bedford Ave · 8 min walk"},
      {color:"#C9A84C",text:"Street parking · alternate side"},
      {color:"#7B9E87",text:"Reclining seats · ADA accessible"}
    ],
    outreach:"Hi Nitehawk Williamsburg team, I'd love to inquire about renting one of your smaller screening rooms for a guided sound journey + meditation experience for around 20 people. Your spatial audio and lighting would be ideal. Could you share rates and morning/afternoon availability?",
    modalities:["sound_bath","meditation","breathwork","workshop"]
  },
  {
    name: "Battery Park City Parks",
    sub: "Waterfront Esplanade · Lower Manhattan · Up to 30 guests",
    email: "events@bpca.ny.gov",
    type: "outdoor", free: true, community: true,
    score: 85, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free permit",
    priceNote: "Harbor + Statue of Liberty views · fast turnaround",
    bookingUrl: "mailto:events@bpca.ny.gov",
    bookingLabel: "BPCA permits",
    bars: [
      {label:"Audience fit",pct:88,color:"#7B9E87"},
      {label:"Aesthetic",pct:94,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:92,color:"#6B9AB8"}
    ],
    tags:[{t:"Free permit",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"R/W/1/4/5 · multiple",c:"tag-sky"}],
    requirements:[
      {dot:"req-none",text:"No instructor certification required for outdoor wellness events."},
      {dot:"req-recommended",text:"Liability insurance recommended for groups over 20."},
      {dot:"req-none",text:"BPCA manages these parks separately from NYC Parks — much faster turnaround."}
    ],
    access:[
      {color:"#7B9E87",text:"R/W at Whitehall · 1 at South Ferry · 4/5 at Bowling Green"},
      {color:"#C9A84C",text:"Paid garages nearby"},
      {color:"#7B9E87",text:"Fully ADA accessible esplanade"}
    ],
    outreach:"Hi BPCA events team, I'd like to apply for a permit to host an outdoor yoga session along the BPC esplanade for around 25 people. Could you share the permit process and available dates?",
    modalities:["yoga","tai_chi","meditation","breathwork","sound_bath"]
  },
  {
    name: "Museum of the Moving Image Courtyard",
    sub: "Museum Courtyard · Astoria, Queens · Up to 35 guests",
    email: "rentals@movingimage.us",
    type: "unique", free: false, community: true,
    score: 83, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "~$100/hr",
    priceNote: "Industrial-chic aesthetic · easy booking",
    bookingUrl: "mailto:rentals@movingimage.us",
    bookingLabel: "MoMI rentals",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:90,color:"#7B9E87"},
      {label:"Value",pct:90,color:"#7B9E87"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Community gem",c:"tag-plum"},{t:"Industrial-chic",c:"tag-gold"},{t:"R/M · Steinway",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required for movement programming."},
      {dot:"req-recommended",text:"Instructor certification recommended for movement events."},
      {dot:"req-none",text:"MoMI is openly bookable and Queens location brings different audience energy."}
    ],
    access:[
      {color:"#7B9E87",text:"R/M at Steinway St · 6 min walk"},
      {color:"#C9A84C",text:"Street parking available"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi MoMI rentals team, I'd love to inquire about renting your courtyard for a movement and flow practice for around 25 people. Could you share rates and available dates?",
    modalities:["yoga","tai_chi","dance","meditation","workshop"]
  },
  {
    name: "Brooklyn Community Foundation Spaces",
    sub: "Community Foundation Venues · DUMBO + others, Brooklyn · Up to 40 guests",
    email: "info@bcf.org",
    type: "free", free: true, community: true,
    score: 80, scoreColor: "#E8F5E8", scoreText: "#1A5A1A",
    price: "Free",
    priceNote: "Apply via community grants program · DUMBO + multiple",
    bookingUrl: "mailto:info@bcf.org",
    bookingLabel: "Email BCF",
    bars: [
      {label:"Audience fit",pct:82,color:"#7B9E87"},
      {label:"Aesthetic",pct:84,color:"#7B9E87"},
      {label:"Value",pct:100,color:"#7B9E87"},
      {label:"Accessibility",pct:85,color:"#6B9AB8"}
    ],
    tags:[{t:"Free",c:"tag-free"},{t:"Community gem",c:"tag-plum"},{t:"Multiple Brooklyn sites",c:"tag-sky"}],
    requirements:[
      {dot:"req-recommended",text:"Liability insurance recommended for group programming."},
      {dot:"req-none",text:"No instructor cert required for community wellness events."},
      {dot:"req-recommended",text:"BCF specifically looks for wellness and movement programming to fill calendar."}
    ],
    access:[
      {color:"#C9A84C",text:"Site-dependent · DUMBO accessible via F at York St"},
      {color:"#7B9E87",text:"Free street parking at most sites"},
      {color:"#C9A84C",text:"Confirm ADA per site"}
    ],
    outreach:"Hi Brooklyn Community Foundation team, I'd love to apply to host a wellness event at one of your spaces — particularly the DUMBO location if available. We focus on community-aligned wellness programming. Could you share the application process?",
    modalities:["yoga","meditation","breathwork","sound_bath","workshop","dance"]
  },
  {
    name: "Core Pilates NYC",
    sub: "Full-Apparatus Pilates Studio · Flatiron · Up to 12 mat / 6 reformer",
    type: "studio", free: false,
    instagram: "corepilatesnyc",
    score: 88, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "$35–$50/hr",
    priceNote: "Published rates · 1 client \$35, duets \$40, trios \$45, 4+ \$50",
    bookingUrl: "https://corepilatesnyc.com/rentals-for-pros/",
    bookingLabel: "Rentals for pros",
    bars: [
      {label:"Audience fit",pct:92,color:"#7B9E87"},
      {label:"Aesthetic",pct:88,color:"#7B9E87"},
      {label:"Value",pct:96,color:"#7B9E87"},
      {label:"Accessibility",pct:85,color:"#6B9AB8"}
    ],
    tags:[{t:"Published rental rates",c:"tag-gold"},{t:"Full Peak Pilates apparatus",c:"tag-plum"},{t:"N/R · 23rd St · 4 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Pilates certification required — open to graduates of Core's teacher training programs and other fully certified Pilates professionals (BASI, STOTT, Romana's, Peak, Balanced Body, etc.)."},
      {dot:"req-required",text:"Valid liability insurance required — copy of COI must be on file before keycard access is issued."},
      {dot:"req-none",text:"24/7 keycard access to an attended building once approved · ideal for off-hours sessions."}
    ],
    access:[
      {color:"#7B9E87",text:"N/R at 23rd St · 4 min walk · or 4/5/6/L at Union Square · 7 min"},
      {color:"#C47D7D",text:"Paid garages only · no on-site parking in Flatiron"},
      {color:"#7B9E87",text:"4th-floor studio · attended building with elevator"}
    ],
    outreach:"Hi Core Pilates NYC team, I'm a certified Pilates instructor interested in renting your studio for a small Reformer workshop or private session series for 4–8 clients. I have current liability insurance and can send a COI on request. Could you share availability and the keycard access process?",
    modalities:["pilates","barre"]
  },
  {
    name: "Othership Williamsburg",
    sub: "Sauna + Ice Bath + Breathwork · Williamsburg · 25 Kent Ave",
    type: "unique", free: false,
    phone: "212.871.4505",
    instagram: "othership",
    score: 87, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "Inquire",
    priceNote: "Private + semi-private sauna and ice bath events available",
    bookingUrl: "https://www.othership.us/contact",
    bookingLabel: "Contact for events",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:70,color:"#C9A84C"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Recovery + breathwork native",c:"tag-plum"},{t:"Sauna + cold plunge",c:"tag-green"},{t:"L · Bedford · 5 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum, premium recovery venue standards."},
      {dot:"req-recommended",text:"Brand alignment matters — Othership curates which visiting facilitators fit their recovery-meets-mindfulness positioning."},
      {dot:"req-none",text:"Othership's existing programming includes breathwork journeys and guided sauna sessions — strong precedent for visiting practitioners."}
    ],
    access:[
      {color:"#7B9E87",text:"L at Bedford Ave · 5 min walk · steps from Domino Park"},
      {color:"#C9A84C",text:"Street parking · alternate side rules"},
      {color:"#7B9E87",text:"Fully ADA accessible · ground floor"}
    ],
    outreach:"Hi Othership Williamsburg team, I'd love to inquire about hosting a private breathwork + sauna event for around 20 people. My practice aligns directly with the recovery-meets-mindfulness positioning you've built. Could you share private event rates, available windows, and your visiting-facilitator process?",
    modalities:["breathwork","meditation","sound_bath","retreat","workshop"]
  },
  {
    name: "Othership Flatiron",
    sub: "Sauna + Ice Bath + Breathwork · Flatiron · 23 W 20th St",
    type: "unique", free: false,
    email: "FLATIRON@othership.us",
    phone: "212.381.1699",
    instagram: "othership",
    score: 87, scoreColor: "#F2EEF8", scoreText: "#4A2A7A",
    price: "Inquire",
    priceNote: "Private + semi-private sauna and ice bath events available",
    bookingUrl: "https://www.othership.us/contact",
    bookingLabel: "Contact for events",
    bars: [
      {label:"Audience fit",pct:90,color:"#7B9E87"},
      {label:"Aesthetic",pct:96,color:"#7B9E87"},
      {label:"Value",pct:70,color:"#C9A84C"},
      {label:"Accessibility",pct:90,color:"#6B9AB8"}
    ],
    tags:[{t:"Recovery + breathwork native",c:"tag-plum"},{t:"Sauna + cold plunge",c:"tag-green"},{t:"R/W · 23rd St · 4 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M minimum, premium recovery venue standards."},
      {dot:"req-recommended",text:"Brand alignment matters — Othership curates which visiting facilitators fit their positioning."},
      {dot:"req-none",text:"Existing breathwork + guided sauna programming — strong precedent for visiting practitioners."}
    ],
    access:[
      {color:"#7B9E87",text:"R/W at 23rd St · 4 min walk · N/W/6 at 23rd · 6 min"},
      {color:"#C47D7D",text:"Paid garages only · no on-site parking in Flatiron"},
      {color:"#7B9E87",text:"Fully ADA accessible"}
    ],
    outreach:"Hi Othership Flatiron team, I'd love to inquire about hosting a private breathwork + sauna event for around 20 people. My practice aligns directly with the recovery-meets-mindfulness positioning you've built. Could you share private event rates, available windows, and your visiting-facilitator process?",
    modalities:["breathwork","meditation","sound_bath","retreat","workshop"]
  },
  {
    name: "Brooklyn Winery",
    sub: "Urban Winery + Event Venue · Williamsburg · 213 N. 8th St",
    type: "unique", free: false,
    phone: "347.763.1506",
    instagram: "brooklynwinery",
    score: 84, scoreColor: "#EDF3EF", scoreText: "#2A5A36",
    price: "Custom packages",
    priceNote: "8,000 sqft · capacity 175 wedding / up to 800 reception",
    bookingUrl: "https://www.bkwinery.com/contact-us/",
    bookingLabel: "Private events",
    bars: [
      {label:"Audience fit",pct:84,color:"#7B9E87"},
      {label:"Aesthetic",pct:92,color:"#7B9E87"},
      {label:"Value",pct:68,color:"#C9A84C"},
      {label:"Accessibility",pct:88,color:"#6B9AB8"}
    ],
    tags:[{t:"Wellness retreats welcome",c:"tag-gold"},{t:"On-site wine production",c:"tag-plum"},{t:"L · Bedford Ave · 6 min",c:"tag-sky"}],
    requirements:[
      {dot:"req-required",text:"Liability insurance required — $1M+ general liability standard for events of this scale."},
      {dot:"req-recommended",text:"Brooklyn Winery's events program explicitly includes 'spa, wellness retreats' as supported event types."},
      {dot:"req-recommended",text:"Three package formats: Dinner Menu, Plated Brunch, Private Wine Tasting · all bundle catering + venue."}
    ],
    access:[
      {color:"#7B9E87",text:"L at Bedford Ave · 6 min walk · G at Nassau Ave · 10 min"},
      {color:"#C9A84C",text:"Street parking · alternate side · paid lots nearby"},
      {color:"#7B9E87",text:"Fully ADA accessible · ground floor venue"}
    ],
    outreach:"Hi Brooklyn Winery events team, I'd love to inquire about hosting a wellness brunch series — yoga + wine tasting + small plates — for around 40–60 people. Your Plated Brunch package and the 'spa + wellness retreats' framing on your site feel like a strong fit. Could you share availability and current package rates?",
    modalities:["yoga","workshop","retreat","dance"]
  }
];
