const mongoose = require('mongoose');

//1.链接数据库
mongoose.connect('mongodb://root@121.4.213.43:27017/berners?authSource=admin');
mongoose.connection.once('open', () => {
    console.log('数据库链接成功')
});ßßß


// 2.创建Schema（模型对象）
let projectSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: '男'
    },
    chat: String
});

//3.创建Model对象
let projectModel = mongoose.model('project', projectSchema);

// 3.1 增加
// projectModel.create([
//     {name: "马红灯", age: 19, chat: "红灯1992"},
//     {name: "龚志敏", age: 42, chat: "龚1992"},
//     {name: "李发华", age: 32, chat: "发华1992"},
//     {name: "李建华", age: 22, chat: "建华1992"},
//     {name: "依依", age: 22, chat: "依依1992", sex: "女"},
// ], (err) => {
//     if(!err) {
//         console.log('插入成功')
//     } else {
//         throw err;
//     }
// });

// 3.2 查询
projectModel.find({ name: "钱森" }, (err, docs) => {
    if (!err) {
        console.log(docs)
        console.log(typeof docs)
    } else {
        throw err
    }
});

projectModel.find({}, { name: 1, _id: 0 }, (err, docs) => {  //定义查询结果显示字段
    if (!err) {
        console.log(docs)
        console.log(typeof docs)
    } else {
        throw err
    }
});

/* skip:2 开始位置  limit:2 取出信息条数*/
projectModel.find({}, "-_id name sex chat", { skip: 2, limit: 2 }, (err, docs) => {  //定义查询结果显示字段
    if (!err) {
        console.log(docs)
        console.log(typeof docs)
    } else {
        throw err
    }
});

// 4.3修改
projectModel.update({ name: "钱森" }, { $set: { age: 96 } }, { multi: true }, (err) => {
    if (!err) {
        console.log("修改成功！！")
    } else {
        throw err
    }
});


// 4.4删除
/* 
    Model.deleteMany()
    Model.deleteOne()
    Model.remove()
*/

projectModel.remove({ name: "钱森" }, (err) => {  //删除所有匹配
    if (!err) {
        console.log("删除成功！！")
    } else {
        throw err
    }
});

//4.5统计文档的个数
/* 
    Model.count()
*/
personModel.count({}, (err) => {
    if (!err) {
        console.log(count)
    } else {
        throw err
    }
});