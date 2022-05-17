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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
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
