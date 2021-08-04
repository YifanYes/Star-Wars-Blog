# Starwars Blog Reading List
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/img/how-to.png?raw=true" /></a>
</p>

The force is strong with this exercise...
We are going to be building a minimalist version of the Star Wars Databank with a "Read Later" or "Favorites" list functionality.

📝 **Instructions**
- Use Bootstrap components, you need almost no custom CSS.
- Take some time to understand the SWAPI.tech API, this will be our source of information, we will be consuming this API.
- Fetch the SWAPI people, vehicles and planets, and display them on your application.
- Declare a favorites array in your central store and allow the user to add or remove favorites.
- Building the grid of Characters and Planets
- Create a React webapp that lists the peope, vehicles and planets entities provided by the SWAPI.
Note: Please use https://www.swapi.tech/ instead of https://www.swapi.dev/ because the second one is causing problems.

**Building a "Details" view for Character or Planet**
Each entity should have a short description (Bootstrap Card) and a "Details" view (Bootstrap components):
- Important: The SWAPI doesn't provide the images, you can use placeholders or avoid the images altogether. The focus of this exercise is to practice fetch, router and context; you can focus on the color theme and simple layout to make it look good.

- Important 2: Don't worry if the data you get from the SWAPI doesn't match the data you see in starwars.com.

Use all the information provided by the SWAPI (check the docs and/or the json responses).

**Read Later or Favorites functionality**
Implement a "Read Later" functionality, i.e, a button that allows the user to "save" the item (character, vehicle or planet) into a special list. This list will be shown at the bottom of the home page, it resembles the main list but only shows the "saved" elements.

**Use the Context**
To ensure that the user can "save" the item, you must implement an action that can be accessible from anywhere within the app.