export const m = {
  Id: "",
  Code: "",
  User: "",
  Value: "",
  Date: ""
};

export const all = [
  {
    Id: "3a89aa34-8550-4422-953e-d362410e85b1",
    Code: "988929075339881",
    User: "Marion Fry",
    Value: "R$ 369,25",
    Date: "30/05/2019"
  },
  {
    Id: "63f02dbb-7155-45e7-a9d0-fb9618265a12",
    Code: "986028205720995",
    User: "Calhoun Winters",
    Value: "R$ 235,95",
    Date: "22/10/2018"
  },
  {
    Id: "6a9a3cab-1bad-4fee-896d-f9ed7842dd29",
    Code: "990616473082018",
    User: "Mitchell Dillard",
    Value: "R$ 477,59",
    Date: "24/05/2019"
  },
  {
    Id: "70ba291a-6142-480d-9673-a47ade779322",
    Code: "987388458395261",
    User: "Annabelle Harvey",
    Value: "R$ 311,93",
    Date: "18/01/2019"
  },
  {
    Id: "55ac1ff3-4184-45cc-a102-592c2044492f",
    Code: "993651898918350",
    User: "Aileen Santos",
    Value: "R$ 251,37",
    Date: "15/08/2018"
  },
  {
    Id: "95effac5-2b6c-4bac-86b2-ddbdf8440c69",
    Code: "992736525276549",
    User: "Scott Jones",
    Value: "R$ 221,74",
    Date: "02/08/2018"
  },
  {
    Id: "455c25ce-aae4-42d1-bf0f-85b3e52b4e1b",
    Code: "992534753162745",
    User: "Lynnette Dejesus",
    Value: "R$ 447,43",
    Date: "28/11/2018"
  }
];

// [
//   '{{repeat(5, 7)}}',
//   {
//     Id: "{{guid()}}",
//     Code: function(tags) {
//         return ("9" + tags.integer(8500000, 9999000) + tags.integer(1829000, 9998000)).toString();
//     },
//     User: "{{firstName()}} {{surname()}}",
//     Value: "R$ {{integer(200, 500)}},{{integer(0, 99)}}",
//     Date: '{{date(new Date(2018, 5, 1), new Date(), "dd/MM/YYYY")}}'
//   }
// ]
