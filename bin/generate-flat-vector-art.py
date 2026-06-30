"""Generate flat-vector SVG illustrations matching the hero's palette + style.

Outputs to ../images/illustrations/. All illustrations share:
- Same palette (sky-navy, sky-medium, water-medium, grass-medium, mountain-light, white)
- Same flat-vector aesthetic (no shadows, no gradients except sky)
- Simple geometric primitives — same language as the hero illustration

Six work-card illustrations (600x400) + three service icons (160x160) +
one Denver cityscape (800x500) for the About section.

Run: python3 bin/generate-flat-vector-art.py
"""
from pathlib import Path

OUT_DIR = Path(__file__).resolve().parent.parent / 'images' / 'illustrations'
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Hero-extracted palette (must match scss/_variables and styles/main.scss tokens).
COLORS = {
    'sky_navy':      '#204593',
    'sky_medium':    '#5B8EC7',
    'sky_light':     '#B0E0E6',
    'sky_pale':      '#E6F7FB',
    'water_dark':    '#2C5F7F',
    'water_medium':  '#5A9BC5',
    'water_light':   '#8AC5E0',
    'grass_dark':    '#234D2A',
    'grass_medium':  '#6B9B4A',
    'grass_light':   '#9BC865',
    'mountain_dark': '#525D75',
    'mountain_med':  '#8095AD',
    'mountain_light':'#B5C4D8',
    'white':         '#FFFFFF',
    'cream':         '#FFF8E6',
    'orange':        '#FFA033',
    'coral':         '#FF8A7A',
}

# Common backdrop used by every work card — soft sky → glacier gradient with
# a mountain silhouette echoing the hero illustration.
BACKDROP = """
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="{sky_pale}"/>
      <stop offset="1" stop-color="{sky_light}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#sky)"/>
  <!-- distant mountain silhouette -->
  <path d="M0 280 L80 220 L160 260 L240 200 L340 250 L440 210 L540 240 L600 220 L600 400 L0 400 Z"
        fill="{mountain_light}" opacity="0.45"/>
  <path d="M0 320 L100 270 L180 290 L280 250 L380 290 L480 260 L600 280 L600 400 L0 400 Z"
        fill="{water_light}" opacity="0.5"/>
"""

def write_svg(name: str, w: int, h: int, body: str):
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'preserveAspectRatio="xMidYMid slice">{body}</svg>'
    )
    (OUT_DIR / name).write_text(svg)
    print(f'wrote {name}')


# --- Work card 1 — E-Commerce ---------------------------------------------
def card_ecommerce():
    body = BACKDROP.format(**COLORS)
    body += f"""
    <!-- laptop frame -->
    <rect x="120" y="110" width="360" height="220" rx="14" fill="{COLORS['water_dark']}"/>
    <rect x="135" y="125" width="330" height="190" rx="6" fill="{COLORS['white']}"/>
    <!-- browser chrome -->
    <rect x="135" y="125" width="330" height="22" fill="{COLORS['mountain_light']}"/>
    <circle cx="148" cy="136" r="3" fill="{COLORS['coral']}"/>
    <circle cx="160" cy="136" r="3" fill="{COLORS['orange']}"/>
    <circle cx="172" cy="136" r="3" fill="{COLORS['grass_light']}"/>
    <!-- product grid -->
    <rect x="155" y="165" width="84" height="64" rx="4" fill="{COLORS['sky_pale']}"/>
    <rect x="160" y="170" width="74" height="44" rx="2" fill="{COLORS['water_medium']}"/>
    <rect x="160" y="220" width="40" height="5" fill="{COLORS['mountain_med']}"/>
    <rect x="251" y="165" width="84" height="64" rx="4" fill="{COLORS['sky_pale']}"/>
    <rect x="256" y="170" width="74" height="44" rx="2" fill="{COLORS['grass_medium']}"/>
    <rect x="256" y="220" width="40" height="5" fill="{COLORS['mountain_med']}"/>
    <rect x="347" y="165" width="84" height="64" rx="4" fill="{COLORS['sky_pale']}"/>
    <rect x="352" y="170" width="74" height="44" rx="2" fill="{COLORS['orange']}"/>
    <rect x="352" y="220" width="40" height="5" fill="{COLORS['mountain_med']}"/>
    <!-- shopping cart pill -->
    <rect x="155" y="260" width="170" height="40" rx="20" fill="{COLORS['sky_navy']}"/>
    <circle cx="172" cy="280" r="5" fill="{COLORS['white']}"/>
    <circle cx="186" cy="280" r="5" fill="{COLORS['white']}"/>
    <rect x="200" y="276" width="110" height="8" rx="3" fill="{COLORS['white']}"/>
    <!-- laptop base -->
    <rect x="100" y="330" width="400" height="14" rx="4" fill="{COLORS['water_dark']}"/>
    """
    write_svg('card-ecommerce.svg', 600, 400, body)


