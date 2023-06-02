---
id: Avatar
section: components
cssPrefix: pf-c-avatar
---import './Avatar.css'

## Examples

### Basic

```html
<img
  class="pf-c-avatar"
  alt="Avatar image"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Bordered - light

```html
<img
  class="pf-c-avatar pf-m-light"
  alt="Avatar image light"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Bordered - dark

```html
<img
  class="pf-c-avatar pf-m-dark"
  alt="Avatar image dark"
  src="/assets/images/img_avatar-dark.svg"
/>

```

### Small

```html
<img
  class="pf-c-avatar pf-m-sm"
  alt="Avatar image small"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Medium

```html
<img
  class="pf-c-avatar pf-m-md"
  alt="Avatar image medium"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Large

```html
<img
  class="pf-c-avatar pf-m-lg"
  alt="Avatar image large"
  src="/assets/images/img_avatar-light.svg"
/>

```

### Extra large

```html
<img
  class="pf-c-avatar pf-m-xl"
  alt="Avatar image extra large"
  src="/assets/images/img_avatar-light.svg"
/>

```

## Documentation

### Overview

The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.

### Accessibility

| Attribute | Applied to     | Outcome                                                                                   |
| --------- | -------------- | ----------------------------------------------------------------------------------------- |
| `alt`     | `.pf-c-avatar` | The alt attribute describes the appearance and function of the avatar image. **Required** |

### Usage

| Class                        | Applied to     | Outcome                                                                                                                                                                             |
| ---------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.pf-c-avatar`               | `<img>`        | Initiates an avatar image. **Required**                                                                                                                                             |
| `.pf-m-light`                | `.pf-c-avatar` | Modifies an avatar for use against a light background.                                                                                                                              |
| `.pf-m-dark`                 | `.pf-c-avatar` | Modifies an avatar for use against a dark background.                                                                                                                               |
| `.pf-m-sm{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be small on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes).                                      |
| `.pf-m-md{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be medium on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). **Note:** This is the default size. |
| `.pf-m-lg{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be large on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes).                                      |
| `.pf-m-xl{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be extra large on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes).                                |
