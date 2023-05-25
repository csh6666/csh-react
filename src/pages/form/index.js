import React, { useState } from 'react';
import './index.scss'
import {excelJsExport} from '@/utils/exportExcel';
const App = () => {
   const [collapsed, setCollapsed] = useState(false);
   const [menuName, setMeneName] = useState('Option 1');
   const toggleCollapsed = () => {
      setCollapsed(!collapsed);
   };
   const onClick = (e) => {
      const header = [
         {
           title: '用户序号',
           dataIndex: 'user_id',
           width: 80
         },
         {
           title: '登录名称',
           dataIndex: 'user_name'
         },
         {
           title: '用户邮箱',
           dataIndex: 'email',
           width: 240
         },
         {
           title: '手机号码',
           dataIndex: 'phonenumber'
         },
         {
           title: '用户性别',
           dataIndex: 'sex'
         },
         {
           title: '帐号状态',
           dataIndex: 'status'
         },
         {
           title: '最后登录IP',
           dataIndex: 'login_ip'
         },
         {
           title: '最后登录时间',
           dataIndex: 'login_date'
         },
         {
           title: '部门名称',
           dataIndex: 'dept.dept_name'
         },
         {
           title: '部门负责人',
           dataIndex: 'dept.leader'
         }
       ]
       const tableData=[
         {
           user_id: 1,
           user_name: 'admin',
           email: '15345271705@163.com',
           phonenumber: '15345271705',
           sex: '男',
           status: '正常',
           login_ip: '',
           login_date: '00:00:00',
           'dept.dept_name': '深圳总公司',
           'dept.leader': 'wen'
         },
         {
           user_id: 2,
           user_name: 'password',
           email: null,
           phonenumber: null,
           sex: '未知',
           status: '正常',
           login_ip: null,
           login_date: null,
           'dept.dept_name': '研发部门',
           'dept.leader': 'wen'
         },
       ]
       const excelBaseStyle = {
         font: {
           size: 10,
           bold: true,
           color: { argb: 'ffffff' }
         },
         alignment: { vertical: 'middle', horizontal: 'center' },
         fill: {
           type: 'pattern',
           pattern: 'solid',
           fgColor: { argb: '808080' }
         },
         border: {
           top: { style: 'thin', color: { argb: '9e9e9e' } },
           left: { style: 'thin', color: { argb: '9e9e9e' } },
           bottom: { style: 'thin', color: { argb: '9e9e9e' } },
           right: { style: 'thin', color: { argb: '9e9e9e' } }
         }
       }
       excelJsExport({
         sheetName:'测试',
         style:excelBaseStyle,
         headerColumns:header,
         tableData :tableData
       }).then(()=>{
         console.log(1111)
       })
       
   };
   return (
      <div className='form-layout'>
         <div className='export-btn' onClick={onClick}>导出excel数据</div>
      </div>
   );
};
export default App;