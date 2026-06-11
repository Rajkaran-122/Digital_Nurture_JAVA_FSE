package dsa.exercise5;

public class Task {
    private String taskId;
    private String taskName;
    private String status;

    public Task(String taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
    }

    public String getTaskId() { return taskId; }
    public String getTaskName() { return taskName; }

    @Override
    public String toString() {
        return "Task{" + "taskId='" + taskId + '\'' + ", taskName='" + taskName + '\'' + ", status='" + status + '\'' + '}';
    }
}
