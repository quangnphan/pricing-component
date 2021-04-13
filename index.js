const checkbox = document.querySelector(".switch input");
const price = document.querySelector(".price .price-fix");
const switcher = document.querySelector(".switch");
const month = document.querySelector(".month");
const range = document.querySelector(".range");
//onclick button
switcher.onclick = function () {
  if (checkbox.checked == true) {
    const priceInt = parseInt(price.textContent);
    price.textContent = `${(priceInt - priceInt * 0.25) * 12}`;
    month.textContent = ` /year`;
  } else {
    refresh();
    month.textContent = ` /month`;
  }
};
//slider
const view = document.querySelector(".page-views span");
range.addEventListener("input", refresh);

function refresh() {
  if (range.value == 1) {
    if (checkbox.checked == true) {
      price.textContent = 72;
    } else {
      price.textContent = 8;
    }
    view.textContent = "10k";
  }

  if (range.value == 2) {
    if (checkbox.checked == true) {
      price.textContent = 108;
    } else {
      price.textContent = 12;
    }

    view.textContent = "50k";
  }
  if (range.value == 3) {
    if (checkbox.checked == true) {
      price.textContent = 144;
    } else {
      price.textContent = 16;
    }

    view.textContent = `100k`;
  }
  if (range.value == 4) {
    if (checkbox.checked == true) {
      price.textContent = 216;
    } else {
      price.textContent = 24;
    }

    view.textContent = "500k";
  }
  if (range.value == 5) {
    if (checkbox.checked == true) {
      price.textContent = 324;
    } else {
      price.textContent = 36;
    }

    view.textContent = "1M";
  }
}
