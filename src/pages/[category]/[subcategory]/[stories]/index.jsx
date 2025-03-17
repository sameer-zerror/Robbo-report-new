import Hero from "@/components/stories/Hero";
import MainContent from "@/components/stories/MainContent";
import React from "react";

const Stories = () => {
  const heroData = {
    title:
      "Inside the Windsor, the Private Terminal at London’s Heathrow Airport",
    description:
      "Features include eight new VIP suites, BMW chauffeurs, butler service, and food from celebrity chef Jason Atherton.",
    author: "Sunny Kurmi",
    category: "Travel",
    readTime: "8 min read",
    heroImage:
      "https://robbreport.com/wp-content/uploads/2025/02/the-windsor-heathrow.jpg?w=1000",
  };

  const dummyData = {
    heroImage:
      "https://robbreport.com/wp-content/uploads/2025/02/the-windsor.jpg?resize=1024,576",
    paragraph: `Why settle for a seat when you can have a suite? 

London Heathrow’s private terminal, the Windsor, once a well-kept secret among royals and celebrities, has undergone a major renovation unveiling eight lavish lounges and a host of exclusive amenities from British brands. The first phase of the terminal’s three-year refurbishment offers up suites by Oliver Burns Studio, in addition to door-to-plane chauffeur service, a special menu by celebrity chef Jason Atherton, and private security screenings. To get in, you’ll need to be departing or arriving either business or first class on any airline. You’ll also have to pay a one-way entry fee of £3,812 (about $4,795) for up to three guests or £7,624 ($9,648) if you want round-trip access.  . 
    
    Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. 
    
    Praesent et diam eget libero egestas mattis sit amet vitae augue.`,
    sideImage:
      "https://m.media-amazon.com/images/I/91IIaz4W2VL._AC_UF1000,1000_QL80_.jpg",
  };

  return (
    <div>
      <Hero {...heroData} />
      <MainContent {...dummyData} />
    </div>
  );
};

export default Stories;
