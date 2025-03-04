-- Создание таблицы Контейнеров
CREATE TABLE
  Containers (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID (),
    Number INT NOT NULL,
    Type NVARCHAR (50) NOT NULL,
    Length DECIMAL(10, 2) NOT NULL,
    Width DECIMAL(10, 2) NOT NULL,
    Height DECIMAL(10, 2) NOT NULL,
    Weight DECIMAL(10, 2) NOT NULL,
    IsEmpty BIT NOT NULL,
    ReceiptDate DATETIME NOT NULL
  );

-- Создание таблицы Операций
CREATE TABLE
  Operations (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID (),
    ContainerId UNIQUEIDENTIFIER NOT NULL,
    StartDate DATETIME NOT NULL,
    EndDate DATETIME NOT NULL,
    OperationType NVARCHAR (100) NOT NULL,
    OperatorName NVARCHAR (100) NOT NULL,
    InspectionPlace NVARCHAR (200) NOT NULL,
    FOREIGN KEY (ContainerId) REFERENCES Containers (Id)
  );
