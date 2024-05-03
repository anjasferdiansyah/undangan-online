import { useEffect, useState } from "react";
import { app } from "../db/firebase";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import UcapanDanDoa from "./UcapanDanDoa";
import { Mail } from "lucide-react";

const PesanTamu = () => {
  const db = getFirestore(app);
  const [guests, setGuests] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    const getGuests = async () => {
      const docRef = collection(db, "guest");
      const querySnapshot = await getDocs(
        query(docRef, orderBy("createdAt", "desc"), limit(5))
      );

      const guestsList = querySnapshot.docs.map((doc) => doc.data());
      console.log(guestsList);
      setGuests(guestsList);
      if (!querySnapshot.empty) {
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }
    };
    getGuests();

    const unsubscribe = onSnapshot(
      query(collection(db, "guest"), orderBy("createdAt", "desc"), limit(5)),
      (snapshot) => {
        const guestsList = snapshot.docs.map((doc) => doc.data());
        setGuests(guestsList);
        if (!snapshot.empty) {
          setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData.entries());

    console.log(formDataObj);

    try {
      await addDoc(collection(db, "guest"), {
        nama: formDataObj.nama,
        kehadiran: formDataObj.kehadiran,
        pesan: formDataObj.pesan,
        createdAt: new Date(),
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleLoadMore = async () => {
    if (!lastVisible) return;
    const docRef = collection(db, "guest");
    const nextQuery = query(
      docRef,
      orderBy("createdAt", "desc"),
      limit(5),
      startAfter(lastVisible)
    );
    const querySnapshot = await getDocs(nextQuery);
    const newGuestsList = querySnapshot.docs.map((doc) => doc.data());
    setGuests([...guests, ...newGuestsList]);
    if (!querySnapshot.empty) {
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    }
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl text-center font-dancing">Ucapan & Doa</h1>
        <form onSubmit={handleSubmit} className="space-y-2" action="">
          <div className="flex flex-col">
            <label htmlFor="">Nama</label>
            <input
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-blue-500 shadow"
              type="text"
              name="nama"
              required
              placeholder="Masukkan Nama Anda"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Kehadiran</label>
            <select
              className="border-2 border-gray-200 rounded-md p-1 focus:outline-blue-500 shadow"
              id=""
              name="kehadiran"
              required
            >
              <option value={""} disabled>
                Konfirmasi Kehadiran
              </option>
              <option value="hadir">Hadir</option>
              <option value="tidak-hadir">Tidak Hadir</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Ucapan & Doa</label>
            <textarea
              name="pesan"
              required
              className="w-full border-2 border-gray-200 rounded-md p-1 focus:outline-blue-500 shadow"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button className="flex justify-center items-center gap-2 p-2 w-full border-2 border-blue-500 bg-blue-500 text-white rounded hover:border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-100">
            <Mail size={20} />
            Kirim
          </button>
        </form>
      </div>
      <div className="mx-auto">
        {guests &&
          guests.map((guest, index) => (
            <UcapanDanDoa key={index} data={guest} />
          ))}
        <div className="flex justify-center">
          {lastVisible && guests.length >= 5 && (
            <button
              className="p-2 border-[1px] text-blue-500 hover:bg-blue-500 hover:text-white rounded"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PesanTamu;
