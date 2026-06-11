package design_patterns.exercise11;

public class CustomerRepositoryImpl implements CustomerRepository {
    @Override
    public String findCustomerById(String id) {
        return "Customer_" + id;
    }
}
