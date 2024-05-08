<template>
  <div class="flex flex-col md:flex-row md:space-x-4 p-4">
    <div class="md:w-1/2 bg-white shadow-md rounded-lg p-4">
      <h2 class="text-center text-2xl font-bold text-gray-800 mb-4">Tareas pendientes</h2>
      <ul>
        <li v-for="task in pendingTasks" :key="task.id" class="bg-red-100 text-red-700 p-2 rounded-lg mb-2 flex justify-between items-center">
          <div v-if="!task.editing">
            <span>{{ task.title }} - {{ task.description }}</span>
          </div>
          <div v-else>
            <input v-model="task.title" placeholder="Título de la tarea" class="border p-2 rounded w-full mb-2" maxlength="25">
            <textarea v-model="task.description" placeholder="Descripción de la tarea" class="border p-2 rounded w-full mb-2" maxlength="250"></textarea>
          </div>
          <div class="flex gap-2">
            <button @click="completeTask(task)" class="text-sm bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">Completar</button>
            <button @click="deleteTask(task)" class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">Eliminar</button>
            <button @click="editTask(task)" class="text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">Editar</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="md:w-1/2 bg-white shadow-md rounded-lg p-4 mt-4 md:mt-0">
      <h2 class="text-center text-2xl font-bold text-gray-800 mb-4">Tareas completadas</h2>
      <ul>
        <li v-for="task in completedTasks" :key="task.id" class="bg-green-100 text-green-700 p-2 rounded-lg mb-2">
          <span>{{ task.title }} - {{ task.description }}</span>
          <button @click="deleteTask(task)" class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded float-right">Eliminar</button>
        </li>
      </ul>
    </div>
    <button @click="showForm = !showForm" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 self-center">Nueva tarea</button>
    <div v-if="showForm" class="bg-white shadow-md rounded-lg p-4 mt-4">
      <input v-model="newTask.title" placeholder="Título de la tarea" class="border p-2 rounded w-full mb-2" maxlength="25">
      <input v-model="newTask.description" placeholder="Descripción de la tarea" class="border p-2 rounded w-full mb-2" maxlength="250">
      <button @click="addTask" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full">Añadir tarea</button>
    </div>
  </div>
</template>

<script>
import tasks from '../components/tasks.json';

export default {
  data() {
    return {
      showForm: false,
      newTask: { title: '', description: '' },
      tasks: tasks,
    };
  },
  computed: {
    pendingTasks() {
      return this.tasks.filter(task => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    },
  },
  methods: {
    completeTask(task) {
      task.completed = true;
      task.updatedAt = new Date().toISOString();
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
    addTask() {
      const newTask = { ...this.newTask, id: Date.now(), completed: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      this.tasks.push(newTask);
      this.newTask = { title: '', description: '' };
      this.showForm = false;
    },
    editTask(task) {
      task.editing = !task.editing;
      if (!task.editing) {
        task.updatedAt = new Date().toISOString();
      }
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.text-2xl {
  font-size: 1.5em;
}
.font-bold {
  font-weight: bold;
}
.bg-white {
  background-color: #ffffff;
}
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.rounded-lg {
  border-radius: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.items-center {
  align-items: center;
}
.text-red-700 {
  color: #c53030;
}
.bg-red-100 {
  background-color: #fed7d7;
}
.rounded {
  border-radius: 0.25rem;
}
.text-sm {
  font-size: 0.875rem;
}
.bg-green-500 {
  background-color: #48bb78;
}
.hover\:bg-green-600:hover {
  background-color: #38a169;
}
.text-white {
  color: #ffffff;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.bg-red-500 {
  background-color: #f56565;
}
.hover\:bg-red-600:hover {
  background-color: #e53e3e;
}
.bg-blue-500 {
  background-color: #4299e1;
}
.hover\:bg-blue-600:hover {
  background-color: #3182ce;
}
.bg-green-100 {
  background-color: #f0fff4;
}
.text-green-700 {
  color: #2f855a;
}
.float-right {
  float: right;
}
.mt-4 {
  margin-top: 1rem;
}
.self-center {
  align-self: center;
}
.rounded {
  border-radius: 0.25rem;
}
.bg-blue-500 {
  background-color: #4299e1;
}
.hover\:bg-blue-600:hover {
  background-color: #3182ce;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
/* Añade margen entre los botones */
button {
  margin-right: 0.5rem; /* 8px */
}

/* Último botón sin margen derecho */
button:last-child {
  margin-right: 0;
}

input[type="text"],
textarea {
  max-length: 25;
}

textarea {
  max-length: 250;
}
</style>
