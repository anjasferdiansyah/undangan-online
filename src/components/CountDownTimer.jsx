import useCountdown from "../hooks/CountDown"; // Pastikan path sesuai dengan lokasi file custom hook Anda

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetDate }) => {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="container flex w-full max-w-3xl mx-auto gap-8 md:gap-12 justify-center mt-8 p-4 bg-slate-200 rounded-xl shadow-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{timeLeft.days}</h1>
        <p>Days</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{timeLeft.hours}</h1>
        <p>Hours</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{timeLeft.minutes}</h1>
        <p>Minutes</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{timeLeft.seconds}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
