module.exports = async (req, res) => {
    const { body } = req;
  
    try {
      // Process the request body
      // Perform database operations, validations, etc.
      // Return a response
      res.status(200).json({ message: 'POST request handled successfully', data: body });
    } catch (error) {
      // Handle any errors that occur during processing
      console.error('Error processing POST request:', error);
      res.status(500).json({ error: 'An error occurred while processing the request' });
    }
  };