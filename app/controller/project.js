'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  // 获取项目/组件的代码模版
  getTemplate() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = ProjectController;
