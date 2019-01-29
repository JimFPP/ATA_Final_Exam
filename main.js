var products = [
  { name: "Bed", price: 225.0 },
  { name: "Bench", price: 29.99 },
  { name: "Chair", price: 9.99 },
  { name: "Couch", price: 50.0 },
  { name: "Pillow", price: 5.0 }
];


function* Datos() {
  yield* products;
}


var sCart = [];

let d = Datos();
var record = d.next();

var idCounter = 1
var p_quantity = 0
var Final_amount = 0


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

    RowContent(CurID)

    exampleModalLabel.innerText = RowContent(CurID)[0]
    Price.innerText = RowContent(CurID)[1]

    $('#ShoppingCart').modal('toggle')


    console.log(CurID)
}


function RowContent(i){

var info = []

var CurrentRow = document.getElementsByTagName('tr')[i]

var P_name = CurrentRow.getElementsByTagName('td')[0].innerHTML
var P_price = CurrentRow.getElementsByTagName('td')[1].innerHTML

info.push(P_name,P_price)

return info
}


function test(){

   var t = document.getElementsByTagName('tr')[2]
   

    var a = 1 + parseInt(t.getElementsByTagName('td')[1].innerHTML)

    console.log(a)

}

function add(){

    var quantity = parseInt(Amount.placeholder)

    quantity = quantity + 1
    
    Amount.placeholder = quantity

    var Total = parseInt(Amount.placeholder) * parseInt(Price.innerText)
    
    P_total_amount.innerText = Total
}

function remove(){ 

    var quantity = parseInt(Amount.placeholder)

    quantity = quantity - 1

    if (quantity < 0){
        quantity = 0
    }

    Amount.placeholder = quantity

    var Total = parseInt(Amount.placeholder) * parseInt(Price.innerText)

    P_total_amount.innerText = Total
      
}

function CleanFields(){
    Amount.placeholder = 0
    P_total_amount.innerText = 0
}

function UpdateCart(){

    // if(parseInt(Amount.placeholder) < 0){
    Final_amount = Final_amount + parseInt(P_total.innerText)
    console.log(Final_amount)



    sCart.push({name: exampleModalLabel.innerText,price: Price.innerText, amount: Amount.placeholder, total: P_total_amount.innerText})

   CleanFields()

   console.log(sCart)

}


function ShoppingCartInfo(){
   

    var l = sCart;

    console.log(sCart)

    for (i=0;i <= (sCart.length-1);i++) {
        console.log(i)
    //   if (!CartRecord.done) {
        // scores.push(record.value.score);
  
        var tbl = document.getElementById("body"); // table reference
        row = tbl.insertRow(-1); // append table row
  
        // console.log(CartRecord.value.score);
  
        T_name = row.insertCell();
        T_price = row.insertCell();
        T_amount = row.insertCell();
        T_total = row.insertCell();
        // T_score = row.insertCell();
        // var choice = document.createElement("button");
        // choice.innerText = "Add to Cart";
        // choice.id = idCounter
        // choice.addEventListener('click', press)
  
        T_name.innerText = sCart[i].name;
        T_price.innerText = sCart[i].price;
        T_amount.innerText = sCart[i].amount;
        T_total.innerText = sCart[i].total;

        // T_choice.append(choice);
  
  
        // CartRecord = c.next();
        //   idCounter += 1
  
      }
    

  }