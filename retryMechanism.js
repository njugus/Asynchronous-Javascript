//Create an asynchronous function that might fail (e.g., based on a random condition) and implement a retry mechanism.
// The function should retry the failed operation a fixed number of times before throwing an error.

async function retryFunction(url, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Fetching data...`);
            // Fetch data from the URL
            const response = await fetch(url);
            // If response is ok, parse the data
            if (response.ok) {
                const data = await response.json();

                // Handle/display specific details of the data
                console.log("Fetched data:", data.drinks);  // Example: assuming "drinks" is the key in the response

                return data;  // Return the data after success
            } else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        } catch (err) {
            // Log error for the current attempt
            console.log(`Attempt ${attempt} failed: ${err.message}`);

            // If all retries are exhausted
            if (attempt === retries) {
                console.log("You ran out of retries.");
                throw new Error("Failed after all retry attempts");  // Propagate the error
            }
        }
    }
}

// Run the function with retries
retryFunction(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    3
)
    .then(data => console.log("Final data received:", data))
    .catch(error => console.error("Final error after retries:", error.message));
