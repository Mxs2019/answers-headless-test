import { Result } from "@yext/answers-core";
import classnames from "classnames";
import React from "react";
import { MdDirections } from "react-icons/md";
import CTA from "../components/CTA";
import ErrorCard from "../components/ErrorCard";
import { getFieldValues } from "../utilities/fields";

type Props = {
  result: Result;
  verticalKey: string;
};

const EventCard = ({ result, verticalKey }: Props) => {
  const { id, title, body, url } = getFieldValues(result, verticalKey);

  console.log(result);

  const rawData = result.rawData as any;

  const startTimeString = rawData?.time?.start as string;
  const startDate = new Date(startTimeString);

  if (!startTimeString) {
    return (
      <ErrorCard>
        This entity doesn't have a date on it. Try a different section type
      </ErrorCard>
    );
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={classnames("py-2")}>
      <div className="flex gap-2">
        <div className="w-24 md:w-36 flex-none py-4 flex flex-col items-center justify-center gap-1">
          <div className="text-3xl md:text-5xl font-medium">
            {startDate.getDate()}
          </div>
          <div>{monthNames[startDate.getMonth()]}</div>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="flex flex-col gap-2">
            <a href={url} className="text-brand hover:underline font-medium">
              {title}
            </a>
            <div className="text-gray-600 text-sm">
              {startDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <p className="text-sm text-gray-600 line-clamp-5">{body}</p>
          </div>
          <div className="flex flex-col gap-1 mt-1 md:mt-0 flex-none">
            <CTA icon={<MdDirections />}>Get Directions</CTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
