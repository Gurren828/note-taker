const data = require("../../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function (req, res){
        fs.readFile("../../db/db.json", "utf-8", (err, notesResponse) => {
            let allNotes = JSON.parse(notesResponse);
            res.json(allNotes)
            console.log("allNotes")
        })
    })
    app.post("/api/notes", function (req, res){
        fs.readFile("../../db/db.json", "utf-8", (err, notesResponse) => {
            let allNotes = JSON.parse(notesResponse);
            const newNote = req.body;
            allNotes = [...allNotes, newNote];
            console.log("allNotes", allNotes);

            fs.writeFile("../db/db.json", JSON.stringify(allNotes), err => {
                if (err) throw res.status(500).json(err);
                res.json(allNotes);
            })
        })
    })
    app.delete("/api/notes/:id", (req,res) => {
        let noteId = "";
        
        fs.readFile("../../db/db.json", "utf-8", (err, notesResponse) => {
            if (err) throw err;
            const allNotes = JSON.parse(data);
      const newAllNotes = allNotes.filter(note => note.id != noteId);

      fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
        if (err) throw err;
        res.send(data);
        console.log("Note deleted!")
        });
    });
})
};
