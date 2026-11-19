import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { NAV_LINKS } from "./nav-links";

describe("NAV_LINKS", () => {
  const internal = NAV_LINKS.filter((link) => !link.external);

  it.each(internal)("$href has a page", ({ href }) => {
    expect(existsSync(`app${href === "/" ? "" : href}/page.tsx`)).toBe(true);
  });
});
