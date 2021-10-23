import classnames from "classnames";
import React from "react";
import ProductCard from "../cards/ProductCard";
import SectionHeader from "../components/SectionHeader";
import { SectionProps } from "../types";

const ProductsGrid = ({ title, results, verticalKey }: SectionProps) => {
  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {results.map((r) => (
          <ProductCard key={r.id} result={r} verticalKey={verticalKey} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
