---
id: Tabs
section: components
cssPrefix: pf-c-tabs
---import './Tabs.css'

# Examples

## Default

### Default tabs example

```html
<div class="pf-c-tabs" id="default-tabs">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="default-tabs-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="default-tabs-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Default tabs usage

| Class                 | Applied to          | Outcome                                                                     |
| --------------------- | ------------------- | --------------------------------------------------------------------------- |
| `.pf-m-disabled`      | `a.pf-c-tabs__link` | Modifies a tabs link for disabled styles.                                   |
| `.pf-m-aria-disabled` | `.pf-c-tabs__link`  | Modifies a tabs link for disabled styles, but is still hoverable/focusable. |

## Overflow

### Overflow beginning of list example

```html
<div class="pf-c-tabs pf-m-scrollable" id="overflow-beginning-of-list">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-cloud-link"
      >
        <span class="pf-c-tabs__item-text">Hybrid Cloud</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-automation-link"
      >
        <span class="pf-c-tabs__item-text">Automation</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="overflow-beginning-of-list-files-link"
      >
        <span class="pf-c-tabs__item-text">Files</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Overflow beginning of list usage

| Class                       | Applied to   | Outcome                                   |
| --------------------------- | ------------ | ----------------------------------------- |
| `.pf-m-scrollable`          | `.pf-c-tabs` | Enables the directional scroll buttons.   |
| `.pf-c-tabs__scroll-button` | `<button>`   | Initiates a tabs component scroll button. |

### Horizontal overflow example

```html isBeta
<div class="pf-c-tabs pf-m-overflow" id="horizontal-overflow">
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-overflow">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-more-link"
      >
        <span class="pf-c-tabs__item-text">More</span>
        <span class="pf-c-tabs__link-toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </li>
  </ul>
</div>

```

### Horizontal overflow expanded example

```html isBeta
<div class="pf-c-tabs pf-m-overflow" id="horizontal-overflow-expanded">
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-expanded-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-expanded-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-expanded-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-expanded-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-expanded-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-expanded-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-overflow">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-expanded"
        aria-expanded="true"
        id="horizontal-overflow-expanded-more-link"
      >
        <span class="pf-c-tabs__item-text">More</span>
        <span class="pf-c-tabs__link-toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </li>
  </ul>
</div>

```

### Horizontal overflow selected example

```html isBeta
<div class="pf-c-tabs pf-m-overflow" id="horizontal-overflow-selected">
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-selected-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-selected-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-selected-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-selected-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-selected-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-selected-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-overflow">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="horizontal-overflow-selected-more-link"
      >
        <span class="pf-c-tabs__item-text">More</span>
        <span class="pf-c-tabs__link-toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </li>
  </ul>
</div>

```

## Vertical

### Vertical tabs example

```html
<div class="pf-c-tabs pf-m-vertical" id="vertical-tabs">
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-tabs-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-tabs-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-tabs-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="vertical-tabs-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="vertical-tabs-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-tabs-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

### Vertical expandable example

```html
<div class="pf-c-tabs pf-m-expandable pf-m-vertical" id="vertical-expandable">
  <div class="pf-c-tabs__toggle">
    <div class="pf-c-tabs__toggle-button">
      <button
        class="pf-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        aria-expanded="false"
        id="vertical-expandable-toggle-button"
        aria-labelledby="vertical-expandable-toggle-text vertical-expandable-toggle-button"
      >
        <span class="pf-c-tabs__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
        <span
          class="pf-c-tabs__toggle-text"
          id="vertical-expandable-toggle-text"
        >Containers</span>
      </button>
    </div>
  </div>

  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

### Vertical expanded example

