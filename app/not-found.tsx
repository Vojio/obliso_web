export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <a
        href="/"
        className="px-4 py-2 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
      >
        Return Home
      </a>
    </div>
  );
}