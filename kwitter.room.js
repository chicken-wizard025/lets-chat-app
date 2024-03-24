const firebaseConfig = {
    apiKey: "AIzaSyBp6BRZpQI7kkMOmTJszRQIVMLCpd4MXxw",
    authDomain: "kwitter-720ca.firebaseapp.com",
    projectId: "kwitter-720ca",
    storageBucket: "kwitter-720ca.appspot.com",
    messagingSenderId: "756516389742",
    appId: "1:756516389742:web:5d2ee9df755bc9a5f4777f",
    measurementId: "G-PD3J0N4M5T"
  };
  
  firebase.initializeApp(firebaseConfig);
  function getData() 
  {
        firebase.database().ref("/").on('value',
        function(snapshot) {
       
         document.getElementById("output").innerHTML = "";
         snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
         });
       });
  }
  getData();

  function redirectToRoomName()
  {
        console.log(name);
        localStorage.setItem("room_name", name);
  }
  function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "kwitter.html";


  }
  function addroom() 
  {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
     
  localStorage.setItem("room_name", room_name);

 
  }