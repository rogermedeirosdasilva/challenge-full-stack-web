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
      <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
    </v-card>

    <v-btn bottom color="pink" dark fab fixed right link to="/student/add">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
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
        { text: "CPF", value: "cpf", filterable: true }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          ra: 159,
          cpf: "100"
        },
        {
          name: "Ice cream sandwich",
          ra: 237,
          cpf: "0221546565"
        },
        {
          name: "Eclair",
          ra: 262,
          cpf: "326058982"
        },
        {
          name: "Cupcake",
          ra: 67,
          cpf: "885233255"
        },
        {
          name: "Gingerbread",
          ra: 356,
          cpf: "32563322"
        },
        {
          name: "Jelly bean",
          ra: 375,
          cpf: "002145002111"
        },
        {
          name: "Lollipop",
          ra: 392,
          cpf: "222300252201"
        },
        {
          name: "Honeycomb",
          ra: 408,
          cpf: "4523233022011"
        },
        {
          name: "Donut",
          ra: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          cpf: "22654423434"
        },
        {
          name: "KitKat",
          ra: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          cpf: "34343434"
        }
      ]
    };
  }
};
</script>