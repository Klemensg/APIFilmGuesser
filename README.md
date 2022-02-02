# HOW TO USE
=
### Get the list of all films
``GET /films/``

return 
``
{
    "id": integer,
    "nom": String,
    "country_id": integer,
    "iddb": integer
}
``

### Get one film
``GET /film?id={id}``

return 
``
{
    "id": integer,
    "nom": String,
    "country_id": integer,
    "iddb": integer
}
``