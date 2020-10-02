/* eslint-disable import/no-cycle */
// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.route';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
export default routes;
