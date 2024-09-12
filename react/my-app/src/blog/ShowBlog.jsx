import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:4000/blogs/';

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(URI);
        setBlogs(res.data);
      } catch (error) {
        setError("Error al obtener los blogs.");
        console.error("Error al obtener los blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const deleteBlog = useCallback(async (id) => {
    try {
      await axios.delete(`${URI}${id}`);
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
    } catch (error) {
      setError("Error al eliminar el blog.");
      console.error("Error al eliminar el blog:", error);
    }
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fa-solid fa-plus"></i> Crear Blog
          </Link>
        </div>
        <div className='col-12'>
          {blogs.length === 0 ? (
            <p>No hay blogs disponibles.</p>
          ) : (
            <table className='table'>
              <thead className='table-primary'>
                <tr>
                  <th>Título</th>
                  <th>Contenido</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.title}</td>
                    <td>{blog.content}</td>
                    <td>
                      <Link to={`/edit/${blog.id}`} className="btn btn-info me-2">
                        <i className="fa-regular fa-pen-to-square"></i> Editar
                      </Link>
                      <button 
                        onClick={() => deleteBlog(blog.id)} 
                        className='btn btn-danger'
                      >
                        <i className="fa-solid fa-trash"></i> Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompShowBlogs;
