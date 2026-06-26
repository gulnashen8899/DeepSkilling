CREATE TABLE Products (
ProductID INT,
ProductName VARCHAR(50),
Category VARCHAR(50),
Price INT
);

INSERT INTO Products VALUES
(1,'Laptop','Electronics',90000),
(2,'Phone','Electronics',90000),
(3,'Tablet','Electronics',70000),
(4,'TV','Electronics',50000),

(5,'Shoes','Fashion',4000),
(6,'Bag','Fashion',4000),
(7,'Watch','Fashion',3000);

SELECT
ProductName,
Category,
Price,

ROW_NUMBER()
OVER(
PARTITION BY Category
ORDER BY Price DESC
) AS Row_Num,

RANK()
OVER(
PARTITION BY Category
ORDER BY Price DESC
) AS Rank_Num,

DENSE_RANK()
OVER(
PARTITION BY Category
ORDER BY Price DESC
) AS DenseRank

FROM Products;