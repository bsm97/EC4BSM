package com.example.demo.Entitys;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Lventa {

    private @Id @GeneratedValue Long id;

    private String lugar;

    public Lventa() {}


    public Lventa(String lugar) {
        this.lugar = lugar;
    }
    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Lventa b = (Lventa) o;
		return Objects.equals(id, b.id) &&
			Objects.equals(lugar, b.lugar);
	}	

	@Override
	public int hashCode() {

		return Objects.hash(id, lugar);
	}

	@Override
	public String toString() {
		return "VentaLugar{" +
			"id=" + id +
			", lugar='" + lugar + '\'' +
			'}';
	}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }
}
