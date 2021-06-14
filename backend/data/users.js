// The bcrypt function is the default password hash algorithm
// In the online world, passwords play a critical role in keeping your data and other important information safe. For this reason, ensuring your passwords remain secure is critical.
import bcrypt from 'bcryptjs'
// make users in which one of them is admin
const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        // password has to be hash because we have to encrypt passwords
        // we will use hash sync method which will hash the password syncronasly 
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Doe',
        email:'john@example.com',
        // password has to be hash because we have to encrypt passwords
        password:bcrypt.hashSync('123456',10),
      },
    {
        name:'Jane Doe',
        email:'jane@example.com',
        // password has to be hash because we have to encrypt passwords
        password:bcrypt.hashSync('123456',10),
    },
]
// bcryptjs
export default users