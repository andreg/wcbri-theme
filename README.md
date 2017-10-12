# Stylesheet for WordCamp Bari 2018.

Based upon the TwentySeventeen WordPress theme, the WordCamp Bari 2018 website uses this stylesheet to further extend it to suit the WordCamp brand and experience.

People who contributed to this project:
@andg, @antotrifiroconaccento, @thomasvitale, @valeria-ruggiero and the amazing WordCamp Bari 2018 organizers team.

## Installation

The project is compiled with Sass. To install the required libraries, run the `sudo npm install` command from the command line (you'll only need to do this once):

After the installation is over, run `gulp` to trigger a project full compilation, and live-listen for changes on files.

## Structure

This is the file structure adopted for the project.

Output files are compiled and created in the `dist` folder. The `style.css` file is used for debugging/monitoring purposes only, while the `style.min.css` file is the one that has to be imported in the WordCamp website as external stylesheet.

### `scss/inc` folder

* `_config.scss`: stylesheet configuration,
* `_inc.scss`: local libraries,
* `_mixins.scss`: globally-awailable mixins.

### `scss/inc` folder

* `style.scss`: Stylesheet for WordCamp Bari 2018. Individual sub-files that are entitled to style different separate portions of the layout (called "modules") have to be imported manually in this file,
* `_module.scss`: example file for a module.
