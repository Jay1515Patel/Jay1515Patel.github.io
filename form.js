// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCrO8zAJ6y6fIJEYnDRR906yG3GJjgafpY",
    authDomain: "test-form-40c33.firebaseapp.com",
    projectId: "test-form-40c33",
    storageBucket: "test-form-40c33.appspot.com",
    messagingSenderId: "277138595077",
    appId: "1:277138595077:web:7dda2d9167d26e0ecc6b6c"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference messages collection
var messagesRef = firebase.database().ref('messages'); 

//listen for form response
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    saveMessage(name, email, message);
    alert('your message has been submitted');
    // document.querySelector(".formBx").reset();
    document.getElementById(name).reset();
    document.getElementById(email).reset();
    document.getElementById(message).reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}


//save messages to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}