import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import NavBar from "../src/components/NavBar/NavBar";
import NavBarItem from "../src/components/NavBar/NavBarItems/NavBarItem";
import SideBar from "../src/components/NavBar/SideBar";
import useScreenSize from "../src/hooks/useScreenSize";
import Footer from "../src/layouts/main/Footer";

import { DashboardNavBarItemProps } from "../src/constans/ComponentDefaultProps";

NavBarItem.defaultProps = DashboardNavBarItemProps;

const GastroPage: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Template</title>
        <meta
          name="description"
          content="Template Website - Designed by DeStefani"
        />
        <meta
          name="keywords"
          content="Template, default, Website"
        />
      </Head>

      <NavBar
        bgColor="bg-header"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        className="p-5"
      >
        <NavBarItem href="#gastro-menu" className="w-auto">
          Speißekarte
        </NavBarItem>
        <NavBarItem href="#range" className="w-auto">
          Sortiment
        </NavBarItem>
        <NavBarItem href="#welcome-section" className="w-auto">
          Über uns
        </NavBarItem>
        <NavBarItem href="#gallery" className="w-auto">
          Gallery
        </NavBarItem>
        <NavBarItem href="#reservieren" className="w-auto">
          Reservieren
        </NavBarItem>
        <NavBarItem href="#footer" className="w-auto">
          Kontakt
        </NavBarItem>
      </NavBar>

      <SideBar
        bgColor="bg-header"
        sidebarOpen={sidebarOpen}
        className="w-screen"
      >
        <NavBarItem href="#gastro-news"> Neuheiten</NavBarItem>
        <NavBarItem href="#gastro-menu">Speißekarte</NavBarItem>
        <NavBarItem href="#gallery">Gallery</NavBarItem>
        <NavBarItem href="#range">Sortiment</NavBarItem>
        <NavBarItem href="#reservieren">Reservieren</NavBarItem>
        <NavBarItem href="#footer">Kontakt</NavBarItem>
        <hr className=" bg-gray-900 h-0.5" />
        <NavBarItem
          href="https://instagram.com/"
          title="Link zu unserer Instagram Seite"
        >
          Instagram
        </NavBarItem>
        <hr className=" bg-gray-900 h-0.5" />
      </SideBar>

      <main>
      
        <Footer />
      </main>
    </div>
  );
};

export default GastroPage;
