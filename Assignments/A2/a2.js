
console.log("*********************** Task 1 ***************************");
console.log("\n");
/* a.Create an array called courses, 
each course in the array should have the following information:*/
var Courses =[
    {
        code: "APC100",
        name: "Applied professional communication",
        hours: 3,
        url: "http://www.senecacollege.ca"
    },
    {
        code: "IPC144",
        name: "Introduction to C programming",
        hours: null,
        url: "http://www.senecacollege.ca"
    },
    {
        code: "ULI101",
        name: "Linux and the Internet",
        hours: 4,
        url: "http://www.senecacollege.ca/lin"
    },
    {
        code: "IOS110",
        name: "Windows Operating System",
        hours: 4,
        url: "http://www.senecacollege.ca/ios"
    },
    {
        code: "EAC150",
        name: "College English",
        hours: 3,
        url: null
    }
]

console.log(Courses);

/* b. Using appropriate array method, Remove the last course object form 
the given array courses and store the removed object to a variable.*/
var last=Courses.pop();

/* c. Output a message to console to show the course which was 
removed from the array. */
console.log("This is the course object removed from the Courses array: ");
console.log(last);


/* d. Create 4 course objects which should have the same properties as 
what the objects (in the course array) have. Store the 4 course objects 
in the variables BTP200, BTD210, BTI225 and BTC240, 
and the object properties should have appropriate values. */
var Subject = {
    code: String,
    name: String,
    hours: Number,
    url: String
}

var sbj1 = Object.create(Subject);
var sbj2 = Object.create(Subject);
var sbj3 = Object.create(Subject);
var sbj4 = Object.create(Subject);

sbj1.code= "BTP200";
sbj1.name= "The Object-Oriented Paradigm Using C++";
sbj1.hours=4;
sbj1.url="https://ict.senecacollege.ca/~btp200/index.html";

sbj2.code= "BTD210";
sbj2.name= "Database Design Principles";
sbj2.hours=4;
sbj2.url="https://ict.senecacollege.ca/course/btd210?q=course/btd210";

sbj3.code= "BTI325";
sbj3.name= "Web Programming Principles";
sbj3.hours=4;
sbj3.url="https://www.senecacollege.ca/cgi-bin/subject?s1=BTI225";

sbj4.code= "BTC240";
sbj4.name= "Interpersonal Communications in Organizations";
sbj4.hours=4;
sbj4.url="https://www.senecacollege.ca/cgi-bin/subject?s1=BTC240";


/* e. Using appropriate array method, 
Add these course objects in the array courses */
Courses.push(sbj1, sbj2, sbj3, sbj4);

console.log(Courses);

/* f. Use for loop to loop through the course array in order to add the 
hours of the courses and log the total hours in the console. */
var totalHours=0;
for(var i=0; i<Courses.length; i++) {
    totalHours += Courses[i].hours;
}
console.log("The total hours is: " + totalHours + "\n");


console.log("*********************** Task 2 ***************************");
console.log("\n");

var Students = {
    name: String,
    dob: new Date(),
    sid: String,
    program: String,
    gpa: Number,
    toString: function(){
        return "Student info for " + this.name + " born on " + this.dob
        + ", id is " + this.sid + ", in program " + this.program
        + ", with a current GPA of " + this.gpa;
    }
}

var student1=Object.create(Students);
var student2=Object.create(Students);
var student3=Object.create(Students);
var student4=Object.create(Students);

student1.name = "Mike";
student1.dob = "2001-01-01";
student1.sid = "1111111";
student1.program = "BTP200";
student1.gpa = 3.8;

student2.name = "Lisa";
student2.dob = "2002-02-22";
student2.sid = "2222222";
student2.program = "BTD210";
student2.gpa = 2.7;

student3.name = "Susan";
student3.dob = "2003-03-31";
student3.sid = "3333333";
student3.program = "BTI225";
student3.gpa = 2.3;

student4.name = "Lina";
student4.dob = "2004-04-04";
student4.sid = "4444444";
student4.program = "BTC240";
student4.gpa = 3.5;


var Students = [student1, student2, student3, student4];
var value=1;
Students.forEach(element => {
    console.log(value + ") " + element.toString());
    value++;
});

