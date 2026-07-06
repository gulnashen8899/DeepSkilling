-- Exercise 7: Return Data from a Scalar Function

USE employee_db;

DELIMITER $$

DROP FUNCTION IF EXISTS fn_CalculateAnnualSalary $$

CREATE FUNCTION fn_CalculateAnnualSalary(emp_id INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE annual_salary DECIMAL(10,2);

    SELECT Salary * 12
    INTO annual_salary
    FROM Employees
    WHERE EmployeeID = emp_id;

    RETURN annual_salary;
END $$

DELIMITER ;

-- Execute the function
SELECT fn_CalculateAnnualSalary(1) AS AnnualSalary;