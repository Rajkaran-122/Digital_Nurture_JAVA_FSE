package design_patterns.exercise6;

public class TestProxy {
    public static void main(String[] args) {
        Image image1 = new ProxyImage("photo1.jpg");
        Image image2 = new ProxyImage("photo2.jpg");

        System.out.println("First call to display photo1:");
        image1.display();

        System.out.println("\nSecond call to display photo1:");
        image1.display();

        System.out.println("\nFirst call to display photo2:");
        image2.display();
    }
}
