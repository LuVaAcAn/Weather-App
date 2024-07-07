
# 🌦️ Weather App

A simple weather application that allows users to search for the current weather in any city using the OpenWeatherMap API. It includes animations for temperature, humidity, wind speed values, and the weather icon.

## 📄 Project Structure

The project is divided into three main parts: HTML, CSS, and JavaScript.

### HTML

The HTML defines the structure of the application. Here are the main components:

-   **Main Container**: A `div` with the class `container` that wraps all elements.
-   **Subcontainer**: A `div` with the class `subcontainer` that contains the presentation, the weather card, and error messages.
-   **Presentation**: A `div` with the class `presentation` that includes a title for the app.
-   **Weather Card**: A `div` with the class `card` that contains:
    -   **Search Bar**: An input text field to enter the city name and a button to initiate the search.
    -   **Error Message**: A `div` that shows an error message if the city name is invalid.
    -   **Weather Section**: A `div` with the class `weather` that displays the weather icon, temperature, city name, and weather details such as humidity and wind speed.

### CSS

The CSS defines the style and animations of the application. Here are the highlights:

-   **General Style**: Uses the "Poppins" font, a dark background, and vibrant colors for the weather card.
-   **Animations**:
    -   The temperature, humidity, and wind speed values have a scaling animation when updated.
    -   The weather icon has a transition animation for position and opacity and continuous slight movement.
-   **Transitions**: Smoothes transitions between states using CSS properties like `transform`, `opacity`, and `transition`.

### JavaScript

The JavaScript handles the app's logic, including weather search and animations. Here are the main functions:

-   **API Fetch**: A `checkWeather` function that makes a request to the OpenWeatherMap API to get the weather data for a specific city.
-   **Value Updates**: An `animateNumber` function that updates the temperature, humidity, and wind speed values with a rapid countdown animation.
-   **Icon Animation**: An `animateIcon` function that handles the transition animation for the weather icon.
-   **Error Handling**: Displays an error message if the city name is invalid.
-   **Search Events**: Adds an event listener to the search button to start the weather request when clicked.

## 📂 File Structure

The project has the following file structure:
weather-app/
│
├── images/
│   ├── search.png
│   ├── rain.png
│   ├── humidity.png
│   ├── wind.png
│   └── (other weather icons)
│
├── index.html
├── style.css
└── script.js`

### Images

The `images` folder contains all the icons needed to represent different weather states and the search icon.

### HTML

The `index.html` file defines the structure of the user interface.

### CSS

The `style.css` file contains all the styles and animation rules for the application.

### JavaScript

The `script.js` file handles the app's logic and animations.

## 🚀 Features

-   **Search Weather by City**: Allows users to enter a city name and get the current weather.
-   **Smooth Animations**: Smooth transitions enhance user experience, making the app feel more responsive and dynamic.
-   **Error Handling**: Displays an error message if the city name is invalid.

## 🛠️ Technologies Used

-   **HTML**: For the structure of the application.
-   **CSS**: For styling and animations.
-   **JavaScript**: For the application logic and interactions with the API.

## 🌐 API Used

-   **OpenWeatherMap**: Uses the OpenWeatherMap API to fetch weather data. An API key is required to make requests. (You may need to get your own API key from [[Current weather and forecast - OpenWeatherMap](https://openweathermap.org/)](https://openweathermap.org/) to make it work with your own stuff.

## 🖼 Pictures
![wap](https://github.com/LuVaAcAn/Weather-App/assets/107821071/5c758f7e-270d-4daf-ba0a-8f0e1e50d665)
![image](https://github.com/LuVaAcAn/Weather-App/assets/107821071/d247c1a0-7c6c-4783-bac4-16d74189da34)
![image](https://github.com/LuVaAcAn/Weather-App/assets/107821071/4b0fa202-681b-4438-aa8a-f770b47d5ecd)


