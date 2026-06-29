package com.cognizant.nurture.spring;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

// jpa data access
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
}

