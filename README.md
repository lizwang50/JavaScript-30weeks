# JavaScript-30weeks
命運乖舛的 Repo Q

## 上傳路徑
`dist/JS30-files/人名/天數`
## Rules 
1. 參與請開 Branch (沒有命名規則，你開心就好)
2. PR 請自己 Merge 
3. 有問題就先自己想辦法，想破頭想不出來請推上來之後，去賴群組發問
4. 暫時還沒想到第四條

## ルール
1. このチャレンジを参加したい方は自分でブランチを作成してください。（ブランチの名前を自分好きにしてください。）
2. PR は自分でマージしてください。
3. 問題があったら、自分で先に解決方法を探してください。どうしても分からなかったら、ライングループに問題を提出してください。
4. 四つ目暫く思いつかない



# gulp-start
<img src="https://codexysoft.com/img/cover-gulp-start.jpg" alt="" width="700">

> Gulp 4 boilerplate for CSS/HTML/JavaScript development by <a href="http://codexysoft.com" target="_blank">Codexy Software</a> team.

## What is included
- Bootstrap 4 components
- Bourbon for SASS
- PUG
- Assets minification
- Sourcemaps
- PostCSS plugins
- SVG sprites tasks
- Images optimization
- Fonts conversion(from ttf to woff2, woff etc.)
- Copy assets into your `dist` directory
- Watch for all files changes and automatically recompile build using BrowserSync

## Start Guide

You should install:

- [Node.js](http://nodejs.org)
- Gulp CLI `npm install gulp-cli -g`

After:
1. Run `npm install`
2. When it's done installing, run `gulp`

## Documentation

### Structure

`/src/` - here your source code.

`/dist/` - here compiled code. Do not edit this folder.

### Tasks

`gulp` - default task

`gulp clean` - clean task for dist folder

`gulp convertFonts` - task for fonts conversion


### SASS

Sass files are located in the `src/assets/stylesheets/` directory.

We use BEM methodology and structure the files into the blocks `src/assets/stylesheets/blocks/`.

All blocks and other styles should be imported in the `src/assets/stylesheets/style.sass` manifest file.

It will be compiled in the `dist/css/style.css` directory.

`node_modules` path is included for importing vendor files.

### PUG

Pug files are located in the `src/views/` directory.

New pages should be here `src/views/pages/`.

Partials, like footer or header should be here `src/views/partials/`.

Pages will be converted into `dist` directory.

### Javascript

Put your JavaScript files in the `src/assets/js` directory.

All js files should be imported in the manifest file `src/assets/js/scripts.js`.

For importing use `import` statement. For example:

```js
import 'bootstrap/js/dist/dropdown.js';
import "./blocks/block-name.js";
```

`node_modules` path is included for importing vendor files.

### SVG sprites

We use 2 types of svg sprites:
- [SVG Symbols](https://allusis.net/blog/2018/svg-sprites-for-icon-systems)
- [SVG Fragments](https://css-tricks.com/svg-fragment-identifiers-work/)

#### Symbols

1. For symbols sprites put your files in the `src/assets/img/sprites/svg-symbols/` directory.
2. In your pug file use mixin for sprite `+icon('icon-name', 'class-name')`.

#### Fragments

1. For fragments sprites put your files in the `src/assets/img/sprites/svg-fragments/` directory.
2. Use your sprite in the css `background-image: url('../img/svg-fragments.svg#icon-name')`.


### Sourcemaps

We use sourcemaps for Javascript and Sass files. It will be automaticly added to compiled js and css files via `base64`.

If you need to remove sourcemaps for production build, just run `gulp --production`.

### Bootstrap

We use only the necessary components like: reboot, grid, utilities from the source files. For example:

```sass
@import bootstrap/scss/functions
@import bootstrap/scss/variables
@import bootstrap/scss/mixins
@import bootstrap/scss/reboot
@import bootstrap/scss/grid
@import bootstrap/scss/utilities/display
@import bootstrap/scss/utilities/flex
```
If you need some other components, just import them from the source files. [Documentation](https://getbootstrap.com/docs/4.3/getting-started/theming/#importing)

### Bourbon for SASS

[Bourbon](https://www.bourbon.io/) is included in the boilerplate. It's the first-class library of Sass Mixins. For example we use font-face mixin for custom fonts declaration:

```sass
+font-face("#{$general-font}", "../fonts/#{$general-font}", ("woff2", "woff", "ttf"))
  font-style: normal
  font-weight: 400
```

### Fonts conversion

For covertation fonts into the web formats put your `ttf` fonts in the `src/assets/fonts/` directory and then run `gulp convertFonts`. It will be converted into `woff2`, `woff` and `eot` formats in the same directory.

### PostCSS Plugins

Some included plugins:

- [autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-svg](https://www.npmjs.com/package/postcss-svg/v/1.0.6)
- [postcss-assets](https://github.com/borodean/postcss-assets)
- [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes#readme)


### Support

If you have any questions or suggestions, feel free to contact m.lenyk@codexysoft.com
