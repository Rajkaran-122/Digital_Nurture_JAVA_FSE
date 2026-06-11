package design_patterns.exercise7;

public class TestObserver {
    public static void main(String[] args) {
        StockMarket appleStock = new StockMarket("AAPL", 150.00);

        Observer mobileApp = new MobileApp("MyTrade Mobile");
        Observer webApp = new WebApp("TradeWeb");

        appleStock.register(mobileApp);
        appleStock.register(webApp);

        System.out.println("Setting price to $155.00");
        appleStock.setPrice(155.00);

        appleStock.deregister(mobileApp);

        System.out.println("\nSetting price to $160.00");
        appleStock.setPrice(160.00);
    }
}
