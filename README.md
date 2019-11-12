Quick and easy div grid with adjustable column count and gutter sizes. 
Grid will automatically fill available width.

![Alt text](ts-react-grid_preview.png?raw=true "Preview")

```
npm i ts-react-grid -s
```

Import and use the grid:

```ts
import { Grid } from "ts-react-grid";
```



```html
<Grid columnCount={3} gutterWidth={5} gutterHeight={5} >
    <div style={{ background: "#58D08F", padding: 5 }}>box1</div>
    <div style={{ background: "#58D0D9", padding: 5 }}>box2</div>
    <div style={{ border: "1px solid red" }}>box3</div>
    <div style={{ border: "1px solid blue" }}>box4</div>
    <div style={{ border: "1px solid green" }}>box5</div>
</Grid>

```

## Documentation


We do not handle responsive width for you, but you can easily toggle columnCount based on `window.innerWidth` yourself.

`columnCount` (not optional) This is the amount of columns you want in your grid.

`gutterWidth` (optional) px gutter width between columns (default: 10)

`gutterHeight` (optional) px gutter height between rows (default: 10)


## Changelog:

```
v1.0.3 fix props for gutterWidth and gutterHeight
v1.0.2 release. update README.md/gitignore
v1.0.1 update README.md
v1.0.0 initial npm publish
```

## Notes

NPM link: https://www.npmjs.com/package/ts-react-grid   
GITHUB link: https://github.com/rvdende/ts-react-grid