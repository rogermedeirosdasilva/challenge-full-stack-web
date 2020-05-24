import Vue from "vue";
import Router from "vue-router";

import StudentList from "@/views/StudentList";
import StudentDetail from "@/views/StudentDetail";

Vue.use(Router);

const routes = [
	{
		name: "Home",
		path: "/",
		redirect: "/student/list"
	},
	{
		name: "Students List",
		path: "/student/list",
		component: StudentList,
	},
	{
		name: "Student",
		path: "/student/add",
		component: StudentDetail,
	},	
];

const router = new Router({ routes });

export default router;