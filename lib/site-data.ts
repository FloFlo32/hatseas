/**
 * Exact copy + structure scraped from hatseas.com. Every string here is
 * verbatim source content — pages import from here instead of re-typing it.
 */

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours", href: "/tours" },
  { label: "Rentals", href: "/rentals" },
  { label: "VIP Package", href: "/vip-package" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ's", href: "/faqs" },
] as const;

/** "Available Tours" teaser row on the homepage. */
export const homeTours = [
  {
    name: "Nassau Historic Tour",
    price: "$300 pp",
    image: "/ingested/hatseas/queens-staircase-nassau-bahamas.jpg",
    href: "/tours#nassau-historic-atv-buggy-tour",
  },
  {
    name: "Island Buggy & ATV Tour",
    price: "$350 pp",
    image: "/ingested/hatseas/fort-fincastle-aerial.jpg",
    href: "/tours#island-atv-buggy-tour",
  },
  {
    name: "ATV Adventure Tasty Tour",
    price: "$325 pp",
    image: "/ingested/hatseas/bahamian-cuisine.jpg",
    href: "/tours#atv-adventure-tasty-tour",
  },
  {
    name: "Sunrise Snorkel Tour",
    price: "$200 pp",
    image: "/ingested/hatseas/blue-lagoon-bahamas.jpg",
    href: "/tours",
  },
  {
    name: "Swimming Pigs & ATV Tour",
    price: "$420 pp",
    image: "/ingested/hatseas/pig-island-exuma-bahamas.jpg",
    href: "/tours#swimming-pigs-atv-tour",
  },
  {
    name: "VIP Tour",
    price: "$325 pp",
    image: "/ingested/hatseas/catamaran-tour.jpg",
    href: "/vip-package",
  },
] as const;

