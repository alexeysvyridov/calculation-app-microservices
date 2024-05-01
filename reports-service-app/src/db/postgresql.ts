import postgresql from 'pg';

const {Pool} = postgresql;

const pool = new Pool({
  user: process.env.DB_NAME,
  // user: process.env.NODE_ENV === 'development' && (os.userInfo() || {}).username || '',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port:  Number(process.env.DB_PORT),
})
pool.connect((err) => {
  if(err) throw err;

  console.log('Postgress DB was successfully connected !');
})

export {pool}