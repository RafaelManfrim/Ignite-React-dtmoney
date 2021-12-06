import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export const TransactionsTable = () => {
    useEffect(() => {
        api.get('transactions/').then(resp => {console.log(resp.data)})
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trabalho</td>
                        <td className="deposit">120</td>
                        <td>Trabalho</td>
                        <td>04/05/2022</td>
                    </tr>
                    <tr>
                        <td>Monitor</td>
                        <td className="withdraw">120</td>
                        <td>Compra</td>
                        <td>09/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}