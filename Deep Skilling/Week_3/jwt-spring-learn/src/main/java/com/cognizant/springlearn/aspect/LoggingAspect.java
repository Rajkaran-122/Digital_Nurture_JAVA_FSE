package com.cognizant.springlearn.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LoggingAspect {

    @Pointcut("within(com.cognizant.springlearn.controller..*) || within(com.cognizant.springlearn.service..*) || within(com.cognizant.springlearn.security..*)")
    public void applicationPackagePointcut() {
        // Pointcut for application packages
    }

    @Around("applicationPackagePointcut()")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        String methodSignature = joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName();
        log.info("Start: {}", methodSignature);
        try {
            Object result = joinPoint.proceed();
            log.info("End: {}", methodSignature);
            return result;
        } catch (IllegalArgumentException e) {
            log.error("Illegal argument: {} in {}", java.util.Arrays.toString(joinPoint.getArgs()), methodSignature);
            throw e;
        }
    }
}
