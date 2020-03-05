import { Router } from 'express';
const route = Router();

route.get('/', (req, res)=>{
    res.send("xesq");
});

export default route;