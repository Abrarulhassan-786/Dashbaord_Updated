//-------------------get id from field input
var Username = document.getElementById("username");
var Email = document.getElementById("email");
var Pass = document.getElementById("password");
var ConfPass = document.getElementById("confPass");
var Adress = document.getElementById("Address");
var Calender = document.getElementById("calender");
var MobNum = document.getElementById("number");
var PostalCode = document.getElementById("postalCode");
//-------------------create vaiable of gender get gender value by radio button------
let Gender = "";
//------------------- create for get data from user in object and get object data in array------
let datafromObject = [];
//------------------- create function beacuse checking validation of input values------

let DataUser = {};
function validationForm() {
    if (Username.value.trim() == "") {
        document.getElementById("Error1").innerText = "UserName is Required!";
        Username.focus();
        return false;
    }
    else if (Email.value.trim() == "") {
        document.getElementById("Error2").innerText = "Email is Required!";
        Email.focus();
        return false;
    }
    else if (Pass.value.trim() == "") {
        document.getElementById("Error3").innerText = "Password is Required!";
        Pass.focus();
        return false;
    }
    else if (ConfPass.value.trim() == "") {
        document.getElementById("Error4").innerText = "Confirm Password is Required!";
        ConfPass.focus();
        return false;
    }
    else if (ConfPass.value.trim() != Pass.value) {
        document.getElementById("Error4").innerText = "Sorry! Password not Match Try Again"
        ConfPass.focus();
        return false;
    }
    else if (Adress.value.trim() == "") {
        document.getElementById("Error5").innerText = "Addres is Required!";
        Adress.focus();
        return false;
    }
    else if (Calender.value.trim() == "") {
        document.getElementById("Error6").innerText = "DOB is Required!";
        Calender.focus();
        return false;
    }

    else if (MobNum.value.trim() == "") {
        document.getElementById("Error8").innerText = "Mobile Number is Required!";
        MobNum.focus();
        return false;
    }
    else if (PostalCode.value.trim() == "") {
        document.getElementById("Error9").innerText = "Mobile Number is Required!";
        PostalCode.focus();
        return false;
    }
    //------------------------create looop of check which radio button has been checked checkedy throught name-------
    var radios = document.getElementsByName('gender');
    for (var radio of radios) {
        if (radio.checked) {
            genderVlaue = radio.value;
        }
    }
    //-------------------------getting data from user and input in object-----------
    DataUser = {
        UserName: Username.value,
        Email: Email.value,
        Password: Pass.value,
        confPassword: ConfPass.value,
        Adress: Adress.value,
        Calender: Calender.value,
        MobNumber: MobNum.value,
        PostalCode: PostalCode.value,
        gender: genderVlaue.value,
        seats:{}
    }
    //-------------------------pushing object data in array------
    datafromObject.push(DataUser);
    //-------------------------stored all data in localstorage by stringify in json --------
    localStorage.setItem("UserData", JSON.stringify(datafromObject));
}

//-----------Main page Sinup Page Display---------------
function SIngUpFunc() {
    document.querySelector(".ContainerSinUp").style.display = "flex";
    document.getElementById("TopContainer").style.display = "none";
}
//-----------Main page Sinup Page Display End---------------
function bodyData(){
    document.getElementById("TopContainer").style.display = "block";
}
//-----------Main page Login Page Display---------------
function loginFunc() {
    document.querySelector("#LoginContainer").style.display = "flex";
    document.querySelector("#TopContainer").style.display = "none"
}
//-----------Main page Sinup Page Display End---------------


//---------Start working on LIGIN FORM--------

//------Decalre variable get from localstorage--------
let emailUser;
let passwordUser;
let nameU;
let getDataFromlocalStorage = localStorage.getItem("UserData");
let arrayData = JSON.parse(getDataFromlocalStorage);
for (let key in arrayData) {
    if (arrayData[key].Email) {
        emailUser = arrayData[key].Email;
    }
    if (arrayData[key].Password) {
        passwordUser = arrayData[key].Password;
    }
    if (arrayData[key].UserName) {
        nameU = arrayData[key].UserName;
    }
}

console.log(passwordUser)
console.log(emailUser)
let getPass = document.getElementById("passwords");
let getmail = document.getElementById("mails");
function loginFuncdata() {
    if (emailUser !== getmail.value || passwordUser !== getPass.value) {
        alert("Email or Password Is Incorrect!")
    }
    else {
        alert("Congratulation Login SuccessFully")
        document.getElementById("LoginContainer").style.display = "none";
        document.getElementById("dashboardContainer").style.display = "block";
    }
}
//---------working on LIGIN FORM End--------

//-------Working on DashBoard-start-----------------
function DisplayAssignments() {
    document.getElementById("listMenu").style.display = "block";
}

function DisplayMoviesOnmain() {
    document.getElementById("MoviesContainer").style.display = "block";
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("sideBar").style.width = "20%"
    document.getElementById("Movie1Information").style.display = "none";
}
document.getElementById("nameUser").innerText = "👋WELCOME_" + nameU.toUpperCase() + " TO MY DASHBOARD";
//-------Working on DashBoard End------------------
//---------------logoout Data----------------
function LogOutData(){
    document.getElementById("TopContainer").style.display = "block";
    document.getElementById("dashboardContainer").style.display = "none";
}

