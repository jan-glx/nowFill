function onEdit(event)
{
  var r = SpreadsheetApp.getActiveRange();

  for (var ii = 0; ii < r.getNumRows(); ii++) {
    for (var jj = 0; jj < r.getNumColumns(); jj++) {
 
      var cell = r.getCell(1, 1);
       var value = cell.getValue();
        Logger.log( cell.getNumberFormat())
      if(value == "now"){
        Logger.log( cell.getNumberFormat())
        cell.setValue(new Date());
        cell.setNumberFormat("yyyy-mm-dd HH:mm");
      }
    }
  }
}
