/* ═══════════════════════════════════════════════════════════════
   COREFUCK.COM — VIRAL SHARING & INCENTIVE MARKETING ENGINE
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    const ageGate = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const earningsTicker = document.getElementById('earnings-ticker');
    const btnEnter = document.getElementById('btn-enter');
    const btnLeave = document.getElementById('btn-leave');

    /* ──────────────────────────────────────────────────────────────
       CONFIG — REPLACE WITH YOUR ACTUAL AFFILIATE / LANDING LINK
       ────────────────────────────────────────────────────────────── */
    const SITE_URL = 'https://corefuck.com';
    // ⬇️ PUT YOUR MONEY LINK HERE (ExoClick, JuicyAds, TrafficJunky, CPA offer, etc.)
    const BASE_AFFILIATE_LINK = 'YOUR_AFFILIATE_LINK_HERE';

    /* ──────────────────────────────────────────────────────────────
       0. REFERRAL ID SYSTEM
       ────────────────────────────────────────────────────────────── */
    function generateRefId() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let id = 'CF-';
        for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
        return id;
    }

    function getRefId() {
        let id = localStorage.getItem('cf_ref_id');
        if (!id) {
            id = generateRefId();
            localStorage.setItem('cf_ref_id', id);
        }
        return id;
    }

    function getRefLink() {
        return SITE_URL + '?ref=' + getRefId();
    }

    const MY_REF_ID = getRefId();
    const MY_REF_LINK = getRefLink();

    /* ──────────────────────────────────────────────────────────────
       1. AGE GATE
       ────────────────────────────────────────────────────────────── */
    btnEnter.addEventListener('click', () => {
        localStorage.setItem('ageVerified', 'true');
        enterSite(true);
        setTimeout(showWelcomeToast, 800);
    });

    btnLeave.addEventListener('click', () => {
        document.body.innerHTML = `
            <div style="background: #030005; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-family: 'Outfit', sans-serif;">
                <div style="font-size: 3rem; font-weight: 900; margin-bottom: 20px; background: linear-gradient(135deg, #B8860B, #FFD700, #FFEC8B); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    COREFUCK
                </div>
                <p style="font-size: 1.2rem; color: #FFD700; letter-spacing: 1px;">ACCESS DENIED: MINOR DETECTED</p>
            </div>
        `;
    });

    function enterSite(animate) {
        mainContent.style.display = 'block';
        earningsTicker.style.display = 'block';
        if (animate) {
            ageGate.style.transition = 'opacity 0.6s ease';
            ageGate.style.opacity = '0';
            setTimeout(() => { ageGate.remove(); }, 600);
        } else {
            ageGate.remove();
        }
    }

    /* ──────────────────────────────────────────────────────────────
       2. EARNINGS TICKER
       ────────────────────────────────────────────────────────────── */
    const TICKER_ENTRIES = [
        { emoji: '🚀', name: 'Chad B.', action: 'SHARED', amount: '→ 2,400 new visitors' },
        { emoji: '💎', name: 'Stacy M.', action: 'ASCENDED TO', amount: 'DIAMOND TIER' },
        { emoji: '💸', name: 'Anon_99', action: 'EARNED', amount: '$12,450.00 this month' },
        { emoji: '🔥', name: 'CryptoKing', action: 'REFERRED', amount: '892 new partners' },
        { emoji: '🚀', name: 'AlphaMale', action: 'UNLOCKED', amount: 'ALL EXCLUSIVE ASSETS' },
        { emoji: '💎', name: 'QueenBee', action: 'RECRUITED', amount: '400 NEW PARTNERS' },
        { emoji: '💸', name: 'Wagie_No_More', action: 'HIT', amount: '10K REFERRALS' },
        { emoji: '🔥', name: 'ElonFan', action: 'SHARED → GOT', amount: '4,206 clicks in 1 hour' },
        { emoji: '🚀', name: 'ToTheMoon', action: 'TRENDING ON', amount: 'TWITTER/X 🔥' },
    ];

    function buildTicker() {
        const container = document.getElementById('ticker-content');
        if (!container) return;
        const html = TICKER_ENTRIES.map(e =>
            `<span>${e.emoji} <strong>${e.name}</strong> ${e.action} <strong>${e.amount}</strong></span>`
        ).join('');
        container.innerHTML = html + html;
    }
    buildTicker();

    /* ──────────────────────────────────────────────────────────────
       2.5. SIMULATED CRYPTO COUNTER (FOUNDER)
       ────────────────────────────────────────────────────────────── */
    function animateCrypto() {
        const counter = document.getElementById('live-crypto-counter');
        const netWorth = document.getElementById('founder-worth');
        if (!counter) return;
        let balance = 420.69696969;
        let worth = 9842.21;
        setInterval(() => {
            const increment = (Math.random() * 0.0001) + 0.00001;
            balance += increment;
            counter.innerText = "₿ " + balance.toFixed(8);
            if (Math.random() > 0.8) {
                worth += (Math.random() * 100);
                if (netWorth) netWorth.innerText = "₿ " + worth.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            counter.style.color = '#fff';
            setTimeout(() => { counter.style.color = '#00ff00'; }, 50);
        }, 100);
    }
    animateCrypto();

    /* ──────────────────────────────────────────────────────────────
       3. AFFILIATE LINK ENGINE (GENERIC — NO CRACKREVENUE)
       ────────────────────────────────────────────────────────────── */
    function affLink(sub) {
        if (BASE_AFFILIATE_LINK === 'YOUR_AFFILIATE_LINK_HERE') {
            // If no affiliate link set yet, just link to the site with ref
            return MY_REF_LINK;
        }
        return BASE_AFFILIATE_LINK + (BASE_AFFILIATE_LINK.includes('?') ? '&' : '?') + 'sub=' + encodeURIComponent(sub) + '&ref=' + MY_REF_ID;
    }

    function wireLink(el, sub) {
        if (el.tagName === 'A') {
            el.setAttribute('href', affLink(sub));
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'nofollow noopener noreferrer');
        } else {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(affLink(sub), '_blank');
            });
        }
    }

    function maximizeRevenue() {
        document.querySelectorAll('.btn-cta').forEach(el => wireLink(el, 'hero_cta'));
        const partnerBtn = document.getElementById('become-partner-btn');
        if (partnerBtn) wireLink(partnerBtn, 'sidebar_partner');
        document.querySelectorAll('.char-card.affiliate-trigger').forEach(card => {
            const name = card.querySelector('h3')?.textContent?.trim().split(' ')[0] || 'unknown';
            wireLink(card, 'asset_' + name.toLowerCase());
        });
        document.querySelectorAll('.btn-play').forEach(el => {
            const name = el.closest('.char-card')?.querySelector('h3')?.textContent?.trim().split(' ')[0] || 'unknown';
            wireLink(el, 'earn_' + name.toLowerCase());
        });
        const recruitBtn = document.getElementById('recruit-cta-btn');
        if (recruitBtn) wireLink(recruitBtn, 'recruit_cta');
    }
    maximizeRevenue();

    /* ──────────────────────────────────────────────────────────────
       4. EXIT-INTENT POPUP
       ────────────────────────────────────────────────────────────── */
    let exitShown = false;
    function showExitPopup() {
        if (exitShown || !document.getElementById('main-content')?.style.display || document.getElementById('age-gate')) return;
        exitShown = true;
        const overlay = document.createElement('div');
        overlay.id = 'exit-popup-overlay';
        overlay.innerHTML = `
            <div class="exit-popup">
                <button class="exit-close" id="exit-close-btn">&times;</button>
                <div class="exit-emoji">🔥</div>
                <h2>Wait — Share Your Link First!</h2>
                <p>Your unique referral link is ready. Share it and <span style="color:#FFD700;font-weight:800;">earn on every visitor</span> who joins through you.</p>
                <div style="background:rgba(0,0,0,0.5);border:1px solid #FFD700;border-radius:12px;padding:12px;margin-bottom:1rem;font-family:monospace;color:#FFD700;font-size:0.9rem;word-break:break-all;">${MY_REF_LINK}</div>
                <button class="exit-cta" id="exit-cta-btn">COPY MY LINK & SHARE →</button>
                <p class="exit-subtext">100% free · No signup required · Start earning now</p>
            </div>
        `;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('active'));
        document.getElementById('exit-cta-btn').addEventListener('click', () => {
            copyToClipboard(MY_REF_LINK);
            const btn = document.getElementById('exit-cta-btn');
            btn.textContent = '✅ COPIED! NOW GO SHARE IT';
            btn.style.background = '#00ff00';
            btn.style.color = '#000';
            setTimeout(() => overlay.remove(), 2000);
        });
        document.getElementById('exit-close-btn').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    }
    document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0) showExitPopup();
    });

    /* ──────────────────────────────────────────────────────────────
       5. BANNER ADS (GENERIC)
       ────────────────────────────────────────────────────────────── */
    function injectBannerAds() {
        const hero = document.querySelector('.dashboard-hero');
        if (hero) {
            const topBanner = document.createElement('a');
            topBanner.href = affLink('banner_top');
            topBanner.target = '_blank';
            topBanner.rel = 'nofollow noopener noreferrer';
            topBanner.className = 'cr-banner cr-banner-top';
            topBanner.innerHTML = `
                <span class="banner-badge">🔥</span>
                <span class="banner-text">🚀 <strong>Share Your Link</strong> — Earn on every visitor · 100% Free</span>
                <span class="banner-cta">Get Your Link →</span>
            `;
            topBanner.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('referral-panel')?.scrollIntoView({ behavior: 'smooth' });
            });
            hero.parentNode.insertBefore(topBanner, hero.nextSibling);
        }

        const sticky = document.createElement('div');
        sticky.className = 'cr-banner cr-banner-sticky';
        sticky.innerHTML = `
            <span class="banner-text">💎 <strong>Your Referral Link is Ready</strong> — Share it everywhere. Earn forever.</span>
            <button class="banner-cta-btn" id="sticky-share-btn">Share Now</button>
            <button class="banner-dismiss" onclick="this.closest('.cr-banner-sticky').remove();">&times;</button>
        `;
        document.body.appendChild(sticky);
        setTimeout(() => sticky.classList.add('visible'), 5000);
        sticky.querySelector('#sticky-share-btn')?.addEventListener('click', () => {
            document.getElementById('referral-panel')?.scrollIntoView({ behavior: 'smooth' });
        });

        const cards = document.querySelectorAll('.char-card');
        if (cards.length >= 4) {
            const midBanner = document.createElement('div');
            midBanner.className = 'cr-banner cr-banner-mid char-card';
            midBanner.innerHTML = `
                <div class="mid-banner-inner">
                    <div class="mid-banner-badge">YOUR LINK</div>
                    <div class="mid-banner-icon">🔗</div>
                    <h3>Share & Earn</h3>
                    <p>Get your free referral link</p>
                    <span class="btn-play" style="pointer-events:none;">Share Now →</span>
                </div>
            `;
            midBanner.style.cursor = 'pointer';
            midBanner.addEventListener('click', () => {
                document.getElementById('referral-panel')?.scrollIntoView({ behavior: 'smooth' });
            });
            cards[3].parentNode.insertBefore(midBanner, cards[4] || null);
        }
    }
    injectBannerAds();

    /* ──────────────────────────────────────────────────────────────
       6. WELCOME TOAST
       ────────────────────────────────────────────────────────────── */
    function showWelcomeToast() {
        const hour = new Date().getHours();
        let greeting = "Welcome to the Network";
        if (hour < 5) greeting = "Late night hustle? Let's build.";
        else if (hour < 12) greeting = "Good morning, Partner. Let's grow.";
        else if (hour < 18) greeting = "Welcome back, Partner.";
        else greeting = "Evening session. Time to share.";
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; bottom: 30px; right: 30px;
            background: rgba(0,0,0,0.9); border: 1px solid #FFD700;
            color: #fff; padding: 15px 25px; border-radius: 12px;
            box-shadow: 0 0 30px rgba(255,215,0,0.3);
            transform: translateY(100px); transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-family: 'Outfit', sans-serif; font-weight: 600; z-index: 1000;
            display: flex; align-items: center; gap: 10px;
        `;
        toast.innerHTML = `<span style="font-size: 1.5rem;">🔥</span> <span>${greeting}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.transform = 'translateY(0)'; }, 100);
        setTimeout(() => { toast.style.transform = 'translateY(150px)'; }, 5000);
    }

    /* ──────────────────────────────────────────────────────────────
       7. TAB TITLE NUDGE
       ────────────────────────────────────────────────────────────── */
    const originalTitle = document.title;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = "🔥 Come back & share your link...";
        } else {
            document.title = originalTitle;
        }
    });

    /* ──────────────────────────────────────────────────────────────
       8. CATEGORY FILTERING
       ────────────────────────────────────────────────────────────── */
    const filterButtons = document.querySelectorAll('.cat-pill');
    const allCards = document.querySelectorAll('.char-card:not(.cr-banner-mid)');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            allCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (!category) return;
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.style.display = 'block';
                    card.style.animation = 'none';
                    card.offsetHeight;
                    card.style.animation = 'float 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ══════════════════════════════════════════════════════════════
       VIRAL SHARING ENGINE — THE GROWTH MACHINE
       ══════════════════════════════════════════════════════════════ */

    /* ──────────────────────────────────────────────────────────────
       9. CLIPBOARD UTILITY
       ────────────────────────────────────────────────────────────── */
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
    }

    /* ──────────────────────────────────────────────────────────────
       10. REFERRAL LINK PANEL
       ────────────────────────────────────────────────────────────── */
    function buildReferralPanel() {
        const panel = document.getElementById('referral-panel');
        if (!panel) return;
        const input = panel.querySelector('#ref-link-input');
        const copyBtn = panel.querySelector('#copy-ref-btn');
        const refCode = panel.querySelector('#ref-code-display');

        if (input) input.value = MY_REF_LINK;
        if (refCode) refCode.textContent = MY_REF_ID;

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                copyToClipboard(MY_REF_LINK);
                copyBtn.innerHTML = '✅ COPIED!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '📋 COPY LINK';
                    copyBtn.classList.remove('copied');
                }, 2000);
            });
        }
    }

    /* ──────────────────────────────────────────────────────────────
       11. SOCIAL SHARE BUTTONS
       ────────────────────────────────────────────────────────────── */
    function wireShareButtons() {
        const link = encodeURIComponent(MY_REF_LINK);
        const tweetText = encodeURIComponent("Just found the craziest AI platform 🔥🤖 these AI companions are insane — completely free to explore. Check it out 👀💰");
        const waText = encodeURIComponent("Yo you gotta see this 👀🔥 Free AI companions — " + MY_REF_LINK);
        const tgText = encodeURIComponent("Check out Corefuck — free AI companion network 🔥 " + MY_REF_LINK);
        const redditTitle = encodeURIComponent("Found this free AI companion platform — Corefuck.com is wild 🔥");

        const shareMap = {
            'share-twitter': `https://twitter.com/intent/tweet?text=${tweetText}&url=${link}`,
            'share-telegram': `https://t.me/share/url?url=${link}&text=${tgText}`,
            'share-whatsapp': `https://api.whatsapp.com/send?text=${waText}`,
            'share-reddit': `https://www.reddit.com/submit?url=${link}&title=${redditTitle}`,
        };

        Object.entries(shareMap).forEach(([id, url]) => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener('click', () => {
                    window.open(url, '_blank', 'width=600,height=400');
                    markShared();
                });
            }
        });

        const copyShareBtn = document.getElementById('share-copy');
        if (copyShareBtn) {
            copyShareBtn.addEventListener('click', () => {
                copyToClipboard(MY_REF_LINK);
                copyShareBtn.innerHTML = '✅';
                setTimeout(() => { copyShareBtn.innerHTML = '🔗'; }, 1500);
                markShared();
            });
        }
    }

    /* ──────────────────────────────────────────────────────────────
       12. SHARE-TO-UNLOCK MECHANIC
       ────────────────────────────────────────────────────────────── */
    let hasShared = localStorage.getItem('cf_shared') === 'true';

    function markShared() {
        hasShared = true;
        localStorage.setItem('cf_shared', 'true');
        unlockCards();
    }

    function setupShareToUnlock() {
        const lockedCards = document.querySelectorAll('.char-card-locked');
        if (hasShared) {
            unlockCards();
            return;
        }
        lockedCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (hasShared) return;
                e.preventDefault();
                e.stopPropagation();
                showShareModal();
            });
        });
    }

    function unlockCards() {
        document.querySelectorAll('.char-card-locked').forEach(card => {
            card.classList.remove('char-card-locked');
            card.classList.add('char-card-unlocked');
            const overlay = card.querySelector('.lock-overlay');
            if (overlay) {
                overlay.style.transition = 'opacity 0.5s ease';
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 500);
            }
        });
    }

    function showShareModal() {
        const modal = document.createElement('div');
        modal.className = 'share-modal-overlay';
        modal.innerHTML = `
            <div class="share-modal">
                <button class="exit-close" onclick="this.closest('.share-modal-overlay').remove()">&times;</button>
                <div style="font-size:3rem;margin-bottom:1rem;">🔓</div>
                <h2>Share to Unlock Exclusive Assets</h2>
                <p>Share your referral link on any platform to unlock the 2 exclusive character assets.</p>
                <div class="share-modal-buttons">
                    <button class="share-modal-btn" onclick="window.open('https://twitter.com/intent/tweet?text=${encodeURIComponent("This AI platform is insane 🔥 " + MY_REF_LINK)}','_blank','width=600,height=400');document.querySelector('.share-modal-overlay')?.remove();${hasShared ? '' : 'markSharedGlobal()'}">𝕏 Twitter</button>
                    <button class="share-modal-btn" onclick="window.open('https://api.whatsapp.com/send?text=${encodeURIComponent("Check this out 👀 " + MY_REF_LINK)}','_blank');document.querySelector('.share-modal-overlay')?.remove();markSharedGlobal()">WhatsApp</button>
                    <button class="share-modal-btn" onclick="window.open('https://t.me/share/url?url=${encodeURIComponent(MY_REF_LINK)}','_blank');document.querySelector('.share-modal-overlay')?.remove();markSharedGlobal()">Telegram</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        requestAnimationFrame(() => modal.classList.add('active'));
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    }

    // Expose to inline onclick handlers
    window.markSharedGlobal = markShared;

    /* ──────────────────────────────────────────────────────────────
       13. FLEX CARD (SCREENSHOT BAIT)
       ────────────────────────────────────────────────────────────── */
    function buildFlexCard() {
        const earnings = document.getElementById('flex-earnings');
        const refCodeEl = document.getElementById('flex-ref-code');

        if (refCodeEl) refCodeEl.textContent = MY_REF_ID;

        // Animate fake earnings
        if (earnings) {
            let amount = parseFloat(localStorage.getItem('cf_flex_earnings') || (Math.random() * 200 + 50).toFixed(2));
            earnings.textContent = '$' + amount.toFixed(2);
            setInterval(() => {
                amount += (Math.random() * 0.5) + 0.01;
                localStorage.setItem('cf_flex_earnings', amount.toFixed(2));
                earnings.textContent = '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }, 3000);
        }

        // Download flex card as image
        const dlBtn = document.getElementById('download-flex-card');
        if (dlBtn) {
            dlBtn.addEventListener('click', () => {
                const card = document.getElementById('flex-card-inner');
                if (!card) return;
                // Use canvas to render card
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 600;
                canvas.height = 340;

                // Background
                const grad = ctx.createLinearGradient(0, 0, 600, 340);
                grad.addColorStop(0, '#0a0005');
                grad.addColorStop(1, '#1a0a00');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, 600, 340);

                // Gold border
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 3;
                ctx.roundRect(10, 10, 580, 320, 20);
                ctx.stroke();

                // Logo
                ctx.font = 'bold italic 36px Outfit, Arial, sans-serif';
                ctx.fillStyle = '#FFD700';
                ctx.textAlign = 'left';
                ctx.fillText('COREFUCK', 40, 60);

                // Partner badge
                ctx.font = 'bold 14px Arial, sans-serif';
                ctx.fillStyle = '#000';
                ctx.fillRect(400, 30, 160, 30);
                ctx.fillStyle = '#FFD700';
                ctx.fillRect(402, 32, 156, 26);
                ctx.fillStyle = '#000';
                ctx.textAlign = 'center';
                ctx.fillText('⚡ PARTNER', 480, 51);

                // Ref ID
                ctx.font = '16px monospace';
                ctx.fillStyle = '#888';
                ctx.textAlign = 'left';
                ctx.fillText('REF ID: ' + MY_REF_ID, 40, 100);

                // Tier
                ctx.font = 'bold 20px Arial, sans-serif';
                ctx.fillStyle = '#CD7F32';
                ctx.fillText('🏆 BRONZE TIER', 40, 140);

                // Earnings
                ctx.font = 'bold 48px Arial, sans-serif';
                ctx.fillStyle = '#00ff00';
                ctx.fillText(earnings?.textContent || '$0.00', 40, 210);
                ctx.font = '14px Arial, sans-serif';
                ctx.fillStyle = '#666';
                ctx.fillText('LIFETIME EARNINGS (SIMULATED)', 40, 235);

                // URL
                ctx.font = 'bold 16px Arial, sans-serif';
                ctx.fillStyle = '#FFD700';
                ctx.textAlign = 'center';
                ctx.fillText('🔗 ' + MY_REF_LINK, 300, 300);

                // Download
                const link = document.createElement('a');
                link.download = 'corefuck-partner-card.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    }

    /* ──────────────────────────────────────────────────────────────
       14. REFERRAL LEADERBOARD
       ────────────────────────────────────────────────────────────── */
    const LEADERBOARD_NAMES = [
        'ShadowKing', 'NeonQueen', 'CryptoWolf', 'DarkHorse', 'GoldDigger69',
        'AnonBoss', 'MoonRider', 'ViperX', 'PhantomStar', 'AlphaHustler',
        'IceQueen', 'FireStarter', 'NightOwl', 'PixelKing', 'CashFlow'
    ];

    function buildLeaderboard() {
        const tbody = document.getElementById('leaderboard-body');
        if (!tbody) return;

        function generateRows() {
            const rows = LEADERBOARD_NAMES.slice(0, 10).map((name, i) => {
                const refs = Math.floor(Math.random() * 5000) + (10 - i) * 500;
                const earned = (refs * (Math.random() * 5 + 2)).toFixed(2);
                const medals = ['👑', '🥈', '🥉'];
                const rank = i < 3 ? medals[i] : (i + 1);
                return `<tr class="${i < 3 ? 'top-three' : ''}">
                    <td class="lb-rank">${rank}</td>
                    <td class="lb-name">${name}</td>
                    <td class="lb-refs">${refs.toLocaleString()}</td>
                    <td class="lb-earned">$${parseFloat(earned).toLocaleString()}</td>
                </tr>`;
            }).join('');

            // Add "YOU" row
            const yourRefs = Math.floor(Math.random() * 10);
            const yourEarned = (yourRefs * 2.5).toFixed(2);
            const youRow = `<tr class="you-row">
                <td class="lb-rank">—</td>
                <td class="lb-name">YOU <span class="you-badge">← YOU</span></td>
                <td class="lb-refs">${yourRefs}</td>
                <td class="lb-earned">$${yourEarned}</td>
            </tr>`;

            tbody.innerHTML = rows + youRow;
        }

        generateRows();
        // Refresh every 8 seconds for liveness
        setInterval(generateRows, 8000);
    }

    /* ──────────────────────────────────────────────────────────────
       15. EMBED WIDGET CODE
       ────────────────────────────────────────────────────────────── */
    function buildEmbedWidget() {
        const codeArea = document.getElementById('embed-code');
        const copyBtn = document.getElementById('copy-embed-btn');
        if (!codeArea) return;

        const embedCode = `<!-- Corefuck Partner Widget -->
<a href="${MY_REF_LINK}" target="_blank" rel="noopener" style="display:inline-block;background:linear-gradient(135deg,#0a0005,#1a0a00);border:2px solid #FFD700;border-radius:16px;padding:16px 28px;text-decoration:none;font-family:Arial,sans-serif;box-shadow:0 0 30px rgba(255,215,0,0.3);transition:transform 0.3s;">
  <span style="display:block;font-size:1.4rem;font-weight:900;font-style:italic;color:#FFD700;margin-bottom:4px;">COREFUCK</span>
  <span style="display:block;font-size:0.85rem;color:#ccc;">🔥 Free AI Companions · Join Now</span>
</a>`;

        codeArea.value = embedCode;

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                copyToClipboard(embedCode);
                copyBtn.textContent = '✅ Copied!';
                setTimeout(() => { copyBtn.textContent = '📋 Copy Code'; }, 2000);
            });
        }
    }

    /* ──────────────────────────────────────────────────────────────
       16. QR CODE GENERATOR (INLINE — NO DEPENDENCIES)
       ────────────────────────────────────────────────────────────── */
    // Minimal QR code generator (alphanumeric mode, error correction L)
    function generateQR(text) {
        // Use a simple SVG-based QR approach via a public API-free method
        // We'll create a visual QR using a canvas with a grid pattern
        // For a real production site, use qrcode.js — this creates a stylized "QR-like" visual
        const canvas = document.getElementById('qr-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const size = 200;
        canvas.width = size;
        canvas.height = size;

        // Background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, size, size);

        // Generate deterministic pattern from text
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
        }

        const modules = 21; // QR v1
        const cellSize = Math.floor(size / (modules + 2));
        const offset = Math.floor((size - cellSize * modules) / 2);

        // Draw finder patterns (the 3 big squares)
        function drawFinder(x, y) {
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(offset + x * cellSize, offset + y * cellSize, 7 * cellSize, 7 * cellSize);
            ctx.fillStyle = '#000';
            ctx.fillRect(offset + (x + 1) * cellSize, offset + (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(offset + (x + 2) * cellSize, offset + (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
        }

        drawFinder(0, 0);
        drawFinder(modules - 7, 0);
        drawFinder(0, modules - 7);

        // Fill data area with pseudo-random pattern seeded by text
        let seed = Math.abs(hash);
        for (let row = 0; row < modules; row++) {
            for (let col = 0; col < modules; col++) {
                // Skip finder pattern areas
                if ((row < 8 && col < 8) || (row < 8 && col >= modules - 8) || (row >= modules - 8 && col < 8)) continue;

                seed = (seed * 16807 + 1) % 2147483647;
                if (seed % 3 !== 0) {
                    ctx.fillStyle = '#FFD700';
                    ctx.fillRect(offset + col * cellSize, offset + row * cellSize, cellSize, cellSize);
                }
            }
        }

        // Download button
        const dlBtn = document.getElementById('download-qr-btn');
        if (dlBtn) {
            dlBtn.addEventListener('click', () => {
                const link = document.createElement('a');
                link.download = 'corefuck-qr-' + MY_REF_ID + '.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    }

    /* ──────────────────────────────────────────────────────────────
       INIT — Build all viral components after age gate
       ────────────────────────────────────────────────────────────── */
    const _origEnter = enterSite;

    // We need to init viral components when site is entered
    function initViralEngine() {
        buildReferralPanel();
        wireShareButtons();
        setupShareToUnlock();
        buildFlexCard();
        buildLeaderboard();
        buildEmbedWidget();
        generateQR(MY_REF_LINK);
    }

    // Hook into age gate
    const origBtnHandler = btnEnter.onclick;
    btnEnter.addEventListener('click', () => {
        setTimeout(initViralEngine, 700);
    });

    // If already verified
    if (localStorage.getItem('ageVerified') === 'true') {
        enterSite(false);
        initViralEngine();
    }
});
