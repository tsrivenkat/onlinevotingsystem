package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Leader;


@Repository
public interface LeaderRepository extends JpaRepository<Leader,String>{
	
	@Query("select l from Leader l where l.party=?1 and l.pwd=?2")
	public Leader checkleaderlogin(String lparty, String lpwd);
	
	public Leader findByParty(String party);

}
