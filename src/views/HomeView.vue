<template>
  <div class="main-container">
    <MainExpensesTable :tableData="tableData" />
  </div>
</template>
<script>
import MainExpensesTable from "../components/MainExpensesTable.vue";
import HttpClient from "../services/serviceClient";
export default {
  name: "HomeView",
  data() {
    return {
      tableData: [],
    };
  },

  async created() {
    const response = await HttpClient.get("/category-expenses");
    console.log(response.data);
    this.tableData = response.data;
  },

  components: {
    MainExpensesTable,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
