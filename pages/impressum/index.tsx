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
import Impressum from "./impressum.json";

NavBarItem.defaultProps = GastroNavBarItemProps;

const GastroPage: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Gastro - Impressum</title>
        <meta
          name="description"
          content="Gastro Website Impressum - Designed by DeStefani"
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
          secondHeaderText="Impressum"
          bgColor="bg-background"
        >
          <dl className="max-w-md text-main divide-y divide-gray-20 p-10">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Name & Adresse:
              </dt>
              <dd className="text-lg text-font-normal font-semibold whitespace-pre-line">{`${Impressum.name} \n ${Impressum.anschrift.straße} \n ${Impressum.anschrift.plz} ${Impressum.anschrift.ort}`}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Telefon:
              </dt>
              <dd className="text-lg font-semibold text-font-normal">
                {Impressum.phone}
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                E-Mail:
              </dt>
              <dd className="text-lg font-semibold text-font-normal">
                {Impressum.email}
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Website:
              </dt>
              <dd className="text-lg font-semibold text-font-normal">
                {Impressum.website}
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Geschäftsführer:
              </dt>
              <dd className="text-lg font-semibold text-font-normal">
                {Impressum.ceo}
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Steuer-Nr:
              </dt>
              <dd className="text-lg font-semibold text-font-normal">
                {Impressum.steuernr}
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Inhalt verantwortlicher:
              </dt>
              <dd className="text-lg font-semibold text-font-normal">
                {Impressum.verantwortlicher}
              </dd>
            </div>
          </dl>

          <text className="text-font-normal text-center sm:text-2xl text-lg whitespace-pre-wrap">
            {Impressum.infos}
          </text>
        </FlexHeaderSection>
        <Footer />
      </main>
    </div>
  );
};

export default GastroPage;
