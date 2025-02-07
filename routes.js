const express = require('express');
const router = express.Router();
const { createHandler, readHandler, updateHandler, deleteHandler } = require('./handlers');

router.post('/create', createHandler);
router.get('/read', readHandler);
router.put('/update', updateHandler);
router.delete('/delete', deleteHandler);

module.exports = router;
