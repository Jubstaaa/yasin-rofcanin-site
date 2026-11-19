import React from "react";

interface PageHeroProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  imageUrl = "/images/single_page_title.jpg",
  children,
}) => (
  <div className="w-full min-h-[350px] md:min-h-[400px] relative flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
    <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
        {title}
      </h1>
      {description && (
        <p className="text-white text-lg md:text-xl drop-shadow">
          {description}
        </p>
      )}
      {children}
    </div>
  </div>
);

export default PageHero;
