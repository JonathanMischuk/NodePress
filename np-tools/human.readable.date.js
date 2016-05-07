exports.createHumanReadableDate = createHumanReadableDate;

function createHumanReadableDate () {
    var date  = new Date(),
        month = date.getMonth() + 1,
        day   = date.getDate(),
        year  = date.getFullYear(),
        hour  = date.getHours().toString(),
        minutes = date.getMinutes().toString(),
        seconds = date.getSeconds().toString();

    hour = hour.length === 1 ? '0' + hour : hour;
    minutes = minutes.length === 1 ? '0' + minutes : minutes;
    seconds = seconds.length === 1 ? '0' + seconds : seconds;

    return month + '/' + day + '/' + year + ' - ' + hour + ':' + minutes + ':' + seconds;
}