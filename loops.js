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
console.log(createArray(5))

const currents = new Date()
console.log(currents.getDay()) // 5: Fri
currents.setDate(1)
console.log(currents.getDay()) // 6: Sat

console.log('---------------------')

// daysOfWeek = { 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat}

const createData = () => {
    const current = new Date()
    current.setDate(1) // sets day to be first day of the month

    const startDay = current.getDay() // 6: Sat
    const daysInMonth = getDaysInMonth(current) // 30

    const weeks = createArray(5)
    const days = createArray(7)
    let value = null

    //for (weekIndex in weeks)
    //const [weekIndex, weekDay] of weeks.entries()
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        value = {
            week: parseInt(weekIndex) + 1,
            days: []
        }
        //console.log(`val ${weekIndex}`,value)
        let day = 1
        for (let dayIndex = startDay; dayIndex < days.length; dayIndex++) {
            // let day = startDay - dayIndex + 1
            // console.log(day)
            // const isValid = day > 0 && day <= daysInMonth

            // value.days.push({
            //     dayOfWeek: dayIndex + 1,
            //     value: isValid ? day : null,
            // })
            if(day<=daysInMonth){
                value.days.push({
                    dayOfWeek: dayIndex,
                    value: day
                })
                day++
            }
        }

        console.log(value)
        weeks[weekIndex] = value;
    }
    console.log(weeks)
    return weeks;
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    // for (week, days in data) {
    //     let inner = ""
    //     addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
    //     for (dayOfWeek, value in days) {
    //         classString = table__cell
	// 					isToday = new Date === value
    //         isWeekend = dayOfWeek = 1 && dayOfWeek == 7
    //         isAlternate = week / 2

    //         let classString = 'table__cell'

	// 					if (isToday) classString = `${classString} table__cell_today`
    //         if (isWeekend) classString === '{classString} table__cell_weekend'
    //         if (isAlternate) classString === '{classString} table__cell_alternate'
    //         addCell(inner, classString, value)
    //     }

    //     result = `<tr>${inner}</tr>`
    // }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)