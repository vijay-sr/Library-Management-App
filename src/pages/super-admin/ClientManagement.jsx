import React from 'react';
import { Link } from 'react-router-dom';
import SuperAdminLayout from '../../layouts/SuperAdminLayout';

const ClientManagement = () => {
    return (
        <SuperAdminLayout>
            <div className="p-8">
                {/* Page Title and CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Client Management</h2>
                        <p className="text-slate-500 mt-1">Directory of all libraries within the network.</p>
                    </div>
                    <Link to="/super-admin/add-client" className="flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/25">
                        <span className="material-symbols-outlined">add</span>
                        <span>Add New Client</span>
                    </Link>
                </div>
                {/* Filters */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap gap-3 mb-6">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold border border-primary/20">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        All Plans
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors border border-transparent text-slate-700">
                        Basic
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors border border-transparent text-slate-700">
                        Standard
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors border border-transparent text-slate-700">
                        Premium
                    </button>
                    <div className="w-px h-6 bg-slate-200 self-center mx-1"></div>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors border border-transparent text-slate-700">
                        Status: Active
                        <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                </div>
                {/* Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-500">Library Name</th>
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-500">Location</th>
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-500">Plan Type</th>
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-500">Status</th>
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {/* Row 1 */}
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">NL</div>
                                            <div className="font-bold text-slate-900">Northwood Public Library</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-600 text-sm">Seattle, WA</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">Premium</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-all">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">CR</div>
                                            <div className="font-bold text-slate-900">Cedar Ridge Community Center</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-600 text-sm">Austin, TX</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">Standard</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-all">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">OC</div>
                                            <div className="font-bold text-slate-900">Oak Creek Children's Library</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-600 text-sm">Portland, OR</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">Basic</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                            Inactive
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-all">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">SV</div>
                                            <div className="font-bold text-slate-900">Silicon Valley Tech Archive</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-600 text-sm">Palo Alto, CA</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">Premium</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-all">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 5 */}
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">EP</div>
                                            <div className="font-bold text-slate-900">Evergreen Park Resource Center</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-600 text-sm">Denver, CO</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">Standard</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-all">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-all">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="px-6 py-4 bg-slate-50 flex items-center justify-between border-t border-slate-200">
                        <p className="text-sm text-slate-500">
                            Showing <span className="font-bold text-slate-900">1</span> to <span className="font-bold text-slate-900">5</span> of <span className="font-bold text-slate-900">42</span> results
                        </p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-100 disabled:opacity-50">Previous</button>
                            <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-100">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </SuperAdminLayout>
    );
};

export default ClientManagement;
