/*
This is empty on purpose! Your code to build the resume will go here.
 */

 formattedName=HTMLheaderName.replace("%data%","Mathias Korell");
 formattedRole=HTMLheaderRole.replace("%data%","IT Professionel");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


 bio={
 	"name":"Mathias Korell",
 	"role":"IT Professional",
 	"contactinfo": {
 		"mail":"mkorell@gmx.net",
 		"phone":"+49/7031/9246609"
 	},
 	"picture":"images/me.jpg",
 	"skills":["Business","Technology","Thinking"],
 	"welcomeMessage":"Welcome to my resume."
 }