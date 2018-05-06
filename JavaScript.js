
let apiKey = "993d7f18";
let myFunction=()=> {
    
    let name = document.getElementById('Name').value;
    let year = document.getElementById('Year').value;
    let id = document.getElementById('Id').value;
    let apiUrl = 'https://www.omdbapi.com/?';

    if ($.trim(name).length > 0) {
        apiUrl = apiUrl+'t=' + name + '&';
    }
    if ($.trim(year).length > 0) {
        apiUrl = apiUrl + 'y=' + year + '&';
    }
    if ($.trim(id).length > 0) {
        apiUrl = 'https://www.omdbapi.com/?' + 'i=' + id + '&';
    }
    getMovieDetails(apiUrl);
}
let resetData = () => {
    document.getElementById('Name').value = null;
    document.getElementById('Year').value = null;
    document.getElementById('Id').value = null;
    document.getElementById("title").innerHTML = "";
    $("#movieposter").attr("src", "");
}

let getMovieDetails = (apiUrl) => {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: apiUrl + 'apikey=' + apiKey,
        success: (response) => {
            if ($.trim(response.Title).length > 0) {
                document.getElementById("title").innerHTML = '<b>' + response.Title + '</b>';
            }
            else {
                document.getElementById("title").innerHTML = 'No data found';
            }
            if ($.trim(response.Poster).length > 0) {
                $("#movieposter").attr("src", response.Poster);
            }
            else if ($.trim(response.Poster).length = 0){
                $("#movieposter").attr("src", 'image.jpg')
            }
           }, error: (err) => {
            console.log(err);
            alert("Not able to get the Data");
        }
    });

}