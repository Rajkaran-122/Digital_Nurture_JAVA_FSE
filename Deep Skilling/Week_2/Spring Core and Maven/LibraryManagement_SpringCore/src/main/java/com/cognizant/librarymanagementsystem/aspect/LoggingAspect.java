package com.cognizant.librarymanagementsystem.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.After;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


@Aspect
@Component
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Around("execution(* com.cognizant.librarymanagementsystem.service..*(..))" +
            " || execution(* com.cognizant.librarymanagementsystem.repository..*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {

        String methodName = joinPoint.getSignature().toShortString();
        long startTime = System.currentTimeMillis();

        logger.info("[AOP - AROUND] BEFORE >> Executing: {}", methodName);

        Object result;
        try {
            result = joinPoint.proceed();
        } catch (Throwable ex) {
            logger.error("[AOP - AROUND] Exception in {}: {}", methodName, ex.getMessage());
            throw ex;
        }

        long executionTime = System.currentTimeMillis() - startTime;
        logger.info("[AOP - AROUND] AFTER  >> Completed: {} | Execution Time: {} ms", methodName, executionTime);

        return result;
    }

    @Before("execution(* com.cognizant.librarymanagementsystem.service..*(..))")
    public void logBeforeServiceMethod(org.aspectj.lang.JoinPoint joinPoint) {
        logger.info("[AOP - BEFORE] Entering service method: {}",
                    joinPoint.getSignature().getName());
    }


    @After("execution(* com.cognizant.librarymanagementsystem.service..*(..))")
    public void logAfterServiceMethod(org.aspectj.lang.JoinPoint joinPoint) {
        logger.info("[AOP - AFTER ] Exiting  service method: {}",
                    joinPoint.getSignature().getName());
    }
}
