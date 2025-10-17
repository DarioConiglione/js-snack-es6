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



// Array di oggetti "squadre"
const teams = [
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 },
  { nome: "Roma", punti: 0, falliSubiti: 0 },
  { nome: "Lazio", punti: 0, falliSubiti: 0 },
  { nome: "Atalanta", punti: 0, falliSubiti: 0 },
  { nome: "Fiorentina", punti: 0, falliSubiti: 0 },
  { nome: "Torino", punti: 0, falliSubiti: 0 },
  { nome: "Bologna", punti: 0, falliSubiti: 0 }
];


for (let i = 0; i < teams.length; i++) {

    let team = teams[i];

    teams[i].punti = Math.floor(Math.random() * 100);
    teams[i].falliSubiti = Math.floor(Math.random() * 10);    

};

const nameFouls = []

nameFouls.push(teams[i].nome);
nameFouls.push(teams[i].falliSubiti);

console.log(nameFouls);
