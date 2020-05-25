const { students } = require('../models');

class StudentController {
   async create(req, res) {
      try {
         const objStudent = req.body;

         const result = await students.findOne({
            where: { ra: objStudent.ra }
         });

         if (result !== null) {
            return res.status(500).send({ message: "Já existe um aluno com este número de RA." });
         }

         const response = await students.create(objStudent);
         return res.status(201).send(response);
      } catch (error) {
         return res.send(500).send(error);
      }
   }

   async update(req, res) {
      try {
         const { ra } = req.params;
         const objStudent = req.body;

         const [updated] = await students.update(objStudent, {
            where: { ra }
         });

         if (updated) {
            return res.status(200).send();
         }

         return res.status(204).send({ message: "Objeto não encontrado" });
      } catch (error) {
         return res.status(500).send(error);
      }
   }

   async delete(req, res) {
      try {
         const { ra } = req.params;
         const deleted = await students.destroy({
            where: { ra }
         });

         if (deleted) {
            return res.status(200).send();
         }

         return res.status(204).send({ message: "Objeto não encontrado" });
      } catch (error) {
         return res.status(500).send(error);
      }
   }

   async getById(req, res) {
      try {
         const { ra } = req.params;
         const result = await students.findOne({
            where: { ra }
         });

         if (!result) {
            return res.status(204).send({ message: "Objeto não encontrado." });
         }

         return res.status(200).send(result);
      } catch (error) {
         return res.status(500).send(error);
      }
   }

   async getAll(req, res) {
      try {
         const result = await students.findAll();

         return res.status(200).send(result);
      } catch (error) {
         return res.status(500).send(error);
      }
   }
}

module.exports = new StudentController();
