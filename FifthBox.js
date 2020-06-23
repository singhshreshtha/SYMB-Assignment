getFifthCardData();

function getFifthCardData() {
  var fifthBoxPath = apiConstant + "Kalender.json";

  var fifthCardRequest = new Request(fifthBoxPath);

  fetch(fifthCardRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    parseFifthCardData(data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

function parseFifthCardData(data) {
  var thirdBoxUL = document.getElementById("fifthBox");
  for (var i = 0; i < data.length; i++) {

    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.style.borderBottomColor = "blue";
    li.innerHTML = '<span style="color:blue">' + data[i].name1 + '</span> hat eine <span style="color:blue">' + data[i].tripType + '</span> mit <span style="color:green">' + data[i].name2 + '</span> um <span>' + data[i].time + '</span>';

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");

    var small = document.createElement("small");
    small.setAttribute("class", "text-muted");
    small.innerHTML = 'Time: 11.45 a.m.';
    p.appendChild(small);
    li.appendChild(p);

    thirdBoxUL.appendChild(li);
  }
}