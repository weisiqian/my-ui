# Design Tokens System

Design Tokens are a way to centrally manage design decisions, abstracting design properties (such as colors, fonts, spacing, etc.) into reusable variables. Uni UI's design token system provides a complete set of design variables to help you create consistent, maintainable user interfaces.

## Color Tokens

Color tokens define all the colors used in the system, including brand colors, functional colors, and neutral colors.

### Brand Colors

Brand colors are the primary identity colors of the application, used for primary buttons, links, and emphasis elements.

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #18a058;"></div>
    <div class="token-info">
      <div class="token-name">primary</div>
      <div class="token-value">#18a058</div>
      <div class="token-description">Primary brand color, used for primary buttons, links, etc.</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #36ad6a;"></div>
    <div class="token-info">
      <div class="token-name">primaryHover</div>
      <div class="token-value">#36ad6a</div>
      <div class="token-description">Hover state of the primary brand color</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #0c7a43;"></div>
    <div class="token-info">
      <div class="token-name">primaryPressed</div>
      <div class="token-value">#0c7a43</div>
      <div class="token-description">Pressed state of the primary brand color</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #edf9f0;"></div>
    <div class="token-info">
      <div class="token-name">primarySuppl</div>
      <div class="token-value">#edf9f0</div>
      <div class="token-description">Supplementary color for the primary brand color, used for backgrounds, etc.</div>
    </div>
  </div>
</div>

### Functional Colors

Functional colors are used to represent different states and actions, such as information, success, warning, and error.

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #2080f0;"></div>
    <div class="token-info">
      <div class="token-name">info</div>
      <div class="token-value">#2080f0</div>
      <div class="token-description">Information color, used for informational messages</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #18a058;"></div>
    <div class="token-info">
      <div class="token-name">success</div>
      <div class="token-value">#18a058</div>
      <div class="token-description">Success color, used for success states</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #f0a020;"></div>
    <div class="token-info">
      <div class="token-name">warning</div>
      <div class="token-value">#f0a020</div>
      <div class="token-description">Warning color, used for warning states</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #d03050;"></div>
    <div class="token-info">
      <div class="token-name">error</div>
      <div class="token-value">#d03050</div>
      <div class="token-description">Error color, used for error states</div>
    </div>
  </div>
</div>

### Text Colors

Text colors are used for different levels of text content.

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #333639;"></div>
    <div class="token-info">
      <div class="token-name">text.primary</div>
      <div class="token-value">#333639</div>
      <div class="token-description">Primary text color, used for headings and body text</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #666666;"></div>
    <div class="token-info">
      <div class="token-name">text.secondary</div>
      <div class="token-value">#666666</div>
      <div class="token-description">Secondary text color, used for secondary information</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #999999;"></div>
    <div class="token-info">
      <div class="token-name">text.tertiary</div>
      <div class="token-value">#999999</div>
      <div class="token-description">Tertiary text color, used for auxiliary information</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #c0c4cc;"></div>
    <div class="token-info">
      <div class="token-name">text.disabled</div>
      <div class="token-value">#c0c4cc</div>
      <div class="token-description">Disabled text color</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #ffffff; border: 1px solid #eee;"></div>
    <div class="token-info">
      <div class="token-name">text.inverse</div>
      <div class="token-value">#ffffff</div>
      <div class="token-description">Inverse text color, used for dark backgrounds</div>
    </div>
  </div>
</div>

### Background Colors

Background colors are used for different levels of backgrounds.

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #ffffff; border: 1px solid #eee;"></div>
    <div class="token-info">
      <div class="token-name">background.primary</div>
      <div class="token-value">#ffffff</div>
      <div class="token-description">Primary background color, used for page backgrounds</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #f5f7fa;"></div>
    <div class="token-info">
      <div class="token-name">background.secondary</div>
      <div class="token-value">#f5f7fa</div>
      <div class="token-description">Secondary background color, used for cards, panels, etc.</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #ebedf0;"></div>
    <div class="token-info">
      <div class="token-name">background.tertiary</div>
      <div class="token-value">#ebedf0</div>
      <div class="token-description">Tertiary background color, used for dividers, etc.</div>
    </div>
  </div>
