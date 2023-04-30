const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const date = document.getElementById('date_error')
const errorMonth = document.getElementById('month_error')
const errorYear = document.getElementById('year_error')

const input = document.getElementsByClassName('day-input')
const label = document.getElementsByClassName('day-label')

const btn = document.getElementById('btn')

const onlyNum = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');  
}

const errorMsg = (target) => {
    target.style.visibility = 'visible'
    target.textContent = 'Must be a valid date'
    target.style.transition = '1s'
    
}

const clearErrorMsg = (target) => {
    target.style.visibility = 'hidden'
    target.textContent = ''
    target.style.transition = '1s'
    
}

function error() {
    for(let i = 0; i < input.length; i++){
        input[i].style.borderColor = 'hsl(0, 100%, 67%)'
        label[i].style.color= 'hsl(0, 100%, 67%)'
        label[i].style.transition = '1s'
    }
}

function clearError() {
    for(let i = 0; i < input.length; i++){
        input[i].style.borderColor = ''
        label[i].style.color= ''
        label[i].style.transition = '1s'
    }
}

let zero = 0

day.addEventListener("input", (event) => {
    onlyNum(event)

    if(day.value > 31) {
        errorMsg(date)
        error()
    }else{
        clearErrorMsg(date)
        clearError()
    }
})

month.addEventListener("input", (event) => {
    onlyNum(event)
    if(month.value > 12) {
        errorMsg(errorMonth)
        error()
    }else{
        clearErrorMsg(errorMonth)
        clearError()
    }
})

year.addEventListener("input", (event) => {
    onlyNum(event)
    if(year.value > 2023) {
        errorMsg(errorYear)
        error()
    }else{
        clearErrorMsg(errorYear)
        clearError()
    }
})

const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')
const wholeDate = new Date();
let yearDate = wholeDate.getFullYear();
let monthDate = wholeDate.getMonth() + 1
let daysDate = wholeDate.getDate() // ra dgea

function ageCalculator() {
    let tveebi = 0;
    let dgeebi = 0;
    if(month.value > monthDate){
        tveebi = 12 - month.value + monthDate
        months.textContent = tveebi
        years.textContent = yearDate - year.value - 1
        console.log(yearDate, year.value)
    }else if(month.value < monthDate){
        tveebi = monthDate - month.value 
        months.textContent = tveebi
        years.textContent = yearDate - year.value
    }else{
        months.textContent = tveebi
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    if(day.value > daysDate){
        days.textContent = getDaysInMonth(year.value, month.value) - day.value + daysDate
    }else if(day.value < daysDate){
        days.textContent = daysDate - day.value
    }else{
        days.textContent = dgeebi
    }

}


btn.addEventListener('click', () => {
    if(year.value == '' || day.value == '' || month.value ==''
       || year.value > yearDate  ){
        error()
    }else{
        ageCalculator()
        clearError()
    }
})

