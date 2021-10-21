import config from "../answers.config";

const getVerticalConfig = (verticalKey: string) => {
  const verticalConfig = config.verticals[verticalKey];
};

export default getVerticalConfig;
