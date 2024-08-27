"use server";

import React from "react";

type T_GapProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

export default async function SE_Gap(props: T_GapProps) {
  return <div className={props.className} style={{ ...props }} />;
}
