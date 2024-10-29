<template>
  <div>
    <h3>Expense Breakdown</h3>
    <BarChart :chartData="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useTransactionStore } from '../../stores/transactionStore';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default {
  components: {
    BarChart: Bar
  },
  setup() {
    const transactionStore = useTransactionStore();

    const expenses = computed(() =>
        transactionStore.transactions.filter((t) => t.type === 'expense')
    );

    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: 'Expenses',
          backgroundColor: '#f87979',
          data: []
        }
      ]
    });

    watch(expenses, (newExpenses) => {
      const expenseCategories = newExpenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
      }, {});

      chartData.value.labels = Object.keys(expenseCategories);
      chartData.value.datasets[0].data = Object.values(expenseCategories);
    }, {immediate: true});

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return {chartData, chartOptions};
  }
};
</script>