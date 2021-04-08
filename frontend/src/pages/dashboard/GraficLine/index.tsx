import Chart from "react-apexcharts";
import { Container } from "./styles";

export function GranficLine() {
    const options = {

        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr']
        }
    }

    const series = [
        {
            name: "",
            data: [3000, 1500, 4500, 500, 3600, 3700, 4000, 2300, 4100, 4800, 5000, 3200, 2900]
        }
    ]

    return (
        <Container>
            <Chart
                options={options}
                series={series}
                type="area"
                width="650"
            />
        </Container>
    );
}