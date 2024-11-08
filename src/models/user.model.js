const selectAll = () =>{
    return db.query('select * from users')
}

const createUser = ({ company_name, p_iva, email, telefono, password, role}) => {
    return db.query('insert into users (company_name, p_iva, email, telefono, password, role) values(?,?,?,?,?,?)', [company_name, p_iva, email, telefono, password, role])
}

const selectById = (id) => {
    return db.query('select * from users where id = ?', [id])
}

const selectByPiva = (p_iva) => {
    return db.query('select * from users where p_iva = ?', [p_iva])
}

const selectByEmail = (email) => {
    return db.query('select * from users where email = ?', [email])
}

const selectProjectsByUser = (id) => {
    return db.query('select * FROM  script WHERE user_id  = ?', [id])
}

const selectByCompanyName = (company_name) => {
    return db.query('select * from users where company_name = ?', [company_name])
}

module.exports = {
    selectAll, createUser, selectById, selectByPiva, selectByEmail, selectProjectsByUser, selectByCompanyName
} 