/** Full detail tours from the /tours page. */
export const tours = [
  {
    slug: "island-atv-buggy-tour",
    name: "Island ATV & Buggy Tour",
    price: "$350 pp",
    image: "/ingested/hatseas/fort-fincastle-aerial.jpg",
    intro:
      "A thrilling historical adventure of the caves and Clifton Heritage Park that has an on and off road adrenalin packed experience. Choose the vehicle you love for your tour (Jeep Wrangler, ATV OR Polaris Buggy). There is a minimum requirement of 2 persons for Buggy & Jeep Wrangler selections. With three exciting stops on the horizon, all that's left for you to do is select your vehicle, and we're ready to embark on a memorable journey. Glide through Western New Providence with your personal guide",
    stops: [
      {
        title: "Stop 1 - Caves!",
        body: "Our first stop takes us to the captivating caves, where you'll uncover its rich history and perhaps catch a glimpse of a bat or two, or even three if you're feeling adventurous enough to explore inside.",
      },
      {
        title: "Stop 2 - Johnstone Beach",
        body: "Johnstone Beach is known for its iconic role in the first James Bond movie. It's a genuine experience where you can take a refreshing dip, stroll along the shore, or simply soak in the surroundings.",
      },
      {
        title: "Stop 3 - Clifton Heritage Park",
        body: "Our final destination is Clifton Heritage Park, where you'll have the opportunity to immerse yourself in the local culture and history.",
      },
      {
        title: "Bahamian Delights!",
        body: "We'll conclude our adventure at a charming local restaurant, where you'll indulge in a delightful sampling of authentic Bahamian dishes before we make our way back.",
      },
    ],
    details: [
      { label: "Tour Times", value: "9:30AM or 1:00PM" },
      { label: "Tour Duration", value: "3.5 hours" },
      { label: "Number of Stops", value: "4 stops" },
    ],
    inclusions: ["Bottled water", "Helmet", "Lunch with a complimentary soft drink", "Cover charges at various locations"],
    note: "Don't forget the sunscreen while enjoying exhilarating ATV tours in the Bahamas or exploring the rich history on historical tours in Nassau. Whether you're on Nassau tours or soaking up the sun, protecting your skin is essential!",
  },
  {
    slug: "nassau-historic-atv-buggy-tour",
    name: "Nassau Historic ATV & Buggy Tour",
    price: "$300 pp",
    image: "/ingested/hatseas/queens-staircase-nassau-bahamas.jpg",
    intro:
      "Experience an exhilarating Bahamian adventure with our 6 epic stops. Enjoy a historical 3-hour tour of downtown Nassau, exploring the rich culture and history on your choice of vehicle, whether it's an ATV or buggy. Join our Nassau tours or opt for the exciting ATV tours Bahamas for a memorable journey.",
    stops: [
      {
        title: "Stop 1 - Famous Rum Cake Factory",
        body: "Learn About the history behind this native dessert that packs a punch, while indulging in a flavorful assortment of the oh so delicious and moist rum cake.",
      },
      {
        title: "Stop 2 - Historic Fort Montague",
        body: "Fort Montague, being the oldest and smallest fort built to protect the eastern end of Nassau, stands strong along the East End waterfront. Visitors can explore this beautiful monument through historical tours in Nassau, or enjoy ATV tours in the Bahamas that offer breathtaking views of the area.",
      },
      {
        title: "Stop 3 - The Queen's Staircase",
        body: "The Queen's Staircase, hewn out of solid limestone rock by slaves between 1793 and 1794, is also known as the 66 Steps and provides a direct route to Fort Fincastle. Strategically placed atop Bennet's Hill to protect historic Nassau Town and its harbour, this remarkable site is included in many historical tours Nassau offers. It presents an excellent photo opportunity overlooking downtown Nassau and features its own mini straw market where you can purchase a native souvenir or two, making it a great addition to any Nassau tours or ATV tours Bahamas itinerary.",
      },
      {
        title: "Stop 4 - John Watling's Distillery",
        body: "Indulge in a small sample of “the cocktail of the day” while we explore the museum-like tavern of this historic estate, where Bahamians hand-crafted John Watling's small-batch rums. This experience is a perfect addition to your historical tours in Nassau, and don't forget to consider our exciting ATV tours in the Bahamas for a complete adventure.",
      },
      {
        title: "Stop 5 - Tasty Teas!",
        body: "Discover for yourself the intricacies and exotic blends of several iced tea versions as you learn about the rich history and culture of the colorful Bahamian bush teas and medicines. This part of the tour allows you to experience these delicious teas and their significance in Bahamian heritage.",
      },
    ],
    details: [
      { label: "Starts", value: "Downtown Location" },
      { label: "Times", value: "9:30am or 1:00pm" },
      { label: "Duration", value: "3 hours" },
    ],
    inclusions: ["Bottled water & helmets", "Price is per person, adult (ask for a child discount)"],
    note: "Experience the thrill of ATV tours in the Bahamas, where you can explore the vibrant history on our historical tours in Nassau. Discover the beauty of Nassau tours as you embark on this unforgettable adventure!",
  },
  {
    slug: "atv-adventure-tasty-tour",
    name: "ATV Adventure Tasty Tour",
    price: "$325 pp",
    image: "/ingested/hatseas/bahamian-cuisine.jpg",
    intro:
      "Are you a Foodie? Do you enjoy diving into the flavors of each destination? Want to taste the mouth-watering flavors of the Bahamas? Restaurant hop and sample delicious Bahamian cooking! Join us on an exhilarating 3.5-hour tour that captures the true essence of “the Bahamian thing”. With 4 thrilling stops, choose between an ATV or buggy, and enjoy the guidance of your very own tour guide as we embark on an island cruise along the stunning shores of Nassau.",
    stops: [
      {
        title: "Stop 1 - The New Duff",
        body: "With our first stop “the new duff”, where every Bahamian knows that guava duff is synonymous with the word dessert. Here, you'll discover the history behind this beloved native dish while savoring a warm, sweet sample paired with a refreshing sample of their homemade lemonades.",
      },
      {
        title: "Stop 2 - Fort Charlotte",
        body: "Next, we head to “fort charlotte”, built in 1788 by lord Dunmore, the fort was named after the wife of king George iii, queen Saharia Charlotte, being the biggest fort in new providence this historic monument that sits atop a hill overlooking the far west end harbor commanding an impressive view of paradise island and the Nassau harbor; soak up it's pottant history.",
      },
      {
        title: "Next, Lets Ride!",
        body: "Before moving on to our final stop, cruising along the short off-road trail opposite the western esplanade.",
      },
      {
        title: "Stop 3 - Fish Fry!",
        body: "Experience true Bahamian culture at its finest as we ride through the colorful village to the rustic & authentic “gone fishn' restaurant” to enjoy a taste of the Bahamas' secret aphrodisiac - “the conch”. While watching the cracking of the conch & preparation of our popular native delight the conch salad, all while being mesmerized by the stunning views of our “western esplanade beach” & the Nassau harbor lighthouse; a spot famously featured in the iconic James bond film Thunderball.",
      },
    ],
    details: [
      { label: "Starts", value: "Cable Beach Location" },
      { label: "Tour Times", value: "9:30AM or 1:00PM" },
      { label: "Tour Duration", value: "3.5 hours" },
      { label: "Number of Stops", value: "4 stops" },
    ],
    inclusions: ["Bottled water", "Helmet", "Lunch with a complimentary soft drink", "Choice of vehicle"],
    note: "Upon arrival, welcomed with a chilled coconut you can go for a swim, layout a towel to soak up the sun, or stroll along the pristine white sand beach before we wrap up the day with a delicious lite lunch featuring a selection of native bites and a refreshing beverage.",
  },
  {
    slug: "swimming-pigs-atv-tour",
    name: "Swimming Pigs & ATV Tour",
    price: "$420 pp",
    image: "/ingested/hatseas/pig-island-exuma-bahamas.jpg",
    intro:
      "Amplify your day of relaxation at the picturesque beach side. Sway in the tropical breezes in our intoxicating hammock garden, feed the pigs as they swim or enjoy any of all of our seascape activities which include paddle boarding, pedal boarding or kayaking. Its a day you wont soon forget with a little something for everyone.",
    stops: [
      {
        title: "Stop 1 - Rum Cake Factory",
        body: "Learn About the history behind this native dessert that packs a punch, while indulging in a flavorful assortment of the oh so delicious and moist run cake.",
      },
      {
        title: "Stop 2 - Historic Fort Montague",
        body: "Fort Montague, being the oldest and smallest fort built to protect the eastern end of Nassau, stands strong along the East End waterfront. Visitors can explore this beautiful monument through historical tours in Nassau, or enjoy ATV tours in the Bahamas that offer breathtaking views of the area.",
      },
      {
        title: "Stop 3 - Queen's Staircase",
        body: "The Queen's Staircase, hewn out of solid limestone rock by slaves between 1793 and 1794, is also known as the 66 Steps and provides a direct route to Fort Fincastle. Strategically placed atop Bennet's Hill to protect historic Nassau Town and its harbor, this remarkable site is included in many historical tours Nassau offers. It presents an excellent photo opportunity overlooking downtown Nassau and features its own mini straw market where you can purchase a native souvenir or two.",
      },
      {
        title: "Cruise!",
        body: "From here, we are on a quick scenic ride through downtown Nassau, the prime location for shopping or dining. View the historic architecture and drive through the heart of parliament and Rawsons square before our return to the starting point",
      },
      {
        title: "Ready for Pigs?",
        body: "The fun continues with a short 7 minute shuttle ride over to the Paradise Island Carnival Marina for a 3 hour private island beach day away and pigs interaction excursion. Kayaking, paddleboarding, and best of all, pet and feed the world famous swimming pigs followed by a delicious lunch and soft drink before we hop aboard the boat to head back to the dock.",
      },
    ],
    details: [
      { label: "Tour Time Daily", value: "10:30AM" },
      { label: "Pick Up - Cable Beach Guests", value: "9:30am - 9:45am" },
      { label: "Pick Up - Paradise Island Guests", value: "9:45am - 10:00am" },
      { label: "Tour Duration", value: "5.5 hours" },
      { label: "Number of Stops", value: "6 stops" },
      { label: "Children", value: "Qualifies as 12 & under" },
    ],
    inclusions: ["Bottled water", "Helmet", "Lunch", "Complimentary beverage"],
    note: "Those guests that miss the above designated pick up times will be charged an additional $10.00 for pick up if we are able to accommodate you before the tour leaves.",
    whatToBring: [
      "Comfortable attire & footwear (for the ATV tour)",
      "Swim wear, change of clothes",
      "Sun glasses",
      "A towel",
      "Sun block",
      "Cash, VISA or Mastercard for purchasing souvenirs & extra drinks. A few stops will only accept cash.",
    ],
  },
] as const;

