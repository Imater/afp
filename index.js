import app from './server/server.js';
import http from 'http';

var server = http.createServer(app);

const PORT = process.env.PORT || 3001;


server.listen(PORT, function() {
    console.log('Server listening on', PORT);
});

//process.on('exit', ()=> {
//  console.info('server exit');
//  server.close();
//});
//process.on('SIGTERM', ()=> {
//  console.info('server sigterm');
//  server.close();
//});

process.once('SIGUSR2', function () {
  process.kill(process.pid, 'SIGUSR2');
});

//// first create a generic "terminator"
//let terminator = function(sig){
//    if (typeof sig === "string") {
//       console.log('%s: Received %s - terminating sample app ...',
//                   Date(Date.now()), sig);
//       process.exit(1);
//    }
//    console.log('%s: Node server stopped.', Date(Date.now()) );
//};
//
//// then implement it for every process signal related to exit/quit
//['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
// 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
//].forEach(function(element, index, array) {
//    process.on(element, function() { terminator(element); });
//});
