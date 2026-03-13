import React from 'react';
import SuperAdminLayout from '../../layouts/SuperAdminLayout';

const SuperAdminDashboard = () => {
  const stats = [
    { label: 'Total Libraries', value: '24', change: '+3 this month' },
    { label: 'Active Subscriptions', value: '21', change: '87.5% retention' },
    { label: 'Total Members', value: '5,481', change: '+142 this month' },
    { label: 'Monthly Revenue', value: '$4,320', change: '+12% vs last month' },
  ];

  return (
    <SuperAdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Dashboard Overview</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">Welcome back, Super Admin.</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 flex flex-col gap-2"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
              <p className="text-xs text-green-500">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Placeholder sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Recent Library Registrations</h3>
            <div className="space-y-3">
              {['City Central Library', 'Greenwood Public Library', 'Metro University Library'].map((lib) => (
                <div key={lib} className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{lib}</span>
                  <span className="text-xs bg-green-100 text-green-700 rounded-full px-3 py-1">Active</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Subscription Overview</h3>
            <div className="space-y-3">
              {[
                { plan: 'Basic', count: 10, color: 'bg-blue-400' },
                { plan: 'Standard', count: 8, color: 'bg-purple-400' },
                { plan: 'Premium', count: 3, color: 'bg-yellow-400' },
              ].map((item) => (
                <div key={item.plan} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-slate-700 dark:text-slate-300 flex-1">{item.plan}</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">{item.count} libraries</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;
