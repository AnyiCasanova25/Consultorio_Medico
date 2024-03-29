package consultorio.com.consultorio.interfaceService;

import java.util.List;
import java.util.Optional;

import consultorio.com.consultorio.models.Paciente;

public interface IpacienteService {

    public String save(Paciente Paciente);

    public List<Paciente> findAll();

    public List<Paciente> filtroPaciente(String filtro);

    public List<Paciente> filtroPacienteEstado(char estado); 

    public Optional<Paciente> findOne(String id);

    public int deleteForever(String id);
}