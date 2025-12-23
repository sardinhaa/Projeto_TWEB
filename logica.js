// aplica aos dois selects
const pickupSelect = document.getElementById("pickup");
const dropoffSelect = document.getElementById("dropoff");

if (pickupSelect) lockSelectPlaceholder(pickupSelect);
if (dropoffSelect) lockSelectPlaceholder(dropoffSelect);

function lockSelectPlaceholder(select) {
  // primeira option é o placeholder
  const placeholder = select.options[0];

  // garante que está sempre disabled
  placeholder.disabled = true;

  // se alguém tentar voltar a escolher o placeholder, força limpar
  select.addEventListener("change", () => {
    if (select.value === "") {
      // volta a placeholder visualmente mas sem valor válido
      select.selectedIndex = 0;
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const fleetList = document.querySelector(".fleet-list");
  const prevArrow = document.querySelector(".fleet-prev");
  const nextArrow = document.querySelector(".fleet-next");

  if (!fleetList || !prevArrow || !nextArrow) return;

  const card = fleetList.querySelector(".fleet-item");
  const scrollAmount = card ? card.offsetWidth + 16 : 300;

  prevArrow.addEventListener("click", () => {
    fleetList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextArrow.addEventListener("click", () => {
    fleetList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

