import { Router } from "express";
import ApiResponse from "../models/ApiReponse";
import endpoints from "./endpoint";


const router = Router();
router.use('/api', endpoints)

export default router