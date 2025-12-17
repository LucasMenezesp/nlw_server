import path from 'path';
import { fileURLToPath } from 'url'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database', 'database.sqlite')
    },
    migrations: {
      directory: path.resolve(__dirname, 'database', 'migrations')
    },
    useNullAsDefault: true,
  },
  // ...
};

export default config; 