/* COREFUCK.COM — MLM DIGITAL ASSET NETWORK ENGINE */
document.addEventListener('DOMContentLoaded', () => {
    const ageGate = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const earningsTicker = document.getElementById('earnings-ticker');
    const btnEnter = document.getElementById('btn-enter');
    const btnLeave = document.getElementById('btn-leave');

    // ── 1. AGE GATE ─────────────────────────────────────────────
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

    // ── 2. EARNINGS TICKER ──────────────────────────────────────
    const TICKER_ENTRIES = [
        { emoji: '🚀', name: 'Chad B.', action: 'WTHDREW', amount: '₿ 0.45 ($28,000)' },
        { emoji: '💎', name: 'Stacy M.', action: 'ASCENDED TO', amount: 'ILLUMINATI TIER' },
        { emoji: '💸', name: 'Anon_99', action: 'PRINTED', amount: '$12,450.00 today' },
        { emoji: '🔥', name: 'CryptoKing', action: 'MINTED', amount: 'NFT ASSET #442' },
        { emoji: '🚀', name: 'AlphaMale', action: 'EXTRACTED', amount: '$9,200.00' },
        { emoji: '💎', name: 'QueenBee', action: 'RECRUITED', amount: '400 NEW DRONES' },
        { emoji: '💸', name: 'Wagie_No_More', action: 'QUIT JOB', amount: 'FOREVER' },
        { emoji: '🔥', name: 'ElonFan', action: 'EARNED', amount: '$4,206.90 in 1 hour' },
        { emoji: '🚀', name: 'ToTheMoon', action: 'BOUGHT', amount: 'LAMBO (Yellow)' },
    ];

    function buildTicker() {
        const container = document.getElementById('ticker-content');
        if (!container) return;

        // Build entries twice for seamless loop
        const html = TICKER_ENTRIES.map(e =>
            `<span>${e.emoji} <strong>${e.name}</strong> ${e.action} <strong>${e.amount}</strong></span>`
        ).join('');

        container.innerHTML = html + html;
    }

    buildTicker();

    // ── 2.5 SIMULATED CRYPTO MINING (FOUNDER) ───────────────────
    function animateCrypto() {
        const counter = document.getElementById('live-crypto-counter');
        const netWorth = document.getElementById('founder-worth');
        if (!counter) return;

        let balance = 420.69696969;
        let worth = 9842.21;

        setInterval(() => {
            // Random small increment
            const increment = (Math.random() * 0.0001) + 0.00001;
            balance += increment;

            // Format to 8 decimal places for BTC look
            counter.innerText = "₿ " + balance.toFixed(8);

            // Occasionally jump the net worth
            if (Math.random() > 0.8) {
                worth += (Math.random() * 100);
                if (netWorth) netWorth.innerText = "₿ " + worth.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            // Flash effect
            counter.style.color = '#fff';
            setTimeout(() => { counter.style.color = '#00ff00'; }, 50);

        }, 100); // Super fast updates
    }

    animateCrypto();

    // ── 3. AFFILIATE LINK ENGINE ────────────────────────────────
    const BASE_LINK = "https://t.vlmai-3.com/404429/6646?aff_sub5=SF_006OG000004lmDN";

    function affLink(sub) {
        return BASE_LINK + "&aff_sub=" + encodeURIComponent(sub);
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
        // Hero CTA
        document.querySelectorAll('.btn-cta').forEach(el => wireLink(el, 'hero_cta'));
        // Partner sidebar link
        const partnerBtn = document.getElementById('become-partner-btn');
        if (partnerBtn) wireLink(partnerBtn, 'sidebar_partner');
        // Character cards (use character name as sub-ID)
        document.querySelectorAll('.char-card.affiliate-trigger').forEach(card => {
            const name = card.querySelector('h3')?.textContent?.trim().split(' ')[0] || 'unknown';
            wireLink(card, 'asset_' + name.toLowerCase());
        });
        // Earn buttons inside cards
        document.querySelectorAll('.btn-play').forEach(el => {
            const name = el.closest('.char-card')?.querySelector('h3')?.textContent?.trim().split(' ')[0] || 'unknown';
            wireLink(el, 'earn_' + name.toLowerCase());
        });
        // Recruit CTA
        const recruitBtn = document.getElementById('recruit-cta-btn');
        if (recruitBtn) wireLink(recruitBtn, 'recruit_cta');
    }

    maximizeRevenue();

    // ── 4. EXIT-INTENT POPUP ────────────────────────────────────
    let exitShown = false;
    function showExitPopup() {
        if (exitShown || !document.getElementById('main-content')?.style.display || document.getElementById('age-gate')) return;
        exitShown = true;

        const overlay = document.createElement('div');
        overlay.id = 'exit-popup-overlay';
        overlay.innerHTML = `
            <div class="exit-popup">
                <button class="exit-close" id="exit-close-btn">&times;</button>
                <div class="exit-emoji">💰</div>
                <h2>Wait — You're Leaving Money on the Table!</h2>
                <p>Join our <span style="color:#FFD700;font-weight:800;">FREE Partner Program</span> and start earning commissions on AI companion subscriptions. No fees. No risk.</p>
                <button class="exit-cta" id="exit-cta-btn">JOIN FREE — START EARNING →</button>
                <p class="exit-subtext">Free to join · No credit card required · Canadian compliant</p>
            </div>
        `;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('active'));

        document.getElementById('exit-cta-btn').addEventListener('click', () => {
            window.open(affLink('exit_popup'), '_blank');
            overlay.remove();
        });
        document.getElementById('exit-close-btn').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    }

    document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0) showExitPopup();
    });

    // ── 5. BANNER ADS ───────────────────────────────────────────
    function injectBannerAds() {
        // Top banner — after hero
        const hero = document.querySelector('.dashboard-hero');
        if (hero) {
            const topBanner = document.createElement('a');
            topBanner.href = affLink('banner_top');
            topBanner.target = '_blank';
            topBanner.rel = 'nofollow noopener noreferrer';
            topBanner.className = 'cr-banner cr-banner-top';
            topBanner.innerHTML = `
                <span class="banner-badge">AD</span>
                <span class="banner-text">🔥 <strong>Earn $400+/Day</strong> — Join the #1 AI Affiliate Network Free</span>
                <span class="banner-cta">Start Now →</span>
            `;
            hero.parentNode.insertBefore(topBanner, hero.nextSibling);
        }

        // Bottom sticky banner
        const sticky = document.createElement('a');
        sticky.href = affLink('banner_sticky');
        sticky.target = '_blank';
        sticky.rel = 'nofollow noopener noreferrer';
        sticky.className = 'cr-banner cr-banner-sticky';
        sticky.innerHTML = `
            <span class="banner-text">💎 <strong>Build Your AI Empire</strong> — Free to join. Unlimited earning potential.</span>
            <span class="banner-cta">Join Free</span>
            <button class="banner-dismiss" onclick="event.preventDefault();event.stopPropagation();this.closest('.cr-banner-sticky').remove();">&times;</button>
        `;
        document.body.appendChild(sticky);
        setTimeout(() => sticky.classList.add('visible'), 5000);

        // Mid-grid banner — after 4th card
        const cards = document.querySelectorAll('.char-card');
        if (cards.length >= 4) {
            const midBanner = document.createElement('a');
            midBanner.href = affLink('banner_mid');
            midBanner.target = '_blank';
            midBanner.rel = 'nofollow noopener noreferrer';
            midBanner.className = 'cr-banner cr-banner-mid char-card';
            midBanner.innerHTML = `
                <div class="mid-banner-inner">
                    <div class="mid-banner-badge">PARTNER OPPORTUNITY</div>
                    <div class="mid-banner-icon">💎</div>
                    <h3>Become a Diamond</h3>
                    <p>50% recurring commissions</p>
                    <span class="btn-play" style="pointer-events:none;">Join Free →</span>
                </div>
            `;
            cards[3].parentNode.insertBefore(midBanner, cards[4] || null);
        }
    }

    injectBannerAds();

    // ── 6. WELCOME TOAST ────────────────────────────────────────
    function showWelcomeToast() {
        const hour = new Date().getHours();
        let greeting = "Welcome to the Network";
        if (hour < 5) greeting = "Late night hustle? Let's make money.";
        else if (hour < 12) greeting = "Good morning, Partner. Let's build.";
        else if (hour < 18) greeting = "Welcome back, Partner.";
        else greeting = "Evening session. Time to earn.";

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
        toast.innerHTML = `<span style="font-size: 1.5rem;">💰</span> <span>${greeting}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.transform = 'translateY(0)'; }, 100);
        setTimeout(() => { toast.style.transform = 'translateY(150px)'; }, 5000);
    }

    // ── 7. TAB TITLE NUDGE ──────────────────────────────────────
    const originalTitle = document.title;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = "💰 You're missing out on earnings...";
        } else {
            document.title = originalTitle;
        }
    });

    // ── 8. CATEGORY FILTERING ───────────────────────────────────
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
});