# --- Work card 2 — Corporate Website --------------------------------------
def card_corporate():
    body = BACKDROP.format(**COLORS)
    body += f"""
    <!-- desktop monitor -->
    <rect x="100" y="90" width="400" height="240" rx="8" fill="{COLORS['water_dark']}"/>
    <rect x="115" y="105" width="370" height="210" fill="{COLORS['white']}"/>
    <!-- nav bar -->
    <rect x="115" y="105" width="370" height="28" fill="{COLORS['sky_navy']}"/>
    <rect x="130" y="116" width="55" height="6" rx="2" fill="{COLORS['white']}"/>
    <circle cx="445" cy="119" r="3" fill="{COLORS['white']}"/>
    <circle cx="455" cy="119" r="3" fill="{COLORS['white']}"/>
    <circle cx="465" cy="119" r="3" fill="{COLORS['white']}"/>
    <!-- hero block -->
    <rect x="135" y="150" width="160" height="14" rx="3" fill="{COLORS['sky_navy']}"/>
    <rect x="135" y="170" width="220" height="8" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="135" y="184" width="180" height="8" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="135" y="208" width="100" height="26" rx="13" fill="{COLORS['water_medium']}"/>
    <!-- right side image -->
    <rect x="370" y="150" width="100" height="84" rx="6" fill="{COLORS['sky_light']}"/>
    <circle cx="420" cy="180" r="14" fill="{COLORS['water_medium']}"/>
    <path d="M380 220 L405 200 L425 215 L460 195 L460 234 L380 234 Z" fill="{COLORS['grass_medium']}"/>
    <!-- feature row -->
    <rect x="135" y="255" width="100" height="44" rx="4" fill="{COLORS['sky_pale']}"/>
    <rect x="245" y="255" width="100" height="44" rx="4" fill="{COLORS['sky_pale']}"/>
    <rect x="355" y="255" width="100" height="44" rx="4" fill="{COLORS['sky_pale']}"/>
    <!-- monitor base -->
    <rect x="270" y="330" width="60" height="20" fill="{COLORS['water_dark']}"/>
    <rect x="230" y="346" width="140" height="6" rx="3" fill="{COLORS['water_dark']}"/>
    """
    write_svg('card-corporate.svg', 600, 400, body)


# --- Work card 3 — SaaS / Custom Business App -----------------------------
def card_saas():
    body = BACKDROP.format(**COLORS)
    body += f"""
    <!-- dashboard panel -->
    <rect x="80" y="100" width="440" height="240" rx="12" fill="{COLORS['white']}"/>
    <!-- sidebar -->
    <rect x="80" y="100" width="90" height="240" rx="12 0 0 12" fill="{COLORS['sky_navy']}"/>
    <circle cx="105" cy="130" r="10" fill="{COLORS['water_medium']}"/>
    <rect x="92" y="160" width="66" height="6" rx="2" fill="{COLORS['water_medium']}" opacity="0.6"/>
    <rect x="92" y="180" width="66" height="6" rx="2" fill="{COLORS['water_medium']}" opacity="0.4"/>
    <rect x="92" y="200" width="66" height="6" rx="2" fill="{COLORS['water_medium']}" opacity="0.4"/>
    <rect x="92" y="220" width="66" height="6" rx="2" fill="{COLORS['water_medium']}" opacity="0.4"/>
    <!-- main: top metric tiles -->
    <rect x="190" y="120" width="100" height="60" rx="6" fill="{COLORS['sky_pale']}"/>
    <rect x="200" y="130" width="40" height="6" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="200" y="148" width="60" height="14" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="300" y="120" width="100" height="60" rx="6" fill="{COLORS['sky_pale']}"/>
    <rect x="310" y="130" width="40" height="6" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="310" y="148" width="60" height="14" rx="2" fill="{COLORS['grass_medium']}"/>
    <rect x="410" y="120" width="100" height="60" rx="6" fill="{COLORS['sky_pale']}"/>
    <rect x="420" y="130" width="40" height="6" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="420" y="148" width="60" height="14" rx="2" fill="{COLORS['water_dark']}"/>
    <!-- chart area -->
    <rect x="190" y="195" width="320" height="135" rx="6" fill="{COLORS['sky_pale']}"/>
    <polyline points="205,300 235,275 265,285 295,250 325,260 355,225 385,235 415,210 445,220 480,200"
              fill="none" stroke="{COLORS['water_medium']}" stroke-width="3" stroke-linejoin="round"/>
    <polyline points="205,310 235,295 265,300 295,285 325,290 355,270 385,275 415,260 445,265 480,250"
              fill="none" stroke="{COLORS['grass_medium']}" stroke-width="3" stroke-linejoin="round" opacity="0.7"/>
    """
    write_svg('card-saas.svg', 600, 400, body)


