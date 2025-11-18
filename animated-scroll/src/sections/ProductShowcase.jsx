import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import tshirt1 from "../assets/tshirt1.png";
import tshirt2 from "../assets/tshirt2.png";
import tshirt3 from "../assets/tshirt3.png";

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const image = imageRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                scroller: "#scroll-container",
                start: "top top",
                end: "+=250%",
                scrub: true,
                pin: true,
            },
        });

        // State 1 → State 2
        tl.to(image, {
            rotate: 90,
            duration: 1,
            ease: "none",
        });

        tl.to(image, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                image.src = tshirt2;
            },
        });

        tl.to(image, { opacity: 1, duration: 0.4 });

        // State 2 → State 3
        tl.to(image, {
            rotate: 180,
            duration: 1,
            ease: "none",
        });

        tl.to(image, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                image.src = tshirt3;
            },
        });

        tl.to(image, { opacity: 1, duration: 0.4 });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
    }, []);

    return (
        <section
            ref={sectionRef}
            data-scroll-section
            style={{
                height: "100vh",
                background: "#111",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
            }}
        >
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
                Premium Tee Collection
            </h1>

            <img
                ref={imageRef}
                src={tshirt1}
                alt="product"
                style={{
                    width: "400px",
                    height: "auto",
                    transition: "opacity .3s linear",
                }}
            />
        </section>
    );
}
