package consultorio.com.consultorio.interfaceService;

import java.util.List;
import java.util.Optional;

import consultorio.com.consultorio.models.Ingreso;


public interface IingresoService {

    public String save(Ingreso Ingreso);

    public List<Ingreso> findAll();

    public List<Ingreso> filtroIngreso (String filtro);

    public Optional<Ingreso> findOne(String id);

    public int delete(String id);
}