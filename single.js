async function getCountry() {
    const URL = await fetch("https://restcountries.com/v2/all");
    const respond = await URL.json();
    console.log(respond);
    respond.forEach(element => {
        showCountry(element)
    });
}
getCountry()

