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
let tavoloVipIterated = tavoloVip.map((e, index)=>{
    return {
        nomeTavolo: "Tavolo VIP",
        nomeOspite: e,
        posto: index + 1,
      }
})
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
        Name: "Piero della Francesca" ,
        Grades: 50,
    },
    {
        Id: 120,
        Name: "Francesca da Polenta",
        Grades: 84,
    },
];

const list1 = students.map((e)=>{
    return e.Name.toUpperCase();
})
console.log(list1);

const list2 = students.filter((e)=>{
    return e.Grades > 70;
})
console.log(list2);

const list3 = students.filter((e)=>{
    return e.Grades > 70 && e.Id > 120;
})
console.log(list3);
         
   	      
            
   	 
    
      