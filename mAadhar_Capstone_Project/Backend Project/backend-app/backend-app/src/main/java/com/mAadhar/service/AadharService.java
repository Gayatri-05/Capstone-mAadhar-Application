package com.mAadhar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mAadhar.bean.Aadhar;
import com.mAadhar.repository.AadharRepository;

@Service
public class AadharService {
	
	@Autowired
	AadharRepository aadharRepo;
	
	public String newAadhar(Aadhar aadhar) {
		aadharRepo.save(aadhar);
		return "New Aadhar is created";
	}
	
	public List<Aadhar> getAllAadhar() {
		return aadharRepo.findAll();
	}
	
	public String findAadharById(int applicationid) {
		Optional<Aadhar> result  = aadharRepo.findById(applicationid);
		if(result.isPresent()) {
			Aadhar a = result.get();
			return a.toString();
		}else {
			return "Aadhar Id invalid";
		}
	}
	
	public String updateAadhar(Aadhar aadhar) {
		Optional<Aadhar> result  = aadharRepo.findById(aadhar.getApplicationid());
		if(result.isPresent()) {
			Aadhar a = result.get();
			a.setAddress(aadhar.getAddress());
			a.setDob(aadhar.getDob());
			a.setMobileno(aadhar.getMobileno());
			aadharRepo.saveAndFlush(a);
			return "Aadhar updated successfully";
		}else {
			return "Aadhar Id invalid";
		}
	}
	
	public String deleteAadhar(int applicationid) {
		Optional<Aadhar> result  = aadharRepo.findById(applicationid);
		if(result.isPresent()) {
			Aadhar a = result.get();
			aadharRepo.delete(a);
			return "Aadhar deleted successfully";
		}else {
			return "Aadhar Id invalid";
		}
	}
	
	public String duplicateAadhar(Aadhar aadhar) {
		Optional<Aadhar> result  = aadharRepo.findById(aadhar.getApplicationid());
		if(result.isPresent()) {
			Aadhar a = result.get();
			a.setApplicationid(aadhar.getApplicationid());
			aadharRepo.saveAndFlush(a);
			return "Aadhar updated successfully";
		}else {
			return "Aadhar Id invalid";
		}
	}
}
