import ImgBanner from "assets/banner-img.png";
import ConnectBtn from "./ConnectBtn";
import useWalletContext from "hooks/useWalletContext";
import useNftContract from "hooks/useNftContract";

export default function Banner() {
  const { account, connectWallet } = useWalletContext();
  const { mint } = useNftContract();

  return (
    <>
      <div className="container mx-auto mt-3">
        <div className="flex justify-between flex-col gap-4 md:gap-0 md:flex-row items-start md:items-center mb-7">
          <div className="section-title">
            <div>MEET</div>
            <div className="text-cyan">THE PANGOLINS</div>
          </div>
          <div className="w-full md:w-80">
            {account ? (
              <a onClick={mint} className="btn-line mb-4 inline-block">
                MINT YOUR PANGOLINS
              </a>
            ) : (
              <ConnectBtn />
            )}

            <div className="text-sans">
              Collection of 3888 unique Pangolin NFTs on the Aptos Blockchain to
              support pangolin conservation efforts.
            </div>
          </div>
        </div>
        <img src={ImgBanner} />
      </div>

      <div className="py-10 md:py-24 px-6 text-center text-base md:text-xl bg-[#F5F4F3]">
        Each Pangolin NFT is unique and algorithmically generated from original
        artworks drawn by our artist with over{" "}
        <span className="text-orange">1,000,000</span> possible outcomes.
      </div>
    </>
  );
}