# --- Work card 4 — Digital Marketing --------------------------------------
def card_marketing():
    body = BACKDROP.format(**COLORS)
    body += f"""
    <!-- phone frame -->
    <rect x="190" y="60" width="160" height="290" rx="22" fill="{COLORS['water_dark']}"/>
    <rect x="200" y="70" width="140" height="270" rx="14" fill="{COLORS['white']}"/>
    <rect x="245" y="76" width="50" height="6" rx="3" fill="{COLORS['water_dark']}"/>
    <!-- header -->
    <rect x="210" y="92" width="120" height="34" rx="6" fill="{COLORS['sky_navy']}"/>
    <circle cx="225" cy="109" r="9" fill="{COLORS['water_medium']}"/>
    <rect x="240" y="103" width="80" height="5" rx="2" fill="{COLORS['white']}"/>
    <rect x="240" y="113" width="60" height="4" rx="2" fill="{COLORS['white']}" opacity="0.6"/>
    <!-- post 1 -->
    <rect x="210" y="135" width="120" height="58" rx="6" fill="{COLORS['sky_pale']}"/>
    <rect x="216" y="141" width="50" height="46" rx="4" fill="{COLORS['water_medium']}"/>
    <rect x="272" y="145" width="52" height="6" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="272" y="159" width="44" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="272" y="170" width="36" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <!-- post 2 -->
    <rect x="210" y="201" width="120" height="58" rx="6" fill="{COLORS['sky_pale']}"/>
    <rect x="216" y="207" width="50" height="46" rx="4" fill="{COLORS['grass_medium']}"/>
    <rect x="272" y="211" width="52" height="6" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="272" y="225" width="44" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="272" y="236" width="36" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <!-- engagement bar -->
    <rect x="210" y="270" width="120" height="40" rx="6" fill="{COLORS['white']}"/>
    <circle cx="225" cy="290" r="8" fill="{COLORS['coral']}"/>
    <circle cx="245" cy="290" r="8" fill="{COLORS['water_medium']}"/>
    <circle cx="265" cy="290" r="8" fill="{COLORS['orange']}"/>
    <rect x="282" y="287" width="42" height="6" rx="3" fill="{COLORS['mountain_med']}"/>
    <!-- floating notifications -->
    <circle cx="120" cy="130" r="32" fill="{COLORS['orange']}"/>
    <text x="120" y="138" font-family="Arial" font-size="22" font-weight="700" fill="{COLORS['white']}" text-anchor="middle">+24</text>
    <circle cx="430" cy="220" r="28" fill="{COLORS['grass_medium']}"/>
    <text x="430" y="227" font-family="Arial" font-size="18" font-weight="700" fill="{COLORS['white']}" text-anchor="middle">5x</text>
    """
    write_svg('card-marketing.svg', 600, 400, body)


