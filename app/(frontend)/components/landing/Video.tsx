import React from "react";

function Video() {
  return (
    <div className="bg-[url('/images/bg-media.jpg')] bg-fixed bg-center py-12 mt-12 -mb-6">
      <div className="max-w-4xl mx-auto flex items-center justify-center px-4 md:px-0">
        <video
          src="https://fppnyxariyb6rpz5.public.blob.vercel-storage.com/9a4cea9e-aa18-477b-b2a4-0200e7f6ea00.webm"
          autoPlay
          loop
          muted
          playsInline
          className="aspect-video w-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default Video;
