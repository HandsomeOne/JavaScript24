#[JavaScript24](https://handsomeone.github.io/JavaScript24/)

A minimal arithmetical game with JavaScript syntax.

If embedded in another page, use the following code to sync `iframe`'s height.

```javascript
onmessage = function (e) {
  if (e.origin.split('//')[1] === 'handsomeone.github.io') {
    document.querySelector('iframe').height = e.data.height
  }
}
```
