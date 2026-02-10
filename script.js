/* COREFUCK.COM - 2050 INTERACTIVE ENGINE */
document.addEventListener('DOMContentLoaded', () => {
    const ageGate = document.getElementById('age-gate');
    const mainContent = document.getElementById('main-content');
    const btnEnter = document.getElementById('btn-enter');
    const btnLeave = document.getElementById('btn-leave');

    // 1. AGE GATE LOGIC
    // Check localStorage (uncomment to persist)
    // if (localStorage.getItem('ageVerified') === 'true') { enterSite(false); }

    btnEnter.addEventListener('click', () => {
        localStorage.setItem('ageVerified', 'true');
        enterSite(true);
        // Trigger Welcome Sequence
        setTimeout(showWelcomeToast, 800);
    });

    btnLeave.addEventListener('click', () => {
        document.body.innerHTML = `
            <div style="background: #030005; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff; font-family: 'Outfit', sans-serif;">
                <div style="font-size: 3rem; font-weight: 900; margin-bottom: 20px; color: #ff00ff; text-shadow: 0 0 20px #ff00ff;">
                    COREFUCK
                </div>
                <p style="font-size: 1.2rem; color: #00f3ff; letter-spacing: 1px;">ACCESS DENIED: MINOR DETECTED</p>
            </div>
        `;
    });

    function enterSite(animate) {
        mainContent.style.display = 'block';
        if (animate) {
            ageGate.style.transition = 'opacity 0.6s ease';
            ageGate.style.opacity = '0';
            setTimeout(() => { ageGate.remove(); }, 600);
        } else {
            ageGate.remove();
        }
    }

    // 2. REVENUE OPTIMIZER (CrackRevenue Affiliate)
    const affiliateLink = "https://t.amyfc.link/404429/779/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN";

    function maximizeRevenue() {
        const triggers = document.querySelectorAll('.affiliate-trigger, .btn-play, .premium-link, .btn-cta');
        triggers.forEach(btn => {
            if (btn.tagName === 'A') {
                btn.setAttribute('href', affiliateLink);
                btn.setAttribute('target', '_blank');
                btn.setAttribute('rel', 'nofollow noopener noreferrer');
            } else {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.open(affiliateLink, '_blank');
                });
            }
        });
    }

    maximizeRevenue();

    // 3. DYNAMIC WELCOME & PERSONALITY
    function showWelcomeToast() {
        const hour = new Date().getHours();
        let greeting = "Welcome back";
        if (hour < 5) greeting = "Late night cravings?";
        else if (hour < 12) greeting = "Good morning, Master";
        else if (hour < 18) greeting = "Welcome back, Master";
        else greeting = "Ready for some fun tonight?";

        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; bottom: 30px; right: 30px;
            background: rgba(0,0,0,0.8); border: 1px solid #ff00ff;
            color: #fff; padding: 15px 25px; border-radius: 12px;
            box-shadow: 0 0 30px rgba(255,0,255,0.4);
            transform: translateY(100px); transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-family: 'Outfit', sans-serif; font-weight: 600; z-index: 1000;
            display: flex; align-items: center; gap: 10px;
        `;
        toast.innerHTML = `<span style="font-size: 1.5rem;">😈</span> <span>${greeting}</span>`;
        document.body.appendChild(toast);

        // Slide In
        setTimeout(() => { toast.style.transform = 'translateY(0)'; }, 100);
        // Slide Out
        setTimeout(() => { toast.style.transform = 'translateY(150px)'; }, 5000);
    }

    // 4. LIVENESS SIMULATION (Dopamine Hits)
    const originalTitle = document.title;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = "(1) New Message from Elodie... 💖";
        } else {
            document.title = originalTitle;
            // Maybe play a subtle sound or flash an icon?
        }
    });

    function simulateActivity() {
        // Random "Live" status toggle
        const statuses = document.querySelectorAll('.char-status');
        if (statuses.length > 0) {
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            if (Math.random() > 0.5) {
                randomStatus.classList.remove('busy');
                randomStatus.classList.add('online');
                randomStatus.innerHTML = '● LIVE';
                randomStatus.style.color = '#00ff88';
                randomStatus.style.borderColor = '#00ff88';
                randomStatus.style.boxShadow = '0 0 15px rgba(0,255,136,0.5)';
            } else {
                randomStatus.classList.remove('online');
                randomStatus.classList.add('busy');
                randomStatus.innerHTML = '● BUSY';
                randomStatus.style.color = '#ff3366';
                randomStatus.style.borderColor = '#ff3366';
                randomStatus.style.boxShadow = '0 0 15px rgba(255,51,102,0.5)';
            }
        }
    }

    // Pulse random sidebar icons
    function pulseSidebar() {
        const links = document.querySelectorAll('.sidebar-menu a');
        if (links.length > 0) {
            const randomLink = links[Math.floor(Math.random() * links.length)];
            randomLink.style.transition = 'text-shadow 0.3s';
            randomLink.style.textShadow = '0 0 10px #ff00ff';
            setTimeout(() => { randomLink.style.textShadow = 'none'; }, 1000);
        }
    }

    setInterval(simulateActivity, 2500);
    setInterval(pulseSidebar, 8000);

    // 5. FILTERING
    const filterButtons = document.querySelectorAll('.cat-pill');
    const cards = document.querySelectorAll('.char-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.style.display = 'block';
                    // Add pop-in animation
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = 'float 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
