const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    Post.create({
		title: req.body.title,
		body: req.body.postBody,
		user_id: req.session.user_id,
    })
	.then(dbPostData => res.json(dbPostData))
	.catch(err => {
		res.status(500).json(err);
	});
});

router.put('/:id', withAuth, (req, res) => {
	Post.update(
		{
			title: req.body.title,
			body: req.body.postBody

		},
		{
			where: {
			id: req.params.id
			}
		}
    )
	.then(dbPostData => {
        if (!dbPostData) {
			res.status(404).json({ message: 'No post found with this id' });
			return;
        }
        res.json(dbPostData);
	})
	.catch(err => {
        res.status(500).json(err);
	});
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
		where: {
			id: req.params.id
		}
    })
	.then(dbPostData => {
        if (!dbPostData) {
			res.status(404).json({ message: 'No post found with this id' });
			return;
        }
        res.json(dbPostData);
	})
	.catch(err => {
        res.status(500).json(err);
	});
});

module.exports = router;