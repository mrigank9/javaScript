var bio = {
	"name": "Mrigank Patel",
	"role": "Software developer//presently--undergraduate student",
	"contacts": {
		"mobile": "783-940-2050",
		"email": "mp09patel@gmail.com",
		"github": "mrigank9",
		"location": "Lucknow"
	},
	"welcomeMessage": "MARDANI TAQAT bhencho",
	"skills": 
	["Awesome","delivering","cryogenic sleep","saving the universe"],
	"biopic": "images/a.jpg"
}
var education = {
	"schools": [
		{
			"name": "CMS",
			"city": "Lucknow",
			"degree": "10+2",
			"major": ["Sciences","Humanities"],
			"dates": 2014,
			"url": "www.cms.org"
		},
		{
			"name": "MNNIT",
			"city": "Allahabad",
			"degree": "B-Tech",
			"major": "CompScience",
			"dates": 2019,
			"url": "www.mnnit.ac.in"
		}
	], 
	"onlineCourses": [
		{
			"title": "JavaScript basics",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.udacity.com"
		}
	] 
}
var work = {
	"jobs": [
		{
			"employer": "MNNIT",
			"title": "Arts Committee Member",
			"dates": "2015",
			"location": "Allahabad",
			"decription": "The job entailed that I work for college initiation ceremonies and annual functions."
		},
		{
			"employer": "MNNIT",
			"title": "Mentor",
			"location": "Allahabad",
			"dates": "2016-2017",
			"decription": "Guide the newbies in the art of drawing and stuff."
		}
	]
}
var projects = {
	projects: [
		{
			"title": "sample javaScript resume",
			"dates": "2017",
			"decription": "simplistic implementation of javaScript to make this resume",
			"images": [
				"images/assassin.jpg"
			]
		}
	]
}
//bio portion
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
$("#header").append(bio.role);
var formattedNo = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#header").append(formattedNo);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#header").append(formattedEmail);
var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
$("#header").append(formattedGit);
var formattedLocn = HTMLlocation.replace("%data%",bio.contacts.location);
$("#header").append(formattedLocn);
var formattedBio = HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedBio);
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMsg);
$("#lets-connect").append(formattedNo);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);


}
function displayWork() {
//work portion
for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].decription);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);	
		$(".work-entry:last").append(formattedLocation);	 
	}
}
displayWork();

//keep track of the clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
logClicks(x,y);
});

//array split function
function locationizer(work_obj)
{
	var locationArray = [];
	for(job in work_obj.jobs)
	{
		locationArray.push(work_obj.jobs[job].location);
	}
	return locationArray;
}console.log(locationizer(work));

//internationalise Button
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}
$("#main").append(internationalizeButton);

//display projects portion
function display_pro() 
{
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		//project image portion
		if(projects.projects[project].images.length > 0)
		{
			for(image in projects.projects[project].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
display_pro();

//lets.connect portion


