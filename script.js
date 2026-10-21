/*
  AXION — configurações do portfólio
  WhatsApp no formato internacional: código do país + DDD + número.
*/
const CONFIG = {
  whatsapp: "5511974965614",
  agency: "Axion"
};

function makeWhatsAppLink(message) {
  const phone = CONFIG.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Link principal de contato.
const contactButton = document.querySelector("#contact-button");
if (contactButton) {
  contactButton.href = makeWhatsAppLink(
    `Olá! Conheci a ${CONFIG.agency} pelo portfólio e gostaria de conversar sobre um projeto.`
  );
  contactButton.target = "_blank";
  contactButton.rel = "noopener noreferrer";
}

// Botões de serviço: navega diretamente para o WhatsApp para evitar bloqueio de popup.
document.querySelectorAll("[data-service]").forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.service || "um projeto";
    const message = `Olá! Tenho interesse em ${service.toLowerCase()}. Podemos conversar sobre uma solução para o meu negócio?`;
    window.location.href = makeWhatsAppLink(message);
  });
});

// Menu responsivo para celulares.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Ano do rodapé atualizado automaticamente.
const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
