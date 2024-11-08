const Scripts = require('../models/scripts.model')

const getAllScripts = async (req, res) => {
    try {
        const [scripts] = await Scripts.selectAllScripts();
        res.json(scripts)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

const getByPlot = async (req, res) => {
    const { plot } = req.params
    try {
        const [plotScript] = await Scripts.selectByPlot(plot)
        if (plotScript.length === 0) {
            res.status(404).json({ message: 'No scripts under this plot'})
        }
        res.json(plotScript)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

const getByCompanyId = async (req, res) => {
    const { user_id } = req.params
   try {
     const [users] = await Scripts.selectByCompanyId(user_id)
     if (users.length === 0) {
         res.status(404).json({ message: 'No scripts for this user'})
     }
     res.json(users)
   } catch (error) {
       res.status(404).json({ message: error.message })

   }
}

const getByName = async (req, res) => {
    const { name } = req.params
    try {
        const [scripts] = await Scripts.selectByName(name)
        if (scripts.length === 0) {
            res.status(404).json({ message: 'No scripts with this name' })
        }
        res.json(scripts)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

const createScript = async (req, res) => {
    try {
        const [newScript] = await Scripts.insertScript(req.body)
        const [script] = await Scripts.selectById(newScript.insertId)
        res.json(script)
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

const createFile = async (req, res) => {
    res.send({ data: 'oki' })
    const file = req
    console.log('el file', file);
   /*  hola */
    /* const archivo = req.file
    console.log('arch', archivo);
    const [file] = await Scripts.insertScriptFile(req.body)
    console.log(file); */
}

const deleteScript = async (req, res) => {
    const { id } = req.params
    try {
        const [scriptToDelete] = await Scripts.selectById(id)
        if (scriptToDelete.length === 0) {
            res.status(404).json({ message: 'No scripts to delete with this ID' })

        }
        const deleted = await Scripts.deleteScript(id)
        res.json(scriptToDelete)
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

const getByScriptId = async (req, res) => {
    const { id } = req.params
    try {
        const [script] = await Scripts.selectById(id)
        if (script.length === 0) {
            res.status(404).json({ message: 'No scripts with this ID' })
        }
        res.json(script)
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

module.exports = {
    getAllScripts, getByPlot, getByCompanyId, getByName, createScript, getByScriptId, deleteScript, createFile
}