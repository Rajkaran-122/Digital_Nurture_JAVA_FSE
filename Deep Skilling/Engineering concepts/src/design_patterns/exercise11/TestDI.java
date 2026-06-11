package design_patterns.exercise11;

public class TestDI {
    public static void main(String[] args) {
        CustomerRepository repository = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repository);

        System.out.println(service.getCustomerName("12345"));
    }
}
