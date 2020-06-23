getThirdCardData();

function getThirdCardData() {
  var thirdBoxPath = apiConstant + "Stundenanfragen.json";

  var thirdCardRequest = new Request(thirdBoxPath);

  fetch(thirdCardRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    parseThirdCardData(data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

function parseThirdCardData(data) {
  var thirdBoxUL = document.getElementById("thirdBox");
  for (var i = 0; i < data.length; i++) {

    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.style.borderBottomColor = "blue";
    li.innerHTML = '<span style="color:blue">' + data[i].name1 + '</span> mochte mit <span style="color:green">' + data[i].name2 + '</span> um <span>' + data[i].time + '</span> eine <span style="color:blue">' + data[i].tripType + '</span>';

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