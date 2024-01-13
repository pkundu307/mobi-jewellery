const ContactUsModel = require('../model/Issue');

// Function to create a new issue
const createIssue = async (req, res) => {
  try {
    const { email, issue } = req.body;

    // Validate if email and issue are provided
    if (!email || !issue) {
      return res.status(400).json({ error: 'Email and Issue are required fields' });
    }

    // Create a new ContactUs document
    const newIssue = new ContactUsModel({
      email,
      issue,
    });

    // Save the document to the database
    await newIssue.save();

    res.status(201).json({ message: 'Issue created successfully', data: newIssue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to get all issues
const getAllIssues = async (req, res) => {
  try {
    // Fetch all ContactUs documents from the database
    const issues = await ContactUsModel.find();

    res.status(200).json({ data: issues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createIssue,
  getAllIssues,
};
