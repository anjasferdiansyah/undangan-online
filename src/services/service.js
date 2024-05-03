import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../db/firebase";

const db = getFirestore(app);

const getGuests = async () => {
  const docRef = collection(db, "guest");
  const querySnapshot = await getDocs(docRef);
  const guestsList = querySnapshot.docs.map((doc) => doc.data());
  console.log(guestsList);
  return guestsList;
};

export { getGuests };
