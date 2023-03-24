import React, { PropsWithChildren } from "react";
import Wave from "../../components/Backgrounds/Wave";
import FadeInItem from "../../components/Animation/FadeInItem";
import { WelcomeSectionDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  headerText?: string;
  description?: string;
  bgColor: string;
}

function WelcomeSection({
  headerText,
  descritpion,
  bgColor,
  className,
}: Props) {
  return (
    <>
      <section
        className={`bg-primary welcome-section pt-10 ${bgColor}`}
        id="welcome-section"
      >
        <div
          className={
            "welcome-text-wrapper w-screen flex flex-col justify-center items-center px-6 sm:px-40 md:px-50 lg:px-60 pt-10 gap-10 " +
            className
          }
        >
          <FadeInItem id={0}>
            <h2
              className={
                "text-center text-2xl sm:text-4xl md:text-5xl text-font-primary font-bold"
              }
            >
              {headerText}
            </h2>
          </FadeInItem>
          <div className="text-center">
            <FadeInItem id={1}>
              <text className="text-font-normal sm:text-2xl text-lg whitespace-pre-wrap">
                {descritpion}
              </text>
            </FadeInItem>
          </div>
        </div>
      </section>
      <Wave color="yellow" bgColor={"bg-red"} />
    </>
  );
}

WelcomeSection.defaultProps = WelcomeSectionDefaultProps;

export default WelcomeSection;
