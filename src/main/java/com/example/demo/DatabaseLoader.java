package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryP;
	
	private final VentaDetalleRepository repositoryDV;

	@Autowired
	public DatabaseLoader(
		ProductoRepository repositoryP,
		 VentaDetalleRepository repositoryDV) {
		this.repositoryP = repositoryP;
		this.repositoryDV = repositoryDV;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Producto Galleta = new Producto("Margaritas", 3);
		Producto Bebida = new Producto("Fanta", 4);
		Producto Fruta = new Producto("Platano", 4);
		this.repositoryP.save(new Producto("Piqueos",3));
		this.repositoryP.save(new Producto("7up",3));
		this.repositoryP.save(new Producto("Picaras", 1));
		this.repositoryP.save(Galleta);
		this.repositoryP.save(Bebida);
		this.repositoryP.save(Fruta);
		this.repositoryP.save(new Producto("Mandarina",8));



		VentaDetalle intFruta = new VentaDetalle(10, "valeria", Fruta);
		this.repositoryDV.save(intFruta);
		VentaDetalle intBebida = new VentaDetalle(20,"gustavo",Galleta);
		this.repositoryDV.save(intBebida);
		VentaDetalle intGalleta = new VentaDetalle(21,"madelyne",Bebida);
		this.repositoryDV.save(intGalleta);


	}

	
}