```html
<div
  class="pf-c-tabs pf-m-expandable pf-m-expanded pf-m-vertical"
  id="vertical-expanded"
>
  <div class="pf-c-tabs__toggle">
    <div class="pf-c-tabs__toggle-button">
      <button
        class="pf-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        aria-expanded="true"
        id="vertical-expanded-toggle-button"
        aria-labelledby="vertical-expanded-toggle-text vertical-expanded-toggle-button"
      >
        <span class="pf-c-tabs__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
        <span
          class="pf-c-tabs__toggle-text"
          id="vertical-expanded-toggle-text"
        >Containers</span>
      </button>
    </div>
  </div>

  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

### Vertical expandable responsive example

```html
<div
  class="pf-c-tabs pf-m-expandable pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"
  id="vertical-expandable-responsive"
>
  <div class="pf-c-tabs__toggle">
    <div class="pf-c-tabs__toggle-button">
      <button
        class="pf-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        aria-expanded="false"
        id="vertical-expandable-responsive-toggle-button"
        aria-labelledby="vertical-expandable-responsive-toggle-text vertical-expandable-responsive-toggle-button"
      >
        <span class="pf-c-tabs__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
        <span
          class="pf-c-tabs__toggle-text"
          id="vertical-expandable-responsive-toggle-text"
        >Containers</span>
      </button>
    </div>
  </div>

  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

### Vertical expandable example (legacy)

```html
<div
  class="pf-c-tabs pf-m-expandable pf-m-vertical"
  id="vertical-expandable-legacy"
>
  <div class="pf-c-tabs__toggle">
    <div class="pf-c-tabs__toggle-button">
      <button
        class="pf-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        aria-expanded="false"
        id="vertical-expandable-legacy-toggle-button"
        aria-labelledby="vertical-expandable-legacy-toggle-text vertical-expandable-legacy-toggle-button"
      >
        <span class="pf-c-tabs__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <span
      class="pf-c-tabs__toggle-text"
      id="vertical-expandable-legacy-toggle-text"
    >Containers</span>
  </div>

  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-legacy-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-legacy-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-legacy-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-legacy-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-legacy-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-legacy-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

### Vertical expanded example (legacy)

```html
<div
  class="pf-c-tabs pf-m-expandable pf-m-expanded pf-m-vertical"
  id="vertical-expanded-legacy"
>
  <div class="pf-c-tabs__toggle">
    <div class="pf-c-tabs__toggle-button">
      <button
        class="pf-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        aria-expanded="true"
        id="vertical-expanded-legacy-toggle-button"
        aria-labelledby="vertical-expanded-legacy-toggle-text vertical-expanded-legacy-toggle-button"
      >
        <span class="pf-c-tabs__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <span
      class="pf-c-tabs__toggle-text"
      id="vertical-expanded-legacy-toggle-text"
    >Containers</span>
  </div>

  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-legacy-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-legacy-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-legacy-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-legacy-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-legacy-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expanded-legacy-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

### Vertical expandable responsive example (legacy)

```html
<div
  class="pf-c-tabs pf-m-expandable pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl"
  id="vertical-expandable-responsive-legacy"
>
  <div class="pf-c-tabs__toggle">
    <div class="pf-c-tabs__toggle-button">
      <button
        class="pf-c-button pf-m-plain"
        type="button"
        aria-label="Details"
        aria-expanded="false"
        id="vertical-expandable-responsive-legacy-toggle-button"
        aria-labelledby="vertical-expandable-responsive-legacy-toggle-text vertical-expandable-responsive-legacy-toggle-button"
      >
        <span class="pf-c-tabs__toggle-icon">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <span
      class="pf-c-tabs__toggle-text"
      id="vertical-expandable-responsive-legacy-toggle-text"
    >Containers</span>
  </div>

  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-legacy-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-legacy-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-legacy-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-legacy-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-legacy-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="vertical-expandable-responsive-legacy-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

## Box

### Box tabs example

```html
<div class="pf-c-tabs pf-m-box" id="box-tabs">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button type="button" class="pf-c-tabs__link" id="box-tabs-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button type="button" class="pf-c-tabs__link" id="box-tabs-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="box-tabs-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="box-tabs-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Box overflow example

