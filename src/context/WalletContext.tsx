import { createContext, useState } from "react";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
export const WalletContext = createContext({
  account: "",
  connectWallet: async (adapterName: any) => {},
});

export const WalletContextProvider = ({ children }: any) => {
  const wallet = useWallet();
  const [account, setAccount] = useState<any>("");
  const connectWallet = async (adapterName: any) => {
    await wallet.select(adapterName);
    setAccount(wallet?.account?.address);
    console.log("w", wallet);
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