</div>

### Border Colors

Border colors are used for different levels of borders.

<div class="token-grid">
  <div class="token-item">
    <div class="token-color" style="background-color: #d9d9d9;"></div>
    <div class="token-info">
      <div class="token-name">border.primary</div>
      <div class="token-value">#d9d9d9</div>
      <div class="token-description">Primary border color</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-color" style="background-color: #e4e7ed;"></div>
    <div class="token-info">
      <div class="token-name">border.secondary</div>
      <div class="token-value">#e4e7ed</div>
      <div class="token-description">Secondary border color</div>
    </div>
  </div>
</div>

## Typography Tokens

Typography tokens define all the fonts, font sizes, line heights, and other typography-related design properties used in the system.

### Font Families

<div class="token-typography">
  <div class="token-item">
    <div class="token-sample" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      The quick brown fox jumps over the lazy dog
    </div>
    <div class="token-info">
      <div class="token-name">fontFamily.base</div>
      <div class="token-value">-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...</div>
      <div class="token-description">Base font family, used for most text</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">
      The quick brown fox jumps over the lazy dog
    </div>
    <div class="token-info">
      <div class="token-name">fontFamily.mono</div>
      <div class="token-value">SFMono-Regular, Menlo, Monaco, Consolas, ...</div>
      <div class="token-description">Monospace font family, used for code, etc.</div>
    </div>
  </div>
</div>

### Font Sizes

