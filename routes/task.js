const router = require('express').Router()
const ctrl = require('../controllers/task')

// List all Task
router.get('/', ctrl.getTasks)
// Render the add page
router.get('/add' , ctrl.getAdd)
// // Render edit page
router.get('/edit/:id', ctrl.getEdit)

// // process the add page
router.post('/add', ctrl.postAdd)
// // process edit page
router.post('/edit', ctrl.postEdit)
// // delete a Task
router.get('/delete/:id', ctrl.getDelete)



module.exports = router 