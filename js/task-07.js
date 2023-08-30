const rangeFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

rangeFontSize.addEventListener('input', () => text.style.fontSize = `${rangeFontSize.value}px`)
