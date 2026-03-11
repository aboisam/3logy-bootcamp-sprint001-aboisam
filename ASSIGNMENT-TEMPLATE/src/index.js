/**
 * Sprint 01 - Starter Code Template
 * 
 * This is a basic template to help you get started with your Sprint 01 project.
 * You can customize, modify, or completely replace this code based on your chosen project.
 * 
 * Project Options:
 * - Option 1: Calculator App
 * - Option 2: Quiz Game
 * - Option 3: To-Do List Manager
 * - Option 4: Number Guessing Game (Enhanced)
 * 
 * Author: ABOI SAMSON ABOI 
 * Date: 2026-03-12
 * Bootcamp: 3LOGY Software Development 2026
 */

/// Import readline for user input (Node.js built-in module)
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ==========================================
// GLOBAL VARIABLES
// ==========================================
let tasks = []; // store tasks as objects

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Display welcome message
 */
function displayWelcome() {
  console.log('\n========================================');
  console.log('   Welcome to To-Do List Manager!');
  console.log('========================================\n');
  console.log('Manage your tasks with deadlines, categories, and completion tracking.\n');
}

/**
 * Display main menu
 */
function displayMenu() {
  console.log('\n--- Main Menu ---');
  console.log('1. Add Task');
  console.log('2. View All Tasks');
  console.log('3. Mark Task as Complete');
  console.log('4. Filter Tasks by Category');
  console.log('5. Exit');
  console.log('');
  
  // TODO: Customize menu options for your project
}

/**
 * Validate numeric input
 * @param {string} input - User input to validate
 * @returns {boolean} - True if valid number, false otherwise
 */
function isValidNumber(input) {
  const num = parseFloat(input);
  return !isNaN(num) && isFinite(num);
}

/**
 * Get validated numeric input from user
 * @param {string} prompt - Question to ask user
 * @param {function} callback - Function to call with validated number
 */
function getNumberInput(prompt, callback) {
  rl.question(prompt, (answer) => {
    if (isValidNumber(answer)) {
      callback(parseFloat(answer));
    } else {
      console.log('Error: Please enter a valid number.');
      // Ask again
      getNumberInput(prompt, callback);
    }
  });
}

// ==========================================
// FEATURE FUNCTIONS
// ==========================================

/**
 * Feature 1: [Describe what this does]
 * TODO: Implement your first feature
 */
function feature1() {
  console.log('\n--- Add Task ---');
  rl.question('Enter task title: ', (title) => {
    rl.question('Enter deadline (YYYY-MM-DD HH:MM): ', (deadline) => {
      rl.question('Enter category (Work/Personal/Urgent): ', (category) => {
        const task = {
          id: Date.now(),
          title,
          deadline,
          category,
          completed: false
        };
        tasks.push(task);
        console.log(`Task "${title}" added successfully!`);
        mainLoop();
      });
    });
  });
}

function feature2() {
  console.log('\n--- View All Tasks ---');
  if (tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.title} | Deadline: ${task.deadline} | Category: ${task.category} | Completed: ${task.completed ? '✔' : '❌'}`
      );
    });
  }
  mainLoop();
}

/**
 * Feature 3: [Describe what this does]
 * TODO: Implement your third feature
 */
function feature3() {
  console.log('\n--- Mark Task as Complete ---');
  if (tasks.length === 0) {
    console.log('No tasks to mark.');
    return mainLoop();
  }
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title} [${task.completed ? '✔' : '❌'}]`);
  });
  rl.question('Enter task number to mark complete: ', (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log(`Task "${tasks[index].title}" marked as complete!`);
    } else {
      console.log('Invalid task number.');
    }
    mainLoop();
  });
}

function feature4() {
  console.log('\n--- Filter Tasks by Category ---');
  rl.question('Enter category to filter (Work/Personal/Urgent): ', (category) => {
    const filtered = tasks.filter(task => task.category.toLowerCase() === category.toLowerCase());
    if (filtered.length === 0) {
      console.log(`No tasks found in category "${category}".`);
    } else {
      filtered.forEach((task, index) => {
        console.log(
          `${index + 1}. ${task.title} | Deadline: ${task.deadline} | Completed: ${task.completed ? '✔' : '❌'}`
        );
      });
    }
    mainLoop();
  });
}

function exitProgram() {
  console.log('\nThank you for using To-Do List Manager!');
  console.log('Goodbye! 👋\n');
  rl.close();
}

// ==========================================
// MAIN PROGRAM LOGIC
// ==========================================

function mainLoop() {
  displayMenu();
  rl.question('Enter your choice (1-5): ', (choice) => {
    const option = parseInt(choice);
    switch(option) {
      case 1:
        feature1();
        break;
      case 2:
        feature2();
        break;
      case 3:
        feature3();
        break;
      case 4:
        feature4();
        break;
      case 5:
        exitProgram();
        break;
      default:
        console.log('Invalid choice. Please enter a number between 1 and 5.');
        mainLoop();
    }
  });
}

/**
 * Initialize and start the program
 */
function init() {
  displayWelcome();
  mainLoop();
}

// Start the program
init();
