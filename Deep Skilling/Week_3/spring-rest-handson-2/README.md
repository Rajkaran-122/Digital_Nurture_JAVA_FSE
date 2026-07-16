# Spring REST Hands-on 2

**Completed by:** Rajkaran

---

# Hands-on Objectives Completed

This application demonstrates HTTP request-response basics, RESTful web service development using Spring Boot, XML bean loading, path variable handling, exception handling, and MockMvc testing.

---

# Hands-on 1: HTTP Request and Response

I studied the HTTP request and response format.

A request contains:

* HTTP Method
* Resource Path
* HTTP Version
* Headers
* Optional Request Body

A response contains:

* HTTP Version
* Status Code
* Response Message
* Headers
* Response Body

Important examples:

* Request Method: `GET`
* Resource URL: `/hello`
* Content Type: `application/json`, `text/plain`
* Status Codes: `200 OK`, `404 Not Found`

---

# Hands-on 2: Hello World RESTful Web Service

Created `HelloController` with a GET endpoint.

### Endpoint

```text
GET http://localhost:8083/hello
```

### Response

```text
Hello World!!
```

### Class Used

```text
controller.com.cognizant.springlearn.HelloController
```

### Method Used

```text
sayHello()
```

### Postman Output

*Screenshot demonstrating the successful execution and response of this endpoint.*

![Hello API](../postman_output/hello_world_get.png)

---

# Hands-on 3: REST Country Web Service

Created `CountryController` and loaded India country details from `country.xml`.

### Endpoint

```text
GET http://localhost:8083/country
```

### Response

```json
{
  "code": "IN",
  "name": "India"
}
```

### Postman Output

*Screenshot demonstrating the successful execution and response of this endpoint.*

![Country API](../postman_output/country_get_india.png)

---

# Hands-on 4: REST Get All Countries

Created an endpoint to return all countries from XML configuration.

### Endpoint

```text
GET http://localhost:8083/countries
```

### Response

```json
[
  { "code": "IN", "name": "India" },
  { "code": "US", "name": "United States" },
  { "code": "JP", "name": "Japan" },
  { "code": "DE", "name": "Germany" }
]
```

### Postman Output

*Screenshot demonstrating the successful execution and response of this endpoint.*

![All Countries API](../postman_output/countries_get_all.png)

---

# Hands-on 5: REST Get Country Based on Country Code

Created a REST endpoint to get country details using country code.

The country code matching is case-insensitive.

### Endpoint

```text
GET http://localhost:8083/country/in
```

### Response

```json
{
  "code": "IN",
  "name": "India"
}
```

Also supported:

```text
GET http://localhost:8083/countries/in
```

### Postman Output

*Screenshot demonstrating the successful execution and response of this endpoint.*

![Country By Code API](../postman_output/country_get_by_code.png)

---

# Hands-on 6: REST Country Exceptional Scenario

Created `CountryNotFoundException` for invalid country code.

### Endpoint

```text
GET http://localhost:8083/country/az
```

### Response Status

```text
404 Not Found
```

### Reason

```text
Country not found
```

### Exception Class

```text
springlearn.service.exception.CountryNotFoundException
```

### Postman Output

*Screenshot demonstrating the 404 Not Found error (CountryNotFoundException).*

![Country Exception API](../postman_output/country_not_found_exception.png)

---

# Hands-on 7: MockMvc Test Get Country Service

Created MockMvc test cases in `SpringLearnApplicationTests`.

Tests included:

* Check whether `CountryController` is loaded
* Check whether `HelloController` is loaded
* Test `/hello`
* Test `/country`
* Test `/countries`
* Test `/country/in`
* Test `/country/az` exceptional scenario

---

Application runs on:

```text
http://localhost:8083
```

---

# API List

| Method | URL                 | Description                   |
| ------ | ------------------- | ----------------------------- |
| GET    | `/hello`            | Returns Hello World text      |
| GET    | `/country`          | Returns India country details |
| GET    | `/countries`        | Returns all countries         |
| GET    | `/country/{code}`   | Returns country by code       |
| GET    | `/countries/{code}` | Returns country by code       |

---

# Technologies Used

* Spring Boot 3
* Spring Web
* Lombok Builder Pattern
* Lombok SLF4J Logger
* XML Bean Configuration
* REST Controller
* Service Layer
* MockMvc Testing




