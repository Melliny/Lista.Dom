let count = 0;
let itemCount = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const messageInput = document.getElementById('messageInput');
const messageCounter = document.getElementById('messageCounter');
const itemType = document.getElementById('itemType');
const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    } else {
        alert('O contador já está em zero.');
    }
});

messageInput.addEventListener('input', () => {
    const charCount = messageInput.value.replace(/ /g, '').length;
    messageCounter.textContent = `${charCount} caracteres`;
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const paragraph = document.createElement('p');
        paragraph.textContent = messageInput.value;
        document.body.appendChild(paragraph);
        messageInput.value = ''; 
        messageCounter.textContent = '0 caracteres'; 
    }
});

addItemBtn.addEventListener('click', () => {
    const item = itemInput.value;
    if (item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemCount++; 
        listItem.textContent = `${itemCount}. ${item}`; 

        const list = document.createElement(itemType.value);
        list.appendChild(listItem);
        itemList.appendChild(list);
        itemInput.value = ''; 
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    itemCount = 0;
    counterDisplay.textContent = count;
    itemList.innerHTML = ''; 
    messageInput.value = '';
    messageCounter.textContent = '0 caracteres'; 
    document.querySelectorAll('p').forEach(paragraph => paragraph.remove()); 
});