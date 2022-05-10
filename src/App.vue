<template>
  <div id="app">
    <div class="container">
      <addTodo></addTodo>
      <FiltersTodo></FiltersTodo>
      <TodoItems></TodoItems>
    </div>
  </div>
</template>

<script>
import TodoItems from './components/TodoItems.vue';
import addTodo from './components/addTodo.vue';
import FiltersTodo from "./components/filtersTodo";

export default {
  name: 'App',
  components: {
    addTodo,
    TodoItems,
    FiltersTodo,
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
