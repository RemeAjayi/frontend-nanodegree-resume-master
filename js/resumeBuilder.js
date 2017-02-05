/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work =
{
	"jobs":
    [
     {
     	
     	"employer" : "Integrated Data Services Limited",
     	"title" : "Hardware Intern",
        "location" : "Benin City, Edo State",
        "datesWorked" : "May 2016 - Jun 2016",
        "description" : "Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections."
     },
     {
     	"employer" : "Nigerian Petroleum Development Company",
     	"title" : "Hardware Intern",
        "location" : "Benin City, Edo State",
        "datesWorked" : "Jan 2017 - Apr 2017",
        "description" : "Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections.Duties included mail configuration, cable crimping and troubleshooting of LAN connections"
     },
     {
     	"employer" : "Microscale Embedded",
     	"title" : "Embedded Systems Engineer",
        "location" : "Kado Estate, Abuja",
        "datesWorked" : "May 2017 - Jun 2017",
        "description" : "Duties included design and construction of embedded systems, as well as embedded system programming.Duties included design and construction of embedded systems, as well as embedded system programming.Duties included design and construction of embedded systems, as well as embedded system programming.Duties included design and construction of embedded systems, as well as embedded system programming"
     }
	]
};

var projects =
{
 sampleProjects: 
 [
  {
  	"title" : "Temperature Controlled Arduino Fan",
  	"dates" : "Nov 2016",
  	"description" : "DC Fan operates with temperature. At high temperatures, fan speedincreases and at low temperatures fan speed reduces, the speed is displayed on a liquid crystal display",
  	images : ["images/drum.png"]
  },
  {
    "title" : "Website for Zantahouse",
  	"dates" : "Jan 2016",
  	"description" : "Website for designer wedding startup, Zantahouse. Bridal photography, makeup, hair stylists and wedding planners.",
  	images : ["images/zanta.png","images/shop.png"]
  }
 ]
};

var bio = {
	"name" : "Olohireme Ajayi",
	"role" : "Web Developer",
	"contacts" : 
	{
	 "mobileNo" : "+2347036832227",
	 "email": "remeajayi@gmail.com",
     "twitter": "@olohireme_ajayi",
     "github": "RemeAjayi",
     "location": "Benin City, Edo State"
     },
	"pictureURL" : "images/biopic.jpg",
	"welcomeMessage" : "Hello Mate!",
	"skills" : ["Crimping Cables", "PHP", "HTML", "Javascript"]
};

var education = {
   	"schools":[
   	{
      "name" : "Covenant University",
      "location" : "Ota, Ogun State",
      "major" : "Computer Engineering",
      "degree": "B.Eng",
      "degreeDates" : 2018,
      "url" : "www.covenantuniversity.edu.ng"
     
},
{
      "name" : "Stanford University",
      "location" : "Palo Alto, California",
      "major" : "Computer Engineering",
      "degree": "M.Eng",
      "degreeDates" : 2020,
      "url" : "www.stanford.edu"
  }
   	],
   	"onlineCourses" : 
   	[
   	{ "title": "Javascript Basics",
   	  "school": "Udacity",
   	  "dates" : "Jan 2017",
   	  "url" : "https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19350585610923"
   	}
   	]
   };
 
function displayNav()
{
	$("#header").prepend(navbar);
}
bio.display = function() 
{ 

   HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
   $("#header").prepend(HTMLheaderRole);
   HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
   $("#header").prepend(HTMLheaderName);
  
 //var HTMLcontactGeneric = HTMLheaderName.replace("%data%", bio.contact);
HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobileNo);
HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);

// var HTMLblog = HTMLheaderName.replace("%data%", bio.blog);
HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var contact = HTMLmobile + HTMLemail + HTMLtwitter + HTMLgithub + HTMLlocation;
$("#topContacts").append(contact);
$("#footerContacts").append(contact);
HTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(HTMLbioPic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(HTMLwelcomeMsg);


   var skills = bio.skills;
    if (skills.length > 0)
   {
	$("#header").append(HTMLskillsStart);

      var skill1 = skills[0];
      var HTMLskills1 = HTMLskills.replace("%data%", skill1);
	  $("#skills").append(HTMLskills1);
      var skill2 = skills[1];
	  var HTMLskills2 = HTMLskills.replace("%data%", skill2);
	  $("#skills").append(HTMLskills2);
	  var skill3 = skills[2];
	  var HTMLskills3 = HTMLskills.replace("%data%", skill3);
	  $("#skills").append(HTMLskills3);
	  
   }
  }
// calls bio display method
bio.display();
//show nav
displayNav();

 work.display = function()
  {
  for(job in work.jobs)
  {
  	$("#workExperience").append(HTMLworkStart);

    var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
    var  formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var w = employer + title + formattedDate + formattedLocation + formattedDesc;
    $(".work-entry:last").append(w);
  }

}
//calls work display method
work.display();
$("#main").append(internationalizeButton);
//internationalizes name in bio
function inName()
{
var name= bio.name.split(' ');

name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1);
var internationalizeName = name.join(" ");
return internationalizeName;
}

  $('button').click(function(inName) {
   
  });
  // display method of education object
education.display = function()
{
//display schools attended	
 for(school in education.schools)
  {
  	$("#education").append(HTMLschoolStart);
    HTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].degreeDates);
    $(".sch-date:last").append(HTMLschoolDates);
    HTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".school-entries:last").append(HTMLschoolName);
    HTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".school-entries:last").append(HTMLschoolDegree);
    HTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".school-entries:last").append(HTMLschoolLocation);
    HTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".school-entries:last").append(HTMLschoolMajor);
    // var w =  HTMLschoolName + HTMLschoolDegree + HTMLschoolDates + HTMLschoolLocation + HTMLschoolMajor;
    
  }
  //display online courses completed
 $("#education").append(HTMLonlineClasses);
  for(course in education.onlineCourses)
  {
  	$("#education").append(HTMLschoolStart);
  
    HTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".class-date:last").append(HTMLonlineDates);
    HTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    $(".class-entries:last").append(HTMLonlineTitle);
    HTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".class-entries:last").append(HTMLonlineSchool);
    HTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".class-entries:last").append(HTMLonlineURL);

    // var e =  HTMLonlineTitle  + HTMLonlineSchool + HTMLonlineDates +HTMLonlineURL ;
    
  }
}
// calls project display method
education.display();
// display method of projects object
projects.display = function()
{
 for(project in projects.sampleProjects)
  {
  	$("#projects").append(HTMLprojectStart);

    var formattedDate = HTMLprojectDates.replace("%data%", projects.sampleProjects[project].dates);
    $(".date:last").append(formattedDate);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.sampleProjects[project].title);
    $(".project-entries:last").append(formattedTitle);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.sampleProjects[project].description);
    $(".project-entries:last").append(formattedDesc);
    for (image in projects.sampleProjects[project].images)
    {
    var formattedImage = HTMLprojectImage.replace("%data%", projects.sampleProjects[project].images[image]);
    $(".project-entries:last").append(formattedImage);
    }
    // $(".project-entry:last").append(Div);
    // var w =   formattedDate +formattedTitle + formattedDesc + formattedImage;
    // $(".project-entry:last").append(w);
  }
}
// calls project display method
projects.display();
// adds map to the page
$("#mapDiv").append(googleMap);