```html
<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="box-overflow">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-cloud-link"
      >
        <span class="pf-c-tabs__item-text">Hybrid Cloud</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-automation-link"
      >
        <span class="pf-c-tabs__item-text">Automation</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-overflow-files-link"
      >
        <span class="pf-c-tabs__item-text">Files</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Box vertical example

```html
<div class="pf-c-tabs pf-m-box pf-m-vertical" id="box-vertical">
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-vertical-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-vertical-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-vertical-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="box-vertical-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="box-vertical-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-vertical-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>

```

### Box tabs color scheme light 300 example

```html
<div
  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300"
  id="box-tabs-color-scheme-light-300"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-color-scheme-light-300-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-color-scheme-light-300-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-color-scheme-light-300-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="box-tabs-color-scheme-light-300-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="box-tabs-color-scheme-light-300-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-color-scheme-light-300-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>
<div class="tabs-example-block tabs-example-block--m-color-scheme--light-300"></div>

```

## Tab insets

### Default tab insets example

```html
<div
  class="pf-c-tabs pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"
  id="default-tab-insets"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tab-insets-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tab-insets-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tab-insets-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tab-insets-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tab-insets-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tab-insets-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Box tab insets example

```html
<div
  class="pf-c-tabs pf-m-box pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl"
  id="box-tab-insets"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tab-insets-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tab-insets-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tab-insets-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tab-insets-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tab-insets-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tab-insets-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Page insets example

```html
<div class="pf-c-tabs pf-m-page-insets" id="page-insets">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button type="button" class="pf-c-tabs__link" id="page-insets-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="page-insets-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="page-insets-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="page-insets-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="page-insets-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="page-insets-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Insets usage

| Class                                                                     | Applied to   | Outcome                                                                                           |
| ------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------- |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-tabs` | Modifies the tabs component padding/inset to visually match padding of other adjacent components. |
| `.pf-m-page-insets`                                                       | `.pf-c-tabs` | Modifies the tabs component padding/inset to visually match padding of page elements.             |

## Icons

### Icons and text example

```html
<div class="pf-c-tabs" id="icons-and-text">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="icons-and-text-users-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-users" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="icons-and-text-containers-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-box" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="icons-and-text-database-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-database" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="icons-and-text-server-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-server" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="icons-and-text-system-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-laptop" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="icons-and-text-network-wired-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-project-diagram" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

## Sub tabs

### Tabs with sub tabs example

```html
<div class="pf-c-tabs pf-m-scrollable" id="tabs-with-sub-tabs">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<div
  class="pf-c-tabs pf-m-secondary pf-m-scrollable"
  id="tabs-with-sub-tabs-secondary"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-secondary-sub-1-link"
      >
        <span class="pf-c-tabs__item-text">Item 1</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-secondary-sub-2-link"
      >
        <span class="pf-c-tabs__item-text">Item 2</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-secondary-sub-3-link"
      >
        <span class="pf-c-tabs__item-text">Item 3</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-secondary-sub-4-link"
      >
        <span class="pf-c-tabs__item-text">Item 4</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-secondary-sub-5-link"
      >
        <span class="pf-c-tabs__item-text">Item 5</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="tabs-with-sub-tabs-secondary-sub-6-link"
      >
        <span class="pf-c-tabs__item-text">Item 6</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Box tabs with sub tabs example

```html
<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="box-tabs-with-sub-tabs">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<div
  class="pf-c-tabs pf-m-secondary pf-m-scrollable"
  id="box-tabs-with-sub-tabs-secondary"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-secondary-sub-1-link"
      >
        <span class="pf-c-tabs__item-text">Item 1</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-secondary-sub-2-link"
      >
        <span class="pf-c-tabs__item-text">Item 2</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-secondary-sub-3-link"
      >
        <span class="pf-c-tabs__item-text">Item 3</span>
      </button>
    </li>

    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-secondary-sub-4-link"
      >
        <span class="pf-c-tabs__item-text">Item 4</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-secondary-sub-5-link"
      >
        <span class="pf-c-tabs__item-text">Item 5</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-with-sub-tabs-secondary-sub-6-link"
      >
        <span class="pf-c-tabs__item-text">Item 6</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

