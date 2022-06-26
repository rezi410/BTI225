
window.onload = createTable;

function createTable(){
  var parent = document.getElementById("table-rows");
  parent.innerHTML = "";
  for(var i=0; i<countriesData.length; i++){
    var row = createRow(countriesData[i]);
    parent.appendChild(row);
    }
}

function createRow(country){
  var row = document.createElement("tr");
 
  var imgData = document.createElement("img");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");

  imgData.src="";

  var p = document.createElement("p");
  p.innerHTML = country.code;
  td1.appendChild(p);

  var p = document.createElement("p");
  p.innerHTML = country.name.Chinese;
  td2.appendChild(p);

  var p = document.createElement("p");
  p.innerHTML = country.continent;
  td3.appendChild(p);

  var p = document.createElement("p");
  p.innerHTML = country.areaInKm2;
  td4.appendChild(p);

  var p = document.createElement("p");
  p.innerHTML = country.population;
  td5.appendChild(p);

  var p = document.createElement("p");
  p.innerHTML = country.capital;
  td6.appendChild(p);

  row.appendChild(imgData);
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);

  return row;
}

