"""
Builds the brand images: site icons, the share image (opengraph/twitter)
and the photo placeholder.

When Ranjeet Sir's real photo is ready, save it as
public/images/ranjeet-photo.jpg and run:

    python scripts/make_brand_images.py --share-only

to rebuild the share image with his photo on the right.
Needs Pillow and the Instrument Sans fonts (set FONT_DIR).
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = os.environ.get('FONT_DIR', '/tmp/fonts')
BLUE = (15, 118, 110)
INK = (15, 23, 42)
MUTED = (71, 85, 105)
PAPER_DEEP = (244, 248, 247)
LINE = (203, 213, 225)
PHOTO = os.path.join(ROOT, 'public', 'images', 'ranjeet-photo.jpg')


def font(weight, size):
    return ImageFont.truetype(os.path.join(FONT_DIR, f'IS-{weight}.ttf'), size)


def icon(size, radius_ratio, path):
    scale = 4
    s = size * scale
    img = Image.new('RGBA', (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * radius_ratio), fill=BLUE)
    f = font('500', int(s * 0.42))
    d.text((s / 2, s / 2 + s * 0.02), 'Rc', font=f, fill='white', anchor='mm')
    img = img.resize((size, size), Image.LANCZOS)
    img.save(path)


def placeholder(path, w=1200, h=1500):
    img = Image.new('RGB', (w, h), PAPER_DEEP)
    d = ImageDraw.Draw(img)
    # dashed frame
    m = 60
    dash, gap = 26, 18
    for x in range(m, w - m, dash + gap):
        d.line([(x, m), (min(x + dash, w - m), m)], fill=LINE, width=4)
        d.line([(x, h - m), (min(x + dash, w - m), h - m)], fill=LINE, width=4)
    for y in range(m, h - m, dash + gap):
        d.line([(m, y), (m, min(y + dash, h - m))], fill=LINE, width=4)
        d.line([(w - m, y), (w - m, min(y + dash, h - m))], fill=LINE, width=4)
    # simple head-and-shoulders outline
    cx, cy = w // 2, int(h * 0.40)
    d.ellipse([cx - 120, cy - 150, cx + 120, cy + 90], outline=LINE, width=8)
    d.arc([cx - 280, cy + 150, cx + 280, cy + 650], 180, 360, fill=LINE, width=8)
    d.text((cx, int(h * 0.74)), 'Photo coming soon', font=font('500', 44), fill=(148, 163, 184), anchor='mm')
    img.save(path, quality=88)


def share(path):
    W, H = 1200, 630
    img = Image.new('RGB', (W, H), 'white')
    d = ImageDraw.Draw(img)
    # brand row
    d.rounded_rectangle([70, 64, 135, 129], radius=6, fill=INK)
    d.text((102.5, 98), 'Rc', font=font('500', 28), fill='white', anchor='mm')
    d.text((151, 72), 'Ranjeet Choudhary', font=font('500', 31), fill=INK)
    d.text((151, 108), 'M A T H E M A T I C S', font=font('500', 14), fill=MUTED)
    # eyebrow
    d.line([(70, 233), (110, 233)], fill=BLUE, width=3)
    d.text((124, 224), 'CLASS 10, 11 & 12 · BOARDS · JEE MAIN', font=font('500', 17), fill=MUTED)
    d.text((66, 268), 'Learn Maths with', font=font('500', 72), fill=INK)
    d.text((66, 352), 'Ranjeet', font=font('500', 72), fill=BLUE)
    d.text((66, 436), 'Choudhary Sir', font=font('500', 72), fill=BLUE)
    d.text((70, 550), 'Free notes · question papers · worked solutions', font=font('400', 21), fill=MUTED)
    # right panel: photo if available, otherwise a quiet maths panel
    px = 770
    if os.path.exists(PHOTO) and '--placeholder-panel' not in sys.argv and _is_real_photo():
        ph = Image.open(PHOTO).convert('RGB')
        pw, phh = W - px, H
        r = max(pw / ph.width, phh / ph.height)
        ph = ph.resize((int(ph.width * r) + 1, int(ph.height * r) + 1), Image.LANCZOS)
        left = (ph.width - pw) // 2
        img.paste(ph.crop((left, 0, left + pw, phh)), (px, 0))
    else:
        d.rectangle([px, 0, W, H], fill=PAPER_DEEP)
        sym = [('∑', 860, 150, 120), ('π', 1080, 210, 110), ('√x', 900, 380, 96), ('∫', 1090, 450, 140), ('x²', 1000, 560, 70)]
        f_math = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 10)
        for t, x, y, s in sym:
            f_math = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', s)
            d.text((x, y), t, font=f_math, fill=(153, 230, 215), anchor='mm')
    img.save(path)


def _is_real_photo():
    # The placeholder is a flat light image; a real photo has far more variation.
    im = Image.open(PHOTO).convert('L').resize((60, 75))
    px = list(im.getdata())
    mean = sum(px) / len(px)
    var = sum((p - mean) ** 2 for p in px) / len(px)
    return var > 300


if __name__ == '__main__':
    app = os.path.join(ROOT, 'src', 'app')
    if '--share-only' not in sys.argv:
        placeholder(PHOTO)
        icon(512, 0.18, os.path.join(app, 'icon.png'))
        icon(180, 0.0, os.path.join(app, 'apple-icon.png'))
        icon(48, 0.18, '/tmp/fav48.png')
        Image.open('/tmp/fav48.png').save(os.path.join(app, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)])
    share(os.path.join(app, 'opengraph-image.png'))
    share(os.path.join(app, 'twitter-image.png'))
    print('done')
