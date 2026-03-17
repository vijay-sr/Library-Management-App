import React from 'react';
import { Link } from 'react-router-dom';
import SuperAdminLayout from '../../layouts/SuperAdminLayout';

const SuperAdminDashboard = () => {
  return (
    <SuperAdminLayout>
      <div className="p-8">
        {/* BEGIN: Header */}
        <header className="flex justify-between items-center mb-8" data-purpose="page-header">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">System Overview</h1>
            <p className="text-sm text-slate-500">Real-time performance metrics and client management</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-white border border-slate-200 text-sm font-semibold rounded-custom shadow-sm hover:bg-slate-50">Download Reports</button>
            <Link to="/super-admin/add-client" className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-custom shadow-md hover:bg-primary-600 transition-colors">+ Add New Client</Link>
          </div>
        </header>
        {/* END: Header */}
        
        {/* BEGIN: High-Level Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-purpose="metrics-grid">
          <div className="bg-white p-6 rounded-custom border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Clients</span>
              <div className="p-2 bg-blue-50 rounded-full"><svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
            </div>
            <div className="text-3xl font-bold text-slate-800">1,284</div>
            <div className="mt-2 text-xs text-green-600 font-medium flex items-center">
              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              12% vs last month
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-custom border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Active Subscriptions</span>
              <div className="p-2 bg-green-50 rounded-full"><svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
            </div>
            <div className="text-3xl font-bold text-slate-800">1,120</div>
            <div className="mt-2 text-xs text-slate-400 font-medium">87.2% Retention rate</div>
          </div>
          
          <div className="bg-white p-6 rounded-custom border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Revenue</span>
              <div className="p-2 bg-purple-50 rounded-full"><svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
            </div>
            <div className="text-3xl font-bold text-slate-800">$42.5K</div>
            <div className="mt-2 text-xs text-green-600 font-medium flex items-center">
              <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              8.4% growth
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-custom border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">New Sign-ups</span>
              <div className="p-2 bg-orange-50 rounded-full"><svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
            </div>
            <div className="text-3xl font-bold text-slate-800">48</div>
            <div className="mt-2 text-xs text-slate-400 font-medium">Last 7 days</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* BEGIN: Revenue Overview Chart Container */}
          <section className="lg:col-span-2 bg-white rounded-custom border border-slate-200 shadow-sm p-6" data-purpose="revenue-chart">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Revenue Overview</h2>
              <select className="text-xs border-slate-200 rounded-custom px-2 py-1 focus:ring-primary">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="relative h-64 w-full flex items-end justify-between gap-2 px-4 pt-10">
              <div className="absolute inset-0 flex flex-col justify-between py-10">
                <div className="w-full border-t border-slate-50 border-dashed"></div>
                <div className="w-full border-t border-slate-50 border-dashed"></div>
                <div className="w-full border-t border-slate-50 border-dashed"></div>
                <div className="w-full border-t border-slate-50 border-dashed"></div>
              </div>
              <div className="flex-1 bg-primary-100 rounded-t h-[40%] relative group cursor-pointer">
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">$12k</div>
              </div>
              <div className="flex-1 bg-primary-200 rounded-t h-[55%] relative group cursor-pointer">
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">$18k</div>
              </div>
              <div className="flex-1 bg-primary-300 rounded-t h-[45%] relative group cursor-pointer">
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">$15k</div>
              </div>
              <div className="flex-1 bg-primary-400 rounded-t h-[75%] relative group cursor-pointer">
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">$28k</div>
              </div>
              <div className="flex-1 bg-primary-500 rounded-t h-[90%] relative group cursor-pointer">
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">$38k</div>
              </div>
              <div className="flex-1 bg-primary rounded-t h-[100%] relative group cursor-pointer">
                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">$42k</div>
              </div>
            </div>
            <div className="flex justify-between mt-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </section>
          
          <section className="bg-white rounded-custom border border-slate-200 shadow-sm p-6" data-purpose="recent-signups">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Recent Sign-ups</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">CL</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">City Library</p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
                <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded uppercase">Enterprise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-emerald-50 flex items-center justify-center font-bold text-emerald-600">UN</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">Uni Central Lib</p>
                  <p className="text-xs text-slate-500">5 hours ago</p>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase">Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-amber-50 flex items-center justify-center font-bold text-amber-600">ST</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">St. Mary Academy</p>
                  <p className="text-xs text-slate-500">12 hours ago</p>
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Standard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-rose-50 flex items-center justify-center font-bold text-rose-600">CH</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">Child's Play Books</p>
                  <p className="text-xs text-slate-500">1 day ago</p>
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">Basic</span>
              </div>
            </div>
            <button className="w-full mt-6 text-sm text-primary font-semibold hover:underline">View All New Sign-ups</button>
          </section>
        </div>
        
        {/* BEGIN: Client Management Table */}
        <section className="bg-white rounded-custom border border-slate-200 shadow-sm overflow-hidden" data-purpose="client-table-section">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-slate-800">Library Clients</h2>
            <div className="relative max-w-sm w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
              <input className="w-full pl-10 pr-4 py-2 text-sm border-slate-200 rounded-custom focus:ring-primary focus:border-primary" placeholder="Search libraries, locations..." type="text"/>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" id="library-clients-table">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Library Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Plan Type</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xs mr-3">BL</div>
                      <span className="text-sm font-semibold text-slate-700">Beacon Hill Public</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">Boston, MA</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[11px] font-bold rounded bg-purple-100 text-purple-700 uppercase">Enterprise</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-sm text-slate-600">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs mr-3">SL</div>
                      <span className="text-sm font-semibold text-slate-700">Southside Learning</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">Chicago, IL</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[11px] font-bold rounded bg-blue-100 text-blue-700 uppercase">Premium</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-slate-300 mr-2"></span>
                      <span className="text-sm text-slate-600 font-medium">Inactive</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs mr-3">GV</div>
                      <span className="text-sm font-semibold text-slate-700">Green Valley High</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">Denver, CO</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[11px] font-bold rounded bg-slate-100 text-slate-600 uppercase">Standard</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-sm text-slate-600">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs mr-3">PL</div>
                      <span className="text-sm font-semibold text-slate-700">Portside Little Lib</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">Seattle, WA</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[11px] font-bold rounded bg-slate-100 text-slate-600 uppercase">Basic</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-sm text-slate-600">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm text-slate-500 font-medium">Showing 4 of 1,284 clients</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-slate-200 rounded-custom text-sm font-semibold hover:bg-slate-50 disabled:opacity-50">Prev</button>
              <button className="px-3 py-1 bg-primary text-white border border-primary rounded-custom text-sm font-semibold">1</button>
              <button className="px-3 py-1 border border-slate-200 rounded-custom text-sm font-semibold hover:bg-slate-50">2</button>
              <button className="px-3 py-1 border border-slate-200 rounded-custom text-sm font-semibold hover:bg-slate-50">Next</button>
            </div>
          </div>
        </section>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;
