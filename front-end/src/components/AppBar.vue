<template>
  <v-container>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Grupo A"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-height="50"
          src="@/assets/white-logo.png"
          height="50"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="http://www.grupoa.com.br" target="_blank" text>
        <span class="mr-2">Visitar WebSite</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer absolute v-model="drawer" temporary id="menu-drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="module-header-style">Módulo Acadêmico</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link v-bind:to="item.route">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    drawer: false,
    items: [
      { title: "Início", icon: "mdi-view-dashboard", route: "/" },
      { title: "Alunos", icon: "mdi-account", route: "/student/list" }
    ]
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style>
.header-space {
  height: 70px;
}

.module-header-style {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}

#menu-drawer {
  position: fixed;
  margin-top: 65px;
}
</style>