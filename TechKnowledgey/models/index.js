const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'authorId'
});

Post.belongsTo(User, {
    foreignKey: 'authorId'
});

module.exports = { User, Post };