//-------Seat booking by user start-----------------

let bookedSeat = [12,13,23,44,45,53];
function userSeat(seatNumber) {
    for(var i=1;i<=48;i++){
        if(seatNumber == i){
            bookedSeat.push(seatNumber);
            document.querySelector("#seatNo"+i).style.backgroundColor = "gold";
            localStorage.setItem("seatsBooked",JSON.stringify(bookedSeat));
        }
    }
}
function nextPAGE(){
    document.getElementById("LoginContainer").style.display = "block";
    document.getElementById("ContainerSinUp").style.display= "none";
}
function TicketBookMovie(){
    document.getElementById("MoviesContainer").style.display = "none";
    document.getElementById("Movie1Information").style.display = "block";
}
//-------Seat booking by user start End-----------------


//-------remove dublicated value in array nO Working Try kar raha ho-----------------

// console.log(uniqueSeats);
// console.log(bookedSeat);
// localStorage.setItem("UbookedSets",JSON.stringify(bookedSeat));
//-------remove dublicated value in array-----------------







// function singUp(){
//     document.getElementById("Wraper").style.display = "block";
//     document.getElementById("login").style.display = "none";
// }
// function loginFunc(){
//     document.getElementById("login").style.display = "block";
//     document.getElementById("Wraper").style.display = "none";
// }
// var userlogin = document.getElementById("loginUser");
// var passlogin = document.getElementById("loginPass");

// function loginFunction(){
//     console.log(userlogin.value,localStorage.getItem("User"))
//     console.log("function call")
//     if(userlogin.value.trim() == "" && passlogin.value.trim() == "")
//     {
//         alert("Please Provide Data ")
//     }
//     else if(userlogin.value.trim() === localStorage.getItem("User") && passlogin.value.trim() === localStorage.getItem("Password")){
//         // document.getElementById("dashboard").style.display = "block";
//         // document.getElementById("container").style.display = "none"
//         alert("sucessfullly")
//     }
//     else{
//         alert("plz try again")
//     }
// }

// function displayData(){
//     document.getElementById("datShow").style.display = "block";
//     document.getElementById("userName").innerText ="User Name : "+localStorage.getItem("User");
//     document.getElementById("email").innerText ="Email : "+localStorage.getItem("email");
//     document.getElementById("Password").innerText ="Password : "+localStorage.getItem("Password");
//     document.getElementById("ConfirmPassword").innerText ="Confirm Pass : "+localStorage.getItem("Confirm Pass");
//     document.getElementById("adress").innerText ="Addres : "+localStorage.getItem("Address");
//     document.getElementById("dob").innerText ="DOB : "+localStorage.getItem("calender");
//     document.getElementById("MobileNumber").innerText ="Mobile Number : "+localStorage.getItem("Mobile Num");
//     document.getElementById("postalCode").innerText ="Postal Code : "+localStorage.getItem("Postal Code");

// }
// var dataForm = [];
// var nam = document.getElementById("name");
// var age = document.getElementById("age");
// var gender = document.getElementById("gender");

// var datagetinfor = "";
// function singUp(){
//     var radios = document.getElementsByName('contact');
//     for (var radio of radios)
//     {
//         console.log(radios)
//         if (radio.checked) {
//             alert(radio.value);
//             datagetinfor = radio.value;
//         }
//     }
//     var dataFormGet = {
//         userName: nam.value,
//         Age: age.value,
//         Gender: gender.value,
//         radio:datagetinfor
//     }
//     dataForm.push(dataFormGet);
//     document.querySelector('form').reset();
//     var mysjason = JSON.stringify(dataFormGet);
//     localStorage.setItem("getDat",mysjason);
// }





// // // simple user storage cycle......
// // // getting previous data
// // var prev = localStorage.getItem("user")
// // if (prev) {
// //     prev = JSON.parse(prev);
// // }

// // let simpleArray = [...prev]

// // // here is your code
// // // where you getting data from user by input's

// // let newData = { name: 'mehmood', auth: false }
// // simpleArray.push(newData)

// // localStorage.setItem('user', JSON.stringify(simpleArray))

// // // how to display multiple data in over DOM
// // // ES6

// // let div = document.getElementById('users')
// // div.innerHTML = ""

// // const setDataInDom = (myData) => {
// //     for (let key in myData) {
// //         div.innerHTML += `
// //             <h3>${myData[key].name}</h3>
// //         `
// //     }
// // }

// // setDataInDom(simpleArray)


// let objectData = {
//     name:"abrar",
//     age: 10
// }
// let values = JSON.stringify(objectData)
// localStorage.setItem("user",JSON.stringify(objectData));
// console.log(values)
// let getValues = localStorage.getItem(objectData.age);
// console.log(getValues)
// let newData = {
//     name:"zain",
//     age: 30
// }

// var array = [];
// array.push(objectData);
// array.push(newData);
// localStorage.setItem("abrarDta",JSON.stringify(array));
// console.log(array)







