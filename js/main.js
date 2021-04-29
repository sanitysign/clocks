const clocks = document.querySelectorAll('.clocks')
const hour = document.querySelectorAll('.clocks__hour')
const minute = document.querySelectorAll('.clocks__minute')
const second = document.querySelectorAll('.clocks__second')

let timeoutId = null

function runClocks() {
    clearTimeout(timeoutId)

    clocks.forEach(clock => {
        if (!clock.classList.contains('visible')) clock.classList.add('visible')
    })

    const seconds = new Date().getSeconds()
    const minutes = (new Date().getMinutes() * 60 + seconds) / 60
    let hours = new Date().getHours()
    hours = hours > 12 ? hours - 12 : hours
    hours = (hours * 60 + minutes) / 60

    hour.forEach(hour => hour.style.transform = `rotate(${360 * hours / 12}deg)`)
    minute.forEach(minute => minute.style.transform = `rotate(${360 * minutes / 60}deg)`)
    second.forEach(second => second.style.transform = `rotate(${360 * seconds / 60}deg)`)

    timeoutId = setTimeout(runClocks, 1000)
}

setTimeout(runClocks, 1000)