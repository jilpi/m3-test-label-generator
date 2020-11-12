// URL example: label-generator.html?booking=201108-ABCDEFG&site=Chêne&service-type=COV19-RAPID&firstname=John&lastname=Doe&sex=M&dob=01-JAN-2000&avs=0123456789&tel=+41.12345678&email=john.doe@m-3sanitrade.ch

const queryString = window.location.search;
console.info(`- Querystring: ${queryString}`);

const urlParams = new URLSearchParams(queryString);


const paramlist = [
    "code",
    "site_name",
    "service_type",
    "firstname",
    "lastname",
    "dob",
    "gender",
    "avs",
    "mobile",
    "email"
];

paramlist.forEach ((param)=>{
    if (urlParams.has(param))
        document.getElementsByTagName(`lbl-${param}`)[0].innerHTML=urlParams.get(param);
})

document.getElementById('qrcode').innerText = urlParams.get('code');

const autoprint = urlParams.has('autoprint');
