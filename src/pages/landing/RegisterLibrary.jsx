import React from 'react';

const RegisterLibrary = () => {
  return (
    <div className="py-20 flex justify-center items-center h-full">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Register Your Library</h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
          Join LibTrack today and transform your library management.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Library Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Admin Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600" />
          </div>
          <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl transition-colors mt-6">
            Register Library
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterLibrary;
