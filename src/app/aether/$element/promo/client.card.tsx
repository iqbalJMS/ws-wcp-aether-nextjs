"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { T_CardProps } from "@/app/aether/$element/types/promo";
import CE_Image from "./client.image";

export default function CE_Card(props: T_CardProps) {
  const { className, content, idx } = props;
  const { img, title, date, description, href } = content ?? {};

  return (
    <motion.figure
      data-index={idx}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={["p-5 shadow-md m-2 space-y-7", className].join(" ")}
    >
      <Link href={href ?? ""} draggable={false} className="space-y-7">
        <CE_Image
          src={img}
          alt={title}
          className="object-cover"
          wrapper={{ className: "w-full aspect-square h-auto" }}
          draggable={false}
        />
        <h3 className="h-[2lh] line-clamp-2 text-red-700 font-semibold">
          {title}
        </h3>
        <div className="space-y-[0.875rem]">
          <p className="line-clamp-1 text-sm">{date}</p>
          <p className="h-[2lh] line-clamp-2 text-xs text-gray-600">
            {description}
          </p>
        </div>
      </Link>
    </motion.figure>
  );
}
