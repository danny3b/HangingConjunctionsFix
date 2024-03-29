// Searching and replacing text in all selected text frames
app.findGrepPreferences = app.changeGrepPreferences = null;
app.findGrepPreferences.findWhat = "(\\b)(a|i|o|u|w|z|A|I|O|U|W|Z)(\\b\\s)";
app.changeGrepPreferences.changeTo = "$2$3";
app.changeGrepPreferences.noBreak = true; // Set the "No Break" attribute

var sel = app.selection;
if (sel.length === 0) {
    alert("No text frame is selected.");
} else {
    for (var i = 0; i < sel.length; i++) {
        var item = sel[i];
        if (item.constructor.name === 'TextFrame') {
            if (item.contents === "") {
                alert("The selected frame does not contain any text.");
            } else {
                item.changeGrep(); // Perform changes in the selected text frame
            }
        } else if (item.constructor.name === 'Text' && item.parentTextFrames.length > 0) {
            var textFrames = item.parentTextFrames;
            for (var j = 0; j < textFrames.length; j++) {
                if (textFrames[j].contents === "") {
                    alert("The selected frame does not contain any text.");
                } else {
                    textFrames[j].changeGrep(); // Perform changes in all text frames containing the selected text
                }
            }
        }
    }
}
