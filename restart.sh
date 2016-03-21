supervisorctl stop afp
fuser -k 3000/tcp
supervisorctl start afp