# --- Work card 5 — Restaurant Web Platform --------------------------------
def card_restaurant():
    body = BACKDROP.format(**COLORS)
    body += f"""
    <!-- tablet -->
    <rect x="100" y="80" width="400" height="270" rx="14" fill="{COLORS['water_dark']}"/>
    <rect x="115" y="95" width="370" height="240" rx="6" fill="{COLORS['cream']}"/>
    <!-- banner -->
    <rect x="115" y="95" width="370" height="70" rx="6" fill="{COLORS['sky_navy']}"/>
    <rect x="135" y="112" width="120" height="14" rx="3" fill="{COLORS['white']}"/>
    <rect x="135" y="132" width="180" height="6" rx="2" fill="{COLORS['water_light']}"/>
    <rect x="395" y="120" width="70" height="22" rx="11" fill="{COLORS['orange']}"/>
    <!-- menu items -->
    <rect x="135" y="184" width="160" height="60" rx="6" fill="{COLORS['white']}"/>
    <circle cx="155" cy="214" r="14" fill="{COLORS['orange']}"/>
    <rect x="178" y="200" width="100" height="6" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="178" y="212" width="80" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="178" y="224" width="40" height="6" rx="2" fill="{COLORS['water_dark']}"/>
    <rect x="305" y="184" width="160" height="60" rx="6" fill="{COLORS['white']}"/>
    <circle cx="325" cy="214" r="14" fill="{COLORS['grass_medium']}"/>
    <rect x="348" y="200" width="100" height="6" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="348" y="212" width="80" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="348" y="224" width="40" height="6" rx="2" fill="{COLORS['water_dark']}"/>
    <rect x="135" y="258" width="160" height="60" rx="6" fill="{COLORS['white']}"/>
    <circle cx="155" cy="288" r="14" fill="{COLORS['coral']}"/>
    <rect x="178" y="274" width="100" height="6" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="178" y="286" width="80" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="178" y="298" width="40" height="6" rx="2" fill="{COLORS['water_dark']}"/>
    <rect x="305" y="258" width="160" height="60" rx="6" fill="{COLORS['white']}"/>
    <circle cx="325" cy="288" r="14" fill="{COLORS['water_medium']}"/>
    <rect x="348" y="274" width="100" height="6" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="348" y="286" width="80" height="4" rx="2" fill="{COLORS['mountain_med']}"/>
    <rect x="348" y="298" width="40" height="6" rx="2" fill="{COLORS['water_dark']}"/>
    """
    write_svg('card-restaurant.svg', 600, 400, body)


# --- Work card 6 — Brand Identity -----------------------------------------
def card_brand():
    body = BACKDROP.format(**COLORS)
    body += f"""
    <!-- color palette swatches -->
    <rect x="80" y="120" width="80" height="160" rx="10" fill="{COLORS['sky_navy']}"/>
    <rect x="170" y="120" width="80" height="160" rx="10" fill="{COLORS['water_medium']}"/>
    <rect x="260" y="120" width="80" height="160" rx="10" fill="{COLORS['grass_medium']}"/>
    <rect x="350" y="120" width="80" height="160" rx="10" fill="{COLORS['orange']}"/>
    <rect x="440" y="120" width="80" height="160" rx="10" fill="{COLORS['coral']}"/>
    <!-- swatch labels -->
    <rect x="92" y="252" width="56" height="20" rx="4" fill="{COLORS['white']}" opacity="0.9"/>
    <rect x="182" y="252" width="56" height="20" rx="4" fill="{COLORS['white']}" opacity="0.9"/>
    <rect x="272" y="252" width="56" height="20" rx="4" fill="{COLORS['white']}" opacity="0.9"/>
    <rect x="362" y="252" width="56" height="20" rx="4" fill="{COLORS['white']}" opacity="0.9"/>
    <rect x="452" y="252" width="56" height="20" rx="4" fill="{COLORS['white']}" opacity="0.9"/>
    <!-- circle mark / logo -->
    <circle cx="300" cy="80" r="40" fill="{COLORS['white']}" stroke="{COLORS['sky_navy']}" stroke-width="3"/>
    <text x="300" y="92" font-family="Georgia,serif" font-size="36" font-weight="700"
          fill="{COLORS['sky_navy']}" text-anchor="middle">M</text>
    <!-- typography sample -->
    <rect x="130" y="310" width="340" height="40" rx="6" fill="{COLORS['white']}"/>
    <rect x="150" y="320" width="120" height="8" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="150" y="334" width="200" height="5" rx="2" fill="{COLORS['mountain_med']}"/>
    """
    write_svg('card-brand.svg', 600, 400, body)


