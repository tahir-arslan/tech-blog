const router = require('express').Router();
const { User, Post, Comment, Vote } = require('../../models');

router.post('/login', (req, res) => {
    User.findOne({
		where: {
			username: req.body.username
		}
    })
	.then(dbUserData => {
		if (!dbUserData) {
			res.status(400).json({ message: 'No user with that email address!' });
			return;
		}
      	const validPassword = dbUserData.checkPassword(req.body.password);
		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect password!' });
			return;
		}
      	req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;
	        res.json({ user: dbUserData, message: 'You are now logged in!' });
    	});
    });
});
  
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
    }
    else {
    	res.status(404).end();
    }
});

router.post('/signup', (req, res) => {
    User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
    })
	.then(dbUserData => {
        req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;
			res.json(dbUserData);
		});
	})
	.catch(err => {
        res.status(500).json(err);
	});
});
  
module.exports = router;