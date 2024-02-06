package consultorio.com.consultorio.interfaces;

import org.springframework.data.repository.CrudRepository;

import consultorio.com.consultorio.models.Paciente;

public interface Ipaciente extends CrudRepository<Paciente , String>{
}