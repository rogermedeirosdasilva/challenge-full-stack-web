<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app temporary>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">
          <v-img src="@/assets/white-logo.png" alt="Grupo A" width="60"></v-img>
        </span>
      </v-toolbar-title>
      <!--
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Pesquisar"
        class="hidden-sm-and-down"
      ></v-text-field>
      -->
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [{ icon: "mdi-contacts", title: "Alunos", route: "/student/list" }]
  })
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>