interface PayFastConfig {
  merchantId: string;
  merchantKey: string;
  passPhrase: string;
  returnUrl: string;
  cancelUrl: string;
  notifyUrl: string;
  sandbox: boolean;
}

const config: PayFastConfig = {
  merchantId: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID || '',
  merchantKey: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY || '',
  passPhrase: process.env.PAYFAST_PASSPHRASE || '',
  returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/thank-you`,
  cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/give`,
  notifyUrl: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/payfast-notify`,
  sandbox: process.env.NODE_ENV !== 'production'
};

export const getPayFastUrl = () => {
  return config.sandbox
    ? 'https://sandbox.payfast.co.za/eng/process'
    : 'https://www.payfast.co.za/eng/process';
};

export const generatePayFastSignature = (data: Record<string, string>, passPhrase: string) => {
  // Remove signature if it exists
  delete data.signature;

  // Create parameter string
  const paramString = Object.entries(data)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => `${key}=${encodeURIComponent(value.trim()).replace(/%20/g, '+')}`)
    .join('&');

  // Add passphrase if it exists
  const stringToHash = `${paramString}${passPhrase ? `&passphrase=${encodeURIComponent(passPhrase.trim())}` : ''}`;

  // Hash the string using MD5
  const crypto = require('crypto');
  return crypto.createHash('md5').update(stringToHash).digest('hex');
};

export const createPayFastFormData = (amount: number, itemName: string, name: string, email: string) => {
  const data = {
    merchant_id: config.merchantId,
    merchant_key: config.merchantKey,
    return_url: config.returnUrl,
    cancel_url: config.cancelUrl,
    notify_url: config.notifyUrl,
    amount: amount.toFixed(2),
    item_name: itemName,
    name_first: name,
    email_address: email,
  };

  const signature = generatePayFastSignature(data, config.passPhrase);
  return { ...data, signature };
};

export default config; 