var url = "http://127.0.0.1:5000/view";
var id = "view";

async function generator(url, id) {
    var request = await new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
view(data, request, id);

}

request.send()
  }

  function view(data, request, id){
      if(id == "view"){
    if (request.status >= 200 && request.status < 400) {
         data.forEach((query) => {
          console.log(request.status);
          var div = document.createElement("tr");
            var mainContainer = document.getElementById(id);
          div.innerHTML = "<td>"+query.id+"</td><td><input id='name"+query.id+"' placeholder='"+query.name+"' value='"+query.name+"'/></td><td><input id='email"+query.id+"' placeholder='"+query.email+"' value='"+query.email+"'/></td><td><input id='address"+query.id+"' placeholder='"+query.address+"' value='"+query.address+"'/><td><input id='phonenumber"+query.id+"' placeholder='"+query.phonenumber+"' value='"+query.phonenumber+"'/><td><input id='ime"+query.id+"' placeholder='"+query.ime+"' value='"+query.ime+"'/><td><input id='buy"+query.id+"' placeholder='"+query.buy+"' value='"+query.buy+"'/><td><input id='phonetype"+query.id+"' placeholder='"+query.phonetype+"' value='"+query.phonetype+"'/><td><input id='date"+query.id+"' placeholder='"+query.date+"' value='"+query.date+"'/></td>"+"<button onclick = 'deleterecord("+query.id+")' type = 'submit' value='Submit'>Delete</button>"+"<button onclick = 'update("+query.id+")'>Update</button>" ;
          mainContainer.appendChild(div)
        })
      } else {
        console.log('error')
      }}
  }

async function generate_html(){
await generator(url, id);
}

function deleterecord(id){
  const data = JSON.stringify({
    id: parseInt(id)
  });

  navigator.sendBeacon('http://127.0.0.1:5000/deleterecord/', data);
  console.log(data);
}
function update(id){
  const data = JSON.stringify({
    id: id,
    name: document.getElementById("name"+id).value,
    email: document.getElementById("email"+id).value,
    address:document.getElementById("address"+id).value,
    phonenumber:document.getElementById("phonenumber"+id).value,
    ime:document.getElementById("ime"+id).value,
    buy:document.getElementById("buy"+id).value,
    phonetype:document.getElementById("phonetype"+id).value,
    date:document.getElementById("date"+id).value
  });
  
  navigator.sendBeacon('http://127.0.0.1:5000/updatedetails/', data);
  console.log(data);
}

generate_html();
