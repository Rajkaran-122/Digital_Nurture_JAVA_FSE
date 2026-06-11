package design_patterns.exercise5;

public class TestDecorator {
    public static void main(String[] args) {
        Notifier emailNotifier = new EmailNotifier();
        
        Notifier smsAndEmailNotifier = new SMSNotifierDecorator(emailNotifier);
        
        Notifier allChannelsNotifier = new SlackNotifierDecorator(smsAndEmailNotifier);
        
        System.out.println("--- Sending via Email only ---");
        emailNotifier.send("Hello System Update!");
        
        System.out.println("\n--- Sending via Email and SMS ---");
        smsAndEmailNotifier.send("Hello System Update!");
        
        System.out.println("\n--- Sending via all channels ---");
        allChannelsNotifier.send("Critical System Failure!");
    }
}
