"use client";
import React from "react";
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'framer-motion';

export default function TeamLanding() {
    return (
        <div>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Meet the team
                </motion.h1>
            </LampContainer>
        </div>
    );
}
