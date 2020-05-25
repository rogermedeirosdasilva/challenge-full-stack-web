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
        :disabled="queryRA !== undefined"
        :counter="10"
        @blur="validate()"
        required
      ></v-text-field>

      <v-text-field
        v-model="cpf"
        :rules="cpfRules"
        label="CPF"
        :disabled="queryRA !== undefined"
        :counter="11"
        placeholder="Informe o número do documento"
        @blur="validate()"
        required
      ></v-text-field>
    </v-form>

    <v-btn bottom color="success" dark fab fixed :disabled="!valid" @click="save" id="btnSave">
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

    <v-snackbar v-model="snackbar" :timeout="2000">
      {{ message }}
      <v-btn color="blue" text @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>
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
    queryRA: undefined,
    snackbar: false
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    cancel() {
      this.$refs.form.reset();
      this.$router.push("/student/list");
    },
    showError(message) {
      this.message = message;
      this.sheet = true;
    },
    save() {
      let url = `${this.globalApiUrl}api/student/`;

      const data = {
        ra: this.ra,
        name: this.name,
        email: this.email,
        cpf: this.cpf
      };

      if (this.queryRA === undefined) {
        url = `${url}create`;
        axios.post(url, data).then(response => {
          if (response.status === 201) {
            this.snackbar = true;
            this.message = "Registro salvo com sucesso";
            setTimeout(() => {
              this.$router.push("/student/list");
            }, 2000); 
          } else {
            this.showError("Erro ao salvar o registro.");
          }
        });
      } else {
        url = `${url}update/${this.queryRA}`;

        axios.put(url, data).then(response => {
          if (response.status === 200) {
            this.snackbar = true;
            this.message = "Registro salvo com sucesso";
            setTimeout(() => {
              this.$router.push("/student/list");
            }, 2000);            
          } else {
            this.showError("Erro ao salvar o registro.");
          }
        });
      }
    }
  },
  created() {
    this.queryRA = this.$route.params.ra;
  },
  mounted() {
    if (this.queryRA !== undefined) {
      axios
        .get(`${this.globalApiUrl}api/student/get/${this.queryRA}`)
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