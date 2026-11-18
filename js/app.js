async function initializeApp() {
  await loadSections();

  const elements = Object.fromEntries(
    [
      "section-select", "progress", "card-id", "flashcard", "card-content",
      "language-ja", "language-vi", "explanation-toggle", "explanation-panel",
      "explanation-content", "explanation-close", "previous-card", "next-card",
      "flip-card", "card-announcement", "card-shell",
      "explanation-popup", "explanation-scroll", "explanation-title", "explanation-context",
      "explanation-card-id",
      "explanation-language-ja", "explanation-language-vi",
    ].map((id) => [id, document.getElementById(id)]),
  );

  let sectionIndex = 0;
  let cardIndex = 0;
  let language = "ja";
  let isBack = false;
  let previousPageOverflow;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let contentAnimation;

  // Icon chỉ là phần trang trí; dữ liệu và thao tác không phụ thuộc CDN icon.
  window.lucide?.createIcons({ attrs: { "stroke-width": 1.7 } });

  sections.forEach((section, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = section.name;
    elements["section-select"].append(option);
  });

  function renderCard() {
    const section = sections[sectionIndex];
    const card = section.cards[cardIndex];
    elements.progress.textContent = `${cardIndex + 1} / ${section.cards.length}`;
    elements["card-id"].textContent = `#${String(card.id).padStart(3, "0")}`;
    const content = isBack
      ? card.answerJa
      : language === "ja" ? card.questionJa : card.questionVi;
    const contentChanged = elements["card-content"].textContent !== content;
    elements["card-content"].textContent = content;
    if (contentChanged) contentAnimation?.cancel();
    if (contentChanged && !reducedMotion.matches) {
      contentAnimation = elements["card-content"].animate(
        [
          { opacity: 0, transform: "translateY(8px) scale(0.985)" },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ],
        { duration: 230, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
      );
    }
    elements["card-content"].lang = isBack ? "ja" : language;
    elements.flashcard.setAttribute("aria-label", isBack
      ? "Mặt sau. Lật thẻ để xem câu hỏi"
      : "Mặt trước. Lật thẻ để xem đáp án");
    elements["flip-card"].setAttribute("aria-pressed", String(isBack));
    elements["card-shell"].dataset.side = isBack ? "back" : "front";
    elements["language-ja"].setAttribute("aria-pressed", String(language === "ja"));
    elements["language-vi"].setAttribute("aria-pressed", String(language === "vi"));
    elements["explanation-toggle"].setAttribute("aria-expanded", String(elements["explanation-panel"].open));
    elements["explanation-language-ja"].setAttribute("aria-pressed", String(language === "ja"));
    elements["explanation-language-vi"].setAttribute("aria-pressed", String(language === "vi"));
    elements["explanation-context"].textContent = section.name;
    elements["explanation-context"].title = section.name;
    elements["explanation-card-id"].textContent = `· #${String(card.id).padStart(3, "0")}`;
    elements["explanation-content"].textContent = language === "ja"
      ? card.explanationJa : card.explanationVi;
    elements["explanation-content"].lang = language;
    elements["previous-card"].disabled = cardIndex === 0;
    elements["next-card"].disabled = cardIndex === section.cards.length - 1;
    elements["card-announcement"].textContent = `${section.name}, thẻ ${cardIndex + 1} trên ${section.cards.length}, ${isBack ? "mặt sau" : "mặt trước"}. ${elements["card-content"].textContent}`;
  }

  function flipCard() {
    isBack = !isBack;
    renderCard();
  }

  function changeCard(offset) {
    const nextIndex = cardIndex + offset;
    if (nextIndex < 0 || nextIndex >= sections[sectionIndex].cards.length) return;
    cardIndex = nextIndex;
    isBack = false;
    elements["explanation-panel"].close();
    renderCard();
  }

  elements["section-select"].addEventListener("change", (event) => {
    sectionIndex = Number(event.target.value);
    cardIndex = 0;
    isBack = false;
    elements["explanation-panel"].close();
    renderCard();
  });

  elements.flashcard.addEventListener("click", flipCard);
  elements["flip-card"].addEventListener("click", flipCard);
  elements["previous-card"].addEventListener("click", () => changeCard(-1));
  elements["next-card"].addEventListener("click", () => changeCard(1));

  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.isComposing || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    if (elements["explanation-panel"].open) return;
    if (event.target.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")) return;

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      if (!event.repeat) changeCard(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.code === "Space" || event.key === " ") {
      // Nút và liên kết giữ hành vi Space gốc, tránh kích hoạt hai lần.
      if (event.target.closest("button, a, [role='button']")) return;
      event.preventDefault();
      if (!event.repeat) flipCard();
    }
  });

  for (const code of ["ja", "vi"]) {
    for (const prefix of ["language", "explanation-language"]) {
      elements[`${prefix}-${code}`].addEventListener("click", () => {
        language = code;
        renderCard();
        elements["explanation-scroll"].scrollTop = 0;
      });
    }
  }

  elements["explanation-toggle"].addEventListener("click", () => {
    renderCard();
    previousPageOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    elements["explanation-panel"].showModal();
    elements["explanation-toggle"].setAttribute("aria-expanded", "true");
    elements["explanation-scroll"].scrollTop = 0;
    elements["explanation-title"].focus({ preventScroll: true });
    if (!reducedMotion.matches) {
      elements["explanation-popup"].animate(
        [{ opacity: 0, transform: "translateY(8px) scale(0.98)" }, { opacity: 1, transform: "translateY(0) scale(1)" }],
        { duration: 180, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
      );
    }
  });
  elements["explanation-close"].addEventListener("click", () => {
    elements["explanation-panel"].close();
  });
  elements["explanation-panel"].addEventListener("close", () => {
    document.documentElement.style.overflow = previousPageOverflow ?? "";
    elements["explanation-toggle"].setAttribute("aria-expanded", "false");
    elements["explanation-toggle"].focus({ preventScroll: true });
  });
  elements["explanation-panel"].addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const controls = elements["explanation-panel"].querySelectorAll("button:not(:disabled), [tabindex='0']");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === elements["explanation-title"])) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  let pressedBackdrop = false;
  elements["explanation-panel"].addEventListener("pointerdown", (event) => {
    pressedBackdrop = event.target === elements["explanation-panel"];
  });
  elements["explanation-panel"].addEventListener("click", (event) => {
    if (pressedBackdrop && event.target === elements["explanation-panel"]) {
      elements["explanation-panel"].close();
    }
    pressedBackdrop = false;
  });

  renderCard();
}

initializeApp().catch((error) => {
  document.getElementById("card-content").textContent = error.message;
  document.getElementById("card-announcement").textContent = error.message;
  for (const button of document.querySelectorAll("button, select")) button.disabled = true;
  console.error(error);
});
