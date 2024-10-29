<template>
  <div>
    <h3>Income Breakdown</h3>
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

    const incomes = computed(() =>
        transactionStore.transactions.filter((t) => t.type === 'income')
    );

    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: 'Incomes',
          backgroundColor: '#4caf50',
          data: []
        }
      ]
    });

    watch(incomes, (newIncomes) => {
      const incomeCategories = newIncomes.reduce((acc, income) => {
        acc[income.category] = (acc[income.category] || 0) + income.amount;
        return acc;
      }, {});

      chartData.value.labels = Object.keys(incomeCategories);
      chartData.value.datasets[0].data = Object.values(incomeCategories);
    }, {immediate: true});

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return {chartData, chartOptions};
  }
};
</script>

<style scoped>
</style>