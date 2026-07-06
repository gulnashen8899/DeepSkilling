-- Exercise 9: Execute Stored Procedure to Retrieve Employee Details

USE employee_db;

DELIMITER $$

DROP PROCEDURE IF EXISTS sp_GetEmployeesByDepartment $$

CREATE PROCEDURE sp_GetEmployeesByDepartment(IN p_DepartmentID INT)
BEGIN
    SELECT EmployeeID,
           FirstName,
           LastName,
           DepartmentID,
           Salary,
           JoinDate
    FROM Employees
    WHERE DepartmentID = p_DepartmentID;
END $$

DELIMITER ;

-- Execute the stored procedure
CALL sp_GetEmployeesByDepartment(1);