export const rentalCategories = [
  {
    slug: "jeep-wrangler",
    name: "Jeep Wrangler",
    image: "/ingested/hatseas/rental-jeep-wrangler.jpg",
    blurb:
      "Looking for a summer adventure in the Bahamas, but want the option to turn on the air conditioning when it gets too warm? Consider a Jeep Wrangler rental for your journey! These renowned road vehicles can elevate your fun, whether you're exploring local attractions or heading to the beach.",
    pricing: [
      { duration: "24 Hours", price: "$350" },
      { duration: "8 Hours", price: "$325" },
      { duration: "4 Hours", price: "$300" },
    ],
  },
  {
    slug: "atv",
    name: "ATV",
    image: "/ingested/hatseas/rental-atv.jpg",
    blurb:
      "Hands down, the world's most thrilling street ride awaits you in the Bahamas. Off-road trails have never felt so heavenly. You can take the thrill alone or with a passenger, and when you return, you'll have great memories to last a lifetime.",
    pricing: [
      { duration: "24 Hours", price: "$325" },
      { duration: "8 Hours", price: "$300" },
      { duration: "6 Hours", price: "$275" },
      { duration: "4 Hours", price: "$250" },
      { duration: "2 Hours", price: "$200" },
      { duration: "1 Hour", price: "$175" },
    ],
  },
  {
    slug: "scooter",
    name: "Scooter",
    image: "/ingested/hatseas/rental-scooter.jpg",
    blurb:
      "No traffic aboard this bad boy! With a scooter rental in Nassau, you can rip and skip through traffic and roll right up to the door of your favorite spot. There's no better, more convenient way to explore.",
    pricing: [
      { duration: "24 Hours", price: "$230" },
      { duration: "8 Hours", price: "$200" },
      { duration: "6 Hours", price: "$175" },
      { duration: "4 Hours", price: "$155" },
      { duration: "2 Hours", price: "$130" },
      { duration: "1 Hour", price: "$95" },
    ],
  },
  {
    slug: "buggy",
    name: "Buggy",
    image: "/ingested/hatseas/rental-buggy.jpg",
    blurb:
      "Make it a family day out or self-explore with up to 4 of your best mates using a buggy rental in the Bahamas. This rental option gives you endless possibilities without a guide. Equipped with a map, enjoy the beautiful weather and feel the tropical breeze.",
    pricing: [
      { duration: "24 Hours", price: "$400" },
      { duration: "8 Hours", price: "$350" },
      { duration: "6 Hours", price: "$325" },
      { duration: "4 Hours", price: "$300" },
    ],
  },
  {
    slug: "e-bike",
    name: "E-Bike",
    image: "/ingested/hatseas/rental-ebike.jpg",
    blurb:
      "Experience the freedom and excitement of exploring the city with our premium e-bike rental service! Our electric bicycles are designed to make your ride smoother, faster, and more enjoyable, with a powerful motor and long-lasting battery for effortless cruising.",
    pricing: [
      { duration: "24 Hours", price: "$135" },
      { duration: "8 Hours", price: "$125" },
      { duration: "6 Hours", price: "$115" },
      { duration: "4 Hours", price: "$105" },
      { duration: "2 Hours", price: "$95" },
      { duration: "1 Hour", price: "$80" },
    ],
  },
  {
    slug: "golf-cart",
    name: "Golf Cart",
    image: "/ingested/hatseas/rental-golf-cart.jpg",
    blurb:
      "Cruise the island in the most island-worthy vehicle ever: a Street Legal Golf Cart! Take in the many Bahamian sights and experiences as you move carefree about the streets of New Providence, and pull up to your choice destinations effortlessly.",
    pricing: [{ duration: "4 Hours", price: "$240" }],
  },
] as const;

