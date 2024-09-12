import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:4000/blogs/';

const CompEditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${URI}${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  // Update blog
  const updateBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URI}${id}`, { title, content });
      navigate('/');
    } catch (error) {
      console.error('Error updating blog:', error);
      // Manejo de errores aquí
    }
  };

  return (
    <div>
      <h3>Edit Blog</h3>
      <form onSubmit={updateBlog}>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Update Blog</button>
      </form>
    </div>
  );
};

export default CompEditBlog;
