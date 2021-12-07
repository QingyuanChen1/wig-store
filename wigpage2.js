
const lg = document.querySelector(`#lg`)
const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)
const t4 = document.querySelector(`#thumb4`)

t1.addEventListener(`click`,function(){
    lg.setAttribute(`src`,`img/a6.jpg`)
})

t2.addEventListener(`click`,function(){
    lg.setAttribute(`src`,`img/a6-1.jpg`)
})

t3.addEventListener(`click`,function(){
    lg.setAttribute(`src`,`img/a6-2.jpg`)
})
t4.addEventListener(`click`,function(){
    lg.setAttribute(`src`,`img/a6-3.jpg`)
})

