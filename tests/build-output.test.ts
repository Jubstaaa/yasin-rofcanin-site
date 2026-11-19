import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const OUT = "out";

function htmlFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === "_next" ? [] : htmlFiles(path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

// Mirrors Caddy's try_files {path} {path}.html {path}/index.html.
function resolves(pathname: string): boolean {
  const path = decodeURIComponent(pathname).replace(/\/$/, "") || "/index";
  return [path, `${path}.html`, `${path}/index.html`].some((candidate) =>
    existsSync(join(OUT, candidate)),
  );
}

describe("static export", () => {
  const pages = htmlFiles(OUT).filter((file) => !/(404|_not-found)\.html$/.test(file));

  it.each(pages)("%s links only to pages that exist", (file) => {
    const html = readFileSync(file, "utf8");
    const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]!);
    const broken = hrefs.filter((href) => !href.startsWith("/_next/") && !resolves(href));
    expect(broken).toEqual([]);
  });

  it.each(pages)("%s has an og:image that is in the export", (file) => {
    const html = readFileSync(file, "utf8");
    const image = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    expect(image).toBeDefined();
    const url = new URL(image!);
    if (url.hostname === "beta.yasinrofcanin.com") {
      expect(resolves(url.pathname)).toBe(true);
    }
  });

  it("loads no YouTube player until a video is played", () => {
    expect(readFileSync(join(OUT, "index.html"), "utf8")).not.toMatch(/<iframe/);
  });
});
