<template>
  <v-container>
    <h1>Listagem de alunos</h1>

    <v-card>
      <v-card-title>
        <v-row cols="12">
          <v-col md="10">
            <v-text-field
              v-model="search"
              append-icon="mdi-search"
              label="Pesquisar"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col md="2">
            <v-btn text link to="/student/add">Cadastrar Aluno</v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table :headers="headers" :items="students" :search="search">
        <template v-slot:item.cpf="{ item }">
          <span>{{ item.cpf | formatCPF }}</span>
        </template>
        <template v-slot:item.email="{ item }">
          <span>
            <v-btn color="success" text link :to="`/student/edit/${item.ra}`">Editar</v-btn>
            <v-btn color="error" text @click="confirmDelete(item)">Excluir</v-btn>
          </span>
        </template>
      </v-data-table>
    </v-card>

    <v-btn bottom color="pink" dark fab fixed right link to="/student/add">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Confirma a exclusão?</v-card-title>
          <v-card-text>{{ message }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="deleteStudent()">Confirmar</v-btn>
            <v-btn color="primary" text @click="dialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      message: "",
      dialog: false,
      currentStudent: null,
      headers: [
        {
          text: "RA",
          align: "start",
          filterable: true,
          value: "ra"
        },
        { text: "Nome", value: "name", filterable: true },
        { text: "CPF", value: "cpf", filterable: true },
        { text: "Ações", value: "email" }
      ],
      students: []
    };
  },
  methods: {
    loadStudents() {
      axios
        .get(`${this.globalApiUrl}api/student/get`)
        .then(response => (this.students = response.data));
    },
    confirmDelete(item) {
      this.message = `Confirma a exclusão do aluno "${item.name}"?`;
      this.dialog = true;
      this.currentStudent = item;
    },
    deleteStudent() {
      axios
        .delete(`${this.globalApiUrl}api/student/delete/${this.currentStudent.ra}`, {
          ra: this.currentStudent.ra
        })
        .then(response => {
          if (response.status === 200) {
            this.loadStudents();
          }
          this.dialog = false;
        });
    }
  },
  mounted() {
    this.loadStudents();
  },
  filters: {
    formatCPF(value) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }
  }
};
</script>