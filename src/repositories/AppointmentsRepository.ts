import Appointment from '../models/Appointment';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>{

}


export default AppointmentsRepository;
