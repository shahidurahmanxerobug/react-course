import app from "../config/app";

export default function Footer() {
  const { APP_NAME } = app;

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">{APP_NAME}</h2>
        <p className="text-sm">Your trusted online shopping destination.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}