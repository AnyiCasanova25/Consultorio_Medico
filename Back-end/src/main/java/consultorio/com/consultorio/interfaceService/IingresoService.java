package consultorio.com.consultorio.interfaceService;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import consultorio.com.consultorio.models.Ingreso;


public interface IingresoService {

    public String save(Ingreso Ingreso);

    public List<Ingreso> findAll();

    public List<Ingreso> filtroIngreso (String filtro);

    public List<Ingreso> filtroFechaIngreso (Date fechaIngreso);

    public List<Ingreso> filtroEstado (char estado);
    
    public Optional<Ingreso> findOne(String id);

    public int deleteForever(String id);
}