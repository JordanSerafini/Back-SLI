import { Request } from 'tedious';
import { Response } from 'express'; // Assurez-vous d'importer Response d'express
import connection from '../database/client';

const tableController = {
  getTables(req: any, res: any) {
    const request = new Request(
      "SELECT t.name AS table_name FROM sys.tables t",
      (err, rowCount, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send("Erreur lors de la requête à la base de données.");
          return;
        }

        if (rowCount === 0) {
          res.status(404).send("Aucune table trouvée dans la base de données.");
          return;
        }

        // Transforme les données de 'tedious' en format utilisable
        const tables = rows.map((row) => {
          return row[0].value; // Accéder à la première colonne qui est le nom de la table
        });

        res.status(200).send(tables);
      }
    );

    connection.execSql(request); // Exécute la requête
  },
};

export default tableController;
