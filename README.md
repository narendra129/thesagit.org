# The Security Analytics Group

Static website for [thesagit.org](https://thesagit.org) — a cyber security services company based in Waddell, AZ.

## Structure

```
index.html          Main page
css/styles.css      All styles
js/main.js          Carousel, mobile menu, scroll-to-top
images/             Logo and section photos
```

## Local Preview

Open `index.html` in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deployment

Upload the entire folder to any static host (Netlify, GitHub Pages, AWS S3, cPanel, etc.). No build step required.

## Site Sections

- **Home** — Hero with company introduction
- **Welcome** — Content carousel
- **About Us** — Company overview
- **Services** — Network Protection, Training, Security as a Service, Risk and Compliance, Staff Augmentation
- **Certifications** — UEI, CAGE, AZ Supplier ID, NAICS codes and SBA badges
- **Contact** — Email and location map
