const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const PORT = 3200;



app.post('/test', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Brak wiadomości' });
  }

  try {
    await axios.post('https://discord.com/api/webhooks/1293185637591289876/2OuPqkZv4OdG3VZ14j35bZ33l2CO6o7z0w74ug2aOWBrWZ9K9fOhY0-WC9Q36Xmgzr_h', {
      content: message,
    });

    res.status(200).json({ success: 'Wiadomość wysłana' });
  } catch (error) {
    console.error('Błąd wysyłania do webhooka:', error);
    res.status(500).json({ error: 'Błąd wewnętrzny serwera' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
