package dsa.exercise4;

public class EmployeeManagement {
    private Employee[] employees;
    private int size;

    public EmployeeManagement(int capacity) {
        employees = new Employee[capacity];
        size = 0;
    }

    public void addEmployee(Employee emp) {
        if (size < employees.length) {
            employees[size++] = emp;
            System.out.println("Employee added: " + emp.getName());
        } else {
            System.out.println("Array is full, cannot add more employees.");
        }
    }

    public Employee searchEmployee(String employeeId) {
        for (int i = 0; i < size; i++) {
            if (employees[i].getEmployeeId().equals(employeeId)) {
                return employees[i];
            }
        }
        return null;
    }

    public void traverseEmployees() {
        System.out.println("All Employees:");
        for (int i = 0; i < size; i++) {
            System.out.println(employees[i]);
        }
    }

    public void deleteEmployee(String employeeId) {
        int indexToRemove = -1;
        for (int i = 0; i < size; i++) {
            if (employees[i].getEmployeeId().equals(employeeId)) {
                indexToRemove = i;
                break;
            }
        }

        if (indexToRemove != -1) {
            System.out.println("Employee deleted: " + employees[indexToRemove].getName());
            for (int i = indexToRemove; i < size - 1; i++) {
                employees[i] = employees[i + 1];
            }
            employees[size - 1] = null;
            size--;
        } else {
            System.out.println("Employee not found.");
        }
    }

    public static void main(String[] args) {
        EmployeeManagement em = new EmployeeManagement(10);
        em.addEmployee(new Employee("E01", "Alice", "Manager", 80000));
        em.addEmployee(new Employee("E02", "Bob", "Developer", 60000));
        
        em.traverseEmployees();
        System.out.println("Search E02: " + em.searchEmployee("E02"));
        
        em.deleteEmployee("E01");
        em.traverseEmployees();
    }
}
