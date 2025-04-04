export default async function Review({ params, }: {
   params: Promise<{ reviewId: string,productId: string }>;
}) {
    const { reviewId, productId } = await params
    return <h1>{reviewId} Review page of product {productId}</h1>;
    
}