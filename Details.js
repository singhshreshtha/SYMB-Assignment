
getDetailsData();

function getDetailsData() {
  var detailsPath = apiConstant + "Details.json";

  let detailsRequest = new Request(detailsPath);
  fetch(detailsRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    parseDetailsData(data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

function parseDetailsData(data) {
  var detailsTitle = document.getElementById("detailsTitle");
  var detailsDescription = document.getElementById("detailsDescription");

  var location = document.getElementById("location");
  var phone = document.getElementById("phone");
  var owner = document.getElementById("owner");
  var email = document.getElementById("email");
  var website = document.getElementById("website");

  detailsTitle.innerHTML = data.name;
  detailsDescription.innerHTML = data.description;

  location.innerHTML = data.location;
  phone.innerHTML = data.phone;
  owner.innerHTML = data.owner;
  email.innerHTML = data.email;
  website.innerHTML = data.website;
}