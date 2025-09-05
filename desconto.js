function toggleDiscount() {
  const discountBody = document.getElementById('apply-discount-body');
  const icon = document.getElementById('toggle-icon');

  if (
    discountBody.style.display === 'none' ||
    discountBody.style.display === ''
  ) {
    discountBody.style.display = 'block';
    icon.classList.add('bx-chevron-up');
    icon.classList.remove('bx-chevron-down');
  } else {
    discountBody.style.display = 'none';
    icon.classList.add('bx-chevron-down');
    icon.classList.remove('bx-chevron-up');
  }
}
const discountCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};
function applyDiscount() {
  const discountCode = document
    .getElementById('discount-code')
    .value.trim()
    .toUpperCase();
  const discountMenssageElement = document.getElementById('discount-message');
  const totalPriceElement = document.getElementById('total-price');

  if (discountCupons[discountCode]) {
    const discount = discountCupons[discountCode];
    console.log(discount);
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);
    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(
      2
    )}`;
    localStorage.setItem('discount', discountCode);

    discountMenssageElement.style.color = 'green';
    discountMenssageElement.innerText = `Desconto de ${discountCode} aplicado`;
    document.getElementById('discount-code').value = '';
  } else {
    discountMenssageElement.style.color = 'red';
    discountMenssageElement.innerText = 'Cupom Inválido';
  }
}

function checkStoredDiscount() {
  const storedDiscount = localStorage.getItem("discount");
  const discountMenssageElement = document.getElementById("discount-message");

  if (storedDiscount) {
    localStorage.removeItem('discount');
  }

  discountMenssageElement.innerText = "";
}

window.onload = checkStoredDiscount;