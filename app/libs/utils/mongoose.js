const mongoose = require('mongoose');
mongoose.connect('mongodb://suibu:123456@localhost:27017/i18n-fe');
mongoose.connection.once('open', () => {
    console.log('数据库链接成功');
});

//1.链接数据库
function connectDb() {
    return mongoose;
}

module.exports = connectDb;
