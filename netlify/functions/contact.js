const validatePayload = (body) => {
  const { name, email, message } = body || {};
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return 'Missing required fields';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Invalid email';
  }
  return null;
};

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), { status: 503 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const validationError = validatePayload(body);
  if (validationError) {
    return new Response(JSON.stringify({ error: validationError }), { status: 400 });
  }

  const { name, email, projectType, message, language } = body;
  const text = [
    'New portfolio request',
    `Lang: ${language || 'n/a'}`,
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Type: ${projectType || 'n/a'}`,
    `Message: ${message.trim()}`,
  ].join('\n');

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  const data = await telegramRes.json();
  if (!data.ok) {
    return new Response(JSON.stringify({ error: 'Delivery failed' }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

export const config = { path: '/api/contact' };
