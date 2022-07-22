// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
            return response.json();
        }).then((json) => {
            const container = document.getElementById("container");
            // let index = 0;
            let astronautHTML ="";
            for (astronaut of json){
                console.log(astronaut);
                astronautHTML += `
                <div class="astronaut">
   <div class="bio">
      <h3>${astronaut.firstName}, ${astronaut.lastName}</h3>
      <ul>
         <li>Hours in space: ${astronaut.hoursInSpace}</li>
         <li>Active: ${astronaut.active}</li>
         <li>Skills: ${astronaut.skills}</li>
      </ul>
   </div>
   <img class="avatar" src=${astronaut.picture}>
</div>`;
            }
            container.innerHTML = astronautHTML;
        });
    });
            // console.log(index)
            // function name(){
            //       let name = (`Name: ${json[index].firstName} ${json[index].lastName}`);
            //       return(name)};
            //       console.log(name())
            //       container.addEventListener("load", function name() {
            //         let name = (`Name: ${json[index].firstName} ${json[index].lastName}`)
            //         return (name)})
            //         container.innerHTML = `
            //         <div class="astronaut">
            //             <h3>Name: ${json[0].firstName}, ${json[0].lastName}</h3>
            //             <ul>
            //             <li>Hours in space: ${json[0].hoursInSpace}</li>
            //             <li>Active: ${json[1].active}</li>
            //             </ul>

            //         </div>`;

                //   })
                // });
                // });
// let index = i
// destination.addEventListener("click", function() {
// // destination.innerHTML = `
// // <div>
// //     <h3>Planet ${json[index].name}</h3>
// //     <img src=${json[index].image} height=250></img>
// //     </div>
// (index + 1) % json.length;
// });
// //     index = 
// });
// });
// //  });