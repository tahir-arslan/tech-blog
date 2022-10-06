const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'I want to learn this kind of fold! Teach me.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Incredible. So good.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I think I'm crying. It's that fabulous.",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Can't wait to try it out.",
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: 'Really radiant experience mate.',
        user_id: 5,
        post_id: 5
    },
    {
        comment_text: 'Such sleek.',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'My 66 year old son rates this animation very neat.',
        user_id: 7,
        post_id: 7
    },
    {
        comment_text: 'Just gorgeous!',
        user_id: 8,
        post_id: 9
    },
    {
        comment_text: 'Lavender. Contrast.',
        user_id: 9,
        post_id: 3
    },
    {
        comment_text: 'Clean atmosphere!',
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: 'Looks fun and magnificent!',
        user_id: 7,
        post_id: 1
    },
    {
        comment_text: "Mission accomplished. It's exquisite!",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Truly thought out! I'd love to see a video of how it works.",
        user_id: 8,
        post_id: 5
    },
    {
        comment_text: 'Button, avatar, style, design - revolutionary, friend.',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'This notification has navigated right into my heart.',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'This is new school.',
        user_id: 5,
        post_id: 8
    },
    {
        comment_text: 'Excellent work you have here.',
        user_id: 9,
        post_id: 3
    },
    {
        comment_text: 'Such shot, many background, so gorgeous.',
        user_id: 9,
        post_id: 4
    },
    {
        comment_text: 'I wonder what would have happened if I made this.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'This is cool work.',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'Immensely thought out! Found myself staring at it for minutes.',
        user_id: 5,
        post_id: 6
    },
    {
        comment_text: 'Such slick.',
        user_id: 7,
        post_id: 2
    },
    {
        comment_text: 'Hugely splendid mate.',
        user_id: 2,
        post_id: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;