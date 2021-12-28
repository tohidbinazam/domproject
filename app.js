const js_dvs = document.querySelector('.js_dvs');
const js_student = document.querySelector('.js_student');
const js_number = document.querySelector('table tbody');


for( let i = 0;  i < 6 ; i++) {
    js_dvs.innerHTML += `
    <div class="col-xl-4">
        <div class="dev_team">
            <img src="${devs_stu_phone_data[i].img}" alt="">
            <h2 class="name">${devs_stu_phone_data[i].name}</h2>
            <h3 class="skill">${devs_stu_phone_data[i].Skill}</h3>
            <h3 class="address">${devs_stu_phone_data[i].address}</h3>
            <p>Hello there, My name is ${devs_stu_phone_data[i].name}. I am a ${devs_stu_phone_data[i].Skill} developer form ${devs_stu_phone_data[i].address}. Now i read in class ${devs_stu_phone_data[i].class} and i am ${devs_stu_phone_data[i].age} years old. My last exam result is CGPA ${devs_stu_phone_data[i].cgpa}. At last my contact number is +880${devs_stu_phone_data[i].number}</p>
        </div>
    </div>
    `
};


devs_stu_phone_data.map((data) => {
    js_student.innerHTML += `
    <div class="col-xl-3">
        <div class="student">
            <img src="${data.img}" alt="">
            <h3 class="name">Name: ${data.name}</h3>
            <h3 class="age">Age: ${data.age}</h3>
            <h3 class="class">Class: ${data.class}</h3>
            <h3 class="result">CGPA : ${data.cgpa}</h3>
        </div>
    </div>
    `
})

devs_stu_phone_data.map((data, index) => {
    js_number.innerHTML += `
    <tr>
        <th>${index + 1}</th>
        <td>${data.name}</td>
        <td>+880${data.number}</td>
        <td><img class="table_img" src="${data.img}" alt=""></td>
    </tr>
    `
})



