# welcome to

![Kate Site](jekyll/images/site_title_flaming.gif)


# TOC

* [Overview](#Overview)
* [Use](#Use)
	* [Commands](#Commands)
	* [Basic Config](#Basic_Configuration)
	* [About](#About)
	* [Research](#Research)
	* [People](#People)
	* [Gallery](#Gallery)
	* [News](#News)
* [Setup](#Setup)
* [Deployment](#Deployment)
* [Hackin](#Hack_yr_own_site_why_dont_ya)


# Overview

This site is built with **jekyll** and **webpack** and uses **npm** to manage packages and run/build scripts.

* **Jekyll** (https://jekyllrb.com/docs/) compiles the [sass](https://sass-lang.com/) to css, and markdown to html (in `/jekyll`) using liquid templates.
* **Webpack** (https://webpack.js.org/) packages and minifies the site and handles the development server. (see `/config`)
* **npm** (https://www.npmjs.com/) installs necessary packages and houses the scripts used to build, serve, and deploy the site (see `package.json`, particularly `"scripts"`)

The site is built into `/_site` when using the dev server or building locally, and the site is deployed via github pages from the `/docs` folder.

# Use

Daily use, the switches n knobs i made for ya to turn :)

## Commands

After [Installation](#Setup), from the repository root:

* `npm run start` - Start the development server (at `http://localhost:8080/` by default), continually build the site, watching the source directories for changes.
* `npm run build` - Build a deployable and minified site into `_site`
* `npm run deploy` - Build a deployable and minified site, copies it into `/docs`, creates a git commit with the `/docs` folder stages, and pushes to github -- updating the served page.
* `npm run install:R` - Install R dependencies for building `.Rmd` files (if ya upgrade or smth)

## Basic Configuration

* Most global site configuration options are in the jekyll configuration file: `_config.yml`
	* Metadata: the `title`, `email`, etc. fields are used in site elements as well as metadata used by search engines. The description and email appear in the nav menu, so be sure to change them!
	* Social: any defined usernames (like `github_username`) will be included in the site navigation menu
	* [Scholar](https://github.com/inukshuk/jekyll-scholar): Options for building the research page from a BibTeX `.bib` file. Set the `source` and `bibliography` options to locate the directory and `.bib` file, respectively. Detail pages for each citation are generated using the `details_layout` and stored in `details_dir`.
* Site stylesheets that control appearance are located in `jekyll/_scss` and most parameters are defined in `_default.scss`
* Build scripts can be tweaked in the `scripts` dictionary in `package.json` 

## About

`/jekyll/about.markdown`

Declare each section in the about page in the yaml header `sections` array. The `body` can include markdown! I recommend using a set of visually related symbols for the images, but ofc do whatever you'd like :). Any text outside of the yaml header will be rendered above the sections.

```yaml
sections:
  - title: Section 1
    image: /assets/images/glyph/placeholder_1.svg
    body: some body text for section 1!!!
  - title: Section 2
    image: /assets/images/glyph/placeholder_2.svg
    body: some body text for section 2!!!
```

## Research

`/jekyll/research.markdown`

Include your research from a `.bib` file! Bibliography generation uses [jekyll scholar](https://github.com/inukshuk/jekyll-scholar) and is configured in the `scholar` dictionary in `_config.yml` . Text in the body of `research.markdown` will be rendered above the bibliography. For each bibliography entry, a sub-page will be generated with the full citation entry (default in `/cites/`) that loads as an iframe in the page when the details button is clicked -- make sure you have a `url` or `doi` field in the citation!  Any pdfs in `/jekyll/_papers/` that have the same as a citation key in the `.bib` file will be uploaded & linked from the site, eg. `/jekyll/_papers/authorPaperTitle2020.pdf` for 

```BibTeX
@article{authorPaperTitle2020,
  title = {Paper Title},
  author = {Author},
  year = {2020}
}
```

### Bibliography Configuration

Aside from the options in `_config.yml:scholar`, you can change...

* Citation style: `/jekyll/_layouts/apa_web.csl` -- see https://github.com/citation-style-language/styles or https://www.zotero.org/styles
* Layout for overlaid details page: `/jekyll/_layouts/citationdetail.html` 
* Layout for entry in main bibliography: `/jekyll/_layouts/citation.html`

## People

`/jekyll/people.markdown`

Similar to [About](#About), for each person add an entry in the `people` array in the yaml header. Image filenames are relative to the `/jekyll/images/people` directory.

```yaml
people:
  - name: Person 1
    image: person_1.jpg
    email: fake-email@domain.com
    body: Description of person!!!
  - name: Person 1
    image: person_1.jpg
    email: fake-email@domain.com
    body: Description of person!!!
```

The portrait fading effect is implemented like:

* `/config/webpack.common.js` - the `image-trace-loader` generates outline svgs when the site is built, and is configured with the `options` field
* `/_src/portrait_trace_loader.js` - dynamically add generated images to page at build and configure scroll effect


## Gallery



## News




## Locations reference

where do i put this....
* **General Images** : `/jekyll/images/` (use `/assets/images/...` in links)
* **Portait Images** : `/jekyll/images/people/` (for People page)
* **R Markdown Documents**: `/jekyll/_rmd/`



# Setup

Configure local build, install packages.



# Deployment

Build the site and upload it!

# Hack yr own site why dont ya

Getting a little deeper to customize the site

## webpack

## javascript

## jekyll

- Gemfile
- config.yaml

### sass

### includes

### layouts







------------


## Components

### Jekyll

jekyll structures the pages, handles the liquid tag conversion, templating, etc. 

### Webpack

webpack does tree-shaking js transpiling

## Files

* Gemfile - lists *logical* ruby package dependencies
* Gemfile.lock - lists *actual* ruby versions used to build the page
ls
* \_config.yml - Jekyll configuration

## Folders

* config - webpack configurations
* pages - jekyll folder w/ posts/pages etc.
* src - webpack sources

## Citations & References

* Generate a .bib file and put it in _bibliography
* if there is a .pdf that matches the bibtex key, it will be linked to

# Installation

* (write up npm installation)
* have to manually install blogdown, or use npm run install:R

# Build & Deploy

