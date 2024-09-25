let data = {
    name : "Sarvesh Kumar",
    email : "sarvesh0955"
}

// console.log(data)
// //convert to json
// console.log(JSON.stringify(data))

// let incomingdata = fetch('api')
// //convert to object
// JSON.parse(incomingdata); 
 
//fetch

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

  const loadStarWarsPeople = async () => {
    try {
      const res = await fetch("https://swapi.dev/api/people/1/");
      const data = await res.json();
      console.log(data);
      const res2 = await fetch("https://swapi.dev/api/people/2/");
      const data2 = await res2.json();
      console.log(data2);
    } catch (e) {
      console.log("ERROR!!!", e);
    }
  };
  
  // loadStarWarsPeople();


//axios
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    //saves one line of adding .json 
    //automatically parses data
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
