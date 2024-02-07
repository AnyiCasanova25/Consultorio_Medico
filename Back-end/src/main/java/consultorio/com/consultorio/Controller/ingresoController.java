package consultorio.com.consultorio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import consultorio.com.consultorio.interfaceService.IingresoService;
import consultorio.com.consultorio.models.Ingreso;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RequestMapping("/api/v1/Ingreso")
@RestController
public class ingresoController {

    @Autowired
    private IingresoService ingresoService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Ingreso") Ingreso Ingreso) {
        ingresoService.save(Ingreso);
        return new ResponseEntity<>(Ingreso, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaIngreso = ingresoService.findAll();
        return new ResponseEntity<>(listaIngreso, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Ingreso = ingresoService.findOne(id);
        return new ResponseEntity<>(Ingreso, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        var Ingreso = ingresoService.findOne(id).get();
        if (Ingreso != null) {
            Ingreso.setEstado("D");
            return new ResponseEntity<>("Se ha deshabilitado correctamente", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No se ha encontrado el registro de ingreso", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Ingreso") Ingreso IngresoUpdate) {
        var Ingreso = ingresoService.findOne(id).get();
        if (Ingreso != null) {

            Ingreso.setHabitacion(IngresoUpdate.getHabitacion());
            Ingreso.setCama(IngresoUpdate.getCama());
            Ingreso.setPaciente(IngresoUpdate.getPaciente());
            Ingreso.setMedico(IngresoUpdate.getMedico());
            Ingreso.setFechaIngreso(IngresoUpdate.getFechaIngreso());
            Ingreso.setFechaSalida(IngresoUpdate.getFechaSalida());
            Ingreso.setEstado(IngresoUpdate.getEstado());

            ingresoService.save(Ingreso);
            return new ResponseEntity<>(Ingreso, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Ingreso NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}