# ReFlar Inject Mithril Components

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/reflar/inject-mithril-components.svg)](https://packagist.org/packages/reflar/inject-mithril-components)

A [Flarum](http://flarum.org) extension. Inject Mithril components into your pages using native HTML.

### Usage

Using FriendsOfFlarum Pages:

```html
<flarum-component
    data-component="components/DiscussionList"
    :params="{filter:{q:'tag:hidden'},page:{limit:1}}">
</flarum-component>
```

![screenshot](https://i.imgur.com/9q5Qe0d.png)

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require reflar/inject-mithril-components
```

### Updating

```sh
composer update reflar/inject-mithril-components
```

### Links

- [Packagist](https://packagist.org/packages/reflar/inject-mithril-components)
- [GitHub](https://github.com/ReFlar/inject-mithril-components)