db = db.getSiblingDB('swapi');

db.createUser({
    user: 'user',
    pwd: 'password',
    roles: [
      { role: 'readWrite', db: 'swapi' }
    ]
});