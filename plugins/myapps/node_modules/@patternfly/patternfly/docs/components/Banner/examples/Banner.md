---
id: 'Banner'
section: components
cssPrefix: pf-c-banner
---## Examples

### Basic

Banners can be styled with one of 5 different colors. A basic banner should only be used when the banner color does not represent status or severity.

```html
<div class="pf-c-banner">Default banner</div>

<br />

<div class="pf-c-banner pf-m-blue">Blue banner</div>

<br />

<div class="pf-c-banner pf-m-red">Red banner</div>

<br />

<div class="pf-c-banner pf-m-green">Green banner</div>

<br />

<div class="pf-c-banner pf-m-gold">Gold banner</div>

```

### Banner with links

```html
<div class="pf-c-banner">
  Default banner with a
  <a
    href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples"
  >link</a>
</div>
<br />
<div class="pf-c-banner">
  Default banner with a
  <a
    class="pf-m-disabled"
    role="link"
    aria-disabled="true"
  >disabled link</a>
</div>
<br />
<div class="pf-c-banner pf-m-blue">
  Blue banner with an
  <button
    class="pf-c-button pf-m-inline pf-m-link"
    type="button"
  >inline link button</button>
</div>
<br />
<div class="pf-c-banner pf-m-gold">
  Gold banner with an
  <a
    class="pf-c-button pf-m-inline pf-m-link"
    href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples"
  >inline link button (anchor)</a>
</div>
<br />
<div class="pf-c-banner pf-m-red">
  Red banner with a
  <button
    class="pf-c-button pf-m-link pf-m-inline"
    type="button"
    disabled
  >disabled inline link button</button>
</div>

```

### Status

When a banner is used to convey status, it is advised to add an icon that also conveys status visually, and to provide screen reader text using `.pf-screen-reader` or an equivalent.

```html
<div class="pf-c-banner">
  <div class="pf-l-flex pf-m-space-items-sm">
    <div class="pf-l-flex__item">
      <span class="pf-screen-reader">Default banner:</span>

      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-l-flex__item">Default banner</div>
  </div>
</div>

<br />

<div class="pf-c-banner pf-m-blue">
  <div class="pf-l-flex pf-m-space-items-sm">
    <div class="pf-l-flex__item">
      <span class="pf-screen-reader">Info banner:</span>

      <i class="fas fa-info-circle" aria-hidden="true"></i>
    </div>
    <div class="pf-l-flex__item">Info banner</div>
  </div>
</div>

<br />

<div class="pf-c-banner pf-m-red">
  <div class="pf-l-flex pf-m-space-items-sm">
    <div class="pf-l-flex__item">
      <span class="pf-screen-reader">Danger banner:</span>

      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </div>
    <div class="pf-l-flex__item">Danger banner</div>
  </div>
</div>

<br />

<div class="pf-c-banner pf-m-green">
  <div class="pf-l-flex pf-m-space-items-sm">
    <div class="pf-l-flex__item">
      <span class="pf-screen-reader">Success banner:</span>

      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </div>
    <div class="pf-l-flex__item">Success banner</div>
  </div>
</div>

<br />

<div class="pf-c-banner pf-m-gold">
  <div class="pf-l-flex pf-m-space-items-sm">
    <div class="pf-l-flex__item">
      <span class="pf-screen-reader">Warning banner:</span>

      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    </div>
    <div class="pf-l-flex__item">Warning banner</div>
  </div>
</div>

```

## Documentation

Add a modifier class to the default banner to change the presentation: `.pf-m-blue`, `.pf-m-red`, `.pf-m-green`, or `.pf-m-gold`.

### Usage

| Class          | Applied to     | Outcome                                                   |
| -------------- | -------------- | --------------------------------------------------------- |
| `.pf-c-banner` | `<div>`        | Initiates a banner. **Required**                          |
| `.pf-m-blue`   | `.pf-c-banner` | Modifies banner for blue styling.                         |
| `.pf-m-red`    | `.pf-c-banner` | Modifies banner for red styling.                          |
| `.pf-m-green`  | `.pf-c-banner` | Modifies banner for green styling.                        |
| `.pf-m-gold`   | `.pf-c-banner` | Modifies banner for gold styling.                         |
| `.pf-m-sticky` | `.pf-c-banner` | Modifies banner to be sticky to the top of its container. |
