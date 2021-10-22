import classnames from "classnames";
import _ from "lodash";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { MdCode } from "react-icons/md";
import JSONInput from "react-json-editor-ajrm";
//@ts-ignore
import locale from "react-json-editor-ajrm/locale/en";
import { Updater } from "use-immer";
import useOnClickOutside from "use-onclickoutside";
import { CardTypesArray } from "./cards";
import Select from "./configComponents/Select";
import TextInput from "./configComponents/TextInput";
import Toggle from "./configComponents/Toggle";
import { AnswersConfig } from "./types";

type Props = {
  //Insert Props Here
  className?: string;
  config: AnswersConfig;
  setConfig: Updater<AnswersConfig>;
  verticalKeys: string[];
};

const ConfigEditor = ({
  className,
  config,
  setConfig,
  verticalKeys,
}: Props) => {
  const [json, setJson] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setShowColorPicker(false));

  return (
    <div className={classnames(className)}>
      <div className="flex items-center justify-between mb-2">
        <div className="uppercase tracking-wider text-gray-500 text-sm">
          Experience Designer
        </div>
        <div className="flex items-center gap-2">
          <Toggle enabled={json} onChange={setJson} />
          <MdCode className="text-lg text-gray-500" />
        </div>
      </div>
      {!json && (
        <div>
          <div className="flex flex-col gap-4 border-b pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <button
                onClick={() => setShowColorPicker((c) => !c)}
                className="border px-2 py-1 rounded font-mono"
                style={{ backgroundColor: config.style.colors.brand }}
              >
                {config.style.colors.brand}
              </button>
              {showColorPicker && (
                <div ref={ref} className="mt-2 absolute z-50">
                  <SketchPicker
                    color={config.style.colors.brand}
                    onChange={(e) =>
                      setConfig((config) => {
                        config.style.colors.brand = e.hex;
                      })
                    }
                  />
                </div>
              )}
            </div>
            <TextInput
              value={config.providerConfig.apiKey}
              name="apiKey"
              label="API Key"
              onChange={(v) => setConfig((c) => (c.providerConfig.apiKey = v))}
            />
            <TextInput
              value={config.providerConfig.experienceKey}
              name="experienceKey"
              label="Experience Key"
              onChange={(v) =>
                setConfig((c) => (c.providerConfig.experienceKey = v))
              }
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            {verticalKeys.map((key) => {
              const verticalConfig = config.verticals[key];
              return (
                <div className="flex flex-col">
                  <div className="text-gray-500 uppercase text-sm tracking-wider">
                    {key}
                  </div>
                  <div className="my-1 py-1 border-l pl-2">
                    <Select
                      onChange={(v) =>
                        setConfig((c) => {
                          _.set(c, `verticals[${key}].card`, v);
                        })
                      }
                      name="card"
                      placeholder={"Choose Card Type"}
                      value={verticalConfig?.card}
                      options={CardTypesArray.map((c) => {
                        return {
                          value: c.key,
                          label: c.name,
                        };
                      })}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {json && (
        <div>
          <JSONInput
            id="config"
            placeholder={config}
            locale={locale}
            height="100vh"
            width="100%"
            onChange={({ jsObject }: { jsObject: AnswersConfig }) => {
              console.log(jsObject);
              if (jsObject) {
                setConfig(jsObject);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ConfigEditor;
