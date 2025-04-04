"use client";
import { cn } from "../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-12 z-40 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { visible }) : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible ? "0 0 24px rgba(34, 42, 53, 0.06)" : "none",
      width: visible ? "40%" : "100%",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    style={{ minWidth: "800px" }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full px-4 py-2 lg:flex",
      visible && "bg-white/80 dark:bg-neutral-950/80",
      className
    )}>
    {children}
  </motion.div>
);

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <motion.div onMouseLeave={() => setHovered(null)} className={cn("absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex", className)}>
      {items.map((item, idx) => (
        <Link onMouseEnter={() => setHovered(idx)} onClick={onItemClick} key={idx} to={item.link} className="relative px-4 py-2">
          {hovered === idx && <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800" />}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible ? "0 0 24px rgba(34, 42, 53, 0.06)" : "none",
      width: visible ? "90%" : "100%",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    className={cn("relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center px-0 py-2 lg:hidden", visible && "bg-white/80 dark:bg-neutral-950/80", className)}>
    {children}
  </motion.div>
);

export const MobileNavHeader = ({ children, className }) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({ children, className, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={cn("absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start gap-4 rounded-lg bg-white px-4 py-8 shadow-lg dark:bg-neutral-950", className)}>
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }) => (
  isOpen ? <IconX className="text-black dark:text-white" onClick={onClick} /> : <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
);

export const NavbarLogo = () => (
  <Link to="#" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal">
    <img src="https://assets.aceternity.com/logo-dark.png" alt="logo" width={30} height={30} />
    <span className="font-medium text-black dark:text-white">Startup</span>
  </Link>
);

export const NavbarButton = ({ href, as: Tag = "a", children, className, variant = "primary", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md bg-white text-black text-sm font-bold cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";
  const variantStyles = {
    primary: "shadow-lg",
    secondary: "bg-transparent dark:text-white",
    dark: "bg-black text-white shadow-lg",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg",
  };
  return (
    <Tag href={href} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
