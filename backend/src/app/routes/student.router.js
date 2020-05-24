const StudentController = require("../controllers/student.controller");

class StudentRouter {
  async addRoutes(routes) {
    // get student by RA
    routes.get("/api/student/get/:ra", StudentController.getById);
    // get student list
    routes.get("/api/student/get", StudentController.getAll);
    // insert a student
    routes.post("/api/student/create", StudentController.create);
    // update student data
    routes.put("/api/student/update/:ra", StudentController.update);
    // remove a student
    routes.delete("/api/student/delete", StudentController.delete);
  }
}

module.exports = new StudentRouter();
