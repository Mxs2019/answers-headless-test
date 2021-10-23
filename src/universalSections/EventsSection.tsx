import classnames from "classnames";
import React from "react";
import EventCard from "../cards/EventCard";
import SectionHeader from "../components/SectionHeader";
import { SectionProps } from "../types";

const EventsSection = ({ title, results, verticalKey }: SectionProps) => {
  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="divide-y border-b">
        {results.map((r) => (
          <EventCard key={r.id} result={r} verticalKey={verticalKey} />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
