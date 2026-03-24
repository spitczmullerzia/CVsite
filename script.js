(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Language toggle (EN/HU) with persistence + browser default
  const LANG_KEY = "cv_lang";
  const langToggle = $("#lang-toggle");
  const langToggleText = $("#lang-toggle-text");

  const dict = {
    en: {
      page_title: "Zia Spitczmüller — CV",
      meta_description:
        "CV website for Zia Spitczmüller — International Business student at Corvinus University of Budapest.",
      skip_to_content: "Skip to content",
      back_to_top_label: "Back to top",
      theme: "Theme",
      menu: "Menu",
      nav_home: "Home",
      nav_about: "About",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_skills: "Skills",
      nav_contact: "Contact",
      hero_aria: "Hero",
      hero_kicker: "Student",
      hero_subtitle: "BSc International Business student at Corvinus University of Budapest.",
      cta_contact: "Contact",
      cta_view_education: "View Education",
      quick_facts_label: "Quick facts",
      meta_languages: "Languages",
      meta_languages_value: "Hungarian (Native), English (C1), French (B1)",
      meta_location: "Location",
      profile_label: "Profile",
      profile_avatar_label: "Profile avatar",
      open_to_opportunities: "Open to opportunities",
      open_to_opportunities_text:
        "Interested in internships and entry-level roles where I can contribute with strong communication, creative problem-solving, and teamwork.",
      about_title: "About",
      about_lead: "A quick introduction.",
      about_paragraph:
        "I have finished my high school studies and successfully met all the requirements of the matura exam. The next milestone for me is completing a university degree. I have a high level of English proficiency and a solid basic knowledge of French. With strong communication skills and a creative problem-solving mindset, I approach new challenges with confidence. I also have musical experience and hold a category B driver’s license.",
      experience_title: "Experience",
      experience_lead: "Student-focused overview.",
      experience_paragraph:
        "I’m currently building my professional experience and I’m excited to contribute in a real-world setting. I’m looking for internships and entry-level opportunities in business, operations, marketing, or related areas.",
      experience_bullet_1: "Strong written and verbal communication",
      experience_bullet_2: "Creative, solutions-oriented problem-solving",
      experience_bullet_3: "Confident adapting to new environments",
      experience_bullet_4: "Collaborative teamwork and relationship-building",
      education_title: "Education",
      education_lead: "Timeline.",
      education_timeline_label: "Education timeline",
      education_corvinus_program: "BSc International Business",
      skills_title: "Skills",
      skills_lead: "What I bring.",
      core_skills_title: "Core Skills",
      skill_communication_title: "Communication",
      skill_communication_text: "Excellent verbal and written communication skills",
      skill_problem_title: "Problem-Solving",
      skill_problem_text: "Provide creative and innovative solutions to emerging challenges",
      skill_technical_title: "Technical Skills",
      skill_technical_text: "Advanced proficiency in Microsoft programs (Excel, PowerPoint, Word, Access)",
      skill_adapt_title: "Adaptability",
      skill_adapt_text: "Quickly adjust to new environments and face challenges without hesitation",
      skill_team_title: "Teamwork",
      skill_team_text: "Collaborate easily with others and maintain excellent relationships with team members",
      language_skills_title: "Language Skills",
      language_skills_list_label: "Language skills list",
      lang_hu: "Hungarian",
      lang_en: "English",
      lang_fr: "French",
      level_native: "Native",
      level_c1_cert: "C1 Certificate",
      level_b1_cert: "B1 Certificate",
      contact_title: "Contact",
      contact_lead: "Let’s connect.",
      contact_details_title: "Details",
      contact_phone: "Phone",
      contact_email: "Email",
      contact_linkedin_placeholder: "Add your LinkedIn URL",
      contact_muted_emailjs:
        "Prefer email? The form can send via EmailJS once you add your public key and template IDs in script.js.",
      contact_form_label: "Contact form",
      contact_form_title: "Send a message",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_send: "Send",
      back_to_top: "Back to top",
      form_fill_all: "Please fill out all fields.",
      form_sent: "Message sent. Thank you!",
      form_not_configured:
        "Form sending isn’t configured yet. Please email me directly using the link on the left.",
    },
    hu: {
      page_title: "Zia Spitczmüller — Önéletrajz",
      meta_description:
        "Zia Spitczmüller önéletrajz oldala — Nemzetközi gazdálkodás szakos hallgató a Budapesti Corvinus Egyetemen.",
      skip_to_content: "Ugrás a tartalomra",
      back_to_top_label: "Vissza a tetejére",
      theme: "Téma",
      menu: "Menü",
      nav_home: "Kezdőlap",
      nav_about: "Rólam",
      nav_experience: "Tapasztalat",
      nav_education: "Tanulmányok",
      nav_skills: "Készségek",
      nav_contact: "Kapcsolat",
      hero_aria: "Bevezető",
      hero_kicker: "Diák",
      hero_subtitle: "Nemzetközi gazdálkodás BSc hallgató a Budapesti Corvinus Egyetemen.",
      cta_contact: "Kapcsolat",
      cta_view_education: "Tanulmányok",
      quick_facts_label: "Röviden",
      meta_languages: "Nyelvek",
      meta_languages_value: "Magyar (anyanyelv), Angol (C1), Francia (B1)",
      meta_location: "Helyszín",
      profile_label: "Profil",
      profile_avatar_label: "Profilkép",
      open_to_opportunities: "Nyitott lehetőségekre",
      open_to_opportunities_text:
        "Szívesen vállalok gyakornoki vagy pályakezdő pozíciót, ahol erős kommunikációval, kreatív problémamegoldással és csapatmunkával tudok hozzájárulni.",
      about_title: "Rólam",
      about_lead: "Rövid bemutatkozás.",
      about_paragraph:
        "Befejeztem középiskolai tanulmányaimat, és sikeresen teljesítettem az érettségi követelményeit. Következő célom az egyetemi diploma megszerzése. Magas szintű ангол nyelvtudással rendelkezem, és stabil alapokkal francia nyelvből. Erős kommunikációs készségekkel és kreatív problémamegoldó szemlélettel magabiztosan állok az új kihívások elé. Zenei tapasztalattal is rendelkezem, valamint „B” kategóriás jogosítványom van.",
      experience_title: "Tapasztalat",
      experience_lead: "Diák-központú áttekintés.",
      experience_paragraph:
        "Jelenleg építem a szakmai tapasztalatomat, és motiváltan szeretnék valódi környezetben fejlődni. Gyakornoki és pályakezdő lehetőségeket keresek üzleti, operációs, marketing vagy kapcsolódó területeken.",
      experience_bullet_1: "Erős írásbeli és szóbeli kommunikáció",
      experience_bullet_2: "Kreatív, megoldásközpontú problémamegoldás",
      experience_bullet_3: "Magabiztos alkalmazkodás új környezetekben",
      experience_bullet_4: "Csapatmunka és kapcsolatépítés",
      education_title: "Tanulmányok",
      education_lead: "Idővonal.",
      education_timeline_label: "Tanulmányi idővonal",
      education_corvinus_program: "Nemzetközi gazdálkodás BSc",
      skills_title: "Készségek",
      skills_lead: "Amiben erős vagyok.",
      core_skills_title: "Fő készségek",
      skill_communication_title: "Kommunikáció",
      skill_communication_text: "Kiváló szóbeli és írásbeli kommunikációs készségek",
      skill_problem_title: "Problémamegoldás",
      skill_problem_text: "Kreatív és innovatív megoldások az új kihívásokra",
      skill_technical_title: "Technikai készségek",
      skill_technical_text: "Magas szintű Microsoft ismeretek (Excel, PowerPoint, Word, Access)",
      skill_adapt_title: "Alkalmazkodóképesség",
      skill_adapt_text: "Gyors alkalmazkodás új környezetekhez és kihívásokhoz",
      skill_team_title: "Csapatmunka",
      skill_team_text: "Könnyű együttműködés és jó kapcsolatok fenntartása csapattagokkal",
      language_skills_title: "Nyelvtudás",
      language_skills_list_label: "Nyelvtudás lista",
      lang_hu: "Magyar",
      lang_en: "Angol",
      lang_fr: "Francia",
      level_native: "Anyanyelv",
      level_c1_cert: "C1 nyelvvizsga",
      level_b1_cert: "B1 nyelvvizsga",
      contact_title: "Kapcsolat",
      contact_lead: "Keress bátran.",
      contact_details_title: "Elérhetőségek",
      contact_phone: "Telefon",
      contact_email: "Email",
      contact_linkedin_placeholder: "Add meg a LinkedIn linkedet",
      contact_muted_emailjs:
        "Ha inkább emailt írnál: az űrlap EmailJS-sel tud küldeni, miután beállítod a public key-t és a template ID-ket a script.js fájlban.",
      contact_form_label: "Kapcsolati űrlap",
      contact_form_title: "Üzenet küldése",
      form_name: "Név",
      form_email: "Email",
      form_message: "Üzenet",
      form_send: "Küldés",
      back_to_top: "Vissza a tetejére",
      form_fill_all: "Kérlek, tölts ki minden mezőt.",
      form_sent: "Üzenet elküldve. Köszönöm!",
      form_not_configured:
        "Az űrlap küldése még nincs beállítva. Kérlek, írj emailt a bal oldali linken.",
    },
  };

  const detectBrowserLang = () => {
    const lang = (navigator.language || "en").toLowerCase();
    return lang.startsWith("hu") ? "hu" : "en";
  };

  const applyLang = (lang) => {
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = lang;

    for (const el of $$("[data-i18n]")) {
      const key = el.dataset.i18n;
      const val = pack[key];
      if (typeof val !== "string") continue;

      const attr = el.dataset.i18nAttr;
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    }

    if (langToggleText) langToggleText.textContent = lang.toUpperCase();
    if (langToggle) langToggle.setAttribute("aria-label", lang === "hu" ? "Switch to English" : "Váltás magyarra");
  };

  const savedLang = (() => {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch {
      return null;
    }
  })();

  applyLang(savedLang || detectBrowserLang());

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = document.documentElement.lang === "hu" ? "hu" : "en";
      const next = current === "hu" ? "en" : "hu";
      applyLang(next);
      try {
        localStorage.setItem(LANG_KEY, next);
      } catch {
        // ignore
      }
    });
  }

  // Theme toggle (light/dark) with persistence + system default
  const THEME_KEY = "cv_theme";
  const root = document.documentElement;
  const themeToggle = $("#theme-toggle");

  const getSystemTheme = () => (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");

  const applyTheme = (theme) => {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");

    if (themeToggle) {
      const effective = theme === "dark" || theme === "light" ? theme : getSystemTheme();
      themeToggle.setAttribute("aria-label", effective === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  };

  const savedTheme = (() => {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  })();

  applyTheme(savedTheme || "system");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "system";
      const next =
        current === "dark" ? "light" : current === "light" ? "dark" : getSystemTheme() === "dark" ? "light" : "dark";

      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        // ignore
      }
    });
  }

  // Mobile menu toggle
  const navToggle = $(".nav-toggle");
  const navList = $("#nav-list");
  if (navToggle && navList) {
    const setOpen = (open) => {
      navToggle.setAttribute("aria-expanded", String(open));
      navList.dataset.open = open ? "true" : "false";
    };

    setOpen(false);

    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });

    // Close menu when clicking a link (mobile)
    navList.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      setOpen(false);
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (e.target === navToggle || navToggle.contains(e.target)) return;
      if (e.target === navList || navList.contains(e.target)) return;
      setOpen(false);
    });
  }

  // Active-section highlighting
  const navLinks = $$(".nav-link").filter((a) => a.getAttribute("href")?.startsWith("#"));
  const sections = navLinks
    .map((a) => $(a.getAttribute("href")))
    .filter((el) => el && el.tagName.toLowerCase() === "section");

  const setActive = (id) => {
    for (const a of navLinks) {
      const href = a.getAttribute("href");
      const isActive = href === `#${id}`;
      a.setAttribute("aria-current", isActive ? "true" : "false");
    }
  };

  if (sections.length > 0 && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
  } else if (sections[0]) {
    setActive(sections[0].id);
  }

  // Smooth scroll with header offset
  const header = $(".site-header");
  const headerOffset = () => (header ? Math.ceil(header.getBoundingClientRect().height) + 10 : 0);
  for (const a of navLinks) {
    a.addEventListener("click", (e) => {
      const target = $(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - headerOffset();
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", `#${target.id}`);
    });
  }

  // Contact form (EmailJS placeholders + graceful fallback)
  const form = $("#contact-form");
  const statusEl = $("#form-status");
  const avatarImg = $(".avatar-img");

  const setStatus = (msg) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
  };

  const EMAILJS = {
    enabled: false,
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
    serviceId: "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  };

  async function sendViaEmailJS(payload) {
    if (!EMAILJS.enabled) {
      throw new Error("EmailJS not configured");
    }

    // Load EmailJS only when configured.
    const { default: emailjs } = await import("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js");
    emailjs.init({ publicKey: EMAILJS.publicKey });

    return await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, payload);
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      setStatus("");

      const fd = new FormData(form);
      const name = String(fd.get("name") ?? "").trim();
      const email = String(fd.get("email") ?? "").trim();
      const message = String(fd.get("message") ?? "").trim();

      const currentLang = document.documentElement.lang === "hu" ? "hu" : "en";
      const t = dict[currentLang] || dict.en;

      if (!name || !email || !message) {
        setStatus(t.form_fill_all);
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      try {
        await sendViaEmailJS({ name, email, message });
        form.reset();
        setStatus(t.form_sent);
      } catch (err) {
        setStatus(t.form_not_configured);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // Hide portrait <img> when not present, keep initials.
  if (avatarImg) {
    avatarImg.addEventListener("error", () => {
      avatarImg.remove();
    });
  }
})();
