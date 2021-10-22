import classnames from "classnames";
import _ from "lodash";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { FaCog, FaGripLines, FaPaintBrush } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import JSONInput from "react-json-editor-ajrm";
//@ts-ignore
import locale from "react-json-editor-ajrm/locale/en";
import { Updater } from "use-immer";
import useOnClickOutside from "use-onclickoutside";
import { CardTypesArray } from "./cards";
import Expandable from "./components/Expandable";
import Select from "./configComponents/Select";
import TextInput from "./configComponents/TextInput";
import Toggle from "./configComponents/Toggle";
import { AnswersConfig } from "./types";
import { SectionTypesArray } from "./universalSections";

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

  const configVerticalKeys = Object.keys(config.verticals);

  return (
    <div className={classnames(className)}>
      <div className="flex items-center justify-between border-b p-4">
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
          <Expandable
            className="border-b"
            title={
              <div className="px-4 flex gap-2 items-center">
                <FaCog className="text-gray-500" />
                <div>API Configuration</div>
              </div>
            }
          >
            <div className="flex flex-col gap-4 px-4">
              <TextInput
                value={config.providerConfig.apiKey}
                name="apiKey"
                label="API Key"
                onChange={(v) =>
                  setConfig((c) => (c.providerConfig.apiKey = v))
                }
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
          </Expandable>
          <Expandable
            className="border-b"
            defaultExpanded={true}
            title={
              <div className="px-4 flex gap-2 items-center">
                <FaPaintBrush className="text-gray-500" />
                <div>Styling</div>
              </div>
            }
          >
            <div className="flex flex-col gap-4 px-4">
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <button
                onClick={() => setShowColorPicker((c) => !c)}
                className="border px-2 py-1 rounded font-mono text-white"
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
          </Expandable>
          <Expandable
            defaultExpanded={true}
            className="border-b"
            title={
              <div className="px-4 flex gap-2 items-center">
                <FaGripLines className="text-gray-500" />
                <div>Verticals</div>
              </div>
            }
          >
            <div className="flex flex-col px-4">
              <p className="pb-2 text-gray-600 text-sm">
                Style verticals here. Run searches on the right to see different
                verticals
              </p>
              {[...verticalKeys].map((key) => {
                const verticalConfig = config.verticals[key];
                return (
                  <Expandable
                    key={key}
                    title={
                      <div className="font-mono tracking-wider uppercase">
                        {key}
                      </div>
                    }
                    className="border-b"
                    defaultExpanded={true}
                  >
                    <div className="border-l pl-2 flex flex-col gap-2">
                      <TextInput
                        value={verticalConfig?.title ?? ""}
                        name="sectionTitle"
                        label="Section Title"
                        placeholder={key}
                        onChange={(v) =>
                          setConfig((c) => {
                            _.set(c, `verticals[${key}].title`, v);
                          })
                        }
                      />
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
                      <Select
                        onChange={(v) =>
                          setConfig((c) => {
                            _.set(c, `verticals[${key}].section`, v);
                          })
                        }
                        name="section"
                        placeholder={"Choose Section Type"}
                        value={verticalConfig?.section}
                        options={SectionTypesArray.map((c) => {
                          return {
                            value: c.key,
                            label: c.name,
                          };
                        })}
                      />
                    </div>
                  </Expandable>
                );
              })}
            </div>
          </Expandable>
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
