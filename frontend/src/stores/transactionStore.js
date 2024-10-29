import { defineStore } from 'pinia';
import axios from 'axios';

export const useTransactionStore = defineStore('transaction', {
    state: () => ({
        transactions: []
    }),
    actions: {
        async fetchTransactions() {
            const response = await axios.get('/api/transactions', {
                headers: { Authorization: `Bearer ${this.token}` },
            });
            this.transactions = response.data;
        },
        async addTransaction(transaction) {
            await axios.post('/api/transactions', transaction, {
                headers: { Authorization: `Bearer ${this.token}` },
            });
            this.fetchTransactions();
        }
    },
    getters: {
        income: (state) => state.transactions.filter((t) => t.type === 'income'),
        expense: (state) => state.transactions.filter((t) => t.type === 'expense'),
    }
});