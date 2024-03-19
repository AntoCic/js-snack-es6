console.log("- START -");
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
let tavoloVipIterated = [];
tavoloVip.forEach((e, index) => {
  tavoloVipIterated.push({
    nomeTavolo: "Tavolo VIP",
    nomeOspite: e,
    posto: index + 1,
  });
});
console.log(tavoloVipIterated);
