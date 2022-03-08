function sendPost(){
    const data = JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address:document.getElementById("address").value,
        phonenumber:document.getElementById("phonenumber").value,
        ime:document.getElementById("ime").value,
        buy:document.getElementById("buy").value,
        phonetype:document.getElementById("phonetype").value,
        date:document.getElementById("date").value
      });

      navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
      console.log(data);
    }

