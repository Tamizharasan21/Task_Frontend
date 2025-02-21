function updateTotal() {
    const options = document.getElementsByName('bundle');
    let totalPrice = 0;
    
    options.forEach(option => {
        let selectionDiv = option.parentElement.querySelector('.selection');
        let optionDiv = option.parentElement;
        if (selectionDiv) {
            selectionDiv.style.display = option.checked ? 'block' : 'none';
        }
        if (option.checked) {
            totalPrice = parseInt(option.value);
            optionDiv.classList.add("selected");
        }
        else {
            optionDiv.classList.remove("selected"); 
        }
    });
    
    document.getElementById('total-price').textContent = `DKK ${totalPrice}.00`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateTotal();
});

function addToCart() {
    alert("Items added to cart successfully!");
}
