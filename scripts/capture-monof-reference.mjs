import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";

const BASE = "https://monof-template.webflow.io";
const OUT = "reference-capture";

const routes = [
  { name: "home", path: "/" },
  { name: "studio", path: "/studio" },
  { name: "work-1", path: "/work/work-1" },
  { name: "work-2", path: "/work/work-2" },
  { name: "work-3", path: "/work/work-3" },
  { name: "contact-1", path: "/contact/contact-1" },
  { name: "contact-2", path: "/contact/contact-2" },
  { name: "contact-3", path: "/contact/contact-3" },
  { name: "blog-1", path: "/blog/blog-1" },
  { name: "blog-2", path: "/blog/blog-2" },
  { name: "blog-3", path: "/blog/blog-3" }
];

const viewports = [
  { name: "1440", width: 1440, height: 1200 },
  { name: "1280", width: 1280, height: 1200 },
  { name: "1024", width: 1024, height: 1200 },
  { name: "768", width: 768, height: 1200 },
  { name: "430", width: 430, height: 1200 },
  { name: "390", width: 390, height: 1200 }
];

async function ensureDirs() {
  const dirs = [
    `${OUT}/html`,
    `${OUT}/screenshots`,
    `${OUT}/screenshots/interactions`,
    `${OUT}/data`,
    `${OUT}/reports`
  ];

  for (const dir of dirs) {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function saveJson(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
}

async function pageReady(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(2500);
}

async function collectBasicPageData(page) {
  return await page.evaluate(() => {
    const cssUrls = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .map((el) => el.href)
      .filter(Boolean);

    const jsUrls = Array.from(document.querySelectorAll("script[src]"))
      .map((el) => el.src)
      .filter(Boolean);

    const imageUrls = Array.from(document.querySelectorAll("img"))
      .map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt || "",
        width: img.naturalWidth,
        height: img.naturalHeight,
        renderedWidth: img.getBoundingClientRect().width,
        renderedHeight: img.getBoundingClientRect().height
      }))
      .filter((item) => item.src);

    const linksButtons = Array.from(document.querySelectorAll("a, button"))
      .map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: (el.innerText || el.textContent || "").trim(),
        href: el.href || "",
        ariaLabel: el.getAttribute("aria-label") || "",
        className: el.className?.toString?.() || ""
      }))
      .filter((item) => item.text || item.href || item.ariaLabel);

    const visibleText = Array.from(document.body.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,button,span,li,div"))
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const text = (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ");
        const style = window.getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(),
          text,
          className: el.className?.toString?.() || "",
          x: Math.round(rect.x),
          y: Math.round(rect.y),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          letterSpacing: style.letterSpacing,
          color: style.color
        };
      })
      .filter((item) => item.text && item.width > 0 && item.height > 0)
      .slice(0, 1000);

    return {
      url: location.href,
      title: document.title,
      cssUrls,
      jsUrls,
      imageUrls,
      linksButtons,
      visibleText
    };
  });
}

async function collectComputedStyles(page) {
  return await page.evaluate(() => {
    const selectors = "section, header, nav, footer, a, button, h1, h2, h3, p, img, video, iframe, [class]";
    return Array.from(document.querySelectorAll(selectors))
      .map((el, index) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        const text = (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 220);

        if (rect.width <= 0 || rect.height <= 0) return null;

        return {
          index,
          tag: el.tagName.toLowerCase(),
          className: el.className?.toString?.() || "",
          id: el.id || "",
          text,
          box: {
            x: Math.round(rect.x),
            y: Math.round(rect.y),
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          },
          style: {
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            lineHeight: style.lineHeight,
            letterSpacing: style.letterSpacing,
            color: style.color,
            backgroundColor: style.backgroundColor,
            borderColor: style.borderColor,
            borderRadius: style.borderRadius,
            padding: style.padding,
            margin: style.margin,
            display: style.display,
            position: style.position,
            zIndex: style.zIndex,
            opacity: style.opacity,
            transform: style.transform
          }
        };
      })
      .filter(Boolean)
      .slice(0, 2500);
  });
}

async function hoverAndShot(page, selector, name) {
  const locator = page.locator(selector).first();

  try {
    if (await locator.count()) {
      await locator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await locator.hover({ timeout: 4000 });
      await page.waitForTimeout(900);
      await page.screenshot({
        path: `${OUT}/screenshots/interactions/${name}.png`,
        fullPage: false
      });
      return { name, selector, ok: true };
    }
  } catch (error) {
    return { name, selector, ok: false, error: error.message };
  }

  return { name, selector, ok: false, error: "selector not found" };
}

