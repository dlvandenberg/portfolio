---
title: Lorem ipsum
description: 'Vivamus sem nisi, placerat ac porttitor non, convallis eget enim. Donec sagittis tristique neque eget convallis. Proin ultrices ut justo at molestie.'
dateAdded: 2023-02-01T17:00
tags:
  - Angular
  - TypeScript
---

# Header 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Header 2

Sed sed lectus id lectus iaculis hendrerit eu non turpis.

### Header 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

#### Header 4

Ut volutpat nulla sed sapien aliquet varius.

##### Header 5

Nullam placerat mattis suscipit.

###### Header 6

Nulla consequat scelerisque volutpat.

# Emphasis

## Italics

Ut rhoncus, _eros nec auctor cursus_, neque diam cursus eros, _eu suscipit lectus libero ut risus._

## Bold

Sed id maximus tellus, **vitae eleifend eros**. Nulla facilisi. **Ut tempus augue nulla**.

## Strikethrough

Integer ~~sollicitudin~~ pulvinar purus et pulvinar.

# Lists

## Ordered

1. First ordered
1. Another

- Unordered sub list

3. Item three

- Ordered sub-list

4. Last item

   Etiam arcu massa, ultrices in auctor eu, ullamcorper a risus. Curabitur dolor nisl, scelerisque ut vestibulum quis, pellentesque ut eros.

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

- Unordered with asterisk

* Unordered with minus

- Unordered with plus

# Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

# Images

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

# Code blocks

## Inline code

Inline `code` has `back-ticks` around it.

### Blocks

Blocks of code have three backticks ` ``` ` around it.

```javascript
var s = 'Javascript syntax highlighting';
alert(s);
```

```python
s = 'Python syntax'
print s
```

```typescript
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DestroyObservable extends Observable<void> implements OnDestroy {
	private readonly life$ = new Subject<void>();

	constructor() {
		super((subscriber) => this.life$.subscribe(subscriber));
	}

	public ngOnDestroy(): void {
		this.life$.next();
		this.life$.complete();
	}
}
```

```typescript
export type RequiredKeys<T extends { [key: string]: unknown }> = { [P in keyof T]: boolean };

export const isObject = <T extends { [key: string]: unknown }>(
	keys: RequiredKeys<T>,
	value: unknown,
): value is T => {
	return (
		!!value &&
		typeof value === 'object' &&
		Object.entries(keys)
			.filter(([, required]) => required)
			.every(([key]) => key in value)
	);
};
```

# Tables

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

# Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

# Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

# Horizontal rule

Three or more...

---

Hyphens

---

Asterisks

---

Underscores
