// Array di oggetti

const bikes = [
  { nome: "Bianchi Sprint", peso: 7.8 },
  { nome: "Trek Emonda", peso: 7.2 },
  { nome: "Specialized Tarmac", peso: 6.9 },
  { nome: "Canyon Ultimate", peso: 7.0 },
  { nome: "Pinarello Dogma", peso: 7.4 },
  { nome: "Scott Addict", peso: 7.1 },
  { nome: "Wilier Zero", peso: 7.5 },
  { nome: "Colnago V3RS", peso: 6.8 },
  { nome: "Giant TCR", peso: 7.3 },
  { nome: "Cannondale SuperSix", peso: 7.6 }
];

let lightBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    let bike = bikes[i];
    
    if (lightBike.peso > bike.peso) {
        lightBike = bike;
    }

};

console.log(lightBike);

const biciclettaEL = document.getElementById("bicicletta");
biciclettaEL.innerText= "La bicicletta con il peso minore è " + lightBike.nome;



