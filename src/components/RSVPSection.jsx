import { Copy } from "lucide-react";
import { useState } from "react";
import PesanTamu from "./PesanTamu";
const RSVPSection = () => {
  const [copy, setCopy] = useState("");

  const copyToClipboard = async (rekening, index) => {
    navigator.clipboard.writeText(rekening);
    setCopy(index);
  };

  return (
    <section>
      <div className="container mx-auto py-2 px-4 md:px-0">
        <div className="mt-10 w-full">
          <h1 className="text-3xl text-center font-dancing">Wedding Gift</h1>
          <p className="text-center my-4">
            Tanpa Mengurangi Rasa Hormat, bagi anda yang ingin memberikan tanda
            kasih untuk kami, dapat melalui
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex-1 p-6 border-[1px] border-gray-300 rounded-lg">
              <h1>Logo</h1>
              <p>No Rekening</p>
              <div className="flex justify-between max-w-[180px] gap-1 border-[1px] border-gray-200 rounded p-1 items-center ">
                <p>12345678</p>
                <button
                  className={`relative ${
                    copy === "rekening1"
                      ? "before:absolute before:content-['Copied'] before:w-fit before:rounded-md before:p-1 before:bg-blue-500 before:text-xs before:text-white before:-top-1 before:-right-12 before:transition-all before:duration-300"
                      : ""
                  }`}
                  onClick={() => copyToClipboard("12345678", "rekening1")}
                >
                  <Copy size={17} className="" />
                </button>
              </div>
              <p>a.n. Lorem ipsum dolor sit.</p>
            </div>
            <div className="flex-1 p-6 border-[1px] border-gray-300 rounded-lg">
              <h1>Logo</h1>
              <p>No Rekening</p>
              <div className="flex justify-between max-w-[180px] gap-1 border-[1px] border-gray-200 rounded p-1 items-center ">
                <p>87654321</p>
                <button
                  className={`relative ${
                    copy === "rekening2"
                      ? "before:absolute before:content-['Copied'] before:w-fit before:rounded-md before:p-1 before:bg-blue-500 before:text-xs before:text-white before:-top-1 before:-right-12 before:transition-all before:duration-300"
                      : ""
                  }`}
                  onClick={() => copyToClipboard("87654321", "rekening2")}
                >
                  <Copy size={17} className="" />
                </button>
              </div>
              <p>a.n. Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <PesanTamu />
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
