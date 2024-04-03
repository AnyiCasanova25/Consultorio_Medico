package consultorio.com.consultorio;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;
import consultorio.com.consultorio.Controller.*;
import consultorio.com.consultorio.interfaceService.*;
import consultorio.com.consultorio.models.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = ConsultorioApplication.class)
@Transactional
@AutoConfigureMockMvc
public class ConsultorioApplicationTests {


	// ejemplo de una prueba basica de testing
	// @Test
    // public void pruebaBasica(){
    //     int num1=8;
    //     int num2=3;
    //     int resultadoEsperado=11;
	// 	int resultadoObtenido=num1+num2;
    //     assertEquals(resultadoEsperado, resultadoObtenido);
    // }
	@Autowired
	private medicoController medicoController;

	@MockBean
	private ImedicoService medicoService;

	@Test
	@Rollback
	public void testMedicoGuardar() {
		// test de guardar medico
		Medico medico = new Medico();
		medico.setDocumentoIdentidad("1234567890");
		medico.setPrimerNombre("Juan");
		medico.setPrimerApellido("Perez");
		medico.setCelular("123456789");
		medico.setCorreo("juan@example.com");
		medico.setEstado("H");
		ResponseEntity<Object> response = medicoController.save(medico);
		//valor esperado
		assertEquals(HttpStatus.OK, response.getStatusCode());

	}

	@Test
	@Rollback
	public void testMedicoIncompletoGuardarPrimerNombre() {
		// test de campo obligatorio de primer nombre
		Medico medico = new Medico();
		medico.setDocumentoIdentidad("1234567890");
		medico.setPrimerNombre("");
		medico.setPrimerApellido("Perez");
		medico.setCelular("123456789");
		medico.setCorreo("juan@example.com");
		medico.setEstado("H");
		ResponseEntity<Object> response = medicoController.save(medico);
		//valor esperado
		assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
		assertEquals("El primer nombre es un campo obligatorio", response.getBody());

	}

	@Test
	@Rollback
	public void testMedicoIncompletoGuardarDocumento() {
		// test de campo obligatorio de numero de documento
		Medico medico = new Medico();
		medico.setDocumentoIdentidad("");
		medico.setPrimerNombre("Julian");
		medico.setPrimerApellido("Perez");
		medico.setCelular("");
		medico.setCorreo("juan@example.com");
		medico.setEstado("H");
		ResponseEntity<Object> response = medicoController.save(medico);
		//valor esperado
		assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
		assertEquals("El documento de identidad es un campo obligatorio", response.getBody());

	}

	

	@Test
	public void testMedicoRepetidoGuardar() {
		// test de guardar medico
		Medico medico = new Medico();
		medico.setDocumentoIdentidad("1234567890");
		medico.setPrimerNombre("Juan");
		medico.setPrimerApellido("Perez");
		medico.setCelular("123456789");
		medico.setCorreo("juan@example.com");
		medico.setEstado("H");
		List<Medico> listaMedicos=new ArrayList<>();
		listaMedicos.add(medico);
		//simula una base datos
		when(medicoService.filtroMedico(anyString())).thenReturn(listaMedicos);

		ResponseEntity<Object> response = medicoController.save(medico);
		//valor esperado
		assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
	}

}