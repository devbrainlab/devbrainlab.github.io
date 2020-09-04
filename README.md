# welcome to

![Kate Site](jekyll/images/site_title_flaming.gif)


# TOC

* [Overview](#Overview)
* [Use](#Use)
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

## Basic Configuration

* Most global site configuration options are in the jekyll configuration file: `_config.yml`
** Metadata: the `title`, `email`, etc. fields are used in site elements as well as metadata used by search engines. The description and email appear in the nav menu, so be sure to change them!
** Social: any defined usernames (like `github_username`) will be included in the site navigation menu
** [Scholar](https://github.com/inukshuk/jekyll-scholar): Options for building the research page from a BibTeX `.bib` file. Set the `source` and `bibliography` options to locate the directory and `.bib` file, respectively. Detail pages for each citation are generated using the `details_layout` and stored in `details_dir`.
* Site stylesheets that control appearance are located in `jekyll/_scss` and most parameters are defined in `_default.scss`
* Build scripts can be tweaked in the `scripts` dictionary in `package.json` 

## About

`/jekyll/about.markdown`

Declare each section in the about page in the yaml header `sections` array. The `body` can include markdown! I recommend using a set of visually related symbols for the images, but ofc do whatever you'd like :)

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





## Locations reference

where do i put this....
* **Images** : `/jekyll/images/`
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

