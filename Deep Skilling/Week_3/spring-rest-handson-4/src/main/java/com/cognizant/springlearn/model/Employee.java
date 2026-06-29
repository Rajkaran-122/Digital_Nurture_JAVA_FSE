package com.cognizant.springlearn.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Employee {
    @NotNull(message = "Employee id should not be null")
    private Integer id;
    @NotBlank(message = "Employee name should not be blank")
    @Size(min = 1, max = 30, message = "Employee name should be between 1 and 30 characters")
    private String name;
    @NotNull(message = "Employee salary should not be null")
    @Min(value = 0, message = "Employee salary should be zero or above")
    private Double salary;
    @NotNull(message = "Employee permanent should not be null")
    private Boolean permanent;
    // using @JsonFormat for parsing date and @Pattern for extra validation
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    @Pattern(regexp = "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$", message = "Date of birth should match dd/MM/yyyy")
    private String dateOfBirth;
    @Valid
    @NotNull(message = "Department should not be null")
    private Department department;
    @Valid
    private List<Skill> skillList;
}
