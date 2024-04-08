const firebaseConfig = {
      apiKey: "AIzaSyA8upiMWQlMMP0W9uNaJhlI_fM__bfGAjs",
      authDomain: "kwitter-9bac8.firebaseapp.com",
      projectId: "kwitter-9bac8",
      storageBucket: "kwitter-9bac8.appspot.com",
      messagingSenderId: "152169948119",
      appId: "1:152169948119:web:9e9b0fc6424632b43f6192",
      measurementId: "G-K3229TP6M1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {
      firebase.database().ref("/").on('value',
            function (snapshot) {

                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        console.log("Room Name - " + Room_names);
                        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                        document.getElementById("output").innerHTML += row;
                  });
            });
}
getData();

function redirectToRoomName() {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "MeetUp_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function addroom() {
      room_name = localStorage.getItem("room_name");
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
}

function getData() {
      firebase.database().ref("/").on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                        snapshot.forEach(function (childSnapshot) {
                              childKey = childSnapshot.key;
                              Room_names = childKey;
                              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                        });
                  });
            }
getData();