<template>
  <div>
    <TransactionForm />
    <TransactionList />
    <ExpenseChart />
    <IncomeChart />
  </div>
</template>

<script>

import TransactionForm from "@/components/TransactionForm.vue";
import TransactionList from "@/components/TransactionList.vue";
import ExpenseChart from "@/components/Charts/ExpenseChart.vue";
import IncomeChart from "@/components/Charts/IncomeChart.vue";

export default {
  components: { TransactionForm, TransactionList, ExpenseChart, IncomeChart },
};
</script>