/* eslint-disable react/prop-types */
const UcapanDanDoa = ({ data }) => {
  const date = data?.createdAt.toDate();

  const formatDate = (date) => {
    const now = new Date(); // Waktu saat ini
    const seconds = Math.floor((now - date) / 1000); // Selisih dalam detik

    if (seconds < 60) {
      return `${seconds} detik yang lalu`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} menit yang lalu`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} jam yang lalu`;
    } else {
      // Tampilkan tanggal lengkap jika lebih dari 1 hari yang lalu
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("id-ID", options);
    }
  };

  return (
    <div className="p-4 my-5 shadow-md rounded-md">
      <div className="flex justify-between border-b-[1px] border-gray-300 py-2">
        <h1 className="font-bold">{data?.nama}</h1>
        <p>{formatDate(date)}</p>
      </div>
      <h1 className="my-2">{data?.pesan}</h1>
    </div>
  );
};

export default UcapanDanDoa;
