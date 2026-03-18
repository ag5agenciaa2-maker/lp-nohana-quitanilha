import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix heading issue (PageSpeed requires descending order)
html = re.sub(r'<h4\b([^>]*)>', r'<h3\1>', html, flags=re.IGNORECASE)
html = re.sub(r'</h4>', r'</h3>', html, flags=re.IGNORECASE)

# Fix video issue (PageSpeed requires track and no multiple autoplay overlapping)
def video_sub(m):
    vid_tag = m.group(1)
    vid_content = m.group(2)
    
    if 'como-chegar.mp4' in vid_content:
        vid_tag = re.sub(r'\bautoplay\b', '', vid_tag, flags=re.IGNORECASE)
        if 'preload=' not in vid_tag:
            vid_tag = vid_tag.replace('<video ', '<video preload="none" poster="Videos como chegar no escritorio e imagens no escritorio e equipe/hero-equipe.jpeg" ')
            
    if '<track' not in vid_content:
        vid_content = re.sub(r'(</video>)', r'    <track kind="captions" src="legendas.vtt" srclang="pt-br" label="Português" default>\n\1', vid_content, flags=re.IGNORECASE)
    
    return vid_tag + vid_content

html = re.sub(r'(<video\b([^>]*)>)(.*?</video>)', video_sub, html, flags=re.IGNORECASE|re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
