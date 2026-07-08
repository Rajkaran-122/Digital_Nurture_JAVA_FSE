# API Gateway

Spring Cloud Gateway running on port `9091`.

Routes are discovered automatically from Eureka.

Examples:

```text
http://localhost:9091/greet-service/greet
http://localhost:9091/account-service/accounts/00987987973432
http://localhost:9091/loan-service/loans/H00987987972342
```

Includes `LogFilter` global filter to log each incoming request URL.