# --- Service icons --------------------------------------------------------
def icon_strategic():
    """Mountain peak with flag — strategic marketing."""
    body = f"""
    <circle cx="80" cy="80" r="80" fill="{COLORS['sky_pale']}"/>
    <!-- back mountain -->
    <path d="M14 130 L52 70 L86 110 L120 75 L146 130 Z" fill="{COLORS['mountain_med']}"/>
    <!-- front mountain (snow cap) -->
    <path d="M30 130 L70 50 L110 130 Z" fill="{COLORS['water_medium']}"/>
    <path d="M55 80 L70 50 L85 80 L78 88 L70 84 L62 90 Z" fill="{COLORS['white']}"/>
    <!-- flag pole + flag -->
    <line x1="70" y1="50" x2="70" y2="22" stroke="{COLORS['sky_navy']}" stroke-width="2.5"/>
    <path d="M70 22 L92 28 L70 36 Z" fill="{COLORS['orange']}"/>
    """
    write_svg('icon-strategic.svg', 160, 160, body)

def icon_digital():
    """Phone with signal bars — digital presence."""
    body = f"""
    <circle cx="80" cy="80" r="80" fill="{COLORS['sky_pale']}"/>
    <!-- phone -->
    <rect x="55" y="32" width="50" height="90" rx="8" fill="{COLORS['water_dark']}"/>
    <rect x="59" y="36" width="42" height="82" rx="4" fill="{COLORS['white']}"/>
    <rect x="76" y="38" width="8" height="2" rx="1" fill="{COLORS['water_dark']}"/>
    <!-- screen content -->
    <rect x="63" y="46" width="34" height="6" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="63" y="56" width="34" height="20" rx="3" fill="{COLORS['water_medium']}"/>
    <rect x="63" y="80" width="34" height="6" rx="2" fill="{COLORS['mountain_light']}"/>
    <rect x="63" y="90" width="22" height="6" rx="2" fill="{COLORS['mountain_light']}"/>
    <!-- signal/wave waves emanating right -->
    <path d="M118 50 Q128 60 118 70" stroke="{COLORS['water_medium']}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M124 42 Q140 60 124 78" stroke="{COLORS['water_medium']}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M130 34 Q150 60 130 86" stroke="{COLORS['water_medium']}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/>
    """
    write_svg('icon-digital.svg', 160, 160, body)

def icon_analytics():
    """Bar chart with mountain backdrop — analytics & insights."""
    body = f"""
    <circle cx="80" cy="80" r="80" fill="{COLORS['sky_pale']}"/>
    <!-- back mountains -->
    <path d="M0 120 L40 80 L80 105 L120 75 L160 110 L160 160 L0 160 Z"
          fill="{COLORS['mountain_light']}" opacity="0.6"/>
    <!-- chart bars -->
    <rect x="40" y="92" width="14" height="38" rx="2" fill="{COLORS['water_medium']}"/>
    <rect x="60" y="74" width="14" height="56" rx="2" fill="{COLORS['sky_navy']}"/>
    <rect x="80" y="84" width="14" height="46" rx="2" fill="{COLORS['water_medium']}"/>
    <rect x="100" y="62" width="14" height="68" rx="2" fill="{COLORS['grass_medium']}"/>
    <!-- trendline -->
    <polyline points="44,90 67,72 87,82 107,60 120,52" fill="none"
              stroke="{COLORS['orange']}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="120" cy="52" r="4" fill="{COLORS['orange']}"/>
    """
    write_svg('icon-analytics.svg', 160, 160, body)


