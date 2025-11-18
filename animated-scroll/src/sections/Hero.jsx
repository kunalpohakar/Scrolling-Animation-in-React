import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import tshirt1 from "../assets/tshirt1.png";
import tshirt2 from "../assets/tshirt2.png";
import tshirt3 from "../assets/tshirt3.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom+=1500 top", // Perfect scroll length
                    scrub: 1.2,
                    pin: true,
                }
            });

            tl.to(imgRef.current, {
                opacity: 0,
                scale: 0.8,
                rotate: -8,
                duration: 1,
            })
                .set(imgRef.current, { attr: { src: tshirt2 } })
                .to(imgRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                })

                .to(imgRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    rotate: 8,
                    duration: 1,
                })
                .set(imgRef.current, { attr: { src: tshirt3 } })
                .to(imgRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            style={{
                height: "100vh",
                // Use percentage width so padding doesn't push content outside viewport
                width: "100%",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 6rem",
                boxSizing: "border-box",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "500px" }}>
                <h1 style={{ fontSize: "4rem", fontWeight: "700", color: "#000" }}>
                    Scroll to Explore
                </h1>
                <p style={{ fontSize: "1.3rem", color: "#444" }}>
                    Discover our premium clothing with scroll-driven animations.
                </p>
            </div>

            <img
                ref={imgRef}
                src={tshirt1}
                style={{
                    width: "420px",
                    height: "auto",
                    objectFit: "contain",
                    transition: "all 0.3s ease-out",
                }}
            />
        </section>
    );
}
