import React, { useState } from "react";
import { Button } from "~/components/ui/Button/Button";
import { Link } from "@remix-run/react";
import { Drawer, DrawerContent } from "~/components/ui/drawer";
import { configNavigationItems } from "~/libs/navbar.utils";
import { Logo } from "~/assets";
import { cn } from "app/libs/utils";

type SideNavigation = {
  children: React.ReactNode;
};

function SideNavigation({ children }: SideNavigation) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Drawer open={!isExpanded}>
        <DrawerContent className="w-[120px] bg-blue-5 py-10 flex-col items-center gap-8">
          <div>
            <Logo />
          </div>
          <div>
            {configNavigationItems.map((navItem) => (
              <Link
                to={navItem.path}
                className="flex items-center rounded-sm text-light-grey-2 hover:text-white hover:bg-blue-4 w-[56px] transition-colors"
              >
                <navItem.icon />
              </Link>
            ))}
          </div>
          <Button
            className="absolute -right-4 top-12 w-8 h-8 p-0 bg-white rounded-full hover:bg-white"
            onClick={() => setIsExpanded((prev) => !prev)}
            variant={"default"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.33337 2.66663L10.6667 7.99996L5.33337 13.3333"
                stroke="#09090B"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </DrawerContent>
      </Drawer>
      <Drawer open={isExpanded}>
        <DrawerContent className="w-[248px] bg-blue-5 py-10 flex-col items-center gap-8">
          <div>
            <Logo />
          </div>
          <div>
            {configNavigationItems.map((navItem) => (
              <Link
                to={navItem.path}
                className="flex items-center text-light-grey-2 hover:text-white hover:bg-blue-4 w-[200px] transition-colors capitalize"
              >
                <navItem.icon />
                <div>{navItem.title}</div>
              </Link>
            ))}
          </div>
          <Button
            className="absolute -right-4 top-12 w-8 h-8 p-0 bg-white rounded-full hover:bg-white"
            onClick={() => setIsExpanded((prev) => !prev)}
            variant={"default"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_32_1442)">
                <path
                  d="M9.99996 2.66663L4.66663 7.99996L9.99996 13.3333"
                  stroke="#09090B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_1442">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </DrawerContent>
      </Drawer>
      <div
        className={cn(
          "fixed px-8 py-4 transition-all left-0 w-full",
          !isExpanded
            ? "left-[120px] h-full w-[calc(100%_-_120px)]"
            : "left-[248px] h-full w-[calc(100%_-_248px)]"
        )}
      >
        {children}
      </div>
    </>
  );
}

export default SideNavigation;