# --- About / Denver cityscape ---------------------------------------------
def about_cityscape():
    """Stylized Denver-mountain cityscape matching hero illustration."""
    body = f"""
    <defs>
      <linearGradient id="dsky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="{COLORS['sky_pale']}"/>
        <stop offset="0.7" stop-color="{COLORS['sky_light']}"/>
        <stop offset="1" stop-color="{COLORS['water_light']}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#dsky)"/>
    <!-- distant mountains -->
    <path d="M0 280 L100 210 L200 240 L320 180 L420 220 L540 170 L660 210 L800 190 L800 320 L0 320 Z"
          fill="{COLORS['mountain_med']}" opacity="0.55"/>
    <!-- snow caps -->
    <path d="M310 185 L320 180 L334 196 L325 198 L320 192 L312 198 Z" fill="{COLORS['white']}"/>
    <path d="M530 175 L540 170 L555 192 L548 196 L540 188 L532 196 Z" fill="{COLORS['white']}"/>
    <!-- mid mountains darker -->
    <path d="M0 340 L120 270 L240 300 L380 240 L500 290 L640 250 L800 280 L800 360 L0 360 Z"
          fill="{COLORS['water_medium']}" opacity="0.55"/>
    <!-- sun glow -->
    <circle cx="600" cy="180" r="40" fill="{COLORS['orange']}" opacity="0.5"/>
    <circle cx="600" cy="180" r="22" fill="{COLORS['orange']}" opacity="0.85"/>
    <!-- city skyline (Denver-ish) -->
    <g fill="{COLORS['sky_navy']}">
      <rect x="240" y="290" width="32" height="80"/>
      <rect x="278" y="270" width="40" height="100"/>
      <rect x="324" y="260" width="28" height="110"/>
      <rect x="358" y="240" width="44" height="130"/>   <!-- Republic Plaza tall -->
      <polygon points="358,240 380,210 402,240"/>      <!-- pointed top -->
      <rect x="408" y="280" width="34" height="90"/>
      <rect x="448" y="260" width="40" height="110"/>
      <polygon points="468,260 468,230 480,230 480,260"/>  <!-- spire -->
      <rect x="494" y="290" width="30" height="80"/>
      <rect x="530" y="270" width="38" height="100"/>
    </g>
    <!-- skyline windows -->
    <g fill="{COLORS['water_light']}" opacity="0.85">
      <rect x="246" y="300" width="4" height="6"/>
      <rect x="256" y="300" width="4" height="6"/>
      <rect x="246" y="316" width="4" height="6"/>
      <rect x="256" y="316" width="4" height="6"/>
      <rect x="284" y="282" width="4" height="6"/>
      <rect x="294" y="282" width="4" height="6"/>
      <rect x="304" y="282" width="4" height="6"/>
      <rect x="284" y="298" width="4" height="6"/>
      <rect x="294" y="298" width="4" height="6"/>
      <rect x="304" y="298" width="4" height="6"/>
      <rect x="368" y="260" width="5" height="7"/>
      <rect x="380" y="260" width="5" height="7"/>
      <rect x="392" y="260" width="5" height="7"/>
      <rect x="368" y="280" width="5" height="7"/>
      <rect x="380" y="280" width="5" height="7"/>
      <rect x="392" y="280" width="5" height="7"/>
      <rect x="368" y="300" width="5" height="7"/>
      <rect x="380" y="300" width="5" height="7"/>
      <rect x="392" y="300" width="5" height="7"/>
      <rect x="540" y="290" width="5" height="7"/>
      <rect x="552" y="290" width="5" height="7"/>
      <rect x="540" y="306" width="5" height="7"/>
      <rect x="552" y="306" width="5" height="7"/>
    </g>
    <!-- foreground rolling green hills -->
    <path d="M0 380 Q200 340 400 380 T800 370 L800 500 L0 500 Z"
          fill="{COLORS['grass_medium']}"/>
    <path d="M0 420 Q160 390 320 420 T640 415 T800 410 L800 500 L0 500 Z"
          fill="{COLORS['grass_dark']}" opacity="0.7"/>
    <!-- river snaking through -->
    <path d="M340 372 Q400 390 460 380 T600 386 T780 388"
          stroke="{COLORS['water_medium']}" stroke-width="14" fill="none" stroke-linecap="round" opacity="0.85"/>
    <!-- pine trees -->
    <g fill="{COLORS['grass_dark']}">
      <polygon points="80,400 60,440 100,440"/>
      <polygon points="80,380 65,420 95,420"/>
      <rect x="77" y="436" width="6" height="10"/>
      <polygon points="160,420 142,460 178,460"/>
      <rect x="157" y="456" width="6" height="10"/>
      <polygon points="700,415 680,460 720,460"/>
      <polygon points="700,395 685,425 715,425"/>
      <rect x="697" y="456" width="6" height="10"/>
    </g>
    """
    write_svg('about-cityscape.svg', 800, 500, body)


for fn in (card_ecommerce, card_corporate, card_saas, card_marketing,
           card_restaurant, card_brand, icon_strategic, icon_digital,
           icon_analytics, about_cityscape):
    fn()

print(f'\nAll illustrations written to {OUT_DIR}')
