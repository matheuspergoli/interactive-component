document.querySelectorAll('.rate').forEach(rate => {
    rate.addEventListener('click', () => {
        document.querySelectorAll('.rate').forEach(rateElem => {
            rateElem.classList.remove('selected')
        })
        rate.classList.toggle('selected')
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