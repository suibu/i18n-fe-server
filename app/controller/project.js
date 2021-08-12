'use strict';

const Controller = require('egg').Controller;
const { connectDb } = require('../libs/utils');

const mongoose = connectDb();
// 数据库模型
let projectSchema = new mongoose.Schema({
  name: String,
  npmName: String,
});
// 使用哪张表
let projectModel = mongoose.model('project', projectSchema);
const projectModel_find = () => {
  return new Promise((resolve, reject) => {
    projectModel.find({ }, (err, docs) => {
      if (!err) {
        console.log(docs);
        resolve(docs);
      } else {
        reject(err);
      }
    });
  });
}



class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'project, egg';
  }

  // 获取项目或者组件的项目模板
  async getTemplate() {
    const { ctx } = this;
    const data = await projectModel_find();
    ctx.body = data;
  }
}

module.exports = ProjectController;
