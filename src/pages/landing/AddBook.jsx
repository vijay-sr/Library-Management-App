import React, { useState, useEffect } from 'react';
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
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [modalLoading, setModalLoading] = useState(false);

  // Fetch categories from DB on mount
  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');
    
    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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

  const handleAddCategory = async () => {
    const trimmed = newCatName.trim();
    if (!trimmed) return;

    if (categories.some(c => c.name === trimmed)) {
        showToast('Category already exists', 'error');
        return;
    }

    try {
      setModalLoading(true);
      const { error } = await supabase.from('categories').insert([{ name: trimmed }]);
      if (error) throw error;
      
      await fetchCategories();
      setNewCatName('');
      showToast('Category added!', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setModalLoading(false);
    }
  };

  const handleUpdateCategory = async (id) => {
    const trimmed = editName.trim();
    if (!trimmed) return;

    try {
      setModalLoading(true);
      const { error } = await supabase.from('categories').update({ name: trimmed }).eq('id', id);
      if (error) throw error;

      await fetchCategories();
      setEditingId(null);
      showToast('Category updated!', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteCategory = async (id, name) => {
    if (!window.confirm(`Delete "${name}"? This will affect books using this category.`)) return;

    try {
      setModalLoading(true);
      const { error } = await supabase.from('categories').delete().eq('id', id);
      if (error) throw error;

      await fetchCategories();
      showToast('Category deleted', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setModalLoading(false);
    }
  };


const uploadImage = async (file) => {
  const fileExt = file.name.split('.').pop();
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(7);
  const fileName = `${timestamp}-${randomStr}.${fileExt}`;
  const filePath = `book-covers/${fileName}`;
  
  console.log("Uploading image to path:", filePath);

  // 1. Upload the file to 'books' bucket
  const { error: uploadError, data } = await supabase.storage
    .from('books')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true // Allow overwriting if needed (though filename is now very unique)
    });

  if (uploadError) {
    console.error("Storage upload error details:", uploadError);
    throw uploadError;
  }
  
  // 2. Get the public URL
  const { data: { publicUrl } } = supabase.storage
    .from('books')
    .getPublicUrl(filePath);

  console.log("Generated public URL:", publicUrl);
  return publicUrl;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1. Get the current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("Unauthorized: Please log in again.");

    // Check if the user is a librarian (based on metadata set during registration)
    console.log("Current user metadata:", user.user_metadata);
    const userRole = user.user_metadata?.role;
    if (userRole !== 'librarian') {
       throw new Error("Access Denied: Only librarians can add books. Please log in with a librarian account.");
    }

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

    const bookRecord = {
      title: title?.trim(),
      author: author?.trim(),
      isbn: isbn?.trim() || null,
      category: (category === 'Select Category' || !category?.trim()) ? null : category.trim(),
      publication_date: publication_date || null,
      edition: edition?.trim() || null,
      stock_count: parseInt(stock_count, 10) || 0,
      description: description?.trim() || null,
      cover_image: imageUrl || null,
      user_id: user.id,
      status: 'Available', // Default status often required by RLS policies
      created_at: new Date().toISOString()
    };

    console.log("Final record being sent to Supabase:", bookRecord);

    // 4. Insert book data into 'books' table
    const { error } = await supabase
      .from('books')
      .insert([bookRecord]);

    if (error) {
      console.error("Supabase insert error details:", error);
      throw error;
    }

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
                <div className="flex justify-between items-center mt-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Category</label>
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest flex items-center gap-1"
                  >
                    Edit Categories
                  </button>
                </div>
                
                <select name='category' value={formData.category} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium appearance-none">
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
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

      {/* Category Manager Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Category Manager</h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Global Taxonomy</p>
              </div>
              <button 
                onClick={() => { setIsModalOpen(false); setEditingId(null); }}
                className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Add Input */}
              <div className="flex gap-2">
                <input 
                  className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium text-sm"
                  placeholder="New category name..."
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  disabled={modalLoading}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
                />
                <button 
                  onClick={handleAddCategory}
                  disabled={modalLoading || !newCatName.trim()}
                  className="bg-primary text-white px-6 rounded-lg text-sm font-bold shadow-sm hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  Add
                </button>
              </div>

              {/* Scrollable List */}
              <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {categories.map((cat) => (
                  <div key={cat.id} className="group flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                    {editingId === cat.id ? (
                      <div className="flex-1 flex gap-2">
                        <input 
                          autoFocus
                          className="flex-1 bg-white dark:bg-slate-900 border-none rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium text-sm"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleUpdateCategory(cat.id)}
                        />
                        <button onClick={() => handleUpdateCategory(cat.id)} className="text-primary material-symbols-outlined text-lg">check</button>
                        <button onClick={() => setEditingId(null)} className="text-slate-400 material-symbols-outlined text-lg">close</button>
                      </div>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cat.name}</span>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => { setEditingId(cat.id); setEditName(cat.name); }}
                            className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all"
                          >
                            <span className="material-symbols-outlined text-sm">edit</span>
                          </button>
                          <button 
                            onClick={() => handleDeleteCategory(cat.id, cat.name)}
                            className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition-all"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBook;
