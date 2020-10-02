
import { Router } from 'express';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.post('/',async (request, response) => {
  try {
    const {protocol_number,street_adress,
      bairro_adress,number_adress,complement_provider,
      name_provider, phone_provider}=request.body;

      console.log(request.body);

     const createAppointment=new CreateAppointmentService();

     const appointment=await createAppointment.execute({
       protocol_number,street_adress,
       bairro_adress,number_adress,complement_provider,
       name_provider, phone_provider
     });

     console.log("osdaosidasdi");
     return response.json(appointment);

  } catch (error) {
    return response.json({error: error});
  }

});


export default appointmentsRouter;
