const titleDOM = document.querySelector('title')
const h1DOM = document.querySelector('h1')
const title = 'Zuikio darzas';

h1DOM.textContent = title;
h1DOM.style.backgroundColor = 'yellow';
h1DOM.style.fontSize = '2rem';

let time = 0;

function changeTitle( ) {
    time++;

    if (time > 5) {
        clearInterval(timer);
         return;  // su return skaiciuja tik iki 5
    }
    
    
    if(time % 2 === 0){
        titleDOM.textContent = `Document (${time})`;   
    } else {
        titleDOM.textContent = `${title} (${time})`;   
    }

}

const timer = setInterval(changeTitle, 1000);

const liListDOM = document.querySelectorAll('li');
const vegetable = ['pomidoras', 'agurkas', 'svogunas', 'bulve', 'dobiliukas'];

let index = 0;

for (const liDOM of liListDOM ) {
    liDOM.textContent = vegetable[index] ? vegetable[index] : 'error';

    if (vegetable[index]) {
        liDOM.classList.add('zuikio-darzove');
    } else {
        liDOM.classList.add('zuikio-darzo-error');
    }
    index++;
}

