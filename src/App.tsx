import React, { useEffect, useState } from "react";
import useWalletContext from "hooks/useWalletContext";
import { WalletContextProvider } from "context/WalletContext";
import {
  WalletProvider,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  RiseWalletAdapter,
  FletchWalletAdapter,
} from "@manahippo/aptos-wallet-adapter";
import "material-react-toastify/dist/ReactToastify.css";
import Header from "components/Header";
import Banner from "components/Banner";
import Little from "components/Little";
import Sadly from "components/Sadly";
import More from "components/More";
import Footer from "components/Footer";
import "./App.css";
import { Types, AptosClient } from "aptos";

// Create an AptosClient to interact with devnet.
const client = new AptosClient("https://fullnode.devnet.aptoslabs.com/v1");

function App() {
  const wallets = [
    new RiseWalletAdapter(),
    // new HippoWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    // new HippoExtensionWalletAdapter(),
    new PontemWalletAdapter(),
    new SpikaWalletAdapter(),
    // new FletchWalletAdapter(),
  ];

  // Retrieve aptos.account on initial render and store it.
  const { account } = useWalletContext();

  const [modules, setModules] = useState<Types.MoveModuleBytecode[]>([]);

  useEffect(() => {
    if (!account) return;
    client.getAccountModules(account).then(setModules);
  }, [account]);

  const hasModule = modules.some((m) => m.abi?.name === "message");
  const publishInstructions = (
    <pre>
      Run this command to publish the module:
      <br />
      aptos move publish --package-dir
      C:\Users\user\Downloads\aptos-core\aptos-move\move-examples\hello_blockchain
      --named-addresses hello_blockchain={account}
    </pre>
  );
  const ref = React.createRef<HTMLTextAreaElement>();
  const [isSaving, setIsSaving] = React.useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!ref.current) return;

    const message = ref.current.value;
    const transaction = {
      type: "entry_function_payload",
      function: `${account}::message::set_message`,
      arguments: [message],
      type_arguments: [],
    };

    try {
      setIsSaving(true);
      await window.aptos.signAndSubmitTransaction(transaction);
    } finally {
      setIsSaving(false);
    }
  };

  const [resources, setResources] = useState<Types.MoveResource[]>([]);
  useEffect(() => {
    if (!account) return;
    client.getAccountResources(account).then(setResources);
  }, [account]);
  const resourceType = `${account}::message::MessageHolder`;
  const resource = resources.find((r) => r.type === resourceType);
  const data = resource?.data as { message: string } | undefined;
  const message = data?.message;

  return (
    <WalletProvider
      wallets={wallets}
      autoConnect={true} /** allow auto wallet connection or not **/
      onError={(error) => {
        console.log("Handle Error Message", error);
      }}
    >
      <WalletContextProvider>
        <div className="App">
          <Header />
          <Banner />
          <Little />
          <Sadly />
          <More />
          <Footer />
     
          {/* {hasModule ? (
          <form onSubmit={handleSubmit}>
            <textarea ref={ref} defaultValue={message} />
            <button onClick={handleSubmit}>Submit{isSaving && "......."}</button>
          </form>
        ) : (
          publishInstructions
        )} */}
        </div>
      </WalletContextProvider>
    </WalletProvider>
  );
}

export default App;
