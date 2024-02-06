package consultorio.com.consultorio.interfaces;

import org.springframework.data.repository.CrudRepository;

import consultorio.com.consultorio.models.Medico;

public interface Imedico extends CrudRepository<Medico , String>{
}
