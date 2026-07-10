import { createWriteStream, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import https from 'node:https';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const mediaDir = join(root, 'public', 'media');

const assets = [
  ['hero-architecture.jpg', 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2000&q=85'],
  ['hero-workspace.jpg', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85'],
  ['hero-interior.jpg', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85'],
  ['hero-laptop.jpg', 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=2000&q=85'],
  ['hero-studio.jpg', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=85'],
  ['work-edmaxex.jpg', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=85'],
  ['work-budgetbites.jpg', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=85'],
  ['work-hm-bi.jpg', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=85'],
  ['work-ai-tryon.jpg', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2200&q=85'],
  ['work-leadpilot.jpg', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=85'],
  ['work-portfolio.jpg', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85'],
  ['showreel-thumb.jpg', 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2200&q=85'],
  ['showreel.mp4', 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4'],
  ['portrait-01.jpg', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85'],
  ['portrait-02.jpg', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85'],
  ['portrait-03.jpg', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85'],
  ['success-story.jpg', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85'],
  ['contact-backdrop.jpg', 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=2200&q=85'],
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'sahil-mono-portfolio-media-downloader' } }, async (response) => {
      if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        resolve(download(response.headers.location, filePath));
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed ${url}: HTTP ${response.statusCode}`));
        return;
      }

      try {
        await pipeline(response, createWriteStream(filePath));
        resolve(undefined);
      } catch (error) {
        reject(error);
      }
    }).on('error', reject);
  });
}

mkdirSync(mediaDir, { recursive: true });

for (const [filename, url] of assets) {
  const filePath = join(mediaDir, filename);
  console.log(`Downloading ${filename}`);
  await download(url, filePath);
}

console.log(`Downloaded ${assets.length} media files to ${mediaDir}`);
