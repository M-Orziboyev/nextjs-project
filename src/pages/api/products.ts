// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15'
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;

  if (method === 'GET') {
    const products = await stripe.products.list({
      expand: ['data.default_price'],
  })
    return res.status(200).json({ products })
  } else {
    res.status(400).json({ message: 'Mehtod not allowed' });
  }
}
interface Data {
  message?: string;
  products?: Stripe.Response<Stripe.ApiList<Stripe.Product>>;
};