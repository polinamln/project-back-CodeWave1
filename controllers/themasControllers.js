import User from "../models/usersSchema.js";
import { themasUserScema } from "../schemas/userSchemas.js";

export const themasCurrent = async (req, res, next) => {
    const { id } = req.user;

    try {
        const data = {
            thema: req.body.thema,
        }
    
        const userThema = themasUserScema.validate(data);
        if (userThema.error) {
            return res.status(400).json(userThema.error.message);
          }
    
        const user = await User.findByIdAndUpdate (id, userThema.value,
            {
                new: true,
            }
        );

        return res.status(201).json({
           thema: user.thema,
          });
    } catch (e) {
        next(e)        
    }
}