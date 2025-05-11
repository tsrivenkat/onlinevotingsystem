package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Register;



@Repository
public interface RegisterRepository extends JpaRepository<Register, Integer>{
	
	boolean existsByCode(String code);

}
