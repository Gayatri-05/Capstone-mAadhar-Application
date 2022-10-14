package com.mAadhar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mAadhar.bean.Aadhar;

@Repository
public interface AadharRepository extends JpaRepository<Aadhar, Integer>{

}

