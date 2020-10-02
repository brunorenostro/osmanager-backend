import AppError from '../errors/AppError';
import {getCustomRepository, getRepository} from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request{
  protocol_number:string;
  street_adress:string;
  bairro_adress:string;
  number_adress:string;
  complement_provider:string;
  name_provider:string;
  phone_provider:string;
}

class CreateAppointmentService{

public async execute({protocol_number,street_adress,
  bairro_adress,number_adress,complement_provider,
  name_provider, phone_provider}:Request):Promise<Appointment>{


  const appointmentRepository= getCustomRepository(AppointmentsRepository);
  console.log("testeeeeeeeeeee");
  const appointment= appointmentRepository.create({
    protocol_number,
    street_adress,
    bairro_adress,
    number_adress,
    complement_provider,
    name_provider,
    phone_provider
  });


    await appointmentRepository.save(appointment);


  return appointment;
}

}

export default CreateAppointmentService;
