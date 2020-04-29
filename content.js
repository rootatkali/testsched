const originalTable = $('#raw').html(); // Get default table contents

// Shows a class of elements
function ttshow(major) {
  $("." + major).show();
}

// Hides a class of elements
function tthide(major) {
  $("." + major).hide();
}

function ttparseTimetable() {
  $('#raw').html(originalTable);
  if ($("#phys").is(":checked")) {
    ttshow("physics");
    $('#3a').html("פיזיקה");
    $('#4a').html("פיזיקה");
    $('#9d').html("פיזיקה");
  } else {
    tthide("physics");
  }

  if ($("#bio-b1").is(":checked")) {
    ttshow("biology-b1");
    $('#3a').html("ביולוגיה");
    $('#4a').html("ביולוגיה");
    $('#4e').html("ביולוגיה");
    $('#5e').html("ביולוגיה");
  } else {
    tthide("biology-b1");
  }

  if ($("#bio-b2").is(":checked")) {
    ttshow("biology-b2");
    $('#6c').html("ביולוגיה");
    $('#7c').html("ביולוגיה");
    $('#7e').html("ביולוגיה");
    $('#8e').html("ביולוגיה");
  } else {
    tthide("biology-b2");
  }

  if ($("#socio").is(":checked")) {
    ttshow("sociology");
    $('#3a').html("מדעי המדינה");
    $('#4a').html("מדעי המדינה");
    $('#4e').html("כלכלה");
    $('#5e').html("כלכלה");
  } else {
    tthide("sociology");
  }

  if ($("#law").is(":checked")) {
    ttshow("philosophy");
    $('#3a').html("מחשבת/משפטים");
    $('#4a').html("מחשבת/משפטים");
    $('#4e').html("משפטים/מחשבת");
    $('#5e').html("משפטים/מחשבת");
  } else {
    tthide("philosophy");
  }

  if ($("#chem").is(":checked")) {
    ttshow("chemistry");
    $('#7a').html("כימיה");
    $('#8a').html("כימיה");
  } else {
    tthide("chemistry");
  }

  if ($("#cs").is(":checked")) {
    ttshow("computer");
    $('#6c').html("מדעי המחשב");
    $('#7c').html("מדעי המחשב");
    $('#8c').html("אסמבלי");
    $('#9c').html("אסמבלי");
    $('#7d').html("מדעי המחשב");
    $('#8d').html("מדעי המחשב");
  } else {
    tthide("computer");
    
  }

  if ($("#art").is(":checked")) {
    ttshow("arts");
    $('#6c').html("שפת אמנות");
    $('#7c').html("שפת אמנות");
  } else {
    tthide("arts");
  }

  if ($("#sci").is(":checked")) {
    ttshow("science");
    $('#9c').html("מדע וטכנולוגיה (לא מיה)");
    $('#10c').html("מדע וטכנולוגיה (לא מיה)");
    $('#9e').html("מדע וטכנולוגיה (מיה)");
    $('#10e').html("מדע וטכנולוגיה (מיה)");
  } else {
    tthide("science");
  }

  if ($("#arab").is(":checked")) {
    ttshow("arabic");
    $('#4e').html("ערבית");
    $('#5e').html("ערבית");
  } else {
    tthide("arabic");
  }

  if ($("#music").is(":checked")) {
    ttshow("musics");
    $('#8e').html("הרכבים");
    $('#9e').html("הרכבים");
  } else {
    tthide("musics");
  }

  ttshow("driving");

  if ($("#hist").is(":checked")) {
    ttshow("history");
    tthide("driving");
    $('#6d').html("היסטוריה 5");
    $('#5d').html("היסטוריה 5");
  } else {
    tthide("history");
  }

  if ($("#elec").is(":checked")) {
    ttshow("electronic");
    tthide("driving");
    $('#6d').html("מבוא להנדסת אלקטרוניקה");
    $('#5d').html("מבוא להנדסת אלקטרוניקה");
    $('#7d').html("מערכות ספרתיות");
    $('#8d').html("מערכות ספרתיות");
    $('#7e').html("מערכות ספרתיות");
    $('#8e').html("מערכות ספרתיות");
  } else {
    tthide("electronic");
  }

  if ($("#thea").is(":checked")) {
    ttshow("theater");
    tthide("driving");
    $('#6d').html("תאטרון עיוני");
    $('#5d').html("תאטרון עיוני");
  } else {
    tthide("theater");
  }

  $("#result").show();
}

// Converts the '#raw' table to a CSV file and downloads it.
function ttCSV() {
  $('#raw').TableCSVExport({
    showHiddenRows: true,
    delivery:'download',
    filename:'timetable.csv'
  });
}
