import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { SocialIcon } from "react-social-icons";
import { FooterDefaultProps } from "../../constans/ComponentDefaultProps";
import { GastroInformation } from "../../constans/ComponentTypes";

interface Props extends PropsWithChildren<any> {
  gastroInformation?: GastroInformation;
  bgColor?: string;
}

function Footer({ gastroInformation, bgColor }: Props) {
  return (
    <footer className={bgColor} id="footer">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <div className="text-xs text-gray-300 uppercase font-bold">
              {gastroInformation?.name}
            </div>
            <div className="flex flex-row mt-2">
              <p className="text-gray-200 mr-2">{gastroInformation?.street}</p>
            </div>
            <div className="flex flex-row mt-1">
              <p className="text-gray-200 mr-2">{gastroInformation?.address}</p>
            </div>
            <div className="flex flex-row mt-10">
              <p className="text-gray-200 mr-2">Tel.:</p>
              <a
                href={"tel:" + gastroInformation?.tel}
                className="text-gray-300"
              >
                {gastroInformation?.tel}
              </a>
            </div>
            <div className="flex flex-row mt-1">
              <p className="text-gray-200 mr-2">E-mail:</p>
              <a
                href={"mailto:" + gastroInformation?.email}
                className="text-gray-300"
              >
                {gastroInformation?.email}
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-300 uppercase font-bold">
              Öffnungszeiten
            </div>
            <div className="flex flex-row mt-5">
              <p className="text-gray-200 font-bold mr-2">Montag - Sonntag</p>
              <p className="text-gray-300">13:00 - 19:00</p>
            </div>
            <div className="flex flex-row mt-3">
              <p className="text-gray-200 font-bold mr-2">Ruhetag</p>
              <p className="text-gray-300">Mittwoch</p>
            </div>
            <div className="flex flex-row mt-10">
              <p className="text-gray-200 font-bold mr-2">Saison</p>
              <p className="text-gray-300">Februar - Oktober</p>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-300 uppercase font-bold">
              Informationen
            </div>

            <Link
              href="https://g.page/r/CY61UzbK4AOjEB0/review"
              target="_blank"
              rel="noreferrer"
              className="block mt-5 text-sm font-medium text-gray-200 duration-700 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Kundenbewertung
            </Link>

            <Link
              href="/datenschutz"
              className="block mt-3 text-sm font-medium text-gray-200 duration-700 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="block mt-3 text-sm font-medium text-gray-200 duration-700 dark:text-gray-200 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
            >
              Impressum
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="text-xs text-gray-300 uppercase font-bold">
              Der Weg zu uns
            </div>
            <div className="mt-5">
              <iframe
                src={gastroInformation?.socialmedia.googleMapsURL}
                width="300"
                height="200"
                loading="lazy"
                title="Wegbeschreibung zum Eiscafe Venezia2 über GoogleMaps"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="my-10 bg-white" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright 2022. Made by Manuel DeStefani
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <SocialIcon
              url={gastroInformation?.socialmedia.googleURL}
              network="google"
              fgColor="#FFFFFF"
              bgColor="transparent"
              style={{ height: 30, width: 30 }}
            />
            <div>
              <Link
                href="https://instagram.com/eiscafe.venezia2?igshid=YmMyMTA2M2Y="
                target="_blank"
                title="Link zu unserer Instagram Seite"
                rel="noreferrer"
              />
              <SocialIcon
                url={gastroInformation?.socialmedia.instagramURL}
                network="instagram"
                fgColor="#FFFFFF"
                bgColor="transparent"
                style={{ height: 30, width: 30 }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = FooterDefaultProps;
export default Footer;
