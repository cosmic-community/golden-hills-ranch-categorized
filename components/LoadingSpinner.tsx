export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-ranch-sage/20 border-t-ranch-sage rounded-full animate-spin"></div>
        <div className="sr-only">Loading...</div>
      </div>
    </div>
  )
}