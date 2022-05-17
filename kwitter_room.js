const firebaseConfig = {
      apiKey: "AIzaSyCHVl43AgK2z2Hwk6pOV5N0BNdlBTfiLn0",
      authDomain: "class93kwitter-1fad7.firebaseapp.com",
      databaseURL: "https://class93kwitter-1fad7-default-rtdb.firebaseio.com",
      projectId: "class93kwitter-1fad7",
      storageBucket: "class93kwitter-1fad7.appspot.com",
      messagingSenderId: "504001136486",
      appId: "1:504001136486:web:24bb66f1fe66213574aaa7"
    };
    

firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
