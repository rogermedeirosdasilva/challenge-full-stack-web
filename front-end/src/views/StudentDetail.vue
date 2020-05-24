<template>
  <v-container>
    <h1>Cadastro de Aluno</h1>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="100"
        :rules="nameRules"
        label="Nome"
        placeholder="Informe o nome completo"
        @blur="validate()"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        :counter="100"
        placeholder="Informe apenas um e-mail"
        @blur="validate()"
        required
      ></v-text-field>

      <v-text-field
        v-model="ra"
        :rules="raRules"
        placeholder="Informe o registro acadêmico"
        label="RA"
        :counter="10"
        @blur="validate()"
        required
      ></v-text-field>

      <v-text-field
        v-model="cpf"
        :rules="cpfRules"
        label="CPF"
        :counter="11"
        placeholder="Informe o número do documento"
        @blur="validate()"
        required
      ></v-text-field>
    </v-form>

    <v-btn bottom color="success" dark fab fixed :disabled="!valid" @click="validate" id="btnSave">
      <v-icon>mdi-checkbox-marked-circle</v-icon>
    </v-btn>

    <v-btn bottom color="error" dark fab fixed right @click="cancel">
      <v-icon>mdi-cancel</v-icon>
    </v-btn>

    <v-bottom-sheet v-model="sheet" persistent>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" color="error" @click="sheet = !sheet">Fechar</v-btn>
        <div class="py-3">{{ message }}</div>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: false,
    message: "",
    sheet: false,
    name: "",
    nameRules: [
      v => !!v || "O nome do aluno tem preenchimento obrigatório",
      v =>
        (v && v.length <= 100) || "O Nome deve conter menos de 100 caracteres"
    ],
    email: "",
    emailRules: [
      v => !!v || "O e-mail tem preenchimento obrigatório",
      v => /.+@.+\..+/.test(v) || "Informe um e-mail válido"
    ],
    cpf: "",
    cpfRules: [
      v => !!v || "O CPF do aluno tem preenchimento obrigatório",
      v => (v && v.length === 11) || "O CPF deve conter menos de 11 caracteres"
    ],
    ra: "",
    raRules: [
      v => !!v || "O RA do aluno tem preenchimento obrigatório",
      v =>
        (v && v.length > 0 && v.length <= 10) ||
        "O RA do aluno deve conter entre 1 e 10 caracteres"
    ],
    queryRA: undefined
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      this.message = "Teste de TExto";
      this.sheet = true;
    },
    cancel() {
      this.$refs.form.reset();
      this.$router.push("/student/list");      
    },
    showError(message) {
      this.message = message;
      this.sheet = true;
    }
  },
  created() {
    this.queryRA = this.$route.params.ra;
  },
  mounted() {
    if (this.queryRA !== undefined) {      
      axios
        .get(`http://localhost:3000/api/student/get/${this.queryRA}`)
        .then(response => {
          if (response.status === 200) {
            this.ra = response.data.ra;
            this.name = response.data.name;
            this.email = response.data.email;
            this.cpf = response.data.cpf;
          } else {
            this.showError("Erro ao carregar o registro.");
          }
        });
    }
  }
};
</script>

<style scoped>
#btnSave {
  position: fixed;
  bottom: 16px;
  right: 96px;
}
</style>