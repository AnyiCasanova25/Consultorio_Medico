package consultorio.com.consultorio.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Paciente;


@Repository
public interface Ipaciente extends CrudRepository< Paciente , String>{
    
}
