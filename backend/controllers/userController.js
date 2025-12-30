const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Import controller yang betul (Auth Controller mengandungi fungsi admin)
const authController = require('../controllers/authController');
const campaignController = require('../controllers/campaignController');

// Contoh penggunaan fungsi dari AuthController di Canvas:
router.get('/management-list', auth, authController.getTeamList);
router.get('/donors-list', auth, authController.getDonorList);
router.post('/add-account', auth, authController.registerStaff);
router.delete('/delete-account/:id', auth, authController.deleteUser);

module.exports = router;