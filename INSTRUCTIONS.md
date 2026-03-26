# 📋 MASTER TASK LIST & LINKS

Here is your checklist to go live with **Corefuck.com**.

## 🚀 1. Acquisition (Links)
You need "Adult Friendly" services. **Do not use standard hosts** (like Bluehost/GoDaddy) as they may ban you.

- [ ] **Buy Domain / Check DNS**: You own `corefuck.com`.
  - *Keep using this.* No need for `.ai`.
- [ ] **Get Hosting** (Choose one):
  - [ ] **Porkbun** (Recommended): [https://porkbun.com](https://porkbun.com)
    - *Why:* Cheap, privacy-first, very adult-friendly.
  - [ ] **Namecheap**: [https://namecheap.com](https://namecheap.com)
    - *Why:* Reliable, accepts 18+ content.
  - [ ] **OrangeWebsite**: [https://www.orangewebsite.com](https://www.orangewebsite.com)
    - *Why:* Offshore (Iceland), maximum freedom of speech/content.

## 🛠️ 2. Website Setup (Your Job)
The code is ready. Now you need to put your "stuff" in it.

- [ ] **Generate/Download Images**:
  - You need 12 images for the characters.
  - See `IMAGE_PROMPTS.md` for specific AI prompts to generate these.
  - Name them: `c1.jpg` to `c12.jpg` (matching the characters in `index.html`).
  - Put them in the `images/` folder, replacing the current placeholders.
- [ ] **Update Image Code**:
  - *Already done!* `index.html` is pre-configured to look for `images/c1.jpg` through `images/c12.jpg`.
- [ ] **Add Your Money Links**:
  - Open `script.js`.
  - Look for `const BASE_LINK`.
  - Replace the current link with your actual **CrackRevenue Smartlink**.

## 🚀 3. Deployment (Go Live)
- [ ] **Upload Files**:
  - Upload `index.html`, `style.css`, `script.js`, `terms.html`, `privacy.html`, and your images to the `public_html` folder of your host.
- [ ] **Test**:
  - Go to `corefuck.com`.
  - Click the "Enter" button.
  - Click a "Play" button -> Ensure it goes to your affiliate link.

## ✅ Completed Tasks (What I did)
- [x] **Design**: Premium "Candy.ai" Style (Dark/Purple).
- [x] **Age Gate**: Pornhub-style compliance gate (18+).
- [x] **Legal**: Created Terms of Service & Privacy Policy pages.
- [x] **Domain**: Updated branding to **COREFUCK.COM**.
- [x] **SEO**: Implemented "Liveness" simulation and meta tags.
