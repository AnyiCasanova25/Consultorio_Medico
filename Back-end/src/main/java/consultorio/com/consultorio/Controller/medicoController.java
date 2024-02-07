package consultorio.com.consultorio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import consultorio.com.consultorio.interfaceService.ImedicoService;
import consultorio.com.consultorio.models.Medico;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RequestMapping("/api/v1/Medico")
@RestController
public class medicoController {

    @Autowired
    private ImedicoService medicoService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Medico") Medico Medico) {
        medicoService.save(Medico);
        return new ResponseEntity<>(Medico, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaMedico = medicoService.findAll();
        return new ResponseEntity<>(listaMedico, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Medico = medicoService.findOne(id);
        return new ResponseEntity<>(Medico, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Medico = medicoService.findOne(id).get();
        if (Medico != null) {
            if (Medico.getEstado().equals("H")) {

                Medico.setEstado("D");
                return new ResponseEntity<>("Se ha deshabilitado correctamente", HttpStatus.OK);
            } else
                Medico.setEstado("H");
            return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No se ha encontrado el registro", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Medico") Medico MedicoUpdate) {
        var Medico = medicoService.findOne(id).get();
        if (Medico != null) {

            Medico.setDocumentoIdentidad(MedicoUpdate.getDocumentoIdentidad());
            Medico.setPrimerNombre(MedicoUpdate.getPrimerNombre());
            Medico.setSegundoNombre(MedicoUpdate.getSegundoNombre());
            Medico.setPrimerApellido(MedicoUpdate.getPrimerApellido());
            Medico.setSegundoApellido(MedicoUpdate.getSegundoApellido());
            Medico.setCelular(MedicoUpdate.getCelular());
            Medico.setCorreo(MedicoUpdate.getCorreo());
            Medico.setEstado(MedicoUpdate.getEstado());

            medicoService.save(Medico);
            return new ResponseEntity<>(Medico, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Medico NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}
