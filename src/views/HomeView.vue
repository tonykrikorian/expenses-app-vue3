<template>
  <div>
    <ExpenseForm @submited-expense-category="calculateExpenseAmmounts" />
  </div>
  <div>
    <ExpenseCategoriesTable :tableData="tableData" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import ExpenseForm from "../components/ExpenseForm.vue";
import ExpenseCategoriesTable from "../components/ExpenseCategoriesTable.vue";

export default {
  name: "HomeView",
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
    ExpenseCategoriesTable,
  },
  methods: {
    calculateExpenseAmmounts(expenseCategory) {
      this.table.theoricalAmmount =
        Number(this.salary) * (Number(expenseCategory.percentage) / 100);

      this.table.category = expenseCategory.category;
      this.table.percentage = expenseCategory.percentage;

      this.tableData.push({ ...this.table });
      console.log(this.tableData);
    },
  },
};
</script>
