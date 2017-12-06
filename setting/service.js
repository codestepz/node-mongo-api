
/* ======================================================================
 * Config RESTful API
 * ====================================================================== */

module.exports = {
    
    /* api service */
    'db_address' : '127.0.0.1',
    'port'       : 7000,

    /* db service */
    'db_host'    : '127.0.0.1',
    'db_port'    : 27017,
    'db_user'    : 'root',
    'db_pass'    : '123456',
    'db_name'    : 'db_node_api',
    
    /* url */
    'apiUrl'     : 'http://127.0.0.1:7000',
    'secret'     : 'node-mongo-api',
    'expires'    : (1440 * 1) // expires in 24 hours (1440:24 hours)
    
};