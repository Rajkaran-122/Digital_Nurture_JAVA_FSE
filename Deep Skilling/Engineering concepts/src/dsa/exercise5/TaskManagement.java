package dsa.exercise5;

public class TaskManagement {
    private class Node {
        Task task;
        Node next;

        Node(Task task) {
            this.task = task;
            this.next = null;
        }
    }

    private Node head;

    public TaskManagement() {
        this.head = null;
    }

    public void addTask(Task task) {
        Node newNode = new Node(task);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        System.out.println("Task added: " + task.getTaskName());
    }

    public Task searchTask(String taskId) {
        Node current = head;
        while (current != null) {
            if (current.task.getTaskId().equals(taskId)) {
                return current.task;
            }
            current = current.next;
        }
        return null;
    }

    public void traverseTasks() {
        System.out.println("All Tasks:");
        Node current = head;
        while (current != null) {
            System.out.println(current.task);
            current = current.next;
        }
    }

    public void deleteTask(String taskId) {
        if (head == null) return;

        if (head.task.getTaskId().equals(taskId)) {
            System.out.println("Task deleted: " + head.task.getTaskName());
            head = head.next;
            return;
        }

        Node current = head;
        while (current.next != null && !current.next.task.getTaskId().equals(taskId)) {
            current = current.next;
        }

        if (current.next != null) {
            System.out.println("Task deleted: " + current.next.task.getTaskName());
            current.next = current.next.next;
        } else {
            System.out.println("Task not found.");
        }
    }

    public static void main(String[] args) {
        TaskManagement tm = new TaskManagement();
        tm.addTask(new Task("T01", "Design UI", "Pending"));
        tm.addTask(new Task("T02", "Implement API", "In Progress"));

        tm.traverseTasks();
        System.out.println("Search T01: " + tm.searchTask("T01"));

        tm.deleteTask("T01");
        tm.traverseTasks();
    }
}
