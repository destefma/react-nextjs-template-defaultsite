import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HalfCircleBorder } from "../../src/components/Backgrounds/HalfCircleBorder";
import Wave from "../../src/components/Backgrounds/Wave";
import InfoNavBar from "../../src/components/NavBar/InfoNavBar";
import NavBar from "../../src/components/NavBar/NavBar";
import NavBarItem from "../../src/components/NavBar/NavBarItems/NavBarItem";
import SideBar from "../../src/components/NavBar/SideBar";
import FlexHeaderSection from "../../src/components/Section/FlexHeaderSection";
import { GastroNavBarItemProps } from "../../src/constans/ComponentDefaultProps";
import Footer from "../../src/layouts/main/Footer";
import Datenschutz from "./datenschutz.json";

NavBarItem.defaultProps = GastroNavBarItemProps;

const GastroPage: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Eiscafe Venezia 2 - Datenschutz</title>
        <meta
          name="description"
          content="Gastro Website Datenschutz - Designed by DeStefani"
        />
        <link rel="icon" href="/assets/venezia2_logo-removebg.webp"></link>
      </Head>

      <NavBar
        bgColor="bg-white"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        className="p-5"
      >
        <NavBarItem href="/" className="w-32">
          Restaurant
        </NavBarItem>
        <NavBarItem href="/#gastro-menu" className="w-32">
          Speißekarte
        </NavBarItem>
        <NavBarItem href="/#welcome-section" className="w-32">
          Über uns
        </NavBarItem>
        <div className="z-50">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="./assets/venezia2_logo-removebg.webp"
              alt="Overflowing image"
              loading="lazy"
              className="w-20 h-20 inset-y-0 rounded-full hover:scale-150 z-50"
            />
          </Link>
        </div>
        <NavBarItem href="/#range" className="w-32">
          Sortiment
        </NavBarItem>
        <NavBarItem href="/#reservieren" className="w-32">
          Reservieren
        </NavBarItem>
        <NavBarItem href="/#footer" className="w-32">
          Kontakt
        </NavBarItem>
      </NavBar>

      <SideBar
        bgColor="bg-white"
        sidebarOpen={sidebarOpen}
        className="w-screen"
      >
        <NavBarItem href="/#gastro-news"> Neuheiten</NavBarItem>
        <NavBarItem href="/#gastro-menu">Speißekarte</NavBarItem>
        <NavBarItem href="/#gallery">Gallery</NavBarItem>
        <NavBarItem href="/#range">Sortiment</NavBarItem>
        <NavBarItem href="/#reservieren">Reservieren</NavBarItem>
        <NavBarItem href="/#footer">Kontakt</NavBarItem>
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
        <InfoNavBar
          className="md:hidden"
          telNumber="+49 111 111 111 11"
          bgColor="bg-white"
        />
        <HalfCircleBorder bgColor="bg-white" />
        <FlexHeaderSection
          headerText="Informationen"
          secondHeaderText="Datenschutz"
          bgColor="bg-background"
        >
          <text className="text-font-normal text-center sm:text-2xl text-lg whitespace-pre-wrap">
            {Datenschutz.text}
          </text>
        </FlexHeaderSection>
        <Footer />
      </main>
    </div>
  );
};

export default GastroPage;
