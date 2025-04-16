
function doPost(e) {
  var ss = SpreadsheetApp.openById("AKfycbzwDy9NyafVwFDChnjjvt5s7r8DV0kctPwdESL6TVLT");
  var sheet = ss.getSheetByName("Sheet1");
  var nama = e.parameter.nama;
  var telepon = e.parameter.telepon;
  var pesan = e.parameter.pesan;
  sheet.appendRow([new Date(), nama, telepon, pesan]);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
