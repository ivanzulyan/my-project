import { useEffect, useRef } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay diblokir oleh browser:", error);
        });
      }
    };

    // Menjalankan audio setelah halaman dimuat
    playAudio();

    // Bisa juga menambahkan event listener jika autoplay diblokir
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold"> </h2>
      <audio ref={audioRef} className="w-full max-w-md" loop>
        <source src="/music/audio1.mp3" type="audio/mpeg" />
        Browser kamu tidak mendukung elemen audio.
      </audio>
    </div>
  );
}

export default MusicPlayer;
