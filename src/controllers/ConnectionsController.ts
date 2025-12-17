import { Request, Response} from 'express'
import db from  '../database/connection.js'

export default class ConnectionsController {
  async index(request: Request, response: Response){
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0] as any;
    return  response.json({ total });
  }

  async create(request: Request, response: Response){
    const { user_id } =  request.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send();
  }
}