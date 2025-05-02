"use client";
import { ReactNode, useState } from "react";
import CurtainWithTrail from "./curtain";

export const LayoutLoader = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [isVisible, setIsVisible] = useState(true);
  setTimeout(() => {
    setIsVisible(false);
  }, 2100);

  return (
    <>
      {isVisible && (
        <div className="w-full h-screen flex justify-center items-center bg-slighly">
          <CurtainWithTrail />
        </div>
      )}
      {!isVisible && children}
    </>
  );
};
