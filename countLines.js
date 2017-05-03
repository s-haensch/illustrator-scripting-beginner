// We want to operate on the currently active document
var doc = app.activeDocument;
// and use only the selected objects
var selection = doc.selection;

// loop through all selected objects
for (s = 0; s < selection.length; s++) {
  currentObject = selection[s];

  // make sure we operate only on text frames
  if (currentObject instanceof TextFrame) {
    // tell me how many lines of text the text frame has
    $.writeln(currentObject.lines.length, ' lines');
  }
}