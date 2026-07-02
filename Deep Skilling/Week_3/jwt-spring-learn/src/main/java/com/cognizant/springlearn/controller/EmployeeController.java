package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.dto.EmployeeDTO;
import com.cognizant.springlearn.exception.EmployeeNotFoundException;
import com.cognizant.springlearn.model.Employee;
import com.cognizant.springlearn.service.EmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/employees")
public class EmployeeController {
    
    private final EmployeeService employeeService;

    @GetMapping
    public List<EmployeeDTO> getAllEmployees() {
        return employeeService.getAllEmployees().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @PutMapping
    public void updateEmployee(@RequestBody @Valid EmployeeDTO employeeDTO) throws EmployeeNotFoundException {
        Employee employee = mapToEntity(employeeDTO);
        employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Integer id) throws EmployeeNotFoundException {
        employeeService.deleteEmployee(id);
    }
    
    private EmployeeDTO mapToDTO(Employee entity) {
        if (entity == null) return null;
        return EmployeeDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
                .salary(entity.getSalary())
                .permanent(entity.getPermanent())
                .dateOfBirth(entity.getDateOfBirth())
                .department(entity.getDepartment())
                .skillList(entity.getSkillList())
                .build();
    }
    
    private Employee mapToEntity(EmployeeDTO dto) {
        if (dto == null) return null;
        return Employee.builder()
                .id(dto.getId())
                .name(dto.getName())
                .salary(dto.getSalary())
                .permanent(dto.getPermanent())
                .dateOfBirth(dto.getDateOfBirth())
                .department(dto.getDepartment())
                .skillList(dto.getSkillList())
                .build();
    }
}