## Filled

### Filled tabs example

```html
<div class="pf-c-tabs pf-m-fill" id="filled-tabs">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button type="button" class="pf-c-tabs__link" id="filled-tabs-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-tabs-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-tabs-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Filled with icons example

```html
<div class="pf-c-tabs pf-m-fill" id="filled-with-icons">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-with-icons-users-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-users" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-with-icons-containers-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-box" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-with-icons-database-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-database" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Filled box example

```html
<div class="pf-c-tabs pf-m-fill pf-m-box" id="filled-box">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button type="button" class="pf-c-tabs__link" id="filled-box-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-box-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-box-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Filled box with icons example

```html
<div class="pf-c-tabs pf-m-fill pf-m-box" id="filled-box-with-icons">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-box-with-icons-users-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-users" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-box-with-icons-containers-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-box" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="filled-box-with-icons-database-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-database" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Filled usage

| Class        | Applied to   | Outcome                                                     |
| ------------ | ------------ | ----------------------------------------------------------- |
| `.pf-m-fill` | `.pf-c-tabs` | Modifies the tabs to fill the available space. **Required** |

## Tabs as navigation

### Using the nav element example

```html
<nav
  class="pf-c-tabs pf-m-scrollable"
  aria-label="Tabs nav"
  id="using-the-nav-element"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="using-the-nav-element-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </a>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="using-the-nav-element-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="using-the-nav-element-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </a>
    </li>

    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link pf-m-disabled"
        aria-disabled="true"
        tabindex="-1"
        href="#"
        id="using-the-nav-element-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        href="#"
        id="using-the-nav-element-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="using-the-nav-element-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </a>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>

```

### Sub tabs using the nav element example

```html
<nav
  class="pf-c-tabs"
  aria-label="Tabs primary nav"
  id="sub-tabs-using-the-nav-element"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </a>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </a>
    </li>

    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </a>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>

<nav
  class="pf-c-tabs pf-m-secondary"
  aria-label="Tabs secondary nav"
  id="sub-tabs-using-the-nav-element-secondary"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-secondary-sub-1-link"
      >
        <span class="pf-c-tabs__item-text">Item 1</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-secondary-sub-2-link"
      >
        <span class="pf-c-tabs__item-text">Item 2</span>
      </a>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-secondary-sub-3-link"
      >
        <span class="pf-c-tabs__item-text">Item 3</span>
      </a>
    </li>

    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link pf-m-disabled"
        aria-disabled="true"
        tabindex="-1"
        href="#"
        id="sub-tabs-using-the-nav-element-secondary-sub-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        href="#"
        id="sub-tabs-using-the-nav-element-secondary-sub-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a
        class="pf-c-tabs__link"
        href="#"
        id="sub-tabs-using-the-nav-element-secondary-sub-6-link"
      >
        <span class="pf-c-tabs__item-text">Item 6</span>
      </a>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>

```

## Tab item actions

### Help button example

