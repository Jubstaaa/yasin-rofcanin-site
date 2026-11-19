import { icons as carbon } from "@iconify-json/carbon";
import { icons as mdi } from "@iconify-json/mdi";
import { getIconData, iconToHTML, iconToSVG } from "@iconify/utils";

const COLLECTIONS = { carbon, mdi };

/**
 * Renders an icon named in `lib/content.ts` ("mdi:linkedin") as inline SVG at
 * build time. The icon sets are only read on the server, so neither the JSON
 * nor a runtime fetch to api.iconify.design reaches the browser.
 */
export function iconSvg(name: string, className?: string): string {
  const [prefix, icon] = name.split(":");
  const collection = COLLECTIONS[prefix as keyof typeof COLLECTIONS];
  const data = collection && icon ? getIconData(collection, icon) : null;

  if (!data) throw new Error(`Unknown icon "${name}" in lib/content.ts`);

  const { attributes, body } = iconToSVG(data, { height: "1em" });

  return iconToHTML(body, {
    ...attributes,
    "aria-hidden": "true",
    ...(className ? { class: className } : {}),
  });
}

export default function ContentIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className="inline-flex"
      dangerouslySetInnerHTML={{ __html: iconSvg(name, className) }}
    />
  );
}
