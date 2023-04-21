const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {
        result.push(i)
    }

    return result
}

const currents = new Date()
currents.setDate(1)

// daysOfWeek = { 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat}

const createData = () => {
    const current = new Date()
    current.setDate(1) // sets day to be first day of the month

    const startDay = current.getDay() 
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(6)
    const days = createArray(7)
    let value = ''
    let day = 1

    //for (weekIndex in weeks)
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        value = {
            week: weekIndex + 1,
            days: []
        }
        
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {

            if ((dayIndex < startDay && value.week == 1) || day > daysInMonth){
                value.days.push({
                    dayOfWeek: dayIndex,
                    value: ''
                })
                
            } else {
                value.days.push({
                    dayOfWeek: dayIndex,
                    value: day
                })
                day++
            }
        }

        if(day > (daysInMonth+1)) break
        weeks[weekIndex] = value;
    }

    return weeks;
}


const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}
        <td class="${classString}">
            ${value}
        </td>
    `
    return result
}

const createHtml = (data) => {
    let result = ''

    for (let i = 0; i < data.length; i++) { //for (week, days in data) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${data[i].week}`)

        for (let k = 0; k < data[i].days.length; k++) { //for (dayOfWeek, value in days)
            let classString = 'table__cell'
			let isToday = new Date().getDate() === data[i].days[k].value
            let isWeekend = data[i].days[k].dayOfWeek == 0 || data[i].days[k].dayOfWeek == 6
            let isAlternate = data[i].week / 2

			if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString = `${classString} table__cell_weekend`
            if (isAlternate) classString = `${classString} table__cell_alternate`

            inner = addCell(inner, classString, data[i].days[k].value)
        }

        result += `<tr>${inner}</tr>`
    }

    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)















// function getDaysArray(year, month) {
//     var numDaysInMonth, daysInWeek, daysIndex, index, i, l, daysArray;

//     //numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     numDaysInMonth = new Date(year, month, 0).getDate()
//     daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     daysIndex = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
//     index = daysIndex[(new Date(year, month - 1, 1)).toString().split(' ')[0]];
//     console.log(index)
//     daysArray = [];

//     for (i = 0; i < numDaysInMonth; i++) {
//         daysArray.push((i + 1) + '. ' + daysInWeek[index++]);
//         if (index == 7) {
//             index = 0;
//         }
//     }

//     return daysArray;
// }

// console.log(getDaysArray(new Date().getFullYear(), new Date().getMonth()+1))