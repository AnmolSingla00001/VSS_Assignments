document.write("1-i'm before loop");
document.write("<br>");
setTimeout(function cb2000() {
  document.write("2-i'm before loop");
  document.write("<br>");
}, 2000);
setTimeout(function cb6000() {
  for (var i = 0; i < 9; i++) {
    document.write("3-loop runing", i);
    document.write("<br />");
  }
}, 6000);
document.write("4-i'm affter loop");
document.write("ABC" + undefined);
