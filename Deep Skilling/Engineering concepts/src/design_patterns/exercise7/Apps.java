package design_patterns.exercise7;

class MobileApp implements Observer {
    private String appName;

    public MobileApp(String appName) {
        this.appName = appName;
    }

    @Override
    public void update(String stockName, double price) {
        System.out.println("Mobile App [" + appName + "] Notification: " + stockName + " price is now $" + price);
    }
}

class WebApp implements Observer {
    private String appName;

    public WebApp(String appName) {
        this.appName = appName;
    }

    @Override
    public void update(String stockName, double price) {
        System.out.println("Web App [" + appName + "] Dashboard updated: " + stockName + " price is now $" + price);
    }
}
