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
import Expandable from "./components/Expandable";
import Select from "./configComponents/Select";
import Toggle from "./configComponents/Toggle";
import { AnswersConfig } from "./types";
import { SectionTypesArray } from "./universalSections/sectionTypesRegistry";

type Props = {
  //Insert Props Here
  className?: string;
  config: AnswersConfig;
  setConfig: Updater<AnswersConfig>;
  verticalKeys: string[];
  onChangeProviderConfig: () => void;
};

const ConfigEditor = ({
  className,
  config,
  setConfig,
  verticalKeys,
  onChangeProviderConfig,
}: Props) => {
  const [json, setJson] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setShowColorPicker(false));

  // const configVerticalKeys = Object.keys(config.verticals);

  return (
    <div className={classnames(className)}>
      <div
        className="flex items-center justify-between border-b p-4 border-gray-300 bg-gray-200 border-r"
        style={{ height: "40px" }}
      >
        <button
          className="flex items-center gap-2 hover:bg-gray-300 -m-1 p-1 rounded"
          onClick={onChangeProviderConfig}
        >
          <FaCog className="text-gray-500" />
          <div className="uppercase tracking-wider text-gray-500 text-sm">
            {config.providerConfig.experienceKey}
          </div>
        </button>
        <div className="flex items-center gap-2">
          <Toggle enabled={json} onChange={setJson} />
          <MdCode className="text-lg text-gray-500" />
        </div>
      </div>
      {!json && (
        <div>
          <Expandable
            className="border-b border-gray-300"
            defaultExpanded={true}
            title={
              <div className="px-4 flex gap-2 items-center">
                <FaPaintBrush className="text-gray-500" />
                <div>Styling</div>
              </div>
            }
          >
            <div className="flex flex-col px-4">
              <label className="block text-sm font-medium text-gray-700">
                Primary Color
              </label>
              <button
                onClick={() => setShowColorPicker((c) => !c)}
                className="border px-2 py-1 rounded font-mono text-white mt-1"
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
            className="border-b border-gray-300"
            title={
              <div className="px-4 flex gap-2 items-center">
                <FaGripLines className="text-gray-500" />
                <div>Verticals</div>
              </div>
            }
          >
            <div className="flex flex-col px-4 gap-1">
              <p className="pb-2 text-gray-600 text-sm">
                Style verticals here. Run searches on the right to see different
                verticals
              </p>
              {[
                ...verticalKeys,
                // ...configVerticalKeys.filter((c) => !verticalKeys.includes(c)),
              ].map((key) => {
                const verticalConfig = config.verticals[key];
                return (
                  <div className="grid grid-cols-2 gap-1" key={key}>
                    <input
                      value={config?.verticals?.[key]?.title ?? key}
                      className="bg-transparent -ml-2 pl-2"
                      onChange={(e) => {
                        setConfig((c) => {
                          _.set(c, `verticals[${key}].title`, e.target.value);
                        });
                      }}
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
