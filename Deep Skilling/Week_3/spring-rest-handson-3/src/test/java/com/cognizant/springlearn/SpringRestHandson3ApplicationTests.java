package com.cognizant.springlearn;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import com.cognizant.springlearn.controller.DepartmentController;
import com.cognizant.springlearn.controller.EmployeeController;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SpringRestHandson3ApplicationTests {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private EmployeeController employeeController;

    @Autowired
    private DepartmentController departmentController;

    @Test
    void contextLoads() {
        assertThat(employeeController).isNotNull();
        assertThat(departmentController).isNotNull();
    }

    @Test
    void testGetAllEmployees() throws Exception {
        mvc.perform(get("/employees"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Rajkaran"))
                .andExpect(jsonPath("$[0].department.name").value("Engineering"))
                .andExpect(jsonPath("$[0].skillList[0].name").value("Java"));
    }

    @Test
    void testGetAllDepartments() throws Exception {
        mvc.perform(get("/departments"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Engineering"))
                .andExpect(jsonPath("$[1].name").value("Human Resources"))
                .andExpect(jsonPath("$[2].name").value("Finance"));
    }
}