export const rentalNote =
  "All drivers must be 25 or older with a valid license to operate vehicles such as ATV rentals in the Bahamas, E-Bike rentals, Golf Cart rentals, Jeep Wrangler rentals, and Scooter rentals in Nassau.";

export const vipPackage = {
  title: "Snorkeling & Swimming with Pigs",
  price: "$425 pp",
  intro:
    "Embark on the ultimate VIP adventure with our “VIP Package – Snorkeling & Swimming Pigs”, where every moment is a thrilling escapade into the beauty of the sea. Brace yourself for a 4-hour catamaran journey to Rose Island, where excitement, exploration, and exquisite flavors converge for an unforgettable experience.",
  sections: [
    {
      title: "Dive into the Depths",
      body: "Set sail on our luxurious catamaran, your gateway to an aquatic paradise. Enjoy a leisurely cruise with the wind in your hair and the sun kissing your skin. As you step aboard, savor the taste of the tropics with complimentary Tropical Rum & Fruit Punch, available exclusively on the vessel to kickstart your VIP adventure.",
    },
    {
      title: "Reef Snorkeling Extravaganza",
      body: "Hold your breath as we make thrilling stops along the way for reef snorkeling. Immerse yourself in the vibrant underwater world, surrounded by enchanting marine life in its natural habitat. Witness the dance of colorful fish and the mesmerizing beauty of the coral reefs, an experience that will leave you in awe.",
    },
    {
      title: "Island Oasis of Fun",
      body: "Arriving at Rose Island, your playground awaits. Access all beach amenities and indulge in an array of activities, including flotation devices, sea swings, and beach games. The possibilities are endless as you bask in the sun and embrace the carefree island vibes.",
    },
    {
      title: "Swim with the Stars – The Famous Swimming Pigs",
      body: "But the excitement doesn't end there! Brace yourself for an encounter with the legendary swimming pigs. These adorable creatures make a splash, creating a unique and Instagram-worthy experience. Get ready to capture unforgettable moments as you frolic with these charming aquatic celebrities.",
    },
  ],
  menuIntro:
    "Enjoy a delicious Bahamian lunch. Please note the menu below. If you have any dietary restrictions, kindly inform us upon booking, and we will accommodate accordingly. Menu offerings are subject to change without notice.",
  menu: [
    "Peas N' Rice",
    "Baked Macaroni",
    "Green Salad",
    "Sweet Chili Wings",
    "Buttermilk Fried Wings",
    "Honey BBQ Ribs",
    "or Lemon Pepper Fish Fingers",
  ],
  menuNote: "Kids under 4 are FREE. No changes can be made to the menu.",
} as const;

