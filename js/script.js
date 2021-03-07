// dichiaro le variabili
var calculate = document.getElementById('calculate');
var nameBurger = document.getElementById('burger_input');
var ingredients = document.getElementsByClassName('add_ingr');
var coupon = document.getElementById('input_coupon');
var tot = document.getElementById('tot');

// array con coupon che possono essere accettati
var listaCoupon = ["gennaio19", "febbraio20", "marzo21"];

// aggiungo la funzione con evento al bottone
calculate.addEventListener("click", function() {
    var somma = 50;

    if (nameBurger.value != "") {
      for (var i = 0; i < ingredients.length; i++) {
       if(ingredients[i].checked) {
       somma = somma + parseInt(ingredients[i].value);
      }
    }
  } else {
    alert("Inserisci un nome di un panino!")
  }

  // applico lo sconto se inserito
  if (listaCoupon.includes(coupon.value)){
    somma = somma - 0.2;
  }

  // stampo il totale
  tot.innerHTML = somma.toFixed(2) + "€";
 }
);
