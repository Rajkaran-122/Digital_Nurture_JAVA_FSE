package com.cognizant.springlearn.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Country {
    @NotNull(message = "Country code is required")
    @Size(min = 2, max = 2, message = "Country code should be 2 characters")
    private String code;

    @NotBlank(message = "Country name is required")
    private String name;
}
