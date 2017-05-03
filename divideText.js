var doc = app.activeDocument;
var selection = doc.selection;

for (s = 0; s < selection.length; s++) {
  currentObject = selection[s];

  if (currentObject instanceof TextFrame) {
    // get all lines included in the text frame
    var lines = currentObject.lines;

    // loop through all the lines
    for (l = 0; l < lines.length; l++) {
      // create a new empty text frame
      var newText = doc.textFrames.add();
      // duplicate the content of the current line to the new text frame
      lines[l].duplicate(newText.textRange, ElementPlacement.PLACEATBEGINNING);
    }
  }
}