import React, { PropsWithChildren } from "react";
import Image from "next/image";
import FadeInItem from "../../components/Animation/FadeInItem";
import { TeamMember } from "../../constans/ComponentTypes";
import { TeamSectionDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  members?: [TeamMember];
}

function TeamSection({ members }: Props) {
  return (
    <section className="px-6 py-10 bg-gray-100">
      <div className="flex flex-col items-center mx-6 my-10">
        <FadeInItem className={"flex flex-col items-center"} id={0}>
          <h4 className="font-greatvibes italic tracking-wide text-3xl lg:text-5xl font-bold text-font-secondary my-2">
            Unser Team
          </h4>

          <hr className="w-2/12 mt-5 mb-3 bg-secondary-accent h-1" />
          <hr className="w-1/12 mb-5 bg-secondary-accent h-1" />
        </FadeInItem>
        <div className="grid grid-flow-row auto-rows-min grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
          {members?.map((member, i) => (
            <FadeInItem className={"flex flex-col items-center"} id={i} key={i}>
              <div
                className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-3xl hover:border-transparent group hover:bg-accent dark:border-gray-400 dark:hover:border-transparent hover:-translate-y-8"
                key={i}
              >
                <Image
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  width={100}
                  height={100}
                  loading="lazy"
                />
                <p className="mt-4 text-2xl font-semibold text-font-primary capitalize group-hover:text-white">
                  {member.name}
                </p>
                <p className="mt-2 text-gray-900 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  {member.jobtitle}
                </p>
              </div>
            </FadeInItem>
          ))}
        </div>
      </div>
    </section>
  );
}

TeamSection.defaultProps = TeamSectionDefaultProps;
export default TeamSection;
