import classnames from "classnames";
import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Answers from "./Answers";
import { AnswersConfig } from "./types";
import { ConfigContext } from "./utilities/configContext";

type Props = {
  //Insert Props Here
  className?: string;
};

const Experience = ({ className }: Props) => {
  const { experienceKey } = useParams<{ experienceKey: string }>();
  const [config, setConfig] = useState<AnswersConfig>();

  const db = getDatabase();

  useEffect(() => {
    get(ref(db, `experiences/${experienceKey}`)).then((value) => {
      setConfig(value.toJSON() as AnswersConfig);
    });
  }, [experienceKey]);

  if (!config) return <div></div>;

  return (
    <div>
      {config && (
        <div className={classnames(className)}>
          <ConfigContext.Provider value={config as AnswersConfig}>
            <Answers />
          </ConfigContext.Provider>
        </div>
      )}
    </div>
  );
};

export default Experience;
