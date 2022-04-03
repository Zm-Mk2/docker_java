package com.example.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.api.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}