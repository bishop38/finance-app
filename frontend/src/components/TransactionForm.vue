<template>
  <form @submit.prevent="addTransaction">
    <input v-model="amount" type="number" placeholder="Amount" required />
    <select v-model="type">
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
    <input v-model="category" type="text" placeholder="Category" required />
    <button type="submit">Add Transaction</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import {useTransactionStore} from "@/stores/transactionStore.js";

export default {
  setup() {
    const transactionStore = useTransactionStore();
    const amount = ref(0);
    const type = ref('income');
    const category = ref('');

    const addTransaction = () => {
      transactionStore.addTransaction({
        amount: amount.value,
        type: type.value,
        category: category.value,
      });
    };

    return { amount, type, category, addTransaction };
  }
};
</script>