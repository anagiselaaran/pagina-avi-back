const selectAllScripts = () => {
    return db.query('select * from script')
}

const selectByPlot = (plot) => {
    return db.query('select * from script where plot = ?', [plot])
}

const selectByCompanyId = (user_id) => {
    return db.query('select * from script where user_id = ?', [user_id])
}

const selectByName = (name) => {
    return db.query('select * from script where name = ?', [name])
}

const selectById = (id) => {
    return db.query( 'select * from script where id = ?', [id])
}

const insertScript = ({name, plot, characters, creator}) => {
    return db.query('insert into script (name, plot, characters, creator) values (?,?,?,?)', [ name, plot, characters, creator])
}

const insertScriptFile = ({ name, size, type }) => {
    return db.query('insert into file (name, size, type) values(?,?,?)', [name, size, type])

}

const deleteScript = (id) => {
    return db.query( 'delete from script where id = ?', [id])
}

module.exports = {
    selectAllScripts, selectByPlot, selectByCompanyId, selectByName, insertScript, selectById, deleteScript, insertScriptFile
}