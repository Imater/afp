supervisorctl stop afp
fuser -k 3001/tcp
supervisorctl start afp

