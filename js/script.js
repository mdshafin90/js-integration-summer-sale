let itemCount = 0;
let total = 0;

// Card Button

function handleAddToCart(target) {

    const purchaseItemName = document.getElementById('purchase-items-name');

    const productNameParent = target.parentNode.childNodes[1];
    const productChild = productNameParent.childNodes[3];
    const productName = productChild.childNodes[3].innerText;

    const li = document.createElement('li');
    li.innerText = productName;

    itemCount++;
    li.innerText = itemCount + ". " + productName;

    purchaseItemName.appendChild(li);

    const productPriceString = productChild.childNodes[5].innerText.split(" ")[0];
    const productPrice = parseFloat(productPriceString);

    total = total + productPrice;

    const totalAmount = document.getElementById('total-price');

    totalAmount.innerText = total;

    if (total > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
    }
};

total = parseFloat(document.getElementById('total-price').innerText);

// Apply Button

document.getElementById('apply-btn').addEventListener('click', function () {
    const discountAmount = document.getElementById('discount-amount');
    const discount = total * 0.2;
    discountAmount.innerText = discount.toFixed(2);

    const grandTotalWithMinus = total - discount;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = grandTotalWithMinus;
});

// Coupon Code Get

document.getElementById('coupon-code').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const applyCouponWithBtn = document.getElementById('apply-btn');
    if (text === 'SELL200' && total >= 200) {
        applyCouponWithBtn.removeAttribute('disabled');
        swal("Your Coupon Code is Correct");
    };
});

// Rest Options

document.getElementById('go-home-btn').addEventListener('click', function () {

    location.reload();

    // const inputFieldValue = document.getElementById('coupon-code');
    // if (inputFieldValue) {
    //     inputFieldValue.value = '';
    // }

    // const purchaseItemsList = document.getElementById('purchase-items-name');
    // if (purchaseItemsList) {
    //     purchaseItemsList.innerHTML = '';
    // }

    // const priceElementsIds = ['total-price', 'discount-amount', 'grand-total'];
    // for (const id of priceElementsIds) {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.textContent = '00';
    //     }
    // }
});