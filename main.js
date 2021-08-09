const url = "https://randomuser.me/api?results=" + Math.floor((Math.random() * 50));

fetch(url)
    .then(function(output) {
        console.log(output)
        return output.json();
    })
    .then(function(myJson) {
        console.log("JSON: ", myJson);
        data = myJson
    })

for (let i = 0; i < data.results.length; i++) {
        let lastName = myJson.results[i].name.last;
        let firstName =  myJson.results[i].name.first;
        let gender =  myJson.results[i].gender;
        const p = document.createElement("p")
        const p2 = document.createElement("p")
        p.innerHTML = firstName + " " + lastName
        p2.innerHTML = gender
        document.body.appendChild(p);
        document.body.appendChild(p2);
}