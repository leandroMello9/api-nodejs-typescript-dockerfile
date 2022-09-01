from node
workdir /app
copy package*.json .
copy tsconfig.json .
copy . .
run ls -a
run npm install
run npm run build
expose 3333
cmd ["npm", "run", "start"]