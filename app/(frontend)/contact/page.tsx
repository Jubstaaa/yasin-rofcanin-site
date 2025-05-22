import React from "react";
import PageHero from "../components/ui/PageHero";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Form from "../components/ui/Form";
import { sendContactMail } from "@/lib/actions";
import { UserService } from "@/lib/services";
import Link from "next/link";
import { SocialService } from "@/lib/services";
import AnimatedText from "../components/ui/AnimatedText";

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
        className="text-[200px] text-[#f1f1f1] font-extrabold text-center -mb-40"
      />
      <div className="container mx-auto py-16 flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Image + Address Card */}
        <div className="flex-1 flex justify-start">
          <div className="relative w-auto h-full">
            <Image
              src="/images/contact-books.jpg"
              alt="Contact Visual"
              width={350}
              height={350}
              className="rounded-lg object-cover"
            />
            {/* Address Card: sağ alt köşe */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[320px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/bg-media.jpg"
                  alt="Media Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 text-white p-10 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon icon="mdi:map-marker" className="w-7 h-7" />
                    <span className="font-semibold text-lg">Address</span>
                  </div>
                  <div className="text-base">{user?.location}</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon icon="mdi:email-outline" className="w-7 h-7" />
                    <span className="font-semibold text-lg">Email</span>
                  </div>
                  <Link
                    href={`mailto:${user?.email}`}
                    className="text-base underline"
                  >
                    {user?.email}
                  </Link>
                </div>
                <div className="flex gap-4 mt-3">
                  {socials.map((social) => (
                    <Link href={social.link} key={social.id} target="_blank">
                      <Icon className="w-8 h-8" icon={social.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">
            Get <span className="text-hover">in touch</span>
          </h2>
          <p className="text-gray-500 mb-8">
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
