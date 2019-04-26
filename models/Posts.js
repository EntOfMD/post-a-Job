module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    technologies: {
      type: DataTypes.STRING,
      allowNull: false
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [20]
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Posts;
};
