const body = document.querySelector('body');


const div = document.createElement('div');
const btn = document.createElement('button');

div.innerHTML = `<h1>Click the button to get a joke</h1>`;
btn.innerText = `Get New Joke`;

btn.addEventListener('click', async () => {
    // body.innerText = '';
    try {
        div.innerText = 'Loading....'
        btn.disabled = true;
        const api = await fetch('https://official-joke-api.appspot.com/random_joke');

        if (!api.ok) {
            throw new Error('Fetch Failed');
            return;
        }

        const data = await api.json();
        div.innerText = ""
        btn.disabled = false;
        div.innerHTML = `<h1>${data?.setup}</h1> <h3>${data?.punchline}</h3>`
    }

    catch (error) {
        body.innerHTML = `<h1>Failed to Fetch joke, Check the link</h1>`
        console.error(error.message)
        btn.disabled = true;
    }

})


body.appendChild(div);
body.appendChild(btn);

