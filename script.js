// LOGIN BUTTON

const loginBtn = document.querySelector(".login-box button");

if(loginBtn){

    loginBtn.addEventListener("click", () => {

        alert("Login Successful!");

    });

}


// ASSIGNMENT BUTTON

const assignmentBtn = document.querySelector(".assignment-form button");

if(assignmentBtn){

    assignmentBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Assignment Added Successfully!");

    });

}


// STUDY PLANNER BUTTON

const scheduleBtn = document.querySelector("#schedule-btn");

if(scheduleBtn){

    scheduleBtn.addEventListener("click", () => {

        alert("Study Schedule Generated!");

    });

}


// NOTIFICATION BUTTON

const notificationBtn = document.querySelector("#notification-btn");

if(notificationBtn){

    notificationBtn.addEventListener("click", () => {

        alert("All notifications marked as read!");

    });

}