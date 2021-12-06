import { useState } from 'react';
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import Modal from 'react-modal';

Modal.setAppElement('#root')

export const App = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleChangeNewTransactionModal() {
        setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
    }

	return (
		<>
			<Header onOpenModal={handleChangeNewTransactionModal}/>
			<Dashboard />
			<Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleChangeNewTransactionModal}>
				<h2>Cadastrar transação</h2>
			</Modal>
			<GlobalStyle />
		</>
	);
}
