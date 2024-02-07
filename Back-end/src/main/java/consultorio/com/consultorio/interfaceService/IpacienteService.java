package consultorio.com.consultorio.interfaceService;

import java.util.List;
import java.util.Optional;

import consultorio.com.consultorio.models.Paciente;

public interface IpacienteService {

    public String save(Paciente Paciente);

    public List<Paciente> findAll();

    public Optional<Paciente> findOne(String id);

    public int delete(String id);
}