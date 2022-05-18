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
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "</h4><button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id) {
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      likes_in_number = Number(likes) + 1;
      console.log(likes_in_number);
      firebase.database().ref(room_name).child(message_id).update({
            like: likes_in_number
      });
}