export const aboutContent = {
  banner: "564-BAHAMAS",
  story: [
    "HatSeas was born from a deep love for the Bahamas, a place where natural beauty, culture, and hospitality come together to create unforgettable moments. Inspired by the turquoise waters, pristine beaches, vibrant nightlife, and the warmth of the Bahamian people, HatSeas was founded to share the very best of the islands with the world.",
    "We believe luxury tourism is not just about where you go, but how you experience it. At HatSeas, every journey is curated to capture the soul of the Bahamas, whether that's an exclusive culinary tour, a private island escape, or an evening immersed in local music and culture.",
  ],
  vision:
    "To redefine Caribbean luxury tourism by offering authentic, world-class experiences that honor the spirit of the Bahamas while exceeding the expectations of every traveler.",
  mission:
    "To provide discerning travelers with personalized, immersive, and luxurious experiences that highlight the best of Bahamian culture, landscapes, cuisine, and lifestyle, while giving thanks to the Bahamian people for sharing their islands with us.",
  values: [
    { name: "Authenticity", body: "Every experience reflects the genuine culture and traditions of the Bahamas." },
    { name: "Exclusivity", body: "We curate one-of-a-kind adventures tailored to each guest's desires." },
    { name: "Sustainability", body: "We respect and protect the islands' natural beauty for future generations." },
    { name: "Gratitude", body: "We always honor and thank Bahamians for their generosity in sharing their paradise." },
    { name: "Excellence", body: "From the smallest detail to the grandest adventure, we deliver nothing but the best." },
  ],
  promise:
    "With HatSeas, you don't just visit the Bahamas, you live it. Every moment is crafted with care, passion, and respect for the islands and their people. From breathtaking landscapes to hidden cultural gems, we ensure your journey is more than a trip, it's a story worth telling.",
};

