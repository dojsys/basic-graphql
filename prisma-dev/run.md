docker-compose up -d
prisma init --endpoint http://localhost:4466
prisma deploy
prisma generate
