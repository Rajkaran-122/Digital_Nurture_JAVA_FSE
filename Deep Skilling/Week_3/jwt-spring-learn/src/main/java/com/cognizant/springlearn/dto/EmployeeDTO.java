package com.cognizant.springlearn.dto;

import com.cognizant.springlearn.model.Department;
import com.cognizant.springlearn.model.Skill;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {
    
    private Integer id;
    
    @NotBlank(message = "Employee name should not be blank")
    @Size(min = 1, max = 30, message = "Employee name should be between 1 and 30 characters")
    private String name;
    
    @NotNull(message = "Employee salary should not be null")
    @Min(value = 0, message = "Employee salary should be zero or above")
    private Double salary;
    
    @NotNull(message = "Employee permanent should not be null")
    private Boolean permanent;
    
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private java.util.Date dateOfBirth;
    
    @Valid
    @NotNull(message = "Department should not be null")
    private Department department;
    
    @Valid
    private List<Skill> skillList;
}
