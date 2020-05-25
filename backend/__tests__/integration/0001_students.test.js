const request = require("supertest");
const app = require("../../src/app");

describe("Students", () => {
   it("Should return the student with the corresponding RA", async () => {
      const response = await request(app).get("/api/student/get/000120");

      // Expects a response code 200 from API
      expect(response.status).toBe(200);

      // Should the returned student be named Ozzy Ousbourn
      const { name } = response.body;
      expect(name).toBe("Ozzy Ousbourn");
   });

   it("Should return error 204 when searching for a nonexistent RA number", async () => {
      const response = await request(app).get("/api/student/get/333222");

      // Expects a response code 204 from API
      expect(response.status).toBe(204);
   });

   it("Should return the student list", async () => {
      const response = await request(app).get("/api/student/get");

      // Expects a response code 200 from API
      expect(response.status).toBe(200);

      // Expecting 8 students from test database
      expect(response.body.length).toBe(8);
   });

   it("Should insert a student in the database when received all the correct properties", async () => {
      const response = await request(app).post("/api/student/create")
         .send({
            ra: "000299",
            name: "Roger Medeiros",
            email: "roger@vuol.com",
            cpf: "12330285401"
         });

      // Expects a response code 201 from API
      expect(response.status).toBe(201);
   });

   it("Should return error message when trying to insert a student with an RA number already registered", async () => {
      const response = await request(app).post("/api/student/create")
         .send({
            ra: "000120",
            name: "Roger Medeiros",
            email: "roger@vuol.com",
            cpf: "12330285401"
         });

      // Expects a response code 500 from API
      expect(response.status).toBe(500);

      // Error message can be "Já existe um aluno com este número de RA."
      expect(response.body.message).toBe("Já existe um aluno com este número de RA.");
   });

   it("Should delete an existing student from the database when you receive an existing RA number", async () => {
      const response = await request(app).delete("/api/student/delete/000120")
         .send();

      // Expects a response code 200 from API
      expect(response.status).toBe(200);
   });

   it("Should return a 204 code when attempting to remove a student with a non-existent RA number", async () => {
      const response = await request(app).delete("/api/student/delete/333222")
         .send();

      // Expects a response code 204 from API
      expect(response.status).toBe(204);
   });

   it("Should update student data in the database when received all the correct properties", async () => {
      const response = await request(app).put("/api/student/update/000299")
         .send({
            name: "Roger Medeiros da Silva"            
         });

      // Expects a response code 200 from API
      expect(response.status).toBe(200);
   });

   it("Should return a 204 code when attempting to update a student with a non-existent RA number", async () => {
      const response = await request(app).put("/api/student/update/333222")
         .send({
            name: "Roger Medeiros da Silva"            
         });

      // Expects a response code 204 from API
      expect(response.status).toBe(204);
   });
});
