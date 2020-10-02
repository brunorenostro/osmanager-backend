
import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,
  UpdateDateColumn,} from 'typeorm';

@Entity('appointments')
class Appointment{

@PrimaryGeneratedColumn('uuid')
id:string;

@Column()
protocol_number:string;

@CreateDateColumn()
open_date:Date;

@Column()
street_adress:string;

@Column()
bairro_adress:string;

@Column()
number_adress:string;

@Column()
complement_provider:string;

@Column()
name_provider:string;

@Column()
phone_provider:string;

@Column()
observation_worker:string;

@Column()
work_state:string;

@Column()
lamp_material:string;

@Column()
reactor_material:string;

@Column()
relay_material:string;



}

export default  Appointment;
