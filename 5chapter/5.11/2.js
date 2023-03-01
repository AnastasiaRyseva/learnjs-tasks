
const getWeekDay = (date) => {
    let days = {
        0: 'ВС',
        1: 'ПН',
        2: 'ВТ',
        3: 'СР',
        4: 'ЧТ',
        5: 'ПТ',
        6: 'СБ',
    }
    let day = date.getDay();
    return days[day]
}


getWeekDay(new Date(2012, 0, 3))