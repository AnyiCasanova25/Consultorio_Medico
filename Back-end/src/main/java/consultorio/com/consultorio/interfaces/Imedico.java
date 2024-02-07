package consultorio.com.consultorio.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Medico;


@Repository
public interface Imedico extends CrudRepository< Medico , String>{
    
}
