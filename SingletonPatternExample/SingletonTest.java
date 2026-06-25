public class SingletonTest {

    public static void main(String[] args) {

        Logger l1 = Logger.getInstance();
        l1.log("Hello");

        Logger l2 = Logger.getInstance();

        System.out.println(l1 == l2);
    }
}