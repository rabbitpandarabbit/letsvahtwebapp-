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
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
      room_name = document.getElementById("room_name").Value;

      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name" , room_name);
      window.location = "kyle.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name)
      window.location = "kyle.html"; 
}