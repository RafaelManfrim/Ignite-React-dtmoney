import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export type Transaction = {
    id: number,
    title: string,
    category: string
    amount: number
    type: 'deposit' | 'withdraw'
    createdAt: string
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        getTransactionsList()
    }, [])

    function getTransactionsList() {
        api.get('/transactions/').then(resp => setTransactions(resp.data.transactions))
        console.log(transactions)
    }

    async function createTransaction(transaction: TransactionInput) {
        const response = await api.post('/transactions/', transaction)
        setTransactions([...transactions, response.data.transaction])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}