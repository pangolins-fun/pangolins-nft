import useWalletContext from "hooks/useWalletContext";
import ConnectBtn from "./ConnectBtn";
import useNftContract from "hooks/useNftContract";

export default function More() {
  const { account, connectWallet } = useWalletContext();
  const { mint } = useNftContract();

  return (
    <div className="py-12 md:py-16 bg-more">
      <div className="container mx-auto mt-3">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between mb-7">
          <div className="section-title text-5xl md:text-6xl pl-4 w-full md:w-1/2">
            <div>MORE</div>
            <div className="text-cyan">THAN JUST AN NFT ART</div>
          </div>
          <div className="bg-white rounded-3xl p-8 w-full md:w-1/2">
            <div className="text-4xl mb-3">
              The More We Know, The Less We Harm
            </div>
            <div className="text-sans">
              <div className="mb-3">
                We hope this NFT collection will bring together{" "}
                <strong>
                  a community of NFT enthusiasts and animal lovers
                </strong>{" "}
                to help to <strong>raise and spread awareness</strong> about
                pangolin conservation and say No to pangolin products and
                illegal wildlife trade.
              </div>

              <div className="mb-3">
                We are also committed to{" "}
                <strong>donate 20% of all mint proceeds</strong> and a portion
                of Creator Royalty to a charity focused on protecting pangolins
                and other endangered animals.
              </div>

              <div className="mb-4">
                <div className="mb-1 flex items-center">
                  <strong className="w-52">Charity Organization: </strong>
                  <div className="text-[#979797]">
                    To be revealed at Mint Event
                  </div>
                </div>
                <div className="flex items-center">
                  <strong className="w-52">Donation TX Hash: </strong>
                  <div className="text-[#979797]">
                    To be revealed post Mint Event
                  </div>
                </div>
              </div>
            </div>
            {account ? (
              <a
                onClick={mint}
                className="btn inline-block text-sans font-bold inline-flex items-center"
              >
                Mint your Pagonlins
              </a>
            ) : (
              <ConnectBtn />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
