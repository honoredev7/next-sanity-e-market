import sanityClient from '@sanity/client';
import builder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ofcmsdqu',
  dataset: 'production',
  apiVersion: '2023-07-31',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const imageBuilder = builder(client);

export const urlFor = (source) => imageBuilder.image(source);
