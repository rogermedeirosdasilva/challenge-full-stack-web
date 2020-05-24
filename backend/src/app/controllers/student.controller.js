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

   async delete(req, res) {
      try {
         const { ra } = req.body;
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
         const { ra } = req.query;
         const retorno = await students.findOne({
            where: { ra }
         });

         if (!retorno) {
            return res.status(204).send({ message: "Objeto não encontrado." });
         }

         return res.status(200).send(retorno);
      } catch (error) {
         return res.status(500).send(error);
      }
   }
}

module.exports = new StudentController();
