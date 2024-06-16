Instructions on how to run the application locally.
=

1.First you need use ""create-react-app" for initialising the weatherapp react folder.------ "create-react-app weatherapp --use-npm"
2.Then we need to install the required dependencies according to our needs by using NPM . These dependencies are   -- "AXIOS" , "moment" .
3.Then we have to write the code for weatherapp  to fetch the details of the required city.
4.After writing the code we have to run the react application by using the command:  "npm start"
5.After running the application the desired output will be generated in the local server port in the browser.








Brief Description of the Approach and Technologies Used:
=
Initial Setup:
The project is initialized using React, a popular JavaScript library for building user interfaces."
The initial state includes location for storing the user input, locationsList for tracking multiple locations, weatherData for storing weather information, and isDarkMode for managing the theme mode.


Form Handling:
A form is provided for the user to input a location (city name or zip code). When the form is submitted, the addLocation function is called.
The addLocation function prevents the default form submission, checks if the location is new, and then fetches weather data for that location using the fetchWeather function.



Fetching Weather Data:
The fetchWeather function uses Axios to make API calls to the OpenWeatherMap API. It constructs the URL using the provided location and API key.
The response data is stored in the weatherData state, keyed by location. This allows for easy retrieval and display of weather data for multiple locations.

Displaying Weather Data:
The WeatherItem component is responsible for displaying the weather data. It rounds the temperature, humidity, and wind speed values for better readability.
Each location's weather data is displayed in a list, with each entry being a WeatherItem component.


Dark/Light Mode Toggle:
A button is provided to toggle between dark mode and light mode. The toggleDarkMode function toggles the isDarkMode state.
The app container's class changes based on the isDarkMode state, applying appropriate CSS styles for dark and light modes.

Styling:
CSS is used to style the application. Separate styles are defined for dark mode and light mode, ensuring a visually appealing and user-friendly interface.
Responsive design principles are applied to ensure the app works well on various devices, including desktops, tablets, and mobiles.







Technologies Used:
=
React:
=
Used to build the user interface with functional components and hooks for state management.

Axios:
=
Used for making HTTP requests to the OpenWeatherMap API to fetch weather data.

OpenWeatherMap API:
=
Provides the weather data based on the user's input location.

CSS:
=
Used for styling the application, including the implementation of dark and light modes.

JavaScript:
=
Core language for implementing the logic and functionality of the application.

Moment.js:
=
Used for formatting dates and times to display current date and time in a user-friendly format.





Any known issues or limitations.
=

1. The main issues are handling the errors .
2. I used the try and catch error handling statements , to handle the generated errors.
3. so the locations are limited to some of the popular cities only.
4. As it is limited to only popular cities . This application cannot generate the weather details of  villages and towns . 
