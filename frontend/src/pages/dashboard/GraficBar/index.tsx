import Chart from "react-apexcharts";
import { Container } from "./styles";

export function GraficBar() {

    const series = [{
        name: 'Entradas',
        data: [6400, 5900, 5500, 7200],
        color: '#33CC95'
    }, {
        name: 'Saídas',
        data: [3400, 2900, 2500, 6200],
        color: '#e52e4d'
    }];

    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr']
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
    }

    return (
        <Container>
            <Chart options={options} series={series} type="bar" width="400" />
        </Container>
    );
}