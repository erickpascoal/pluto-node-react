import { Container, Content } from "./styles";



export function RecentsTransactions() {

    return (
        <Container>
            <Content>
                <header>
                    <h2>Transações recentes</h2>
                </header>

                <table>
                    <tbody>
                        <tr>
                            <td>2 horas atrás</td>
                            <td>Comprei um cachorro quente</td>
                        </tr>
                        <tr>
                            <td>7 horas atrás</td>
                            <td>Comprei um café</td>
                        </tr>
                        <tr>
                            <td>13 horas atrás</td>
                            <td>Recebi do fulano</td>
                        </tr>
                        <tr>
                            <td>19 horas atrás</td>
                            <td>Paguei o aluguel</td>
                        </tr>
                        <tr>
                            <td>24 horas atrás</td>
                            <td>Recebi salário</td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </Container>
    );

}