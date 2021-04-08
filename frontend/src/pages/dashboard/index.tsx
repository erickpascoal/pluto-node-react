import { GraficBar } from "./GraficBar";
import { GraficDonut } from "./GraficDonut";
import { GranficLine } from "./GraficLine";
import { RecentsTransactions } from "./RecentsTransactions";
import { Container, FirstContent, SecondContent } from "./styles";

export function Dashboard() {

    return (
        <Container>
            <header>
                <h2>Dashboard</h2>
            </header>

            <FirstContent>
                <GraficDonut />
                <GraficBar />
            </FirstContent>

            <SecondContent>
                <GranficLine />
                <RecentsTransactions />
            </SecondContent>
        </Container>
    );
}