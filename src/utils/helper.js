function compareDate(timeString1, timeString2) {
    let d1 = new Date(timeString1);
    let d2 = new Date(timeString2);
    return d1.getTime() > d2.getTime();
};

module.exports = {
    compareDate
};