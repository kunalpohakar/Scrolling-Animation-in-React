import React, { useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollContainer({ children }) {
    const containerRef = useRef(null);
    const loco = useRef(null);

    useLayoutEffect(() => {
        const el = containerRef.current;

        loco.current = new LocomotiveScroll({
            el,
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
        });

        loco.current.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(el, {
            scrollTop(value) {
                return arguments.length
                    ? loco.current.scrollTo(value, { duration: 0, disableLerp: true })
                    : loco.current.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: el.style.transform ? "transform" : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => loco.current.update());
        ScrollTrigger.refresh();

        return () => {
            loco.current.destroy();
            ScrollTrigger.removeEventListener("refresh", () => { });
        };
    }, []);

    return (
        <div id="scroll-container" data-scroll-container ref={containerRef}>
            {children}
        </div>
    );
}