export const whyChooseBahamas = {
  title: "Why Choose Bahamas",
  intro:
    "Nassau, the capital of The Bahamas, offers a rare combination of accessibility, refinement, and authentic island character that appeals equally to first-time visitors and seasoned return guests. Its finest aspects are best understood across several dimensions: natural beauty, culture and history, hospitality, and breadth of experiences.",
  sections: [
    {
      title: "Natural Beauty and Setting",
      body: "Nassau sits on New Providence Island, framed by calm, turquoise waters and soft white-sand beaches that rank among the most photogenic in the Caribbean. Cable Beach is polished and expansive, ideal for luxury resorts and sunset views, while nearby Paradise Island delivers postcard scenery with a more energetic atmosphere. The water clarity is exceptional, making snorkeling, diving, and boating consistently rewarding. Even repeat visitors often remark that the color of the sea never loses its impact.",
      image: "/ingested/hatseas/blue-lagoon-bahamas.jpg",
    },
    {
      title: "Refined Yet Approachable Luxury",
      body: "One of Nassau's strongest attributes is its range of accommodations and experiences. World-class resorts such as Atlantis, Baha Mar, and boutique properties cater to travelers seeking upscale amenities, fine dining, golf, and spas. At the same time, Nassau never feels exclusive to the point of being unwelcoming; the island balances luxury with a relaxed, human scale that allows visitors to feel comfortable exploring beyond resort grounds.",
    },
    {
      title: "Cultural Depth and History",
      body: "Unlike many purely resort-driven destinations, Nassau has a tangible sense of place. Historic landmarks such as the Queen's Staircase, Fort Charlotte, Fort Fincastle, and Government House reflect centuries of British colonial history layered with Afro-Bahamian heritage. Walking through downtown Nassau reveals colorful architecture, straw markets, and local shops that provide insight into daily island life. For first-time visitors, this adds substance; for repeat travelers, it creates reasons to keep exploring.",
      image: "/ingested/hatseas/parliament-square-nassau-bahamas.jpg",
    },
    {
      title: "Cuisine and Local Flavor",
      body: "Nassau's food scene ranges from elegant waterfront restaurants to beloved local spots serving conch salad, cracked conch, rock lobster, and fresh snapper. Bahamian cuisine is bold, fresh, and unfussy, and the island's chefs increasingly blend traditional flavors with modern techniques. A repeat visitor's advantage is discovering where locals actually eat, often the most memorable meals of any trip.",
      image: "/ingested/hatseas/bahamian-cuisine.jpg",
    },
    {
      title: "Ease, Safety, and Family-Friendly Appeal",
      body: "Few destinations offer so much variety within such a compact and well-organized area. Nassau is easy to navigate, well-connected by air, and widely regarded as a safe destination, particularly within resort areas, beaches, and popular attractions where security and hospitality are prioritized. Families are especially well accommodated, with a welcoming culture, structured excursions, and a wide range of activities designed for children and adults alike, allowing parents to relax while everyone feels comfortable and well cared for.",
    },
    {
      title: "Why It Endures for Repeat Visitors",
      body: "What ultimately distinguishes Nassau is its versatility. First-time visitors are impressed by the beauty, convenience, and polish. Repeat visitors return because the island reveals itself in layers, new beaches, deeper cultural connections, favorite restaurants, and relationships with the people who give the island its warmth. In short, Nassau's finest quality is balance: natural splendor without isolation, luxury without pretension, and culture without compromise.",
    },
  ],
};

