
// Asynchronous function to fetch data
async function fetchData() {

    // Query the currently active tab in the Chrome browser
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

    // Construct the URL for fetching data by appending the tab's URL to the CondenseAI API endpoint
    var currentUrl = "https://condenseai.com.ng/pro?articleURL=" + tabs[0].url;

    var currentUrl = String(currentUrl)

    // Send a GET request to the CondenseAI API endpoint using the fetch() function
    const res = await fetch (currentUrl);

    // Parse the response body as JSON
    const record = await res.json();
    // console.log(record);

    // Update the HTML elements with their respective IDs with the content from the API Call.
    document.getElementById("Title").innerHTML= record.Title ;
    document.getElementById("summary").innerHTML= record.Summary ;
}

// Call the fetchData function to initiate the data fetching and updating process
fetchData();

