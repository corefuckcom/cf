# 🏠 24/7 Secure Home Hosting Guide

Hosting a website on your home PC can expose you to DDoS attacks, hackers, and slow down your connection.
**BUT**, we can use **Cloudflare Tunnel** (formerly Argo Tunnel) to solve all these problems.

*   **🛡️ 100% Safe:** No open router ports. Your IP is hidden.
*   **🚀 Fast:** Cloudflare caches your images, so your PC doesn't get hit by every visitor.
*   **🔒 Free SSL:** Automatic HTTPS.
*   **💰 Cost:** $0 (Free plan).

---

## ✅ Step 1: Prep Your Domain
1.  Sign up for a free account at [Cloudflare.com](https://dash.cloudflare.com/sign-up).
2.  Add your domain `corefuck.com` to Cloudflare.
3.  Cloudflare will give you **2 Nameservers** (e.g., `bob.ns.cloudflare.com`).
4.  Go to where you bought your domain (Porkbun/Namecheap) and change the "Nameservers" to the two Cloudflare ones.
5.  Wait ~15 mins for it to activate.

## 💻 Step 2: Start Your Local Web Server
You need a small program to "serve" your files to the tunnel.
Since you have Python installed, this is built-in!

1.  Open **Command Prompt (cmd)** or **PowerShell**.
2.  Type: `cd "c:\Users\WhiteLight\Documents\apps\corefuck website"`
3.  Type: `python -m http.server 8080`
4.  **Keep this window OPEN.** This is your web server running locally on port 8080.

## 🚇 Step 3: Install & Connect the Tunnel
1.  Download **cloudflared** (Windows 64-bit) from here:
    *   [Download Link](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe)
2.  Rename the downloaded file to just `cloudflared.exe`.
3.  Move it to your project folder (`c:\Users\WhiteLight\Documents\apps\corefuck website`).
4.  Open a **NEW** PowerShell window (as Administrator) in that folder.
5.  Login to Cloudflare:
    ```powershell
    .\cloudflared.exe tunnel login
    ```
    *(A browser window will open. Select your domain `corefuck.com` to authorize)*.

6.  Create the tunnel:
    ```powershell
    .\cloudflared.exe tunnel create my-home-server
    ```
    *(Copy the Tunnel ID it gives you, e.g., `a1b2c3d4...`)*.

7.  Route the tunnel to your domain:
    ```powershell
    .\cloudflared.exe tunnel route dns my-home-server corefuck.com
    ```

8.  **The Magic Step:** Connect your Python server to the world:
    ```powershell
    .\cloudflared.exe tunnel run --url http://localhost:8080 my-home-server
    ```

## 🎉 You Are Live!
*   Go to `https://corefuck.com` on your phone. It should load!
*   **Security:** Users only see Cloudflare's IP, not yours.
*   **Speed:** Cloudflare caches the heavy stuff.

---

## ⚠️ Vital Considerations

### 1. The "24/7" Part
*   Your PC must **NEVER sleep** or turn off.
    *   Go to **Power & Sleep Settings** -> set "Sleep" to "Never".
*   If your PC restarts (Windows Update), the site goes down until you restart the Python server and the Tunnel.

### 2. Legal / ISP Warning
*   Some residential ISPs (Comcast, AT&T, Rogers) technically ban running "servers".
*   However, since you are using a **Tunnel** (outbound connection) and not opening ports (inbound), they typically **cannot detect it** easily. It just looks like regular browsing traffic.

### 3. Better Alternative: GitHub Pages (Recommended)
Since your site is **static** (HTML/CSS/JS only), you can host it on **GitHub Pages** for free.
*   **Pros:** 100% Uptime (even if your PC is off), Faster, Zero Risk to your home IP.
*   **Cons:** You need to push code updates to GitHub.
