<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="category">Category</label>
        <input name="category" type="text" v-model="category" />
      </div>
      <div class="form-group">
        <label for="percentage">Percentage</label>
        <input type="text" name="percentage" v-model="percentage" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "",
      percentage: "",
    };
  },
  methods: {
    onSubmit() {
      if (!this.category || !this.percentage) {
        alert("Debe rellenar todos los campos");
        return;
      }

      let expenseCategory = {
        category: this.category,
        percentage: Number(this.percentage),
      };

      this.$emit("submited-expense-category", expenseCategory);

      this.category = "";
      this.percentage = "";
    },
  },
};
</script>

<style scoped>
form {
  width: 20rem;
  border: 1px solid black;
  padding: 2rem;
  border-radius: 10%;
  margin-bottom: 2rem;
}
label {
  display: block;
}
.form-group {
  margin-bottom: 2rem;
}

input[type="text"] {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.5rem 0.7rem;
  transition: border-color 0.15s, box-shadow 0.15s;
}

input[type="text"]:focus {
  border-color: dodgerblue;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 117, 255, 0.25);
}

button {
  background-color: dodgerblue;
  border: 0;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
}
</style>
