import './add-employee.css'
const AddEmployee = () => {
    return<div>
        <form action="" id="form" className="employee">
            <h1 className="heading">Add Employee</h1>
            <span>
                EmployeeID
            <input type="text" placeholder="EmployeeID" />
            Employee Dep
            <select name="Department">

           <option value="">Administration/operations</option> 
            <option value="">Research and development</option>
             <option value="">Marketing and sales</option>
            <option value="">Human resources</option>
             <option value="">Customer service</option>
            <option value="">Accounting and finance</option>
            </select>
            </span>
           <span>
            Name
            <input type="text" placeholder="Enter employee's name"/>
           </span>
            <span>
            Email
            <input type="email" placeholder="email" />
            Qualification
            <input type="Email" placeholder="Enter employee's Qualification" />
            </span>
            <span>
            Address
            <input type="text" placeholder="Enter employee's Address"/>
           </span>
            <span>
            Salary
            <input type="text" placeholder="joining salary" />
            Mobile number
            <input type="number" placeholder="Enter employee's mobile number" />
            ID Number
            <input type="text" placeholder="Enter employee's ID number" />
           Gender
            <select name="Gender" id="gender">
            <option value="male">Select Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
            </select>
            </span>

         
        </form>
    </div>
}
export default AddEmployee