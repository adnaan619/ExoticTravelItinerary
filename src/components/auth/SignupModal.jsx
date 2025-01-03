import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SignupModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with increased blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
          />

          {/* Modal - centered with flex */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute -right-2 -top-2 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h2 className="text-2xl font-semibold text-center mb-6">
                    Sign up to view this page
                  </h2>

                  <div className="space-y-4">
                    {/* Facebook Sign up */}
                    <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white py-3 px-4 rounded-full hover:bg-[#1864D6] transition-colors shadow-md hover:shadow-lg">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Sign up with Facebook</span>
                    </button>

                    {/* Google Sign up */}
                    <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 px-4 rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
                      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                      <span>Sign up with Google</span>
                    </button>

                    {/* Divider */}
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">or</span>
                      </div>
                    </div>

                    {/* Email/Password Form */}
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/90"
                      />
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/90"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          👁
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
                      >
                        Sign up with email
                      </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                      Already have an account?{' '}
                      <button className="text-gray-900 font-medium hover:underline">
                        Log in
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}; 