/*
<div class="person">
  <h2>Abdulsamii Ajala</h2>
  <p>Programmer lati Ilorin</p>
  <p><b>Gender:</b> Male</p>
</div>
*/

const persons = [
    {
      fullName: "Abdulsamii Ajala",
      desc: "Programmer lati Ilorin",
      gender: "Male"
    },
    {
      fullName: "Salami Abayomi",
      desc: "Programmer lati Ilorin",
      gender: "Male"
    },
    {
      fullName: "Ganiyu Tunbosun",
      desc: "Programmer lati Ilorin",
      gender: "Female"
    },
    {
      fullName: "Abdulsamii Ajala",
      desc: "Programmer lati Ilorin",
      gender: "Male"
    },
    {
      fullName: "Salami Abayomi",
      desc: "Programmer lati Ilorin",
      gender: "Male"
    },
    {
      fullName: "Ganiyu Tunbosun",
      desc: "Programmer lati Ilorin",
      gender: "Female"
    }
  ];
  
  let peopleEl = document.querySelector(".people");
  peopleEl.innerHTML = persons
    .map(
      (person) => `
    <div class="person">
      <h2>${person.fullName}</h2>
      <p>${person.desc}</p>
      <p><b>Gender:</b> ${person.gender}</p>
    </div>
  `
    )
    .join("\n");
    
  // const peopleEl = document.querySelector(".people");
  // for (let i = 0; i < people.length; i++) {
  //   const person = people[i];
  //   peopleEl.innerHTML += `
  //   <div class="person">
  //     <h2>${person.fullName}</h2>
  //     <p>${person.desc}</p>
  //     <p><b>Gender:</b> ${person.gender}</p>
  //   </div>
  //   `;
  // }
  // people.forEach((person) => {
  //   peopleEl.innerHTML += `
  //   <div class="person">
  //     <h2>${person.fullName}</h2>
  //     <p>${person.desc}</p>
  //     <p><b>Gender:</b> ${person.gender}</p>
  //   </div>
  //   `;
  // });
  