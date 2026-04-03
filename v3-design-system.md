# FactorCloud V3 Design System

## CSS Variables
```css
:root {
  --bg:       #0A0A08;
  --bg-2:     #050504;
  --bg-3:     #111109;
  --bg-4:     #161512;
  --bg-5:     #1C1B17;
  --amber:    #D4A843;
  --amber-dim: rgba(212,168,67,0.15);
  --amber-faint: rgba(212,168,67,0.06);
  --white:    #FFFFFF;
  --gray-1:   #E8E0D0;
  --gray-2:   #A89880;
  --gray-3:   #5C5448;
  --border:   rgba(212,168,67,0.12);
  --border-dim: rgba(212,168,67,0.07);
  --green:    #27AE60;
  --red:      #C0392B;
}
```

## Font Import
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

## Typography
- Display: DM Serif Display (h1, h2 headings)
- Body: IBM Plex Sans
- Data/UI: IBM Plex Mono (nav, buttons, overlines, mono labels)
- Accent color: #D4A843 (amber/gold) for numbers, overlines, highlights
- NO blue (no #58BBED, no #0070AA)
- NO Inter, Geist, Instrument Serif, Roboto

## Key Rules
- Background: #0A0A08 (near-black warm)
- Hairline borders: 0.5px solid rgba(212,168,67,0.12)
- All sections visible by default (opacity:1 !important on hero content)
- No em dashes
- Logo path: adjust depth (root=../assets/, one level deep=../../assets/)

## Nav HTML (root level - uses ../assets/logo-white.png)
See index-v3.html lines 1100-1188 for full nav markup.

## Footer HTML
See index-v3.html lines 1792-1845 for full footer markup.

## Inner Page Logo Paths
- /features/*.html  ->  ../../assets/logo-white.png
- /about/*.html     ->  ../../assets/logo-white.png
- /integrations/*.html -> ../../assets/logo-white.png
- /pricing.html     ->  ../assets/logo-white.png (or just assets/logo-white.png)
- /get-demo.html    ->  ../assets/logo-white.png
- /resources.html   ->  ../assets/logo-white.png
- /contact.html     ->  ../assets/logo-white.png
