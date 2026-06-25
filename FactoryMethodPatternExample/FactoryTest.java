public class FactoryTest {

    public static void main(String[] args) {

        DocumentFactory f1 = new WordFactory();
        Document d1 = f1.createDocument();
        d1.open();

        DocumentFactory f2 = new PdfFactory();
        Document d2 = f2.createDocument();
        d2.open();

        DocumentFactory f3 = new ExcelFactory();
        Document d3 = f3.createDocument();
        d3.open();
    }
}
