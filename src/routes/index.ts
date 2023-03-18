import { Router } from 'express';
import {getTasks, addTask, updateTask, deleteTask} from '../controllers/tasks';

const router : Router =  Router();

router.get('/tasks',getTasks );
router.post('/tasks/add-task', addTask);
router.put('/edit-task/:id', updateTask);
router.delete('/delete-task/:id', deleteTask);

export default router;

