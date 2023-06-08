module.exports = (sequelize,DataTypes) =>{
    const Users = sequelize.define('Users',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            altoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
            validate:{
                isEmail: true,
            }
        },
    });
    return Users
};