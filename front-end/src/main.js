import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.mixin({
	data: function () {
		return {
			globalApiUrl: "http://localhost:3000/"
		};
	}
});

new Vue({
	vuetify,
	render: h => h(App),
	router
}).$mount("#app");
