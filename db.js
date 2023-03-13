// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "boubou",
//     host: "localhost",
//     port: 5432,
//     database: "perdoto"
// });

// module.exports = pool;

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "uxcf8lzs7u2colimgu5a",
    password: "cqXLYCpd5n87lgCsMeV5dYqdk3JOZu",
    host: "bzpdcbmjwt4prbu81hpn-postgresql.services.clever-cloud.com",
    port: 5432,
    database: "bzpdcbmjwt4prbu81hpn"
});

module.exports = pool;