import cx from "classnames";
import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
//@ts-ignore
import { useImmer } from "use-immer";
import Answers from "./Answers";
import defaultConfig from "./answers.config";
import ConfigEditor from "./ConfigEditor";
import { AnswersConfig } from "./types";
import { ConfigContext } from "./utilities/configContext";

const SIDEBAR_WIDTH = 400;

function App() {
  const [config, setConfig] = useImmer<AnswersConfig>(defaultConfig);
  const [configExpanded, setConfigExpaned] = useState(true);
  const [verticalKeys, setVerticalKeys] = useState<string[]>([]);

  return (
    <div className="">
      <div
        className="overflow-y-auto absolute top-0 right-0 bottom-0 transition-all"
        style={{ left: configExpanded ? `${SIDEBAR_WIDTH}px` : 0 }}
      >
        <ConfigContext.Provider value={config}>
          <Answers setVerticalKeys={setVerticalKeys} />
        </ConfigContext.Provider>
      </div>
      <div
        className={cx(
          "absolute top-0 bottom-0 overflow-y-auto bg-gray-100 border-r transition-all shadow-inner-lg",
          {
            "w-0": !configExpanded,
            "w-full max-w-lg": configExpanded,
          }
        )}
        style={{
          left: configExpanded ? 0 : `-${SIDEBAR_WIDTH}px`,
          width: `${SIDEBAR_WIDTH}px`,
        }}
      >
        <div className="m-4">
          <ConfigEditor
            setConfig={setConfig}
            config={config}
            verticalKeys={verticalKeys}
          />
        </div>
      </div>
      <button
        className="absolute bottom-2 h-10 w-10 bg-gray-100 border shadow rounded-full flex items-center justify-center text-2xl text-gray-500 z-50 hover:shadow-lg hover:bg-gray-300 transition-all"
        style={{ left: configExpanded ? `${SIDEBAR_WIDTH + -25}px` : "10px" }}
        onClick={() => setConfigExpaned((e) => !e)}
      >
        <MdChevronLeft
          className={cx("transition-all transform", {
            "rotate-180": !configExpanded,
          })}
        />
      </button>
    </div>
  );
}

export default App;
