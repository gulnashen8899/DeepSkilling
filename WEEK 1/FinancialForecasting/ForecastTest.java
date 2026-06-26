public class ForecastTest {

    public static void main(String[] args) {

        double presentValue = 10000;

        double growthRate = 0.10;

        int years = 5;

        double future =
                FinancialForecast
                        .forecast(
                                presentValue,
                                growthRate,
                                years);

        System.out.println(
                "Future Value = "
                        + future);
    }
}
