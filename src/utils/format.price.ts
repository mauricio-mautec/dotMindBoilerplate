export default function formatPrice(price: number | bigint): string {
  const response = price
    ? new Intl.NumberFormat('pt', {
        style: 'currency',
        currency: 'BRL'
      }).format(price)
    : 'Free'

  return response
}
