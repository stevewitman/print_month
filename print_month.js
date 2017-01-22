function printMonth(month, year) {
  var d = new Date(month + '/1/' + year);
  var start = d.getDay();
  console.log(d)
  month = month - 1;
  var nameOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var day = 1 - start;
  console.log('         ' + nameOfMonth[month])
  console.log(' S  M  T  W  R  F  S')
  while (day <= daysInMonth[month]) {
    var week = '';
    for (var i=1; i<=7; i++) {
      if (day < 1) {
        week += '  ';
      } else if (day < 10) {
        week += ' ' + day;
      } else if (day <= daysInMonth[month]) {
        week += day;
      }
      if (i < 7) {
        week += ' ';
      }
      day++;
    }
    console.log(week)

  }

}

printMonth(10, 2017)
