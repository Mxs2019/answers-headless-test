import { Result } from "@yext/answers-core";
import React from "react";
import { getFieldValues } from "../utilities/fields";

type Props = {
  result: Result;
  verticalKey: string;
};

const ProductCard = ({ result, verticalKey }: Props) => {
  const { id, title, url, image } = getFieldValues(result, verticalKey);
  return (
    <div key={id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
        <img
          alt={"Product Detail"}
          src={image}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={url}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
        </div>
        {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
