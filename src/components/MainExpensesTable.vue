<template>
  <div v-if="tableData.length">
    <table border="1">
      <thead>
        <th>Nombre</th>
        <th>Porcentaje</th>
        <th>Monto teorico</th>
        <th>Monto real</th>
        <th>Saldo</th>
        <th>Fecha creación</th>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data.id">
          <td>{{ data.category.name }}</td>
          <td>{{ data.percentage }}%</td>
          <td>{{ data.theoricalAmmount }}</td>
          <td>{{ data.realAmmount }}</td>
          <td>{{ data.balance }}</td>
          <td>{{ data.createdAt }}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{{ totalPercentage }}%</td>
          <td>{{ totalAmmount }}</td>
          <td>{{ totalRealAmmount }}</td>
          <td>{{ totalBalance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>No existen datos para mostrar</div>
</template>
<script>
export default {
  name: "MainExpensesTable",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPercentage() {
      return this.tableData
        .map((x) => x.percentage)
        .reduce((prev, current) => prev + current);
    },
    totalAmmount() {
      return this.tableData
        .map((x) => x.theoricalAmmount)
        .reduce((prev, current) => prev + current);
    },
    totalRealAmmount() {
      return this.tableData
        .map((x) => x.realAmmount)
        .reduce((prev, current) => prev + current);
    },
    totalBalance() {
      return this.tableData
        .map((x) => x.balance)
        .reduce((prev, current) => prev + current);
    },
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid #c4dcf3;
  border-collapse: collapse;
  padding: 10px;
}
</style>
