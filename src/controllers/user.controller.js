const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const { createToken } = require('../utils/helpers')

const getUsers = async (req, res) => {
   try {
     const [users] = await User.selectAll()
     res.json(users)
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
}

const createUser = async (req, res) => {
   try {
     req.body.password = bcrypt.hashSync(req.body.password, 10)
     const [newUser] = await User.createUser(req.body)
     console.log(newUser);
     const [newUs] = await User.selectById(newUser.insertId)
     res.json(newUs[0])
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
}

const login = async (req, res) => {
    const { email, password } = req.body
    const [userEmail] = await User.selectByEmail(email)
    console.log(userEmail);
    try {
        if (userEmail === 0) {
            return res.status(404).json({message:'Error email/password'})
        }
        const user = userEmail[0]
    
        const comparacion = bcrypt.compareSync(password, user.password)
        if (!comparacion) {
            return res.status(401).json({ message: 'Email/password erroneos' })
        }
        res.json({
            message: 'Login correcto!',
            token: createToken(user)
        })
    } catch (error) {
        console.log(error);
    }
}

const getUserByID = async (req, res) => {
    const {id} = req.params
    try {
        const [user] = await User.selectById(id)
        res.json(user[0]);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getByCompanyName = async (req, res) => {
    const { name } = req.params
    console.log('el param', name);
   try {
       const [user] = await User.selectByCompanyName(name)
       console.log('el usuario', user);
     res.json(user)
   } catch (error) {
    res.status(500).json({ message: error.message})
   }
}


const getProyectByUser = async (req, res) => {
    const { id } = req.params
  try {
      const [user] = await User.selectProjectsByUser(id)
      if (user.length === 0) {
        res.status(501).json({ message: 'No scripts for this user'})
      }
      res.json(user)
  } catch (error) {
      res.status(500).json({ message: error.message })
  }
}

//TODO: CREAR METODO PARA ACTUALIZAR USER DATOS, DELETE USER, ACTUALIZAR PASSWORD
module.exports = {
    getUsers, createUser, login, getByCompanyName, getProyectByUser, getUserByID
}