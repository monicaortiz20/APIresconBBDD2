const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost', 
    user: 'monica',
    database: 'demo',
    password: '123456'
  })

//****para postear un autor es inser into
  
  const getAuthorsByEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`
                SELECT a.id_author,a.name,a.surname,a.image
                FROM authors AS a
                WHERE a.email=$1
                ORDER BY a.name;`,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}
