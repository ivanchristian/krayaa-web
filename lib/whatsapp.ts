export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function redirectToWhatsapp(message: string) {
  window.location.href = buildWhatsappUrl(message);
}

export function generalWhatsappMessage() {
  return 'Hi Krayaa, I want to know more about Krayaa and the upcoming launch.';
}

export function waitlistWhatsappMessage(audience: string, email: string) {
  const normalizedAudience = audience.toLowerCase();

  if (normalizedAudience === 'creator') {
    return [
      'Hi Krayaa, I would like to join the creator waitlist.',
      '',
      `Email: ${email}`,
      'I am interested in early access to the creator partner program, authenticated Korean supply, and exclusive launch drops.',
      '',
      'Please add me to the creator launch list.',
    ].join('\n');
  }

  if (normalizedAudience === 'brand') {
    return [
      'Hi Krayaa, I would like to join the brand partnership waitlist.',
      '',
      `Email: ${email}`,
      'I am interested in learning how Krayaa can support Korean brand entry into India through compliance, customs, fulfillment, and creator-led distribution.',
      '',
      'Please share the next steps for brand partners.',
    ].join('\n');
  }

  return [
    'Hi Krayaa, I would like to join the buyer waitlist.',
    '',
    `Email: ${email}`,
    'I am interested in early access to authenticated K-beauty, K-pop merch, Korean TCG, and Korean culture drops in India.',
    '',
    'Please add me to the launch list.',
  ].join('\n');
}

export function creatorApplicationWhatsappMessage(data: {
  name: string;
  handle: string;
  niche: string;
  followers: string;
  about: string;
}) {
  return [
    'Hi Krayaa, I would like to apply for the Creator Partner Program.',
    '',
    `Name: ${data.name}`,
    `Instagram / YouTube handle: ${data.handle}`,
    `Niche: ${data.niche}`,
    `Follower range: ${data.followers}`,
    data.about ? `About me: ${data.about}` : 'About me: Not provided',
    '',
    'I am interested in hosting authenticated Korean drops and joining the private launch creator program.',
  ].join('\n');
}

export function brandPartnershipWhatsappMessage(data: {
  brandName: string;
  contact: string;
  website: string;
  category: string;
  email: string;
  about: string;
}) {
  return [
    'Hi Krayaa, I would like to inquire about a brand partnership for India entry.',
    '',
    `Brand name: ${data.brandName}`,
    `Your name + role: ${data.contact}`,
    `Brand website / Instagram: ${data.website}`,
    `Category: ${data.category}`,
    `Email: ${data.email}`,
    data.about ? `About the brand: ${data.about}` : 'About the brand: Not provided',
    '',
    'We are interested in Krayaa support for compliance, customs, fulfillment, and creator-led distribution in India.',
  ].join('\n');
}
