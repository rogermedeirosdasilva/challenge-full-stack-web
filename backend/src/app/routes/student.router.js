const StudentController = require("../controllers/student.controller");

class StudentRouter {
  async addRoutes(routes) {
    // get student by RA
    routes.get("/api/user/get/:ra", StudentController.getById);
    // insert a student
    routes.post("/api/user/create", StudentController.create);
    // update student data
    routes.put("/api/user/update/:ra", StudentController.update);
    // remove a student
    routes.delete("/api/user/delete", StudentController.delete);
  }
}

module.exports = new StudentRouter();
