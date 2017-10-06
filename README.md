# Pooch-Match
A dog adoption app that recommends dogs based on your lifestyle and personal needs.

- form.js takes in the data from the form in the index.html and packages it to be used to query the database for a list of dog breeds.
- server.js takes in the breeds from the form and uses them to send a request to the API and pull down a list of pets available for the breeds using the zip code as a way to define which dogs to display. It also handles the creation of the string used to query the database.
- results.js handles the data being returned from the database using a handlebars template to append structured data to the page.
- quizView.js handles which elements are displayed and hidden when the link for the quiz is selected.
- adoptablePets.js controls what is displayed and hidden when a specific breed is clicked and how to handle a use case of there being no results. It makes use of handlebars template to take data from the API that was stored and append it to the results page.
- routes.js handles the routes selected through page().
- CSS files are named in a convention to point to where they are aimed to manipulate style.