<div class="token-typography">
  <div class="token-item">
    <div class="token-sample" style="font-size: 12px;">
      The quick brown fox jumps over the lazy dog (12px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.xs</div>
      <div class="token-value">12px</div>
      <div class="token-description">Extra small font size, used for auxiliary text</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 14px;">
      The quick brown fox jumps over the lazy dog (14px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.sm</div>
      <div class="token-value">14px</div>
      <div class="token-description">Small font size, used for body text</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 16px;">
      The quick brown fox jumps over the lazy dog (16px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.md</div>
      <div class="token-value">16px</div>
      <div class="token-description">Medium font size, used for subheadings</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 18px;">
      The quick brown fox jumps over the lazy dog (18px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.lg</div>
      <div class="token-value">18px</div>
      <div class="token-description">Large font size, used for headings</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-size: 20px;">
      The quick brown fox jumps over the lazy dog (20px)
    </div>
    <div class="token-info">
      <div class="token-name">fontSize.xl</div>
      <div class="token-value">20px</div>
      <div class="token-description">Extra large font size, used for large headings</div>
    </div>
  </div>
</div>

### Font Weights

<div class="token-typography">
  <div class="token-item">
    <div class="token-sample" style="font-weight: 300;">
      The quick brown fox jumps over the lazy dog (300)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.light</div>
      <div class="token-value">300</div>
      <div class="token-description">Light font weight</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 400;">
      The quick brown fox jumps over the lazy dog (400)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.regular</div>
      <div class="token-value">400</div>
      <div class="token-description">Regular font weight</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 500;">
      The quick brown fox jumps over the lazy dog (500)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.medium</div>
      <div class="token-value">500</div>
      <div class="token-description">Medium font weight</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 600;">
      The quick brown fox jumps over the lazy dog (600)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.semibold</div>
      <div class="token-value">600</div>
      <div class="token-description">Semi-bold font weight</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample" style="font-weight: 700;">
      The quick brown fox jumps over the lazy dog (700)
    </div>
    <div class="token-info">
      <div class="token-name">fontWeight.bold</div>
      <div class="token-value">700</div>
      <div class="token-description">Bold font weight</div>
    </div>
  </div>
</div>

## Spacing Tokens

Spacing tokens define all the spacing, margins, padding, etc. used in the system.

### Base Spacing

<div class="token-spacing">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 4px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.xs</div>
      <div class="token-value">4px</div>
      <div class="token-description">Extra small spacing</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 8px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.sm</div>
      <div class="token-value">8px</div>
      <div class="token-description">Small spacing</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 12px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.md</div>
      <div class="token-value">12px</div>
      <div class="token-description">Medium spacing</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 16px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.lg</div>
      <div class="token-value">16px</div>
      <div class="token-description">Large spacing</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-spacing-box" style="width: 24px; height: 20px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">scale.xl</div>
      <div class="token-value">24px</div>
      <div class="token-description">Extra large spacing</div>
    </div>
  </div>
</div>

### Padding

<div class="token-spacing">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-padding-box" style="padding: 4px 8px;">Content</div>
    </div>
    <div class="token-info">
      <div class="token-name">padding.xs</div>
      <div class="token-value">4px 8px</div>
      <div class="token-description">Extra small padding</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-padding-box" style="padding: 8px 16px;">Content</div>
    </div>
    <div class="token-info">
      <div class="token-name">padding.md</div>
      <div class="token-value">8px 16px</div>
      <div class="token-description">Medium padding</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-padding-box" style="padding: 16px 24px;">Content</div>
    </div>
    <div class="token-info">
      <div class="token-name">padding.xl</div>
      <div class="token-value">16px 24px</div>
      <div class="token-description">Extra large padding</div>
    </div>
  </div>
</div>

## Border Tokens

Border tokens define all the borders, border radii, etc. used in the system.

### Border Widths

<div class="token-border">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-width: 1px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">width.thin</div>
      <div class="token-value">1px</div>
      <div class="token-description">Thin border</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-width: 2px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">width.base</div>
      <div class="token-value">2px</div>
      <div class="token-description">Base border</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-width: 3px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">width.thick</div>
      <div class="token-value">3px</div>
      <div class="token-description">Thick border</div>
    </div>
  </div>
</div>

### Border Styles

<div class="token-border">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-style: solid;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">style.solid</div>
      <div class="token-value">solid</div>
      <div class="token-description">Solid border</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-style: dashed;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">style.dashed</div>
      <div class="token-value">dashed</div>
      <div class="token-description">Dashed border</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-border-box" style="border-style: dotted;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">style.dotted</div>
      <div class="token-value">dotted</div>
      <div class="token-description">Dotted border</div>
    </div>
  </div>
</div>

### Border Radii

<div class="token-border">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 2px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.xs</div>
      <div class="token-value">2px</div>
      <div class="token-description">Extra small border radius</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 3px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.sm</div>
      <div class="token-value">3px</div>
      <div class="token-description">Small border radius</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 5px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.md</div>
      <div class="token-value">5px</div>
      <div class="token-description">Medium border radius</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 8px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.lg</div>
      <div class="token-value">8px</div>
      <div class="token-description">Large border radius</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-radius-box" style="border-radius: 9999px;"></div>
    </div>
    <div class="token-info">
      <div class="token-name">radius.full</div>
      <div class="token-value">9999px</div>
      <div class="token-description">Full border radius</div>
    </div>
  </div>
</div>

## Shadow Tokens

Shadow tokens define all the shadow effects used in the system.

### Elevation Shadows

<div class="token-shadow">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.xs</div>
      <div class="token-value">0 1px 2px 0 rgba(0, 0, 0, 0.05)</div>
      <div class="token-description">Extra small shadow, used for subtle elevation differences</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.sm</div>
      <div class="token-value">0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)</div>
      <div class="token-description">Small shadow, used for cards, buttons, etc.</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.md</div>
      <div class="token-value">0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)</div>
      <div class="token-description">Medium shadow, used for dropdowns, popovers, etc.</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.lg</div>
      <div class="token-value">0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)</div>
      <div class="token-description">Large shadow, used for modals, etc.</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">elevation.xl</div>
      <div class="token-value">0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)</div>
      <div class="token-description">Extra large shadow, used for full-screen dialogs, etc.</div>
    </div>
  </div>
</div>

### Inset Shadows

<div class="token-shadow">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">inset.xs</div>
      <div class="token-value">inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)</div>
      <div class="token-description">Extra small inset shadow, used for inputs, etc.</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-shadow-box" style="box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(0, 0, 0, 0.06);"></div>
    </div>
    <div class="token-info">
      <div class="token-name">inset.sm</div>
      <div class="token-value">inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(0, 0, 0, 0.06)</div>
      <div class="token-description">Small inset shadow, used for pressed states, etc.</div>
    </div>
  </div>
