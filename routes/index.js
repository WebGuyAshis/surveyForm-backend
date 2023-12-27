import express from 'express';
import { create_form_data } from '../controllers/form_controller.js';
import { create_Admin, signInUser } from '../controllers/admin_controller.js';

const router = express.Router();

// For Survey Form
router.post('/',create_form_data);


// For Admin
router.post('/admin-Login', signInUser)
router.post('/admin-signup', create_Admin)
router.get('/survey-record', )

export default router;