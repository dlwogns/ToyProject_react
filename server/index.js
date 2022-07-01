const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors({
    origin: '*', // 출처 허용 옵션
    credential: 'true' // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
}));

app.get('/', (req,res) => res.send('hello world'))

app.listen(port, ()=>console.log(`listening on port ${port}`))

app.post('/api/users/login', (req, res) => {
   
})