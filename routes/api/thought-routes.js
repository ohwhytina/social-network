const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all at /api/thoughts
router
    .route('/')
    .get(getAllThought)

// Set up GET all at /api/thoughts by id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

//api/thoughts/<userId>
router
    .route('/:userId').post(addThought)

//api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .post(addReaction)
    .delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;