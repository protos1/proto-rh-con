export const currentUser = {
  Id: "a199jshehgrhfkjmdmdmdk12",
  UserName: "renan-zozimo",
  Photo: null,
  FirstName: "Renan",
  LastName: "Zózimo",
  Email: "renan.zozimo@s1.com.br",
  FullUserName: "Renan Zózimo",
  PhoneNumber: "3198765412",
  CPF: "084.199.045-70",
  Name: "Renan Zózimo",
  Matricula: "12345619910"
};

export const all = [];

export const m = {
  UserName: "",
  Photo: "",
  FirstName: "",
  LastName: "",
  Email: "",
  FullUserName: "",
  PhoneNumber: "",
  DocumentType: "",
  DocumentNumber: "",
  Name: "",
  Matricula: "",
  Password: ""
};

export const ImportedUsers = [
  {
    Id: "fb3e6b78-7477-4a93-bbdc-b9cf37d1d049",
    Photo: "",
    FirstName: "Vonda",
    LastName: "Gould",
    Email: "vondagould@sequitur.com",
    FullUserName: "Vonda Gould",
    PhoneNumber: "31990907746",
    DocumentType: "CNH",
    DocumentNumber: "'38335731214'",
    Name: "Vonda Gould",
    Password: "fugiat321",
    UserName: "vondagould"
  },
  {
    Id: "7cb7b067-22b6-4b2a-8def-316b8faf4143",
    Photo: "",
    FirstName: "Adeline",
    LastName: "Owens",
    Email: "adelineowens@sequitur.com",
    FullUserName: "Adeline Owens",
    PhoneNumber: "31991652839",
    DocumentType: "CPF",
    DocumentNumber: "'36208463407'",
    Name: "Adeline Owens",
    Password: "dolore234",
    UserName: "adelineowens"
  },
  {
    Id: "dd6fd245-180e-4272-b09e-25c96de28961",
    Photo: "",
    FirstName: "Hendrix",
    LastName: "Spence",
    Email: "hendrixspence@sequitur.com",
    FullUserName: "Hendrix Spence",
    PhoneNumber: "31995205918",
    DocumentType: "RG",
    DocumentNumber: "'44684893035'",
    Name: "Hendrix Spence",
    Password: "pariatur641",
    UserName: "hendrixspence"
  },
  {
    Id: "c296fe3c-f51c-4fa8-ae82-d39bb3a803c9",
    Photo: "",
    FirstName: "Flowers",
    LastName: "Dickson",
    Email: "flowersdickson@sequitur.com",
    FullUserName: "Flowers Dickson",
    PhoneNumber: "31993775580",
    DocumentType: "RG",
    DocumentNumber: "'83286497824'",
    Name: "Flowers Dickson",
    Password: "non785",
    UserName: "flowersdickson"
  },
  {
    Id: "bcc970c3-0c20-4d38-b407-ecff2885abc4",
    Photo: "",
    FirstName: "Mccall",
    LastName: "Vance",
    Email: "mccallvance@sequitur.com",
    FullUserName: "Mccall Vance",
    PhoneNumber: "31987985340",
    DocumentType: "CPF",
    DocumentNumber: "'19472113837'",
    Name: "Mccall Vance",
    Password: "dolore320",
    UserName: "mccallvance"
  },
  {
    Id: "ead02701-299a-4f92-beaf-8eccb95d85f4",
    Photo: "",
    FirstName: "Aileen",
    LastName: "Burks",
    Email: "aileenburks@sequitur.com",
    FullUserName: "Aileen Burks",
    PhoneNumber: "31990768425",
    DocumentType: "CNH",
    DocumentNumber: "'77621004462'",
    Name: "Aileen Burks",
    Password: "esse263",
    UserName: "aileenburks"
  },
  {
    Id: "9ca162ae-a9cd-4f51-a585-c3335d6dda74",
    Photo: "",
    FirstName: "Casandra",
    LastName: "Lopez",
    Email: "casandralopez@sequitur.com",
    FullUserName: "Casandra Lopez",
    PhoneNumber: "31995135730",
    DocumentType: "RG",
    DocumentNumber: "'56445615951'",
    Name: "Casandra Lopez",
    Password: "exercitation989",
    UserName: "casandralopez"
  },
  {
    Id: "bf24138b-4d2c-4d79-a162-37c9dae097d9",
    Photo: "",
    FirstName: "Gibson",
    LastName: "Mooney",
    Email: "gibsonmooney@sequitur.com",
    FullUserName: "Gibson Mooney",
    PhoneNumber: "31998662139",
    DocumentType: "CPF",
    DocumentNumber: "'54876920978'",
    Name: "Gibson Mooney",
    Password: "incididunt773",
    UserName: "gibsonmooney"
  },
  {
    Id: "f51cd057-1f3e-4c0a-b7c8-ff138ad9378f",
    Photo: "",
    FirstName: "Schneider",
    LastName: "Ratliff",
    Email: "schneiderratliff@sequitur.com",
    FullUserName: "Schneider Ratliff",
    PhoneNumber: "31998607059",
    DocumentType: "CPF",
    DocumentNumber: "'96373336726'",
    Name: "Schneider Ratliff",
    Password: "ipsum500",
    UserName: "schneiderratliff"
  },
  {
    Id: "874bc356-4ad6-47b7-beb8-3f78970ee753",
    Photo: "",
    FirstName: "Cabrera",
    LastName: "Blackwell",
    Email: "cabrerablackwell@sequitur.com",
    FullUserName: "Cabrera Blackwell",
    PhoneNumber: "31992436749",
    DocumentType: "CNH",
    DocumentNumber: "'94790538900'",
    Name: "Cabrera Blackwell",
    Password: "nostrud515",
    UserName: "cabrerablackwell"
  }
];

// [
//   '{{repeat(10, 10)}}',
//   {
//     Id: "{{guid()}}",
//     Photo: "",
//     FirstName: "{{firstName()}}",
//     LastName: "{{surname()}}",
//     Email: "{{email()}}",
//     FullUserName: function() {
// 		return this.FirstName + " " + this.LastName;
//     },
//     PhoneNumber: function(tags) {
//         return ("319"+ tags.integer(8500, 9999) + tags.integer(1829, 9998)).toString();
//     },
//     DocumentType: "{{random('CPF', 'RG', 'CNH')}}",
//     DocumentNumber: "'{{integer(00000000000, 99999999999)}}'",
//     Name: function() {
// 		return this.FirstName + " " + this.LastName;
//     },
//     Password: "{{lorem(1, 'words')}}{{integer(000, 999)}}",
//     UserName: function() {
// 		return this.Name.toLowerCase()
//         .replace(/[|&;$%@"<>()+,\s]/g, "")
//         .replace(/[áàâã]/g, "a")
//         .replace(/[éèê]/g, "e")
//         .replace(/[íï]/g, "i")
//         .replace(/[óôõö]/g, "o")
//         .replace(/[ú]/g, "u")
//         .replace(/[ç]/g, "c")
//         .replace(/[ñ]/g, "n");
//     }
//   }
// ]
