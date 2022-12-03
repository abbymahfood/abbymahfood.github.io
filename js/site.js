const URL = "https://abbymahfood.github.io";
const JSON_URL = "https://abbymahfood.github.io/degrees.json";
const OK = 200;

/** Fetches a JSON doc from URL and returns JSON object */
async function fetchJson(url = ''){
    return await fetch(url)
    .then((response) => {
        if (response.ok && response.status == OK) {
            return response.json();
        }
        alert(`Fetch Failed: ${response.status}`);
    })
    .then((json) => {
        return json;
    })
}

/** Creates and appends html element */
function createAndAppendDegreeArticle(obj) {
    const htmlMarkup = `
    <article class="degree">
    <h4>${obj.Degree.School}</h4>
    <p class="major">Major: ${obj.Degree.Major}</p>
    <p class="type">Type: ${obj.Degree.Type}</p>
    <p class="graduation">Graduation Year: ${obj.Degree.Graduation}</p>
    </article>
    `;
    document.getElementById("container").innerHTML += htmlMarkup;
}

/** Runs the program */
window.onload = async function(e){ 
    const jsonObject = await fetchJson(JSON_URL);
    jsonObject.Degrees.forEach(createAndAppendDegreeArticle);
}


