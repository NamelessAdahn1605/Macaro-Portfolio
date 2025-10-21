let lightmode = localStorage.getItem('lightmode')
const setmode = document.getElementById('mode-bt')

const setLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const setDarkmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if (lightmode === 'active') setLightmode()

setmode.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? setLightmode() : setDarkmode()
})