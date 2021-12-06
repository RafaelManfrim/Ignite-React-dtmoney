import Modal from 'react-modal';
import { Container } from './styles';

Modal.setAppElement('#root')

type NewTransactionModalProps = {
    isOpen: boolean,
    onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}