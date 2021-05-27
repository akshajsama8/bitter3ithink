var firebaseConfig = {
    apiKey: "AIzaSyBYYYuzeh34yXcWcfx0Zu3s7q_UoCvFvKo",
    authDomain: "kwitterbyakshaj-965bc.firebaseapp.com",
    databaseURL: "https://kwitterbyakshaj-965bc-default-rtdb.firebaseio.com",
    projectId: "kwitterbyakshaj-965bc",
    storageBucket: "kwitterbyakshaj-965bc.appspot.com",
    messagingSenderId: "416351931734",
    appId: "1:416351931734:web:d0bbc791c8b2d8193c9af7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name  = localStorage.getItem("room_name")

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    
}