export const faqs = [
  {
    q: "Where can I find HatSeas's best travel deals?",
    a: "You can find our best travel deals by visiting our website's deals section. We regularly update this section with our latest promotions and discounts.",
  },
  {
    q: "Can HatSeas help me plan a customized trip?",
    a: "Yes, Hatseas offers personalized trip planning services to help you create a unique travel experience that fits your interests and budget. Contact our customer service team to learn more.",
  },
  {
    q: "What documents do I need to travel internationally with HatSeas?",
    a: "The required documents vary depending on your destination and citizenship. However, most international travel requires a valid passport and potentially a visa. Please consult our website or contact customer service for more information.",
  },
  {
    q: "What should I pack for Nassau?",
    a: "Lightweight clothing, swimwear, sunscreen, sunglasses, comfortable walking shoes, and a light jacket for evenings are recommended.",
  },
  {
    q: "Is tipping customary in Nassau?",
    a: "Yes. A 15% gratuity is often included at resorts and restaurants. If not included, tipping 15–20% for good service is customary.",
  },
  {
    q: "How do I get around Nassau?",
    a: "Let us help! Transportation options include taxis, ride services, rental cars, local buses (jitneys), and resort shuttles. Taxis are widely used and easy to find.",
  },
  {
    q: "What are the requirements for driving?",
    a: "The minimum age requirement for drivers is determined by the guidelines provided by our insurance provider, specific to the type of vehicle being operated. In any case, you must have a valid drivers license.",
  },
  {
    q: "How safe are these tours?",
    a: "Each tour is led by two guides, a front lead and rear escort. Prior to departure, guests receive a safety tutorial and vehicle orientation, including a short test drive in our designated safety testing zones. This onsite briefing, delivered verbally by the tour guide, includes demonstrations of all required hand signals that guests must watch for, along with clear instructions on how to safely operate the vehicle during street driving. All guides carry emergency Class A First-Aid kits, as well as serviced and certified fire extinguishers. Helmets are mandatory for all ATV drivers.",
  },
  {
    q: "Can you accommodate a large group?",
    a: "We can accommodate up to 50 guests per tour, with morning and afternoon tours allowing for a total of 100 guests per day. Early check-in is required. Large group tours may extend the total tour duration by approximately 1 to 1.5 hours to accommodate operational logistics. We can fully customize your experience.",
  },
  {
    q: "Do you offer private tours?",
    a: "Private tours require a minimum of 10 participants. If a private tour is requested for fewer than 10 participants, an additional $30.00 per person will apply.",
  },
] as const;

export const contactContent = {
  heading: "We'd love to hear from you!",
  intro:
    "Have a question about our Bahamas travel services? If you're curious whether your specific vacation is one we can assist with, please contact us, we'd love to hear from you and help you get in touch!",
  hours: "Open today: 09:00 am – 05:00 pm",
  addressLine: "Hatseas Bahamas, Bahamas, New Providence, Nassau",
};
