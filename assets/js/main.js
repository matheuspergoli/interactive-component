document.querySelectorAll('.rate').forEach(rate => {
    rate.addEventListener('click', () => {
        rate.classList.toggle('selected')
    })
})

const sectionThank = document.querySelector('#main-section-thank')
sectionThank.style.display = 'none'

document.querySelector('#submit').addEventListener('click', () => {
    const elements = document.querySelectorAll('.rate.selected')
    sectionThank.style.display = 'block'
    document.querySelector('#main-section').style.display = 'none'
    const feedback = document.querySelector('#feedback')
    feedback.textContent = `You selected ${elements.length} out of 5`
})