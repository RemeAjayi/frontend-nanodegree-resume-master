//for every element that will be created when the user clicks a button change the ID to CLASS
var makeCounter = function() {
var privateCounter = 0;
function changeBy(val)
{
   privateCounter += val;
}
return {
   increment: function()
   {
      changeBy(1);
   },
   value: function()
   {
      return privateCounter;
   }
}
};

var workCounter = makeCounter();
var schoolCounter = makeCounter();
var courseCounter = makeCounter();
var projectCounter = makeCounter();
// turn the above to one line of code!!important
var w;
var  s;
var c;
var p;

var skillInput = '<label>skill</label><input type="text" name="skill" class="skill">';
$("#showSkill").click(function()
{
$(".hideMe-0").append(skillInput);
});//create skill section

$("#showWork").click(function()
{
w = workCounter.value();
var workInput = '<div class="work"><label>Title</label><input type="text" name="wk_title" id="wk_title'+w+'"><label>Role</label><input type="text" name="wk_role" id="wk_role'+w+'"><label>Place</label><input type="text" name="wk_place" id="wk_place'+w+'"><label>From</label><input type="text" name="wkStartDate" id="wkStartDate'+w+'"><label>To</label><input type="text" name="wkEndDate" id="wkEndDate'+w+'"><label>Details</label><textarea  name="workDetails" id="workDetails'+w+'"></textarea></div>';
$(".hideMe-1").append(workInput);
workCounter.increment();
});//create work section
//make all ids dynamic and redo work fxn

$("#showSchool").click(function()
{
s = schoolCounter.value();
var schoolInput  = '<div class="school"><label>Name</label><input type="text" name="sch_name" id="sch_name'+s+'"><label>Major</label><input type="text" name="sch_major" id="sch_major'+s+'"><label>Degree</label><input type="text" name="sch_degree" id="sch_degree'+s+'"><label>From</label><input type="text" name="schStartDate" id="schStartDate'+s+'"><label>To</label><input type="text" name="schEndDate" id="schEndDate'+s+'"><label>Place</label><input type="text" name="sch_place" id="sch_place'+s+'"></work>';
$(".hideMe-2").append(schoolInput);
alert(schoolInput);
schoolCounter.increment();
});//create schools section

$("#showOnlineCourse").click(function()
{
c = courseCounter.value();
var onlineCourseInput = '<div class="onlineCourse"><label> Course Title</label><input type="text" name="course_title" id="course_title'+c+'"><label>School</label><input type="text" name="course_sch" id="course_sch'+c+'"><label>Date</label><input type="text" name="course_date" id="course_date'+c+'"><label>URL</label><input type="text" name="course_url" id="course_url'+c+'"></div>';
$(".hideMe-3").append(onlineCourseInput);
alert(onlineCourseInput);
courseCounter.increment();
});//create course section

$("#showProject").click(function()
{
p = projectCounter.value();
var projectInput = '<div class="project"><label>Title</label><input type="text" name="project_title" id="project_title'+p+'"><label>Date</label><input type="text" name="project_date" id="project_date'+p+'"><label>Media</label><button>Add New</button><!-- when img is created it should be given class dynamically --><label>Details</label><textarea name="project_details" id="project_details'+p+'"></textarea></div>';
$(".hideMe-4").append(projectInput);
alert(projectInput);
projectCounter.increment();
});//create course section


function show(id)
{
  $(id).attr("type","text");
}

// make these changes
//only the input of the button clicked should show
// the click should not submit the form

var biodata = {};
var workdata = []; 
var schooldata = [];
var onlineCoursedata = [];
var projectdata = [];

function setBio() {
   biodata.firstName = $("#fname").val();
   biodata.lastName = $("#lname").val();
   biodata.role = $("#role").val();
   biodata.headline = $("#headline").val();
   biodata.image = $("#bio_image").val();
   biodata.mobile = $("#mobile").val();
   biodata.email = $("#email").val();
   biodata.twitter = $("#twitter").val();
   biodata.github = $("#github").val();
   biodata.place = $("location").val();
   // add the remaining contacts, mobile is already working
   biodata.skill = [];

   var y = $(".hideMe-0").find(".skill");
   for (var i = 0; i<y.length; i++)
   {
	
	biodata.skill.push(y[i].value);
   }

   return biodata;
}
//sets work
//workdata is undefined in resumeBuilder.js and properties don't change in loop

function setWork(){
   //or soft work :)

   var y = $(".hideMe-1").find(".work");
   for (var i = 0; i<y.length; i++)
   {
   
   workdata[i]= new Object();
   if (typeof workdata[i] === "object")
   {
   //check value of i, if code misbehaves
   workdata[i].employer = $("#wk_title" + i).val();
   workdata[i].role = $("#wk_role" + i).val();
   workdata[i].place = $("#wk_place" + i).val();
   workdata[i].datesWorked = $("#wkStartDate" + i).val() + "-" + $("#wkEndDate" + i).val();
   workdata[i].details = $("#workDetails" + i).val();
   }
   
   }
   return workdata;
}//

function setSchools(){
   //or soft work :)
   var y = $(".hideMe-2").find(".school");
      for (var i = 0; i<y.length; i++)
   {
   
   schooldata[i]= new Object();
    if (typeof schooldata[i] === "object")
   {
   schooldata[i].fullname = $("#sch_name" + i).val();
   schooldata[i].major = $("#sch_major" + i).val();
   schooldata[i].degree = $("#sch_degree" + i).val();
   schooldata[i].schoolDates = $("#schStartDate" + i).val() + "-" + $("#schEndDate" + i).val();
   schooldata[i].place = $("#sch_place" + i).val();
   }
   }
   return schooldata;
}

function setOnlineCourses(){
   //or soft work :)

   var y = $(".hideMe-3").find(".onlineCourse");
   for (var i =0; i<y.length; i++)
   {
   onlineCoursedata[i]= new Object();
   if (typeof onlineCoursedata[i] === "object")
   {
   
   onlineCoursedata[i].courseTitle = $("#course_title" + i).val();
   onlineCoursedata[i].school = $("#course_sch" + i).val();
   onlineCoursedata[i].date = $("#course_date" + i).val();
   onlineCoursedata[i].url = $("#course_url" + i).val();
   }
}
   return onlineCoursedata;
}//


function setProjects(){
   //or soft work :)

   var y = $(".hideMe-4").find(".project");
   for (var i = 0; i<y.length; i++)
   {
   
   projectdata[i]= new Object();
    if (typeof projectdata[i] === "object")
   {
   projectdata[i].project_title = $("#wk_title" + i).val();
   projectdata[i].dates = $("#wk_role" + i).val();
   projectdata[i].project_desc= $("#wk_place" + i).val();
    }
   // projectdata[i].images = $("#workDetails" + i).val();
   //work on the images!important
   }
   return projectdata;
}//

$('#upload').click(function(){

   setBio();
   localStorage.setItem("userBio", JSON.stringify(biodata));
   setWork();
   localStorage.setItem("userWorkData", JSON.stringify(workdata));
   setSchools();
   localStorage.setItem("userSchoolData", JSON.stringify(schooldata));
   setOnlineCourses();
   localStorage.setItem("userCourseData", JSON.stringify(onlineCoursedata));
   setProjects();
   localStorage.setItem("userProjectData", JSON.stringify(projectdata));
    //replace userBio with userData if it'll contain all the values
});
