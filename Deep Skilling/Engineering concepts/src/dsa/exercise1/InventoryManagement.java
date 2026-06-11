package dsa.exercise1;

import java.util.HashMap;
import java.util.Map;

public class InventoryManagement {
    private Map<String, Product> inventory;

    public InventoryManagement() {
        this.inventory = new HashMap<>();
    }

    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        System.out.println("Product added: " + product.getProductName());
    }

    public void updateProduct(String productId, Product updatedProduct) {
        if (inventory.containsKey(productId)) {
            inventory.put(productId, updatedProduct);
            System.out.println("Product updated: " + updatedProduct.getProductName());
        } else {
            System.out.println("Product not found!");
        }
    }

    public void deleteProduct(String productId) {
        if (inventory.containsKey(productId)) {
            Product removed = inventory.remove(productId);
            System.out.println("Product removed: " + removed.getProductName());
        } else {
            System.out.println("Product not found!");
        }
    }

    public Product getProduct(String productId) {
        return inventory.get(productId);
    }

    public static void main(String[] args) {
        InventoryManagement im = new InventoryManagement();
        Product p1 = new Product("P01", "Laptop", 10, 1500.00);
        Product p2 = new Product("P02", "Smartphone", 20, 800.00);

        im.addProduct(p1);
        im.addProduct(p2);

        System.out.println("Get P01: " + im.getProduct("P01"));

        Product p1Updated = new Product("P01", "Gaming Laptop", 8, 1600.00);
        im.updateProduct("P01", p1Updated);

        im.deleteProduct("P02");
    }
}
