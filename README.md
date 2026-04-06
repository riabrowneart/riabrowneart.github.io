# Ria Browne Art

Personal art portfolio — [riabrowneart.github.io](https://riabrowneart.github.io)

---

## How to push to GitHub Pages

GitHub Pages automatically serves your site from the `main` branch. After making any changes:

```bash
cd ~/Downloads/riabrowneart.github.io

git add .
git commit -m "your message here"
git push origin main
```

Your site will be live at `https://riabrowneart.github.io` within a minute or two.

---

## Project structure

```
riabrowneart.github.io/
├── index.html       # All page content (header, gallery, about, contact, footer)
├── style.css        # All styles, organised by section
├── script.js        # Lightbox only — no frameworks
├── images/          # Artwork images
└── README.md
```

---

## How to add a new artwork image

1. Copy your image into the `images/` folder.
2. In `index.html`, add a new `<figure>` inside `.gallery-grid`:

```html
<figure class="gallery-item" data-index="7">
  <img src="images/YourNewImage.jpeg" alt="Your Title" loading="lazy" />
</figure>
```

Increment `data-index` by 1 each time (the last image is currently `6`).

---

## How to add a new section (e.g. Sculpture, Exhibitions, Music)

1. In `index.html`, add a nav link:
```html
<a href="#sculpture">Sculpture</a>
```

2. Add a new section below the existing ones:
```html
<!-- ===================== SCULPTURE ===================== -->
<section id="sculpture" class="section-sculpture">
  <div class="section-inner">
    <h2>Sculpture</h2>
    <!-- your content here -->
  </div>
</section>
```

3. In `style.css`, find the comment block that matches (e.g. `/* ===================== ADD NEW SECTIONS ABOVE FOOTER ===================== */`) and add your styles there, following the same pattern as existing sections.

---

## Contact form

The contact form uses [Formspree](https://formspree.io). Submissions go directly to your linked email — no server needed. The form ID is already configured.
