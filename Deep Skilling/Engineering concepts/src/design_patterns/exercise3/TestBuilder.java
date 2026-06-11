package design_patterns.exercise3;

public class TestBuilder {
    public static void main(String[] args) {
        Computer basicComputer = new Computer.Builder("Intel i3", "8GB").build();
        System.out.println("Basic Computer: " + basicComputer);

        Computer gamingComputer = new Computer.Builder("Intel i9", "32GB")
                .setStorage("1TB NVMe SSD")
                .setGPU("NVIDIA RTX 4090")
                .build();
        System.out.println("Gaming Computer: " + gamingComputer);
    }
}
