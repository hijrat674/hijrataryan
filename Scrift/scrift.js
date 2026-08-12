const body = document.body;
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");
const revealItems = document.querySelectorAll(".reveal");
const sectionNodes = document.querySelectorAll("main section[id]");
const themeStorageKey = "ha-portfolio-theme";

const applyTheme = (theme, persist = true) => {
    body.dataset.theme = theme;

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
        themeToggle.setAttribute(
            "aria-label",
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        );
    }

    if (persist) {
        localStorage.setItem(themeStorageKey, theme);
    }
};

// Always open the portfolio in its light theme; visitors can still switch themes manually.
applyTheme("light", false);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18
        }
    );

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });

    const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const activeId = `#${entry.target.id}`;
                navLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === activeId);
                });
            });
        },
        {
            rootMargin: "-20% 0px -55% 0px",
            threshold: 0.2
        }
    );

    sectionNodes.forEach((section) => {
        sectionObserver.observe(section);
    });
} else {
    revealItems.forEach((item) => {
        item.classList.add("visible");
    });
}
