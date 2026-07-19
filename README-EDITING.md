# Editing Aditya Kumar's Portfolio

This site is a simple one-page Next.js portfolio. Most text, links, services, and projects are easy to edit in one file.

## 1. Run the website locally

Open a terminal in this folder and run:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:3000
```

## 2. Change the name

Open `app/page.tsx` and find:

```ts
const siteConfig = {
```

Change the `name` value.

## 3. Change the WhatsApp number

In `app/page.tsx`, edit these values inside `siteConfig`:

```ts
whatsappDisplay
whatsappUrl
```

The display number is what visitors see. The URL is what opens WhatsApp.

## 4. Change Instagram

In `app/page.tsx`, edit this value inside `siteConfig`:

```ts
instagramUrl
```

## 5. Replace the profile photo

Add your profile photo to:

```bash
public/portfolio/aditya.webp
```

Then open `app/page.tsx` and set:

```ts
profileImage: "/portfolio/aditya.webp"
```

Use a tall portrait image for the best result.

## 6. Replace the sample videos

Replace these files:

```bash
public/portfolio/sample-reel.mp4
public/portfolio/green-screen-edit.mp4
```

Also replace their poster images:

```bash
public/portfolio/sample-reel-poster.jpg
public/portfolio/green-screen-poster.jpg
```

Keep the first video vertical and the second video landscape.

## 7. Add another graphic design project

Open `app/page.tsx` and find:

```ts
const designWork = [
```

Copy one project object, paste it before the closing `]`, and update:

```ts
title
type
year
image
alt
```

Put the new image in `public/portfolio/` first.

## 8. Change the colors

Open `app/globals.css` and edit the color variables near the top:

```css
--paper
--black
--muted
--lime
--white
```

## 9. Change headings and descriptions

Most headings and paragraphs are in `app/page.tsx`. Search for the text you want to change and edit it directly.

## 10. Build for production

Run:

```bash
npm run build
```

If the build finishes without errors, the site is ready for production.
