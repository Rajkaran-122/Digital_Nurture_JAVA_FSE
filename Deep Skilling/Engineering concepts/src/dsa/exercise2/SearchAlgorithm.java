package dsa.exercise2;

import java.util.Arrays;

public class SearchAlgorithm {

    public static Product linearSearch(Product[] products, String productId) {
        for (Product product : products) {
            if (product.getProductId().equals(productId)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String productId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].getProductId().compareTo(productId);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product("P03", "Tablet", "Electronics"),
            new Product("P01", "Laptop", "Electronics"),
            new Product("P04", "Desk", "Furniture"),
            new Product("P02", "Smartphone", "Electronics")
        };

        System.out.println("Linear Search Result: " + linearSearch(products, "P02"));

        Arrays.sort(products);
        System.out.println("Binary Search Result: " + binarySearch(products, "P02"));
    }
}
