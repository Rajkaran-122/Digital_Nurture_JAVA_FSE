package design_patterns.exercise8;

public class TestStrategy {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        context.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
        context.executePayment(250.0);

        context.setPaymentStrategy(new PayPalPayment("user@example.com"));
        context.executePayment(100.0);
    }
}
