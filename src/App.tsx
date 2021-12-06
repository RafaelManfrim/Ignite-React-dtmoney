import { useState } from 'react';
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { NewTransactionModal } from './components/NewTransactionModal';

export const App = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleChangeNewTransactionModal() {
        setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
    }

	return (
		<>
			<Header onOpenModal={handleChangeNewTransactionModal}/>
			<Dashboard />
			<NewTransactionModal 
				isOpen={isNewTransactionModalOpen} 
				onRequestClose={handleChangeNewTransactionModal}
			/>
			<GlobalStyle />
		</>
	);
}
