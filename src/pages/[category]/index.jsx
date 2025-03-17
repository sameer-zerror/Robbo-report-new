import Hero from "@/components/categories/Hero";
import SubcategoryList from "@/components/categories/SubcategoryList";
import CardGridSection from "@/components/sections/CardGridSection";
import React from "react";
const gridCardData = [
  {
    id: 1,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/Khaled_SailGP.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "dummy",
    timeStamp: "",
  },
  {
    id: 2,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/Johnnie_Walker_Vault.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 3,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/2.LeadRobinsonR88use.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 4,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/73380-Agave-Lane_Patio.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
];
const gridCardData2 = [
  {
    id: 1,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/Khaled_SailGP.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "dummy",
    timeStamp: "",
  },
  {
    id: 2,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/Johnnie_Walker_Vault.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 3,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/2.LeadRobinsonR88use.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 4,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/73380-Agave-Lane_Patio.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 4,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/73380-Agave-Lane_Patio.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 4,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/73380-Agave-Lane_Patio.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 4,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/73380-Agave-Lane_Patio.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
  {
    id: 4,
    title: "Future Tech",
    imgUrl:
      "https://robbreport.com/wp-content/uploads/2025/03/73380-Agave-Lane_Patio.jpg?w=480",
    desc: "DJ Khaled Is Now on the U.S. SailGP Team’s Board of Directors",
    alt: "",
    timeStamp: "",
  },
];
const Category = () => {
  return (
    <div className="categoryWrapper">
      <Hero />
      <SubcategoryList />
      <div id="sections" style={{ paddingTop: 0 }}>
        <section
          data-scroll="true"
          data-scroll-id={1}
          id="section-element-0"
          className="tab_section lazy-image-sections is-inview animated"
        >
          <CardGridSection
            title="Sub-category 1"
            data={gridCardData}
            sectionId="1"
          />
        </section>
        <section
          data-scroll="true"
          data-scroll-id={2}
          id="section-element-1"
          className="tab_section lazy-image-sections is-inview animated"
        >
          <CardGridSection
            title="Sub-category 2"
            data={gridCardData2}
            sectionId="2"
          />
        </section>
        <section
          data-scroll="true"
          data-scroll-id={3}
          id="section-element-2"
          className="tab_section lazy-image-sections is-inview animated"
        >
          <CardGridSection
            title="Sub-category 3"
            data={gridCardData}
            sectionId="3"
          />
        </section>
        <section
          data-scroll="true"
          data-scroll-id={4}
          id="section4"
          className="tab_section lazy-image-sections is-inview animated"
        >
          <CardGridSection
            title="Sub-category 4"
            data={gridCardData}
            sectionId="4"
          />
        </section>
        <section
          data-scroll="true"
          data-scroll-id={5}
          id="section5"
          className="tab_section lazy-image-sections is-inview animated"
        >
          <CardGridSection
            title="Sub-category 5"
            data={gridCardData}
            sectionId="1"
          />
        </section>
        <section
          data-scroll="true"
          data-scroll-id={6}
          id="section6"
          className="tab_section lazy-image-sections is-inview animated"
        >
          <CardGridSection
            title="Sub-category 6"
            data={gridCardData}
            sectionId="1"
          />
        </section>
      </div>
    </div>
  );
};

export default Category;
