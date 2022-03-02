const p = document.querySelector('p');
const dice = document.querySelector('.dice');
const span = document.querySelector('span')

dice.addEventListener('click', () => {
    getAdvice();
})


const getAdvice = async() => {
    try {
        const res = await axios.get('https://api.adviceslip.com/advice');
        p.innerHTML = res.data.slip.advice;
        span.innerHTML = res.data.slip.id;
    } catch (e) {
        p.innerHTML = 'Something went wrong';
    }
}