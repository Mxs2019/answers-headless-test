import { Result } from "@yext/answers-core";
import PhoneNumber from "awesome-phonenumber";
import classnames from "classnames";
import React from "react";
import { MdDirections, MdPhone } from "react-icons/md";
import CTA from "../components/CTA";
import { getFieldValues } from "../utilities/fields";
type Props = {
  result: Result;
  verticalKey: string;
  index: number;
};

const METERS_TO_MILES = 0.000621371;

const LocationCard = ({ result, verticalKey, index }: Props) => {
  const { title, url } = getFieldValues(result, verticalKey);
  const address = result.rawData?.address as {
    line1: string;
    city: string;
    region: string;
    postalCode: string;
  };
  const pn = result.rawData?.mainPhone
    ? PhoneNumber(result.rawData?.mainPhone as string)
    : undefined;

  const distance =
    Math.round((result.distance as number) * METERS_TO_MILES * 10) / 10;

  console.log(result);
  return (
    <div className={classnames("py-4")}>
      <div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <div className="text-white bg-brand rounded-full flex items-center justify-center h-6 w-6 text-sm">
              {index + 1}
            </div>
            <a href={url} className="text-brand hover:underline font-medium">
              {title}
            </a>
            <div className="flex-grow"></div>
            <div className="text-sm italic">{distance}</div>
          </div>
          <div className="flex justify-between flex-col sm:flex-row">
            <div>
              {address && (
                <div className="text-sm">
                  <div>{address.line1}</div>
                  <div>
                    {address.city}, {address.region}, {address.postalCode}
                  </div>
                </div>
              )}
              {pn && <div className="text-sm">{pn.getNumber("national")}</div>}
            </div>
            <div className="gap-1 flex flex-col mt-2 sm:mt-0">
              <CTA icon={<MdPhone />}>Call</CTA>
              <CTA icon={<MdDirections />}>Get Directions</CTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
