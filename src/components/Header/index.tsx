import logoImg from '../../assets/logo.svg';
import { Container, Content, Button } from './styles'

type HeaderProps = {
    onOpenModal: () => void
}

export const Header = ({ onOpenModal }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <Button type="button" onClick={onOpenModal}>Nova transação</Button>           
            </Content>
        </Container>
    )
}