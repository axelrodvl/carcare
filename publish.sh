echo "Building carcare"
echo "Building website (in case of warning \"Local package.json exists, but node_modules missing\", run \"npm start\" and restart script)"
npm run build -- --prod
scp -r build/* vadim@axelrod.co:~/carcare/build