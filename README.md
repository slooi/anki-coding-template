# anki-syntax-highlighting-template
A basic template to get code syntax highlighting in anki across multiple languages. 

Enable syntax highlighting using a markdown-like syntax. Eg:
```
``python
#PYTHON CODE GOES HERE...
``
``typescript
//TYPESCRIPT CODE GOES HERE...
``
```
# Examples
<img src="https://github.com/user-attachments/assets/5344eb1f-e18b-4798-9a23-d23388c85496" />
<img src="https://github.com/user-attachments/assets/f615fe4a-d3d8-421f-8a0c-70d3c4fdac94" />

# Usage
1) Use `front.html` as the front template of the card
2) Use `back.html` as the back template of the card
3) Move `_prism.js` and `_prism.css` to your media folder. It should be located in a path similar to the following (change the values to match your system): `C:\Users\YOUR_NAME\AppData\Roaming\Anki2\YOUR_USER\collection.media`
4) DONE! Now when you use this card, just use the following syntax to get syntax highlighting code blocks (just replace `cpp` and content with whatever language you want):
```
``cpp
#include <stdio.h>
``
```
