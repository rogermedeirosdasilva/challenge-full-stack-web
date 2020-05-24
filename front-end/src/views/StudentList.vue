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
            <v-btn color="error" text link :to="`/student/delete/${item.ra}`">Excluir</v-btn>
          </span>
        </template>
      </v-data-table>
    </v-card>

    <v-btn bottom color="pink" dark fab fixed right link to="/student/add">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
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
  mounted() {
    axios
      .get("http://localhost:3000/api/student/get")
      .then(response => (this.students = response.data));
  },
  filters: {
    formatCPF(value) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }
  }
};
</script>