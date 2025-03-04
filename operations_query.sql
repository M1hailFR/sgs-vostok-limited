SELECT 
    '{' +
    '"Id":"' + CAST(o.Id AS NVARCHAR(36)) + '",' +
    '"ContainerId":"' + CAST(o.ContainerId AS NVARCHAR(36)) + '",' +
    '"StartDate":"' + CONVERT(NVARCHAR(23), o.StartDate, 121) + '",' +
    '"EndDate":"' + CONVERT(NVARCHAR(23), o.EndDate, 121) + '",' +
    '"OperationType":"' + o.OperationType + '",' +
    '"OperatorName":"' + o.OperatorName + '",' +
    '"InspectionPlace":"' + o.InspectionPlace + '"' +
    '}' AS JsonData
FROM Operations o
INNER JOIN Containers c ON o.ContainerId = c.Id
WHERE c.IsEmpty = 0; 
