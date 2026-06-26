public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(
                        101,
                        "Phone",
                        "Electronics"),

                new Product(
                        102,
                        "Shoes",
                        "Fashion"),

                new Product(
                        103,
                        "Watch",
                        "Accessories")

        };

        System.out.println(
                "Linear Search");

        Product p1 =
                SearchAlgorithms
                        .linearSearch(
                                products,
                                102);

        if (p1 != null)
            p1.display();

        System.out.println(
                "Binary Search");

        Product p2 =
                SearchAlgorithms
                        .binarySearch(
                                products,
                                103);

        if (p2 != null)
            p2.display();
    }
}
