export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center py-6 px-4 text-sm text-gray-600">
        <p className="max-w-4xl mx-auto">
          &copy; {new Date().getFullYear()} <span className="font-medium text-gray-700">Al Falah Islamic Centre</span>. All rights reserved.
        </p>
      </footer>
    );
  }
  