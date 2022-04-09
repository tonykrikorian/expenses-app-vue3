<template>
  <div class="main-container">
    <ExpenseForm @submited-expense-category="calculateExpenseAmmounts" />

    <CategoriesMainTable :categories="tableData" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import ExpenseForm from "../components/ExpenseForm.vue";
import CategoriesMainTable from "../components/CategoriesMainTable.vue";
import { getCategories } from "../services/categories.service";

export default {
  name: "CategoriesMaintainerView",
  data() {
    return {
      salary: 2500000,
      table: {
        category: "",
        percentage: "",
        theoricalAmmount: 0,
        realAmmount: 0,
        balance: 0,
      },
      tableData: [],
    };
  },
  components: {
    ExpenseForm,
    CategoriesMainTable,
  },
  async created() {
    const tableData = await getCategories();

    this.tableData = tableData;
  },
  methods: {
    calculateExpenseAmmounts(eventPayload) {
      alert(eventPayload.message);
      this.tableData.push(eventPayload.data);
      console.log(eventPayload);
    },
  },
};
</script>
<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 0 1rem;
}
</style>
