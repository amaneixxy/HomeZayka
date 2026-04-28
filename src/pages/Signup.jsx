import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Signup() {
  return (
    <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center py-12 px-4">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-3 mb-10 group">
        <img src={logo} alt="HomeZayka" className="h-16 w-auto rounded-2xl shadow-sm object-cover transition-transform group-hover:scale-105" />
      </Link>

      {/* Signup Card */}
      <div className="bg-white rounded-[3rem] p-10 shadow-sm w-full max-w-lg border border-dark/5">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl text-dark mb-2">Create account</h1>
          <p className="text-gray-text text-lg">Join our community of food lovers</p>
        </div>

        {/* Role Selection */}
        <p className="text-center text-gray-text text-sm font-medium mb-4">I want to join as a...</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            to="/signup/customer"
            className="p-6 rounded-[2rem] border-2 border-dark/5 hover:border-mustard hover:bg-mustard/5 transition-all flex flex-col items-center gap-3"
          >
            <div className="w-10 h-10 bg-warm-white rounded-full flex items-center justify-center">
              <i className="fas fa-user text-dark"></i>
            </div>
            <div className="text-center">
              <p className="font-bold text-dark">Customer</p>
              <p className="text-[10px] text-gray-text leading-tight">Order home-cooked meals</p>
            </div>
          </Link>

          <Link
            to="/signup/cook"
            className="p-6 rounded-[2rem] border-2 border-dark/5 hover:border-mustard hover:bg-mustard/5 transition-all flex flex-col items-center gap-3"
          >
            <div className="w-10 h-10 bg-warm-white rounded-full flex items-center justify-center">
              <i className="fas fa-hat-chef text-dark"></i>
            </div>
            <div className="text-center">
              <p className="font-bold text-dark">Cook</p>
              <p className="text-[10px] text-gray-text leading-tight">Share your cooking</p>
            </div>
          </Link>
        </div>

        <p className="text-center mt-8 text-gray-text text-lg">
          Already have an account? <Link to="/login" className="text-mustard font-bold hover:underline">Sign in</Link>
        </p>
      </div>

      <Link to="/" className="mt-10 text-gray-text hover:text-dark transition-colors flex items-center gap-2">
        <i className="fas fa-arrow-left text-sm"></i> Back to home
      </Link>
    </div>
  );
}