package consultorio.com.consultorio.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Paciente;


@Repository
public interface Ipaciente extends CrudRepository< Paciente , String>{

    // ?1 es la primera variable

    @Query("SELECT m FROM Paciente m WHERE m.primerNombre LIKE %?1%")
    List<Paciente>filtroPaciente(String filtro);
    
}
