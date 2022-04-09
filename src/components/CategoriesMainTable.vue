<template>
  <div>
    <table border="1">
      <thead>
        <th>Id</th>
        <th>Nombre</th>
        <th>Fecha creación</th>
      </thead>
      <tbody>
        <tr v-for="data in categories" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CategoriesMainTable",
  props: {
    categories: {
      type: Array,
      required: true,
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
