import React from "react";
import type { Metadata } from "next";
import PageHero from "../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Form from "../components/ui/Form";
import { sendContactMail } from "@/lib/actions";
import { UserService } from "@/lib/services";
import Link from "next/link";
import { SocialService } from "@/lib/services";
import AnimatedText from "../components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Yasin Rofcanin, Professor of Organisational Behaviour at University of Bath. Contact for research collaborations, speaking engagements, or academic inquiries.",
  keywords: [
    "Contact Yasin Rofcanin",
    "University of Bath Contact",
    "Academic Contact",
    "Research Collaboration",
    "Speaking Engagements",
    "Organisational Behaviour Professor",
    "Academic Inquiries",
  ],
  openGraph: {
    title: "Contact - Yasin Rofcanin",
    description:
      "Get in touch with Yasin Rofcanin for research collaborations, speaking engagements, or academic inquiries.",
    url: "https://yasinrofcanin.com/contact",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact - Yasin Rofcanin",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
};

async function page() {
  const user = await UserService.findUnique({
    where: {
      email: "y.rofcanin@bath.ac.uk",
    },
  });

  const socials = await SocialService.findMany();

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Contact"
        description="Get in touch"
        imageUrl="/images/contact_page_title.jpg"
      />

      {/* Main Content */}
      <AnimatedText
        text="TOUCH"
        className="text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] text-[#f1f1f1] font-extrabold text-center -mb-20 md:-mb-28 lg:-mb-40"
      />
      <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start">
        {/* Left: Image + Address Card */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-full md:max-w-[320px] lg:max-w-[350px] h-auto">
            <Image
              src="/images/contact-books.jpg"
              alt="Contact Visual"
              width={350}
              height={350}
              className="rounded-lg object-cover w-full h-auto"
            />
            {/* Address Card */}
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 w-full lg:w-[280px] xl:w-[320px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/bg-media.jpg"
                  alt="Media Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 text-white p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-5 lg:gap-6">
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Icon icon="mdi:email-outline" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <span className="font-semibold text-base md:text-lg">Email</span>
                  </div>
                  <Link
                    href={`mailto:${user?.email}`}
                    className="text-sm md:text-base underline break-all"
                  >
                    {user?.email}
                  </Link>
                </div>
                <div className="flex gap-3 md:gap-4 mt-2 md:mt-3">
                  {socials.map((social) => (
                    <Link href={social.link} key={social.id} target="_blank">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" icon={social.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full lg:flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Get <span className="text-hover">in touch</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
            Got a question or just want to say hi? Contact me via the form
            below...
          </p>
          <Form
            action={sendContactMail}
            fields={[
              {
                name: "name",
                placeholder: "Your Name",
                required: true,
              },
              {
                name: "email",
                placeholder: "Your Email",
                required: true,
              },
              {
                name: "subject",
                placeholder: "Subject",
                required: true,
              },
              {
                name: "message",
                placeholder: "Your Message",
                type: "textarea",
                required: true,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default page;
