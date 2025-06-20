import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import navicon from "../assets/navlogo.png";

import { Button } from "./ui/button";
import ModalForm from "../components/ModalForm";




interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#howItWorks",
    label: "Fonctionnement",
  },
  {
    href: "#testimonials",
    label: "Avis",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
      const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-broken-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
                        <img
                          src={navicon}
                          alt="preference-logo"
                          className="max-w-[180px]"
                        />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
               <img
                          src={navicon}
                          alt="preference-logo"
                          className="max-w-[180px]"
                        />
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
            <Button 
            className="w-full md:mr-4 md:w-auto" 
            onClick={() => setModalOpen(true)}
            >Trouver ma préférence
            </Button>
            <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
            <Button 
            className="w-full md:mr-4 md:w-auto" 
            onClick={() => setModalOpen(true)}
            >Trouver ma préférence
            </Button>
            <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          </nav>

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
