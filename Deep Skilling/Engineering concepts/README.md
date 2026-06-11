# Engineering Concepts Exercises

## Data Structures and Algorithms

### Exercise 1: Inventory Management System
**Scenario:** 
You are developing an inventory management system for a warehouse. Efficient data storage and retrieval are crucial.

**Steps:**
1. **Understand the Problem:**
   - Explain why data structures and algorithms are essential in handling large inventories.
   - Discuss the types of data structures suitable for this problem.
2. **Setup:**
   - Create a new project for the inventory management system.
3. **Implementation:**
   - Define a class `Product` with attributes like `productId`, `productName`, `quantity`, and `price`.
   - Choose an appropriate data structure to store the products (e.g., `ArrayList`, `HashMap`).
   - Implement methods to add, update, and delete products from the inventory.
4. **Analysis:**
   - Analyze the time complexity of each operation (add, update, delete) in your chosen data structure.
   - Discuss how you can optimize these operations.

### Exercise 2: E-commerce Platform Search Function
**Scenario:** 
You are working on the search functionality of an e-commerce platform. The search needs to be optimized for fast performance.

**Steps:**
1. **Understand Asymptotic Notation:**
   - Explain Big O notation and how it helps in analyzing algorithms.
   - Describe the best, average, and worst-case scenarios for search operations.
2. **Setup:**
   - Create a class `Product` with attributes for searching, such as `productId`, `productName`, and `category`.
3. **Implementation:**
   - Implement linear search and binary search algorithms.
   - Store products in an array for linear search and a sorted array for binary search.
4. **Analysis:**
   - Compare the time complexity of linear and binary search algorithms.
   - Discuss which algorithm is more suitable for your platform and why.

### Exercise 3: Sorting Customer Orders
**Scenario:** 
You are tasked with sorting customer orders by their total price on an e-commerce platform. This helps in prioritizing high-value orders.

**Steps:**
1. **Understand Sorting Algorithms:**
   - Explain different sorting algorithms (Bubble Sort, Insertion Sort, Quick Sort, Merge Sort).
2. **Setup:**
   - Create a class `Order` with attributes like `orderId`, `customerName`, and `totalPrice`.
3. **Implementation:**
   - Implement Bubble Sort to sort orders by `totalPrice`.
   - Implement Quick Sort to sort orders by `totalPrice`.
4. **Analysis:**
   - Compare the performance (time complexity) of Bubble Sort and Quick Sort.
   - Discuss why Quick Sort is generally preferred over Bubble Sort.

### Exercise 4: Employee Management System
**Scenario:** 
You are developing an employee management system for a company. Efficiently managing employee records is crucial.

**Steps:**
1. **Understand Array Representation:**
   - Explain how arrays are represented in memory and their advantages.
2. **Setup:**
   - Create a class `Employee` with attributes like `employeeId`, `name`, `position`, and `salary`.
3. **Implementation:**
   - Use an array to store employee records.
   - Implement methods to add, search, traverse, and delete employees in the array.
4. **Analysis:**
   - Analyze the time complexity of each operation (add, search, traverse, delete).
   - Discuss the limitations of arrays and when to use them.

### Exercise 5: Task Management System
**Scenario:** 
You are developing a task management system where tasks need to be added, deleted, and traversed efficiently.

**Steps:**
1. **Understand Linked Lists:**
   - Explain the different types of linked lists (Singly Linked List, Doubly Linked List).
2. **Setup:**
   - Create a class `Task` with attributes like `taskId`, `taskName`, and `status`.
3. **Implementation:**
   - Implement a singly linked list to manage tasks.
   - Implement methods to add, search, traverse, and delete tasks in the linked list.
4. **Analysis:**
   - Analyze the time complexity of each operation.
   - Discuss the advantages of linked lists over arrays for dynamic data.

### Exercise 6: Library Management System
**Scenario:** 
You are developing a library management system where users can search for books by title or author.

**Steps:**
1. **Understand Search Algorithms:**
   - Explain linear search and binary search algorithms.
2. **Setup:**
   - Create a class `Book` with attributes like `bookId`, `title`, and `author`.
3. **Implementation:**
   - Implement linear search to find books by title.
   - Implement binary search to find books by title (assuming the list is sorted).
4. **Analysis:**
   - Compare the time complexity of linear and binary search.
   - Discuss when to use each algorithm based on the data set size and order.

### Exercise 7: Financial Forecasting
**Scenario:** 
You are developing a financial forecasting tool that predicts future values based on past data.

