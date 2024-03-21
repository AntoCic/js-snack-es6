console.log("- START -");
// SNACK 1
const tavoloVip = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];
let tavoloVipIterated = tavoloVip.map((e, index) => {
  return {
    nomeTavolo: "Tavolo VIP",
    nomeOspite: e,
    posto: index + 1,
  };
});
console.log(tavoloVipIterated);

// SNACK 2
const students = [
  {
    Id: 213,
    Name: "Marco della Rovere",
    Grades: 78,
  },
  {
    Id: 110,
    Name: "Paola Cortellessa",
    Grades: 96,
  },
  {
    Id: 250,
    Name: "Andrea Mantegna",
    Grades: 48,
  },
  {
    Id: 145,
    Name: "Gaia Borromini",
    Grades: 74,
  },
  {
    Id: 196,
    Name: "Luigi Grimaldello",
    Grades: 68,
  },
  {
    Id: 102,
    Name: "Piero della Francesca",
    Grades: 50,
  },
  {
    Id: 120,
    Name: "Francesca da Polenta",
    Grades: 84,
  },
];

const list1 = students.map((e) => {
  return e.Name.toUpperCase();
});
console.log(list1);

const list2 = students.filter((e) => {
  return e.Grades > 70;
});
console.log(list2);

const list3 = students.filter((e) => {
  return e.Grades > 70 && e.Id > 120;
});
console.log(list3);

// SNACK 3
const listaBici = [
  {
    name: "atala",
    weight: 6.9,
  },
  {
    name: "atala1",
    weight: 5.6,
  },
  {
    name: "atala2",
    weight: 8.6,
  },
  {
    name: "atala3",
    weight: 7.3,
  },
  {
    name: "atala4",
    weight: 5.5,
  },
];

function biciLeggera(listaBici) {
  let x = {};
  listaBici.forEach((e, i) => {
    if (i === 0) {
      x = e;
    } else if (e.weight < x.weight) {
      x = e;
    }
  });
  return x;
}
const { name, weight } = biciLeggera(listaBici);
console.log(`La bici piu leggera è ${name} con un peso di ${weight}kg`);

// SNACK 4
const team = [
  {
    name: "Antonino",
    points: 0,
    fouls: 0,
  },
  {
    name: "Franco",
    points: 0,
    fouls: 0,
  },
  {
    name: "Luigi",
    points: 0,
    fouls: 0,
  },
  {
    name: "Mario",
    points: 0,
    fouls: 0,
  },
  {
    name: "Giovannini",
    points: 0,
    fouls: 0,
  },
];
const teamParse = team.map((e) => {
  return {
    name : e.name, 
    points : e.points = getRandomNum(), 
    fouls : e.fouls = getRandomNum()};
});
console.log(teamParse);

function getRandomNum(max = 20) {
  const n = Math.round(Math.random() * (max - 1));
  return n;
}
teamParse.forEach((e) => {
  const { name, fouls } = e;
  console.log(name, fouls);
})
