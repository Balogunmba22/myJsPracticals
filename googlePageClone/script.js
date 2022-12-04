const headerEl = document.querySelectorAll('.google')


const randNo = () => Math.floor(Math.random() * 256)
const randomCol = () => `rgb(${randNo()}, ${randNo()}, ${randNo()})`


for (const span of headerEl) {
    const color = () => span.style.color = randomCol();
    setInterval(color, 2000)
} 
