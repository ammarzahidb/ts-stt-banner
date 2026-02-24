// HTML content is read from the static files at the project root
// and served based on the URL path.

import SUPERNOVA_HTML from '../popup-supernova-v2.html';
import XGPT_HTML from '../popup-v3.html';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Popup Banners</title>
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0b1120;
    color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
  }
  .container {
    text-align: center;
  }
  h1 {
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 600;
  }
  .links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
    display: block;
    padding: 16px 32px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  a:hover {
    transform: translateY(-2px);
  }
  .supernova {
    background: #e8a825;
    color: #0a1e5e;
    box-shadow: 0 4px 20px rgba(232,168,37,0.3);
  }
  .xgpt {
    background: #e5383b;
    color: #fff;
    box-shadow: 0 4px 20px rgba(229,56,59,0.3);
  }
</style>
</head>
<body>
<div class="container">
  <h1>Popup Banners</h1>
  <div class="links">
    <a href="/supernova" class="supernova">Supernova Stocks</a>
    <a href="/xgpt" class="xgpt">XGPT</a>
  </div>
</div>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    let html;
    if (path === '/supernova' || path === '/popup-supernova') {
      html = SUPERNOVA_HTML;
    } else if (path === '/xgpt' || path === '/popup-v3') {
      html = XGPT_HTML;
    } else if (path === '/') {
      html = INDEX_HTML;
    } else {
      return new Response('Not Found', { status: 404 });
    }

    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  },
};
