'use strict';

const Controller = require('egg').Controller;
const { connectDb } = require('../libs/utils');

const mongoose = connectDb();
let projectSchema = new mongoose.Schema({
  name: String,
  npmName: String,
  version: String
});
const Project = mongoose.model('project', projectSchema);
class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'project, egg';
  }

  // 获取项目或者组件的项目模板
  async getTemplate() {


    const { ctx } = this;
    const data = await Project.find({}, function (err, res) {
      console.log('res',res);
    }).skip(2).limit(2);

    ctx.body = data;
  }
}

module.exports = ProjectController;
