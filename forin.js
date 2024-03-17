let obj ={student:"leedongkyu",id:2020271186};
let copyobj = {};

for (const key in obj) {
    copyobj[key] = obj[key];

}

console.log(copyobj);