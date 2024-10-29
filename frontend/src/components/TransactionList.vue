<template>
  <div>
    <h3>Transactions</h3>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        <strong>{{ transaction.category }}</strong>:
        {{ transaction.type === 'income' ? '+' : '-' }}{{ transaction.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useTransactionStore } from '../stores/transactionStore';
import { onMounted } from 'vue';

export default {
  setup() {
    const transactionStore = useTransactionStore();

    onMounted(() => {
      transactionStore.fetchTransactions();
    });

    return { transactions: transactionStore.transactions };
  }
};
</script>