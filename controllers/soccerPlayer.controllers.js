const SoccerPlayer = require(" ./../models/soccerPlayer.model");

    exports.createSoccerPlayer = async (req, res) => {
        const { name, phone, category, email, password } = req.body
    
        const soccerPlayer = await SoccerPlayer.create({
            name: name.toLowerCase().trim(),
            phone,
            category : category.toLowerCase().trim(),
            email,
            password,
        })
    res.json({
     message:   "creando jugador"    });
}