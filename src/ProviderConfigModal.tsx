import React from "react";
import { Updater } from "use-immer";
import TextInput from "./configComponents/TextInput";
import { AnswersConfig } from "./types";

type Props = {
  //Insert Props Here
  className?: string;
  config: AnswersConfig;
  setConfig: Updater<AnswersConfig>;
  onSave: () => void;
};

const ProviderConfigModal = ({ config, setConfig, onSave }: Props) => {
  return (
    <div>
      <div className="text-lg text-gray-700 mb-4">Enter Experience Details</div>

      <div className="flex flex-col gap-4">
        <TextInput
          value={config.providerConfig.apiKey}
          name="apiKey"
          label="API Key"
          onChange={(v) => {
            setConfig((c) => {
              c.providerConfig.apiKey = v;
            });
          }}
        />
        <TextInput
          value={config.providerConfig.experienceKey}
          name="experienceKey"
          label="Experience Key"
          onChange={(v) => {
            setConfig((c) => {
              c.providerConfig.experienceKey = v;
            });
          }}
        />
        <button
          className="bg-gray-700 rounded text-white py-2 px-2 hover:bg-gray-900"
          onClick={onSave}
        >
          Save
        </button>
        <button
          className="text-xs hover:underline text-gray-500 mb-3"
          onClick={() => {
            setConfig((c) => {
              c.providerConfig = {
                apiKey: "7bce922a5847aff36dc33345921ba700",
                experienceKey: "dtc_demo",
                locale: "en",
              };
            });
          }}
        >
          Use demo app
        </button>
      </div>
    </div>
  );
};

export default ProviderConfigModal;
