import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-tomato/10 rounded-full flex items-center justify-center mb-6">
        <i className="fas fa-exclamation-triangle text-4xl text-tomato"></i>
      </div>
      <h1 className="font-display text-5xl text-dark mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-text max-w-md mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-mustard hover:bg-mustard/90 text-dark px-8 py-3 rounded-full font-bold transition-all shadow-md flex items-center gap-2"
      >
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>
    </div>
  );
}
