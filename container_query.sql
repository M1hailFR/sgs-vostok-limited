SELECT 
    '{' +
    '"Id":"' + CAST(Id AS NVARCHAR(36)) + '",' +
    '"Number":' + CAST(Number AS NVARCHAR(10)) + ',' +
    '"Type":"' + Type + '",' +
    '"Length":' + CAST(Length AS NVARCHAR(10)) + ',' +
    '"Width":' + CAST(Width AS NVARCHAR(10)) + ',' +
    '"Height":' + CAST(Height AS NVARCHAR(10)) + ',' +
    '"Weight":' + CAST(Weight AS NVARCHAR(10)) + ',' +
    '"IsEmpty":' + CAST(IsEmpty AS NVARCHAR(1)) + ',' +
    '"ReceiptDate":"' + CONVERT(NVARCHAR(23), ReceiptDate, 121) + '"' +
    '}' AS JsonData
FROM Containers; 
