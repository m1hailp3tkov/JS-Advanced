function addItem() {
    const select = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;

    select.appendChild(option);
    text.value = '';
    value.value = '';
}