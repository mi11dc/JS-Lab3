//LAB 3 - ARRAYS & LOOPS - PART 2


//PM TEAM MEMBER ARRAY
var teamMembers = ["Jaidev", "Akul", "Parth", "Karanveer", "Dhaval"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(teamMembers);

//REMOVE LAST MEMBER
teamMembers.splice(teamMembers.length - 1);
// teamMembers.pop();
console.log(teamMembers);

//ADD SEAN TO FRONT OF ARRAY
teamMembers.unshift("Sean");
console.log(teamMembers);

//REARRANGE THE ARRAY ALPHABETICALLY
teamMembers.sort();
console.log(teamMembers);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have #NUMBER people in our group.".replace('#NUMBER', teamMembers.length));

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i] + " is # NUM".replace('NUM', (i+1)));
}