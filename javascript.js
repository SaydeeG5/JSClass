let age = 39;
let country = "USA";
let myName = "Saydee";
let lastName = "Guevara";
let email = "saydeeguevarra@gmail.com";
let husbandname = "James";
let child1name = "Dominic";
let child2name = "Roman";
let child3name = "Luke";
let city = "Las Vegas";
let hobbies = "workout";
let branch = "Army";
let pet = "bulldog";
let bulldog = "Zeus";
let holiday = "Halloween"
let costume1 = "Spiderman";
let costume2 = "Black Panther";
let costume3 = "Iron Man";
let place =  "Universal Studios";
let placebecause = "Mario World";
let video = "YouTube";
let youtubename = "Guevarra5";
let professor = "Professor Sam"
let day = "Tuesday";


console.log(country);
console.log(age);
console.log(myName);
console.log(lastName);
console.log(email);

document.write("<p> Name: " + myName + "</p>");
document.write("<p>" + myName + " lives in " + country + "</p>");


document.write(`
<p style  = "color : blue"> Name: ${myName}</p>
<p style  = "color : blue"> Last Name: ${lastName}</p>
<p style  = "font-size : 24"> Husband's Name: ${husbandname}</p>
<p style  = "font-size : 24"> Child 1: ${child1name}</p>
<p style  = "font-size : 24"> Child 2: ${child2name}</p>
<p style  = "font-size : 24"> Child 3: ${child3name}</p>
<p style  = "color : blue"> We have a  ${video}.</p>
<p style  = "color : blue"> The name of our ${video} is ${youtubename}.</p>
<p style  = "font-size : 20"> We live in ${city}.</p>
<p style  = "color : pink"> I am  ${age} years old.</p>
<p style  = "text-decoration : underline"> We are a ${branch} family.</p>
<p style  = "color : brown"> We have a pet ${pet}.</p>
<p style  = "font-weight : 600"> Our bulldog's name is  ${bulldog}.</p>
<p style  = "color : orange">We can't wait to go trick or treatin' this ${holiday}!</p>
<p style  = "color : red"> Thank you EVERYONE and  ${professor} for moving our class to ${day}.</p>
<p style  = "font-size : 24"> ${child1name} is going to be ${costume1}.</p>
<p style  = "font-size : 24"> ${child2name} is going to be ${costume2}.</p>
<p style  = "font-size : 24"> ${child3name} is going to be ${costume3}.</p>
<p style  = "color : teal"> Next year we plan to go to ${place}.</p>
<p style  = "font-size : 24"> Because ${place} is going to open ${placebecause}!</p>
`);