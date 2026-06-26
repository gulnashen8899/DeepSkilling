class SearchAlgorithms {

    static Product linearSearch(Product[] products, int id) {

        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }

        return null;
    }

    static Product binarySearch(Product[] products,
                                int target) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid =
                    (left + right) / 2;

            if (products[mid].productId ==
                    target)
                return products[mid];

            if (products[mid].productId <
                    target)
                left = mid + 1;

            else
                right = mid - 1;
        }

        return null;
    }
}
