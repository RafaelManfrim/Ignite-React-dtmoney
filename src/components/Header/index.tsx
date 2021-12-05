import logoImg from '../../assets/logo.svg';
import { Container, Content, Button } from './styles'

export const Header = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <Button type="button">Nova transação</Button>
            </Content>   
        </Container>
    )
} 