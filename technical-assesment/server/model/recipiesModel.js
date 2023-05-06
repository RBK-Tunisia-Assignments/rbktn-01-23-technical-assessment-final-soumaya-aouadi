const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
//const  connection  = require("../database-mysql/index").promise();
const getAll = (callback) => {
  const sql= `select * from recipe`
  return connection.query(sql,callback)   
};
const deleteRecipe = (callback, id) => {
    const sql = `DELETE FROM recipe WHERE Recipe_Id=${id}`;
    return connection.query(sql, callback);
  };
const addRecipe = (
    Cook_Time,
    Prep_Time,
    Recipe_Name,
    Serves,
    categorie,
    Recipe_Image,
    Recipe_Description,
    Recipe_Ingredients,
    users_user_Id,
    callback
  ) => {
    const sql = `INSERT INTO recipe (Cook_Time, Prep_Time,Recipe_Name,Serves,categorie,Recipe_Image,Recipe_Description,Recipe_Ingredients,users_user_Id) VALUES (${Cook_Time},${Prep_Time},"${Recipe_Name}",${Serves},"${categorie}","${Recipe_Image}","${Recipe_Description}","${Recipe_Ingredients}",${users_user_Id}) `;
    return connection.query(sql, callback);
  };

module.exports = { getAll };
