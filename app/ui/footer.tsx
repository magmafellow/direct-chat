export default function Footer({ className }: { className?: string }){
  return (
    <footer className={`min-h-28 flex justify-between items-center ${className}`}>
      <span>direct chat app</span>
      <span>powered by <span className="text-red-400 font-semibold tracking-wider">magmafellow</span>.</span>
    </footer>
  )
}
