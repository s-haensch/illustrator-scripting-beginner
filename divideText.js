var doc = app.activeDocument;
var selection = doc.selection;

for (i = 0; i < selection.length; i++) {
  currentObject = selection[i];

  if (currentObject instanceof TextFrame) {
    var lines = currentObject.lines;

    // get line height
    var lineHeight = currentObject.textRange.characterAttributes.leading;

    for (l = 0; l < lines.length; l++) {
      var newText = doc.textFrames.add();

      // set position of new text frame
      newText.left = currentObject.left;
      newText.top = currentObject.top - (l * lineHeight);

      lines[l].duplicate(newText.textRange, ElementPlacement.PLACEATBEGINNING);
    }

    // after we've copied all the lines, remove the original text frame
    currentObject.remove();
  }
}