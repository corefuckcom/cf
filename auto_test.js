document.addEventListener("DOMContentLoaded", () => {
    console.log("🔧 Auto-Test Module Loaded");

    // Wait 1.5 seconds so you can see the page load first
    setTimeout(() => {
        const btn = document.getElementById("btn-enter");
        if (btn) {
            console.log("🖱️ Found Enter Button - Auto-clicking...");

            // 1. Visual Feedback (User sees "me" pointing at it)
            btn.style.transition = "all 0.3s ease";
            btn.style.transform = "scale(1.1)";
            btn.style.boxShadow = "0 0 30px #00ff00, inset 0 0 10px #00ff00";
            btn.style.borderColor = "#00ff00";
            btn.style.color = "#00ff00";
            btn.innerHTML = "VERIFYING... 🤖";

            // 2. Click it after a short delay
            setTimeout(() => {
                btn.click();
                console.log("✅ Clicked! Welcome to Corefuck.");

                // 3. Demonstrate scrolling to content
                setTimeout(() => {
                    console.log("📜 Scrolling to characters...");
                    const characters = document.querySelector('.character-section');
                    if (characters) {
                        characters.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 1000);

            }, 800);
        }
    }, 1500);
});
