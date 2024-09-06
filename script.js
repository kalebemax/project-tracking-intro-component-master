const btn = document.querySelector('#btn')

const clickMenu = () => {
    const items = document.getElementById('items')
    const isMenuVisible = items.style.display === 'block'

    items.style.display = isMenuVisible ? 'none' : 'block'
    
    if (isMenuVisible) {
        btn.innerHTML = '<img src="images/icon-hamburger.svg">'
        
    } else {
        btn.innerHTML = '<img src="images/icon-close.svg">'
    }
}

btn.addEventListener('click', clickMenu)
