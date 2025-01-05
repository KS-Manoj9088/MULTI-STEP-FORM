var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var submitForm = document.getElementById("submitForm");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress"); 

Next1.onclick = function(){
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "240px";
}

Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
}

Next2.onclick = function(){
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";
}

Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "240px";
}

document.getElementById("submitForm").onclick = async function () {
    const formData = {
        email: document.querySelector("#Form1 input[placeholder='Email']").value,
        password: document.querySelector("#Form1 input[placeholder='Password']").value,
        leetcode: document.querySelector("#Form2 input[placeholder='LeetCode']").value,
        github: document.querySelector("#Form2 input[placeholder='GitHub']").value,
        linkedin: document.querySelector("#Form2 input[placeholder='LinkedIn']").value,
        firstName: document.querySelector("#Form3 input[placeholder='First Name']").value,
        lastName: document.querySelector("#Form3 input[placeholder='Last Name']").value,
        mobile: document.querySelector("#Form3 input[placeholder='Mobile Number']").value,
    };

    try {
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Form submitted successfully!");
        } else {
            alert("Error submitting form.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred.");
    }
};