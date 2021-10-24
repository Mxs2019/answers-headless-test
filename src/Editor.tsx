import { getDatabase, push, ref } from "@firebase/database";
import { Dialog, Transition } from "@headlessui/react";
import cx from "classnames";
import React, { Fragment, useEffect, useState } from "react";
import { FaCheck, FaCopy, FaLink } from "react-icons/fa";
import { MdChevronLeft, MdShare } from "react-icons/md";
//@ts-ignore
import { useImmer } from "use-immer";
import Answers from "./Answers";
import defaultConfig from "./answers.config";
import Modal from "./components/Modal";
import ConfigEditor from "./ConfigEditor";
import ProviderConfigModal from "./ProviderConfigModal";
import { AnswersConfig } from "./types";
import { ConfigContext } from "./utilities/configContext";

const SIDEBAR_WIDTH = 500;
const TOP_BAR_HEIGHT = 40;

function Editor() {
  const [config, setConfig] = useImmer<AnswersConfig>(defaultConfig);
  const [configExpanded, setConfigExpaned] = useState(true);
  const [verticalKeys, setVerticalKeys] = useState<string[]>([]);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const [publishedKey, setPublishedKey] = useState<string>();

  const publishExperience = () => {
    const db = getDatabase();

    push(ref(db, "experiences"), config).then((v) => {
      setPublishedKey(v.key as string);
      setShowPublishModal(true);
    });

    // Publish to Firebase
  };

  useEffect(() => {
    if (
      config.providerConfig.experienceKey.length === 0 ||
      config.providerConfig.apiKey.length === 0
    ) {
      setShowConfigModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setShowConfigModal]);

  return (
    <div className="">
      <div
        style={{ height: `${TOP_BAR_HEIGHT}px` }}
        className="bg-gray-200 border-b border-gray-300 flex items-center justify-end px-4 gap-4"
      >
        <button
          className="border px-4 py-1 text-sm bg-gray-500 hover:bg-gray-900 text-white rounded flex items-center gap-2"
          onClick={publishExperience}
        >
          Publish
          <MdShare />
        </button>
      </div>
      <div
        className="overflow-y-auto absolute top-0 right-0 bottom-0 transition-all"
        style={{
          left: configExpanded ? `${SIDEBAR_WIDTH}px` : 0,
          top: `${TOP_BAR_HEIGHT}px`,
        }}
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
        <ConfigEditor
          onChangeProviderConfig={() => setShowConfigModal(true)}
          setConfig={setConfig}
          config={config}
          verticalKeys={verticalKeys}
        />
      </div>
      <button
        className="absolute bottom-2 h-10 w-10 bg-gray-100 border shadow rounded-full flex items-center justify-center text-2xl text-gray-500 hover:shadow-lg hover:bg-gray-300 transition-all"
        style={{ left: configExpanded ? `${SIDEBAR_WIDTH + -25}px` : "10px" }}
        onClick={() => setConfigExpaned((e) => !e)}
      >
        <MdChevronLeft
          className={cx("transition-all transform", {
            "rotate-180": !configExpanded,
          })}
        />
      </button>
      <Transition.Root show={showPublishModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setShowPublishModal}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <FaCheck />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Experience Published!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your experience is now published. Share the url below or
                        copy the embed code to paste of your website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border flex items-center bg-gray-100 rounded mt-4 ">
                  <input
                    className="font-mono text-sm  rounded px-2 py-1 text-gray-700 w-full bg-transparent"
                    value={`http://${window.location.host}/experiences/${publishedKey}`}
                  />

                  <button className="border-l px-2 h-full text-gray-500 border-gray-300  flex items-center hover:text-gray-700">
                    <FaCopy />
                  </button>
                  <a
                    className="border-l px-2 h-full text-gray-500 border-gray-300  flex items-center hover:text-gray-700"
                    href={`http://${window.location.host}/experiences/${publishedKey}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLink />
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Modal show={showConfigModal} onHide={() => setShowConfigModal(false)}>
        <ProviderConfigModal
          config={config}
          setConfig={setConfig}
          onSave={() => setShowConfigModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Editor;
