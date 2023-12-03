"use client";
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function AnimatedBg(props) {

    const color = props?.data?.color;
    const linksColor = props?.data?.linksColor;
    const backgroundColor = props?.data?.backgroundColor;

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        //await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: color,
                    },
                    shape: {
                        type: ["circle", "square", "triangle"],
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 0.5,
                        },
                        animation: {
                            enable: true,
                            speed: 3,
                            sync: false,
                        },
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 10,
                        },
                        animation: {
                            enable: true,
                            speed: 20,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: linksColor,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                            parallax: {
                                enable: true,
                                smooth: 10,
                                force: 60,
                            },
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 0.8,
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            quantity: 4,
                        },
                        remove: {
                            quantity: 2,
                        },
                    },
                },
                background: {
                    color: backgroundColor,
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
            }}
        />
    )
}

export default AnimatedBg