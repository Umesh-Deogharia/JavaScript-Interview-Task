const body = document.querySelector('body');
const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Mango",
    "Strawberry",
    "Watermelon",
    "Papaya",
    "Cherry",
    "Blueberry",
    "Kiwi",
    "Guava",
    "Peach",
    "Apricot",
    "Plum",
    "Coconut",
    "Lemon",
    "Lime",
    "Fig",
    "Dates",
    "Pomegranate",
    "Dragonfruit",
    "Raspberry",
    "Blackberry",
    "Lychee",
    "Mulberry",
    "Starfruit",
    "Passionfruit",
    "Tangerine"
];

let inp = document.querySelector('#inp');

let list = document.createElement('div');
body.appendChild(list);

function add(data) {
    list.innerHTML = '';
    data.forEach((elem) => {
        let div = document.createElement('div');
        div.innerText = elem;
        // list.innerText = elem;
        list.appendChild(div)
    })
}
add(items)
inp.addEventListener('input', (e) => {
    let data = e.target.value.toLowerCase();
    // body.innerText = data;
    let filtered = items.filter((elem) => elem.toLowerCase().includes(data));
    add(filtered)
})