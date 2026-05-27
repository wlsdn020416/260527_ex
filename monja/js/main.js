const recommendations = {
  gentle: {
    title: "명란 모치 치즈 몬자",
    text: "짭조름한 명란, 쫀득한 떡, 고소한 치즈가 몬자의 묽은 질감을 부드럽게 이어줘서 첫 주문으로 가장 안정적입니다.",
    tip: "같이 먹는다면 해산물 몬자를 두 번째로 더해보세요."
  },
  sea: {
    title: "해산물 믹스 몬자",
    text: "새우와 오징어류 토핑이 철판 향과 잘 어울립니다. 도쿄 로컬 음식다운 감칠맛을 바로 느끼고 싶을 때 좋습니다.",
    tip: "치즈 토핑을 추가하면 짠맛과 고소함이 더 또렷해집니다."
  },
  spicy: {
    title: "김치 몬자",
    text: "한국 여행자에게 익숙한 매콤함이 있어 첫인상의 낯섦을 줄여줍니다. 돼지고기나 치즈와도 잘 맞습니다.",
    tip: "매운맛이 강한 가게도 있으니 처음엔 기본 매운 정도로 주문하세요."
  },
  classic: {
    title: "야채 또는 기본 소스 몬자",
    text: "양배추, 반죽, 소스의 기본 조합을 차분히 느낄 수 있습니다. 몬자 자체의 식감이 궁금하다면 좋은 선택입니다.",
    tip: "오코노미야키와 함께 주문하면 차이가 훨씬 선명합니다."
  }
};

function renderRecommendation(value) {
  const result = document.querySelector("#recommendResult");
  const item = recommendations[value] || recommendations.gentle;

  result.innerHTML = `
    <strong>${item.title}</strong>
    <p>${item.text}</p>
    <small>${item.tip}</small>
  `;
}

function setupTastePicker() {
  const picker = document.querySelector("#tastePicker");
  if (!picker) return;

  renderRecommendation(picker.value);
  picker.addEventListener("change", (event) => {
    renderRecommendation(event.target.value);
  });
}

function setupTypeFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".monja-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      cards.forEach((card) => {
        const shouldShow = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
}

function setupActiveNavigation() {
  const links = document.querySelectorAll(".nav-link[href^='#']");
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  setupTastePicker();
  setupTypeFilters();
  setupActiveNavigation();
});
