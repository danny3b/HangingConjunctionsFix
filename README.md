# Polish orphans fix (InDesign script)

Prevents single-letter Polish words (`a, i, o, u, w, z` and their uppercase forms) from being left hanging at the end of a line. The script applies the **No Break** attribute to the letter and the space that follows it, so the letter always wraps together with the next word.

## Installation

1. In InDesign open **Window → Utilities → Scripts**.
2. Right-click the **User** folder → **Reveal in Finder / Explorer**.
3. Copy the `.jsx` file there; it will appear in the Scripts panel.

## Usage

1. Select one or more text frames (Selection Tool), or select text inside a frame (Type Tool).
2. Double-click the script in the Scripts panel.

## Notes

- Changes apply only to the selected frames (or the frames containing the selected text), not the whole document.
- For threaded stories, only text in the selected frame is processed — select every frame in the thread or run it frame by frame.
- The script resets Find/Change GREP settings at start, so any query you had in the Find/Change dialog will be cleared.
- Shows an alert if nothing is selected or a selected frame is empty.
- Single-letter words other than the six listed (e.g. `e`) are not handled; to change that, edit the `findWhat` pattern.
