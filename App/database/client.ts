import { Connection } from 'tedious';
import dotenv from 'dotenv';

dotenv.config();

const config = {  
    server: process.env.DB_SERVER, 
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USER, 
            password: process.env.DB_PASSWORD
        }
    },
    options: {
        database: process.env.DB_NAME,
        trustServerCertificate: true, // À utiliser uniquement en développement
    }
};  


const connection = new Connection(config);  

connection.on('connect', function(err) {  
    if (err) {
        console.error("Erreur de connexion: ", err);
    } else {
        console.log("Connecté à la Base De Données");
    }
});

export default connection;
