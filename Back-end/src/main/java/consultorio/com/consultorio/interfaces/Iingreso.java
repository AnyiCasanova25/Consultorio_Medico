package consultorio.com.consultorio.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Ingreso;


@Repository
public interface Iingreso extends CrudRepository< Ingreso , String>{
    
}
