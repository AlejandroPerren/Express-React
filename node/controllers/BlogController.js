//import model
import BlogModel from "../models/BlogModel.js";

try {
    await db.authenticate();
    console.log("Conexión exitosa a la DB");
} catch (error) {
    console.log("Error de conexión:", error.message);
}


//methods CRUD
//show all 
export const getAllblog = async (req,res) =>{
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs);
    } catch (error) {
        res.json({message: error.message}) 
    }
}
//show one
export const getBlog = async (req,res) =>{
    try {
        const blog = await BlogModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(blog[0]);
    } catch (error) {
        res.json({message: error.message}) 
    }
}

//Create
export const createBlog = async (req,res) =>{
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro Creado Correctamente"
        });
    } catch (error) {
        res.json({message: error.message}) 
    }
}

//Update
export const updateBlog = async (req,res) =>{
    try {
        await BlogModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro Actualizado Correctamente"
        });
    } catch (error) {
        res.json({message: error.message}) 
    }
}

//Delete
export const deleteBlog = async (req,res) =>{
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro Borrado Correctamente"
        });
    } catch (error) {
        res.json({message: error.message}) 
    }
}
