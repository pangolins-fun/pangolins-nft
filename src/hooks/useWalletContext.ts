import { WalletContext } from "context/WalletContext";

import { useContext } from "react";

export default function useWalletContext() {
    return useContext(WalletContext)
}