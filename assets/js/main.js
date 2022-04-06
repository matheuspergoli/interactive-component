const rateItem = document.querySelectorAll('.rate')

rateItem.forEach(item => {
    item.addEventListener('click', () => {
        rateItem.forEach(item => {
            item.classList.remove('selected')
        })
        item.classList.add('selected')
    })
})

const sectionThank = document.querySelector('#main-section-thank')
sectionThank.style.display = 'none'

document.querySelector('#submit').addEventListener('click', () => {
    const elements = document.querySelector('.rate.selected')
    sectionThank.style.display = 'block'
    document.querySelector('#main-section').style.display = 'none'
    const feedback = document.querySelector('#feedback')
    feedback.textContent = `You selected ${elements.textContent} out of 5`
})