```html isBeta
<div class="pf-c-tabs pf-m-scrollable" id="help-button-default-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-default-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-default-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-default-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-default-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-button-default-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-default-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-default-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="help-button-box-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-box-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-button-box-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-box-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"
  id="help-button-box-light-300-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-light-300-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-light-300-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-light-300-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-box-light-300-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-button-box-light-300-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-box-light-300-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-box-light-300-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-scrollable" id="help-button-icons-text-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-icons-text-example-users-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-users" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-icons-text-example-containers-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-box" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-icons-text-example-database-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-database" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-icons-text-example-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-server" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-button-icons-text-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-laptop" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-icons-text-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-download" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-icons-text-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-project-diagram" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-fill" id="help-button-filled-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-filled-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-filled-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-filled-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-scrollable"
  id="help-button-secondary-primary-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-primary-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-primary-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-primary-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-secondary-primary-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-button-secondary-primary-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-secondary-primary-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-primary-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>
<div
  class="pf-c-tabs pf-m-secondary pf-m-scrollable"
  id="help-button-secondary-secondary-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-secondary-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-secondary-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-secondary-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-secondary-secondary-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-button-secondary-secondary-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-button-secondary-secondary-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-button-secondary-secondary-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Close button example

```html isBeta
<div class="pf-c-tabs pf-m-scrollable" id="close-button-default-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-default-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-default-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-default-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-default-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="close-button-default-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-default-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-default-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="close-button-box-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-box-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="close-button-box-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-box-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"
  id="close-button-box-light-300-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-light-300-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-light-300-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-light-300-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-box-light-300-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="close-button-box-light-300-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-box-light-300-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-box-light-300-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-scrollable" id="close-button-icons-text-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-icons-text-example-users-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-users" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-icons-text-example-containers-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-box" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-icons-text-example-database-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-database" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-icons-text-example-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-server" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="close-button-icons-text-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-laptop" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-icons-text-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-code" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-icons-text-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-project-diagram" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-fill" id="close-button-filled-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-filled-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-filled-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-filled-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-scrollable"
  id="close-button-secondary-primary-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-primary-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-primary-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-primary-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-secondary-primary-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="close-button-secondary-primary-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-secondary-primary-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-primary-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>
<div
  class="pf-c-tabs pf-m-secondary pf-m-scrollable"
  id="close-button-secondary-secondary-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-secondary-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-secondary-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-secondary-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-secondary-secondary-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="close-button-secondary-secondary-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="close-button-secondary-secondary-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="close-button-secondary-secondary-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

### Help and close button example

```html isBeta
<div class="pf-c-tabs pf-m-scrollable" id="help-close-button-default-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-default-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-default-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-default-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-default-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-close-button-default-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-default-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-default-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Close disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-default-example-help-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help and close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help and close disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help and close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-default-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-box pf-m-scrollable"
  id="help-close-button-box-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-close-button-box-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Close disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-example-help-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help and close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help and close disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help and close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"
  id="help-close-button-box-light-300-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-light-300-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-light-300-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-light-300-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-light-300-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-close-button-box-light-300-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-light-300-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-light-300-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Close disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-box-light-300-example-help-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help and close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help and close disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help and close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-box-light-300-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-scrollable"
  id="help-close-button-icons-text-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-icons-text-example-users-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-users" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-icons-text-example-containers-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-fas fa-box" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-icons-text-example-database-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-database" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-icons-text-example-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-server" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-close-button-icons-text-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-laptop" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-icons-text-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-download" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-icons-text-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-code" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Close disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-icons-text-example-help-close-disabled-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-folder" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Help and close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help and close disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help and close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-icons-text-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-icon">
          <i class="fas fa-project-diagram" aria-hidden="true"></i>
        </span>
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-fill" id="help-close-button-filled-example">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-filled-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-filled-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-filled-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-hidden="true"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-scrollable"
  id="help-close-button-secondary-primary-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-primary-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-primary-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-primary-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-primary-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-close-button-secondary-primary-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-primary-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-primary-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Close disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-primary-example-help-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help and close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help and close disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help and close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-primary-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>
<div
  class="pf-c-tabs pf-m-secondary pf-m-scrollable"
  id="help-close-button-secondary-secondary-example"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-secondary-example-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Users label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-secondary-example-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Containers label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-secondary-example-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Database label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-secondary-example-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link pf-m-aria-disabled"
        aria-disabled="true"
        id="help-close-button-secondary-secondary-example-aria-disabled-link"
      >
        <span class="pf-c-tabs__item-text">ARIA disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for ARIA disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close ARIA disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-secondary-example-help-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help disabled"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-secondary-example-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Close disabled label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action pf-m-disabled">
      <button
        type="button"
        class="pf-c-tabs__link"
        disabled
        id="help-close-button-secondary-secondary-example-help-close-disabled-link"
      >
        <span class="pf-c-tabs__item-text">Help and close disabled</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Help and close disabled label"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Help and close disabled"
          disabled
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="help-close-button-secondary-secondary-example-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="More info for Network label"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
          </span>
        </button>
      </span>

      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>

```

