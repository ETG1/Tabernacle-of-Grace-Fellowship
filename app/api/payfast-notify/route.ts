import { NextRequest, NextResponse } from 'next/server';
import { generatePayFastSignature } from '@/config/payfast';
import dns from 'dns';
import { promisify } from 'util';

const dnsResolve = promisify(dns.resolve);

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    const data: Record<string, string> = {};
    
    // Convert params to object
    params.forEach((value, key) => {
      data[key] = value;
    });

    // Verify signature
    const signature = data.signature;
    const calculatedSignature = generatePayFastSignature(data, process.env.PAYFAST_PASSPHRASE || '');
    
    if (signature !== calculatedSignature) {
      console.error('Invalid signature');
      return new NextResponse('Invalid signature', { status: 400 });
    }

    // Verify source IP
    const validHosts = [
      'www.payfast.co.za',
      'sandbox.payfast.co.za',
      'w1w.payfast.co.za',
      'w2w.payfast.co.za',
    ];

    const ip = req.headers.get('x-forwarded-for') || req.ip;
    const isValidIP = await validatePayFastIP(ip, validHosts);

    if (!isValidIP) {
      console.error('Invalid source IP:', ip);
      return new NextResponse('Invalid source IP', { status: 403 });
    }

    // Process the payment notification
    const paymentData = {
      paymentStatus: data.payment_status,
      amount: data.amount_gross,
      merchantPaymentId: data.m_payment_id,
      pfPaymentId: data.pf_payment_id,
      itemName: data.item_name,
      emailAddress: data.email_address,
      name: data.name_first,
      timestamp: new Date().toISOString(),
    };

    // Here you would typically:
    // 1. Verify that the payment amount matches your records
    // 2. Update your database with the payment status
    // 3. Send confirmation emails
    // 4. Update any relevant order/donation status
    
    console.log('Payment notification received:', paymentData);

    // Return success
    return new NextResponse('OK', { status: 200 });

  } catch (error) {
    console.error('Error processing PayFast notification:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

async function validatePayFastIP(ip: string | null, validHosts: string[]): Promise<boolean> {
  if (!ip) return false;

  try {
    // Get IP addresses for all valid hosts
    const validIPs = await Promise.all(
      validHosts.map(async (host) => {
        try {
          const addresses = await dnsResolve(host);
          return addresses;
        } catch (error) {
          console.error(`Error resolving host ${host}:`, error);
          return [];
        }
      })
    );

    // Flatten array of IP addresses
    const allowedIPs = validIPs.flat();

    // Check if the request IP is in the list of allowed IPs
    return allowedIPs.includes(ip);

  } catch (error) {
    console.error('Error validating PayFast IP:', error);
    return false;
  }
} 