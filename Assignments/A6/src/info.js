
function FormCheck() {
    var err="";
    var ret=false;

    Check_age();
    Check_Name();
    Check_Password();
    Check_username();

    document.getElementById("errors").innerHTML = err;

    if (err=="") {
        ret=true;
    }
    return ret;
}



function Check_age() {
    var age=document.getElementById("Age").value;
    if ( (age<18) || (age>60) ) 
    {
        err += "Wrong format, age must be in between 18 and 60."; 
    }
    
}


function Check_Name() {
        var correct_name = /^[a-zA-Z]*$/;
        var name = doucment.getElementById("name");
        
        if (correct_name.test(name) == false) {
            err += "Wrong format, only alphabet allowed."; 
        }
        
}


function Check_Password() {
	var pass1 = document.getElementById("password").value;
	var pass2 = document.getElementById("Confirm_password").value;
	var flag=false;
	var len = pass1.length;
    var leng = pass2.length;
    

	for(var i = 0; i < len && i < leng; i++) {
             
		if ( (pass1[0] >= 'A' && pass1[0] <= 'Z') || (pass1[0] >= 'a' ) && ( pass1[0] <= 'Z') )
        {
			flag = true;			
		}
        if (flag==true && ( pass1[i] >= 'A' || pass1[i] >= 'a' ) && ( pass1[i] <= 'Z' || pass1[i] <= 'z' ) )
        {
			flag = true;			
		}
		if( (flag==true) && (pass1[i] >= '0' && pass1[i] <= '9') )
        {
			flag = true;	
		}     
    }

    var n = pass1.localeCompare(pass2);
        
	if ( (len < 6 || len > 6) || (flag != true) || n != 0 )
    {				
		err += "wrong format, password must be 6 characters long, must start with a character, must have at least 1 digit and 1 uppercase. The password strings must match. <br>";	
	    console.log("wrong passwrod");
    }
    
}


function Check_username(){
	var username = document.getElementById("username").value;
	var flag=false;
	var len = username.length;
    
	for(var i = 0; i < len; i++) {
        
		if ( (username[0] >= 'A' && username[0] <= 'Z') || (username[0] >= 'A' && username[0] <= 'Z') )
        {
			flag = true;			
		}
        if (flag==true && (username[i] >= 'A' || username[i] >= 'a')&& (username[i] <= 'Z' || username[i] <= 'z'))
        {
			flag = true;			
		}
        
    }
        
	if( (len < 6 || len > 6) || (flag != true) )
    {				
         err += "wrong format, username must start with a letter, must have at least 6 characters. ";
	}
    	
}

window.onload = function() {
    loadTableWithFilters();
}





function CreateRow(data) {
    var row = document.createElement("tr");

    var image_data1 = document.createElement("td");
    var img1 = document.createElement("img");
    
    var meta_data1 = document.createElement("td");
    var name1=document.createElement("h4");
    var price1 = document.createElement("span");
    var desc1 = document.createElement("p");

    img1.src=data.image.src;
    img1.alt=data.image.alt;
    img1.width=data.image.width;
    img1.height=data.image.height;
    image_data1.appendChild(img1);

    var name_txt1 = document.createTextNode(data.name);
    name1.appendChild(name_txt1);
    meta_data1.appendChild(name1);

    var price_txt1 = document.createTextNode(data.price);
    price1.appendChild(price_txt1);
    meta_data1.appendChild(price1);

    var desc_txt1 = document.createTextNode(data.description);
    desc1.appendChild(desc_txt1);
    meta_data1.appendChild(desc1);
    
    

    row.appendChild(image_data1);
    row.appendChild(meta_data1);

    return row;
}


function loadTableWithFilters() {
    var parent = document.getElementById("table-body");
    parent.innerHTML="";

    for (var i=0; i<Data.length; i++) {
        var row = CreateRow(Data[i]);
        parent.appendChild(row); 
    }
}


