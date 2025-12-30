const express = require('express');
const router = express.Router();

// Import Middleware
const auth = require('../middleware/auth');

// Import Controllers
const authController = require('../controllers/authController');
const campaignController = require('../controllers/campaignController');

/**
 * Rute khusus Admin
 */

// 1. Statistik Dashboard (Sokong dua-dua nama untuk elak 404)
// Frontend mungkin panggil /api/admin/stats ATAU /api/admin/dashboard-stats
const statsHandler = campaignController.getStats || ((req, res) => {
    res.json({ 
        status: 'success', 
        data: { totalDonation: 0, campaignsSuccess: 0, reach: 0 } 
    });
});

router.get('/stats', auth, statsHandler);
router.get('/dashboard-stats', auth, statsHandler);

// 2. Senarai Pengguna
router.get('/management-list', auth, authController.getTeamList);
router.get('/donors-list', auth, authController.getDonorList);

// 3. Pengurusan Akaun
router.post('/add-account', auth, authController.registerStaff);
router.delete('/delete-account/:id', auth, authController.deleteUser);

module.exports = router;