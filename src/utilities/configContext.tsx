import { createContext } from "react";
import config from "../answers.config";
import { AnswersConfig } from "../types";

export const ConfigContext = createContext<AnswersConfig>(config);
