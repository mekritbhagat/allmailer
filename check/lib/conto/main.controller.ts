import * as mongoose from 'mongoose';
import { ClientSchema } from '../modo/usr.model';
import { Request, Response } from 'express';

const Client = mongoose.model('Client', ClientSchema);

export class ClientController{

    public addNewClient (req: Request, res: Response) {                
        let newClient = new Client(req.body);
        console.log(newClient);
        newClient.save((err, client) => {
            if(err){
                res.send(err);
            }    
            res.json(client);
            console.log(client);
        });
    }

    public getClients (req: Request, res: Response) {           
        Client.find({}, (err, client) => {
            if(err){
                res.send(err);
            }
            res.json(client);
        });
    }

    public getClientWithID (req: Request, res: Response) {           
        Client.findById(req.params.clientId, (err, client) => {
            if(err){
                res.send(err);
            }
            res.json(client);
        });
    }

    public updateClient (req: Request, res: Response) {           
        Client.findOneAndUpdate({ _id: req.params.clientId }, req.body, { new: true }, (err, client) => {
            if(err){
                res.send(err);
            }
            res.json(client);
        });
    }

    public deleteClient (req: Request, res: Response) {           
        Client.deleteOne({ _id: req.params.clientId }, (err, client) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted client!'});
        });
    }
    
}