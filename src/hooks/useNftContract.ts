import { toast } from "material-react-toastify";

import { CONTRACT_ADDRESS, cmAddress, collectionName } from "config";

export default function useNftContract() {
  return {
    async mint() {
      const payload = {
        type: "entry_function_payload",
        function: `${CONTRACT_ADDRESS}::ftmpad::mint_tokens`,
        type_arguments: [],
        arguments: [cmAddress, collectionName, 1],
      };

      const txHash = await window.aptos.signAndSubmitTransaction(payload);

      if (txHash) {
        toast.success("Minted");
      }
    },
  };
}
