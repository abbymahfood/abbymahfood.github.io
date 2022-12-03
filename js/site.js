const URL = "https://abbym.sgedu.site";
const JSON_URL = "https://abbym.sgedu.site/public_html/degrees.json";

async function getData(url = ''){
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

/** Runs the program */
function runProgram() {
    console.log("here");
    console.log(getData(JSON_URL));
};