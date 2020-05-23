import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import StudentList from "@/views/StudentList";

Vue.use(Router);

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
    },
    {
        name: "Students List",
        path: "/student/list",
        component: StudentList,
    },    
];

const router = new Router({ routes });

export default router;