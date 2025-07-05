import React from "react";
import { Icon } from "@iconify/react";
import { BlogService, PublicationService, UserService } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";

async function Footer() {
  const user = await UserService.findUnique({
    where: {
      email: "y.rofcanin@bath.ac.uk",
    },
  });

  const publications = await PublicationService.findMany({
    take: 3,
    select: {
      id: true,
      name: true,
      link: true,
    },
  });
  const blogs = await BlogService.findMany({
    take: 3,
    select: {
      id: true,
      name: true,
      link: true,
      type: true,
    },
  });

  return (
    <>
      <footer className="w-full flex items-center justify-center shadow-sm bg-white p-12 mt-12 relative pt-24 md:pt-32">
        {/* Decorative section above footer */}
        <div
          className="absolute left-0 top-0 w-full h-12 md:h-20"
          style={{
            backgroundImage: "url('/images/bg-media.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 100% 0%, 100% 40%, 0% 100%)",
          }}
        />
        <div className="grid grid-cols-4 container mx-auto gap-10">
          <div className="flex flex-col gap-6">
            <Image
              src={"/images/logo.png"}
              alt="Yasin Rofcanin Site Logo"
              width={300}
              height={100}
              className="w-auto h-20"
            />
            <p>
              Professor of Organisational Behaviour, passionate about how
              flexible work practices, proactive employee behaviours, and
              work-family enrichment shape well-being and effectiveness at work;
              published in leading journals, and actively contributes to the
              field as an editorial board member.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">Contact</h3>
            <div className="flex gap-2">
              <Icon
                className="w-8 h-8 flex-shrink-0"
                icon="mdi:map-marker-outline"
              />
              {user?.location}
            </div>
            <div className="flex gap-2">
              <Icon
                className="w-8 h-8 flex-shrink-0"
                icon="mdi:envelope-outline"
              />
              <Link className="hover:text-hover" href={`mailto:${user?.email}`}>
                {user?.email}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">Latest Publications</h3>
            <div className="flex flex-col gap-2">
              {publications.map((item) => (
                <Link
                  key={item.id}
                  className="hover:text-hover"
                  href={item.link}
                  target="_blank"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">Latest Blogs</h3>
            <div className="flex flex-col gap-2">
              {blogs.map((item) => (
                <Link
                  key={item.id}
                  className="hover:text-hover"
                  href={
                    item.type === "personal"
                      ? `/blog/${item.id}`
                      : item.link || "#"
                  }
                  target={item.type === "external" ? "_blank" : "_self"}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom copyright bar */}
      <div className="w-full flex flex-col items-center bg-[#282828]">
        <div className="w-full flex justify-center items-center py-4">
          <span className="text-white text-sm font-medium text-center">
            © {new Date().getFullYear()} Yasin Rofcanin. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
