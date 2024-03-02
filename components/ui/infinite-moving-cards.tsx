"use client";

import { cn } from "@/lib/utils";

import { AnimatePresence, motion } from "framer-motion";

import React, { useEffect, useState } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

export const CarouselCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  
};
