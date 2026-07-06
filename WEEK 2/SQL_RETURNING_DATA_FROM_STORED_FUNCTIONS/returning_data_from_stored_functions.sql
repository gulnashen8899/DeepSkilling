-- Exercise 8: Stored Procedure to Count Employees by Department

USE employee_db;

DELIMITER $$

DROP PROCEDURE IF EXISTS sp_CountEmployeesByDepartment $$

CREATE PROCEDURE sp_CountEmployeesByDepartment(IN p_DepartmentID INT)
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = p_DepartmentID;
END $$

DELIMITER ;

-- Execute the stored procedure
CALL sp_CountEmployeesByDepartment(1);