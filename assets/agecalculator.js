



$(document).ready(function () {
  $("#calculate").click(function () {
    var mdate = $("#birth_date").val().toString();
    var yearThen = parseInt(mdate.substring(0, 4), 10);
    var monthThen = parseInt(mdate.substring(5, 7), 10);
    var dayThen = parseInt(mdate.substring(8, 10), 10);

    var today = new Date();
    var birthday = new Date(yearThen, monthThen - 1, dayThen);

    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    if (
      today.getMonth() == birthday.getMonth() &&
      today.getDate() == birthday.getDate()
    ) {
      $(".exact_age").html("<h3> HAPPY BIRTHDAY!<h3>");
    }

    var month_age = Math.floor(day_age / 30);

    day_age = day_age % 30;

    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
      $(".exact_age").html("<h3>Invalid birthday - Please try again!<h3>");
    } else {
      $(".exact_age").html(
        '<h3>Participant is <span id="age">' +
          year_age +
          " years " +
          month_age +
          " months " +
          day_age +
          " days</span> old<h3>"
      );
    }
  });
});