async function clickAndShot(page, selector, name) {
  const locator = page.locator(selector).first();

  try {
    if (await locator.count()) {
      await locator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await locator.click({ timeout: 4000 });
      await page.waitForTimeout(900);
      await page.screenshot({
        path: `${OUT}/screenshots/interactions/${name}.png`,
        fullPage: false
      });
      return { name, selector, ok: true };
    }
  } catch (error) {
    return { name, selector, ok: false, error: error.message };
  }

  return { name, selector, ok: false, error: "selector not found" };
}

async function main() {
  await ensureDirs();

  const browser = await chromium.launch({ headless: true });
  const routeSummary = [];

  for (const route of routes) {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1200 },
      deviceScaleFactor: 1
    });

    const url = `${BASE}${route.path}`;
    console.log(`Capturing route: ${url}`);

    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await pageReady(page);

      const html = await page.content();
      await fs.writeFile(`${OUT}/html/${route.name}.html`, html, "utf8");

      const basic = await collectBasicPageData(page);
      await saveJson(`${OUT}/data/${route.name}-basic.json`, basic);

      routeSummary.push({
        name: route.name,
        url,
        ok: true,
        css: basic.cssUrls.length,
        js: basic.jsUrls.length,
        images: basic.imageUrls.length,
        linksButtons: basic.linksButtons.length
      });
    } catch (error) {
      routeSummary.push({
        name: route.name,
        url,
        ok: false,
        error: error.message
      });
    } finally {
      await page.close();
    }
  }

  const homeDataPage = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    deviceScaleFactor: 1
  });

  console.log("Capturing homepage computed styles and full screenshot...");
  await homeDataPage.goto(BASE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await pageReady(homeDataPage);

  await homeDataPage.screenshot({
    path: `${OUT}/screenshots/home-full-1440.png`,
    fullPage: true
  });

  const homeBasic = await collectBasicPageData(homeDataPage);
  const computedStyles = await collectComputedStyles(homeDataPage);

  await saveJson(`${OUT}/data/home-visible-text.json`, homeBasic.visibleText);
  await saveJson(`${OUT}/data/home-assets.json`, homeBasic.imageUrls);
  await saveJson(`${OUT}/data/home-links-buttons.json`, homeBasic.linksButtons);
  await saveJson(`${OUT}/data/home-computed-styles.json`, computedStyles);
  await saveJson(`${OUT}/data/home-layout-1440.json`, computedStyles);

  const interactionResults = [];

  interactionResults.push(await hoverAndShot(homeDataPage, "a, button", "01-first-link-button-hover"));
  interactionResults.push(await hoverAndShot(homeDataPage, "a[href*='work'], .w-dyn-item, [class*='work']", "02-work-card-hover"));
  interactionResults.push(await hoverAndShot(homeDataPage, "section:has-text('Services') a, section:has-text('Services') button, section:has-text('Services') div", "03-service-hover"));
  interactionResults.push(await clickAndShot(homeDataPage, "text=/What services|services do you offer|FAQ/i", "04-faq-click"));
  interactionResults.push(await hoverAndShot(homeDataPage, "text=/Blog|Read|Insights/i", "05-blog-hover"));
  interactionResults.push(await hoverAndShot(homeDataPage, "footer a", "06-footer-link-hover"));

  await saveJson(`${OUT}/data/home-interactions.json`, interactionResults);

  await homeDataPage.close();

  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1
    });

    console.log(`Capturing homepage viewport ${viewport.name}...`);
    await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 60000 });
    await pageReady(page);

    await page.screenshot({
      path: `${OUT}/screenshots/home-${viewport.name}.png`,
      fullPage: false
    });

    await page.close();
  }

  await browser.close();

  await saveJson(`${OUT}/data/routes-summary.json`, routeSummary);

  const summary = `# Mōno Reference Capture Summary

Captured at: ${new Date().toISOString()}

Reference: ${BASE}

## Routes

${routeSummary.map((r) => `- ${r.ok ? "✅" : "❌"} ${r.name}: ${r.url}${r.ok ? ` — CSS ${r.css}, JS ${r.js}, Images ${r.images}, Links/Buttons ${r.linksButtons}` : ` — ${r.error}`}`).join("\n")}

## Main outputs

- HTML: \`reference-capture/html/\`
- Screenshots: \`reference-capture/screenshots/\`
- Interaction screenshots: \`reference-capture/screenshots/interactions/\`
- Data JSON: \`reference-capture/data/\`

## Next step

Ask Codex to read \`reference-capture/\` and create \`reference-audit-v2/\`.
`;

  await fs.writeFile(`${OUT}/reports/CAPTURE_SUMMARY.md`, summary, "utf8");

  console.log("✅ Capture complete. See reference-capture/");
}

main().catch((error) => {
  console.error("❌ Capture failed:", error);
  process.exit(1);
});
