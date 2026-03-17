import React from 'react';
import { Link } from 'react-router-dom';
import SuperAdminLayout from '../../layouts/SuperAdminLayout';

const AddClient = () => {
  return (
    <SuperAdminLayout>
      <div className="flex-1 flex justify-center py-10 px-6 w-full">
        <div className="max-w-[800px] w-full flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <Link to="/super-admin/dashboard" className="text-sm font-medium hover:underline">
                Back to Client List
              </Link>
            </div>
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">Add New Client</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">Onboard a new library organization to the platform infrastructure.</p>
          </div>
          
          {/* Form Section */}
          <form className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-8 flex flex-col gap-6">
              {/* Organization Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 col-span-full">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Library / Organization Name</span>
                  <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 px-4 text-base" placeholder="e.g. Metropolitan Public Library" type="text"/>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Primary Contact Person</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400">person</span>
                    <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 pl-10 pr-4 text-base" placeholder="Full Name" type="text"/>
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Email Address</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400">mail</span>
                    <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 pl-10 pr-4 text-base" placeholder="email@organization.org" type="email"/>
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Phone Number</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400">call</span>
                    <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 pl-10 pr-4 text-base" placeholder="+1 (555) 000-0000" type="tel"/>
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Plan Selection</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400">layers</span>
                    <select defaultValue="" className="form-select w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary h-12 pl-10 pr-4 text-base appearance-none">
                      <option disabled value="">Select a plan</option>
                      <option value="basic">Basic - Up to 1k users</option>
                      <option value="standard">Standard - Up to 10k users</option>
                      <option value="premium">Premium - Unlimited users</option>
                    </select>
                  </div>
                </label>
                <label className="flex flex-col gap-2 col-span-full">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Physical Address</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400">location_on</span>
                    <textarea className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary min-h-[100px] pl-10 pr-4 py-3 text-base resize-none" placeholder="Enter full street address, city, state, and zip code"></textarea>
                  </div>
                </label>
              </div>
            </div>
            
            {/* Form Footer Actions */}
            <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-4">
              <Link to="/super-admin/dashboard" className="px-6 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" type="button">
                Cancel
              </Link>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md shadow-primary/20 transition-all flex items-center gap-2" type="submit">
                <span className="material-symbols-outlined text-sm">person_add</span>
                Create Client
              </button>
            </div>
          </form>
          
          {/* Help/Notice section */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <span className="material-symbols-outlined text-primary">info</span>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Invitation Email</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Upon creation, an onboarding invitation will be sent to the primary contact email provided above. They will need to set their password to activate the account.</p>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default AddClient;
