const body = document.querySelector('body');

// Create DOM elements
const div = document.createElement('div');
const btn = document.createElement('button');
btn.innerText = 'New Quote';

// Add click event
btn.addEventListener('click', generateAdvice);

// Async function to fetch and display advice
async function generateAdvice() {
    try {
        const api = await fetch(`https://api.adviceslip.com/advice?t=${Math.random()}`);


        if (!api.ok) {
            throw new Error('API Not Fetched');
        }

        const Data = await api.json();
        div.innerHTML = `<h1>${Data?.slip?.advice}</h1>`;
    } catch (error) {
        div.innerHTML = `<h3>❌ API Fetch Failed. Try again.</h3>`;
        console.error(error);
    }
}

// Initial DOM setup
body.appendChild(div);
body.appendChild(btn);
