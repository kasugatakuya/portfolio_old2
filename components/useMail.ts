import { useState } from 'react';

export const useMail = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const send = async () => {
    alert('送信が完了しました。後日メールにてご連絡させていただきます。')
    await fetch('/api/mail', {
      method: 'POST',
      body: `
【名前】
${name}

【メールアドレス】
${mail}

【お問い合わせ内容】
${message}
`,
    });
  };

  return {
    setName, setMail, setMessage, send
  };
};