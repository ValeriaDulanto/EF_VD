package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class VentaDetalle {

	private @Id @GeneratedValue Long id;

	private int cantidad;

	private String nom_clien;

	@ManyToOne()
	@JoinColumn(name = "id_producto")
	private Producto producto;

	public VentaDetalle() {
		
	}


	public VentaDetalle( int cantidad, String nom_clien, Producto producto) {
		
		this.cantidad = cantidad;
		this.nom_clien = nom_clien;
		this.producto = producto;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public int getCantidad() {
		return cantidad;
	}


	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}


	public String getNom_clien() {
		return nom_clien;
	}


	public void setNom_clien(String nom_clien) {
		this.nom_clien = nom_clien;
	}


	public Producto getProducto() {
		return producto;
	}


	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	



	

}