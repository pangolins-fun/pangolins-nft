import Logo from "assets/logo2.svg";
import useWalletContext from "hooks/useWalletContext";
import ConnectBtn from "./ConnectBtn";

export default function Header() {
  const { connectWallet, account } = useWalletContext();

  return (
    <div className="container mx-auto">
      <header className="py-6 flex justify-between items-center">
        <img src={Logo} className="w-24 md:w-32" />
        <div className="flex items-center gap-3 md:gap-12">
          <nav className="flex items-center gap-3 md:gap-6">
            <a>ABOUT</a>
            <a>MORE</a>
            <a className="text-orange">MINT</a>
          </nav>
          {/* {account ? (
            <a className="flex cursor-pointer items-center gap-1 btn ">
              {account.slice(0, 4)}...{account.slice(-4)}
            </a>
          ) : (
           <ConnectBtn />
          )} */}
        </div>
      </header>
    </div>
  );
}
