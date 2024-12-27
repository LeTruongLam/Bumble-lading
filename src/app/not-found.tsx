import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-lg text-center mb-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
}
