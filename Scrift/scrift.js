const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const revealItems = document.querySelectorAll(".reveal");
const themeStorageKey = "ha-portfolio-theme";
const translate = (text) => window.portfolioLanguage?.translate(text) ?? text;

const updateThemeLabel = () => {
    themeToggle?.setAttribute(
        "aria-label",
        translate(body.dataset.theme === "dark" ? "Switch to light mode" : "Switch to dark mode")
    );
};

const applyTheme = (theme, persist = true) => {
    body.dataset.theme = theme;

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
        updateThemeLabel();
    }

    if (persist) {
        try {
            localStorage.setItem(themeStorageKey, theme);
        } catch {
            // The control still works when browser storage is unavailable.
        }
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

// Track section positions so tall project galleries keep the correct tab active.
const navLinks = Array.from(document.querySelectorAll(".site-nav a, .mobile-nav a"));
const navTargets = Array.from(document.querySelectorAll("main[id], main section[id]"));
const header = document.querySelector(".site-header");
let navigationFrame = 0;

const updateNavigation = () => {
    navigationFrame = 0;
    const marker = (header ? header.getBoundingClientRect().bottom : 0) + 40;
    let activeId = "#home";
    navTargets.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) {
            activeId = `#${section.id}`;
        }
    });
    if (window.scrollY > 0 && Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) {
        activeId = "#contact";
    }
    // The bottom bar uses Projects for the work showcase as well as the gallery.
    navLinks.forEach((link) => {
        const linkId = link.getAttribute("href");
        const active = linkId === activeId || (
            activeId === "#work" && linkId === "#projects" && link.closest(".mobile-nav")
        );
        link.classList.toggle("is-active", Boolean(active));
        if (active) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
};

const scheduleNavigation = () => {
    if (!navigationFrame) navigationFrame = requestAnimationFrame(updateNavigation);
};
window.addEventListener("scroll", scheduleNavigation, { passive: true });
window.addEventListener("resize", scheduleNavigation);
window.addEventListener("load", scheduleNavigation);
window.addEventListener("hashchange", scheduleNavigation);
updateNavigation();

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
            threshold: 0,
            rootMargin: "0px 0px -24px 0px"
        }
    );

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });

} else {
    revealItems.forEach((item) => {
        item.classList.add("visible");
    });
}

// Keep every project readable without JavaScript; enhance with category filters.
const projectToolbar = document.querySelector('.project-toolbar');
const projectFilters = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('#projects [data-category]');
const projectCount = document.querySelector('.project-count');
const updateProjectCount = () => {
    if (!projectCount) return;
    const count = Array.from(projectCards).filter((card) => !card.hidden).length;
    projectCount.textContent = window.portfolioLanguage?.formatProjectCount(count)
        ?? `${count} ${count === 1 ? 'project' : 'projects'}`;
};
if (projectToolbar && projectCount && projectCards.length) {
    projectToolbar.hidden = false;
    updateProjectCount();
    projectFilters.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;
            projectCards.forEach((card) => {
                const visible = category === 'all' || card.dataset.category === category;
                card.hidden = !visible;
            });
            projectFilters.forEach((filter) => {
                const selected = filter === button;
                filter.classList.toggle('is-selected', selected);
                filter.setAttribute('aria-pressed', String(selected));
            });
            updateProjectCount();
            scheduleNavigation();
        });
    });
}

window.addEventListener('portfolio:languagechange', () => {
    updateThemeLabel();
    updateProjectCount();
    scheduleNavigation();
});