**Steps:**
1. **Understand Recursive Algorithms:**
   - Explain the concept of recursion and how it can simplify certain problems.
2. **Setup:**
   - Create a method to calculate the future value using a recursive approach.
3. **Implementation:**
   - Implement a recursive algorithm to predict future values based on past growth rates.
4. **Analysis:**
   - Discuss the time complexity of your recursive algorithm.
   - Explain how to optimize the recursive solution to avoid excessive computation.

---

## Design Patterns

### Exercise 1: Implementing the Singleton Pattern
**Scenario:** 
You need to ensure that a logging utility class in your application has only one instance throughout the application lifecycle to ensure consistent logging.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `SingletonPatternExample`.
2. **Define a Singleton Class:**
   - Create a class named `Logger` that has a private static instance of itself.
   - Ensure the constructor of `Logger` is private.
   - Provide a public static method to get the instance of the `Logger` class.
3. **Implement the Singleton Pattern:**
   - Write code to ensure that the `Logger` class follows the Singleton design pattern.
4. **Test the Singleton Implementation:**
   - Create a test class to verify that only one instance of `Logger` is created and used across the application.

### Exercise 2: Implementing the Factory Method Pattern
**Scenario:** 
You are developing a document management system that needs to create different types of documents (e.g., Word, PDF, Excel). Use the Factory Method Pattern to achieve this.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `FactoryMethodPatternExample`.
2. **Define Document Classes:**
   - Create interfaces or abstract classes for different document types such as `WordDocument`, `PdfDocument`, and `ExcelDocument`.
3. **Create Concrete Document Classes:**
   - Implement concrete classes for each document type that implements or extends the above interfaces or abstract classes.
4. **Implement the Factory Method:**
   - Create an abstract class `DocumentFactory` with a method `createDocument()`.
   - Create concrete factory classes for each document type that extends `DocumentFactory` and implements the `createDocument()` method.
5. **Test the Factory Method Implementation:**
   - Create a test class to demonstrate the creation of different document types using the factory method.

### Exercise 3: Implementing the Builder Pattern
**Scenario:** 
You are developing a system to create complex objects such as a `Computer` with multiple optional parts. Use the Builder Pattern to manage the construction process.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `BuilderPatternExample`.
2. **Define a Product Class:**
   - Create a class `Computer` with attributes like CPU, RAM, Storage, etc.
3. **Implement the Builder Class:**
   - Create a static nested `Builder` class inside `Computer` with methods to set each attribute.
   - Provide a `build()` method in the `Builder` class that returns an instance of `Computer`.
4. **Implement the Builder Pattern:**
   - Ensure that the `Computer` class has a private constructor that takes the `Builder` as a parameter.
5. **Test the Builder Implementation:**
   - Create a test class to demonstrate the creation of different configurations of `Computer` using the Builder pattern.

### Exercise 4: Implementing the Adapter Pattern
**Scenario:** 
You are developing a payment processing system that needs to integrate with multiple third-party payment gateways with different interfaces. Use the Adapter Pattern to achieve this.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `AdapterPatternExample`.
2. **Define Target Interface:**
   - Create an interface `PaymentProcessor` with methods like `processPayment()`.
3. **Implement Adaptee Classes:**
   - Create classes for different payment gateways with their own methods.
4. **Implement the Adapter Class:**
   - Create an adapter class for each payment gateway that implements `PaymentProcessor` and translates the calls to the gateway-specific methods.
5. **Test the Adapter Implementation:**
   - Create a test class to demonstrate the use of different payment gateways through the adapter.

### Exercise 5: Implementing the Decorator Pattern
**Scenario:** 
You are developing a notification system where notifications can be sent via multiple channels (e.g., Email, SMS). Use the Decorator Pattern to add functionalities dynamically.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `DecoratorPatternExample`.
2. **Define Component Interface:**
   - Create an interface `Notifier` with a method `send()`.
3. **Implement Concrete Component:**
   - Create a class `EmailNotifier` that implements `Notifier`.
4. **Implement Decorator Classes:**
   - Create abstract decorator class `NotifierDecorator` that implements `Notifier` and holds a reference to a `Notifier` object.
   - Create concrete decorator classes like `SMSNotifierDecorator`, `SlackNotifierDecorator` that extend `NotifierDecorator`.
5. **Test the Decorator Implementation:**
   - Create a test class to demonstrate sending notifications via multiple channels using decorators.

