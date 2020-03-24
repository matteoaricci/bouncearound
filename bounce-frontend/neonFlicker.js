function flickerText(tagId) {

const target = window.document.getElementById(tagId)

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(360, 100%, 100%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);
}