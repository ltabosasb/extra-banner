# extra-banner
Repository created for the challenge nº3


## Prerequisites
- Node.js (includes npm)
- Visual Studio Code
- Live Server extension for Visual Studio Code

## Setup
Installing Visual Studio Code
Download and install Visual Studio Code from the official website.

### Installing Live Server
- Open Visual Studio Code.
- Go to Extensions (sidebar on the left, or use the shortcut Ctrl+Shift+X).
- Search for "Live Server" and install it.
### Using Live Server
- Open your project folder in Visual Studio Code.
- Find index.html in the Explorer pane.
- Right-click on index.html and select "Open with Live Server."
- This will launch your project in your default browser and auto-refresh it whenever you make - - changes to the files.

## Installing Sass
Open a terminal or command prompt.
Run the following command to install Sass globally:
    npm install -g sass

## Compiling SCSS to CSS
- Navigate to your project directory in the terminal (integrated in VSCode or your prefered one).
- Run the following command to compile your SCSS file into the CSS file in a static folder:
    sass source/scss:static/css

Replace source/scss with the path to your SCSS file and static/css with the target path where you want the compiled CSS file to be placed.
    e.g.: sass style.scss static/style.css (you can copy this line and paste in your terminal)

## Watching for Changes
To automatically compile your SCSS file whenever it changes, run the following command:
    sass --watch style.scss static/style.css

with this setup, you will be able to see the Banner component in the browser and also change its properties in the style.scss file, it will automatically compile to .css and you should see the changes right away on the screen

# You can use the developer tools in the browser to test the responsiveness of the component
 - for Edge, Chrome and Firefox:
    - on the top right corner of the main window, there is a 'three dots' icon, you can press it, then go to 'More tools' -> developer tools (ctrl + shift + i)

    - for firefox is a 'three bars' icon, but also in the top right corner

- it will open a tab on the right side of the browser, it should already be set for responsive
    - if it is not, there is a button, above the tab that opened that toggles the device toolbar
    when it is on, you will see a draggable bar on the right side of the browser's content screen
    - above the content screen, you should also see a bar with the screen dimension, and clickable screensizes presets
