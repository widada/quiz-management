const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv();
addFormats(ajv);

const validate = (schema) => {
  return (req, res, next) => {
    const validateSchema = ajv.compile(schema);
    const valid = validateSchema(req.body);

    if (!valid) {
      return res.status(400).json({
        message: 'Validation error',
        errors: validateSchema.errors,
      });
    }

    next();
  };
};

module.exports = validate;
