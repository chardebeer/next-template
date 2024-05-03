import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";


export default function NavigationBar() {
    return (
      <Navbar className="bg-foreground testing">
        <NavbarBrand>
          <p className="font-bold text-background text-2xl  md:text-xl">AIE WEBSITE</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 text-background" justify="center">
          <NavbarItem> 
            <Link href="/" className="text-background">
              Index
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/page-example" className="text-background">
              Example Page
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }
  