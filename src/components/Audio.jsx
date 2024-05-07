import { Music4, Play } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, []);

  const toogleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-20 right-2">
      <button
        onClick={toogleAudio}
        className="text-white w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center"
      >
        {isPlaying ? (
          <Music4 size={20} className="animate-spin-slow" />
        ) : (
          <Play size={20} />
        )}
      </button>
      <audio ref={audioRef}>
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Audio;
