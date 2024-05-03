import { Calendar, Clock } from "lucide-react";
import CountDownTimer from "./CountDownTimer";

const DetailEvent = () => {
  return (
    <section className="">
      <div className="container w-full mx-auto py-4 px-4 md:px-0">
        <h1 className="text-3xl text-center font-dancing">
          Waktu Menuju Acara
        </h1>
        <CountDownTimer targetDate={new Date("2025-12-25")} />
        <p className="text-center mt-8">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala,
          insyaAllah kami akan menyelenggarakan acara :
        </p>
        <div className="mx-auto max-w-xl my-8 space-y-2 text-center">
          <h1 className="text-3xl font-great">Akad</h1>
          <div className="flex gap-4 justify-center">
            <div className="flex-1 flex flex-col items-center gap-2">
              <Clock size={20} />
              <p>Pukul 08.00 WIB</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <Calendar size={20} />
              <p>Senin, 25 Desember 2024</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-xl my-8 space-y-2 text-center">
          <h1 className="text-3xl font-great">Resepsi</h1>
          <div className="flex gap-4 justify-center">
            <div className="flex-1 flex flex-col items-center gap-2">
              <Clock size={20} />
              <p>Pukul 11.00 WIB</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <Calendar size={20} />
              <p>Senin, 25 Desember 2024</p>
            </div>
          </div>
        </div>

        <h1 className="text-xl text-center">
          Alamat : Jln. Ir.H.Juanda No.15, Panyingkiran, Kec.Indihiang, Kota
          Tasikmalaya
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4334670022486!2d108.20197227379711!3d-7.3051011718154815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f515ab25f96c9%3A0xd1dd0ae0914de56b!2sGraha%20HT%20Sumantri!5e0!3m2!1sid!2sid!4v1714141513786!5m2!1sid!2sid"
          width="300"
          height="300"
          className="mx-auto rounded mt-8"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default DetailEvent;
