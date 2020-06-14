import debug from 'debug'

const log = debug('book-hunt-api:server')
const errorLog = debug('book-hunt-api:error')

export default log

export { log, errorLog }