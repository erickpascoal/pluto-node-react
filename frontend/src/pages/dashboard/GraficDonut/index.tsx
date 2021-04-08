import Chart from "react-apexcharts";
import { Container } from "./styles";

export function GraficDonut() {
    const options = {
        labels: ['Contas', 'Comida', 'Remedios', 'Roupas', 'Lazer']
    };
    const series = [44, 55, 41, 17, 15];

    return (
        <Container>
            <Chart options={options} series={series} type="donut" width="400" />
        </Container>
    );
}