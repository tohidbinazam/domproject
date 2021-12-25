const row = document.querySelector('.row');


devs_data.map((data) => {
    row.innerHTML += `
     <div class="col-xl-4">
        <div class="dev_team">
            <img src="${data.img}" alt="">
            <h2 class="name">${data.name}</h2>
            <h3 class="skill">${data.Skill}</h3>
            <h3 class="address">${data.address}</h3>
            <p>Hello, consectetur adipisicing elit. Sapiente quaerat architecto incidunt perspiciatis odio molestiae repudiandae optio laborum officia necessitatibus?</p>
        </div>
     </div>
    `
});



