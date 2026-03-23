import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'error') => {
    const id = Date.now() + Math.random().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000); // 4 seconds auto-dismiss
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div 
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md transform transition-all duration-300 translate-y-0 opacity-100 max-w-sm w-full
              ${toast.type === 'error' 
                ? 'bg-red-50/90 border-red-200 text-red-800 shadow-red-500/10 dark:bg-red-950/80 dark:border-red-800/50 dark:text-red-200' 
                : 'bg-emerald-50/90 border-emerald-200 text-emerald-800 shadow-emerald-500/10 dark:bg-emerald-950/80 dark:border-emerald-800/50 dark:text-emerald-200'
              }`}
            style={{
              animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
             <span className="material-symbols-outlined text-[22px] shrink-0 mt-0.5">
               {toast.type === 'error' ? 'error' : 'check_circle'}
             </span>
             <div className="flex-1 flex flex-col gap-1">
               <h3 className="font-bold text-sm">
                 {toast.type === 'error' ? 'Error' : 'Success'}
               </h3>
               <p className="text-sm font-medium opacity-90 leading-relaxed">{toast.message}</p>
             </div>
             <button 
               onClick={() => removeToast(toast.id)}
               className="p-1 -mr-2 -mt-2 opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-all"
             >
               <span className="material-symbols-outlined text-[18px]">close</span>
             </button>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(100%) scale(0.9); opacity: 0; }
          to { transform: translateX(0) scale(1); opacity: 1; }
        }
      `}} />
    </ToastContext.Provider>
  );
};
