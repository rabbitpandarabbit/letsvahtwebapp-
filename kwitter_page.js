var firebaseConfig = {
    apiKey: "AIzaSyBl1uPWi_D1qUxerpdmuzMMC2lWNuYf-iw",
    authDomain: "letschatwebapp-e5804.firebaseapp.com",
    databaseURL: "https://letschatwebapp-e5804-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-e5804",
    storageBucket: "letschatwebapp-e5804.appspot.com",
    messagingSenderId: "36017805177",
    appId: "1:36017805177:web:b780a60e082fbb1d4dc1a8",
    measurementId: "G-QTGYYJHT6T"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
