getfourthCardData();

function getfourthCardData() {
  var fourthBoxPath = apiConstant + "Schuleranfragen.json";
  let fourthCardRequest = new Request(fourthBoxPath);
  fetch(fourthCardRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    parseFourthCardData(data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

function parseFourthCardData(data) {
  var fourthBoxUL = document.getElementById("fourthBox");
  for (var i = 0; i < data.length; i++) {

    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.style.borderBottomColor = "blue";
    li.innerHTML = '<span style="color:blue">' + data[i].studentName + '</span> mochte <span style="color:green">' + data[i].classType + '</span> absolvieren';

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");

    var small = document.createElement("small");
    small.setAttribute("class", "text-muted");
    small.innerHTML = 'Time: 11.45 a.m.';
    p.appendChild(small);
    li.appendChild(p);

    fourthBoxUL.appendChild(li);
  }
}