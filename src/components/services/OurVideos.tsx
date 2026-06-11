const OurVideos = () => {
  const videos = [
    {
      id: "eRHgRlGz_64",
      title: "Islamic finance scholars gathered in Tashkent",
    },
    {
      id: "JrJ02_hxwwk",
      title:
        "The 20th International Forum on Islamic Finance was held in Tashkent",
    },
    {
      id: "KJjhSlAGwFw",
      title: "ISSF 2025 Forum - an important step towards Islamic finance",
    },
    {
      id: "m0iMVuu2Tb4",
      title: "What is Islamic Finance?",
    },
    {
      id: "kUEuvJba73Q",
      title: "What is the state of Islamic finance in Uzbekistan?",
    },
    {
      id: "ZGDU0Bnwjl4",
      title: "The path to Islamic finance ecosystem is clear...",
    },
  ];
  return (
    <div className="container mx-auto px-12 mt-24 mb-16 select-none">
      {/* Sarlavha qismi */}
      <div className="mb-12 text-center flex flex-col items-center justify-center">
        <h2 className="font-extrabold text-5xl text-[#0B2937] tracking-tight drop-shadow-sm">
          Our Videos
        </h2>
        <div className="mt-4 h-1.5 w-32 rounded-full bg-[#009688] shadow-sm" />
      </div>

      {/*Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
          >
            {/* YouTube iframe */}
            <div className="w-full aspect-video bg-slate-100">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              />
            </div>

            {/* Title */}
            <div className="p-5 border-t border-slate-200">
              <div className="mb-3 inline-flex items-center rounded-full bg-[#E6F4EE] px-3 py-1 text-xs font-semibold text-[#0F7F5C]">
                Video
              </div>
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVideos;
