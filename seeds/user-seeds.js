const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
		username: 'passtranquil',
		email: 'passtranquil1@email.ca',
		password: 'password123'
    },
    {
		username: 'revolvingcabin',
		email: 'revolvingcabin1@email.com',
		password: 'password123'
    },
    {
		username: 'donutwatery',
		email: 'donutwatery1@email.ca',
		password: 'password123'
    },
    {
		username: 'humongoussaw',
		email: 'humongoussaw1@email.ca',
		password: 'password123'
    },
    {
		username: 'grantcrowd',
		email: 'grantcrowd1@email.com',
		password: 'password123'
    },
    {
		username: 'bubbleexception',
		email: 'bubbleexception1@email.ca',
		password: 'password123'
    },
    {
		username: 'pullovergrade',
		email: 'pullovergrade1@email.ca',
		password: 'password123'
    },
    {
		username: 'footprintsboomerang',
		email: 'footprintsboomerang1@email.ca',
		password: 'password123'
    },
    {
		username: 'rainregime',
		email: 'rainregime1@email.com',
		password: 'password123'
    },
    {
		username: 'competentartichokes',
		email: 'competentartichokes@email.com',
		password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;