</div>

## Animation Tokens

Animation tokens define all the animations, transitions, etc. used in the system.

### Durations

<div class="token-animation">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="150ms">150ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.fast</div>
      <div class="token-value">150ms</div>
      <div class="token-description">Fast transition, used for simple state changes</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="250ms">250ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.normal</div>
      <div class="token-value">250ms</div>
      <div class="token-description">Normal transition, used for most interactions</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="350ms">350ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.slow</div>
      <div class="token-value">350ms</div>
      <div class="token-description">Slow transition, used for complex state changes</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-duration="500ms">500ms</div>
    </div>
    <div class="token-info">
      <div class="token-name">duration.slower</div>
      <div class="token-value">500ms</div>
      <div class="token-description">Slower transition, used for important state changes</div>
    </div>
  </div>
</div>

### Easing Functions

<div class="token-animation">
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="linear">linear</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.linear</div>
      <div class="token-value">linear</div>
      <div class="token-description">Linear transition, constant speed</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease">ease</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.ease</div>
      <div class="token-value">ease</div>
      <div class="token-description">Default easing, starts fast and ends slow</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease-in">ease-in</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.easeIn</div>
      <div class="token-value">cubic-bezier(0.4, 0, 1, 1)</div>
      <div class="token-description">Ease-in, starts slow and ends fast</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease-out">ease-out</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.easeOut</div>
      <div class="token-value">cubic-bezier(0, 0, 0.2, 1)</div>
      <div class="token-description">Ease-out, starts fast and ends slow</div>
    </div>
  </div>
  <div class="token-item">
    <div class="token-sample">
      <div class="token-animation-box" data-easing="ease-in-out">ease-in-out</div>
    </div>
    <div class="token-info">
      <div class="token-name">easing.easeInOut</div>
      <div class="token-value">cubic-bezier(0.4, 0, 0.2, 1)</div>
      <div class="token-description">Ease-in-out, starts slow, speeds up in the middle, and ends slow</div>
    </div>
  </div>
</div>

## Using Design Tokens in Components

The main purpose of the design token system is to provide a consistent design language in component development. Here are examples of using design tokens in components.

### Using in Vue Components

```vue
<template>
  <button
    :class="[
      'u-button',
      `u-button--${type}`,
      `u-button--${size}`,
      {
        'u-button--disabled': disabled,
        'u-button--loading': loading,
        'u-button--round': round
      }
    ]"
    :style="buttonStyle"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useTheme } from '@uni-ui/theme'

export default defineComponent({
  name: 'UButton',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => {
        return ['small', 'medium', 'large'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const { mergedTheme } = useTheme()

    // Using design tokens to compute button styles
    const buttonStyle = computed(() => {
      const theme = mergedTheme.value
      const tokens = theme.tokens
      const style: Record<string, string> = {}

      // Apply theme - using design tokens
      if (props.type === 'default') {
        style['--button-text-color'] = tokens.colors.text.primary
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.border.primary}`
        style['--button-bg-color'] = tokens.colors.background.primary
      } else if (props.type === 'primary') {
        style['--button-bg-color'] = tokens.colors.primary
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.primary}`
      } else if (props.type === 'info') {
        style['--button-bg-color'] = tokens.colors.info
        style['--button-text-color'] = tokens.colors.text.inverse
        style['--button-border'] = `${tokens.borders.width.thin} ${tokens.borders.style.solid} ${tokens.colors.info}`
      }

      // Apply size - using design tokens
      if (props.size === 'small') {
        style['--button-padding'] = tokens.spacing.padding.xs
        style['--button-font-size'] = tokens.typography.fontSize.xs
      } else if (props.size === 'medium') {
        style['--button-padding'] = tokens.spacing.padding.md
        style['--button-font-size'] = tokens.typography.fontSize.sm
      } else if (props.size === 'large') {
        style['--button-padding'] = tokens.spacing.padding.lg
        style['--button-font-size'] = tokens.typography.fontSize.md
      }

      // Apply border radius - using design tokens
      style['--button-border-radius'] = props.round
        ? tokens.borders.radius.full
        : tokens.borders.radius.sm

      // Apply transition - using design tokens
      style['--button-transition'] = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.easeInOut}`

      return style
    })

    return {
      buttonStyle
    }
  }
})
</script>

