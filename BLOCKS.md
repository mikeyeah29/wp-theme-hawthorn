# Hawthorn blocks

Custom blocks for this child theme live in `src/blocks`. WordPress loads their
compiled versions from `build/blocks`.

## First-time setup

Use Node.js 20.19 or newer. The machine's older system Node will not run the
current WordPress build tools, so switch versions with your usual Node version
manager first if needed.

From `wp-content/themes/hawthorn`, run:

```sh
npm install
npm run start
```

`npm run start` watches the source files and rebuilds them as you work. Use
`npm run build` for an optimized production build.

## Add a block

1. Copy `src/blocks/starter` to a new folder.
2. Change the `name`, `title`, and `description` in its `block.json`. Block
   names must be unique and should keep the `hawthorn/` namespace.
3. Update `index.js`, `edit.js`, `save.js`, and the two SCSS files.
4. Run `npm run build` (or leave `npm run start` running).

The generated `build/blocks-manifest.php` lets `functions.php` discover and
register every compiled block automatically. Commit the `build` directory when
deploying the theme, because production does not need Node or npm.

## Coaching Pathways

`hawthorn/coaching-pathways` uses a locked parent template to keep the two
upper panels, connector, and centred lower panel in place. Each panel has its
own unlocked InnerBlocks area, so editors can add, remove, or replace content
blocks inside that panel. Existing attribute-based Coaching Pathways blocks
are migrated automatically when the post is opened and saved in the editor.
