supervisorctl stop afp-prod
fuser -k 81/tcp
supervisorctl start afp-prod

