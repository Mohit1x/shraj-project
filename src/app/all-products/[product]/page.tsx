// src/app/all-products/[product]/page.tsx
import { products } from "@/constants/constant";
import ProductClient from "./ProductClient";

// This is the server component that generates static params
export async function generateStaticParams() {
  return products.map((product) => ({
    product: product.id.toString(),
  }));
}

// This just renders your client component
export default function ProductPage() {
  return <ProductClient />;
}
