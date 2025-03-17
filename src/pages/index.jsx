import AnimatedParagraph from "@/components/home/AnimatedParagraph";
import Hero from "@/components/home/Hero";
import HighlightSection from "@/components/home/HighlightSection";
import CardGridSection from "@/components/sections/CardGridSection";
import SwiperCardSection from "@/components/sections/SwiperCardSection";
import Lenis from "lenis";
import { useEffect } from "react";

const Home = ({ special }) => {
  const gridCardData = [
    {
      id: 1,
      title: "Marine",
      imgUrl:
        "https://robbreport.com/wp-content/uploads/2025/03/Khaled_SailGP.jpg?w=480",
      desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
      alt: "dummy",
      timeStamp: "",
    },
    {
      id: 2,
      title: "Marine",
      imgUrl:
        "https://robbreport.com/wp-content/uploads/2025/03/Johnnie_Walker_Vault.jpg?w=480",
      desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
      alt: "",
      timeStamp: "",
    },
    {
      id: 3,
      title: "Marine",
      imgUrl:
        "https://robbreport.com/wp-content/uploads/2025/03/2.LeadRobinsonR88use.jpg?w=480",
      desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
      alt: "",
      timeStamp: "",
    },
    {
      id: 4,
      title: "Marine",
      imgUrl:
        "https://robbreport.com/wp-content/uploads/2025/03/73380-Agave-Lane_Patio.jpg?w=480",
      desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
      alt: "",
      timeStamp: "",
    },
  ];
  return (
    <>
      <Hero />
      <SwiperCardSection />
      <AnimatedParagraph
        text="Travel isn’t just about personal milestones or showing off experiences. It’s transformative not because it changes who we are, but because it builds connections that have the power to shape the world."
        link="#"
      />
      <CardGridSection title="The Latest" data={gridCardData} />
      <HighlightSection />
      <AnimatedParagraph
        specialalign={"specialalign"}
        text="Travel isn’t just about personal milestones or showing off experiences. It’s transformative not because it changes who we are, but because it builds connections that have the power to shape the world."
        link="#"
      />
      <CardGridSection title="The Latest" data={gridCardData} />
    </>
  );
};

export default Home;
