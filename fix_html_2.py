import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix the auto height to 800
html = html.replace('height="auto"', 'height="800"')

# One more check for Accessibility "Contraste" and "Link idênticos" 
# Link identical issue: Multiple links having the same accessible name but different contexts? Or same text going to same place?
# "Fale Conosco" in header -> the user has multiple same WhatsApp links. This is a warning only usually, won't ruin score as much.

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("done")
