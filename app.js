const express = require("express")
const app = express();
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT || 3000;
app.use(express.json())
const data = [
    {
        "_id": "635ff1f700cc28a815dc51a8",
        "name": "Pratik Kiran",
        "email": "undopatika@gmail.com",
        "phone": "9902442714",
        "userId": "vayuyastra@001",
        "profilePicture": "",
        "__v": 0
    },
    {
        "_id": "6362109469518f1e1953c7db",
        "name": "Sosthik",
        "email": "sosthikr@gmail.com",
        "phone": "6363418872",
        "userId": "vayuyastra@002",
        "profilePicture": "",
        "__v": 0
    },
    {
        "_id": "636275fdb24240d7cd828b81",
        "name": "Pavan B N",
        "email": "pavangowda80731@gmail.com",
        "phone": "8073149346",
        "userId": "vayuyastra@003",
        "profilePicture": "",
        "__v": 0
    },
    {
        "_id": "636391d57929637f417170c4",
        "name": "B M Prajwal",
        "email": "prajwalbm2003@gmail.com",
        "phone": "6362715171",
        "userId": "vayuyastra@004",
        "profilePicture": "",
        "__v": 0
    },
    {
        "_id": "636394da7929637f417170cf",
        "name": "Harsha",
        "email": "harsham975@gmail.com",
        "phone": "8105236539",
        "userId": "vayuyastra@005",
        "profilePicture": "",
        "__v": 0
    },
    {
        "_id": "6368dc225cb17efc7105f2c0",
        "name": "Kavya B S ",
        "email": "manukavya987@gmail.com",
        "phone": "8296907274",
        "userId": "vayuyastra@006",
        "profilePicture": "",
        "__v": 0
    },
    {
        "_id": "637cb84e57c3d2f32a383c9b",
        "name": "SOSTHIK R",
        "email": "sosthikreddy@gmail.com",
        "phone": "6363418872",
        "userId": "vayuyastra@007",
        "profilePicture": "",
        "__v": 0
    }
]
app.get("/", (req, res) => {
    res.send(data)
})
app.listen(port)
