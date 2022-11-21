import React from "react";
import useWalletContext from "hooks/useWalletContext";
import { useWallet } from "@manahippo/aptos-wallet-adapter";

export default function ConnectBtn() {
  const wallet = useWallet();
  const {connectWallet} = useWalletContext();
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn flex cursor-pointer items-center gap-1 btn "
      >
        <span>+</span>
        <span>Connect</span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {wallet.wallets.map((walletType) => {
          const adapter = walletType.adapter;
          return (
            <li>
              <button
                key={adapter.name}
                onClick={() => connectWallet(adapter.name)}
              >
                <img src={adapter.icon} className="w-8" />
                <h6 className="mb-0">{adapter.name}</h6>
              </button>
            </li>
          );
        })}
        {/* <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li> */}
      </ul>
    </div>
  );
}