## Add tab button

### Add tab button example

```html
<div class="pf-c-tabs pf-m-scrollable" id="default-tabs-add-tab-button">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Server"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close System"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
  <span class="pf-c-tabs__add">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </button>
  </span>
</div>
<div
  class="pf-c-tabs pf-m-secondary pf-m-scrollable"
  id="default-tabs-add-tab-button-secondary"
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-secondary-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-secondary-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-secondary-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-secondary-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Server"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-secondary-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close System"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="default-tabs-add-tab-button-secondary-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
  <span class="pf-c-tabs__add">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </button>
  </span>
</div>

<br />
<br />

<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="box-tabs-add-tab-button">
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Server"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close System"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
  <span class="pf-c-tabs__add">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </button>
  </span>
</div>

<br />
<br />

<div
  class="pf-c-tabs pf-m-box pf-m-color-scheme--light-300 pf-m-scrollable"
  id="box-tabs-add-tab-button-color-scheme-light-300 "
>
  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    disabled
    aria-label="Scroll left"
  >
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-color-scheme-light-300 -users-link"
      >
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Users"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-current pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-color-scheme-light-300 -containers-link"
      >
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Containers"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-color-scheme-light-300 -database-link"
      >
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Database"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>

    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-color-scheme-light-300 -server-link"
      >
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Server"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-color-scheme-light-300 -system-link"
      >
        <span class="pf-c-tabs__item-text">System</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close System"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
    <li class="pf-c-tabs__item pf-m-action">
      <button
        type="button"
        class="pf-c-tabs__link"
        id="box-tabs-add-tab-button-color-scheme-light-300 -network-wired-link"
      >
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
      <span class="pf-c-tabs__item-action">
        <button
          class="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close Network"
        >
          <span class="pf-c-tabs__item-action-icon">
            <i class="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      </span>
    </li>
  </ul>

  <button
    class="pf-c-tabs__scroll-button"
    type="button"
    aria-label="Scroll right"
  >
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
  <span class="pf-c-tabs__add">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Add tab">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </button>
  </span>
</div>

```

## Documentation

### Overview

