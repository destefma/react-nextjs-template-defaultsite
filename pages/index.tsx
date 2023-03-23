import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import AnimatedImage from "../src/components/Animation/AnimatedImage";
import HeroSwipper from "../src/components/Heros/HeroSwipper";
import InfoNavBar from "../src/components/NavBar/InfoNavBar";
import NavBar from "../src/components/NavBar/NavBar";
import NavBarItem from "../src/components/NavBar/NavBarItems/NavBarItem";
import SideBar from "../src/components/NavBar/SideBar";
import Features from "../src/layouts/gastro/Features";
import GastroEvents from "../src/layouts/gastro/GastroEvents";
import GastroMenu from "../src/layouts/gastro/GastroMenu";
import GastroInnovation from "../src/layouts/gastro/GastroInnovation";
import PhoneReservationTable from "../src/layouts/gastro/PhoneReservationTable";
import useScreenSize from "../src/hooks/useScreenSize";
import TeamSection from "../src/layouts/gastro/TeamSection";
import WelcomeSection from "../src/layouts/gastro/WelcomeSection";
import Footer from "../src/layouts/main/Footer";
import Gallery from "../src/layouts/main/Gallery";

import { GastroNavBarItemProps } from "../src/constans/ComponentDefaultProps";

NavBarItem.defaultProps = GastroNavBarItemProps;

const GastroPage: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Gastro</title>
        <meta
          name="description"
          content="Gastro Website - Designed by DeStefani"
        />
        <meta
          name="keywords"
          content="Eisdiele, Eisdiele mit leckerm Cafê, Eisdiele mit BubbleWaffel, Eisdiele mit Bubble Tee, Eisdiele mit leckerem Eis, Eiscafe, Eisdiele"
        />
        <link rel="icon" href="/assets/venezia2_logo-removebg.webp"></link>
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
        {useScreenSize().width >= 1280 ? (
          <div className="z-50">
            <Link href="/">
              <Image
                src={"./assets/venezia2_logo-removebg.webp"}
                alt="Overflowing Website Logo Image"
                loading="lazy"
                width={50}
                height={50}
                className="w-20 h-20 inset-y-0 rounded-full hover:scale-150 z-50"
              />
            </Link>
          </div>
        ) : null}
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
        <InfoNavBar className="md:hidden" telNumber="+49 111 111 111 11" />
        {useScreenSize().width >= 1280 ? <AnimatedImage /> : null}
        <HeroSwipper />
        <WelcomeSection bgColor="primary" />
        <GastroInnovation />
        <GastroMenu />
        <Features id="range" />
        <TeamSection />
        <Gallery />
        <PhoneReservationTable
          bgColor="bg-gray-100"
          telNumber="+49 111 111 111 11"
          id="reservieren"
        />
        <Footer />
      </main>
    </div>
  );
};

export default GastroPage;
