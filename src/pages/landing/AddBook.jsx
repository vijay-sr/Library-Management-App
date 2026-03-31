import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useToast } from '../../components/common/ToastContext';

const AddBook = () => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    publication_date: '',
    edition: '',
    stock_count: '',
    description: '',
    cover_image: null,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

   // Function to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


const uploadImage = async (file) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `book-covers/${fileName}`;
  // 1. Upload the file to 'books' bucket
  const { error: uploadError } = await supabase.storage
    .from('books')
    .upload(filePath, file);
  if (uploadError) throw uploadError;
  // 2. Get the public URL
  const { data: { publicUrl } } = supabase.storage
    .from('books')
    .getPublicUrl(filePath);
  return publicUrl;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1. Get the current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("Unauthorized: Please log in again.");

    let imageUrl = '';
    
    // 2. Upload image if selected
    if (imageFile) {
      imageUrl = await uploadImage(imageFile);
    }

    // 3. Prepare book data for insertion
    const { 
      title, 
      author, 
      isbn, 
      category, 
      publication_date, 
      edition, 
      stock_count, 
      description 
    } = formData;

    // 4. Insert book data into 'books' table
    const { error } = await supabase
      .from('books')
      .insert([
        { 
          title, 
          author, 
          isbn, 
          category, 
          publication_date: publication_date || null, // Ensure empty date is null
          edition, 
          stock_count: stock_count ? parseInt(stock_count, 10) : 0, // Convert to number or default to 0
          description,
          cover_image: imageUrl, 
          user_id: user.id, 
          created_at: new Date() 
        }
      ]);

    if (error) throw error;

    showToast('Book added successfully!', 'success');
    // Clear form
    setFormData({
      title: '',
      author: '',
      isbn: '',
      category: '',
      publication_date: '',
      edition: '',
      stock_count: '',
      description: '',
      cover_image: null,
    });
    setImageFile(null);
    setImagePreview(null);
  } catch (error) {
    showToast(error.message, 'error');
  } finally {
    setLoading(false);
  }
};


  

  return (
    <div className="p-8 max-w-5xl mx-auto w-full">
      {/* Editorial Header */}
      <header className="mb-12">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">Archive Management</span>
        <h1 className="text-[40px] md:text-[60px] font-black tracking-[-0.033em] text-slate-900 dark:text-white leading-none">Register New Entry.</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl text-lg">Fill the ledger with precise metadata to maintain the integrity of the Indigo Archive digital collection.</p>
      </header>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Book Details */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Core Metadata</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Book Title</label>
                <input name='title' value={formData.title} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium placeholder:text-slate-300" placeholder="e.g., The Architecture of Light" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Author</label>
                <input name='author' value={formData.author} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium" placeholder="Full name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">ISBN-13</label>
                <input name='isbn' value={formData.isbn} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium" placeholder="978-X-XXXX-XXXX-X" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Category</label>
                <select name='category' value={formData.category} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium appearance-none">
                  <option>Select Category</option>
                  <option>Architecture</option>
                  <option>Design Theory</option>
                  <option>Historical Fiction</option>
                  <option>Philosophy</option>
                  <option>Scientific Journals</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Publication Date</label>
                <input name='publication_date' value={formData.publication_date} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium" type="date" />
              </div>
            </div>
          </section>
          <section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Inventory & Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Edition</label>
                <input name='edition' value={formData.edition} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium" placeholder="e.g. 1st Edition, Revised" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Stock Count</label>
                <input name='stock_count' value={formData.stock_count} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium" placeholder="0" type="number" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Description</label>
                <textarea name='description' value={formData.description} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium resize-none" placeholder="Provide a detailed summary of the book's content..." rows="6"></textarea>
              </div>
            </div>
          </section>
        </div>
        {/* Right Column: Visual Assets */}
        <div className="lg:col-span-4 space-y-8 sticky top-24">
          <section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Cover Image</h3>
            </div>
            <div className="relative group">
              <div className="aspect-[2/3] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 overflow-hidden relative transition-all group-hover:border-primary/40">
                {imagePreview ? (
                  <img className="absolute inset-0 w-full h-full object-cover z-30" src={imagePreview} alt="Cover preview" />
                ) : (
                  <div className="text-center p-6 z-10">
                    <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">add_photo_alternate</span>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Upload Cover</p>
                    <p className="text-[10px] text-slate-400 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                )}
                <input 
                  onChange={handleImageChange} 
                  className="absolute inset-0 opacity-0 cursor-pointer z-40" 
                  type="file" 
                  accept="image/*"
                />
                {/* Preview Mockup Background */}
                {!imagePreview && <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 opacity-50"></div>}
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/10">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-lg">info</span>
                <p className="text-xs text-primary leading-relaxed dark:text-blue-400">
                  High-quality cover images improve visibility in the digital gallery. Recommended ratio 2:3.
                </p>
              </div>
            </div>
          </section>
          {/* Action Buttons */}
          <div className="grid grid-cols-1 gap-3">
            <button disabled={loading} className="w-full bg-primary text-white py-4 rounded-lg font-black tracking-tight text-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all active:scale-[0.98]" type="submit">
              Save Book
            </button>
            <Link 
              to="/dashboard"
              className="w-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 py-4 rounded-lg font-bold tracking-tight hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors active:scale-[0.98] text-center"
            >
              Discard Draft
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