The tabs component should only be used to change content views within a page. The similar-looking but semantically different [horizontal nav component](/components/navigation/#horizontal) is available for general navigation use cases.

Tabs should be used with the [tab content component](/components/tab-content).

Whenever a list of tabs is unique on the current page, it can be used in a `<nav>` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `<nav>` element.

### Usage

| Class                                                            | Applied to          | Outcome                                                                                                                                                                                                         |
| ---------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.pf-c-tabs`                                                     | `<nav>`, `<div>`    | Initiates the tabs component. **Required**                                                                                                                                                                      |
| `.pf-c-tabs__list`                                               | `<ul>`              | Initiates a tabs component list. **Required**                                                                                                                                                                   |
| `.pf-c-tabs__item`                                               | `<li>`              | Initiates a tabs component item. **Required**                                                                                                                                                                   |
| `.pf-c-tabs__item-text`                                          | `<span>`            | Initiates a tabs component item icon. **Required**                                                                                                                                                              |
| `.pf-c-tabs__item-icon`                                          | `<span>`            | Initiates a tabs component item text. **Required**                                                                                                                                                              |
| `.pf-c-tabs__item-close`                                         | `<span>`            | Initiates a tabs component item close.                                                                                                                                                                          |
| `.pf-c-tabs__item-close-icon`                                    | `<span>`            | Initiates a tabs component item close icon.                                                                                                                                                                     |
| `.pf-c-tabs__link`                                               | `<button>`, `<a>`   | Initiates a tabs component link. **Required**                                                                                                                                                                   |
| `.pf-c-tabs__scroll-button`                                      | `<button>`          | Initiates a tabs component scroll button.                                                                                                                                                                       |
| `.pf-c-tabs__add`                                                | `<span>`            | Initiates a tabs component add button.                                                                                                                                                                          |
| `.pf-c-tabs__toggle`                                             | `<div>`             | Initiates a tabs expandable toggle.                                                                                                                                                                             |
| `.pf-c-tabs__toggle-button`                                      | `<button>`          | Initiates a tabs expandable toggle button.                                                                                                                                                                      |
| `.pf-c-tabs__toggle-icon`                                        | `<span>`            | Initiates a tabs expandable toggle icon.                                                                                                                                                                        |
| `.pf-c-tabs__toggle-text`                                        | `<span>`            | Initiates a tabs expandable toggle text.                                                                                                                                                                        |
| `.pf-m-secondary`                                                | `.pf-c-tabs`        | Applies secondary styling to the tab component.                                                                                                                                                                 |
| `.pf-m-no-border-bottom`                                         | `.pf-c-tabs`        | Removes bottom border from a tab component.                                                                                                                                                                     |
| `.pf-m-border-bottom`                                            | `.pf-c-tabs`        | Adds a bottom border to secondary tabs.                                                                                                                                                                         |
| `.pf-m-box`                                                      | `.pf-c-tabs`        | Applies box styling to the tab component.                                                                                                                                                                       |
| `.pf-m-vertical`                                                 | `.pf-c-tabs`        | Applies vertical styling to the tab component.                                                                                                                                                                  |
| `.pf-m-fill`                                                     | `.pf-c-tabs`        | Modifies the tabs to fill the available space.                                                                                                                                                                  |
| `.pf-m-current`                                                  | `.pf-c-tabs__item`  | Indicates that a tab item is currently selected.                                                                                                                                                                |
| `.pf-m-action`                                                   | `.pf-c-tabs__item`  | Indicates that a tab item contains actions other than the tab link.                                                                                                                                             |
| `.pf-m-overflow`                                                 | `.pf-c-tabs__item`  | Applies overflow menu styling to a tab item.                                                                                                                                                                    |
| `.pf-m-expanded`                                                 | `.pf-c-tabs__item`  | Applies expanded styling to the overflow menu tab item.                                                                                                                                                         |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[md, lg, xl, 2xl]}` | `.pf-c-tabs`        | Modifies tabs horizontal padding at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes).                                                                   |
| `.pf-m-page-insets`                                              | `.pf-c-tabs`        | Modifies the tabs component padding/inset to visually match padding of page elements.                                                                                                                           |
| `.pf-m-color-scheme--light-300`                                  | `.pf-c-tabs`        | Modifies the tabs component tab background colors.                                                                                                                                                              |
| `.pf-m-expandable{-on-[breakpoint]}`                             | `.pf-c-tabs`        | Modifies the tabs component to be expandable via a toggle at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). **Note:** works with vertical tabs only. |
| `.pf-m-non-expandable{-on-[breakpoint]}`                         | `.pf-c-tabs`        | Modifies the tabs component to be non-expandable at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes).                                                   |
| `.pf-m-expanded`                                                 | `.pf-c-tabs`        | Modifies the expandable tabs component for the expanded state.                                                                                                                                                  |
| `.pf-m-disabled`                                                 | `a.pf-c-tabs__link` | Modifies a tabs link for disabled styles.                                                                                                                                                                       |
| `.pf-m-aria-disabled`                                            | `.pf-c-tabs__link`  | Modifies a tabs link for disabled styles, but is still hoverable/focusable.                                                                                                                                     |
