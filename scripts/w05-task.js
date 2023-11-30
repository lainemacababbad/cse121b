/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create an HTML <article> element (createElement).
        const article = document.createElement("article");

        // Create an HTML <h3> element and add the temple's templeName property to this new element.
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        // Create an HTML <img> element and add the temple's imageUrl property to the src attribute and
        // the temple's location property to the alt attribute.
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        article.appendChild(h3);
        article.appendChild(img);

        // Append the <article> element to the global templesElement variable declared in Step 2.
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
    // Declare a const variable named response that awaits the built-in fetch method calling the temple data.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    // Convert the fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable.
    const templeData = await response.json();
    templeList.push(...templeData);

    // Calls the displayTemples function and passes it the list of temples (templeList).
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    // Clear all <article> elements from the templesElement
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
    // Call the reset function to clear the output.
    reset();

    // Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
    const filter = document.getElementById("sortBy").value;

    // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        // Filter for temples where the location contains "Utah" as a string.
        case "utah":
            const utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;

        // Filter for temples where the location does not contain "Utah" as a string.
        case "notutah":
            const notUtahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(notUtahTemples);
            break;

        // Filter for temples where the dedicated date is before 1950.
        case "older":
            const olderTemples = temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        // No filter. Just use temples as the argument.
        case "all":
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
});

// Test your code by calling the getTemples function
getTemples();
