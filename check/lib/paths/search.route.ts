import {Request, Response, NextFunction} from "express";
import { ClientController } from "../conto/main.controller";

export class Routes { 
    
    public clientController: ClientController = new ClientController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        /*
        app.route('/client')
        .get((req: Request, res: Response, next: NextFunction) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            if(req.query.key !== ' '){
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }                        
        }, this.clientController.getClients)  
        */
        
        app.route('/client')
        .get((req: Request, res: Response, next: NextFunction) => {
               // res.status(401).send('You shall not pass!');
                next();                       
        }, this.clientController.getClients) 

        .post(this.clientController.addNewClient);

        app.route('/client/:clientId')
        .get(this.clientController.getClientWithID)
        .put(this.clientController.updateClient)
        .delete(this.clientController.deleteClient)
    }
}