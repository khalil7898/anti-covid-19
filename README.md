# anti-covid-19
web app based application created in purpose to protect you from covid-19 infection.


## API Documentation:
(*) need authentification!!
### Index 
[GET] BASE_URI
[GET] BASE_URI/api
### Admin
*[GET]  BASE_URI/api/admin 
[POST]  BASE_URI/api/admin/login
body{
    email,
    password
}
[POST]  BASE_URI/api/admin/register
body{
    name,
    email,
    cin,
    password,
    dateNaiss,
    telephone
}
### Hospital
[GET] BASE_URI/api/hospitals
*[PUT] BASE_URI/api/hospitals
body{
    nom,
    telephone,
    adress: {
        nom,
        longitude,
        latitude
    },
    capaciteTotal,
    capaciteCorona,
    capaciteRea,
    reacharger,
    totalCharger,
    coronaCharger,
    state,
}
*[DELETE] BASE_URI/api/hospitals
body{
    id
}
