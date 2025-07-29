interface PayPalButtonProps {
  amount: string
  description: string
}

export default function PayPalButton({ amount, description }: PayPalButtonProps) {
  // Simple PayPal button - you can enhance this with PayPal SDK
  const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=info@favoredsinner.com&item_name=${encodeURIComponent(description)}&amount=${amount}&currency_code=USD`
  
  return (
    <a
      href={paypalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline text-sm inline-block"
    >
      Buy Now
    </a>
  )
}