/*
This is empty on purpose! Your code to build the resume will go here.
 */

var userBio = JSON.parse(localStorage.getItem("userBio"));
var userWorkData = JSON.parse(localStorage.getItem("userWorkData"));
var userSchoolData = JSON.parse(localStorage.getItem("userSchoolData"));
var userCourseData = JSON.parse(localStorage.getItem("userCourseData"));
var userProjectData = JSON.parse(localStorage.getItem("userProjectData"));

var work = { "jobs":[]};
for (var i=0; i<userWorkData.length; i++)
{
	//because the first value is null
	work.jobs.push(userWorkData[i]);
}

var education = { "schools": [], "onlineCourses": []};
for (var i=0; i<userSchoolData.length; i++)
{
  //because the first value is null
  education.schools.push(userSchoolData[i]);
}
for (var i = 0; i<userCourseData.length; i++)
{
education.onlineCourses.push(userCourseData[i]);
}


var projects = { sampleProjects: []};
for (var i = 0; i<userProjectData.length; i++)
{
projects.sampleProjects.push(userProjectData[i]);
}

var bio = {
	"name" : userBio.firstName + " " + userBio.lastName,
	"role" : userBio.role,
	"contacts" : 
	{
	 "mobileNo" : userBio.mobile,
	 "email": userBio.email,
     "twitter": userBio.twitter,
     "github": userBio.github,
     "location": userBio.place
     },
	"pictureURL" : userBio.bio_image,
	"welcomeMessage" : userBio.headline,
	"skills" : userBio.skill
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

      for (skill in skills)
      { 
       
      	HTMLskills = HTMLskills.replace("%data%", skills[skill]);
      	$("#skills").append(HTMLskills);
      	HTMLskills = HTMLskills.replace(skills[skill],"%data%" );

      }
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
    var title = HTMLworkTitle.replace("%data%", work.jobs[job].role);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
    var  formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].place);
    var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].details);

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
/**
  $('button').click(function(inName) {
        
  });
**/
  // display method of education object
education.display = function()
{
//display schools attended	
 for(school in education.schools)
  {
  	$("#education").append(HTMLschoolStart);
    HTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].schoolDates);
    $(".sch-date:last").append(HTMLschoolDates);
    HTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].fullname);
    $(".school-entries:last").append(HTMLschoolName);
    HTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".school-entries:last").append(HTMLschoolDegree);
    HTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].place);
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
    HTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].courseTitle);
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
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.sampleProjects[project].project_title);
    $(".project-entries:last").append(formattedTitle);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.sampleProjects[project].project_desc);
    $(".project-entries:last").append(formattedDesc);
    /*for (image in projects.sampleProjects[project].images)
    {
    var formattedImage = HTMLprojectImage.replace("%data%", projects.sampleProjects[project].images[image]);
    $(".project-entries:last").append(formattedImage);
    }*/
  }
}
// calls project display method
projects.display();
// adds map to the page
$("#mapDiv").append(googleMap);