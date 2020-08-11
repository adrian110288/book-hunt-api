import dotenv from "dotenv"
import app from '../app'
import http from 'http'
import {errorLog, log} from "../util/log"
import {getDatabase} from "../db";
import {EnvironmentType} from "../config/environments";

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

getDatabase(process.env.NODE_ENV as EnvironmentType).connect().then(() => {

    /**
     * Get port from environment and store in Express.
     */
    const port = normalizePort(process.env.PORT || '3000')
    app.set('port', port)

    /**
     * Create HTTP www.
     */
    const www = http.createServer(app)

    /**
     * Listen on provided port, on all network interfaces.
     */

    www.listen(port)
    www.on('error', onError)
    www.on('listening', onListening)

    /**
     * Normalize a port into a number, string, or false.
     */

    function normalizePort(val: string) {
        const p = parseInt(val, 10)

        if (isNaN(p)) {
            // named pipe
            return val
        }

        if (p >= 0) {
            // port number
            return p
        }

        return false
    }

    /**
     * Event listener for HTTP www "error" event.
     */

// export interface ErrnoException extends Error {
//     errno?: number;
//     code?: string;
//     path?: string;
//     syscall?: string;
//     stack?: string;
// }

    function onError(error: any) {
        if (error.syscall !== 'listen') {
            throw error
        }

        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                errorLog(bind + ' requires elevated privileges')
                process.exit(1)
                break
            case 'EADDRINUSE':
                errorLog(bind + ' is already in use')
                process.exit(1)
                break
            default:
                throw error
        }
    }

    /**
     * Event listener for HTTP www "listening" event.
     */

    function onListening() {
        const addr = www.address()
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port
        log('Listening on ' + bind)
    }
}).catch((err) => errorLog("Database could not be started!" + err));
