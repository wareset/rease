export interface ValueSets {
  'b': true | false
  'u': true | false | undefined
  'o': 'on' | 'off'
  'y': 'yes' | 'no'
  'w': 'soft' | 'hard'
  'd': 'ltr' | 'rtl' | 'auto'
  'm': 'get' | 'post' | 'dialog'
  'fm': 'get' | 'post'
  's': 'row' | 'col' | 'rowgroup' | 'colgroup'
  't': 'hidden' | 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' | 'datetime' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'submit' | 'image' | 'reset' | 'button'
  'im': 'verbatim' | 'latin' | 'latin-name' | 'latin-prose' | 'full-width-latin' | 'kana' | 'kana-name' | 'katakana' | 'numeric' | 'tel' | 'email' | 'url'
  'bt': 'button' | 'submit' | 'reset' | 'menu'
  'lt': '1' | 'a' | 'A' | 'i' | 'I'
  'mt': 'context' | 'toolbar'
  'mit': 'command' | 'checkbox' | 'radio'
  'et': 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
  'tk': 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
  'pl': 'none' | 'metadata' | 'auto'
  'sh': 'circle' | 'default' | 'poly' | 'rect'
  'xo': 'anonymous' | 'use-credentials'
  'target': '_self' | '_blank' | '_parent' | '_top'
  'sb': 'allow-forms' | 'allow-modals' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-same-origin' | 'allow-scripts' | 'allow-top-navigation'
  'tristate': true | false | 'mixed' | undefined
  'inputautocomplete': 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-year' | 'bday-day' | 'bday-month' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel-area-code' | 'tel' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work'
  'autocomplete': 'inline' | 'list' | 'both' | 'none'
  'current': 'page' | 'step' | 'location' | 'date' | 'time' | true | false
  'dropeffect': 'copy' | 'move' | 'link' | 'execute' | 'popup' | 'none'
  'invalid': 'grammar' | false | 'spelling' | true
  'live': 'off' | 'polite' | 'assertive'
  'orientation': 'vertical' | 'horizontal' | undefined
  'relevant': 'additions' | 'removals' | 'text' | 'all' | 'additions text'
  'sort': 'ascending' | 'descending' | 'none' | 'other'
  'roles': 'alert' | 'alertdialog' | 'button' | 'checkbox' | 'dialog' | 'gridcell' | 'link' | 'log' | 'marquee' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'progressbar' | 'radio' | 'scrollbar' | 'searchbox' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'tabpanel' | 'textbox' | 'timer' | 'tooltip' | 'treeitem' | 'combobox' | 'grid' | 'listbox' | 'menu' | 'menubar' | 'radiogroup' | 'tablist' | 'tree' | 'treegrid' | 'application' | 'article' | 'cell' | 'columnheader' | 'definition' | 'directory' | 'document' | 'feed' | 'figure' | 'group' | 'heading' | 'img' | 'list' | 'listitem' | 'math' | 'none' | 'note' | 'presentation' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'separator' | 'table' | 'term' | 'text' | 'toolbar' | 'banner' | 'complementary' | 'contentinfo' | 'form' | 'main' | 'navigation' | 'region' | 'search' | 'doc-abstract' | 'doc-acknowledgments' | 'doc-afterword' | 'doc-appendix' | 'doc-backlink' | 'doc-biblioentry' | 'doc-bibliography' | 'doc-biblioref' | 'doc-chapter' | 'doc-colophon' | 'doc-conclusion' | 'doc-cover' | 'doc-credit' | 'doc-credits' | 'doc-dedication' | 'doc-endnote' | 'doc-endnotes' | 'doc-epigraph' | 'doc-epilogue' | 'doc-errata' | 'doc-example' | 'doc-footnote' | 'doc-foreword' | 'doc-glossary' | 'doc-glossref' | 'doc-index' | 'doc-introduction' | 'doc-noteref' | 'doc-notice' | 'doc-pagebreak' | 'doc-pagelist' | 'doc-part' | 'doc-preface' | 'doc-prologue' | 'doc-pullquote' | 'doc-qna' | 'doc-subtitle' | 'doc-tip' | 'doc-toc'
  'metanames': 'application-name' | 'author' | 'description' | 'format-detection' | 'generator' | 'keywords' | 'publisher' | 'referrer' | 'robots' | 'theme-color' | 'viewport'
  'haspopup': false | true | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  'decoding': 'sync' | 'async' | 'auto'
  'loading': 'eager' | 'lazy'
  'referrerpolicy': 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}
