package consultorio.com.consultorio.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import consultorio.com.consultorio.models.Ingreso;


@Repository
public interface Iingreso extends CrudRepository< Ingreso , String>{

    @Query ("SELECT m FROM Ingreso m WHERE m.habitacion LIKE %?1% OR m.fechaIngreso = %?1%")
     List<Ingreso>filtroIngreso(String filtro); 
    
    @Query("SELECT m FROM Ingreso m WHERE m.Estado LIKE %?1% ")
    List<Ingreso>filtroIngreso(char estado);
}
