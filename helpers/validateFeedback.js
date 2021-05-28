const Joi = require('joi');

// Validate Input
function validateFeedback(userInput){
  const schema = Joi.object({
    username: Joi.string().min(2).max(30).required(),
    album: Joi.string().min(2).max(50).required(),
    message: Joi.string().min(2).max(255).required()
  });
  return schema.validate(userInput);
}

module.exports = validateFeedback;