package com.cognizant.librarymanagementsystem.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Aspect
@Component
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);


    @Pointcut("execution(* com.cognizant.librarymanagementsystem.service..*(..))")
    public void serviceMethods() {}

    @Pointcut("execution(* com.cognizant.librarymanagementsystem.controller..*(..))")
    public void controllerMethods() {}

    @Pointcut("serviceMethods() || controllerMethods()")
    public void applicationMethods() {}

    @Before("applicationMethods()")
    public void logBefore(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().toShortString();
        Object[] args     = joinPoint.getArgs();

        logger.info("[AOP @Before] Entering : {}", methodName);
        logger.info("[AOP @Before] Arguments: {}", Arrays.toString(args));

    }

    @After("applicationMethods()")
    public void logAfter(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().toShortString();
        logger.info("[AOP @After ] Exiting  : {}", methodName);
    }

    @Around("serviceMethods()")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) thr
    String methodN = joinPoint.getSignature().to

    

    Obj
    c
        {
       resl
    t = joinPoint
    p
        tch (Throwable ex) {
        long elapsed = System.currentTimeMillis() - startTime;
                "[AOP @Around] EXCEPTION in {} after {
                 
     

    
            long executionTime = System.currentTimeMillis() - startTime;"[AOP @Aroud] END   — {} |

    
     }
}
