import React from "react";
import ImageSlider from "./components/landing/ImageSlider";
import {
  FutureOfWorkImagesService,
  SliderImageService,
  UserService,
} from "@/lib/services";
import Media from "./components/landing/Media";
import Publications from "./components/landing/Publications";
import FutureOfWork from "./components/landing/FutureOfWork";
import EditorialRoles from "./components/landing/EditoralRoles";

async function page() {
  const sliderImages = await SliderImageService.findMany({
    select: {
      media: true,
    },
  });

  const user = await UserService.findUnique({
    where: {
      email: "y.rofcanin@bath.ac.uk",
    },
  });

  const futureOfWorkImages = await FutureOfWorkImagesService.findMany({
    select: {
      media: true,
    },
  });

  return (
    <>
      <ImageSlider
        images={sliderImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
        user={{
          firstName: user?.firstName,
          lastName: user?.lastName,
          titles: user?.titles,
        }}
      />
      <Media />
      <Publications />
      <EditorialRoles />
      <FutureOfWork
        images={futureOfWorkImages.map((item) => ({
          src: item.media.url,
          alt: item.media.alt,
        }))}
      />
    </>
  );
}

export default page;
