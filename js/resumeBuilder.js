/*
This is empty on purpose! Your code to build the resume will go here.
 */

 formattedName=HTMLheaderName.replace("%data%","Mathias Korell");
 formattedRole=HTMLheaderRole.replace("%data%","IT Professionel");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


 var bio={
 	"name":"Mathias Korell",
 	"role":"IT Professional",
 	"contacts": {
 		"email":"mkorell@gmx.net",
 		"mobile":"+49/7031/9246609",
        "location":"Böblingen"
 	},
 	"bioPic":"images/me.jpg",
 	"skills":["Business","Technology","Thinking"],
 	"welcomeMessage":"Welcome to my resume.",
    "display":function() {}
 }
 

// name property of bio object can be addressed in two different ways:
//  1) bio.name
//  2) bio["name"]
// beware the string notation in option 2!
 
//$("#main").append(bio.name);
//$("#main").append(work.jobs[0].employer);
//$("#main").append(education["schools"][1]["name"]);



var education = { 
    //schools: array of objects with name, location, degree, majors, dates, url
    //onlineCourses: array of objects with title, school, dates, url
    //display: function taking no parameters
    "schools": [{
         "name": "Ostendorf Gymnasium",
         "location": "Lippstadt",
         "degree": "Abitur",
         "majors": ["Abitur"],
         "dates": "1985 - 1994",
         "url": "http://ostendorf-gymnasium.de"
    },{
         "name": "VWA Stuttgart",
         "location": "Stuttgart",
         "degree": "Diplom",
         "majors": ["major 1","major 2"],
         "dates": "1995 - 1998",
         "url": "https://vwa-stuttgart.de"
    }],
    "onlineCourses": [{   // array of objects 
         "title": "Udacity Training",
         "school": "Udacity",
         "dates": "2017",
         "url": "www.udacity.com"
    }],
    "display":function (){}
}

var work = {
    //jobs: array of objects with employer, title, location, dates as string, description)
    "jobs": [{
         "employer": "IBM",
         "title": "Accelerated Value Program", 
         "location": "Böblingen", 
         "dates": "in progress",
         "description": "Macht auch Spaß" 
    }],
    "display": function() {}
}



var projects = [{
    // projekcts: array of objects with title, dates and descriptions, and an images array with URL strings for projekt images
    "title":"e-Business Hosting",
    "dates":"In the very beginning",
    "description":"Das war noch bei Frau Leichtl",
    "images":["images/me.jpg","images/fry.jpg"]
}]

