(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* 聯絡連結 */
  $$(".js-line").forEach((a) => {
    a.href = CONTACT.line;
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$(".js-mail").forEach((a) => (a.href = "mailto:" + CONTACT.email));
  $("#year").textContent = new Date().getFullYear();

  /* 手機選單 */
  const toggle = $(".nav__toggle");
  const menu = $("#nav-menu");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("a", menu).forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  /* 案例：只顯示真實案例（sample: false）；一個都沒有就隱藏整區 */
  const realCases = CASES.filter((c) => !c.sample);
  if (!realCases.length) {
    $("#cases").hidden = true;
    $$('a[href="#cases"]').forEach((a) => {
      if (a.closest(".hero__cta")) {
        a.href = "#works";
        a.textContent = "看作品集";
      } else a.hidden = true;
    });
  }
  $("#case-list").innerHTML = realCases.map(
    (c) => `
    <article class="case">
      <div class="case__top">
        <span class="tag tag--light">${esc(c.industry)}</span>
        ${c.sample ? '<span class="tag tag--sample">範例</span>' : ""}
      </div>
      <h3>${esc(c.title)}</h3>
      <dl>
        <dt>問題</dt><dd>${esc(c.problem)}</dd>
        <dt>做法</dt><dd><ul>${c.actions.map((a) => `<li>${esc(a)}</li>`).join("")}</ul></dd>
      </dl>
      <div class="metrics">
        ${c.metrics.map((m) => `<div><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}
      </div>
    </article>`
  ).join("");

  /* 作品 + 篩選 */
  const cats = ["全部", ...new Set(WORKS.map((w) => w.category))];
  const filters = $("#work-filters");
  filters.innerHTML = cats
    .map((c, i) => `<button role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
    .join("");

  const list = $("#work-list");
  const render = (cat) => {
    list.innerHTML = WORKS.filter((w) => cat === "全部" || w.category === cat)
      .map(
        (w) => `
      <figure class="work">
        <div class="work__img"><img src="${esc(w.img)}" alt="${esc(w.title)}" loading="lazy"></div>
        <figcaption><span>${esc(w.category)}</span><h3>${esc(w.title)}</h3><p>${esc(w.desc)}</p></figcaption>
      </figure>`
      )
      .join("");
  };
  render("全部");
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("button", filters).forEach((x) => x.setAttribute("aria-selected", x === b));
    render(b.dataset.cat);
  });

  /* 圖片燈箱 */
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<img alt=""><button aria-label="關閉">×</button>';
  document.body.appendChild(box);
  list.addEventListener("click", (e) => {
    const img = e.target.closest(".work img");
    if (!img) return;
    $("img", box).src = img.src;
    $("img", box).alt = img.alt;
    box.classList.add("is-open");
  });
  box.addEventListener("click", () => box.classList.remove("is-open"));
  document.addEventListener("keydown", (e) => e.key === "Escape" && box.classList.remove("is-open"));

  /* 捲動淡入 */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 }
    );
    $$(".section__head, .card, .case, .industry, .steps li, .about__text, .faq").forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* 導覽列陰影 */
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
