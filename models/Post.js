module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'posts',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            created: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updated: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {}
    );

    Post.associate = (models) => {
        const { users } = models;
        Post.belongsTo(users, {
            as: 'author',
            foreignKey: 'user_id',
        });
    };

    return Post;
};
