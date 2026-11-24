**Color Scheme Generator**

A lightweight web application that allows users to generate professional color schemes based on a seed color and a selected mode. This tool leverages The Color API to fetch and display various color combinations.


**Features**

Interactive Color Picker: Select any seed color using the native browser color input.
Multiple Scheme Modes: Choose from several color theory modes:

*Monochrome*

*Monochrome-dark*

*Monochrome-light*

*Analogic*

*Complement*

*Analogic-complement*

*Triad*

*Visual Preview*: View five generated colors in large, vertical panels.

*Hex Code Display*: View the clean hex codes for each generated color.


**Technologies Used**

*HTML5*: Semantic structure and form elements.

*CSS3*: Flexbox/Grid layouts and custom styling (Roboto font integration).

*JavaScript (ES6+)*:
Fetch API for asynchronous data retrieval.
FormData for efficient form handling.
Dynamic DOM manipulation to update styles and text.
The Color API: External REST API used for color calculations.


**How to Use**

Open index.html in your browser.
Select a starting color using the color input on the left.
Choose a color scheme mode from the dropdown menu.
Click "Get Color Scheme" to fetch and display the results.


**Project Structure**

*index.html*: The main entry point and UI structure.

*index.css*: Styles for the layout, inputs, and color containers.

*index.js*: Handles form submission, API requests, and UI rendering.