### Exercise 6: Implementing the Proxy Pattern
**Scenario:** 
You are developing an image viewer application that loads images from a remote server. Use the Proxy Pattern to add lazy initialization and caching.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `ProxyPatternExample`.
2. **Define Subject Interface:**
   - Create an interface `Image` with a method `display()`.
3. **Implement Real Subject Class:**
   - Create a class `RealImage` that implements `Image` and loads an image from a remote server.
4. **Implement Proxy Class:**
   - Create a class `ProxyImage` that implements `Image` and holds a reference to `RealImage`.
   - Implement lazy initialization and caching in `ProxyImage`.
5. **Test the Proxy Implementation:**
   - Create a test class to demonstrate the use of `ProxyImage` to load and display images.

### Exercise 7: Implementing the Observer Pattern
**Scenario:** 
You are developing a stock market monitoring application where multiple clients need to be notified whenever stock prices change. Use the Observer Pattern to achieve this.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `ObserverPatternExample`.
2. **Define Subject Interface:**
   - Create an interface `Stock` with methods to register, deregister, and notify observers.
3. **Implement Concrete Subject:**
   - Create a class `StockMarket` that implements `Stock` and maintains a list of observers.
4. **Define Observer Interface:**
   - Create an interface `Observer` with a method `update()`.
5. **Implement Concrete Observers:**
   - Create classes `MobileApp`, `WebApp` that implement `Observer`.
6. **Test the Observer Implementation:**
   - Create a test class to demonstrate the registration and notification of observers.

### Exercise 8: Implementing the Strategy Pattern
**Scenario:** 
You are developing a payment system where different payment methods (e.g., Credit Card, PayPal) can be selected at runtime. Use the Strategy Pattern to achieve this.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `StrategyPatternExample`.
2. **Define Strategy Interface:**
   - Create an interface `PaymentStrategy` with a method `pay()`.
3. **Implement Concrete Strategies:**
   - Create classes `CreditCardPayment`, `PayPalPayment` that implement `PaymentStrategy`.
4. **Implement Context Class:**
   - Create a class `PaymentContext` that holds a reference to `PaymentStrategy` and a method to execute the strategy.
5. **Test the Strategy Implementation:**
   - Create a test class to demonstrate selecting and using different payment strategies.

### Exercise 9: Implementing the Command Pattern
**Scenario:** 
You are developing a home automation system where commands can be issued to turn devices on or off. Use the Command Pattern to achieve this.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `CommandPatternExample`.
2. **Define Command Interface:**
   - Create an interface `Command` with a method `execute()`.
3. **Implement Concrete Commands:**
   - Create classes `LightOnCommand`, `LightOffCommand` that implement `Command`.
4. **Implement Invoker Class:**
   - Create a class `RemoteControl` that holds a reference to a `Command` and a method to execute the command.
5. **Implement Receiver Class:**
   - Create a class `Light` with methods to turn on and off.
6. **Test the Command Implementation:**
   - Create a test class to demonstrate issuing commands using the `RemoteControl`.

### Exercise 10: Implementing the MVC Pattern
**Scenario:** 
You are developing a simple web application for managing student records using the MVC pattern.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `MVCPatternExample`.
2. **Define Model Class:**
   - Create a class `Student` with attributes like `name`, `id`, and `grade`.
3. **Define View Class:**
   - Create a class `StudentView` with a method `displayStudentDetails()`.
4. **Define Controller Class:**
   - Create a class `StudentController` that handles the communication between the model and the view.
5. **Test the MVC Implementation:**
   - Create a main class to demonstrate creating a `Student`, updating its details using `StudentController`, and displaying them using `StudentView`.

### Exercise 11: Implementing Dependency Injection
**Scenario:** 
You are developing a customer management application where the service class depends on a repository class. Use Dependency Injection to manage these dependencies.

**Steps:**
1. **Create a New Java Project:**
   - Create a new Java project named `DependencyInjectionExample`.
2. **Define Repository Interface:**
   - Create an interface `CustomerRepository` with methods like `findCustomerById()`.
3. **Implement Concrete Repository:**
   - Create a class `CustomerRepositoryImpl` that implements `CustomerRepository`.
4. **Define Service Class:**
   - Create a class `CustomerService` that depends on `CustomerRepository`.
5. **Implement Dependency Injection:**
   - Use constructor injection to inject `CustomerRepository` into `CustomerService`.
6. **Test the Dependency Injection Implementation:**
   - Create a main class to demonstrate creating a `CustomerService` with `CustomerRepositoryImpl` and using it to find a customer.
