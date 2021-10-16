//function
function bodyload() {
  //fetching Details from Nasa Api

  fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=HqJyw9hK19nHWYuM2mUL31eZJITsaiSRcV2v9UIo")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var item of data.photos) {
        var box = document.getElementById("box");
        var divbx = document.createElement("div");
        divbx.classList.add("image-box");

        //   append Child

        divbx.innerHTML = `
                   <img src="${item.img_src}" alt="Mars" />
                    <div class="overlay">
                   <div class="details">
                   <h3 class="title">
                          <a href="#">${item.camera.full_name}</a>
                    </h3>
                         <table class="table">
                    <tr>
                    <td>Id</td>
                    <th scope="row">${item.id}</th>
                    </tr>
                  <tr>
                    <td>Date</td>
                      <th scope="row">${item.earth_date}</th>
                          </tr>
                          <tr>
                          <td>Rover</td>
                          <th scope="row">${item.rover.name}</th>
                          </tr>
                           </table>
                   </div>
                     </div> `;

        box.appendChild(divbx);
      }
    });
}