<style>
.u-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: var(--button-transition);
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  appearance: none;

  padding: var(--button-padding);
  font-size: var(--button-font-size);
  border-radius: var(--button-border-radius);
  color: var(--button-text-color);
  background-color: var(--button-bg-color, transparent);
  border: var(--button-border);
}

.u-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Other styles... */
</style>
```

### Using in CSS

Design tokens are converted to CSS variables, which you can use directly in your styles:

```css
.custom-card {
  /* Using color tokens */
  background-color: var(--u-color-background-secondary);
  color: var(--u-color-text-primary);

  /* Using border tokens */
  border: var(--u-border-width-thin) var(--u-border-style-solid) var(--u-color-border-primary);
  border-radius: var(--u-border-radius-md);

  /* Using shadow tokens */
  box-shadow: var(--u-shadow-elevation-sm);

  /* Using spacing tokens */
  padding: var(--u-spacing-padding-md);
  margin: var(--u-spacing-margin-md);

  /* Using typography tokens */
  font-size: var(--u-font-size-sm);
  font-weight: var(--u-font-weight-regular);

  /* Using animation tokens */
  transition: all var(--u-animation-duration-normal) var(--u-animation-easing-ease-out);
}

.custom-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--u-shadow-elevation-md);
}
```

## Theme Switching

The design token system supports light and dark theme switching. Here's a simple example of theme switching:

```vue
<template>
  <div class="theme-switch">
    <button @click="toggleTheme">
      Toggle Theme: {{ currentTheme }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTheme, lightTheme, darkTheme } from '@uni-ui/theme'

export default defineComponent({
  setup() {
    const { theme } = useTheme()
    const currentTheme = ref(theme.value.name)

    const toggleTheme = () => {
      if (theme.value.name === 'light') {
        theme.value = darkTheme
      } else {
        theme.value = lightTheme
      }
      currentTheme.value = theme.value.name
    }

    return {
      currentTheme,
      toggleTheme
    }
  }
})
</script>
```

<style>
/* Design token display styles */
.token-grid,
.token-typography,
.token-spacing,
.token-border,
.token-shadow,
.token-animation {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.token-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
}

.token-sample {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: 60px;
}

.token-info {
  padding: 15px;
  background-color: #fff;
}

.token-name {
  font-weight: bold;
  margin-bottom: 5px;
  font-family: monospace;
}

.token-value {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 5px;
  font-family: monospace;
}

.token-description {
  font-size: 0.9em;
  color: #333;
}

/* Color token styles */
.token-color {
  width: 100%;
  height: 60px;
  border-radius: 3px;
}

/* Border token styles */
.token-border-box {
  width: 100px;
  height: 100px;
  border: 2px solid #333;
}

.token-radius-box {
  width: 100px;
  height: 100px;
  background-color: #333;
}

/* Shadow token styles */
.token-shadow-box {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 5px;
}

/* Spacing token styles */
.token-spacing-box {
  background-color: #333;
}

.token-padding-box {
  background-color: #f0f0f0;
  border: 1px dashed #999;
}

/* Animation token styles */
.token-animation-box {
  width: 100px;
  height: 40px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.3s;
}

.token-animation-box:hover {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .token-grid,
  .token-typography,
  .token-spacing,
  .token-border,
  .token-shadow,
  .token-animation {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Add interactive effects for animation examples
document.addEventListener('DOMContentLoaded', () => {
  const animationBoxes = document.querySelectorAll('.token-animation-box');

  animationBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const duration = box.getAttribute('data-duration');
      const easing = box.getAttribute('data-easing');

      if (duration) {
        box.style.transition = `transform ${duration} ease`;
      } else if (easing) {
        box.style.transition = `transform 0.5s ${easing}`;
      }

      box.style.transform = 'translateX(50px)';

      setTimeout(() => {
        box.style.transform = 'translateX(0)';
      }, 1000);
    });
  });
});
</script>