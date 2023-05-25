/**
 * excel 导出
 * style:excel表的样式配置
 * tableData:表的数据内容
 * headerColumns:表头配置
 * sheetName：工作表名
 */
import ExcelJS from 'exceljs/dist/exceljs.min.js'
import FileSaver from 'file-saver'
export const excelJsExport = async (options) => {
   const { sheetName, style, headerColumns, tableData } = options
 
   // 创建工作簿
   const workbook = new ExcelJS.Workbook()
   workbook.creator = 'csh'
   workbook.created = new Date()
 
   // 添加工作表
   const worksheet = workbook.addWorksheet(sheetName)
 
   if (headerColumns.length > 0) {
     // 设置列头
     const columnsData = headerColumns.map((column, index) => {
       const width = column.width
       return {
         header: column.title,
         key: column.dataIndex,
         width: isNaN(width) ? 20 : width / 10
       }
     })
     worksheet.columns = columnsData
     // 设置表头样式
     const headerRow = worksheet.getRow(1)
     headerRow.eachCell((cell) => {
       cell.style = style
     })
   }
   // 设置行数据
   if (tableData.length > 0) {
     // 将传入的数据格式化为exceljs可使用的数据格式
     const data = []
   //   tableData.forEach((table) => {
   //     let obj = {}
   //     const tableFlat = flatten(table)
 
   //     headerColumns.forEach((header) => {
   //       if (excelMap.changDictExport[header.dataIndex]) {
   //         obj[header.dataIndex] =
   //           excelMap.changDictExport[header.dataIndex][table[header.dataIndex]]
   //       } else {
   //         obj[header.dataIndex] = tableFlat[header.dataIndex]
   //       }
   //     })
   //     data.push(obj)
   //   })
 
     // 添加行
     if (tableData) worksheet.addRows(tableData)
     // 获取每列数据，依次对齐
     worksheet.columns.forEach((column) => {
       column.alignment = style.alignment
     })
     // 设置每行的边框
     const dataLength = tableData.length
     const tabeRows = worksheet.getRows(2, dataLength + 1)
     tabeRows.forEach((row) => {
       row.eachCell({ includeEmpty: true }, (cell) => {
         cell.border = style.border
       })
     })
   }
 
    const buffer=await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer]);
    FileSaver.saveAs(blob,`${sheetName}.xlsx`);
 }