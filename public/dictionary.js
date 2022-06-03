//dictionary API input

//link to dictionary app 
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

//Button event listener for user input
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
    //retreiving input
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //It is not best practice to use inner HTML however it was the easiest method for this application
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            //using inner html for the simple error message
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});


