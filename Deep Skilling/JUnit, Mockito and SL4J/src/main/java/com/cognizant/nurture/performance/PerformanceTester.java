package com.cognizant.nurture.performance;

/**
 * Utility class to simulate long-running tasks.
 */
public class PerformanceTester {

    /**
     * Simulates a task that takes time to complete.
     *
     * @param durationInMillis the time to sleep in milliseconds
     * @throws InterruptedException if the thread is interrupted
     */
    public void performTask(long durationInMillis) throws InterruptedException {
        Thread.sleep(durationInMillis);
    }
}
