import type { Product } from "@/types/product";

const BASE_URL = "https://api.naqshizarr.uz";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/product`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
export const fetchProductById = async (id: string | number) => {
  const res = await fetch(`${BASE_URL}/product/${id}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};
export interface OrderPayload {
  fullName: string;
  phone: string;
  address: string;
  email: string;
  oferta: boolean;
  totalPrice: number;
  items: { productId: number; quantity: number }[];
}

export async function submitOrder(payload: OrderPayload): Promise<void> {
  const res = await fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to submit order");
}
