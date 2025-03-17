import Hero from "@/components/stories/Hero";
import MainContent from "@/components/stories/MainContent";
import React from "react";

const Stories = () => {
  const heroData = {
    title:
      "Lorem ipsum dolor sit amet elit. Optio ab mollitia illo in repellendus",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    author: "Sunny Kurmi",
    category: "Travel",
    readTime: "8 min read",
    heroImage:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const dummyData = {
    heroImage:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. 
    \n\n
    Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. 
    \n\n
    Praesent et diam eget libero egestas mattis sit amet vitae augue.`,
    sideImage:
      "https://thenodmag.com/_next/image?url=https%3A%2F%2Fassets.thenodmag.com%2Fwebsite-assets%2Fnike_247_apparel_collection_The_Nod_Mag_62be401e72-tjhrxeawktftmfv-3x4.jpg&w=2048&q=95",
  };

  return (
    <div>
      <Hero {...heroData} />
      <MainContent {...dummyData} />
    </div>
  );
};

export default Stories;
