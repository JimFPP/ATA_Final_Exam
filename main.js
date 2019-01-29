// function Add(){

//     var item = document.createElement('li')
//     item.id = 'i'
//     var ref = document.createElement('a')
//     ref.href = '#'
//     ref.innerText = 'j'

//     item.append(ref)

//     breadcrumb.append(item)
// }

// function Rem(){

// document.getElementById('i').remove()
// }

var products = [
  { name: "bed", price: 225.0 },
  { name: "bench", price: 29.99 },
  { name: "chair", price: 9.99 },
  { name: "couch", price: 50.0 },
  { name: "pillow", price: 5.0 }
];

function* Datos() {
  yield* products;
}

let d = Datos();
var record = d.next();

var idCounter = 1

function ProductsInfo() {
  for (i of products) {
    if (!record.done) {
      // scores.push(record.value.score);

      var tbl = document.getElementById("body"); // table reference
      row = tbl.insertRow(-1); // append table row



      console.log(record.value.score);

      T_name = row.insertCell();
      T_price = row.insertCell();
      T_choice = row.insertCell();
      // T_score = row.insertCell();
      var choice = document.createElement("button");
      choice.innerText = "Add to Cart";
      choice.id = idCounter
      choice.addEventListener('click', press)

      T_name.innerText = record.value.name;
      T_price.innerText = record.value.price;
      T_choice.append(choice);


      record = d.next();
        idCounter += 1

    }
  }
}

function press(evt){
    var CurID = evt.target.id

    $('#ShoppingCart').modal('toggle')
    console.log(CurID)
}



function test(){

   var t = document.getElementsByTagName('tr')[2].innerHTML
   

    console.log(document.getElementById('1').id)

}