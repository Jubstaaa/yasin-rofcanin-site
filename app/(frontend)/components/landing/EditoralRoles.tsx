import Image from "next/image";
import Link from "next/link";

export default function EditorialRoles() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto mt-16 py-16">
        <div className="prose max-w-full">
          {/* Başlık ve Associate Editorship */}
          <div>
            <h2 className="text-4xl font-bold mt-0">Editorial Roles</h2>
            <h3 className="text-lg font-semibold">Associate Editorship</h3>
            <p className="text-secondary">
              I am an Associate Editor of <strong>Human Relations</strong>, a
              flagship journal of the Tavistock Institute published for over 70
              years.
            </p>
            <ul className="list-disc list-inside text-secondary [&>li::marker]:text-hover">
              <li>
                Responsible for submissions in flexible work practices, human
                resource management, proactive work behaviours, and
                organisational psychology.
              </li>
              <li>
                Lead media impact by supporting authors to publish blog posts
                and develop short videos, managing Human Relations&apos;
                YouTube, Facebook, Twitter, and LinkedIn channels.
              </li>
            </ul>
          </div>
          {/* Editorial Membership + Logo */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">
                Editorial Membership
              </h3>
              <ul className="list-disc list-inside text-secondary [&>li::marker]:text-hover">
                <li>
                  <strong>British Journal of Management</strong> (Jan 2019 –
                  Present)
                </li>
                <li>
                  <strong>Journal of Occupational Health Psychology</strong>{" "}
                  (Jan 2020 – Present)
                </li>
                <li>
                  <strong>Journal of Organizational Behavior</strong> (Feb 2020
                  – Present)
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center mt-6 md:mt-0">
              <Link
                href="https://www.humanrelationsjournal.org/about/editorial-team/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src="/images/human-relations.webp"
                  alt="Human Relations Journal Logo"
                  width={500}
                  height={500}
                  className="w-96 object-contain transition-transform group-hover:scale-105"
                />
                <div className="text-xs text-center text-hover underline opacity-80 group-hover:opacity-100">
                  Human Relations Editorial Team
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
