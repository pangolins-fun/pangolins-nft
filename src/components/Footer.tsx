import { useEffect, useState } from "react";
import Logo from "assets/logo2.svg";
import IconTwitter from "assets/socials/twitter.svg";

export default function Footer() {
  const [account, setAccount] = useState("");
  const connectWallet = async () => {
    const res = await window.aptos.account();
    console.log("resss", res);
  };

  return (
    <>
      <footer className="py-16">
        <div className="container mx-auto flex gap-4 flex-col md:flex-row justify-between items-center">
          <div>
            <img src={Logo} className="mb-8" />
            <div>
              Collection of 3888 unique Pangolin NFTs on the Aptos Blockchain to
              support pangolin conservation efforts.
            </div>
          </div>
          <div className="flex items-center gap-12">
            <a href="https://twitter.com" target="_blank">
              <img src={IconTwitter} />
            </a>
          </div>
        </div>
      </footer>

      <div className="py-6 bg-[#F5F4F3]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>2022 All rights reserved.</div>
          <div>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </>
  );
}
