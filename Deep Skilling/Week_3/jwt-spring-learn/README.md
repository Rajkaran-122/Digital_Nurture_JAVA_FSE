# JWT Hands-on

Completed by: Rajkaran
**Package:** `com.cognizant.springlearn`
**Application:** `jwt-spring-learn`

This project implements the JWT authentication hands-on using Spring Boot 3, Spring Security, Lombok, Spring Web, DevTools, and JJWT.

---

# Hands-on Covered

1. Securing RESTful web services with Spring Security
2. Creating users and roles in Spring Security
3. Understanding Basic Authentication limitations
4. Creating authentication service that returns JWT
5. Reading and decoding the Authorization header
6. Generating JWT token
7. Authorizing API requests using JWT Bearer token
8. Securing `/countries` API using JWT filter

---

# Screenshots

## Project Structure

![Project Structure](../postman_output/jwt_project_structure.png)

---

## Spring Boot Startup

![Application Startup](../postman_output/jwt_application_startup.png)

---

## Access Protected API Without Authentication (401 Unauthorized)

**GET**

```text
http://localhost:8090/countries
```

![Unauthorized](../postman_output/jwt_unauthorized_no_auth.png)

---

## Access Countries using USER Credentials

**GET**

```text
http://localhost:8090/countries
```

Authorization:

```text
Basic Auth

Username : user
Password : pwd
```

![USER Access](../postman_output/jwt_basic_auth_user_success.png)

---

## Access Countries using ADMIN Credentials

**GET**

```text
http://localhost:8090/countries
```

Authorization:

```text
Basic Auth

Username : admin
Password : pwd
```

Expected:

```text
403 Forbidden
```

![ADMIN Forbidden](../postman_output/jwt_basic_auth_admin_forbidden.png)

---

## Generate JWT Token

**GET**

```text
http://localhost:8090/authenticate
```

Authorization:

```text
Basic Auth

Username : user
Password : pwd
```

Expected Response

```json
{
  "token": "GENERATED_JWT_TOKEN"
}
```

![Generated JWT](../postman_output/jwt_generate_token.png)

---

## Decode JWT Token using jwt.io

Open:

```text
https://jwt.io
```

Paste the generated JWT token.

![JWT Decoded](../postman_output/jwt_decode_token_jwtio.png)

---

## Access Countries using JWT Bearer Token

**GET**

```text
http://localhost:8090/countries
```

Authorization:

```text
Bearer Token

<Generated JWT Token>
```

![Bearer Token Success](../postman_output/jwt_bearer_token_success.png)

---

## Invalid JWT

**GET**

```text
http://localhost:8090/countries
```

Authorization:

```text
Bearer Token

invalid-token
```

Expected:

```text
401 Unauthorized
```

![Invalid JWT](../postman_output/jwt_invalid_token_rejected.png)

---

## SecurityConfig.java

![SecurityConfig](../postman_output/jwt_security_config_code.png)

---

## AuthenticationController.java

![AuthenticationController](../postman_output/jwt_auth_controller_code.png)

---

## JwtAuthorizationFilter.java

![JwtAuthorizationFilter](../postman_output/jwt_authorization_filter_code.png)

---

## JwtUtil.java

![JwtUtil](../postman_output/jwt_util_code.png)

---

## Final Output

![Final Output](../postman_output/jwt_final_output.png)

---

# Run Application

```bash
mvn clean spring-boot:run
```

Application runs on:

```text
http://localhost:8090
```

---

# Users

| Username | Password | Role    |
| -------- | -------- | ------- |
| `user`   | `pwd`    | `USER`  |
| `admin`  | `pwd`    | `ADMIN` |

---

# Test APIs

## 1. Try Protected API Without Authentication

```http
GET http://localhost:8090/countries
```

Expected:

```json
{
  "status": 401,
  "error": "Unauthorized"
}
```

---

## 2. Generate JWT Token

```http
GET http://localhost:8090/authenticate
```

Authorization:

```text
Basic Auth

Username : user
Password : pwd
```

Expected:

```json
{
  "token": "GENERATED_JWT_TOKEN"
}
```

---

## 3. Access Countries API with JWT

```http
GET http://localhost:8090/countries
```

Authorization:

```text
Bearer Token

<Generated JWT Token>
```

Expected:

```json
[
  {
    "code": "US",
    "name": "United States"
  },
  {
    "code": "DE",
    "name": "Germany"
  },
  {
    "code": "IN",
    "name": "India"
  },
  {
    "code": "JP",
    "name": "Japan"
  }
]
```

---

## 4. Test Invalid JWT

```http
GET http://localhost:8090/countries
```

Authorization:

```text
Bearer Token

invalid-token
```

Expected:

```json
{
  "status": 401,
  "error": "Unauthorized"
}
```
