const express = require('express');
const app = express();

const port = process.env.PORT || 5000

// const port = 5000

app.get('/', (req, res) => res.send('Remade 𝘽𝙮 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓. 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙈𝙮 𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓!!'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);