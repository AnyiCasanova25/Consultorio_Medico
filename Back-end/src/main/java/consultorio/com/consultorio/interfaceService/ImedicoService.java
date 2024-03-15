package consultorio.com.consultorio.interfaceService;

import java.util.List;
import java.util.Optional;

import consultorio.com.consultorio.models.Medico;

public interface ImedicoService {

    public String save(Medico Medico);

    public List<Medico> findAll();

    public List<Medico> filtroMedico(String filtro);

    public List<Medico> filtroMedicoEstado(char estado);

    public Optional<Medico> findOne(String id);

    public int deleteForever(String id);
}
