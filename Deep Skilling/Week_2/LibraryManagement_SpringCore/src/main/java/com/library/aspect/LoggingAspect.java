package com.library.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    // Exercise 8: Advice for logging before method execution
    @Before("execution(* com.library.service.BookService.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("[AOP BEFORE] Executing method: " + joinPoint.getSignature().getName());
    }

    // Exercise 8: Advice for logging after method execution
    @After("execution(* com.library.service.BookService.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        System.out.println("[AOP AFTER] Finished executing method: " + joinPoint.getSignature().getName());
    }

    // Exercise 3: Aspect for tracking method execution times
    @Around("execution(* com.library.repository.BookRepository.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        // Proceed with the method execution
        Object proceed = joinPoint.proceed();

        long executionTime = System.currentTimeMillis() - start;
        System.out.println("[AOP AROUND] " + joinPoint.getSignature() + " executed in " + executionTime + " ms");

        return proceed;
    }
}
