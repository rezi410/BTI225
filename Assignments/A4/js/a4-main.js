var filterType="";
var filterAgeMin=0;
var filterAgeMax=Number.MAX_VALUE;

window.onload = loadTableWithFilters;

function loadTableWithFilters() {
    var parent=document.getElementById("main-table-body");
    parent.innerHTML="";

    for(var i=0; i<petData.length; i++){
        if((filterType=="" || filterType==petData[i].type) && (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)){
            var row=createRow(petData[i]);
            parent.appendChild(row);
        }
    }
}


function createRow(pet){
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    var img=document.createElement("img");

    var td2=document.createElement("td");
    var h4=document.createElement("h4");
    var p=document.createElement("p");
    var span=document.createElement("span");

    img.src=pet.image.src;
    img.alt=pet.image.alt;
    img.width=pet.image.width;
    img.height=pet.image.height;
    td1.appendChild(img);

    h4.innerHTML = pet.name;
    p.innerHTML = pet.description;
    span.innerHTML = pet.age;

    td2.appendChild(h4);
    td2.appendChild(p);
    td2.appendChild(span);

    tr.appendChild(td1);
    tr.appendChild(td2);

    return tr;
}


function filterReset(){
    filterType="";
    filterAgeMin=0;
    filterAgeMax=Number.MAX_VALUE;
}

function filter(type, min, max){
    if(type){
        filterType=type;
    }
    if(min){
        filterAgeMin=min;
    }
    if(max){
        filterAgeMax=max;
    }

    loadTableWithFilters();
}

