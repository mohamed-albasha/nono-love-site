/* ═══════════════════════════════════════════
   نونو.. حكاية على نبيتي
   الملف ده مسؤول عن الحركة والأغنية والمفاجآت
   ═══════════════════════════════════════════ */

(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const arNum = (n) => ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"][n] ?? String(n);

  /* ═══════════ الشخصية الصغيرة ═══════════ */

  const girlSvg = (id) => `
    <svg viewBox="0 0 200 260" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="dress-${id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f9dbe0"/>
          <stop offset="1" stop-color="#e3a0b0"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="249" rx="47" ry="7" fill="rgba(0,0,0,.28)"/>
      <rect x="87" y="198" width="10" height="38" rx="5" fill="#f4c9b3"/>
      <rect x="103" y="198" width="10" height="38" rx="5" fill="#f4c9b3"/>
      <ellipse cx="91" cy="238" rx="10" ry="5.5" fill="#5c2130"/>
      <ellipse cx="109" cy="238" rx="10" ry="5.5" fill="#5c2130"/>
      <path d="M79 146 Q100 156 121 146 L145 201 Q100 218 55 201 Z" fill="url(#dress-${id})"/>
      <path d="M55 201 q9 10 18 0 q9 10 18 0 q9 10 18 0 q9 10 18 0 q9 10 18 0" fill="none" stroke="#fbe4e7" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>
      <g fill="#fff4e8" opacity=".55">
        <circle cx="73" cy="180" r="2.4"/><circle cx="91" cy="192" r="2.4"/><circle cx="110" cy="184" r="2.4"/>
        <circle cx="127" cy="192" r="2.4"/><circle cx="84" cy="170" r="1.8"/><circle cx="117" cy="170" r="1.8"/>
      </g>
      <path d="M75 106 Q100 97 125 106 L123 148 Q100 158 77 148 Z" fill="url(#dress-${id})"/>
      <path d="M88 106 q12 12 24 0 l-4 -9 q-8 6 -16 0 Z" fill="#fff8ee"/>
      <circle cx="100" cy="124" r="2.4" fill="#fff3e4"/>
      <circle cx="100" cy="136" r="2.4" fill="#fff3e4"/>
      <rect x="92" y="94" width="16" height="16" rx="8" fill="#f4c9b3"/>
      <g class="arm arm-r">
        <path d="M124 112 Q139 134 139 154" fill="none" stroke="#f4c9b3" stroke-width="9.5" stroke-linecap="round"/>
        <circle cx="139" cy="157" r="6" fill="#f4c9b3"/>
        <path d="M119 102 q13 2 15 14 q-10 4 -18 -3 Z" fill="#e3a0b0"/>
      </g>
      <g class="arm arm-l">
        <path d="M76 112 Q61 134 61 154" fill="none" stroke="#f4c9b3" stroke-width="9.5" stroke-linecap="round"/>
        <circle cx="61" cy="157" r="6" fill="#f4c9b3"/>
        <path d="M81 102 q-13 2 -15 14 q10 4 18 -3 Z" fill="#e3a0b0"/>
      </g>
      <circle cx="100" cy="68" r="41" fill="#4a2320"/>
      <circle cx="57" cy="72" r="16" fill="#4a2320"/>
      <circle cx="143" cy="72" r="16" fill="#4a2320"/>
      <circle cx="57" cy="72" r="7" fill="#5d2c29"/>
      <circle cx="143" cy="72" r="7" fill="#5d2c29"/>
      <circle cx="100" cy="72" r="35" fill="#f8d2bd"/>
      <circle cx="66" cy="76" r="6" fill="#f4c9b3"/>
      <circle cx="134" cy="76" r="6" fill="#f4c9b3"/>
      <path d="M65 64 Q67 31 100 31 Q133 31 135 64 Q126 47 100 49 Q74 47 65 64 Z" fill="#4a2320"/>
      <path d="M80 76 q6 -7 12 0" fill="none" stroke="#3a1a1c" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M108 76 q6 -7 12 0" fill="none" stroke="#3a1a1c" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="77" cy="88" rx="6.5" ry="4.4" fill="#f09aa6" opacity=".62"/>
      <ellipse cx="123" cy="88" rx="6.5" ry="4.4" fill="#f09aa6" opacity=".62"/>
      <path d="M92 91 q8 7 16 0" fill="none" stroke="#8f3a46" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M100 31 l-14 -10 q-7 10 0 18 Z" fill="#e88fa2"/>
      <path d="M100 31 l14 -10 q7 10 0 18 Z" fill="#e88fa2"/>
      <circle cx="100" cy="31" r="5" fill="#f7c3cd"/>
    </svg>`;

  $$("[data-girl]").forEach((el, i) => { el.innerHTML = girlSvg(`g${i}`); });

  /* ═══════════ النجوم ═══════════ */

  const starsEl = $("#stars");
  if (starsEl) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 48; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = `${(Math.random() * 100).toFixed(2)}%`;
      s.style.top = `${(Math.random() * 100).toFixed(2)}%`;
      s.style.setProperty("--s", `${(Math.random() * 1.7 + 1).toFixed(1)}px`);
      s.style.setProperty("--dur", `${(3 + Math.random() * 4).toFixed(1)}s`);
      s.style.setProperty("--delay", `${(-Math.random() * 7).toFixed(1)}s`);
      frag.append(s);
    }
    starsEl.append(frag);
  }

  /* ═══════════ الخلفية ═══════════ */

  const imgCache = new Map();
  const vidCache = new Map();

  function probeImage(base) {
    if (imgCache.has(base)) return imgCache.get(base);
    const promise = new Promise((resolve) => {
      const exts = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"];
      let i = 0;
      const next = () => {
        if (i >= exts.length) return resolve(null);
        const img = new Image();
        let settled = false;
        img.onload = () => {
          if (settled) return;
          settled = true;
          resolve(`${base}.${exts[i]}`);
        };
        img.onerror = () => {
          if (settled) return;
          settled = true;
          i += 1;
          next();
        };
        img.src = `${base}.${exts[i]}`;
      };
      next();
    });
    imgCache.set(base, promise);
    return promise;
  }

  function probeVideo(base) {
    if (vidCache.has(base)) return vidCache.get(base);
    const promise = new Promise((resolve) => {
      const exts = ["mp4", "webm", "m4v", "mov"];
      let i = 0;
      const next = () => {
        if (i >= exts.length) return resolve(null);
        const v = document.createElement("video");
        let settled = false;
        const finish = (ok) => {
          if (settled) return;
          settled = true;
          v.onloadedmetadata = null;
          v.onerror = null;
          if (ok) {
            resolve(`${base}.${exts[i]}`);
          } else {
            i += 1;
            next();
          }
        };
        v.preload = "metadata";
        v.muted = true;
        v.playsInline = true;
        v.onloadedmetadata = () => finish(true);
        v.onerror = () => finish(false);
        setTimeout(() => finish(false), 1700);
        v.src = `${base}.${exts[i]}`;
      };
      next();
    });
    vidCache.set(base, promise);
    return promise;
  }

  const bgPhoto = $("#bgPhoto");
  probeImage("assets/background").then((url) => {
    if (url && bgPhoto) {
      bgPhoto.style.backgroundImage = `url("${url}")`;
      document.body.classList.add("has-bg");
    }
  });

  /* ═══════════ تجهيز الصور والفيديوهات ═══════════ */

  function setupMedia() {
    $$(".media[data-image], .media[data-video]").forEach(async (box) => {
      const imageBase = box.dataset.image ? `assets/${box.dataset.image}` : null;
      const videoBase = box.dataset.video ? `assets/${box.dataset.video}` : null;
      const img = $(".asset-img", box);

      if (box.dataset.brightness) box.style.setProperty("--brightness", box.dataset.brightness);
      if (box.dataset.contrast) box.style.setProperty("--contrast", box.dataset.contrast);
      if (box.dataset.saturate) box.style.setProperty("--saturate", box.dataset.saturate);

      const [videoUrl, imageUrl] = await Promise.all([
        videoBase ? probeVideo(videoBase) : Promise.resolve(null),
        imageBase ? probeImage(imageBase) : Promise.resolve(null),
      ]);

      if (imageUrl && img) {
        img.src = imageUrl;
        img.alt = box.dataset.alt || "";
        img.hidden = false;
        box.classList.add("loaded");
      }

      if (!imageUrl && !videoUrl) {
        box.classList.add("media-empty");
      }

      if (videoUrl) {
        const video = document.createElement("video");
        video.controls = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.src = videoUrl;
        video.setAttribute("aria-label", box.dataset.alt || "فيديو");
        if (imageUrl) video.poster = imageUrl;
        video.addEventListener("error", () => {
          video.remove();
          box.classList.remove("has-video");
          box.querySelector(".video-sound")?.remove();
          if (imageUrl && img) {
            img.hidden = false;
            box.classList.add("loaded");
          } else {
            box.classList.add("media-empty");
          }
        });
        video.addEventListener("volumechange", () => {
          if (!video.muted) box.querySelector(".video-sound")?.remove();
        });
        box.append(video);
        box.classList.add("has-video");
        box.classList.remove("loaded", "media-empty");
        if (img) img.hidden = true;
      }
    });
  }

  /* ═══════════ فيديو لينا ═══════════ */

  const usVideo = $("#usVideo");
  const videoShell = usVideo?.closest(".video-shell");
  const videoSound = $("#videoSound");
  const videoPlay = $("#videoPlay");
  const m2Next = $("#m2Next");

  function updateVideoUi() {
    if (!usVideo) return;
    if (videoSound) {
      videoSound.textContent = usVideo.muted ? "🔊 شغّلي الصوت" : "🔇 اقفلي الصوت";
      videoSound.setAttribute("aria-pressed", usVideo.muted ? "false" : "true");
    }
    if (videoPlay) {
      const paused = usVideo.paused;
      videoPlay.textContent = paused ? "▶" : "❚❚";
      videoPlay.setAttribute("aria-label", paused ? "تشغيل الفيديو" : "إيقاف الفيديو");
    }
    videoShell?.classList.toggle("is-paused", usVideo.paused);
  }

  function startUsVideo() {
    if (!usVideo) return;
    usVideo.muted = true;
    const attempt = usVideo.play();
    if (attempt && attempt.catch) {
      attempt.catch(() => {
        videoShell?.classList.add("needs-tap");
        updateVideoUi();
      });
    }
    // نسيب لحظة للفيديو قبل ما يظهر زرار التالي
    setTimeout(() => m2Next?.classList.remove("is-hidden"), 900);
    updateVideoUi();
  }

  usVideo?.addEventListener("play", () => {
    videoShell?.classList.remove("needs-tap");
    updateVideoUi();
  });
  usVideo?.addEventListener("pause", () => {
    updateVideoUi();
  });
  usVideo?.addEventListener("volumechange", () => {
    updateVideoUi();
  });
  usVideo?.addEventListener("click", () => {
    if (usVideo.paused) usVideo.play().catch(() => {});
    else usVideo.pause();
  });
  usVideo?.addEventListener("loadeddata", () => videoShell?.classList.add("ready"));

  videoSound?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!usVideo) return;
    if (usVideo.muted) {
      usVideo.muted = false;
      usVideo.volume = 1;
      usVideo.play().catch(() => {});
    } else {
      usVideo.muted = true;
    }
    updateVideoUi();
  });

  videoPlay?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!usVideo) return;
    if (usVideo.paused) usVideo.play().catch(() => {});
    else usVideo.pause();
  });

  /* ═══════════ الإشعارات ═══════════ */

  const toastMessages = [
    "نونيتي.. الموقع ده كله معمول عشانك ❤️",
    "لو ضحكتي دلوقتي.. أنا كسبت اليوم.",
    "في حد هنا بيحبك أوي.. واسمه بيبدأ بميم 🤭",
    "لسه في حاجة صغيرة مستنياك.. كمّلي.",
    "يا بنوتي، خدي وقتك.. الحكاية مش هتخلص بسرعة.",
    "إشعار من القلب: إنتِ أغلى من أي حاجة على الشاشة دي.",
    "نراعيني.. بلاش تسيبي الموقع قبل الآخر 😌",
  ];

  const toastsEl = $("#toasts");
  let toastQueue = [];
  let lastToastAt = -99999;

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function showToast(text) {
    if (!toastsEl) return;
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `<span class="toast-heart" aria-hidden="true">❤</span><span>${text}</span>`;
    let closed = false;
    const close = () => {
      if (closed) return;
      closed = true;
      el.classList.add("out");
      setTimeout(() => el.remove(), 420);
    };
    el.addEventListener("click", close);
    toastsEl.append(el);
    while (toastsEl.children.length > 1) toastsEl.firstElementChild?.remove();
    setTimeout(close, 4300);
  }

  function maybeToast(force = false) {
    const now = performance.now();
    if (!force && now - lastToastAt < 30000) return;
    if (!toastQueue.length) toastQueue = shuffle(toastMessages);
    lastToastAt = now;
    showToast(toastQueue.shift());
  }

  /* ═══════════ القلوب المتطايرة ═══════════ */

  const fxEl = $("#fx");

  function burst(x, y, count = 9, kind = "heart") {
    if (!fxEl || reduceMotion) return;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      const star = kind === "star" || Math.random() < 0.22;
      s.className = star ? "fx-star" : "fx-heart";
      s.textContent = star ? "✦" : "❤";
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.setProperty("--dx", `${Math.random() * 170 - 85}px`);
      s.style.setProperty("--dy", `${-55 - Math.random() * 150}px`);
      s.style.setProperty("--rot", `${Math.random() * 120 - 60}deg`);
      s.style.setProperty("--sc", `${(0.75 + Math.random() * 0.85).toFixed(2)}`);
      s.style.setProperty("--dur", `${(1.15 + Math.random() * 0.8).toFixed(2)}s`);
      s.style.setProperty("--fs", `${(12 + Math.random() * 15).toFixed(0)}px`);
      fxEl.append(s);
      setTimeout(() => s.remove(), 2200);
    }
  }

  function burstFrom(el, count = 9, kind = "heart") {
    if (!el) return;
    const r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, count, kind);
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("video")) return;
    const media = e.target.closest(".media, .girl");
    if (media) burst(e.clientX || 0, e.clientY || 0, 5);
  });

  /* ═══════════ التنقل بين الشاشات ═══════════ */

  const ORDER = ["intro", "message", "m1", "m2", "m3", "question", "card", "reasons", "wish", "whisper", "finale"];
  const scenes = $$(".scene");
  const progressEl = $("#progress");
  let current = "intro";
  const seen = new Set(["intro"]);

  if (progressEl) {
    ORDER.forEach(() => {
      const dot = document.createElement("span");
      dot.className = "p-dot";
      progressEl.append(dot);
    });
  }

  function updateProgress() {
    if (!progressEl) return;
    const idx = ORDER.indexOf(current);
    [...progressEl.children].forEach((dot, i) => {
      dot.classList.toggle("done", i < idx);
      dot.classList.toggle("current", i === idx && current !== "intro");
    });
  }

  function showScreen(id, { instant = false } = {}) {
    if (!ORDER.includes(id) || id === current) return;
    const nextEl = document.getElementById(id);
    const prevEl = document.getElementById(current);
    if (!nextEl) return;

    $$("video").forEach((v) => {
      if (!nextEl.contains(v)) {
        try { v.pause(); } catch (e) { /* ignore */ }
      }
    });

    scenes.forEach((s) => {
      if (s !== nextEl) s.classList.remove("active");
    });
    if (prevEl && prevEl !== nextEl) {
      prevEl.classList.remove("active");
      if (!instant) prevEl.classList.add("leaving");
      setTimeout(() => prevEl.classList.remove("leaving"), 700);
    }

    current = id;
    seen.add(id);
    document.body.dataset.screen = id;
    nextEl.scrollTop = 0;
    nextEl.classList.remove("leaving");
    // إعادة تشغيل حركات الدخول
    void nextEl.offsetWidth;
    nextEl.classList.add("active");
    updateProgress();
    onEnter(id);
  }

  const seenToastScenes = new Set();

  function onEnter(id) {
    if (id === "m2") startUsVideo();
    if (!seenToastScenes.has(id)) {
      seenToastScenes.add(id);
      if (id === "finale") setTimeout(() => maybeToast(), 4200);
    }
    if (id === "finale") {
      setTimeout(() => {
        const sig = $(".signature-block");
        if (sig) burstFrom(sig, 14, "heart");
      }, 1300);
    }
  }

  /* ═══════════ شاشة البداية ═══════════ */

  const typedEl = $("#typed");
  const caretEl = $("#caret");
  const startBtn = $("#startBtn");
  const introEl = $("#intro");
  const introText = "نونيتي.. إنتِ أحلى صدفة حصلتلي ❤️";
  let typeTimer = null;
  let typeStartTimer = null;
  let introDone = false;

  function finishIntro() {
    clearInterval(typeTimer);
    clearTimeout(typeStartTimer);
    typeTimer = null;
    typeStartTimer = null;
    if (typedEl) typedEl.textContent = introText;
    caretEl?.classList.add("done");
    if (!introDone) {
      introDone = true;
      setTimeout(() => startBtn?.classList.add("show"), 280);
    }
  }

  function runIntro() {
    clearInterval(typeTimer);
    clearTimeout(typeStartTimer);
    typeTimer = null;
    typeStartTimer = null;
    introDone = false;
    if (typedEl) typedEl.textContent = "";
    caretEl?.classList.remove("done");
    startBtn?.classList.remove("show");

    if (reduceMotion) {
      finishIntro();
      return;
    }

    typeStartTimer = setTimeout(() => {
      let i = 0;
      typeTimer = setInterval(() => {
        i += 1;
        if (typedEl) typedEl.textContent = introText.slice(0, i);
        if (i >= [...introText].length) finishIntro();
      }, 46);
    }, 1750);
  }

  introEl?.addEventListener("click", (e) => {
    if (!introDone && !e.target.closest("#startBtn")) finishIntro();
  });

  startBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    finishIntro();
    burstFrom(startBtn, 12, "heart");
    setTimeout(() => {
      showScreen("message");
      const m1 = $("#m1");
      if (m1) m1.scrollTop = 0;
    }, 220);
  });

  /* ═══════════ كل أزرار التالي ═══════════ */

  $$("[data-next]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("is-hidden")) return;
      const next = btn.dataset.next;
      const action = btn.dataset.action;

      if (action === "push") {
        const scene = $("#m1");
        if (!scene || scene.classList.contains("pushing")) return;
        const photo = $("#m1Photo");
        const girl = scene.querySelector(".girl-push");
        if (photo && girl) {
          const r = photo.getBoundingClientRect();
          const bottom = Math.max(8, window.innerHeight - r.bottom - 62);
          const right = Math.max(0, window.innerWidth - r.right - 20);
          girl.style.bottom = `${bottom}px`;
          girl.style.right = `${right}px`;
        }
        scene.classList.add("pushing");
        setTimeout(() => {
          showScreen(next);
          setTimeout(() => {
            scene.classList.remove("pushing");
            if (girl) {
              girl.style.bottom = "";
              girl.style.right = "";
            }
          }, 750);
        }, 780);
        return;
      }

      if (action === "sweep") {
        sweepTransition(() => showScreen(next));
        return;
      }

      showScreen(next);
    });
  });

  function sweepTransition(done) {
    if (reduceMotion) {
      done();
      return;
    }
    const wrap = document.createElement("div");
    wrap.className = "sweep";
    const star = document.createElement("span");
    star.className = "sweep-star";
    star.style.setProperty("--top", `${24 + Math.random() * 34}%`);
    wrap.append(star);
    document.body.append(wrap);
    setTimeout(done, 250);
    setTimeout(() => wrap.remove(), 1100);
  }

  /* ═══════════ الصور التفاعلية ═══════════ */

  const m3Next = $("#m3Next");

  $$(".photo-tap").forEach((box) => {
    const msg = document.getElementById(box.dataset.msg);
    const revealNext = box.dataset.revealNext ? document.getElementById(box.dataset.revealNext) : null;

    box.addEventListener("click", () => {
      box.classList.remove("tapped");
      void box.offsetWidth;
      box.classList.add("tapped");
      msg?.classList.add("show");
      revealNext?.classList.remove("is-hidden");
      burstFrom(box, 12, "heart");
      if (!box.dataset.seen) {
        box.dataset.seen = "1";
        if (box.dataset.toast) setTimeout(() => maybeToast(), 800);
      }
    });
  });

  /* ═══════════ السؤال ═══════════ */

  const qAnswer = $("#qAnswer");
  const questionNext = $("#questionNext");
  let questionAnswered = false;

  $$("#question .q-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (questionAnswered) return;
      questionAnswered = true;
      $$("#question .q-option").forEach((b) => {
        b.disabled = true;
        if (b !== btn) b.classList.remove("chosen");
      });
      btn.classList.add("chosen");
      if (qAnswer) {
        const answers = {
          ana: "أيوه.. ده اللي أنا كنت مستنيه منك ❤️",
          rabena: "ما كانش ده العشم 😂",
          enta: "لا ماشي يا عمي، بنتك بقى على دارك عشان هي بنتك بس مش أكتر 😂❤️",
        };
        qAnswer.textContent = answers[btn.dataset.answer] || answers.ana;
        requestAnimationFrame(() => qAnswer.classList.add("show"));
      }
      questionNext?.classList.remove("is-hidden");
      burstFrom(btn, 8, "heart");
      setTimeout(() => maybeToast(), 1200);
    });
  });

  /* ═══════════ كارت الحب ═══════════ */

  const loveCard = $("#loveCard");
  const cardNext = $("#cardNext");
  let loveCardOpened = false;

  function openLoveCard() {
    if (!loveCard || loveCardOpened) return;
    loveCardOpened = true;
    loveCard.classList.add("flipped");
    loveCard.setAttribute("aria-pressed", "true");
    cardNext?.classList.remove("is-hidden");
    burstFrom(loveCard, 14, "heart");
    setTimeout(() => maybeToast(), 900);
  }

  loveCard?.addEventListener("click", openLoveCard);
  loveCard?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLoveCard();
    }
  });

  /* ═══════════ ليه بحبك ═══════════ */

  const reasons = [
    "عشان إنتِ بنت جعفوري، ونكدية شوية، ومحدش هيستحملك غيري أصلًا 😂❤️ بس أنا بحبك بكل جنانك وتفاصيلك يا نونيتي، ومش عايز غيرك يا بنوتي.",
    "بعيدًا عن الهزار بقى، إنتِ أغلى حاجة في حياتي يا بنوتي، ووجودك معايا نعمة بدعي ربنا تفضل من نصيبي دايمًا ❤️",
    "أنا ممكن أبقى مقفول من الدنيا كلها، وأول ما أتكلم معاكي ألاقي كل حاجة هانت، والضحكة جت لوحدها. إنتِ ليكي مفعول غريب عليا يا بنتي 😂❤️",
    "أنا حاسس إننا صرفنا حظنا كله يوم ما الصدفة جمعتنا، وخصوصًا صدفة القطر دي 😂❤️ بس يا رب يكون لسه فاضلنا حظ يكفينا نكمل سوا لآخر العمر، يا أحلى صدفة في دنيتي.",
  ];
  const heartButtons = $$(".heart-btn");
  const reasonText = $("#reasonText");
  const reasonPaper = $(".reason-paper");
  const reasonsCount = $("#reasonsCount");
  const reasonsNext = $("#reasonsNext");
  const foundReasons = new Set();

  heartButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const firstVisit = !foundReasons.has(i);
      foundReasons.add(i);
      btn.classList.add("found");
      if (reasonText) reasonText.textContent = reasons[i];
      if (reasonPaper) {
        reasonPaper.classList.remove("pop");
        void reasonPaper.offsetWidth;
        reasonPaper.classList.add("pop");
      }
      if (reasonsCount) reasonsCount.textContent = `لمّيتي ${arNum(foundReasons.size)} من ٤`;
      if (foundReasons.size >= heartButtons.length) reasonsNext?.classList.remove("is-hidden");
      if (firstVisit && foundReasons.size === 2) setTimeout(() => maybeToast(), 900);
      burstFrom(btn, 8, "heart");
    });
  });

  /* ═══════════ مفاجأة 11:11 ═══════════ */

  const wishBtn = $("#wishBtn");
  const wishReveal = $("#wishReveal");
  const wishNext = $("#wishNext");
  const wishPrompt = $("#wishPrompt");
  let wishOpened = false;

  wishBtn?.addEventListener("click", () => {
    if (wishOpened) return;
    wishOpened = true;
    wishBtn.classList.add("revealed");
    if (wishPrompt) wishPrompt.textContent = "خدي الأمنية.. وخلّيها معاكي على طول.";
    wishReveal?.classList.add("show");
    wishNext?.classList.remove("is-hidden");
    const r = wishBtn.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 26, "star");
    setTimeout(() => maybeToast(), 1000);
  });

  /* ═══════════ الهمسة ═══════════ */

  const holdHeart = $("#holdHeart");
  const whisperReveal = $("#whisperReveal");
  const whisperNext = $("#whisperNext");
  const HOLD_MS = 2200;
  let holdActive = false;
  let holdStart = 0;
  let holdRaf = null;
  let whisperDone = false;

  function completeWhisper() {
    if (whisperDone) return;
    whisperDone = true;
    holdActive = false;
    if (holdRaf) cancelAnimationFrame(holdRaf);
    holdHeart?.classList.remove("holding");
    holdHeart?.classList.add("done");
    holdHeart?.style.setProperty("--p", "100");
    whisperReveal?.classList.add("show");
    whisperNext?.classList.remove("is-hidden");
    burstFrom(holdHeart, 20, "heart");
    setTimeout(() => maybeToast(), 900);
  }

  function tickHold() {
    if (!holdActive || !holdHeart) return;
    const progress = Math.min(100, ((performance.now() - holdStart) / HOLD_MS) * 100);
    holdHeart.style.setProperty("--p", progress.toFixed(1));
    if (progress >= 100) {
      completeWhisper();
      return;
    }
    holdRaf = requestAnimationFrame(tickHold);
  }

  function startHold() {
    if (!holdHeart || holdActive || whisperDone) return;
    holdActive = true;
    holdStart = performance.now();
    holdHeart.classList.add("holding");
    $("#holdComment")?.classList.add("show");
    holdRaf = requestAnimationFrame(tickHold);
  }

  function endHold() {
    if (!holdActive) return;
    holdActive = false;
    if (holdRaf) cancelAnimationFrame(holdRaf);
    holdHeart?.classList.remove("holding");
    if (!whisperDone && holdHeart) holdHeart.style.setProperty("--p", "0");
  }

  holdHeart?.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    startHold();
    try { holdHeart.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
  });
  holdHeart?.addEventListener("pointerup", endHold);
  holdHeart?.addEventListener("pointercancel", endHold);
  holdHeart?.addEventListener("lostpointercapture", endHold);

  holdHeart?.addEventListener("keydown", (e) => {
    if ((e.key === " " || e.key === "Enter") && !e.repeat) {
      e.preventDefault();
      startHold();
    }
  });
  holdHeart?.addEventListener("keyup", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      endHold();
    }
  });

  $$("#danceCard .q-option").forEach((button) => {
    button.addEventListener("click", () => {
      $$("#danceCard .q-option").forEach((option) => option.classList.remove("chosen"));
      button.classList.add("chosen");
      $("#danceAnswer").textContent = "أيوه كده.. مستني الرقصة يا نونو 💃😂❤️";
      $("#replayBtn").classList.remove("is-hidden");
      burstFrom(button, 12, "heart");
    });
  });

  /* ═══════════ إعادة الحكاية ═══════════ */

  function resetJourney() {
    $$("#danceCard .q-option").forEach((option) => option.classList.remove("chosen"));
    $("#danceAnswer").textContent = "";
    $("#replayBtn").classList.add("is-hidden");
    // رجّع الفيديو والصور لحالتهم الأولى
    if (usVideo) {
      try {
        usVideo.pause();
        usVideo.currentTime = 0;
        usVideo.muted = true;
        usVideo.volume = 1;
      } catch (e) { /* ignore */ }
    }
    videoShell?.classList.remove("ready", "needs-tap", "is-paused");
    updateVideoUi();
    m2Next?.classList.add("is-hidden");

    $$(".photo-tap").forEach((p) => p.classList.remove("tapped"));
    $$(".photo-msg").forEach((m) => m.classList.remove("show"));
    m3Next?.classList.add("is-hidden");

    questionAnswered = false;
    $$("#question .q-option").forEach((b) => {
      b.disabled = false;
      b.classList.remove("chosen");
    });
    if (qAnswer) {
      qAnswer.classList.remove("show");
      qAnswer.textContent = "";
    }
    questionNext?.classList.add("is-hidden");

    loveCard?.classList.remove("flipped");
    loveCard?.setAttribute("aria-pressed", "false");
    loveCardOpened = false;
    cardNext?.classList.add("is-hidden");

    heartButtons.forEach((b) => {
      b.classList.remove("found");
      b.disabled = false;
    });
    foundReasons.clear();
    if (reasonText) reasonText.textContent = "لسه مفيش سبب.. دوسي على أول قلب 👇";
    if (reasonsCount) reasonsCount.textContent = "لمّيتي ٠ من ٤";
    reasonsNext?.classList.add("is-hidden");

    wishBtn?.classList.remove("revealed");
    wishReveal?.classList.remove("show");
    wishNext?.classList.add("is-hidden");
    if (wishPrompt) wishPrompt.textContent = "فيه أمنية مستخبية ورا الرقم ده.. دوسي عليه.";
    wishOpened = false;

    holdHeart?.classList.remove("done", "holding");
    holdHeart?.style.setProperty("--p", "0");
    whisperReveal?.classList.remove("show");
    $("#holdComment")?.classList.remove("show");
    whisperNext?.classList.add("is-hidden");
    whisperDone = false;
    holdActive = false;
    if (holdRaf) cancelAnimationFrame(holdRaf);

    const m1 = $("#m1");
    m1?.classList.remove("pushing");

    $$("video").forEach((v) => {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) { /* ignore */ }
    });

    scenes.forEach((s) => s.classList.remove("active", "leaving"));
    current = "intro";
    const intro = $("#intro");
    if (intro) {
      intro.scrollTop = 0;
      intro.classList.add("active");
    }
    toastsEl?.replaceChildren();
    lastToastAt = -99999;
    document.body.dataset.screen = "intro";
    updateProgress();
    seenToastScenes.clear();
    seenToastScenes.add("intro");
    runIntro();
  }

  $("#replayBtn")?.addEventListener("click", () => {
    burst(window.innerWidth / 2, window.innerHeight / 2, 20, "heart");
    resetJourney();
  });

  /* ═══════════ تشغيل أولي ═══════════ */

  setupMedia();
  updateProgress();
  runIntro();

  // للتجربة السريعة: افتح index.html#scene=finale مثلاً
  const hash = new URLSearchParams(location.hash.replace(/^#/, ""));
  const jump = hash.get("scene");
  if (jump && ORDER.includes(jump) && jump !== "intro") {
    finishIntro();
    setTimeout(() => showScreen(jump, { instant: true }), 350);
  }
})();
