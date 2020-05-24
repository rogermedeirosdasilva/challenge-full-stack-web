const StudentController = require("../controllers/student.controller");

class StudentRouter {
  async addRoutes(routes) {
    // get student by RA
    routes.get("/api/user/get", StudentController.getById);
    // insert a student
    routes.post("/api/user/create", StudentController.create);
    // remove a student
    routes.delete("/api/user/delete", StudentController.delete);
  }
}

module.exports = new StudentRouter();
