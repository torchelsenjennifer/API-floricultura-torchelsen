import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("floricultura-torchelsen","root","",{
  dialect: 'mysql',
  host:"localhost",
  port:3306,
})