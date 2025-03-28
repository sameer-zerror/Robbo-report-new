import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import Link from "next/link";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const AnimatedParagraph = ({ specialalign = null, text = "", link = "#" }) => {
  // useEffect(() => {
  //   const elementsToSplit = document.querySelectorAll(".split-lines");
  //   let instancesOfSplit = [];

  //   // Split the text up
  //   function runSplit() {
  //     elementsToSplit.forEach((element, index) => {
  //       instancesOfSplit[index] = new SplitText(element, {
  //         types: "lines, words",
  //         linesClass: "line",
  //         wordsClass: "word",
  //       });
  //     });

  //     document.querySelectorAll(".line").forEach((line) => {
  //       const mask = document.createElement("div");
  //       mask.classList.add("line-mask");
  //       line.appendChild(mask);
  //     });
  //   }

  //   runSplit();

  //   // Update on window resize
  //   let windowWidth = window.innerWidth;
  //   window.addEventListener("resize", () => {
  //     if (windowWidth !== window.innerWidth) {
  //       windowWidth = window.innerWidth;
  //       elementsToSplit.forEach((element, index) => {
  //         instancesOfSplit[index].revert();
  //       });
  //       runSplit();
  //       createAnimation();
  //     }
  //   });

  //   gsap.registerPlugin(ScrollTrigger);

  //   function createAnimation() {
  //     document.querySelectorAll(".line").forEach((line) => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: line,
  //           // trigger element - viewport
  //           start: "top center",
  //           end: "bottom center",
  //           scrub: 1,
  //           markers: true,
  //         },
  //       });
  //       tl.to(line.querySelector(".line-mask"), {
  //         width: "0%",
  //         duration: 8,
  //         opacity: 0,
  //       });
  //     });
  //   }

  //   createAnimation();
  // }, []);

  useGSAP(() => {
    function SplitAnim() {
      const typeSplit = new SplitText(".split-lines", {
        types: "lines, words",
        linesClass: "line",
      });

      // Get all the .line elements generated by SplitText
      const lines = document.querySelectorAll(".line");

      // Loop through each .line and append the .line-mask div
      lines.forEach(function (line) {
        // Add the .line-mask div inside each .line
        line.innerHTML += "<div class='line-mask'></div>";

        // Create the animation for each line
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: line, // 'line' is the current element in the loop
            start: "top center", // When the top of the line reaches 70% of the viewport
            end: "bottom center", // When the bottom of the line reaches the bottom of the viewport
            scrub: 1, // Smooth scrolling animation
            ease: "power2.out", // Easing function for smooth animation
            markers: false, // Optional: set to true to see start/end markers for testing
          },
        });

        // Use querySelector to target the .line-mask inside the current line
        tl.fromTo(
          line.querySelector(".line-mask"),
          {
            width: "100%", // Animating width of .line-mask to 0%
            opacity: 0.5,
          },
          {
            width: "0%", // Animating width of .line-mask to 0%
            duration: 8, // Duration of the animation
            opacity: 1,
          }
        );
      });
    }
    SplitAnim();
  });
  return (
    <div className={`wrapper_base containerWrapper ${specialalign}`}>
      <Link href={link} className="split_box">
        <div className="m_txt split-lines">{text}</div>
      </Link>
    </div>
  );
};

export default AnimatedParagraph;
